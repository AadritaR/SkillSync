package com.skillsync.backend;

import java.util.*;

public class RoadmapService {

    public Map<String, Object> generateRoadmap(String goal, String level, String time, String purpose) {
        int dailyHours = parseDailyHours(time);
        List<Map<String, Object>> phases = getPhases(goal, level);

        int totalDays = 0;
        for (Map<String, Object> phase : phases) {
            int baseHours = (int) phase.get("baseHours");
            int days = (int) Math.ceil((double) baseHours / dailyHours);
            phase.put("days", days);
            totalDays += days;
        }

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("goal", goal);
        result.put("level", level);
        result.put("time", time);
        result.put("purpose", purpose);
        result.put("totalDays", totalDays);
        result.put("phases", phases);
        return result;
    }

    private int parseDailyHours(String time) {
        if (time == null)
            return 2;
        switch (time) {
            case "1 hour/day":
                return 1;
            case "2 hours/day":
                return 2;
            case "4 hours/day":
                return 4;
            case "6+ hours/day":
                return 6;
            default:
                return 2;
        }
    }

    private List<Map<String, Object>> getPhases(String goal, String level) {
        Map<String, Map<String, List<Map<String, Object>>>> roadmaps = buildRoadmaps();
        Map<String, List<Map<String, Object>>> trackMap = roadmaps.get(goal);
        if (trackMap != null) {
            List<Map<String, Object>> phases = trackMap.get(level);
            if (phases != null)
                return phases;
        }
        return fallbackRoadmap(level);
    }

    // ── HELPERS ──────────────────────────────────────────────────

    private Map<String, Object> phase(String phase, String title, List<String> skills,
            String focus, List<String> practice,
            String project, String whyProject,
            List<Map<String, String>> resources, int baseHours) {
        Map<String, Object> p = new LinkedHashMap<>();
        p.put("phase", phase);
        p.put("title", title);
        p.put("skills", skills);
        p.put("focus", focus);
        p.put("practice", practice);
        p.put("project", project);
        p.put("whyProject", whyProject);
        p.put("resources", resources);
        p.put("baseHours", baseHours);
        return p;
    }

    private List<String> list(String... items) {
        return Arrays.asList(items);
    }

    private Map<String, String> res(String name, String link) {
        Map<String, String> r = new LinkedHashMap<>();
        r.put("name", name);
        r.put("link", link);
        return r;
    }

    @SafeVarargs
    private List<Map<String, String>> resources(Map<String, String>... items) {
        return Arrays.asList(items);
    }

    // ── FALLBACK ─────────────────────────────────────────────────

    private List<Map<String, Object>> fallbackRoadmap(String level) {
        int h1 = level.equals("Beginner") ? 40 : level.equals("Intermediate") ? 28 : 20;
        int h2 = level.equals("Beginner") ? 50 : level.equals("Intermediate") ? 35 : 25;
        int h3 = level.equals("Beginner") ? 30 : level.equals("Intermediate") ? 25 : 20;

        List<Map<String, Object>> phases = new ArrayList<>();

        Map<String, Object> p1 = new LinkedHashMap<>();
        p1.put("phase", "Phase 1");
        p1.put("title", "Core Foundations");
        p1.put("skills", list("Basics", "Tools", "Fundamentals", "Practice"));
        p1.put("project", "Build a beginner-friendly mini project");
        p1.put("baseHours", h1);
        phases.add(p1);

        Map<String, Object> p2 = new LinkedHashMap<>();
        p2.put("phase", "Phase 2");
        p2.put("title", "Practical Skills");
        p2.put("skills", list("Applied Concepts", "Tools", "Projects", "Documentation"));
        p2.put("project", "Build a practical portfolio project");
        p2.put("baseHours", h2);
        phases.add(p2);

        Map<String, Object> p3 = new LinkedHashMap<>();
        p3.put("phase", "Phase 3");
        p3.put("title", "Portfolio Readiness");
        p3.put("skills", list("GitHub", "Deployment", "Project Explanation", "Revision"));
        p3.put("project", "Polish and deploy your best project");
        p3.put("baseHours", h3);
        phases.add(p3);

        return phases;
    }

    // ── ALL ROADMAPS ─────────────────────────────────────────────

