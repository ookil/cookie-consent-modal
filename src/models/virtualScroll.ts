import { cookieStorage } from './index';

export class VirtualScroll {
  totalContentHeight: number;
  viewport: HTMLDivElement | undefined;
  content: HTMLDivElement | undefined;
  viewportHeight: number;
  rowHeight: number;
  nodePadding: number;
  rowsData: any;
  rows: { [key: number]: any } = {};
  itemCount: number;
  acceptedVendors: any[];
  setVendors: (list: number[]) => void;

  constructor(
    rowsData: any,
    viewportHeight: number,
    rowHeight: number,
    nodePadding: number,
    setVendors: (list: number[]) => void
  ) {
    this.rowsData = rowsData;
    this.totalContentHeight = Object.keys(rowsData).length * rowHeight;
    this.itemCount = Object.keys(rowsData).length;
    this.viewportHeight = viewportHeight;
    this.rowHeight = rowHeight;
    this.nodePadding = nodePadding;
    this.rows = {};
    this.acceptedVendors = [];
    this.setVendors = setVendors;
  }

  onScroll() {
    this.renderViewport();
  }

  handleClick(i: number, id: number) {
    const button = window.document.getElementById(`vendor-${i}`);

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

  renderViewport() {
    const viewport = window.document.querySelector('.cc-viewport')!;

    const vendorsList = Object.keys(this.rowsData).map((key) => {
      return this.rowsData[key];
    });

    let startNode =
      Math.floor(viewport.scrollTop / this.rowHeight) - this.nodePadding;
    startNode = Math.max(0, startNode);

    let renderedNodeCount =
      Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.nodePadding;
    renderedNodeCount = Math.min(this.itemCount - startNode, renderedNodeCount);

    // remove rows not in viewport
    for (let i in this.rows) {
      if (
        parseInt(i) < startNode ||
        parseInt(i) > startNode + renderedNodeCount
      ) {
        this.rows[i].remove();
        delete this.rows[i];
      }
    }

    //add rows
    for (let i = startNode; i <= startNode + renderedNodeCount; i++) {
      if (!this.rows[i]) {
        this.rows[i] = this.renderRow(vendorsList[i], i);
      }
    }
  }

  init() {
    const container = window.document.createElement('div');

    this.viewport = window.document.createElement('div');
    this.viewport.classList.add('cc-viewport');
    this.viewport.style.height = `${this.viewportHeight}`;

    this.content = window.document.createElement('div');
    this.content.classList.add('cc-content');
    this.content.style.height = `${this.totalContentHeight}`;

    this.viewport.appendChild(this.content);
    this.viewport.onscroll = this.onScroll.bind(this);

    const scrollBox = container.appendChild(this.viewport);

    return scrollBox;
  }
}
