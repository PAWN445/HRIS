export function renderRecruitment(){
    const content = document.querySelector('.content');

    content.innerHTML = `
        <div class="">
        <div class="employee-header">
                <h1 class="">Recruitment</h1>    
            <div class="header-button">
                <button class="add-employee">+ Create Job Opening</button>
                <button class="export-employee">Career Pages</button>
            </div>
        </div> 
        <div class="dashboard-info-recruitment">
            <div class="total-employee">
            <div class="employee-icon">
                <i class="fa-solid fa-money-bill"></i>
            </div>
            <div class="employee-text">
                <p>Total Job Openings</p>
                <h1>₱ 128,584,445</h1>
                <p>5 from last month</p>
            </div>
            </div>
            <div class="present-today">
            <div class="present-icon">
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="present-text">
                <p>Total Candidates</p>
                <h1>96</h1>
                <p>75% of total employees</p>
            </div>
            </div>
            <div class="on-leave">
            <div class="leave-icon">
                <i class="fa-solid fa-calendar"></i>
            </div>
            <div class="leave-text">
                <p>In Progress</p>
                <h1>12</h1>
                <p>This week</p>
            </div>
            </div>
            <div class="new-this-month">
            <div class="new-icon">
                <i class="fa fa-clipboard"></i>
            </div>
            <div class="new-text">
                <p>Hired This Month</p>
                <h1>5</h1>
                <p>25% from last month</p>
            </div>
            </div>
            <div class="reject-this-month">
            <div class="reject-icon">
            <i class="fa fa-times"></i>
            </div>
            <div class="reject-text">
            <p>Reject This Month</p>
                <h1>5</h1>
            <p>25% from last month</p>
            </div>
            </div>
        </div>
        </div>
    `;
}