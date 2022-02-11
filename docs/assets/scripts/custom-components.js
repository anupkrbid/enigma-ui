class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const activeNav = this.attributes.active.value;
    this.innerHTML = `
        <header>
          <nav class="nav">
            <div class="nav-content nav-content-left">
              <button class="btn btn-icon ${this.hideSidebarTrigger(
                activeNav
              )}" onclick="finesse.toggleSidebar('#sidebar')">
                <i class="fas fa-bars"></i>
              </button>
              <!-- <div class="nav-brand">fιиєѕѕє υι</div>-->
              <div class="nav-brand">Finesse UI</div>
              <ui class="list list-inline nav-content-hidden d-flex-tablet-onwards">
                <li><a class="nav-link ${this.isLinkActive(
                  activeNav,
                  "home"
                )}" href="/index.html">Home</a></li>
                <li>
                  <a class="nav-link ${this.isLinkActive(
                    activeNav,
                    "documentation"
                  )}" href="/docs/introduction.html">Documentation</a>
                </li>
              </ui>
            </div>
            <div class="nav-content nav-content-right nav-content-hidden d-block-tablet-onwards">
              <button class="btn btn-icon">
                <i class="fas fa-adjust"></i>
              </button>
              <button class="btn btn-primary">
                 Download
              </button>
            </div>
            <div class="nav-content nav-content-mobile d-none-tablet-onwards">
              <button class="btn btn-icon">
                <i class="fas fa-adjust"></i>
              </button>
              <div class="dropdown" data-dropdown>
                <button class="btn" data-dropdown-trigger>
                  Menu
                  <i class="fas fa-caret-square-down"></i>
                </button>
                <div class="dropdown-menu">
                  <ul class="list align-items-stretch">
                    <li><a class="nav-link ${this.isLinkActive(
                      activeNav,
                      "home"
                    )}" href="/index.html">Home</a></li>
                    <li>
                      <a class="nav-link ${this.isLinkActive(
                        activeNav,
                        "documentation"
                      )}" href="/docs/introduction.html"
                        >Documentation</a
                      >
                    </li>
                    <li>
                      <button class="btn btn-primary is-100">Download</button>
                    </li>
                  </ul>
                </div>
              </div>
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
          <ul class="list">
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "introduction"
              )}" href="/docs/introduction.html">Introduction</a>
            </li>
          </ul>
        </nav>
        <hr />
        <h5>Components</h5>
        <nav class="nav mbs-16">
          <ul class="list">
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
                "buttons"
              )}" href="/docs/buttons.html">Buttons</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "images"
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
        Made with ❤️ for developers by developers.
      </div>
      <ul class="list list-inline">
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
