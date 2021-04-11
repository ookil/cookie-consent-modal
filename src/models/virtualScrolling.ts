/* const th = 100000; // virtual height
const h = 100000; // real scrollable height
const ph = h / 100; // page height
const n = Math.ceil(th / ph); // number of pages
const vp = 400; // viewport height
const rh = 50; // row height
const cj = (th - h) / (n - 1); // "jumpiness" coefficient

let page = 0; // current page
let offset = 0; // current page offset
let prevScrollTop = 0;

const rows: { [key: number]: any } = {}; // cached row nodes

let viewport: HTMLDivElement;
let content: HTMLDivElement;

function init() {
  viewport = document.querySelector('cc-viewport')!;
  content = document.querySelector('cc-content')!;

  console.log(viewport);

  viewport.style.height = `${vp}px`;
  content.style.height = `${h}px`;

  viewport.addEventListener('scroll', onScroll);
}

init();

function onScroll() {
  const scrollTop = viewport.scrollTop;

  if (Math.abs(scrollTop - prevScrollTop) > vp) onJump();
  else onNearScroll();

  renderViewport();
}

function onNearScroll() {
  const scrollTop = viewport.scrollTop;

  // next page
  if (scrollTop + offset > (page + 1) * ph) {
    page++;
    offset = Math.round(page * cj);
    viewport.scrollTop = prevScrollTop = scrollTop - cj;
    removeAllRows();
  }
  // prev page
  else if (scrollTop + offset < page * ph) {
    page--;
    offset = Math.round(page * cj);
    viewport.scrollTop((prevScrollTop = scrollTop + cj));
    removeAllRows();
  } else prevScrollTop = scrollTop;
}

function onJump() {
  const scrollTop = viewport.scrollTop;
  page = Math.floor(scrollTop * ((th - vp) / (h - vp)) * (1 / ph));
  offset = Math.round(page * cj);
  prevScrollTop = scrollTop;

  removeAllRows();
}

function removeAllRows() {
  for (const i in rows) {
    rows[i].remove();
    delete rows[i];
  }
}

function renderViewport() {
  // calculate the viewport + buffer
  const y = viewport.scrollTop + offset;
  const buffer = vp;
  let top = Math.floor((y - buffer) / rh);
  let bottom = Math.ceil((y + vp + buffer) / rh);

  top = Math.max(0, top);
  bottom = Math.min(th / rh, bottom);

  // remove rows no longer in the viewport
  for (const i in rows) {
    if (i < top || i > bottom) {
      rows[i].remove();
      delete rows[i];
    }
  }

  // add new rows
  for (const i = top; i <= bottom; i++) {
    if (!rows[i]) rows[i] = renderRow(i);
  }
}

function renderRow(row: number) {
  let el = document.createElement('div');
  el.className = 'row';
  el.style.cssText = `
      top: ${row * rh - offset}px;
      height: ${rh}px;
  `;
  el.innerText = 'row ' + (row + 1);
  // content.append(el);
  content.append(el);
  return el;
}
 */