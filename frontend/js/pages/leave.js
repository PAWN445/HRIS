export function renderLeave(){
    const content = document.querySelector('.content');

content.innerHTML += `
    <div class="">
        <div class="employee-header">
                <h1 class="">Leave Management</h1>    
            <div class="header-button">
                <button class="add-employee">+ Apply Leave</button>
                <button class="export-employee">Leave Calendar</button>
            </div>
        </div> 
        <div class="dashboard-info">
            <div class="total-employee">
            <div class="employee-icon">
                <i class="fa fa-users"></i>
            </div>
            <div class="employee-text">
                <p>Total Leave Days</p>
                <h1>128</h1>
                <p>5 from last month</p>
            </div>
            </div>
            <div class="present-today">
            <div class="present-icon">
                <i class="fa fa-user"></i>
            </div>
            <div class="present-text">
                <p>Pending Request</p>
                <h1>96</h1>
                <p>75% of total employees</p>
            </div>
            </div>
            <div class="on-leave">
            <div class="leave-icon">
                <i class="fa-solid fa-calendar"></i>
            </div>
            <div class="leave-text">
                <p>Approved Requests</p>
                <h1>12</h1>
                <p>This week</p>
            </div>
            </div>
            <div class="new-this-month">
            <div class="new-icon">
                <i class="fa-solid fa-user-plus"></i>
            </div>
            <div class="new-text">
                <p>Reject Requests</p>
                <h1>5</h1>
                <p>25% from last month</p>
            </div>
            </div>
        </div>
<div class="table-canvas">
    <div class="canvas-heading">
        <!-- Status Tabs Navigation -->
        <div class="status-tabs">
            <button class="tab-btn active">All Requests</button>
            <button class="tab-btn">Pending</button>
            <button class="tab-btn">Approved</button>
            <button class="tab-btn">Rejected</button>
        </div>

        <!-- Existing Filter Controls -->
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
            <div class="table-body">
                <table class="leave-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Leave Type</th>
                            <th>Date Range</th>
                            <th>Days</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Applied On</th>
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
                            <td>Vacation Leave</td>
                            <td>May 20 - May 24, 2025</td>
                            <td>5</td>
                            <td>Family Vacation</td>
                            <td>Approved</td>
                            <td>April 28, 2025</td>
                            <td>
                                <div class="employee-btn">
                                    <button class="action-btn"><i class="fa fa-eye"></i></button>
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
                            <td>Vacation Leave</td>
                            <td>May 20 - May 24, 2025</td>
                            <td>5</td>
                            <td>Family Vacation</td>
                            <td>Approved</td>
                            <td>April 28, 2025</td>
                            <td>
                                <div class="employee-btn">
                                    <button class="action-btn"><i class="fa fa-eye"></i></button>
                                    <button class="action-btn"><i class="fa fa-ellipsis-h"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;

    document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
}