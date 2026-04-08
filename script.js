// ===== TOPIC DATA =====
const topicsData = {
    'intro-to-testing': {
        title: 'Introduction to Testing',
        icon: '📚',
        iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        assignedTo: 'Sai Kiran (#01 — Team Lead)',
        category: 'Fundamentals',
        definition: 'Software Testing is the process of evaluating and verifying that a software application or product does what it is supposed to do. It involves executing a system or component to find defects, ensure quality, and validate that the software meets specified requirements and user expectations.',
        purpose: 'Testing serves as the safety net for software development. It helps identify bugs before the product reaches end users, reduces development costs by catching issues early, ensures compliance with business and technical requirements, and builds confidence in the software\'s reliability and performance.',
        keyPoints: [
            'Testing can be manual or automated, each with distinct advantages',
            'The V-Model and Agile methodologies define different testing approaches',
            'Types include Functional, Non-Functional, Structural, and Change-related testing',
            'Testing levels: Unit → Integration → System → Acceptance',
            'Key principles include exhaustive testing being impossible and the Pesticide Paradox',
            'Defect clustering — a small number of modules often contain the most defects',
            'Early testing saves time, money, and effort in the long run'
        ],
        tools: ['Selenium', 'JUnit', 'TestNG', 'Postman', 'JIRA', 'Bugzilla', 'TestRail'],
        example: 'Consider developing a banking app: before release, testers verify login functionality, transaction processing, balance calculations, and security features. Without testing, a simple rounding error in currency conversion could cost millions of dollars in incorrect transactions.',
        advantages: [
            'Ensures product quality meets customer expectations',
            'Identifies defects and vulnerabilities early in the SDLC',
            'Saves costs by preventing post-release bug fixes',
            'Improves user satisfaction and trust in the product',
            'Supports regulatory compliance and audit readiness'
        ],
        challenges: [
            'Exhaustive testing of all scenarios is practically impossible',
            'Requires balancing speed-to-market with thorough coverage',
            'Maintaining test suites as requirements evolve can be complex',
            'Communication gaps between developers and testers can cause missed defects'
        ]
    },
    'api-testing': {
        title: 'API Testing',
        icon: '🔌',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        assignedTo: 'Sai Kiran (#01 — Team Lead)',
        category: 'Functional Testing',
        definition: 'API Testing is a type of software testing that involves testing Application Programming Interfaces (APIs) directly to verify functionality, reliability, performance, and security. It works at the business logic layer, bypassing the user interface to communicate directly with the backend services through requests and responses.',
        purpose: 'API Testing ensures the core logic of your application works correctly before the UI is even built. Since APIs serve as the backbone connecting frontend, backend, databases, and third-party services, testing them is critical to ensuring seamless data flow and system integration.',
        keyPoints: [
            'Tests HTTP methods: GET, POST, PUT, PATCH, DELETE',
            'Validates response status codes (200, 201, 400, 401, 404, 500, etc.)',
            'Verifies JSON/XML response body structure and data accuracy',
            'Checks authentication & authorization (OAuth, JWT, API Keys)',
            'Tests rate limiting, pagination, and error handling',
            'Contract testing ensures API adheres to its documented specification',
            'Can be easily automated for CI/CD pipeline integration'
        ],
        tools: ['Postman', 'REST Assured', 'SoapUI', 'Swagger/OpenAPI', 'Insomnia', 'Karate DSL', 'Newman'],
        example: 'Testing an e-commerce API: Send a POST request to /api/orders with a product ID and quantity, verify the response returns a 201 status with the correct order details, then GET /api/orders/{id} to confirm the order was persisted. Also test edge cases like ordering out-of-stock items (expecting 409) or using an expired auth token (expecting 401).',
        advantages: [
            'Faster execution than UI tests — tests run in milliseconds',
            'Language and technology independent',
            'Can test business logic before UI development is complete',
            'Higher test coverage of backend functionality',
            'Easy to integrate into CI/CD pipelines for continuous testing'
        ],
        challenges: [
            'Requires understanding of API protocols and data formats',
            'Complex authentication flows can be difficult to set up',
            'Managing test data and environment dependencies',
            'API versioning can break existing test suites'
        ]
    },
    'unit-testing': {
        title: 'Unit Testing',
        icon: '🧩',
        iconBg: 'linear-gradient(135deg, #a855f7, #7c3aed)',
        assignedTo: 'Chiranjeevi (#02 — Second Team Lead)',
        category: 'White-Box Testing',
        definition: 'Unit Testing is a level of software testing where individual units or components of a software application are tested in isolation. A "unit" is the smallest testable part of an application — typically a function, method, or class. The goal is to validate that each unit of the software performs as designed.',
        purpose: 'Unit testing forms the foundation of the testing pyramid. By catching bugs at the smallest level, it prevents defects from propagating into larger components. It also serves as living documentation for how individual functions and methods are expected to behave.',
        keyPoints: [
            'Tests individual functions, methods, or classes in complete isolation',
            'Uses mocks, stubs, and fakes to simulate dependencies',
            'Follows the AAA pattern: Arrange, Act, Assert',
            'Code coverage metrics (line, branch, path) gauge test thoroughness',
            'Test-Driven Development (TDD) writes tests before implementation code',
            'Should be fast, independent, repeatable, and self-validating',
            'Typically written and maintained by developers themselves'
        ],
        tools: ['JUnit', 'NUnit', 'pytest', 'Jest', 'Mocha', 'xUnit', 'Google Test'],
        example: 'Testing a calculateDiscount(price, percentage) function: verify that calculateDiscount(100, 10) returns 90, calculateDiscount(0, 50) returns 0, and calculateDiscount(100, -5) throws an InvalidArgumentException. Each test case isolates a specific behavior of this single function.',
        advantages: [
            'Catches bugs at the earliest possible stage',
            'Makes code refactoring safe and confident',
            'Serves as documentation for expected behavior',
            'Enables faster debugging by pinpointing exact failure location',
            'Supports CI/CD with fast feedback on every code change'
        ],
        challenges: [
            'Cannot catch integration or system-level issues',
            'Writing and maintaining mocks for complex dependencies is tedious',
            'Achieving high code coverage doesn\'t guarantee absence of bugs',
            'Time investment in writing tests upfront can slow initial development'
        ]
    },
    'integration-testing': {
        title: 'Integration Testing',
        icon: '🔗',
        iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
        assignedTo: 'Chiranjeevi (#02 — Second Team Lead)',
        category: 'Functional Testing',
        definition: 'Integration Testing is the phase where individual software modules are combined and tested as a group. It verifies the interactions between integrated units/components to detect interface defects and ensure they work together correctly when combined.',
        purpose: 'While unit tests verify individual components work correctly in isolation, integration testing ensures those components communicate properly when combined. It catches issues like incorrect API calls between modules, data format mismatches, and timing/sequencing problems.',
        keyPoints: [
            'Approaches: Big Bang, Top-Down, Bottom-Up, and Sandwich (Hybrid)',
            'Tests data flow between modules, services, and databases',
            'Verifies API contracts between interacting components',
            'Uses stubs (top-down) and drivers (bottom-up) as test helpers',
            'Tests include database integration, service-to-service calls, and message queues',
            'Validates exception handling across module boundaries',
            'Often requires realistic test environments with actual dependencies'
        ],
        tools: ['JUnit/TestNG', 'Spring Boot Test', 'Testcontainers', 'WireMock', 'Pact', 'Docker Compose', 'Citrus'],
        example: 'In a food delivery app, integration testing verifies that when a user places an order (Order Service), the payment is processed (Payment Service), the restaurant is notified (Notification Service), and a delivery driver is assigned (Logistics Service) — all working together seamlessly through API calls and message queues.',
        advantages: [
            'Detects interface issues between interconnected modules',
            'Validates data integrity across component boundaries',
            'Reveals problems that unit tests miss entirely',
            'Tests real-world scenarios of module interaction',
            'Builds confidence in the overall system architecture'
        ],
        challenges: [
            'More complex to set up than unit tests',
            'Difficult to isolate the root cause of integration failures',
            'Test environments may not accurately mirror production',
            'Slower execution compared to unit tests due to real dependencies'
        ]
    },
    'system-testing': {
        title: 'System Testing',
        icon: '🖥️',
        iconBg: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        assignedTo: 'Rasagnya (#03)',
        category: 'Black-Box Testing',
        definition: 'System Testing is a level of testing where a complete, integrated software system is tested as a whole. It evaluates the system\'s compliance with its specified requirements. This testing is performed on the complete system in an environment that closely mirrors the production environment.',
        purpose: 'System testing validates the end-to-end behavior of the entire application. It ensures all integrated components function together correctly and the system meets both functional and non-functional requirements before it is handed over for user acceptance testing.',
        keyPoints: [
            'Tests the complete, fully integrated application end-to-end',
            'Performed by independent testing teams, not developers',
            'Covers both functional and non-functional requirements',
            'Includes usability, performance, security, and recovery testing',
            'Uses black-box testing techniques — testers don\'t need source code',
            'Test environment should closely replicate production',
            'Validates business scenarios and workflows comprehensively'
        ],
        tools: ['Selenium', 'Cypress', 'Robot Framework', 'QTP/UFT', 'LoadRunner', 'TestComplete', 'Ranorex'],
        example: 'For an online banking application, system testing would cover: user registration/login flow, fund transfers between accounts, bill payments, statement generation, session management, multi-browser support, and error handling — testing every feature as a real user would experience it.',
        advantages: [
            'Validates the complete system against specifications',
            'Tests real-world user scenarios and workflows',
            'Identifies issues that only appear in the full system context',
            'Builds stakeholder confidence before release',
            'Covers both functional and non-functional aspects'
        ],
        challenges: [
            'Time-consuming and resource-intensive to execute thoroughly',
            'Requires a complete, stable system build to begin',
            'Defect isolation can be difficult in large systems',
            'Test environment setup and maintenance is costly'
        ]
    },
    'acceptance-testing': {
        title: 'Acceptance Testing',
        icon: '✅',
        iconBg: 'linear-gradient(135deg, #4ade80, #16a34a)',
        assignedTo: 'Sai Sathvik (#04)',
        category: 'Validation Testing',
        definition: 'Acceptance Testing (also known as User Acceptance Testing — UAT) is a formal testing phase where end-users or business stakeholders test the software to determine whether it satisfies their business requirements and is acceptable for delivery. It is the final verification before the system goes live.',
        purpose: 'Acceptance testing answers the fundamental question: "Does this software do what the business needs?" It bridges the gap between development and deployment, ensuring the product meets real-world business needs, not just technical specifications. It is the final gate before release.',
        keyPoints: [
            'Performed by actual end-users or business stakeholders',
            'Types include Alpha Testing (internal) and Beta Testing (external users)',
            'Business Acceptance Testing (BAT) validates business processes',
            'Contract Acceptance Testing ensures contractual requirements are met',
            'Regulatory/Compliance Acceptance Testing for legal requirements',
            'Uses real-world data and scenarios, not synthetic test data',
            'Go/No-Go decision point for production release'
        ],
        tools: ['FitNesse', 'Cucumber', 'Behave', 'SpecFlow', 'TestRail', 'Zephyr', 'UserTesting'],
        example: 'A hospital management system UAT: hospital staff (nurses, doctors, administrators) test patient registration, appointment scheduling, medical record access, prescription management, and billing workflows using realistic patient scenarios to confirm the system supports their daily operations.',
        advantages: [
            'Ensures software meets actual business needs and user expectations',
            'Identifies issues from a real user\'s perspective',
            'Builds business stakeholder confidence and buy-in',
            'Reduces risk of post-deployment rejections and costly rework',
            'Validates the complete user experience end-to-end'
        ],
        challenges: [
            'End-user availability for testing can be limited',
            'Users may not follow structured test approaches',
            'Scope creep — users may request new features during UAT',
            'Subjective acceptance criteria can lead to disagreements'
        ]
    },
    'regression-testing': {
        title: 'Regression Testing',
        icon: '🔄',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        assignedTo: 'Sai Sathvik (#04)',
        category: 'Maintenance Testing',
        definition: 'Regression Testing is a type of testing performed to verify that code changes (bug fixes, new features, configuration changes) have not adversely affected existing functionality. It re-runs previously passing test cases against the modified software to ensure nothing is broken.',
        purpose: 'Every code change carries the risk of unintended side effects. Regression testing acts as a safety net that catches these regressions — situations where previously working features stop working after new changes are introduced. It is essential for maintaining software stability over time.',
        keyPoints: [
            'Re-executes existing test cases after code modifications',
            'Strategies: Retest All, Test Case Prioritization, and Selective Regression',
            'Prime candidate for test automation due to repetitive nature',
            'Regression test suite grows over time as new features are added',
            'Should run on every build in a CI/CD pipeline',
            'Impact analysis helps identify which areas to retest',
            'Critical for agile teams with frequent releases and iterations'
        ],
        tools: ['Selenium', 'Cypress', 'TestNG', 'JUnit', 'Jenkins', 'GitHub Actions', 'CircleCI'],
        example: 'An e-commerce team adds a "Buy Now" button. Regression testing ensures: existing "Add to Cart" still works, checkout flow is unaffected, payment processing remains correct, order confirmation emails still send, inventory updates correctly, and the shopping cart displays properly across all browsers.',
        advantages: [
            'Ensures existing functionality remains stable after changes',
            'Highly automatable for continuous testing in CI/CD',
            'Increases confidence in deploying frequent releases',
            'Catches unintended side effects of code changes early',
            'Protects customer-facing features from regressions'
        ],
        challenges: [
            'Test suite maintenance becomes complex as it grows larger',
            'Full regression runs can be time-consuming',
            'Identifying the right subset of tests to run requires analysis',
            'Flaky tests (intermittent failures) can erode trust in results'
        ]
    },
    'security-testing': {
        title: 'Security Testing',
        icon: '🔒',
        iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        assignedTo: 'Naga Mahindra (#05)',
        category: 'Non-Functional Testing',
        definition: 'Security Testing is a process intended to reveal flaws in the security mechanisms of an application that protect data and maintain intended functionality. It identifies vulnerabilities, threats, and risks that could lead to unauthorized access, data breaches, or loss of information.',
        purpose: 'In an era of escalating cyber threats, security testing is not optional — it\'s essential. It proactively identifies vulnerabilities before malicious actors can exploit them, protecting sensitive user data, business assets, and organizational reputation from security breaches.',
        keyPoints: [
            'OWASP Top 10 guides the most critical web security risks',
            'Types: Vulnerability Scanning, Penetration Testing, Security Auditing',
            'SAST (Static) analyzes source code; DAST (Dynamic) tests running applications',
            'Tests authentication, authorization, encryption, and session management',
            'SQL Injection, XSS, CSRF, and IDOR are common vulnerability classes',
            'Security testing should be integrated into the SDLC (DevSecOps)',
            'Compliance standards: PCI-DSS, HIPAA, GDPR, SOC 2'
        ],
        tools: ['OWASP ZAP', 'Burp Suite', 'Nmap', 'Metasploit', 'Snyk', 'SonarQube', 'Acunetix'],
        example: 'Testing a healthcare portal: attempt SQL injection on login forms, test for XSS in patient search fields, verify that Patient A cannot access Patient B\'s records (IDOR testing), check if session tokens expire properly, ensure medical data is encrypted in transit (TLS) and at rest (AES-256), and validate HIPAA compliance.',
        advantages: [
            'Protects sensitive data from unauthorized access and breaches',
            'Prevents financial losses from security incidents',
            'Ensures compliance with regulatory requirements',
            'Builds customer trust and confidence in the application',
            'Identifies vulnerabilities before malicious actors exploit them'
        ],
        challenges: [
            'Requires specialized security expertise and certifications',
            'Threat landscape constantly evolves with new attack vectors',
            'Can be expensive and time-consuming to do comprehensively',
            'Balancing security hardening with user experience and performance'
        ]
    },
    'usability-testing': {
        title: 'Usability Testing',
        icon: '👤',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        assignedTo: 'Naga Mahindra (#05)',
        category: 'Non-Functional Testing',
        definition: 'Usability Testing evaluates how easy and intuitive a software application is for end-users. It involves observing real users as they attempt to complete specific tasks, measuring their effectiveness, efficiency, and satisfaction to identify usability problems and improve the user experience.',
        purpose: 'Even the most feature-rich software fails if users can\'t figure out how to use it. Usability testing puts real users at the center of evaluation, uncovering pain points, confusion, and frustration that developers and designers might overlook, ultimately leading to a more intuitive and satisfying product.',
        keyPoints: [
            'Tests with real representative users, not internal team members',
            'Measures: task completion rate, time on task, error rate, satisfaction scores',
            'Methods: moderated/unmoderated, remote/in-person, think-aloud protocol',
            'Evaluates learnability, efficiency, memorability, and error recovery',
            'A/B testing compares design alternatives with real user data',
            'Heuristic evaluation uses established usability principles (Nielsen\'s 10)',
            'Should be conducted iteratively throughout the design process'
        ],
        tools: ['UserTesting', 'Hotjar', 'Maze', 'Lookback', 'Optimal Workshop', 'Figma (Prototyping)', 'UsabilityHub'],
        example: 'Testing a new mobile banking app: observe 10 users attempting to transfer money, pay a bill, and check their statement. Track how many complete each task, how long it takes, where they get confused (e.g., unclear button labels), and their satisfaction rating. Identify that 7/10 users couldn\'t find the "Schedule Payment" feature, leading to a redesign of the navigation.',
        advantages: [
            'Reveals real user pain points that internal teams miss',
            'Improves user satisfaction, retention, and conversion rates',
            'Reduces support costs by making the product self-explanatory',
            'Provides evidence-based insights for design decisions',
            'Increases accessibility for diverse user groups'
        ],
        challenges: [
            'Recruiting representative test participants can be difficult',
            'Small sample sizes may not represent the full user base',
            'User behavior in testing can differ from natural usage',
            'Interpreting qualitative data requires expertise and objectivity'
        ]
    },
    'smoke-testing': {
        title: 'Smoke Testing',
        icon: '💨',
        iconBg: 'linear-gradient(135deg, #a855f7, #7c3aed)',
        assignedTo: 'Uma Shankar Rao (#06)',
        category: 'Build Verification',
        definition: 'Smoke Testing (also known as Build Verification Testing) is a preliminary level of testing performed on a new software build to verify that the critical functionalities work. It is a quick, non-exhaustive test to determine if a build is stable enough to proceed with further, more rigorous testing.',
        purpose: 'Smoke testing acts as a gatekeeper for the testing process. Before investing hours in detailed testing, a quick smoke test confirms the build is viable. If the smoke test fails, the build is rejected immediately, saving the team from wasting time testing an unstable build.',
        keyPoints: [
            'Also known as "Build Verification Testing" or "Confidence Testing"',
            'Covers only the most critical and core functionalities',
            'Typically a subset of 20-30 high-priority test cases',
            'Should be the first test executed on every new build',
            'Decision point: Pass → proceed to detailed testing; Fail → reject build',
            'Can be manual or automated (automated preferred in CI/CD)',
            'Derived from hardware testing: powering on a circuit to see if it smokes'
        ],
        tools: ['Selenium', 'Cypress', 'Jenkins', 'Azure DevOps', 'GitLab CI', 'Playwright', 'TestCafe'],
        example: 'For a social media application, a smoke test would verify: the app launches without crashing, users can log in, the news feed loads, users can create a post, notifications appear, and the profile page renders. If login fails, the entire build is rejected — no need to test advanced features.',
        advantages: [
            'Provides rapid feedback on build stability (minutes, not hours)',
            'Prevents wasting time on fundamentally broken builds',
            'Easy to automate and integrate into CI/CD pipelines',
            'Reduces cost by catching critical failures immediately',
            'Ensures basic functionality before deeper testing begins'
        ],
        challenges: [
            'Limited scope — only catches the most obvious failures',
            'Does not provide depth or cover edge cases',
            'Defining the right set of smoke test cases requires judgment',
            'May give false confidence if critical paths are not included'
        ]
    },
    'sanity-testing': {
        title: 'Sanity Testing',
        icon: '🧪',
        iconBg: 'linear-gradient(135deg, #ef4444, #dc2626)',
        assignedTo: 'Uma Shankar Rao (#06)',
        category: 'Build Verification',
        definition: 'Sanity Testing is a focused, narrow type of regression testing performed after a software build to verify that specific bug fixes or new functionality work as expected, without testing the entire application. It determines whether the particular section of the application is still working after a minor change.',
        purpose: 'When a specific bug is fixed or a small feature is added, sanity testing quickly validates that the targeted change works correctly without the time investment of a full regression cycle. It\'s the "sanity check" that confirms the fix actually fixed the issue.',
        keyPoints: [
            'Narrow and focused — tests only the affected functionality',
            'Performed after receiving a build with specific bug fixes or changes',
            'A subset of regression testing with targeted scope',
            'Usually unscripted and performed by testers with domain knowledge',
            'Quick turnaround — should take minutes to a few hours, not days',
            'Does not go deep into functionality — just verifies the fix works',
            'Often confused with Smoke Testing, but differs in scope and timing'
        ],
        tools: ['Manual Testing', 'JIRA (Bug Tracking)', 'TestRail', 'Selenium (targeted scripts)', 'Postman', 'DevTools', 'Custom Scripts'],
        example: 'A bug report states: "Discount code SAVE20 gives 25% off instead of 20%." The developer fixes the calculation logic. Sanity testing verifies: applying SAVE20 now gives exactly 20% off, the discount amount displays correctly, and the final price is accurate. No need to test the entire checkout flow — just the discount logic.',
        advantages: [
            'Extremely fast validation of specific fixes',
            'No extensive test case documentation required',
            'Helps decide if the build is ready for full regression',
            'Efficient use of testing time and resources',
            'Provides quick feedback to developers on their fixes'
        ],
        challenges: [
            'May miss issues in unexamined areas of the application',
            'Relies heavily on tester\'s domain expertise and judgment',
            'Not a substitute for thorough regression testing',
            'Lack of documentation can make it difficult to reproduce'
        ]
    },
    'performance-testing': {
        title: 'Performance Testing',
        icon: '⚡',
        iconBg: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        assignedTo: 'Ravindhar (#07)',
        category: 'Non-Functional Testing',
        definition: 'Performance Testing is a non-functional testing type that evaluates the speed, responsiveness, stability, and scalability of a software application under various workload conditions. It determines how the system performs in terms of response time, throughput, and resource utilization.',
        purpose: 'Users expect applications to be fast and responsive. Performance testing ensures the system can handle expected (and unexpected) user loads without degradation. It identifies bottlenecks, memory leaks, and scalability limits before they impact real users in production.',
        keyPoints: [
            'Sub-types: Load Testing, Stress Testing, Spike Testing, Endurance Testing',
            'Key metrics: response time, throughput (TPS), error rate, resource utilization',
            'Load Testing: system behavior under expected concurrent users',
            'Stress Testing: system behavior beyond normal capacity to find breaking point',
            'Spike Testing: sudden dramatic increase in load',
            'Endurance/Soak Testing: sustained load over extended periods to find memory leaks',
            'Baseline metrics establish performance benchmarks for comparison'
        ],
        tools: ['JMeter', 'Gatling', 'LoadRunner', 'k6', 'Locust', 'Artillery', 'BlazeMeter'],
        example: 'An e-commerce site preparing for Black Friday: Load test with 50,000 concurrent users browsing and 5,000 simultaneous checkout processes. Measure: average page load time < 2 seconds, checkout completion < 5 seconds, zero transaction failures. Stress test to find that the system crashes at 80,000 users — triggering infrastructure upgrades.',
        advantages: [
            'Identifies bottlenecks before they affect real users',
            'Enables capacity planning and infrastructure optimization',
            'Prevents revenue loss from slow or crashing applications',
            'Validates SLAs and performance requirements',
            'Reveals memory leaks and resource management issues'
        ],
        challenges: [
            'Creating realistic load scenarios requires production-like data',
            'Test environments may not accurately represent production',
            'Interpreting results and identifying root causes requires deep expertise',
            'Performance testing infrastructure itself can be costly'
        ]
    },
    'compatibility-testing': {
        title: 'Compatibility Testing',
        icon: '🌐',
        iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        assignedTo: 'Venu Sai (#08)',
        category: 'Non-Functional Testing',
        definition: 'Compatibility Testing verifies that a software application works as expected across different environments — including various browsers, operating systems, devices, screen resolutions, network conditions, and hardware configurations. It ensures a consistent user experience regardless of the platform.',
        purpose: 'In today\'s diverse technology landscape, users access applications from countless combinations of devices, browsers, and operating systems. Compatibility testing ensures your application delivers a consistent, functional experience across all these environments, preventing user frustration and loss.',
        keyPoints: [
            'Browser Compatibility: Chrome, Firefox, Safari, Edge — different rendering engines',
            'OS Compatibility: Windows, macOS, Linux, iOS, Android',
            'Device Compatibility: desktops, laptops, tablets, smartphones of various sizes',
            'Resolution Testing: responsive design across different screen sizes',
            'Network Compatibility: 3G, 4G, 5G, WiFi, offline/low-bandwidth scenarios',
            'Backward Compatibility: works with older versions of dependent software',
            'Forward Compatibility: prepared for upcoming technology changes'
        ],
        tools: ['BrowserStack', 'Sauce Labs', 'LambdaTest', 'CrossBrowserTesting', 'Responsinator', 'Chrome DevTools', 'Appium'],
        example: 'A responsive web app must work on: Chrome 120+ on Windows 11, Safari 17 on macOS Sonoma, Firefox on Ubuntu, Chrome on Android 13 (Samsung Galaxy S23), Safari on iOS 17 (iPhone 15), and Edge on Surface Pro. Testing reveals the date picker breaks on Safari due to a WebKit-specific CSS issue — fixed with a vendor prefix.',
        advantages: [
            'Ensures consistent experience across all target platforms',
            'Expands reach to the widest possible user base',
            'Prevents user churn due to platform-specific bugs',
            'Identifies rendering and functionality issues early',
            'Validates responsive design implementation'
        ],
        challenges: [
            'Enormous number of device/browser/OS combinations to cover',
            'Requires access to diverse hardware or cloud testing platforms',
            'Browser differences and quirks can be difficult to resolve',
            'Continuous effort needed as new devices and versions release'
        ]
    },
    'reliability-testing': {
        title: 'Reliability Testing',
        icon: '🛡️',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        assignedTo: 'Venu Sai (#08)',
        category: 'Non-Functional Testing',
        definition: 'Reliability Testing is a non-functional testing type that verifies a software system\'s ability to perform its required functions consistently without failure for a specified period under stated conditions. It measures the probability that the software will work without failure over a given time interval.',
        purpose: 'Reliability is about trust. Users and businesses need confidence that software will work when they need it. Reliability testing quantifies this trust by measuring failure rates, mean time between failures (MTBF), and recovery capabilities, ensuring the system meets availability and uptime requirements.',
        keyPoints: [
            'Metrics: MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair)',
            'Availability = MTBF / (MTBF + MTTR) — targeting 99.9%+ uptime',
            'Feature Testing: verifies each feature works reliably in all conditions',
            'Recovery Testing: validates system recovery after crashes or failures',
            'Load Testing under sustained conditions over extended periods',
            'Failover Testing: verifies backup systems activate correctly',
            'Chaos Engineering: deliberately introduces failures to test resilience'
        ],
        tools: ['Chaos Monkey (Netflix)', 'Gremlin', 'LitmusChaos', 'JMeter (endurance)', 'Grafana', 'Datadog', 'PagerDuty'],
        example: 'An airline booking system must maintain 99.99% uptime. Reliability testing: run the system under normal load for 72 continuous hours monitoring for memory leaks, simulate database failover and verify the app switches to the replica within 30 seconds, inject random server crashes and verify auto-restart succeeds, and measure that no transactions are lost during recovery.',
        advantages: [
            'Ensures consistent system availability for users',
            'Identifies failure patterns and weak points in architecture',
            'Enables proactive maintenance before critical failures occur',
            'Builds customer trust and business reputation',
            'Validates disaster recovery and failover mechanisms'
        ],
        challenges: [
            'Requires extended testing periods to expose intermittent issues',
            'Simulating real-world failure scenarios is complex',
            'Results can be statistical, requiring significant data for conclusions',
            'Infrastructure for long-duration testing can be expensive'
        ]
    },
    'e2e-testing': {
        title: 'End-to-End (E2E) Testing',
        icon: '🔀',
        iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
        assignedTo: 'Pravanya (#09)',
        category: 'Functional Testing',
        definition: 'End-to-End (E2E) Testing is a methodology that tests the entire application flow from start to finish, simulating real user scenarios. It validates the system\'s integration with external interfaces and dependencies, ensuring the complete workflow operates correctly as a unified system.',
        purpose: 'E2E testing replicates real user journeys through the entire application stack — from the user interface through the backend, databases, and third-party services. It is the ultimate validation that all components work together to deliver the expected user experience.',
        keyPoints: [
            'Tests complete user workflows from UI to database and back',
            'Covers the full technology stack: frontend, backend, APIs, databases',
            'Simulates real user behavior including navigation, data entry, and transactions',
            'Validates integrations with external services (payment gateways, email, SMS)',
            'Typically automated using browser automation frameworks',
            'Slowest but most comprehensive level of testing',
            'Should focus on critical business flows, not exhaustive scenarios'
        ],
        tools: ['Cypress', 'Playwright', 'Selenium WebDriver', 'Puppeteer', 'TestCafe', 'Protractor', 'Appium'],
        example: 'E2E test for an online shopping flow: User registers an account → browses products → adds items to cart → applies coupon code → proceeds to checkout → enters shipping address → selects payment method → completes payment → receives order confirmation email → order appears in order history. Every step is verified across the full stack.',
        advantages: [
            'Validates complete user journeys and business processes',
            'Catches issues that lower-level tests miss entirely',
            'Tests real integration with external systems and services',
            'Provides highest confidence that the system works for real users',
            'Directly maps to business requirements and user stories'
        ],
        challenges: [
            'Slow to execute compared to unit and integration tests',
            'Brittle and prone to flakiness due to UI and timing dependencies',
            'Expensive to write, maintain, and debug when they fail',
            'Difficult to pinpoint exact failure location in the stack'
        ]
    },
    'database-testing': {
        title: 'Database Testing',
        icon: '🗄️',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        assignedTo: 'Pravanya (#09)',
        category: 'Backend Testing',
        definition: 'Database Testing involves validating the schema, tables, stored procedures, triggers, data integrity, and performance of the database that supports the application. It ensures data is correctly stored, retrieved, updated, and deleted, and that the database maintains ACID properties (Atomicity, Consistency, Isolation, Durability).',
        purpose: 'The database is the heart of most applications — it stores all critical business data. Database testing ensures data integrity, security, and performance, preventing data corruption, unauthorized access, and slow queries that could cripple the application.',
        keyPoints: [
            'Schema Testing: validates table structures, columns, data types, constraints',
            'CRUD Operations: verifies Create, Read, Update, Delete work correctly',
            'Data Integrity: foreign keys, unique constraints, NOT NULL validations',
            'Stored Procedures & Triggers: tests database logic executes correctly',
            'Transaction Testing: validates ACID properties under concurrent access',
            'Performance: query optimization, indexing, and execution plans',
            'Data Migration Testing: validates data after schema or platform changes'
        ],
        tools: ['SQL Server Management Studio', 'pgAdmin', 'MySQL Workbench', 'DbUnit', 'tSQLt', 'Flyway', 'Liquibase'],
        example: 'Testing an HR management database: verify that inserting an employee with a duplicate employee ID is rejected (unique constraint), updating a department name cascades to all employee records (foreign key cascade), deleting a manager doesn\'t orphan their reports (referential integrity), and salary calculations in stored procedures are accurate to the cent.',
        advantages: [
            'Ensures data integrity and accuracy across all operations',
            'Validates complex business logic in stored procedures',
            'Identifies performance bottlenecks in queries and indexes',
            'Prevents data corruption and loss scenarios',
            'Verifies data migration accuracy during upgrades'
        ],
        challenges: [
            'Requires SQL expertise and deep database knowledge',
            'Test data setup and teardown can be complex and time-consuming',
            'Testing concurrent access and race conditions is difficult',
            'Database-specific behaviors vary across vendors (Oracle vs. PostgreSQL vs. MySQL)'
        ]
    },
    'automation-testing': {
        title: 'Automation Testing',
        icon: '🤖',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        assignedTo: 'Mona (#10)',
        category: 'Testing Methodology',
        definition: 'Automation Testing uses specialized software tools and scripts to execute pre-defined test cases automatically, compare actual results with expected outcomes, and generate reports — all without manual intervention. It transforms repetitive manual testing efforts into efficient, reusable automated test suites.',
        purpose: 'As software grows in complexity and release cycles shorten, manual testing alone cannot keep up. Automation testing enables teams to run thousands of test cases in parallel, achieve consistent execution without human error, and provide rapid feedback in CI/CD pipelines — making continuous delivery possible.',
        keyPoints: [
            'ROI increases over time — initial setup cost offset by repeated execution savings',
            'Test Pyramid: many unit tests, fewer integration tests, fewest E2E tests',
            'Page Object Model (POM) is the standard design pattern for UI automation',
            'Data-Driven Testing: same test logic with multiple data sets',
            'Keyword-Driven Testing: abstract actions into reusable keywords',
            'BDD (Behavior-Driven Development) with Gherkin syntax for readable tests',
            'CI/CD Integration: automated tests run on every commit, PR, and deployment'
        ],
        tools: ['Selenium WebDriver', 'Cypress', 'Playwright', 'Appium', 'Robot Framework', 'Jenkins', 'GitHub Actions'],
        example: 'Automating regression tests for a SaaS platform: Playwright scripts test login, dashboard loading, report generation, user management, and billing across Chrome, Firefox, and Safari. Running 500 test cases in 15 minutes via parallel execution on a CI/CD pipeline — compared to 3 days of manual testing. Tests run automatically on every pull request.',
        advantages: [
            'Massive time savings through parallel and repeated execution',
            'Consistent, repeatable results without human error',
            'Enables continuous testing in CI/CD pipelines',
            'Frees up testers for exploratory and creative testing',
            'Provides fast feedback on code changes within minutes'
        ],
        challenges: [
            'High initial investment in framework setup and script development',
            'Maintaining test scripts as the application evolves is ongoing work',
            'Not all testing can or should be automated (exploratory, UX testing)',
            'Flaky tests can undermine team confidence in automation results'
        ]
    }
};

