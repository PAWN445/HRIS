

export function renderSidebar() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.innerHTML = `
    <aside class="sidebar">
        <div class="sidebar-header">
        <h2>Side bar</h2>
        </div>
<ul class="list">
    <li data-page="dashboard">
        <i class="fa fa-dashboard"></i>
        <span>Dashboard</span>
    </li>

    <li data-page="employees">
        <i class="fa fa-user"></i>
        <span>Employees</span>
    </li>

    <li data-page="attendance">
        <i class="fa fa-calendar"></i>
        <span>Attendance</span>
    </li>

    <li data-page="leaves">
        <i class="fa fa-calendar-o"></i>
        <span>Leave Management</span>
    </li>

    <li data-page="payrolls">
        <i class="fa fa-money"></i>
        <span>Payroll</span>
    </li>

    <li data-page="recruitment">
        <i class="fa fa-users"></i>
        <span>Recruitment</span>
    </li>

    <li data-page="performance">
        <i class="fa fa-line-chart"></i>
        <span>Performance</span>
    </li>

    <li data-page="departments">
        <i class="fa fa-building"></i>
        <span>Departments</span>
    </li>

    <li data-page="reports">
        <i class="fa fa-file-text"></i>
        <span>Reports</span>
    </li>

    <li data-page="settings">
        <i class="fa fa-cog"></i>
        <span>Settings</span>
    </li>
</ul>
    </aside>`;
}