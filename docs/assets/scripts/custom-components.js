class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const activeNav = this.attributes.active.value;
    this.innerHTML = `
    <header>
      <nav class="nav">
        <div class="nav-brand-container">
          <button
            class="btn btn-icon ${this.hideSidebarTrigger(
              activeNav
            )} d-none-above-laptop-mini"
            onclick="finesse.toggleSidebar('#sidebar')"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="nav-brand">Finess UI</div>
        </div>

        <!-- For Laptop and Above -->
        <div class="nav-content d-none-below-laptop-mini">
          <div class="row align-items-center">
            <div class="col-6">
              <ui class="list list-inline list-items-spaced">
                <li>
                  <a
                    class="nav-link ${this.isLinkActive(activeNav, "home")}"
                    href="/index.html"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    class="nav-link ${this.isLinkActive(
                      activeNav,
                      "documentation"
                    )}"
                    href="/docs/usage.html"
                    >Documentation</a
                  >
                </li>
              </ui>
            </div>

            <div class="col-6">
              <ul
                class="list list-inline list-items-gapped d-flex justify-content-flex-end"
              >
                <li>
                  <button class="btn btn-icon">
                    <i class="fas fa-adjust"></i>
                  </button>
                </li>
                <li>
                  <button class="btn btn-primary">Download</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- For Below Laptop -->
        <div
          class="nav-content d-flex justify-content-flex-end d-none-above-laptop-mini"
        >
          <ul class="list list-inline list-items-gapped">
            <li>
              <button class="btn btn-icon">
                <i class="fas fa-adjust"></i>
              </button>
            </li>
            <li>
              <div class="dropdown" data-dropdown>
                <button class="btn" data-dropdown-trigger>
                  Menu
                  <i class="fas fa-caret-square-down" data-dropdown-trigger></i>
                </button>
                <div class="dropdown-menu">
                  <ul class="list align-items-stretch list-items-gapped">
                    <li>
                      <a
                        class="nav-link ${this.isLinkActive(activeNav, "home")}"
                        href="/index.html"
                        >Home</a
                      >
                    </li>
                    <li>
                      <a
                        class="nav-link ${this.isLinkActive(
                          activeNav,
                          "documentation"
                        )}"
                        href="/docs/usage.html"
                        >Documentation</a
                      >
                    </li>
                    <li>
                      <button class="btn btn-primary is-100">Download</button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
      `;
  }

  isLinkActive(attrValue, linkName) {
    return attrValue === linkName ? "nav-link-active" : "";
  }

  hideSidebarTrigger(attrValue) {
    return attrValue === "home" ? "d-none" : "";
  }
}

class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const activeNav = this.attributes.active.value;
    this.innerHTML = `
      <section class="sidebar pb-16 pi-16">
        <h5>Getting Started</h5>
        <nav class="nav mbs-16">
          <ul class="list list-items-gapped">
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "usage"
              )}" href="/docs/usage.html">Usage</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "typography"
              )}" href="/docs/typography.html">Typography</a>
            </li>
          </ul>
        </nav>
        <hr />
        <h5>Components</h5>
        <nav class="nav mbs-16">
          <ul class="list list-items-gapped">
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "avatars"
              )}" href="/docs/avatars.html">Avatars</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "badges"
              )}" href="/docs/badges.html">Badge</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "cards"
              )}" href="/docs/cards.html">Cards</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "alerts"
              )}" href="/docs/alerts.html">Alerts</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "lists"
              )}" href="/docs/lists.html">Lists</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "buttons"
              )}" href="/docs/buttons.html">Buttons</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "responsive-images"
              )}" href="/docs/responsive-images.html">Responsive Images</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "form-elements"
              )}" href="/docs/form-elements.html">Form Elements</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "navigation"
              )}" href="/docs/navigation.html">Navigation</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "modal"
              )}" href="/docs/modal.html">Modal</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "toast"
              )}" href="/docs/toast.html">Toast</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "rating-system"
              )}" href="/docs/rating-system.html">Rating System</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "grid-system"
              )}" href="/docs/grid-system.html">Grid System</a>
            </li>
          </ul>
        </nav>
      </section>
      `;
  }

  isLinkActive(attrValue, linkName) {
    return attrValue === linkName ? "nav-link-active" : "";
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-header">
        Made with <i class="fas fa-code"></i> and lots of ❤️ for developers by a developer.
      </div>
      <ul class="list list-inline list-items-gapped">
        <li>
          <a target="_blank" href="https://github.com/anupkrbid"
            ><i class="fab fa-github-square"></i></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/anupkrbid"
            ><i class="fab fa-twitter-square"></i></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/anupkrbid/"
            ><i class="fab fa-linkedin"></i></i
          ></a>
        </li>
      </ul>
    </footer>
      `;
  }
}

customElements.define("custom-header", Header);
customElements.define("custom-sidebar", Sidebar);
customElements.define("custom-footer", Footer);
