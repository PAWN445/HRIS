export function renderDashboard(){
    const content = document.querySelector('.content');


    content.innerHTML += `
    <div class="dashboard">

    <div class="dashboard-head">
        <div class="header-text">
            <h1 class="">Welcome back, Juan!</h1>
            <p class="">Here's what's happening in your organization today!</p>
        </div>

        <div class="header-date">
            <i class="fa fa-calendar"></i>
            <div class="dates">
                <span class="">May 2, 1999</span>
                <span class="">Tuesday</span>
            </div>
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
                <i class="fa-solid fa-calendar-check"></i>
            </div>
            <div class="present-text">
                <p>Present Today</p>
                <h1>96</h1>
                <p>75% of total employees</p>
            </div>
            </div>
            <div class="on-leave">
            <div class="leave-icon">
                <i class="fa fa-plane"></i>
            </div>
            <div class="leave-text">
                <p>On Leave</p>
                <h1>12</h1>
                <p>This week</p>
            </div>
            </div>
            <div class="payroll-this-month">
            <div class="payroll-icon">
                <i class="fa-solid fa-money-bill"></i>
            </div>
            <div class="payroll-text">
                <p>Payroll This Month</p>
                <h1>₱ 1,246,000</h1>
                <p>8% from last month</p>
            </div>
            </div>
        </div>

        <div class="dashboard-body">
            <div class="employees-canvas">
                <div class="employees-header">
                    <h3>Recent Employees</h3>
                    <a href="#" class="leave-view-all">View all</a>
                </div>
                <table class="">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Date Hired</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div class="recent-employee-name">
                        <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile-image" class="profile-image">
                        <span class="">Carlos Mendoza</span> 
                        </div>
                        </td>
                        <td>IT Department</td>
                        <td>Software Developer</td>
                        <td>May 15, 2024</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="recent-employee-name">
                            <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile-image" class="profile-image">
                            <span class="">Jessa Villanueva</span> 
                            </div>
                        </td>
                        <td>HR Department</td>
                        <td>HR Specialist</td>
                        <td>May 10, 2024</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="recent-employee-name">
                            <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile-image" class="profile-image">
                            <span class="">Michael Tan</span> 
                            </div>
                        </td>
                        <td>Finance Department</td>
                        <td>Accountant</td>
                        <td>May 8, 2024</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="leave-request-table">
                <div class="leave-request-header">
                    <h3>Leave request</h3>
                    <a href="#" class="leave-view-all">View all</a>
                </div>
                <div class="leave-data">
                <div class="leave-item">
                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Maria Santos" class="">
                    <div class="leave-details">
                        <h4>Maria Santos</h4>
                        <span>Vacation Leave</span>
                    </div>
                    <span>May 24 - May 28, 2024</span>
                    <span class="status pending">Pending</span>
                </div>

                 <div class="leave-item">
                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Maria Santos" class="">
                    <div class="leave-details">
                        <h4>Pedro Garcia</h4>
                        <span>Personal Leave</span>
                    </div>
                    <span>May 24 - May 28, 2024</span>
                    <span class="status pending">Rejected</span>
                </div>

                <div class="leave-item">
                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Maria Santos" class="">
                    <div class="leave-details">
                        <h4>Ana Reyes</h4>
                        <span>Sicked Leave</span>
                    </div>
                    <span>May 24 2024</span>
                    <span class="status pending">Approved</span>
                </div>
                </div>
            </div>
        </div>
    </div>`;
}