class MobileMenu {
  public menu: HTMLElement | null;
  public openButton: HTMLElement | null;

  constructor() {
    this.menu = document.querySelector<HTMLElement>(".site-header__menu")
    this.openButton = document.querySelector<HTMLElement>(".site-header__menu-trigger")
    this.events()
  }

  events() {
    this.openButton?.addEventListener("click", () => this.openMenu())
  }

  openMenu() {
    this.openButton?.classList.toggle("site-header__menu-trigger--open")
    this.openButton?.classList.toggle("site-header__menu-trigger--closed")
    this.menu?.classList.toggle("site-header__menu--active")
  }
}

export default MobileMenu
