export function renderEmployees(){
    const content = document.querySelector('.content');

content.innerHTML += `
    <div class="employee-content">
    <div class="employee-header">
            <h1 class="">Employees</h1>    
    <div class="header-button">
            <button class="add-employee">+ Add Employee</button>
            <button class="export-employee">Export</button>
    </div>
    </div>
            <div class="dashboard-info">
            <div class="total-employee">
            <div class="employee-icon">
                <i class="fa fa-users"></i>
            </div>
            <div class="employee-text">
                <p>Total Employee</p>
                <h1>128</h1>
                <p>5 from last month</p>
            </div>
            </div>
            <div class="present-today">
            <div class="present-icon">
                <i class="fa fa-user"></i>
            </div>
            <div class="present-text">
                <p>Active Employees</p>
                <h1>96</h1>
                <p>75% of total employees</p>
            </div>
            </div>
            <div class="on-leave">
            <div class="leave-icon">
                <i class="fa fa-calendar-o"></i>
            </div>
            <div class="leave-text">
                <p>On Leave</p>
                <h1>12</h1>
                <p>This week</p>
            </div>
            </div>
            <div class="new-this-month">
            <div class="new-icon">
                <i class="fa fa-user-plus"></i>
            </div>
            <div class="new-text">
                <p>New this Month</p>
                <h1>5</h1>
                <p>25% from last month</p>
            </div>
            </div>
        </div>

        <div class="employee-canvas">
            <div class="employee-canvas-header">
                <div class="search-box">
                    <i class="fa fa-search"></i>
                    <input type="text" class="search-input" placeholder="Search by name, position or department...">
                </div>
                
                <div class="filter-controls">
                    <select class="filter-select">
                        <option>All Departments</option>
                        <option>IT Department</option>
                        <option>HR Department</option>
                        <option>Finance Department</option>
                    </select>
                    
                    <select class="filter-select">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>On Leave</option>
                    </select>
                    
                    <button class="filter-btn">
                        <i class="fa fa-filter"></i> Filter
                    </button>
                </div>
            </div>
            <div class="employee-body">
                <table class="employee-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Position</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Hire Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="employee-name">
                                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile here" alt="profile here">
                                    <div class="employee-info">
                                        <span class="name">Juan Dela Cruz</span>
                                        <span class="emp-number">EMP-001</span>
                                    </div>
                                </div>
                            </td>
                            <td>Software Engineer</td>
                            <td>IT Department</td>
                            <td>Active</td>
                            <td>Jan 15, 2022</td>
                            <td>
                                <div class="employee-btn">
                                    <button class="action-btn"><i class="fa fa-eye"></i></button>
                                    <button class="action-btn"><i class="fa fa-pencil"></i></button>
                                    <button class="action-btn"><i class="fa fa-ellipsis-h"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="employee-name">
                                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile here" alt="profile here">
                                    <div class="employee-info">
                                        <span class="name">Juan Dela Cruz</span>
                                        <span class="emp-number">EMP-001</span>
                                    </div>
                                </div>
                            </td>
                            <td>Software Engineer</td>
                            <td>IT Department</td>
                            <td>Active</td>
                            <td>Jan 15, 2022</td>
                            <td>
                                <div class="employee-btn">
                                    <button class="action-btn"><i class="fa fa-eye"></i></button>
                                    <button class="action-btn"><i class="fa fa-pencil"></i></button>
                                    <button class="action-btn"><i class="fa fa-ellipsis-h"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="employee-name">
                                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile here" alt="profile here">
                                    <div class="employee-info">
                                        <span class="name">Juan Dela Cruz</span>
                                        <span class="emp-number">EMP-001</span>
                                    </div>
                                </div>
                            </td>
                            <td>Software Engineer</td>
                            <td>IT Department</td>
                            <td>Active</td>
                            <td>Jan 15, 2022</td>
                            <td>
                                <div class="employee-btn">
                                    <button class="action-btn"><i class="fa fa-eye"></i></button>
                                    <button class="action-btn"><i class="fa fa-pencil"></i></button>
                                    <button class="action-btn"><i class="fa fa-ellipsis-h"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
}