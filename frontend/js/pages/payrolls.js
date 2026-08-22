export function renderPayroll(){
    const content = document.querySelector('.content');

content.innerHTML = `
    <div class="">
        <div class="employee-header">
                <h1 class="">Payroll Management</h1>    
            <div class="header-button">
                <button class="add-employee">+ Run Payroll</button>
                <button class="export-employee">Payroll Settings</button>
            </div>
        </div> 
        <div class="dashboard-info">
            <div class="total-employee">
            <div class="employee-icon">
                <i class="fa-solid fa-dollar-sign"></i>
            </div>
            <div class="employee-text">
                <p>Total Payroll Costs</p>
                <h1>₱ 128,584,445</h1>
                <p>5 from last month</p>
            </div>
            </div>
            <div class="present-today">
            <div class="present-icon">
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="present-text">
                <p>Total Empooyees Paid</p>
                <h1>96</h1>
                <p>75% of total employees</p>
            </div>
            </div>
            <div class="on-leave">
            <div class="leave-icon">
                <i class="fa-solid fa-calendar"></i>
            </div>
            <div class="leave-text">
                <p>Payroll Period</p>
                <h1>12</h1>
                <p>This week</p>
            </div>
            </div>
            <div class="new-this-month">
            <div class="new-icon">
                <i class="fa-solid fa-clipboard"></i>
            </div>
            <div class="new-text">
                <p>Pending Approval</p>
                <h1>5</h1>
                <p>25% from last month</p>
            </div>
            </div>
        </div>

        <div class="payroll-container">
            <div class="payroll-main">
                <div class="payroll-tabs">
                        <button class="tab-btn active">Payroll Runs</button>
                        <button class="tab-btn">Payslips</button>
                        <button class="tab-btn">Adjustments</button>
                        <button class="tab-btn">Deductions</button>
                        <button class="tab-btn">Loans</button>
                        <button class="tab-btn">Reports</button>
                    </div>
                    <!-- Existing Filter Controls -->
            <div class="payroll-filters">
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
                        
                <div class="search-box">
                    <i class="fa fa-search"></i>
                    <input type="text" class="search-input" placeholder="Search by name, position or department...">
                </div>
            </div>

            <table class="payroll-table">
                <thead class="">
                    <tr>
                        <th>Payroll Period</th>
                        <th>Employees</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>processed On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="">
                    <tr>
                        <td>
                            <div class="payrolls-date">
                                <i class="fa-solid fa-calendar"></i>
                            <div>
                                <p>May 1 - May 15, 2025</p>
                                <span class="semi-monthly">Semi-Monthly</span>
                            </div>
                            </div>
                        </td>
                        <td><p>35</p></td>
                        <td><span class="">Pending Approval</span></td>
                        <td><p class="">₱ 128,584,445</p></td>
                        <td>May 14, 2025</td>
                        <td>
                            <div class="payrolls-table-btn">
                                <button class="action-btn"><i class="fa fa-eye"></i></button>
                                <button class="action-btn"><i class="fa fa-ellipsis-h"></i></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

            <aside class="payroll-summary">
            <div class="payroll-heading">
                <h3>Payroll Summary</h3>
                <h3 class="payroll-dates">May 1 - May 15, 2025</h3>
            </div>

                <div class="summary-content">
                    <div class="summary-title">
                        <i class="fa-solid fa-calendar"></i>
                        <p class="">Basic Salary</p>
                    </div>
                        <p>₱ 865,000,000</p>
                </div>

                <div class="summary-content">
                    <div class="summary-title">
                        <i class="fa-solid fa-piggy-bank"></i>
                        <p class="">Allowances</p>
                    </div>
                        <p>₱ 865,000,000</p>
                </div>

                <div class="summary-content">
                    <div class="summary-title">
                        <i class="fa-solid fa-clock"></i>
                        <p class="">Overtime Pay</p>
                    </div>
                        <p>₱ 210,000,000</p>
                </div>
                <div class="summary-content">
                    <div class="summary-title">
                        <i class="fa-solid fa-wallet"></i>
                        <p class="">Deductions</p>
                    </div>
                        <p>₱ 65,000,000</p>
                </div>
                <div class="summary-content">
                    <div class="summary-title">
                        <i class="fa-solid fa-credit-card"></i>
                        <p class="">Loans</p>
                    </div>
                        <p>₱ 12,000</p>
                </div>
            <div class="payroll-footer">
                <h3 class="footer-text">Net Payroll</h3>
                <h3 class="net-payroll">₱ 865,000,000</h3>
            </div>
            </aside>
        </div>
    </div>`;

        document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
}