# Admission Management Portal

## Overview
This project is a modern, responsive web-based portal for managing student admissions, registration, and related academic administration tasks. It is built using static HTML and Tailwind CSS for rapid UI development and mobile-friendly layouts.

## Features
- Student search and filtering with custom multi-select dropdowns
- Detailed student profile and registration views
- Mass admit and staging workflows
- Power BI report integration
- Consistent, mobile-responsive sidebar navigation
- Modern card layouts with side-labels for student information

## Folder Structure

```
admission-management/
├── admission-powerbi.html
├── admission.html
├── application-details.html
├── index.html
├── mass-admit-powerbi.html
├── mass-admit.html
├── powerbi-reports.html
├── registration-details.html
├── registration-powerbi.html
├── registration.html
├── staging-powerbi.html
├── staging.html
├── student-details-2.html
├── student-details.html
├── student-profile-2.html
├── student-profile.html
├── student-search-powerbi.html
├── student-search.html
```

- Each `.html` file represents a major page or workflow in the portal.
- There are no subfolders; all files are at the root for simplicity.

## Key Pages
- `index.html`: Main dashboard and navigation entry point
- `student-search.html`: Search and filter students
- `student-details.html`, `student-details-2.html`: Detailed student info (with different layouts)
- `student-profile.html`, `student-profile-2.html`: Student profile views
- `registration-details.html`: Registration details for a student
- `admission.html`, `mass-admit.html`, `staging.html`: Admission and staging workflows
- `powerbi-reports.html`: Embedded Power BI analytics

## Technologies Used
- HTML5
- Tailwind CSS (via CDN)
- SVG icons for UI
- No backend or JavaScript frameworks required

## Customization & Extending
- To add new pages, duplicate an existing `.html` file and update the content as needed.
- Sidebar navigation is consistent across all pages for easy navigation.
- All styles are handled via Tailwind utility classes and a small amount of custom CSS in each file.

## Usage
Open any `.html` file in your browser. No build step or server is required.

## Authors
- KU Campus IT Team

## License
MIT License
