class centrixHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header id="header" class="header header-static-position">
        <nav class="header-nav">
          <ul class="header-nav-list">

            <!-- Mobile sidebar toggle (hidden from lg up) -->
            <li class="nav-item d-lg-none nav-mobile-toggle">
              <a class="nav-link toggle-sidebar-btn" href="javascript:void(0)">
                <img src="../assets/images/icon/toggle-menu-black.svg" alt="menu" class="d-block">
              </a>
            </li>

            <!-- Notification -->
            <li class="nav-item dropdown">
              <a class="nav-link nav-notification" href="#" data-bs-toggle="dropdown">
                <img src="../assets/images/icon/notification-black.svg" alt="notification" class="notification-icon d-block">
              </a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a class="dropdown-item" href="profile.html">
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Profile -->
            <li class="nav-item dropdown">
              <a class="nav-link nav-profile" href="#" data-bs-toggle="dropdown">
                <span class="d-none d-md-block dropdown-toggle">Hello, John Doe</span>
                <img src="../assets/images/profile.png" alt="Profile" class="rounded-circle">
              </a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a class="dropdown-item" href="profile.html">
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Theme Option -->
            <li class="nav-item dropdown">
              <a class="nav-link theme-option-bar" href="#" data-bs-toggle="dropdown">
                <img src="../assets/images/icon/toggle-menu-black.svg" alt="icon" class="theme-option-bar">
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <!-- Sidebar -->
      <aside id="sidebar" class="sidebar">
        <div class="header-logo">
          <a href="index.html" class="logo">
            <img class="sidebar-logo" src="../assets/images/icon/logo-b.svg" alt="logo">
          </a>
          <img src="../assets/images/icon/toggle-menu-black.svg" alt="logo" class="bars toggle-sidebar-btn">
        </div>

        <ul class="sidebar-nav tree" id="sidebar-nav" data-widget="tree">

          <!-- NAVIGATION -->
          <li class="tree-header"><span class="tree-header-text">NAVIGATION</span></li>
          <li class="treeview">
            <a class="treeview-link" href="index.html">
              <img class="sidebar-icon" src="../assets/images/icon/dashboard.svg" alt="icon">
              <p>Dashboard</p>
            </a>
          </li>

          <!-- Kits -->
          <li class="treeview">
            <a class="treeview-link" href="#">
              <img class="sidebar-icon" src="../assets/images/icon/kits.svg" alt="icon">
              <p>Kits</p><span class="menu-toggle"></span>
            </a>
            <ul class="treeview-menu">

              <!-- Projects -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Projects</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="projects.html"><p>Dashboard</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="project-tasks.html"><p>Project Tasks</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="create.html"><p>Create</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="edit.html"><p>Edit</p></a></li>
                </ul>
              </li>

              <!-- Jobs -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Jobs</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="jobs.html"><p>Dashboard</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="listing.html"><p>Listing</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="apply.html"><p>Apply</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="post.html"><p>Post</p></a></li>
                </ul>
              </li>

              <!-- Education -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Education</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="education.html"><p>Dashboard</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="course.html"><p>Course</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="authors.html"><p>Authors</p></a></li>
                </ul>
              </li>

              <!-- Forum -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Forum</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="categories.html"><p>Categories</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="topics.html"><p>Topics</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="discussion.html"><p>Discussion</p></a></li>
                </ul>
              </li>

            </ul>
          </li>

          <!-- Base -->
          <li class="tree-header"><span class="tree-header-text">Base</span></li>
          <li class="treeview">
            <a class="treeview-link" href="#">
              <img class="sidebar-icon" src="../assets/images/icon/widgets.svg" alt="icon">
              <p>Widgets</p><span class="menu-toggle"></span>
            </a>
            <ul class="treeview-menu">
              <li class="treeview"><a class="treeview-link" href="tiles.html"><p>Tiles</p></a></li>
              <li class="treeview"><a class="treeview-link" href="statistics.html"><p>Statistics</p></a></li>
              <li class="treeview"><a class="treeview-link" href="media.html"><p>Media</p></a></li>
              <li class="treeview"><a class="treeview-link" href="users.html"><p>Users</p></a></li>
              <li class="treeview"><a class="treeview-link" href="blog.html"><p>Blog</p></a></li>
            </ul>
          </li>

          <!-- Layout -->
          <li class="treeview">
            <a class="treeview-link" href="#">
              <img class="sidebar-icon" src="../assets/images/icon/layout.svg" alt="icon">
              <p>Layout</p><span class="menu-toggle"></span>
            </a>
            <ul class="treeview-menu">
              <!-- Main Content -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Main Content</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="full-width.html"><p>Full Width</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="space.html"><p>Space</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="centered.html"><p>Centered</p></a></li>
                </ul>
              </li>

              <!-- Detail Content -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Detail Content</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="right.html"><p>Right</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="left.html"><p>Left</p></a></li>
                </ul>
              </li>

              <!-- Header -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Header</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="header-fixed.html"><p>Fixed</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="header-static.html"><p>Static</p></a></li>
                </ul>
              </li>

              <!-- Footer -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Footer</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="footer-fixed.html"><p>Fixed</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="footer-static.html"><p>Static</p></a></li>
                </ul>
              </li>

              <!-- Left Sidebar -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Left Sidebar</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="left-sidebar-closed.html"><p>Closed</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="left-sidebar-hidden.html"><p>Hidden</p></a></li>
                </ul>
              </li>

              <!-- Right Sidebar -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Right Sidebar</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="right-sidebar-visible.html"><p>Visible</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="right-sidebar-hover.html"><p>Hover</p></a></li>
                </ul>
              </li>

              <li class="treeview"><a class="treeview-link" href="api.html"><p>Api</p></a></li>
            </ul>
          </li>

          <!-- Interface -->
          <li class="tree-header"><span class="tree-header-text">Interface</span></li>
          <li class="treeview">
            <a class="treeview-link" href="#">
              <img class="sidebar-icon" src="../assets/images/icon/elemetns.svg" alt="icon">
              <p>Elements</p><span class="menu-toggle"></span>
            </a>
            <ul class="treeview-menu">
              <li class="treeview"><a class="treeview-link" href="icon-packs.html"><p>Icon Packs</p></a></li>
              <li class="treeview"><a class="treeview-link" href="grid.html"><p>Grid</p></a></li>
              <li class="treeview"><a class="treeview-link" href="typography.html"><p>Typography</p></a></li>
              <li class="treeview"><a class="treeview-link" href="navigation.html"><p>Navigation</p></a></li>
              <li class="treeview"><a class="treeview-link" href="horizontal-nav.html"><p>Horizontal Nav</p></a></li>

              <!-- Mega Menu -->
              <li class="treeview">
                <a class="treeview-link" href="#">
                  <p>Mega Menu</p><span class="menu-toggle"></span>
                </a>
                <ul class="treeview-menu">
                  <li class="treeview"><a class="treeview-link" href="mega-menu-normal.html"><p>Normal</p></a></li>
                  <li class="treeview"><a class="treeview-link" href="mega-menu-detailed.html"><p>Detailed</p></a></li>
                </ul>
              </li>

              <li class="treeview"><a class="treeview-link" href="tabs.html"><p>Tabs</p></a></li>
              <li class="treeview"><a class="treeview-link" href="buttons.html"><p>Buttons</p></a></li>
              <li class="treeview"><a class="treeview-link" href="dropdowns.html"><p>Dropdowns</p></a></li>
              <li class="treeview"><a class="treeview-link" href="progress.html"><p>Progress</p></a></li>
              <li class="treeview"><a class="treeview-link" href="tooltips.html"><p>Tooltips</p></a></li>
              <li class="treeview"><a class="treeview-link" href="popovers.html"><p>Popovers</p></a></li>
              <li class="treeview"><a class="treeview-link" href="accordion.html"><p>Accordion</p></a></li>
              <li class="treeview"><a class="treeview-link" href="modals.html"><p>Modals</p></a></li>
              <li class="treeview"><a class="treeview-link" href="image-overlay.html"><p>Image Overlay</p></a></li>
              <li class="treeview"><a class="treeview-link" href="ribbons.html"><p>Ribbons</p></a></li>
              <li class="treeview"><a class="treeview-link" href="steps.html"><p>Steps</p></a></li>
              <li class="treeview"><a class="treeview-link" href="backgrounds.html"><p>Backgrounds</p></a></li>
              <li class="treeview"><a class="treeview-link" href="color-themes.html"><p>Color Themes</p></a></li>
            </ul>
          </li>

          <!-- Tables -->
          <li class="treeview">
            <a class="treeview-link" href="#">
              <img class="sidebar-icon" src="../assets/images/icon/tables.svg" alt="icon">
              <p>Tables</p><span class="menu-toggle"></span>
            </a>
            <ul class="treeview-menu">
              <li class="treeview"><a class="treeview-link" href="tables-styles.html"><p>Styles</p></a></li>
              <li class="treeview"><a class="treeview-link" href="tables-responsive.html"><p>Responsive</p></a></li>
              <li class="treeview"><a class="treeview-link" href="tables-helpers.html"><p>Helpers</p></a></li>
            </ul>
          </li>

          <!-- Forms -->
          <li class="treeview">
            <a class="treeview-link" href="#">
              <img class="sidebar-icon" src="../assets/images/icon/forms.svg" alt="icon">
              <p>Forms</p><span class="menu-toggle"></span>
            </a>
            <ul class="treeview-menu">
              <li class="treeview"><a class="treeview-link" href="elements.html"><p>Elements</p></a></li>
              <li class="treeview"><a class="treeview-link" href="layouts.html"><p>Layouts</p></a></li>
              <li class="treeview"><a class="treeview-link" href="account.html"><p>Account</p></a></li>
            </ul>
          </li>

        </ul>
      </aside>
      <div id="theme-option" class="theme-option">
    <div class="theme-option-header">
        <div class="user">
            <div class="user-profile">
                <img src="../assets/images/profile.png" alt="Profile" class="rounded-circle">
                <span class="user-name">Hello, John Doe</span>
            </div>
            <div class="close-option">
                <img src="../assets/images/icon/close-option.svg" alt="icon" class="close-option">
            </div>
        </div>
    </div>
    <div class="theme-option-content">

        <!-- Primary Color -->
        <div class="option-box">
            <div class="option-title"><p>Primary Color</p></div>
            <div class="option-item">
                <div class="color-plate">
                    <a class="btn theme-primary" id="ColorFirst" onclick="ColorFirst()" href="#">Default</a>
                    <a class="btn theme-secondary" id="ColorSecond" onclick="ColorSecond()" href="#">Default</a>
                    <a class="btn theme-meta" id="ColorThird" onclick="ColorThird()" href="#">Default</a>
                    <a class="btn theme-content active" id="ColorFour" onclick="ColorFour()" href="#">Default</a>
                </div>
            </div>
        </div>

        <!-- Theme -->
        <div class="option-box">
            <div class="option-title"><p>Theme</p></div>
            <div class="option-item">
                <div class="option-btn-item mode-change">
                    <a class="option-btn mode-light active" id="light" onclick="toggleLight()" href="#">Light 
                        <img src="../assets/images/icon/light-mode.svg" alt="icon"></a>
                    <a class="option-btn mode-dark" id="dark" onclick="toggleDark()" href="#">Dark 
                        <img src="../assets/images/icon/dark-mode.svg" alt="icon"></a>
                </div>
            </div>
        </div>

        <!-- Header Position -->
        <div class="option-box">
            <div class="option-title"><p>Header Position</p></div>
            <div class="option-item">
                <div class="option-btn-item header-position">
                    <a class="option-btn header-fixed" id="positionfixed" onclick="PositionFixed()" href="#">Fixed</a>
                    <a class="option-btn header-static active" id="positionstatic" onclick="PositionStatic()" href="#">Static</a>
                </div>
            </div>
        </div>

        <!-- Footer Position -->
        <div class="option-box">
            <div class="option-title"><p>Footer Position</p></div>
            <div class="option-item">
                <div class="option-btn-item footer-position">
                    <a class="option-btn footer-fixed" id="footerpositionfixed" onclick="FooterPositionFixed()" href="#">Fixed</a>
                    <a class="option-btn footer-static active" id="footerpositionstatic" onclick="FooterPositionStatic()" href="#">Static</a>
                </div>
            </div>
        </div>

        <!-- Container Layout -->
        <div class="option-box">
            <div class="option-title"><p>Container</p></div>
            <div class="option-item">
                <div class="option-btn-item layout-frame">
                    <a class="option-btn layout-space" id="SpaceLayout" onclick="SpaceLayout()" href="#">Space</a>
                    <a class="option-btn layout-centered" id="CenteredLayout" onclick="CenteredLayout()" href="#">Centered</a>
                    <a class="option-btn layout-fullwidth active" id="FullwidthLayout" onclick="FullwidthLayout()" href="#">Full Width</a>
                </div>
            </div>
        </div>
    </div>
</div>

    `;

        // Highlight current page and expand its tree path
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        this.querySelectorAll(".treeview-link").forEach(link => {
            const href = link.getAttribute("href");
            if (href && href === currentPage) {
                link.classList.add("active");

                let item = link.closest("li.treeview");
                while (item) {
                    item.classList.add("active", "menu-open");
                    const menu = item.querySelector(":scope > ul.treeview-menu");
                    if (menu) {
                        menu.style.display = "block";
                    }
                    item = item.parentElement ? item.parentElement.closest("li.treeview") : null;
                }
            }
        });
    }
}

customElements.define("centrix-header", centrixHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer" class="footer footer-static-position">
            <div class="footer-container">
                <div class="row footer_row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="copyright">
                            <p>Centrix 1.0 © 2025</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="design-by">
                            <p>Crafted with Love by 
                                <a href="https://www.uptechies.com/" target="_blank">Uptechies</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    }
}
customElements.define('centrix-footer', MyFooter);