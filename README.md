Code Playground - Application Proposal


# Overview:
Interactive web application for exploring 6 programming languages through code examples and course information.


# Components:
- total 6 components

    1. NavLinks
    2. Header
    3. PageIntro
    4. CodeBlock
    5. CourseCard
    6. Footer


Note: 
    - All components use TypeScript interfaces. 
    - PageIntro, CodeBlock, and CourseCard receive data as props. 
    - NavLinks and Footer import data directly from data file.


1. NavLinks Component/
    Functions: Maps 3 navigation items, renders Next.js Links
    Data: navLinks array with name, href strings

2. Header Component/
    Functions: Renders NavLinks component

3. PageIntro Component/
    Props: title, description strings
    Functions: Displays page-specific content

4. CodeBlock Component/
    Props: code, language strings
    State: showCode boolean
    Functions: Toggle button switches "Run"/"Hide", shows/hides code

5. CourseCard Component/
    Props: language, topic, role, description, fullDescription strings
    State: showDescription boolean
    Functions: Toggle button switches "Read More"/"Read Less", shows/hides fullDescription

6. Footer Component/
    Functions: Displays copyright info
    Data: footerData object with copyright, year, description


# Page Structure

- Home Page (/)
    Components: PageIntro only
    Data: Uses pageIntroData["home"] with title "Code Playground"
    Functionality: Static landing page, no interactive elements

- Courses Page (/courses)
    Components: PageIntro + CourseCards + CodeBlocks
    Data Sources: pageIntroData["courses"], courseCards array, codeBlockProps array
    Rendered instances: CourseCard renders 6 times, CodeBlock renders 6 times
    Interactive Elements: 12 toggle buttons total (6 "Read More/Less" + 6 "Run/Hide")
    Functionality: Independent toggle states for each component

- About Page (/about)
    Components: PageIntro only
    Data: Uses pageIntroData["about"] with title "Behind the Screen"
    Functionality: Static information page, no interactive elements