// ===== NAVIGATION FUNCTIONS =====
function navigateToTopic(topicId) {
    const topic = topicsData[topicId];
    if (!topic) return;

    // Populate the topic page
    document.getElementById('topic-icon').style.background = topic.iconBg;
    document.getElementById('topic-icon').textContent = topic.icon;
    document.getElementById('topic-title').textContent = topic.title;
    document.getElementById('topic-assigned').textContent = '👤 ' + topic.assignedTo;
    document.getElementById('topic-category').textContent = '📂 ' + topic.category;
    document.getElementById('topic-def-text').textContent = topic.definition;
    document.getElementById('topic-purpose-text').textContent = topic.purpose;
    document.getElementById('topic-example-text').textContent = topic.example;

    // Key Points
    const kpList = document.getElementById('topic-keypoints-list');
    kpList.innerHTML = '';
    topic.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        kpList.appendChild(li);
    });

    // Tools
    const toolsContainer = document.getElementById('topic-tools-list');
    toolsContainer.innerHTML = '';
    topic.tools.forEach(tool => {
        const span = document.createElement('span');
        span.className = 'tool-tag';
        span.textContent = tool;
        toolsContainer.appendChild(span);
    });

    // Advantages
    const advList = document.getElementById('topic-advantages-list');
    advList.innerHTML = '';
    topic.advantages.forEach(adv => {
        const li = document.createElement('li');
        li.textContent = adv;
        advList.appendChild(li);
    });

    // Challenges
    const chalList = document.getElementById('topic-challenges-list');
    chalList.innerHTML = '';
    topic.challenges.forEach(chal => {
        const li = document.createElement('li');
        li.textContent = chal;
        chalList.appendChild(li);
    });

    // Animate page transition
    const mainPage = document.getElementById('main-page');
    const topicPage = document.getElementById('topic-page');

    mainPage.classList.add('slide-out');
    
    setTimeout(() => {
        mainPage.classList.remove('active', 'slide-out');
        topicPage.classList.add('active', 'slide-in');
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
}

function goBack() {
    const mainPage = document.getElementById('main-page');
    const topicPage = document.getElementById('topic-page');

    topicPage.classList.add('slide-out');

    setTimeout(() => {
        topicPage.classList.remove('active', 'slide-out', 'slide-in');
        mainPage.classList.add('active', 'slide-in');
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Animate stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, finalValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));

    // Add hover ripple effect on topic buttons
    document.querySelectorAll('.topic-btn, .topic-link').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.setProperty('--ripple-x', Math.random() * 100 + '%');
            this.style.setProperty('--ripple-y', Math.random() * 100 + '%');
        });
    });
});

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const duration = 1000;
    const stepTime = duration / 30;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}
