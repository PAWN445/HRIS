import { renderDashboard } from "./pages/dashboard.js";
import { renderAttendance } from "./pages/attendance.js";
import { renderEmployees } from "./pages/employees.js";
import { renderLeave } from "./pages/leave.js";
import { renderPayroll } from "./pages/payrolls.js";
import { renderReports } from "./pages/reports.js";
import { renderRecruitment } from "./pages/recruitment.js";
import { renderDepartments } from "./pages/departments.js";
import { renderPerformance } from "./pages/performance.js";
import { renderSettings } from "./pages/settings.js";

const pages = {
    'dashboard': renderDashboard,
    'attendance': renderAttendance,
    'employees': renderEmployees,
    'leaves': renderLeave,
    'payrolls': renderPayroll,
    'reports': renderReports,
    'recruitment': renderRecruitment,
    'departments': renderDepartments,
    'performance': renderPerformance,
    'settings': renderSettings
};

export function renderPage(){
    const content = document.querySelector('.content');
    const sidebar = document.querySelector('.sidebar');

    sidebar.addEventListener('click', (e) => {

        const sidebarItem = e.target.closest('li[data-page]');
        if (!sidebarItem) return;

            document.querySelectorAll('.sidebar li').forEach(li => {
            li.classList.remove('active');
        });
        
        // Add active to clicked item
        sidebarItem.classList.add('active');

        const pageName = sidebarItem.getAttribute('data-page');
        const renderFunc = pages[pageName];

        console.log('Render function found?', !!renderFunc); 

                if (!renderFunc) {
            console.warn(`Page "${pageName}" not found`);
            return;
        }
                content.innerHTML = '';
        renderFunc();
    });
}