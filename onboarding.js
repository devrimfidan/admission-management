// Registration Management Onboarding Tour
// Uses Driver.js for interactive guided tour

const driver = window.driver.js.driver;

function startOnboardingTour() {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '#filterContent',
                popover: {
                    title: 'Welcome to Registration Management',
                    description: 'This page helps you search and manage student registrations. Let me show you around!',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '[data-target="accordion1"]',
                popover: {
                    title: 'Applicant Details Section',
                    description: 'Start by searching for students using applicant information like Student Number, Application Number, or National ID. You can also search by name.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '#studentNumber',
                popover: {
                    title: 'Student Number Field',
                    description: 'Enter the student number or click the search icon to find students from the system.',
                    side: 'right',
                    align: 'center'
                }
            },
            {
                element: '#appNumber',
                popover: {
                    title: 'Application Number',
                    description: 'You can also search by Application Number to quickly locate a specific application.',
                    side: 'right',
                    align: 'center'
                }
            },
            {
                element: '[data-target="accordion2"]',
                popover: {
                    title: 'Academic Details Section',
                    description: 'Filter by academic information such as Career type, Program, Plan, and Admit Term to narrow down your search results.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '#admitTerm',
                popover: {
                    title: 'Admit Term Filter',
                    description: 'Select the term when students were admitted to filter results.',
                    side: 'right',
                    align: 'center'
                }
            },
            {
                element: '[data-target="accordion3"]',
                popover: {
                    title: 'Operational Options Section',
                    description: 'Select operational filters like Matriculation Form status, Registration Documents, ELC Form, and other document-related criteria.',
                    side: 'bottom',
                    align: 'start'
                }
            },
            {
                element: '#submitOrderBtn',
                popover: {
                    title: 'Execute Search',
                    description: 'Click the Search button to execute your query and see matching student records in the results table below.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: '.overflow-x-auto',
                popover: {
                    title: 'Search Results Table',
                    description: 'View all matching student records here. You can sort by any column, select multiple records, and perform bulk actions.',
                    side: 'top',
                    align: 'start'
                }
            },
            {
                element: '#columnsToggle',
                popover: {
                    title: 'Customize Columns',
                    description: 'Click this button to show or hide columns in the results table based on your preference.',
                    side: 'left',
                    align: 'center'
                }
            },
            {
                element: '#downloadToggle',
                popover: {
                    title: 'Download Report',
                    description: 'Export search results as Excel, CSV, or PDF for further processing.',
                    side: 'left',
                    align: 'center'
                }
            },
            {
                element: '#onboardingCompleteBtn',
                popover: {
                    title: 'Tour Complete!',
                    description: 'You now understand how to use the Registration Management system. Click below to end this tour.',
                    side: 'top',
                    align: 'center',
                    buttons: [
                        {
                            text: 'End Tour',
                            onClick: () => {
                                driverObj.destroy();
                                // Save tour completed status to localStorage
                                localStorage.setItem('registrationOnboardingCompleted', 'true');
                            }
                        }
                    ]
                }
            }
        ],
        onDestroyStarted: () => {
            // Save tour completed status when user closes the tour
            localStorage.setItem('registrationOnboardingCompleted', 'true');
        }
    });
    
    driverObj.drive();
}

// Auto-start tour on page load if not completed before
document.addEventListener('DOMContentLoaded', function() {
    const tourCompleted = localStorage.getItem('registrationOnboardingCompleted');
    
    // Only show tour if it hasn't been completed before
    if (!tourCompleted) {
        // Small delay to ensure all elements are rendered
        setTimeout(startOnboardingTour, 1000);
    }
});

// Make tour restartable via console or other means if needed
window.restartOnboarding = function() {
    localStorage.removeItem('registrationOnboardingCompleted');
    startOnboardingTour();
};
