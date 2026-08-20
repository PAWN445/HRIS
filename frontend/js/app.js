import {renderNavbar} from "./component/navbar.js";
import { renderSidebar } from "./component/sidebar.js";
import { renderDashboard } from "./pages/dashboard.js";
import { renderPage } from "./router.js";

const app = document.querySelector('.app');

app.innerHTML += `<aside class="sidebar"></aside>
                    <div class="main">
                        <nav class="navbar"></nav>
                        <div class="content"></div>
                    </div>`;

renderSidebar();
renderNavbar();
renderDashboard();
renderPage();
