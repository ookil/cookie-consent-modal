import { cookieStorage } from './index';
import { VirtualScroll } from './virtualScroll';

type CookieModalOptions = {
  cName: string;
  cExpire: number;
  title: string;
  description: string;
};

const defaultOptions: CookieModalOptions = {
  cName: 'gdpr_consent',
  cExpire: 1,
  title: 'GDRP Consent',
  description:
    'This site uses cookies. Please accept or reject cookie policy for given vendor.',
};

export class CookieConsentModal {
  modalId: string = 'ccModal';
  window: Window & typeof globalThis;
  parentElement: Element;
  modalBox: HTMLDivElement | undefined;
  modalHeader: HTMLDivElement | undefined;
  isOpen: boolean = false;
  options: CookieModalOptions;
  vendorsList: any;
  selectedVendors: number[];
  buttonSave: HTMLButtonElement | undefined;

  constructor(
    window: Window & typeof globalThis,
    parentElement: Element,
    vendorsList: any,
    options: Partial<CookieModalOptions>
  ) {
    this.window = window;
    this.parentElement = parentElement;
    this.vendorsList = vendorsList;
    this.options = { ...defaultOptions, ...options };
    this.selectedVendors = [];
  }

  handleAcceptAll() {
    const vendorsIds = Object.keys(this.vendorsList).map((key) => {
      return this.vendorsList[key].id;
    });

    cookieStorage.setItem(
      this.options.cName,
      vendorsIds.toString(),
      this.options.cExpire
    );
    this.closeModal();
  }

  handleAccept() {
    cookieStorage.setItem(
      this.options.cName,
      this.selectedVendors.toString(),
      this.options.cExpire
    );
    this.closeModal();
  }

  setVendors(list: number[]) {
    this.selectedVendors = list;
    if (this.selectedVendors.length > 0) {
      this.buttonSave?.classList.add('show');
    } else {
      this.buttonSave?.classList.remove('show');
    }
  }

  openModal() {
    const virtualScroll = new VirtualScroll(
      this.vendorsList,
      400,
      45,
      3,
      this.setVendors.bind(this)
    );

    const vendorsScrollList = virtualScroll.init();

    //build modal
    const modalContainer = this.window.document.createElement('div');
    modalContainer.id = this.modalId;
    modalContainer.classList.add('cc-container');

    this.modalBox = this.window.document.createElement('div');
    this.modalBox.classList.add('cc-modalBox');

    const modalHeader = this.window.document.createElement('div');
    modalHeader.classList.add('cc-modalHeader');

    const modalTitle = this.window.document.createElement('h3');
    modalTitle.classList.add('cc-modal-title');
    modalTitle.innerText = this.options.title;

    const description = this.window.document.createElement('div');
    description.classList.add('cc-description');
    description.innerText = this.options.description;

    const buttonsWrapper = this.window.document.createElement('div');
    buttonsWrapper.classList.add('cc-buttonsWrapper', 'btns-main');

    const buttonClose = this.window.document.createElement('button');
    buttonClose.addEventListener('click', this.closeModal.bind(this));
    buttonClose.classList.add('btn', 'btn-close');
    buttonClose.innerText = 'Reject All';

    const buttonAccept = this.window.document.createElement('button');
    buttonAccept.addEventListener('click', this.handleAcceptAll.bind(this));
    buttonAccept.classList.add('btn', 'btn-accept');
    buttonAccept.innerText = 'Accept All';

    this.buttonSave = this.window.document.createElement('button');
    this.buttonSave.addEventListener('click', this.handleAccept.bind(this));
    this.buttonSave.classList.add('btn', 'btn-save');
    this.buttonSave.innerText = 'Save Choices';

    modalHeader.appendChild(modalTitle);
    buttonsWrapper.appendChild(buttonAccept);
    buttonsWrapper.appendChild(buttonClose);
    buttonsWrapper.appendChild(this.buttonSave);

    this.modalBox.appendChild(modalHeader);
    this.modalBox.appendChild(description);

    this.modalBox.appendChild(vendorsScrollList);

    this.modalBox.appendChild(buttonsWrapper);
    modalContainer.appendChild(this.modalBox);

    this.parentElement.appendChild(modalContainer);

    //show modal
    this.isOpen = true;
    modalContainer.classList.add('show');
    modalContainer.classList.remove('hide');
    this.window.document.body.classList.add('disable-scroll');
  }

  closeModal() {
    const modalContainer = this.window.document.getElementById(this.modalId)!;
    modalContainer.classList.remove('show');
    modalContainer.classList.add('hide');
    this.window.document.body.classList.remove('disable-scroll');
  }
}
