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
              <div class="nav-brand">fιиєѕѕє υι</div>
              <ui class="list list-inline">
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
            <div class="nav-content nav-content-right">
              <button class="btn btn-icon">
                <i class="fas fa-moon"></i>
              </button>
              <button class="btn btn-primary">Download</button>
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
              )}" href="docs/introduction.html">Introduction</a>
            </li>
          </ul>
        </nav>
        <hr />
        <h5>Components</h5>
        <nav class="nav mbs-16">
          <ul class="list">
          <li><a class="nav-link ${this.isLinkActive(
            activeNav,
            "avatars"
          )}" href="/docs/cards.html">Avatars</a></li>
          <li>
            <li><a class="nav-link ${this.isLinkActive(
              activeNav,
              "cards"
            )}" href="/docs/cards.html">Cards</a></li>
            <li><a class="nav-link ${this.isLinkActive(
              activeNav,
              "alerts"
            )}" href="/docs/alerts.html">Alert</a></li>
            <li><a class="nav-link ${this.isLinkActive(
              activeNav,
              "badges"
            )}" href="/docs/badge.html">Badge</a></li>
            <li><a class="nav-link ${this.isLinkActive(
              activeNav,
              "buttons"
            )}" href="/docs/buttons.html">Buttons</a></li>
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
            ><i class="fa-brands fa-github-square"></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/anupkrbid"
            ><i class="fa-brands fa-twitter-square"></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/anupkrbid/"
            ><i class="fa-brands fa-linkedin"></i
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
