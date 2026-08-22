export function renderAttendance(){
    const content = document.querySelector('.content');

content.innerHTML += `
    <div class="attendance-content">
    <div class="employee-header">
            <h1 class="">Attendance</h1>    
    <div class="header-button">
            <button class="add-employee">+ Attendance Report</button>
            <button class="export-employee">Export</button>
    </div>
    </div> 
            <div class="dashboard-info">
            <div class="total-employee">
            <div class="employee-icon">
                <i class="fa fa-users"></i>
            </div>
            <div class="employee-text">
                <p>Present Today</p>
                <h1>128</h1>
                <p>5 from last month</p>
            </div>
            </div>
            <div class="present-today">
            <div class="present-icon">
                <i class="fa fa-user"></i>
            </div>
            <div class="present-text">
                <p>Late Today</p>
                <h1>96</h1>
                <p>75% of total employees</p>
            </div>
            </div>
            <div class="on-leave">
            <div class="leave-icon">
                <i class="fa-solid fa-calendar"></i>
            </div>
            <div class="leave-text">
                <p>Absent Today</p>
                <h1>12</h1>
                <p>This week</p>
            </div>
            </div>
            <div class="new-this-month">
            <div class="new-icon">
                <i class="fa fa-user-plus"></i>
            </div>
            <div class="new-text">
                <p>On Leave Today</p>
                <h1>5</h1>
                <p>25% from last month</p>
            </div>
            </div>
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

                <div class="search-box">
                    <i class="fa fa-search"></i>
                    <input type="text" class="search-input" placeholder="Search by name, position or department...">
                </div>
                    
                <button class="filter-btn">
                    <i class="fa fa-filter"></i> Filter
                </button>
            </div>

            <div class="attendance-body">
                <table class="attendance-employee-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Department</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Status</th>
                            <th>Work Hours</th>
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
                            <td>IT Department</td>
                            <td>08:55 AM</td>
                            <td>05:32 PM</td>
                            <td>Active</td>
                            <td>8h 37m</td>
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
                            <td>IT Department</td>
                            <td>08:55 AM</td>
                            <td>05:32 PM</td>
                            <td>Active</td>
                            <td>8h 37m</td>
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
                            <td>IT Department</td>
                            <td>08:55 AM</td>
                            <td>05:32 PM</td>
                            <td>Active</td>
                            <td>8h 37m</td>
                            <td>
                                <div class="employee-btn">
                                    <button class="action-btn"><i class="fa fa-eye"></i></button>
                                    <button class="action-btn"><i class="fa fa-ellipsis-h"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
<div class="attendance-calendar">

    <!-- Calendar Header -->
    <div class="calendar-header">

        <button class="calendar-prev">
            <i class="fa fa-angle-left"></i>
        </button>

        <h3 class="calendar-title">
            May 2025
        </h3>

        <button class="calendar-next">
            <i class="fa fa-angle-right"></i>
        </button>

    </div>


    <!-- Weekdays -->
    <div class="calendar-weekdays">

        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>

    </div>


    <!-- Dates will be generated here -->
    <div class="calendar-days"></div>


    <!-- Divider -->
    <div class="calendar-divider"></div>


    <!-- Legend -->
    <div class="calendar-legend">

        <h4>Legend</h4>

        <div class="legend-items">

            <div class="legend-item">
                <span class="legend-dot present"></span>
                <span>Present</span>
            </div>

            <div class="legend-item">
                <span class="legend-dot late"></span>
                <span>Late</span>
            </div>

            <div class="legend-item">
                <span class="legend-dot absent"></span>
                <span>Absent</span>
            </div>

            <div class="legend-item">
                <span class="legend-dot on-leaves"></span>
                <span>On Leave</span>
            </div>
        </div>
    </div>
</div>
        </div>
</div>`;


    const calendarTitle = document.querySelector('.calendar-title');
const calendarDays = document.querySelector('.calendar-days');

const previousButton = document.querySelector('.calendar-prev');
const nextButton = document.querySelector('.calendar-next');


let currentDate = new Date(2025, 4, 21);
// year month day
// May = 4 dahil zero-based ang month


function renderCalendar() {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();


    // Month name
    const monthName = currentDate.toLocaleDateString('en-US', {
        month: 'long'
    });


    // Update title
    calendarTitle.textContent = `${monthName} ${year}`;


    // Clear old dates
    calendarDays.innerHTML = '';


    /*
        First day of the month

        Example:
        May 1, 2025 = Thursday

        getDay()
        Sunday = 0
        Monday = 1
        Tuesday = 2
        ...
        Saturday = 6
    */

    const firstDay = new Date(year, month, 1).getDay();


    /*
        Number of days in current month

        new Date(year, month + 1, 0)
        means last day of current month
    */

    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate();


    /*
        Number of days from previous month
    */

    const daysInPreviousMonth = new Date(
        year,
        month,
        0
    ).getDate();


    // =========================
    // PREVIOUS MONTH
    // =========================

    for (let i = firstDay - 1; i >= 0; i--) {

        const day = daysInPreviousMonth - i;

        const element = document.createElement('div');

        element.classList.add(
            'calendar-day',
            'other-month'
        );

        element.textContent = day;

        calendarDays.appendChild(element);
    }


    // =========================
    // CURRENT MONTH
    // =========================

    for (let day = 1; day <= daysInMonth; day++) {

        const element = document.createElement('div');

        element.classList.add('calendar-day');

        element.textContent = day;


        /*
            Example attendance status
        */

        if (day === 21) {
            element.classList.add('present');
        }

        if (day === 15) {
            element.classList.add('late');
        }

        if (day === 10) {
            element.classList.add('absent');
        }

        if (day === 5) {
            element.classList.add('on-leaves');
        }


        calendarDays.appendChild(element);
    }


    // =========================
    // NEXT MONTH
    // =========================

    const totalDays =
        firstDay + daysInMonth;

    const remainingDays =
        (7 - (totalDays % 7)) % 7;


    for (let day = 1; day <= remainingDays; day++) {

        const element = document.createElement('div');

        element.classList.add(
            'calendar-day',
            'other-month'
        );

        element.textContent = day;

        calendarDays.appendChild(element);
    }
}

previousButton.addEventListener('click', () => {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    renderCalendar();
});

nextButton.addEventListener('click', () => {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    renderCalendar();
});
}