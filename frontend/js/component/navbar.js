export function renderNavbar(){
    const navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
    <nav class="navbar">
        <div class="navbar-right">
            <input type="text" class="input-search" placeholder="Search employee">
            <button class="notification-btn">
                <i class="fa fa-bell"></i>
                <span class="notification-badge">
                    3
                </span>
            </button>
            <div class="user">
                <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile here" class="profile">
                <div class="">
                    <h4 class="">Name here</h4>
                    <p class="">Admin</p>
                </div>
            </div>
        </div>
    </nav>
    `;
}