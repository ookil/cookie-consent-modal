export class VirtualScroll {
  viewport: HTMLDivElement | undefined;
  content: HTMLDivElement | undefined;
  viewportHeight: number;
  rowHeight: number;
  nodePadding: number;
  rows: { [key: number]: any } = {};
  itemCount: number;
  acceptedVendors: number[];
  setVendors: (list: number[]) => void;
  vendorsList: any[];

  constructor(
    rowsData: any,
    viewportHeight: number,
    rowHeight: number,
    nodePadding: number,
    setVendors: (list: number[]) => void
  ) {
    this.vendorsList = Object.keys(rowsData).map((key) => rowsData[key]);
    this.itemCount = this.vendorsList.length;
    this.viewportHeight = viewportHeight;
    this.rowHeight = rowHeight;
    this.nodePadding = nodePadding;
    this.rows = {};
    this.acceptedVendors = [];
    this.setVendors = setVendors;
  }

  onScroll() {
    const viewport = window.document.querySelector(
      '.cc-viewport'
    ) as HTMLDivElement;

    const startNode = this.getStartNode(viewport);

    const endNode = this.getEndNode(startNode);

    // remove rows not in viewport
    for (let i in this.rows) {
      if (parseInt(i) < startNode || parseInt(i) > endNode) {
        this.rows[i].remove();
        delete this.rows[i];
      }
    }

    //add rows
    for (let i = startNode; i <= endNode; i++) {
      if (!this.rows[i]) {
        this.rows[i] = this.renderRow(this.vendorsList[i], i);
      }
    }
  }

  handleClick(i: number, id: number) {
    const button = window.document.getElementById(`vendor-${i}`);

    // keep track of accepted vendors
    if (!this.acceptedVendors.includes(id)) {
      this.acceptedVendors.push(id);
      button?.classList.add('accepted');
    } else {
      const newVendors = this.acceptedVendors.filter((acceptedId) => {
        return acceptedId !== id;
      });

      this.acceptedVendors = newVendors;

      button?.classList.remove('accepted');
    }
    this.setVendors(this.acceptedVendors);
  }

  renderRow(item: any, i: number) {
    const row = window.document.createElement('div');
    row.classList.add('list-item');

    // based on rowHeight calculate position
    row.style.height = `${this.rowHeight}`;
    row.style.top = `${i * this.rowHeight + 10}`;

    const vendorInfo = window.document.createElement('div');
    vendorInfo.classList.add('list-item--info');

    const vendorName = window.document.createElement('p');
    vendorName.classList.add('list-item--title');
    vendorName.innerText = item.name;

    const vendorPolicyLink = window.document.createElement('a');
    vendorPolicyLink.classList.add('list-item--link');
    vendorPolicyLink.href = item.policyUrl;
    vendorPolicyLink.innerText = 'Read cookie policy here';

    // buttons
    const buttonsWrapper = window.document.createElement('div');
    buttonsWrapper.classList.add('cc-buttonsWrapper', 'ml-auto');

    const buttonAccept = window.document.createElement('button');
    buttonAccept.addEventListener('click', () => this.handleClick(i, item.id));
    buttonAccept.classList.add('btn', 'btn-accept');
    buttonAccept.id = `vendor-${i}`;

    if (this.acceptedVendors.includes(item.id)) {
      buttonAccept?.classList.add('accepted');
    }

    buttonAccept.innerText = 'Accept';

    buttonsWrapper.appendChild(buttonAccept);

    vendorInfo.appendChild(vendorName);
    vendorInfo.appendChild(vendorPolicyLink);

    row.appendChild(vendorInfo);
    row.appendChild(buttonsWrapper);

    this.content?.appendChild(row);
    return row;
  }

  getStartNode(viewport: HTMLDivElement) {
    // get first node to render, with nodePadding in account
    //a/ if current scrollTop = 92 and rowHeight=30 first node would be 3
    //b/ but with nodePadding = 2 we want to start rendering two nodes before to give some better scrolling experience
    // but we cannot allow for startNode to be negative, so if a-b < 0 startNode will be 0
    let startNode =
      Math.floor(viewport.scrollTop / this.rowHeight) - this.nodePadding;
    startNode = Math.max(0, startNode);

    return startNode;
  }

  getEndNode(startNode: number) {
    // count hany many nodes we can render
    // add paddings at the beginning and end
    let renderedNodeCount =
      Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.nodePadding;
    renderedNodeCount = Math.min(this.itemCount - startNode, renderedNodeCount);

    // return final endNode
    return startNode + renderedNodeCount;
  }

  init() {
    // build viewport and content
    const totalContentHeight = this.vendorsList.length * this.rowHeight;

    const container = window.document.createElement('div');

    this.viewport = window.document.createElement('div');
    this.viewport.classList.add('cc-viewport');
    this.viewport.style.height = `${this.viewportHeight}`;

    this.content = window.document.createElement('div');
    this.content.classList.add('cc-content');
    this.content.style.height = `${totalContentHeight}`;

    this.viewport.appendChild(this.content);

    // add event to listen for scroll and recalculate rows
    this.viewport.onscroll = this.onScroll.bind(this);

    const scrollBox = container.appendChild(this.viewport);

    // calculate the initial rows to show
    const startNode = this.getStartNode(this.viewport);

    const endNode = this.getEndNode(startNode);

    //add rows
    for (let i = startNode; i <= endNode; i++) {
      if (!this.rows[i]) {
        this.rows[i] = this.renderRow(this.vendorsList[i], i);
      }
    }

    return scrollBox;
  }
}