    private Map<String, Map<String, List<Map<String, Object>>>> buildRoadmaps() {
        Map<String, Map<String, List<Map<String, Object>>>> roadmaps = new LinkedHashMap<>();

        // ── FULL STACK DEVELOPMENT ────────────────────────────
        Map<String, List<Map<String, Object>>> fullStack = new LinkedHashMap<>();
        fullStack.put("Beginner", Arrays.asList(
                phase("Phase 1", "Web Foundations",
                        list("HTML", "CSS", "Responsive Design", "Git Basics"),
                        "Learn how websites are structured, styled, and made responsive across different screen sizes.",
                        list("Create a responsive navbar", "Build a hero section with call-to-action buttons",
                                "Use Flexbox and Grid for layouts",
                                "Make the layout fully responsive for mobile, tablet, and desktop",
                                "Push your first project to GitHub"),
                        "StudyFlow — Responsive Study Planner Landing Page. Build a landing page for a fictional student productivity app with navbar, hero section, feature cards, pricing section, testimonials, FAQ, and contact CTA.",
                        "This project proves that you can create a professional business-style landing page, structure content clearly, and handle responsive layouts like a real frontend developer.",
                        resources(
                                res("MDN HTML Basics",
                                        "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"),
                                res("freeCodeCamp Responsive Web Design",
                                        "https://www.freecodecamp.org/learn/2022/responsive-web-design/"),
                                res("CSS Tricks Flexbox Guide",
                                        "https://css-tricks.com/snippets/css/a-guide-to-flexbox/")),
                        30),
                phase("Phase 2", "JavaScript Core",
                        list("DOM", "ES6+", "APIs", "Async JavaScript"),
                        "Learn how to make websites interactive, respond to user actions, and work with real data.",
                        list("Create form validation", "Build a counter and theme toggle",
                                "Fetch data from a public API", "Show loading and error states",
                                "Store user data using localStorage"),
                        "FocusBoard — Interactive Study Planner. Build a task planner where users can add study tasks, mark them complete, filter by subject, and save tasks in localStorage.",
                        "This project proves that you understand real browser logic, user interaction, state changes, and persistent data without needing a backend yet.",
                        resources(res("JavaScript.info", "https://javascript.info/"),
                                res("MDN JavaScript Guide",
                                        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"),
                                res("freeCodeCamp JavaScript",
                                        "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/")),
                        45),
                phase("Phase 3", "React + Tailwind",
                        list("React", "Components", "State", "Tailwind CSS"),
                        "Learn how to build reusable UI components and manage dynamic data in a modern frontend application.",
                        list("Create reusable card and button components", "Use useState for interactive UI",
                                "Render lists using map", "Use conditional rendering",
                                "Style layouts quickly with Tailwind CSS"),
                        "SkillTrack — Learning Progress Dashboard. Build a dashboard where users can track subjects, progress percentage, weekly goals, and recommended next steps.",
                        "This project demonstrates component-based thinking, state management, dashboard UI design, and Tailwind-based styling — all important for frontend and full-stack roles.",
                        resources(res("React Official Docs", "https://react.dev/learn"),
                                res("Tailwind CSS Docs", "https://tailwindcss.com/docs"),
                                res("Vite Guide", "https://vite.dev/guide/")),
                        50),
                phase("Phase 4", "Backend Basics",
                        list("Node.js", "Express", "REST APIs", "Database Basics"),
                        "Learn how frontend apps communicate with servers and how data is created, stored, updated, and deleted.",
                        list("Create basic Express routes", "Understand GET, POST, PUT, DELETE",
                                "Connect frontend form data to an API", "Use mock data or a simple database",
                                "Handle API errors properly"),
                        "NoteNest — Full Stack Notes App. Build a notes app where users can create, edit, delete, and view notes using a React frontend and Express backend.",
                        "This project proves that you understand the complete full-stack flow: frontend UI, API communication, backend routes, and data handling.",
                        resources(res("Node.js Docs", "https://nodejs.org/en/learn"),
                                res("Express Guide", "https://expressjs.com/en/starter/installing.html"),
                                res("MDN HTTP Methods", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods")),
                        55),
                phase("Phase 5", "Deployment & Portfolio",
                        list("Vercel", "GitHub", "Documentation", "Resume Projects"),
                        "Learn how to present your work professionally so recruiters can understand and test your project quickly.",
                        list("Deploy your best project", "Write a clean README", "Add screenshots and live demo links",
                                "Explain features and tech stack clearly", "Add the project to your portfolio"),
                        "Full Stack Portfolio Case Study. Create a polished project page for your best app with screenshots, live demo, GitHub link, features, tech stack, and what you learned.",
                        "A good project presentation can make even a simple project look professional and recruiter-ready.",
                        resources(res("Vercel Deployment Docs", "https://vercel.com/docs"), res("GitHub README Guide",
                                "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"),
                                res("Git Handbook", "https://guides.github.com/introduction/git-handbook/")),
                        25)));
        fullStack.put("Intermediate", Arrays.asList(
                phase("Phase 1", "Advanced React & UI Patterns",
                        list("Advanced React", "Hooks", "Reusable Components", "State Management"),
                        "Strengthen your React skills by building cleaner, reusable, and scalable frontend components.",
                        list("Refactor repeated UI into reusable components", "Use useState and useEffect properly",
                                "Create reusable form and card components", "Handle loading and empty states",
                                "Organize components into clean folders"),
                        "DevBoard — Developer Productivity Dashboard. Build a dashboard with task cards, progress widgets, filters, and reusable UI components.",
                        "This project proves that you can build scalable frontend layouts instead of writing one large messy component.",
                        resources(res("React Thinking in React", "https://react.dev/learn/thinking-in-react"),
                                res("React Hooks", "https://react.dev/reference/react/hooks"),
                                res("Tailwind Components", "https://tailwindcss.com/docs/reusing-styles")),
                        35),
                phase("Phase 2", "Backend Integration",
                        list("Express", "REST APIs", "Authentication", "Database Design"),
                        "Learn how to connect a polished frontend with real backend logic and persistent data.",
                        list("Create REST API endpoints", "Connect React forms to backend routes",
                                "Add authentication flow basics", "Store and fetch data from a database",
                                "Handle API errors and validation"),
                        "TaskForge — Full Stack Task Manager. Build an app with user login, task creation, task editing, filtering, and persistent storage.",
                        "This is a strong internship-ready project because it shows CRUD operations, authentication basics, API integration, and real product flow.",
                        resources(res("Express Routing", "https://expressjs.com/en/guide/routing.html"),
                                res("MongoDB University", "https://learn.mongodb.com/"),
                                res("MDN REST APIs", "https://developer.mozilla.org/en-US/docs/Glossary/REST")),
                        45),
                phase("Phase 3", "Production Skills",
                        list("Error Handling", "Validation", "API Security", "Deployment"),
                        "Move beyond basic functionality and learn how to make your app more reliable, secure, and deployable.",
                        list("Add form validation", "Show proper error messages", "Protect sensitive routes",
                                "Deploy frontend and backend", "Test the app as a real user"),
                        "SecureNotes — Production-Ready Notes App. Build a notes app with authentication, validation, protected routes, and deployment.",
                        "This project shows that you understand practical production concerns, not just basic frontend screens.",
                        resources(res("OWASP Top 10", "https://owasp.org/www-project-top-ten/"),
                                res("Vercel Docs", "https://vercel.com/docs"),
                                res("Render Deploy Docs", "https://render.com/docs")),
                        40),
                phase("Phase 4", "Portfolio Project Polish",
                        list("GitHub", "Documentation", "Clean UI", "Project Explanation"),
                        "Turn your best project into a recruiter-friendly case study with clear explanation and strong presentation.",
                        list("Write a professional README", "Add screenshots and demo link",
                                "Explain the problem and solution", "Mention tech stack and features",
                                "Prepare a 1-minute explanation of the project"),
                        "Internship Case Study Page. Create a project showcase page explaining one full-stack project with problem, features, architecture, screenshots, and live links.",
                        "Recruiters often judge projects quickly. A strong case study makes your work easier to understand and more impressive.",
                        resources(res("GitHub README Guide",
                                "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"),
                                res("Vercel Templates", "https://vercel.com/templates"),
                                res("Google Technical Writing", "https://developers.google.com/tech-writing")),
                        35)));
        fullStack.put("Advanced", Arrays.asList(
                phase("Phase 1", "System-Level Thinking",
                        list("Architecture", "Scalability Basics", "Caching", "API Design"),
                        "Learn how larger web applications are planned, structured, and optimized before writing code.",
                        list("Design API routes before implementation",
                                "Break a large app into frontend, backend, and database layers",
                                "Understand where caching improves performance", "Create a simple architecture diagram",
                                "Compare monolithic vs modular project structure"),
                        "ArchitectPro — Full Stack Architecture Blueprint. Design the architecture for a SaaS-style project including frontend pages, backend routes, database entities, and deployment flow.",
                        "This proves that you can think beyond coding screens and understand how a real full-stack product is planned.",
                        resources(res("System Design Primer", "https://github.com/donnemartin/system-design-primer"),
                                res("REST API Design", "https://restfulapi.net/"),
                                res("Web Architecture 101",
                                        "https://engineering.videoblocks.com/web-architecture-101-a3224e126947")),
                        35),
                phase("Phase 2", "Advanced Engineering",
                        list("Testing", "Performance", "Security", "Optimization"),
                        "Improve app quality by making projects faster, safer, more reliable, and easier to maintain.",
                        list("Add input validation", "Handle edge cases and error states", "Optimize slow components",
                                "Write basic tests for important logic", "Review common security mistakes"),
                        "SecureSprint — Optimized Full Stack App. Take an existing full-stack project and add validation, protected routes, optimized loading states, and basic tests.",
                        "This shows maturity as a developer because you are improving reliability and user experience, not just building basic features.",
                        resources(res("OWASP Top 10", "https://owasp.org/www-project-top-ten/"),
                                res("React Performance", "https://react.dev/learn/render-and-commit"),
                                res("Vitest Docs", "https://vitest.dev/guide/")),
                        45),
                phase("Phase 3", "High-Impact Product Build",
                        list("Advanced UI", "Backend Logic", "Deployment", "Documentation"),
                        "Build one polished product-style project that can become the strongest piece in your portfolio.",
                        list("Choose a real problem to solve", "Build a clean landing page and dashboard",
                                "Add meaningful backend functionality", "Deploy the project publicly",
                                "Write a strong case study explaining the product"),
                        "LaunchPad — SaaS MVP Builder. Build a complete SaaS-style product with landing page, dashboard, user flow, backend API, polished UI, deployment, and documentation.",
                        "This is a portfolio centerpiece project. It shows product thinking, frontend polish, backend understanding, and ability to ship a complete web application.",
                        resources(res("Vercel Docs", "https://vercel.com/docs"),
                                res("Google Technical Writing", "https://developers.google.com/tech-writing"),
                                res("Refactoring Guru", "https://refactoring.guru/design-patterns")),
                        55)));
        roadmaps.put("Full Stack Development", fullStack);

        // ── FRONTEND DEVELOPMENT ──────────────────────────────
        Map<String, List<Map<String, Object>>> frontend = new LinkedHashMap<>();
        frontend.put("Beginner", Arrays.asList(
                phase("Phase 1", "UI Foundations",
                        list("HTML", "CSS", "Responsive Design", "Accessibility"),
                        "Learn how to convert simple designs into clean, responsive, and accessible web pages.",
                        list("Build a responsive navbar", "Create reusable card layouts",
                                "Practice mobile-first design", "Use semantic HTML tags",
                                "Check color contrast and basic accessibility"),
                        "BrandLaunch — Responsive Product Landing Page. Build a landing page for a fictional startup with hero, feature cards, pricing, testimonials, FAQ, and footer.",
                        "This project proves that you can create a visually polished frontend page that looks like real client or startup work.",
                        resources(res("MDN HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML"),
                                res("MDN CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS"),
                                res("Web.dev Accessibility", "https://web.dev/learn/accessibility/")),
                        30),
                phase("Phase 2", "JavaScript for Interfaces",
                        list("DOM", "Events", "Forms", "APIs"),
                        "Learn how to make static pages interactive using JavaScript and browser events.",
                        list("Create a dark mode toggle", "Validate forms", "Fetch data from a public API",
                                "Show loading and error states", "Store preferences in localStorage"),
                        "SpendSmart — Interactive Expense Calculator. Build a frontend tool where users can add expenses, categorize them, view totals, and save data locally.",
                        "This project shows that you can build useful browser-based functionality instead of only static pages.",
                        resources(res("JavaScript.info", "https://javascript.info/"),
                                res("MDN DOM Guide",
                                        "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"),
                                res("Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API")),
                        40),
                phase("Phase 3", "React Basics",
                        list("Components", "Props", "State", "Conditional Rendering"),
                        "Learn how to break UI into reusable components and render dynamic data using React.",
                        list("Create reusable buttons and cards", "Use props to pass data",
                                "Use state for interactivity", "Render lists with map",
                                "Show different UI based on conditions"),
                        "CoursePilot — Course Discovery Dashboard. Build a dashboard that displays courses, filters them by category, and shows recommended learning paths.",
                        "This project demonstrates real React fundamentals: components, props, state, lists, filtering, and conditional rendering.",
                        resources(res("React Learn", "https://react.dev/learn"),
                                res("React State", "https://react.dev/learn/state-a-components-memory"),
                                res("Vite Guide", "https://vite.dev/guide/")),
                        45),
                phase("Phase 4", "UI Polish & Portfolio",
                        list("Tailwind CSS", "Animations", "Layout", "Responsive UX"),
                        "Learn how to make interfaces feel premium through spacing, typography, animation, and responsive polish.",
                        list("Use Tailwind utility classes cleanly", "Add hover and transition effects",
                                "Improve spacing and typography", "Make mobile layouts feel intentional",
                                "Deploy your frontend project"),
                        "NovaDash — Premium Frontend Dashboard. Build a modern dashboard UI with stat cards, charts placeholder, sidebar, responsive layout, and smooth hover effects.",
                        "A polished dashboard is visually impressive and strongly demonstrates frontend UI skills for internships.",
                        resources(res("Tailwind Docs", "https://tailwindcss.com/docs"),
                                res("Framer Motion", "https://motion.dev/docs/react"),
                                res("Vercel Deploy", "https://vercel.com/docs")),
                        35)));
        frontend.put("Intermediate", Arrays.asList(
                phase("Phase 1", "Advanced React UI",
                        list("Hooks", "Component Design", "Reusable UI", "State Patterns"),
                        "Improve your ability to build scalable frontend applications using cleaner component structure and better state handling.",
                        list("Extract repeated UI into reusable components", "Create custom hooks",
                                "Manage loading and error states", "Design reusable layouts",
                                "Organize files professionally"),
                        "PulseBoard — SaaS Dashboard UI. Build a dashboard with reusable cards, filters, activity panels, and responsive layout.",
                        "This project proves you can build a product-like frontend interface instead of isolated beginner components.",
                        resources(res("React Hooks", "https://react.dev/reference/react/hooks"),
                                res("Thinking in React", "https://react.dev/learn/thinking-in-react"),
                                res("Tailwind Reusing Styles", "https://tailwindcss.com/docs/reusing-styles")),
                        40),
                phase("Phase 2", "API-Based Frontend",
                        list("API Fetching", "Loading States", "Error States", "Forms"),
                        "Learn how production frontends communicate with APIs and handle real-world data states.",
                        list("Fetch and display API data", "Add search and filters", "Handle loading skeletons",
                                "Show user-friendly error messages", "Build clean forms"),
                        "JobLens — Internship Search Interface. Build a frontend app that displays job/internship listings, filters by role, and shows detailed cards.",
                        "This project feels realistic for career-focused users and shows practical API-based frontend skills.",
                        resources(res("MDN Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"),
                                res("React Effects", "https://react.dev/learn/synchronizing-with-effects"),
                                res("Frontend Mentor", "https://www.frontendmentor.io/")),
                        35),
                phase("Phase 3", "Frontend Portfolio Polish",
                        list("Animations", "Performance", "Deployment", "Documentation"),
                        "Turn your frontend work into a polished, recruiter-friendly project with strong visual presentation.",
                        list("Add smooth page transitions", "Improve Lighthouse performance", "Deploy on Vercel",
                                "Write a project README", "Create a case-study section"),
                        "Orbitfolio — Animated Developer Portfolio. Build a premium personal portfolio with project cards, animations, resume link, contact section, and live project demos.",
                        "A strong portfolio helps recruiters quickly understand your frontend ability and project quality.",
                        resources(res("Vercel Docs", "https://vercel.com/docs"),
                                res("Web.dev Performance", "https://web.dev/learn/performance/"),
                                res("Framer Motion Docs", "https://motion.dev/docs/react")),
                        35)));
        frontend.put("Advanced", Arrays.asList(
                phase("Phase 1", "Frontend Architecture",
                        list("Design Systems", "Scalable Components", "Performance", "UX Patterns"),
                        "Learn how to design frontend systems that stay maintainable as the application grows.",
                        list("Create a reusable component system", "Define spacing and typography rules",
                                "Build shared layout components", "Optimize large component trees",
                                "Document component usage"),
                        "CoreUI Kit — Mini Design System. Build a reusable UI kit with buttons, cards, modals, inputs, badges, and layout components.",
                        "A design system project shows advanced frontend thinking and separates you from basic UI builders.",
                        resources(res("Design Systems Guide", "https://www.designsystems.com/"),
                                res("React Performance", "https://react.dev/learn/render-and-commit"),
                                res("Tailwind Config", "https://tailwindcss.com/docs/theme")),
                        40),
                phase("Phase 2", "Premium Product UI",
                        list("Animations", "Microinteractions", "Accessibility", "Optimization"),
                        "Build interfaces that feel polished, fast, accessible, and production-ready.",
                        list("Add subtle microinteractions", "Improve keyboard accessibility",
                                "Optimize images and layout shifts", "Refine mobile responsiveness",
                                "Polish final UI details"),
                        "FlowSpace — High-Performance Product Website. Build a premium product website with animated sections, responsive layouts, accessibility improvements, and optimized assets.",
                        "This project demonstrates high-end frontend polish, which is especially valuable for design-heavy web development internships.",
                        resources(res("Web.dev Accessibility", "https://web.dev/learn/accessibility/"),
                                res("Web.dev Performance", "https://web.dev/learn/performance/"),
                                res("Motion Docs", "https://motion.dev/docs/react")),
                        45)));
        roadmaps.put("Frontend Development", frontend);

        // ── AI / ML ───────────────────────────────────────────
        Map<String, List<Map<String, Object>>> aiml = new LinkedHashMap<>();
        aiml.put("Beginner", Arrays.asList(
                phase("Phase 1", "Python & Math Foundations",
                        list("Python", "NumPy", "Pandas", "Basic Statistics"),
                        "Build the programming and math foundation needed to understand machine learning instead of just copying models.",
                        list("Practice Python lists, dictionaries, loops, and functions",
                                "Use NumPy arrays for basic numerical operations",
                                "Load and inspect datasets using Pandas",
                                "Calculate mean, median, variance, and standard deviation",
                                "Create simple data summaries from CSV files"),
                        "Student Insights Analyzer. Build a Python notebook that analyzes student marks, attendance, and study hours to find patterns using Pandas and basic statistics.",
                        "This project builds the exact foundation needed for machine learning: handling data, understanding patterns, and explaining insights clearly.",
                        resources(res("Python Official Tutorial", "https://docs.python.org/3/tutorial/"),
                                res("Kaggle Python Course", "https://www.kaggle.com/learn/python"),
                                res("Khan Academy Statistics",
                                        "https://www.khanacademy.org/math/statistics-probability")),
                        40),
                phase("Phase 2", "Machine Learning Basics",
                        list("Regression", "Classification", "Model Evaluation", "Scikit-learn"),
                        "Learn how machine learning models are trained, tested, and evaluated using real datasets.",
                        list("Train a simple linear regression model", "Build a classification model",
                                "Split data into train and test sets",
                                "Calculate accuracy, precision, recall, and F1-score",
                                "Compare model performance using metrics"),
                        "Placement Predictor. Build a machine learning model that predicts placement chances based on skills, CGPA, projects, and preparation level.",
                        "This is a practical and relatable ML project that shows data preprocessing, model training, evaluation, and real-world interpretation.",
                        resources(res("Scikit-learn Tutorials", "https://scikit-learn.org/stable/tutorial/index.html"),
                                res("Kaggle Intro to ML", "https://www.kaggle.com/learn/intro-to-machine-learning"),
                                res("Google ML Crash Course",
                                        "https://developers.google.com/machine-learning/crash-course")),
                        50),
                phase("Phase 3", "Deep Learning Introduction",
                        list("Neural Networks", "TensorFlow/PyTorch", "CNN Basics", "Training"),
                        "Understand how neural networks learn patterns and how deep learning is used for image and text-based problems.",
                        list("Understand neurons, weights, bias, and activation functions",
                                "Train a basic neural network", "Experiment with epochs and learning rate",
                                "Build a CNN for image classification", "Visualize training accuracy and loss"),
                        "BrainScan Lite — Medical Image Classifier Demo. Build a beginner-friendly CNN demo that classifies medical-style image data and explains prediction confidence.",
                        "This project looks impressive because it connects AI with a real-world use case while still being manageable as a beginner deep learning project.",
                        resources(res("TensorFlow Tutorials", "https://www.tensorflow.org/tutorials"),
                                res("PyTorch Tutorials", "https://pytorch.org/tutorials/"),
                                res("3Blue1Brown Neural Networks",
                                        "https://www.3blue1brown.com/topics/neural-networks")),
                        60),
                phase("Phase 4", "AI Project Deployment",
                        list("Streamlit", "APIs", "Model Deployment", "Documentation"),
                        "Learn how to turn notebooks and models into usable demos that others can open and test.",
                        list("Create a Streamlit interface", "Accept user input for predictions",
                                "Display model output clearly", "Add explanation of model limitations",
                                "Deploy the AI demo online"),
                        "AI Career Advisor Demo. Build a small web app that takes user interests and recommends a tech path using a simple model or rule-based AI logic.",
                        "This connects machine learning with a usable product experience, which makes the project stronger than a notebook-only ML project.",
                        resources(res("Streamlit Docs", "https://docs.streamlit.io/"),
                                res("Hugging Face Spaces", "https://huggingface.co/docs/hub/spaces"),
                                res("Model Cards Guide", "https://huggingface.co/docs/hub/model-cards")),
                        35)));
        aiml.put("Intermediate", Arrays.asList(
                phase("Phase 1", "Data Preparation & Feature Engineering",
                        list("Data Cleaning", "Feature Engineering", "EDA", "Pipelines"),
                        "Improve model quality by learning how to clean data, create useful features, and prepare datasets properly.",
                        list("Handle missing values", "Encode categorical variables", "Scale numerical features",
                                "Create new useful features", "Build preprocessing pipelines"),
                        "SkillMatch Predictor. Build a model that predicts suitable tech roles based on skills, projects, and experience level.",
                        "This project feels product-like and shows that you can transform messy user data into meaningful predictions.",
                        resources(res("Kaggle Data Cleaning", "https://www.kaggle.com/learn/data-cleaning"),
                                res("Scikit-learn Pipelines", "https://scikit-learn.org/stable/modules/compose.html"),
                                res("Feature Engineering Guide", "https://www.kaggle.com/learn/feature-engineering")),
                        45),
                phase("Phase 2", "Model Improvement",
                        list("Hyperparameter Tuning", "Cross Validation", "Metrics", "Error Analysis"),
                        "Learn how to improve models systematically instead of randomly changing algorithms.",
                        list("Use cross-validation", "Tune model hyperparameters", "Compare multiple algorithms",
                                "Analyze false positives and false negatives",
                                "Document why one model performs better"),
                        "Smart Resume Screener. Build a model that scores resumes against role requirements and explains which skills are missing.",
                        "This is a strong AI portfolio project because it combines classification, scoring, explainability, and a real hiring-related use case.",
                        resources(
                                res("Scikit-learn Model Selection",
                                        "https://scikit-learn.org/stable/model_selection.html"),
                                res("Google ML Rules",
                                        "https://developers.google.com/machine-learning/guides/rules-of-ml"),
                                res("Kaggle Intermediate ML",
                                        "https://www.kaggle.com/learn/intermediate-machine-learning")),
                        50),
                phase("Phase 3", "Deep Learning Projects",
                        list("CNNs", "Transfer Learning", "Model Evaluation", "Visualization"),
                        "Use deep learning models on practical image or text problems and explain model performance clearly.",
                        list("Use transfer learning", "Train and validate a CNN", "Plot accuracy and loss curves",
                                "Use confusion matrix for evaluation", "Explain model confidence and mistakes"),
                        "Plant Disease Detector. Build an image classification app that detects plant leaf diseases and explains prediction confidence.",
                        "This project looks impressive, has a real-world use case, and demonstrates deep learning, evaluation, and deployment potential.",
                        resources(
                                res("TensorFlow Transfer Learning",
                                        "https://www.tensorflow.org/tutorials/images/transfer_learning"),
                                res("PyTorch Transfer Learning",
                                        "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html"),
                                res("Kaggle Computer Vision", "https://www.kaggle.com/learn/computer-vision")),
                        60),
                phase("Phase 4", "AI App Integration",
                        list("Model APIs", "Frontend Demo", "Deployment", "Explainability"),
                        "Package your model into an application that users can interact with and understand.",
                        list("Serve model predictions through an API", "Create a simple frontend or Streamlit app",
                                "Show prediction confidence", "Add limitations and ethical notes",
                                "Deploy the app publicly"),
                        "InterviewCoach AI. Build an AI-powered mock interview helper that takes answers and gives structured feedback using model/API logic.",
                        "This project feels like a real AI product and demonstrates that you can combine models, user experience, and deployment.",
                        resources(res("FastAPI Docs", "https://fastapi.tiangolo.com/"),
                                res("Streamlit Docs", "https://docs.streamlit.io/"),
                                res("Hugging Face Course", "https://huggingface.co/learn/nlp-course/chapter1/1")),
                        45)));
        aiml.put("Advanced", Arrays.asList(
                phase("Phase 1", "Advanced ML Systems",
                        list("ML Pipelines", "Experiment Tracking", "Model Versioning", "MLOps Basics"),
                        "Learn how serious ML projects are organized, tracked, versioned, and improved over time.",
                        list("Track model experiments", "Save and reload trained models", "Compare model versions",
                                "Document datasets and assumptions", "Create a reproducible training pipeline"),
                        "ModelLab — ML Experiment Tracker. Build a system that compares multiple models, metrics, datasets, and experiment notes.",
                        "This proves advanced thinking because it focuses on maintainability and reproducibility, not just training one model.",
                        resources(res("MLflow Docs", "https://mlflow.org/docs/latest/index.html"),
                                res("Made With ML", "https://madewithml.com/"),
                                res("Google MLOps",
                                        "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning")),
                        55),
                phase("Phase 2", "LLM & Generative AI Apps",
                        list("Prompting", "Embeddings", "RAG Basics", "AI APIs"),
                        "Build AI applications that use language models to answer questions, summarize data, or generate personalized recommendations.",
                        list("Use an AI API safely", "Write structured prompts", "Understand embeddings conceptually",
                                "Build a simple retrieval-based assistant", "Add guardrails and fallback responses"),
                        "DocuMentor AI. Build an AI assistant that answers questions from uploaded study notes or documentation using retrieval-style logic.",
                        "This is highly relevant today because it shows practical generative AI application development, not just traditional ML.",
                        resources(res("OpenAI Docs", "https://platform.openai.com/docs"),
                                res("Google AI Studio", "https://aistudio.google.com/"),
                                res("LangChain Docs", "https://python.langchain.com/docs/introduction/")),
                        60),
                phase("Phase 3", "Production AI Portfolio",
                        list("Deployment", "Monitoring", "UX", "Ethical AI"),
                        "Turn an advanced AI idea into a polished product demo with clear UX, limitations, and responsible AI notes.",
                        list("Deploy a model/API-backed app", "Add usage instructions",
                                "Show confidence or explanation where possible", "Mention limitations clearly",
                                "Write a professional case study"),
                        "PathPilot AI. Build an AI-powered career guidance assistant that takes a user's skills, goals, and available time, then recommends a structured learning plan with projects and milestones.",
                        "This is a strong capstone because it combines AI, product thinking, personalization, frontend UX, and real-world usefulness.",
                        resources(
                                res("Responsible AI Guide",
                                        "https://ai.google/responsibility/responsible-ai-practices/"),
                                res("Hugging Face Spaces", "https://huggingface.co/docs/hub/spaces"),
                                res("Google Technical Writing", "https://developers.google.com/tech-writing")),
                        55)));
        roadmaps.put("AI / ML", aiml);

        // ── DATA SCIENCE ──────────────────────────────────────
        Map<String, List<Map<String, Object>>> dataSci = new LinkedHashMap<>();
        dataSci.put("Beginner", Arrays.asList(
                phase("Phase 1", "Python & Data Foundations",
                        list("Python", "Pandas", "NumPy", "Data Cleaning"),
                        "Learn how to work with datasets, clean messy data, and prepare it for analysis.",
                        list("Load CSV files using Pandas", "Handle missing values", "Filter and sort data",
                                "Create summary statistics", "Export cleaned datasets"),
                        "CampusSpend Analyzer. Analyze student spending data across food, travel, books, and subscriptions to find monthly patterns and savings opportunities.",
                        "This project teaches practical data cleaning and analysis using a relatable student-life dataset.",
                        resources(res("Kaggle Pandas", "https://www.kaggle.com/learn/pandas"),
                                res("Pandas Docs", "https://pandas.pydata.org/docs/"),
                                res("NumPy Quickstart", "https://numpy.org/doc/stable/user/quickstart.html")),
                        40),
                phase("Phase 2", "Data Visualization",
                        list("Matplotlib", "Seaborn", "Charts", "Storytelling"),
                        "Learn how to turn raw numbers into visual insights that people can understand quickly.",
                        list("Create bar charts and line charts", "Visualize category-wise spending",
                                "Compare trends over time", "Use labels and titles clearly",
                                "Write short insight summaries"),
                        "Study Habits Dashboard. Build visualizations showing how study hours, sleep, attendance, and marks relate to student performance.",
                        "This project proves that you can communicate insights visually, which is a core data science skill.",
                        resources(res("Matplotlib Tutorials", "https://matplotlib.org/stable/tutorials/index.html"),
                                res("Seaborn Tutorial", "https://seaborn.pydata.org/tutorial.html"),
                                res("Data Visualization Guide", "https://www.data-to-viz.com/")),
                        35),
                phase("Phase 3", "Exploratory Data Analysis",
                        list("EDA", "Correlation", "Outliers", "Insights"),
                        "Learn how to investigate data, find patterns, detect problems, and explain what the data suggests.",
                        list("Check column distributions", "Find correlations", "Detect outliers", "Compare groups",
                                "Write conclusions from charts"),
                        "Internship Trends Report. Analyze internship listing data to discover common skills, popular roles, remote/on-site patterns, and experience requirements.",
                        "This project feels realistic and career-focused because it extracts useful insights from job-market style data.",
                        resources(res("Kaggle Data Visualization", "https://www.kaggle.com/learn/data-visualization"),
                                res("Google Data Analytics", "https://grow.google/certificates/data-analytics/"),
                                res("Towards Data Science EDA",
                                        "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15/")),
                        45),
                phase("Phase 4", "Basic Machine Learning",
                        list("Regression", "Classification", "Evaluation Metrics", "Scikit-learn"),
                        "Learn how data science connects to predictive modeling and how to evaluate model performance.",
                        list("Train a regression model", "Train a classification model", "Split train and test data",
                                "Evaluate accuracy and error", "Explain model results simply"),
                        "Student Success Predictor. Build a model that predicts whether a student is likely to perform well based on study hours, attendance, and previous scores.",
                        "This project connects data analysis with prediction and gives you a complete beginner-friendly data science case study.",
                        resources(res("Scikit-learn Tutorials", "https://scikit-learn.org/stable/tutorial/index.html"),
                                res("Kaggle Intro to ML", "https://www.kaggle.com/learn/intro-to-machine-learning"),
                                res("Google ML Crash Course",
                                        "https://developers.google.com/machine-learning/crash-course")),
                        50)));
        dataSci.put("Intermediate", Arrays.asList(
                phase("Phase 1", "Advanced Data Cleaning",
                        list("Missing Data", "Feature Engineering", "Encoding", "Pipelines"),
                        "Learn how to prepare messy real-world datasets so analysis and models become more reliable.",
                        list("Handle missing and duplicate data", "Create new features from existing columns",
                                "Encode categorical variables", "Normalize numerical columns",
                                "Build reusable preprocessing steps"),
                        "Job Market Skill Analyzer. Clean and analyze job listing data to identify in-demand skills, role clusters, and salary trends.",
                        "This project is valuable because it connects data science skills with career insights and requires meaningful preprocessing.",
                        resources(res("Kaggle Data Cleaning", "https://www.kaggle.com/learn/data-cleaning"),
                                res("Feature Engineering", "https://www.kaggle.com/learn/feature-engineering"),
                                res("Scikit-learn Preprocessing",
                                        "https://scikit-learn.org/stable/modules/preprocessing.html")),
                        45),
                phase("Phase 2", "Dashboards & Analytics",
                        list("Dashboards", "KPIs", "Plotly", "Streamlit"),
                        "Learn how to turn analysis into an interactive dashboard that non-technical users can explore.",
                        list("Create KPI cards", "Build interactive charts", "Add filters", "Write insight summaries",
                                "Deploy a dashboard"),
                        "CareerPulse Dashboard. Build an interactive dashboard showing tech role demand, top skills, and learning recommendations based on market trends.",
                        "This project looks professional because it combines analytics, UI, storytelling, and practical career value.",
                        resources(res("Streamlit Docs", "https://docs.streamlit.io/"),
                                res("Plotly Python", "https://plotly.com/python/"),
                                res("Dashboard Design Tips",
                                        "https://www.tableau.com/learn/articles/dashboard-design")),
                        45),
                phase("Phase 3", "Predictive Modeling",
                        list("Model Selection", "Cross Validation", "Metrics", "Error Analysis"),
                        "Learn how to compare models, evaluate them correctly, and explain why one model performs better.",
                        list("Compare multiple algorithms", "Use cross-validation", "Tune hyperparameters",
                                "Analyze model errors", "Create a final model report"),
                        "ChurnSense Predictor. Build a customer churn prediction case study with cleaning, visualization, model comparison, and business recommendations.",
                        "Churn prediction is a classic real-world data science problem and demonstrates business thinking along with modeling.",
                        resources(
                                res("Scikit-learn Model Selection",
                                        "https://scikit-learn.org/stable/model_selection.html"),
                                res("Kaggle Intermediate ML",
                                        "https://www.kaggle.com/learn/intermediate-machine-learning"),
                                res("Evaluation Metrics",
                                        "https://scikit-learn.org/stable/modules/model_evaluation.html")),
                        55),
                phase("Phase 4", "Portfolio Case Study",
                        list("Storytelling", "GitHub", "Reports", "Deployment"),
                        "Learn how to present your data science work as a professional case study, not just a notebook.",
                        list("Write a problem statement", "Explain the dataset", "Summarize insights",
                                "Show model results clearly", "Publish notebook, dashboard, and README"),
                        "End-to-End Data Science Case Study. Create a polished case study with dataset explanation, EDA, model, dashboard screenshots, and business recommendations.",
                        "This project helps recruiters understand your full data science workflow from raw data to final insights.",
                        resources(res("Google Technical Writing", "https://developers.google.com/tech-writing"), res(
                                "GitHub README Guide",
                                "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"),
                                res("Kaggle Notebooks", "https://www.kaggle.com/code")),
                        35)));
        dataSci.put("Advanced", Arrays.asList(
                phase("Phase 1", "Advanced Analytics",
                        list("SQL", "Cohort Analysis", "A/B Testing", "Business Metrics"),
                        "Learn how data scientists solve business problems using metrics, experiments, and structured analysis.",
                        list("Write SQL queries for analysis", "Calculate conversion and retention metrics",
                                "Perform cohort analysis", "Understand A/B testing basics",
                                "Translate data into business recommendations"),
                        "Product Growth Analysis. Analyze user behavior data to identify retention issues, feature adoption, and growth opportunities.",
                        "This project shows business-focused data science thinking, which is highly valuable in real companies.",
                        resources(res("Mode SQL Tutorial", "https://mode.com/sql-tutorial/"),
                                res("A/B Testing Guide",
                                        "https://www.optimizely.com/optimization-glossary/ab-testing/"),
                                res("Cohort Analysis Guide", "https://clevertap.com/blog/cohort-analysis/")),
                        50),
                phase("Phase 2", "Machine Learning Systems",
                        list("Pipelines", "Model Monitoring", "Deployment", "Reproducibility"),
                        "Learn how to make data science projects reproducible, deployable, and easier to maintain.",
                        list("Create reusable preprocessing pipelines", "Save trained models", "Track experiments",
                                "Deploy a prediction app", "Document assumptions and limitations"),
                        "ForecastLab — Demand Forecasting System. Build a forecasting project with data pipeline, model comparison, deployment demo, and clear limitations.",
                        "Forecasting systems are realistic business use cases and demonstrate advanced data science workflow maturity.",
                        resources(res("MLflow Docs", "https://mlflow.org/docs/latest/index.html"),
                                res("Scikit-learn Pipelines", "https://scikit-learn.org/stable/modules/compose.html"),
                                res("Streamlit Deployment", "https://docs.streamlit.io/deploy")),
                        60),
                phase("Phase 3", "Capstone Data Product",
                        list("Data Product", "Dashboard UX", "Model Explanation", "Case Study"),
                        "Build one polished data product that combines analysis, prediction, dashboard UI, and a written case study.",
                        list("Choose a real-world dataset", "Build a clean dashboard",
                                "Add a predictive model if useful", "Explain insights in plain language",
                                "Publish a complete project case study"),
                        "InsightOps — Business Intelligence + Prediction Platform. Build a dashboard that analyzes operational data, highlights key insights, and includes one prediction feature.",
                        "This project feels like a real product because it combines analytics, machine learning, visual communication, and business decision support.",
                        resources(res("Streamlit Docs", "https://docs.streamlit.io/"),
                                res("Plotly Dash", "https://dash.plotly.com/"),
                                res("Google Technical Writing", "https://developers.google.com/tech-writing")),
                        65)));
        roadmaps.put("Data Science", dataSci);

        // ── CYBERSECURITY ─────────────────────────────────────
        Map<String, List<Map<String, Object>>> cyber = new LinkedHashMap<>();
        cyber.put("Beginner", Arrays.asList(
                phase("Phase 1", "Networking & Linux Basics",
                        list("TCP/IP", "DNS", "HTTP", "Linux", "Command Line"),
                        "Build the basic technical foundation needed to understand how systems communicate and where security risks appear.",
                        list("Learn common networking terms", "Use basic Linux commands",
                                "Understand HTTP request and response flow", "Practice ping, traceroute, and nslookup",
                                "Document how a browser connects to a website"),
                        "NetMap Notes — Networking Fundamentals Lab. Create a beginner-friendly lab report explaining DNS, HTTP, IP addresses, ports, and common network commands with screenshots.",
                        "This project proves that you understand the foundation of cybersecurity instead of jumping directly into tools.",
                        resources(res("Cisco Networking Basics", "https://www.netacad.com/courses/networking-basics"),
                                res("Linux Journey", "https://linuxjourney.com/"),
                                res("MDN HTTP Overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview")),
                        40),
                phase("Phase 2", "Web Security Fundamentals",
                        list("OWASP", "Authentication", "Input Validation", "HTTPS"),
                        "Understand the most common web application security risks and how developers can prevent them.",
                        list("Study OWASP Top 10 basics", "Understand SQL injection conceptually",
                                "Learn XSS prevention basics", "Review password and authentication mistakes",
                                "Write notes on secure form handling"),
                        "SecureForm Demo. Build a simple login/contact form page and document common security mistakes like weak validation, insecure passwords, and unsafe input handling.",
                        "This project connects cybersecurity with web development and shows that you understand security from a developer's perspective.",
                        resources(res("OWASP Top 10", "https://owasp.org/www-project-top-ten/"),
                                res("PortSwigger Web Security Academy", "https://portswigger.net/web-security"),
                                res("MDN Web Security", "https://developer.mozilla.org/en-US/docs/Web/Security")),
                        45),
                phase("Phase 3", "Hands-on Security Labs",
                        list("Nmap", "Burp Suite", "TryHackMe", "Basic Pentesting"),
                        "Start practicing in safe lab environments where you can learn security tools legally and responsibly.",
                        list("Complete beginner rooms on TryHackMe", "Run basic Nmap scans in a lab",
                                "Explore requests using Burp Suite", "Write short lab notes",
                                "Avoid testing on real websites without permission"),
                        "Beginner Security Lab Writeups. Complete 3 beginner-friendly security labs and publish clean writeups explaining the goal, tools used, steps, and lessons learned.",
                        "Writeups show practical learning, communication skill, and responsible cybersecurity practice.",
                        resources(res("TryHackMe Pre Security", "https://tryhackme.com/path/outline/presecurity"),
                                res("Nmap Guide", "https://nmap.org/book/man.html"),
                                res("Burp Suite Academy", "https://portswigger.net/web-security/learning-path")),
                        50),
                phase("Phase 4", "Security Portfolio Basics",
                        list("Writeups", "Reports", "GitHub", "Responsible Disclosure"),
                        "Learn how to present cybersecurity learning professionally without exposing unsafe or irresponsible content.",
                        list("Create a GitHub repo for lab notes", "Write clean vulnerability explanations",
                                "Mention tools and environment used", "Add screenshots safely",
                                "Include responsible testing disclaimer"),
                        "Cyber Portfolio Starter. Build a portfolio section that includes lab writeups, security notes, tool summaries, and responsible learning guidelines.",
                        "A well-presented cybersecurity portfolio helps recruiters see your learning path, practical effort, and professionalism.",
                        resources(res("GitHub README Guide",
                                "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"),
                                res("HackerOne Disclosure Guidelines",
                                        "https://www.hackerone.com/disclosure-guidelines"),
                                res("Google Technical Writing", "https://developers.google.com/tech-writing")),
                        30)));
        cyber.put("Intermediate", Arrays.asList(
                phase("Phase 1", "Web Vulnerability Analysis",
                        list("XSS", "SQL Injection", "CSRF", "Authentication Flaws"),
                        "Learn how common web vulnerabilities happen, how to identify them in labs, and how to explain them clearly.",
                        list("Complete XSS and SQL injection labs", "Compare vulnerable vs secure input handling",
                                "Analyze authentication mistakes", "Write remediation steps",
                                "Create short vulnerability notes"),
                        "OWASP Lab Journal. Complete selected OWASP-style labs and publish structured writeups with impact, cause, reproduction steps, and prevention.",
                        "This project shows practical web security understanding and the ability to communicate risk professionally.",
                        resources(res("PortSwigger Labs", "https://portswigger.net/web-security/all-labs"),
                                res("OWASP Cheat Sheets", "https://cheatsheetseries.owasp.org/"),
                                res("OWASP WebGoat", "https://owasp.org/www-project-webgoat/")),
                        50),
                phase("Phase 2", "Security Tools & Recon",
                        list("Nmap", "Burp Suite", "Wireshark", "Recon Basics"),
                        "Develop safe tool familiarity by practicing scanning, request inspection, and traffic analysis in controlled environments.",
                        list("Scan lab machines with Nmap", "Capture packets using Wireshark",
                                "Inspect HTTP requests in Burp Suite", "Document findings clearly",
                                "Separate observations from assumptions"),
                        "Lab Recon Report. Create a professional-style recon report for a local/lab target including discovered services, screenshots, observations, and safe recommendations.",
                        "This project teaches how to use security tools responsibly and present findings like a real security report.",
                        resources(res("Wireshark User Guide", "https://www.wireshark.org/docs/wsug_html_chunked/"),
                                res("Nmap Book", "https://nmap.org/book/"),
                                res("Burp Suite Documentation", "https://portswigger.net/burp/documentation")),
                        45),
                phase("Phase 3", "Secure Development",
                        list("Secure Auth", "Validation", "Authorization", "Secrets Management"),
                        "Learn how developers can build safer applications by applying security principles during development.",
                        list("Add validation to forms", "Understand authentication vs authorization",
                                "Avoid storing secrets in frontend code", "Use environment variables",
                                "Write secure error messages"),
                        "SecureLogin Demo. Build a small authentication demo with validation, protected route concept, safe error handling, and security notes.",
                        "This is especially useful for web development roles because it shows you can think about security while building apps.",
                        resources(res("OWASP Authentication Cheat Sheet",
                                "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"),
                                res("OWASP Secrets Management",
                                        "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"),
                                res("MDN Web Security", "https://developer.mozilla.org/en-US/docs/Web/Security")),
                        45),
                phase("Phase 4", "Security Reporting Portfolio",
                        list("Report Writing", "Risk Rating", "Remediation", "Documentation"),
                        "Learn how to write clear security reports that explain the issue, impact, evidence, and fix.",
                        list("Write vulnerability summaries", "Add severity and impact", "Include reproduction steps",
                                "Suggest fixes", "Create a clean report template"),
                        "Vulnerability Report Pack. Create 3 polished sample reports from lab vulnerabilities with summary, impact, reproduction, screenshots, and remediation.",
                        "Good reporting is a major cybersecurity skill and makes your portfolio look much more professional.",
                        resources(
                                res("HackerOne Report Examples",
                                        "https://www.hackerone.com/ethical-hacker/hack-report-writing"),
                                res("CVSS Calculator", "https://www.first.org/cvss/calculator/3.1"),
                                res("Google Technical Writing", "https://developers.google.com/tech-writing")),
                        35)));
        cyber.put("Advanced", Arrays.asList(
                phase("Phase 1", "Application Security Engineering",
                        list("Threat Modeling", "Secure Architecture", "Code Review", "Risk Analysis"),
                        "Learn how to evaluate applications from a security design perspective before vulnerabilities appear.",
                        list("Create simple threat models", "Identify trust boundaries", "Review authentication flows",
                                "Analyze risky data flows", "Suggest secure architecture improvements"),
                        "ThreatMap — App Security Review. Choose a sample web app and create a threat model showing assets, risks, attack surfaces, and recommended mitigations.",
                        "This project shows advanced security thinking because it focuses on prevention and architecture, not only tool usage.",
                        resources(res("OWASP Threat Modeling", "https://owasp.org/www-community/Threat_Modeling"), res(
                                "Microsoft Threat Modeling",
                                "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool"),
                                res("OWASP ASVS",
                                        "https://owasp.org/www-project-application-security-verification-standard/")),
                        50),
                phase("Phase 2", "Advanced Web Security Labs",
                        list("Advanced XSS", "Access Control", "SSRF Basics", "Security Testing"),
                        "Deepen your practical testing ability using intentionally vulnerable labs and structured methodology.",
                        list("Complete intermediate web security labs", "Analyze access control flaws",
                                "Study SSRF conceptually in labs", "Write detailed remediation notes",
                                "Build a repeatable testing checklist"),
                        "WebSec Methodology Notebook. Create a structured testing checklist and lab writeups for authentication, access control, XSS, and SSRF-style vulnerabilities.",
                        "This project demonstrates organized security methodology, which is more impressive than random tool usage.",
                        resources(res("PortSwigger Academy", "https://portswigger.net/web-security"),
                                res("OWASP Testing Guide", "https://owasp.org/www-project-web-security-testing-guide/"),
                                res("PentesterLab", "https://pentesterlab.com/")),
                        60),
                phase("Phase 3", "Secure Product Capstone",
                        list("Secure Auth", "Logging", "Validation", "Security Documentation"),
                        "Build or audit a product-like app with security features, documentation, and clear risk explanations.",
                        list("Add secure validation patterns", "Document authentication flow",
                                "Create security checklist", "Write risk notes and mitigations",
                                "Prepare a portfolio-ready security case study"),
                        "SecureVault — Security-Focused Web App Case Study. Build or audit a simple vault-style web app and document authentication, validation, access control, and security decisions.",
                        "This project combines web development and cybersecurity, making it especially strong for roles that value secure coding and practical security awareness.",
                        resources(res("OWASP Cheat Sheets", "https://cheatsheetseries.owasp.org/"),
                                res("MDN Security", "https://developer.mozilla.org/en-US/docs/Web/Security"),
                                res("GitHub Security Docs", "https://docs.github.com/en/code-security")),
                        55)));
        roadmaps.put("Cybersecurity", cyber);

        // ── BACKEND DEVELOPMENT ───────────────────────────────
        Map<String, List<Map<String, Object>>> backend = new LinkedHashMap<>();
        backend.put("Beginner", Arrays.asList(
                phase("Phase 1", "Programming & Server Basics",
                        list("JavaScript", "Node.js", "Command Line", "NPM"),
                        "Learn how backend code runs outside the browser and how servers handle requests.",
                        list("Practice JavaScript functions and objects", "Run JavaScript using Node.js",
                                "Use npm to install packages", "Create a basic HTTP server",
                                "Understand request and response flow"),
                        "ServerStarter — Basic Node.js API. Build a simple backend server with routes for home, users, and tasks using Node.js.",
                        "This project helps you understand how backend applications receive requests and send responses before adding databases or complex logic.",
                        resources(res("Node.js Learn", "https://nodejs.org/en/learn"),
                                res("MDN HTTP Overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"),
                                res("NPM Docs", "https://docs.npmjs.com/")),
                        35),
                phase("Phase 2", "Express & REST APIs",
                        list("Express", "Routing", "REST APIs", "Middleware"),
                        "Learn how to build structured APIs that frontend apps can communicate with.",
                        list("Create GET and POST routes", "Use route parameters", "Understand middleware",
                                "Send JSON responses", "Test APIs using Postman or Thunder Client"),
                        "TaskAPI — REST API for Task Management. Build an Express API where users can create, read, update, and delete tasks.",
                        "CRUD APIs are the foundation of most backend projects, and this proves you understand real API behavior.",
                        resources(res("Express Docs", "https://expressjs.com/"),
                                res("REST API Tutorial", "https://restfulapi.net/"),
                                res("Postman Learning Center", "https://learning.postman.com/")),
                        45),
                phase("Phase 3", "Databases & Data Modeling",
                        list("MongoDB", "Schemas", "CRUD", "Data Relationships"),
                        "Learn how backend apps store data permanently and how to structure data for real applications.",
                        list("Connect backend to a database", "Create database schemas", "Perform CRUD operations",
                                "Validate incoming data", "Handle database errors"),
                        "NoteVault API — Notes Backend with Database. Build a notes API where notes are stored in a database with title, content, tags, and timestamps.",
                        "This project proves that you can build a backend that stores and manages real data instead of temporary in-memory data.",
                        resources(res("MongoDB University", "https://learn.mongodb.com/"),
                                res("Mongoose Docs", "https://mongoosejs.com/docs/"),
                                res("MongoDB CRUD", "https://www.mongodb.com/docs/manual/crud/")),
                        50),
                phase("Phase 4", "Authentication Basics",
                        list("JWT", "Password Hashing", "Protected Routes", "Auth Flow"),
                        "Learn how backend systems identify users and protect private data.",
                        list("Create signup and login routes", "Hash passwords before storing them",
                                "Generate JWT tokens", "Protect private routes", "Handle invalid credentials safely"),
                        "AuthBase — Secure Login API. Build an authentication API with signup, login, password hashing, JWT-based protected routes, and user profile access.",
                        "Authentication is one of the most common backend requirements, and this project makes your backend skills look much more practical.",
                        resources(res("JWT Introduction", "https://jwt.io/introduction"),
                                res("bcrypt NPM", "https://www.npmjs.com/package/bcrypt"),
                                res("OWASP Authentication Guide",
                                        "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html")),
                        45),
                phase("Phase 5", "Deployment & API Documentation",
                        list("Deployment", "Environment Variables", "API Docs", "GitHub"),
                        "Learn how to publish your backend so others can test it and understand how to use it.",
                        list("Use environment variables", "Deploy backend publicly", "Write API documentation",
                                "Add example requests and responses", "Create a clean README"),
                        "Backend Portfolio API. Deploy your best backend project and document all routes, request bodies, responses, errors, and setup steps.",
                        "A well-documented deployed API shows professionalism and makes your backend project easy for recruiters or teammates to test.",
                        resources(res("Render Docs", "https://render.com/docs"),
                                res("Railway Docs", "https://docs.railway.app/"),
                                res("Swagger Docs", "https://swagger.io/docs/")),
                        30)));
        backend.put("Intermediate", Arrays.asList(
                phase("Phase 1", "API Architecture",
                        list("Clean Routes", "Controllers", "Services", "Error Handling"),
                        "Learn how to structure backend projects so the code stays clean as features grow.",
                        list("Separate routes and controllers", "Create service functions",
                                "Add centralized error handling", "Use consistent response formats",
                                "Organize folders professionally"),
                        "ServiceDesk API — Structured Support Ticket Backend. Build a ticket management API using routes, controllers, services, validation, and clean error handling.",
                        "This project shows that you can write backend code that is organized, maintainable, and closer to real team standards.",
                        resources(res("Express Routing", "https://expressjs.com/en/guide/routing.html"),
                                res("Node Best Practices", "https://github.com/goldbergyoni/nodebestpractices"),
                                res("MDN HTTP Status Codes",
                                        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status")),
                        40),
                phase("Phase 2", "Database Design & Relationships",
                        list("MongoDB Relations", "Indexes", "Pagination", "Filtering"),
                        "Learn how to design database models and query data efficiently for real backend applications.",
                        list("Create related models", "Add search and filtering", "Implement pagination",
                                "Use indexes conceptually", "Optimize repeated queries"),
                        "LearnHub API — Course Platform Backend. Build APIs for courses, lessons, users, enrollments, search, filters, and paginated results.",
                        "This project proves that you can model real product data and build APIs that handle more than simple CRUD.",
                        resources(res("MongoDB Data Modeling", "https://www.mongodb.com/docs/manual/data-modeling/"),
                                res("MongoDB Indexes", "https://www.mongodb.com/docs/manual/indexes/"),
                                res("Mongoose Population", "https://mongoosejs.com/docs/populate.html")),
                        50),
                phase("Phase 3", "Security & Validation",
                        list("Input Validation", "Rate Limiting", "CORS", "Auth Security"),
                        "Learn how to protect APIs from common mistakes and unsafe input.",
                        list("Validate request bodies", "Sanitize user input", "Add rate limiting",
                                "Configure CORS properly", "Review authentication security issues"),
                        "SecureAPI — Hardened Authentication Backend. Build an authentication backend with validation, rate limiting, secure headers, JWT auth, and clean error responses.",
                        "This project makes your backend portfolio stronger because it shows awareness of real security concerns.",
                        resources(res("OWASP API Security", "https://owasp.org/www-project-api-security/"),
                                res("Express Validator", "https://express-validator.github.io/docs/"),
                                res("Helmet Docs", "https://helmetjs.github.io/")),
                        45),
                phase("Phase 4", "Testing & Reliability",
                        list("Unit Testing", "Integration Testing", "Jest", "API Testing"),
                        "Learn how to test backend logic so your APIs behave correctly and reliably.",
                        list("Write tests for utility functions", "Test API endpoints", "Mock database behavior",
                                "Check error cases", "Run tests before deployment"),
                        "Tested Task API. Take a task management backend and add tests for authentication, task creation, updates, deletion, and invalid inputs.",
                        "Testing shows maturity as a backend developer because it proves you care about reliability, not only feature completion.",
                        resources(res("Jest Docs", "https://jestjs.io/docs/getting-started"),
                                res("Supertest NPM", "https://www.npmjs.com/package/supertest"),
                                res("Node Test Runner", "https://nodejs.org/api/test.html")),
                        40)));
        backend.put("Advanced", Arrays.asList(
                phase("Phase 1", "Scalable Backend Architecture",
                        list("System Design", "Caching", "Queues", "API Design"),
                        "Learn how backend systems are designed to handle growth, background work, and performance challenges.",
                        list("Design scalable API flows", "Understand caching use cases",
                                "Learn queue-based background jobs conceptually",
                                "Separate read-heavy and write-heavy logic", "Create architecture diagrams"),
                        "ScaleDesk — Scalable Support Backend Blueprint. Design and partially build a backend for support tickets with caching ideas, background notifications, and clean API architecture.",
                        "This project shows that you can think beyond basic endpoints and understand how backend systems scale.",
                        resources(res("System Design Primer", "https://github.com/donnemartin/system-design-primer"),
                                res("Redis Docs", "https://redis.io/docs/latest/"),
                                res("RabbitMQ Tutorials", "https://www.rabbitmq.com/tutorials")),
                        55),
                phase("Phase 2", "Advanced Auth & Permissions",
                        list("RBAC", "OAuth Basics", "Sessions", "Permission Models"),
                        "Learn how real applications manage different user roles, permissions, and secure access patterns.",
                        list("Create role-based access control", "Add admin and user permissions",
                                "Understand OAuth conceptually", "Protect sensitive routes",
                                "Log important security events"),
                        "AccessLayer API — Role-Based Permission System. Build a backend where admins, editors, and users have different permissions for managing resources.",
                        "Permission systems are common in real products, and this project proves you can handle more complex backend authorization logic.",
                        resources(res("Auth0 RBAC Guide", "https://auth0.com/docs/manage-users/access-control/rbac"),
                                res("OAuth 2.0 Overview", "https://oauth.net/2/"),
                                res("OWASP Access Control",
                                        "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html")),
                        50),
                phase("Phase 3", "Production Backend Capstone",
                        list("Docker Basics", "Logging", "Monitoring", "Documentation"),
                        "Build a backend project that feels production-ready with deployment, logs, documentation, and maintainable structure.",
                        list("Add structured logging", "Use environment configuration", "Create API documentation",
                                "Add basic monitoring mindset", "Deploy and test the production build"),
                        "APIForge — Production-Ready Backend Service. Build a complete backend service with authentication, database models, validation, logging, API docs, deployment, and a professional README.",
                        "This is a strong backend capstone because it demonstrates architecture, security, reliability, deployment, and documentation together.",
                        resources(res("Docker Getting Started", "https://docs.docker.com/get-started/"),
                                res("Pino Logger", "https://getpino.io/"),
                                res("Swagger Docs", "https://swagger.io/docs/")),
                        65)));
        roadmaps.put("Backend Development", backend);

        return roadmaps;
    }
}