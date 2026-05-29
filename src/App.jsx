import { useState } from "react";
function App() {
  const [page, setPage] = useState("home");
  const [answers, setAnswers] = useState({
    goal: "",
    level: "",
    time: "",
    purpose: "",
  });
  const [question, setQuestion] = useState(1);
  function handleAnswer(key, value) {
    setAnswers({
      ...answers,
      [key]: value,
    });

    if (question < 4) {
      setQuestion(question + 1);
    } else {
      setPage("roadmap");
    }
  }
  function getDailyHours() {
    if (answers.time === "1 hour/day") return 1;
    if (answers.time === "2 hours/day") return 2;
    if (answers.time === "4 hours/day") return 4;
    if (answers.time === "6+ hours/day") return 6;
    return 2;
  }

  function getRoadmap() {
    const roadmaps = {
      "Full Stack Development": {
        Beginner: [
          {
            phase: "Phase 1",
            title: "Web Foundations",
            skills: ["HTML", "CSS", "Responsive Design", "Git Basics"],
            focus:
              "Learn how websites are structured, styled, and made responsive across different screen sizes.",
            practice: [
              "Create a responsive navbar",
              "Build a hero section with call-to-action buttons",
              "Use Flexbox and Grid for layouts",
              "Make the layout fully responsive for mobile, tablet, and desktop",
              "Push your first project to GitHub",
            ],
            project:
              "StudyFlow — Responsive Study Planner Landing Page. Build a landing page for a fictional student productivity app with navbar, hero section, feature cards, pricing section, testimonials, FAQ, and contact CTA.",
            whyProject:
              "This project proves that you can create a professional business-style landing page, structure content clearly, and handle responsive layouts like a real frontend developer.",
            resources: [
              {
                name: "MDN HTML Basics",
                link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
              },
              {
                name: "freeCodeCamp Responsive Web Design",
                link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
              },
              {
                name: "CSS Tricks Flexbox Guide",
                link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
              },
            ],
            baseHours: 30,
          },
          {
            phase: "Phase 2",
            title: "JavaScript Core",
            skills: ["DOM", "ES6+", "APIs", "Async JavaScript"],
            focus:
              "Learn how to make websites interactive, respond to user actions, and work with real data.",
            practice: [
              "Create form validation",
              "Build a counter and theme toggle",
              "Fetch data from a public API",
              "Show loading and error states",
              "Store user data using localStorage",
            ],
            project:
              "FocusBoard — Interactive Study Planner. Build a task planner where users can add study tasks, mark them complete, filter by subject, and save tasks in localStorage.",
            whyProject:
              "This project proves that you understand real browser logic, user interaction, state changes, and persistent data without needing a backend yet.",
            resources: [
              {
                name: "JavaScript.info",
                link: "https://javascript.info/",
              },
              {
                name: "MDN JavaScript Guide",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              },
              {
                name: "freeCodeCamp JavaScript",
                link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "React + Tailwind",
            skills: ["React", "Components", "State", "Tailwind CSS"],
            focus:
              "Learn how to build reusable UI components and manage dynamic data in a modern frontend application.",
            practice: [
              "Create reusable card and button components",
              "Use useState for interactive UI",
              "Render lists using map",
              "Use conditional rendering",
              "Style layouts quickly with Tailwind CSS",
            ],
            project:
              "SkillTrack — Learning Progress Dashboard. Build a dashboard where users can track subjects, progress percentage, weekly goals, and recommended next steps.",
            whyProject:
              "This project demonstrates component-based thinking, state management, dashboard UI design, and Tailwind-based styling — all important for frontend and full-stack roles.",
            resources: [
              {
                name: "React Official Docs",
                link: "https://react.dev/learn",
              },
              {
                name: "Tailwind CSS Docs",
                link: "https://tailwindcss.com/docs",
              },
              {
                name: "Vite Guide",
                link: "https://vite.dev/guide/",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 4",
            title: "Backend Basics",
            skills: ["Node.js", "Express", "REST APIs", "Database Basics"],
            focus:
              "Learn how frontend apps communicate with servers and how data is created, stored, updated, and deleted.",
            practice: [
              "Create basic Express routes",
              "Understand GET, POST, PUT, DELETE",
              "Connect frontend form data to an API",
              "Use mock data or a simple database",
              "Handle API errors properly",
            ],
            project:
              "NoteNest — Full Stack Notes App. Build a notes app where users can create, edit, delete, and view notes using a React frontend and Express backend.",
            whyProject:
              "This project proves that you understand the complete full-stack flow: frontend UI, API communication, backend routes, and data handling.",
            resources: [
              {
                name: "Node.js Docs",
                link: "https://nodejs.org/en/learn",
              },
              {
                name: "Express Guide",
                link: "https://expressjs.com/en/starter/installing.html",
              },
              {
                name: "MDN HTTP Methods",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
              },
            ],
            baseHours: 55,
          },
          {
            phase: "Phase 5",
            title: "Deployment & Portfolio",
            skills: ["Vercel", "GitHub", "Documentation", "Resume Projects"],
            focus:
              "Learn how to present your work professionally so recruiters can understand and test your project quickly.",
            practice: [
              "Deploy your best project",
              "Write a clean README",
              "Add screenshots and live demo links",
              "Explain features and tech stack clearly",
              "Add the project to your portfolio",
            ],
            project:
              "Full Stack Portfolio Case Study. Create a polished project page for your best app with screenshots, live demo, GitHub link, features, tech stack, and what you learned.",
            whyProject:
              "A good project presentation can make even a simple project look professional and recruiter-ready.",
            resources: [
              {
                name: "Vercel Deployment Docs",
                link: "https://vercel.com/docs",
              },
              {
                name: "GitHub README Guide",
                link: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
              },
              {
                name: "Git Handbook",
                link: "https://guides.github.com/introduction/git-handbook/",
              },
            ],
            baseHours: 25,
          },
        ],
        Intermediate: [
          {
            phase: "Phase 1",
            title: "Advanced React & UI Patterns",
            skills: [
              "Advanced React",
              "Hooks",
              "Reusable Components",
              "State Management",
            ],
            focus:
              "Strengthen your React skills by building cleaner, reusable, and scalable frontend components.",
            practice: [
              "Refactor repeated UI into reusable components",
              "Use useState and useEffect properly",
              "Create reusable form and card components",
              "Handle loading and empty states",
              "Organize components into clean folders",
            ],
            project:
              "DevBoard — Developer Productivity Dashboard. Build a dashboard with task cards, progress widgets, filters, and reusable UI components.",
            whyProject:
              "This project proves that you can build scalable frontend layouts instead of writing one large messy component.",
            resources: [
              {
                name: "React Thinking in React",
                link: "https://react.dev/learn/thinking-in-react",
              },
              {
                name: "React Hooks",
                link: "https://react.dev/reference/react/hooks",
              },
              {
                name: "Tailwind Components",
                link: "https://tailwindcss.com/docs/reusing-styles",
              },
            ],
            baseHours: 35,
          },
          {
            phase: "Phase 2",
            title: "Backend Integration",
            skills: [
              "Express",
              "REST APIs",
              "Authentication",
              "Database Design",
            ],
            focus:
              "Learn how to connect a polished frontend with real backend logic and persistent data.",
            practice: [
              "Create REST API endpoints",
              "Connect React forms to backend routes",
              "Add authentication flow basics",
              "Store and fetch data from a database",
              "Handle API errors and validation",
            ],
            project:
              "TaskForge — Full Stack Task Manager. Build an app with user login, task creation, task editing, filtering, and persistent storage.",
            whyProject:
              "This is a strong internship-ready project because it shows CRUD operations, authentication basics, API integration, and real product flow.",
            resources: [
              {
                name: "Express Routing",
                link: "https://expressjs.com/en/guide/routing.html",
              },
              {
                name: "MongoDB University",
                link: "https://learn.mongodb.com/",
              },
              {
                name: "MDN REST APIs",
                link: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "Production Skills",
            skills: [
              "Error Handling",
              "Validation",
              "API Security",
              "Deployment",
            ],
            focus:
              "Move beyond basic functionality and learn how to make your app more reliable, secure, and deployable.",
            practice: [
              "Add form validation",
              "Show proper error messages",
              "Protect sensitive routes",
              "Deploy frontend and backend",
              "Test the app as a real user",
            ],
            project:
              "SecureNotes — Production-Ready Notes App. Build a notes app with authentication, validation, protected routes, and deployment.",
            whyProject:
              "This project shows that you understand practical production concerns, not just basic frontend screens.",
            resources: [
              {
                name: "OWASP Top 10",
                link: "https://owasp.org/www-project-top-ten/",
              },
              {
                name: "Vercel Docs",
                link: "https://vercel.com/docs",
              },
              {
                name: "Render Deploy Docs",
                link: "https://render.com/docs",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 4",
            title: "Portfolio Project Polish",
            skills: [
              "GitHub",
              "Documentation",
              "Clean UI",
              "Project Explanation",
            ],
            focus:
              "Turn your best project into a recruiter-friendly case study with clear explanation and strong presentation.",
            practice: [
              "Write a professional README",
              "Add screenshots and demo link",
              "Explain the problem and solution",
              "Mention tech stack and features",
              "Prepare a 1-minute explanation of the project",
            ],
            project:
              "Internship Case Study Page. Create a project showcase page explaining one full-stack project with problem, features, architecture, screenshots, and live links.",
            whyProject:
              "Recruiters often judge projects quickly. A strong case study makes your work easier to understand and more impressive.",
            resources: [
              {
                name: "GitHub README Guide",
                link: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
              },
              {
                name: "Vercel Templates",
                link: "https://vercel.com/templates",
              },
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
            ],
            baseHours: 35,
          },
        ],
        Advanced: [
          {
            phase: "Phase 1",
            title: "System-Level Thinking",
            skills: [
              "Architecture",
              "Scalability Basics",
              "Caching",
              "API Design",
            ],
            focus:
              "Learn how larger web applications are planned, structured, and optimized before writing code.",
            practice: [
              "Design API routes before implementation",
              "Break a large app into frontend, backend, and database layers",
              "Understand where caching improves performance",
              "Create a simple architecture diagram",
              "Compare monolithic vs modular project structure",
            ],
            project:
              "ArchitectPro — Full Stack Architecture Blueprint. Design the architecture for a SaaS-style project including frontend pages, backend routes, database entities, and deployment flow.",
            whyProject:
              "This proves that you can think beyond coding screens and understand how a real full-stack product is planned.",
            resources: [
              {
                name: "System Design Primer",
                link: "https://github.com/donnemartin/system-design-primer",
              },
              {
                name: "REST API Design",
                link: "https://restfulapi.net/",
              },
              {
                name: "Web Architecture 101",
                link: "https://engineering.videoblocks.com/web-architecture-101-a3224e126947",
              },
            ],
            baseHours: 35,
          },
          {
            phase: "Phase 2",
            title: "Advanced Engineering",
            skills: ["Testing", "Performance", "Security", "Optimization"],
            focus:
              "Improve app quality by making projects faster, safer, more reliable, and easier to maintain.",
            practice: [
              "Add input validation",
              "Handle edge cases and error states",
              "Optimize slow components",
              "Write basic tests for important logic",
              "Review common security mistakes",
            ],
            project:
              "SecureSprint — Optimized Full Stack App. Take an existing full-stack project and add validation, protected routes, optimized loading states, and basic tests.",
            whyProject:
              "This shows maturity as a developer because you are improving reliability and user experience, not just building basic features.",
            resources: [
              {
                name: "OWASP Top 10",
                link: "https://owasp.org/www-project-top-ten/",
              },
              {
                name: "React Performance",
                link: "https://react.dev/learn/render-and-commit",
              },
              {
                name: "Vitest Docs",
                link: "https://vitest.dev/guide/",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "High-Impact Product Build",
            skills: [
              "Advanced UI",
              "Backend Logic",
              "Deployment",
              "Documentation",
            ],
            focus:
              "Build one polished product-style project that can become the strongest piece in your portfolio.",
            practice: [
              "Choose a real problem to solve",
              "Build a clean landing page and dashboard",
              "Add meaningful backend functionality",
              "Deploy the project publicly",
              "Write a strong case study explaining the product",
            ],
            project:
              "LaunchPad — SaaS MVP Builder. Build a complete SaaS-style product with landing page, dashboard, user flow, backend API, polished UI, deployment, and documentation.",
            whyProject:
              "This is a portfolio centerpiece project. It shows product thinking, frontend polish, backend understanding, and ability to ship a complete web application.",
            resources: [
              {
                name: "Vercel Docs",
                link: "https://vercel.com/docs",
              },
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
              {
                name: "Refactoring Guru",
                link: "https://refactoring.guru/design-patterns",
              },
            ],
            baseHours: 55,
          },
        ],
      },

      "Frontend Development": {
        Beginner: [
          {
            phase: "Phase 1",
            title: "UI Foundations",
            skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
            focus:
              "Learn how to convert simple designs into clean, responsive, and accessible web pages.",
            practice: [
              "Build a responsive navbar",
              "Create reusable card layouts",
              "Practice mobile-first design",
              "Use semantic HTML tags",
              "Check color contrast and basic accessibility",
            ],
            project:
              "BrandLaunch — Responsive Product Landing Page. Build a landing page for a fictional startup with hero, feature cards, pricing, testimonials, FAQ, and footer.",
            whyProject:
              "This project proves that you can create a visually polished frontend page that looks like real client or startup work.",
            resources: [
              {
                name: "MDN HTML",
                link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
              },
              {
                name: "MDN CSS",
                link: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
              },
              {
                name: "Web.dev Accessibility",
                link: "https://web.dev/learn/accessibility/",
              },
            ],
            baseHours: 30,
          },
          {
            phase: "Phase 2",
            title: "JavaScript for Interfaces",
            skills: ["DOM", "Events", "Forms", "APIs"],
            focus:
              "Learn how to make static pages interactive using JavaScript and browser events.",
            practice: [
              "Create a dark mode toggle",
              "Validate forms",
              "Fetch data from a public API",
              "Show loading and error states",
              "Store preferences in localStorage",
            ],
            project:
              "SpendSmart — Interactive Expense Calculator. Build a frontend tool where users can add expenses, categorize them, view totals, and save data locally.",
            whyProject:
              "This project shows that you can build useful browser-based functionality instead of only static pages.",
            resources: [
              {
                name: "JavaScript.info",
                link: "https://javascript.info/",
              },
              {
                name: "MDN DOM Guide",
                link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
              },
              {
                name: "Fetch API",
                link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 3",
            title: "React Basics",
            skills: ["Components", "Props", "State", "Conditional Rendering"],
            focus:
              "Learn how to break UI into reusable components and render dynamic data using React.",
            practice: [
              "Create reusable buttons and cards",
              "Use props to pass data",
              "Use state for interactivity",
              "Render lists with map",
              "Show different UI based on conditions",
            ],
            project:
              "CoursePilot — Course Discovery Dashboard. Build a dashboard that displays courses, filters them by category, and shows recommended learning paths.",
            whyProject:
              "This project demonstrates real React fundamentals: components, props, state, lists, filtering, and conditional rendering.",
            resources: [
              {
                name: "React Learn",
                link: "https://react.dev/learn",
              },
              {
                name: "React State",
                link: "https://react.dev/learn/state-a-components-memory",
              },
              {
                name: "Vite Guide",
                link: "https://vite.dev/guide/",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 4",
            title: "UI Polish & Portfolio",
            skills: ["Tailwind CSS", "Animations", "Layout", "Responsive UX"],
            focus:
              "Learn how to make interfaces feel premium through spacing, typography, animation, and responsive polish.",
            practice: [
              "Use Tailwind utility classes cleanly",
              "Add hover and transition effects",
              "Improve spacing and typography",
              "Make mobile layouts feel intentional",
              "Deploy your frontend project",
            ],
            project:
              "NovaDash — Premium Frontend Dashboard. Build a modern dashboard UI with stat cards, charts placeholder, sidebar, responsive layout, and smooth hover effects.",
            whyProject:
              "A polished dashboard is visually impressive and strongly demonstrates frontend UI skills for internships.",
            resources: [
              {
                name: "Tailwind Docs",
                link: "https://tailwindcss.com/docs",
              },
              {
                name: "Framer Motion",
                link: "https://motion.dev/docs/react",
              },
              {
                name: "Vercel Deploy",
                link: "https://vercel.com/docs",
              },
            ],
            baseHours: 35,
          },
        ],

        Intermediate: [
          {
            phase: "Phase 1",
            title: "Advanced React UI",
            skills: [
              "Hooks",
              "Component Design",
              "Reusable UI",
              "State Patterns",
            ],
            focus:
              "Improve your ability to build scalable frontend applications using cleaner component structure and better state handling.",
            practice: [
              "Extract repeated UI into reusable components",
              "Create custom hooks",
              "Manage loading and error states",
              "Design reusable layouts",
              "Organize files professionally",
            ],
            project:
              "PulseBoard — SaaS Dashboard UI. Build a dashboard with reusable cards, filters, activity panels, and responsive layout.",
            whyProject:
              "This project proves you can build a product-like frontend interface instead of isolated beginner components.",
            resources: [
              {
                name: "React Hooks",
                link: "https://react.dev/reference/react/hooks",
              },
              {
                name: "Thinking in React",
                link: "https://react.dev/learn/thinking-in-react",
              },
              {
                name: "Tailwind Reusing Styles",
                link: "https://tailwindcss.com/docs/reusing-styles",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 2",
            title: "API-Based Frontend",
            skills: ["API Fetching", "Loading States", "Error States", "Forms"],
            focus:
              "Learn how production frontends communicate with APIs and handle real-world data states.",
            practice: [
              "Fetch and display API data",
              "Add search and filters",
              "Handle loading skeletons",
              "Show user-friendly error messages",
              "Build clean forms",
            ],
            project:
              "JobLens — Internship Search Interface. Build a frontend app that displays job/internship listings, filters by role, and shows detailed cards.",
            whyProject:
              "This project feels realistic for career-focused users and shows practical API-based frontend skills.",
            resources: [
              {
                name: "MDN Fetch API",
                link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
              },
              {
                name: "React Effects",
                link: "https://react.dev/learn/synchronizing-with-effects",
              },
              {
                name: "Frontend Mentor",
                link: "https://www.frontendmentor.io/",
              },
            ],
            baseHours: 35,
          },
          {
            phase: "Phase 3",
            title: "Frontend Portfolio Polish",
            skills: [
              "Animations",
              "Performance",
              "Deployment",
              "Documentation",
            ],
            focus:
              "Turn your frontend work into a polished, recruiter-friendly project with strong visual presentation.",
            practice: [
              "Add smooth page transitions",
              "Improve Lighthouse performance",
              "Deploy on Vercel",
              "Write a project README",
              "Create a case-study section",
            ],
            project:
              "Orbitfolio — Animated Developer Portfolio. Build a premium personal portfolio with project cards, animations, resume link, contact section, and live project demos.",
            whyProject:
              "A strong portfolio helps recruiters quickly understand your frontend ability and project quality.",
            resources: [
              {
                name: "Vercel Docs",
                link: "https://vercel.com/docs",
              },
              {
                name: "Web.dev Performance",
                link: "https://web.dev/learn/performance/",
              },
              {
                name: "Framer Motion Docs",
                link: "https://motion.dev/docs/react",
              },
            ],
            baseHours: 35,
          },
        ],

        Advanced: [
          {
            phase: "Phase 1",
            title: "Frontend Architecture",
            skills: [
              "Design Systems",
              "Scalable Components",
              "Performance",
              "UX Patterns",
            ],
            focus:
              "Learn how to design frontend systems that stay maintainable as the application grows.",
            practice: [
              "Create a reusable component system",
              "Define spacing and typography rules",
              "Build shared layout components",
              "Optimize large component trees",
              "Document component usage",
            ],
            project:
              "CoreUI Kit — Mini Design System. Build a reusable UI kit with buttons, cards, modals, inputs, badges, and layout components.",
            whyProject:
              "A design system project shows advanced frontend thinking and separates you from basic UI builders.",
            resources: [
              {
                name: "Design Systems Guide",
                link: "https://www.designsystems.com/",
              },
              {
                name: "React Performance",
                link: "https://react.dev/learn/render-and-commit",
              },
              {
                name: "Tailwind Config",
                link: "https://tailwindcss.com/docs/theme",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 2",
            title: "Premium Product UI",
            skills: [
              "Animations",
              "Microinteractions",
              "Accessibility",
              "Optimization",
            ],
            focus:
              "Build interfaces that feel polished, fast, accessible, and production-ready.",
            practice: [
              "Add subtle microinteractions",
              "Improve keyboard accessibility",
              "Optimize images and layout shifts",
              "Refine mobile responsiveness",
              "Polish final UI details",
            ],
            project:
              "FlowSpace — High-Performance Product Website. Build a premium product website with animated sections, responsive layouts, accessibility improvements, and optimized assets.",
            whyProject:
              "This project demonstrates high-end frontend polish, which is especially valuable for design-heavy web development internships.",
            resources: [
              {
                name: "Web.dev Accessibility",
                link: "https://web.dev/learn/accessibility/",
              },
              {
                name: "Web.dev Performance",
                link: "https://web.dev/learn/performance/",
              },
              {
                name: "Motion Docs",
                link: "https://motion.dev/docs/react",
              },
            ],
            baseHours: 45,
          },
        ],
      },
      "AI / ML": {
        Beginner: [
          {
            phase: "Phase 1",
            title: "Python & Math Foundations",
            skills: ["Python", "NumPy", "Pandas", "Basic Statistics"],
            focus:
              "Build the programming and math foundation needed to understand machine learning instead of just copying models.",
            practice: [
              "Practice Python lists, dictionaries, loops, and functions",
              "Use NumPy arrays for basic numerical operations",
              "Load and inspect datasets using Pandas",
              "Calculate mean, median, variance, and standard deviation",
              "Create simple data summaries from CSV files",
            ],
            project:
              "Student Insights Analyzer. Build a Python notebook that analyzes student marks, attendance, and study hours to find patterns using Pandas and basic statistics.",
            whyProject:
              "This project builds the exact foundation needed for machine learning: handling data, understanding patterns, and explaining insights clearly.",
            resources: [
              {
                name: "Python Official Tutorial",
                link: "https://docs.python.org/3/tutorial/",
              },
              {
                name: "Kaggle Python Course",
                link: "https://www.kaggle.com/learn/python",
              },
              {
                name: "Khan Academy Statistics",
                link: "https://www.khanacademy.org/math/statistics-probability",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 2",
            title: "Machine Learning Basics",
            skills: [
              "Regression",
              "Classification",
              "Model Evaluation",
              "Scikit-learn",
            ],
            focus:
              "Learn how machine learning models are trained, tested, and evaluated using real datasets.",
            practice: [
              "Train a simple linear regression model",
              "Build a classification model",
              "Split data into train and test sets",
              "Calculate accuracy, precision, recall, and F1-score",
              "Compare model performance using metrics",
            ],
            project:
              "Placement Predictor. Build a machine learning model that predicts placement chances based on skills, CGPA, projects, and preparation level.",
            whyProject:
              "This is a practical and relatable ML project that shows data preprocessing, model training, evaluation, and real-world interpretation.",
            resources: [
              {
                name: "Scikit-learn Tutorials",
                link: "https://scikit-learn.org/stable/tutorial/index.html",
              },
              {
                name: "Kaggle Intro to ML",
                link: "https://www.kaggle.com/learn/intro-to-machine-learning",
              },
              {
                name: "Google ML Crash Course",
                link: "https://developers.google.com/machine-learning/crash-course",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 3",
            title: "Deep Learning Introduction",
            skills: [
              "Neural Networks",
              "TensorFlow/PyTorch",
              "CNN Basics",
              "Training",
            ],
            focus:
              "Understand how neural networks learn patterns and how deep learning is used for image and text-based problems.",
            practice: [
              "Understand neurons, weights, bias, and activation functions",
              "Train a basic neural network",
              "Experiment with epochs and learning rate",
              "Build a CNN for image classification",
              "Visualize training accuracy and loss",
            ],
            project:
              "BrainScan Lite — Medical Image Classifier Demo. Build a beginner-friendly CNN demo that classifies medical-style image data and explains prediction confidence.",
            whyProject:
              "This project looks impressive because it connects AI with a real-world use case while still being manageable as a beginner deep learning project.",
            resources: [
              {
                name: "TensorFlow Tutorials",
                link: "https://www.tensorflow.org/tutorials",
              },
              {
                name: "PyTorch Tutorials",
                link: "https://pytorch.org/tutorials/",
              },
              {
                name: "3Blue1Brown Neural Networks",
                link: "https://www.3blue1brown.com/topics/neural-networks",
              },
            ],
            baseHours: 60,
          },
          {
            phase: "Phase 4",
            title: "AI Project Deployment",
            skills: ["Streamlit", "APIs", "Model Deployment", "Documentation"],
            focus:
              "Learn how to turn notebooks and models into usable demos that others can open and test.",
            practice: [
              "Create a Streamlit interface",
              "Accept user input for predictions",
              "Display model output clearly",
              "Add explanation of model limitations",
              "Deploy the AI demo online",
            ],
            project:
              "AI Career Advisor Demo. Build a small web app that takes user interests and recommends a tech path using a simple model or rule-based AI logic.",
            whyProject:
              "This connects machine learning with a usable product experience, which makes the project stronger than a notebook-only ML project.",
            resources: [
              {
                name: "Streamlit Docs",
                link: "https://docs.streamlit.io/",
              },
              {
                name: "Hugging Face Spaces",
                link: "https://huggingface.co/docs/hub/spaces",
              },
              {
                name: "Model Cards Guide",
                link: "https://huggingface.co/docs/hub/model-cards",
              },
            ],
            baseHours: 35,
          },
        ],

        Intermediate: [
          {
            phase: "Phase 1",
            title: "Data Preparation & Feature Engineering",
            skills: [
              "Data Cleaning",
              "Feature Engineering",
              "EDA",
              "Pipelines",
            ],
            focus:
              "Improve model quality by learning how to clean data, create useful features, and prepare datasets properly.",
            practice: [
              "Handle missing values",
              "Encode categorical variables",
              "Scale numerical features",
              "Create new useful features",
              "Build preprocessing pipelines",
            ],
            project:
              "SkillMatch Predictor. Build a model that predicts suitable tech roles based on skills, projects, and experience level.",
            whyProject:
              "This project feels product-like and shows that you can transform messy user data into meaningful predictions.",
            resources: [
              {
                name: "Kaggle Data Cleaning",
                link: "https://www.kaggle.com/learn/data-cleaning",
              },
              {
                name: "Scikit-learn Pipelines",
                link: "https://scikit-learn.org/stable/modules/compose.html",
              },
              {
                name: "Feature Engineering Guide",
                link: "https://www.kaggle.com/learn/feature-engineering",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 2",
            title: "Model Improvement",
            skills: [
              "Hyperparameter Tuning",
              "Cross Validation",
              "Metrics",
              "Error Analysis",
            ],
            focus:
              "Learn how to improve models systematically instead of randomly changing algorithms.",
            practice: [
              "Use cross-validation",
              "Tune model hyperparameters",
              "Compare multiple algorithms",
              "Analyze false positives and false negatives",
              "Document why one model performs better",
            ],
            project:
              "Smart Resume Screener. Build a model that scores resumes against role requirements and explains which skills are missing.",
            whyProject:
              "This is a strong AI portfolio project because it combines classification, scoring, explainability, and a real hiring-related use case.",
            resources: [
              {
                name: "Scikit-learn Model Selection",
                link: "https://scikit-learn.org/stable/model_selection.html",
              },
              {
                name: "Google ML Rules",
                link: "https://developers.google.com/machine-learning/guides/rules-of-ml",
              },
              {
                name: "Kaggle Intermediate ML",
                link: "https://www.kaggle.com/learn/intermediate-machine-learning",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 3",
            title: "Deep Learning Projects",
            skills: [
              "CNNs",
              "Transfer Learning",
              "Model Evaluation",
              "Visualization",
            ],
            focus:
              "Use deep learning models on practical image or text problems and explain model performance clearly.",
            practice: [
              "Use transfer learning",
              "Train and validate a CNN",
              "Plot accuracy and loss curves",
              "Use confusion matrix for evaluation",
              "Explain model confidence and mistakes",
            ],
            project:
              "Plant Disease Detector. Build an image classification app that detects plant leaf diseases and explains prediction confidence.",
            whyProject:
              "This project looks impressive, has a real-world use case, and demonstrates deep learning, evaluation, and deployment potential.",
            resources: [
              {
                name: "TensorFlow Transfer Learning",
                link: "https://www.tensorflow.org/tutorials/images/transfer_learning",
              },
              {
                name: "PyTorch Transfer Learning",
                link: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
              },
              {
                name: "Kaggle Computer Vision",
                link: "https://www.kaggle.com/learn/computer-vision",
              },
            ],
            baseHours: 60,
          },
          {
            phase: "Phase 4",
            title: "AI App Integration",
            skills: [
              "Model APIs",
              "Frontend Demo",
              "Deployment",
              "Explainability",
            ],
            focus:
              "Package your model into an application that users can interact with and understand.",
            practice: [
              "Serve model predictions through an API",
              "Create a simple frontend or Streamlit app",
              "Show prediction confidence",
              "Add limitations and ethical notes",
              "Deploy the app publicly",
            ],
            project:
              "InterviewCoach AI. Build an AI-powered mock interview helper that takes answers and gives structured feedback using model/API logic.",
            whyProject:
              "This project feels like a real AI product and demonstrates that you can combine models, user experience, and deployment.",
            resources: [
              {
                name: "FastAPI Docs",
                link: "https://fastapi.tiangolo.com/",
              },
              {
                name: "Streamlit Docs",
                link: "https://docs.streamlit.io/",
              },
              {
                name: "Hugging Face Course",
                link: "https://huggingface.co/learn/nlp-course/chapter1/1",
              },
            ],
            baseHours: 45,
          },
        ],

        Advanced: [
          {
            phase: "Phase 1",
            title: "Advanced ML Systems",
            skills: [
              "ML Pipelines",
              "Experiment Tracking",
              "Model Versioning",
              "MLOps Basics",
            ],
            focus:
              "Learn how serious ML projects are organized, tracked, versioned, and improved over time.",
            practice: [
              "Track model experiments",
              "Save and reload trained models",
              "Compare model versions",
              "Document datasets and assumptions",
              "Create a reproducible training pipeline",
            ],
            project:
              "ModelLab — ML Experiment Tracker. Build a system that compares multiple models, metrics, datasets, and experiment notes.",
            whyProject:
              "This proves advanced thinking because it focuses on maintainability and reproducibility, not just training one model.",
            resources: [
              {
                name: "MLflow Docs",
                link: "https://mlflow.org/docs/latest/index.html",
              },
              {
                name: "Made With ML",
                link: "https://madewithml.com/",
              },
              {
                name: "Google MLOps",
                link: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
              },
            ],
            baseHours: 55,
          },
          {
            phase: "Phase 2",
            title: "LLM & Generative AI Apps",
            skills: ["Prompting", "Embeddings", "RAG Basics", "AI APIs"],
            focus:
              "Build AI applications that use language models to answer questions, summarize data, or generate personalized recommendations.",
            practice: [
              "Use an AI API safely",
              "Write structured prompts",
              "Understand embeddings conceptually",
              "Build a simple retrieval-based assistant",
              "Add guardrails and fallback responses",
            ],
            project:
              "DocuMentor AI. Build an AI assistant that answers questions from uploaded study notes or documentation using retrieval-style logic.",
            whyProject:
              "This is highly relevant today because it shows practical generative AI application development, not just traditional ML.",
            resources: [
              {
                name: "OpenAI Docs",
                link: "https://platform.openai.com/docs",
              },
              {
                name: "Google AI Studio",
                link: "https://aistudio.google.com/",
              },
              {
                name: "LangChain Docs",
                link: "https://python.langchain.com/docs/introduction/",
              },
            ],
            baseHours: 60,
          },
          {
            phase: "Phase 3",
            title: "Production AI Portfolio",
            skills: ["Deployment", "Monitoring", "UX", "Ethical AI"],
            focus:
              "Turn an advanced AI idea into a polished product demo with clear UX, limitations, and responsible AI notes.",
            practice: [
              "Deploy a model/API-backed app",
              "Add usage instructions",
              "Show confidence or explanation where possible",
              "Mention limitations clearly",
              "Write a professional case study",
            ],
            project:
              "PathPilot AI. Build an AI-powered career guidance assistant that takes a user’s skills, goals, and available time, then recommends a structured learning plan with projects and milestones.",
            whyProject:
              "This is a strong capstone because it combines AI, product thinking, personalization, frontend UX, and real-world usefulness.",
            resources: [
              {
                name: "Responsible AI Guide",
                link: "https://ai.google/responsibility/responsible-ai-practices/",
              },
              {
                name: "Hugging Face Spaces",
                link: "https://huggingface.co/docs/hub/spaces",
              },
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
            ],
            baseHours: 55,
          },
        ],
      },
      "Data Science": {
        Beginner: [
          {
            phase: "Phase 1",
            title: "Python & Data Foundations",
            skills: ["Python", "Pandas", "NumPy", "Data Cleaning"],
            focus:
              "Learn how to work with datasets, clean messy data, and prepare it for analysis.",
            practice: [
              "Load CSV files using Pandas",
              "Handle missing values",
              "Filter and sort data",
              "Create summary statistics",
              "Export cleaned datasets",
            ],
            project:
              "CampusSpend Analyzer. Analyze student spending data across food, travel, books, and subscriptions to find monthly patterns and savings opportunities.",
            whyProject:
              "This project teaches practical data cleaning and analysis using a relatable student-life dataset.",
            resources: [
              {
                name: "Kaggle Pandas",
                link: "https://www.kaggle.com/learn/pandas",
              },
              {
                name: "Pandas Docs",
                link: "https://pandas.pydata.org/docs/",
              },
              {
                name: "NumPy Quickstart",
                link: "https://numpy.org/doc/stable/user/quickstart.html",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 2",
            title: "Data Visualization",
            skills: ["Matplotlib", "Seaborn", "Charts", "Storytelling"],
            focus:
              "Learn how to turn raw numbers into visual insights that people can understand quickly.",
            practice: [
              "Create bar charts and line charts",
              "Visualize category-wise spending",
              "Compare trends over time",
              "Use labels and titles clearly",
              "Write short insight summaries",
            ],
            project:
              "Study Habits Dashboard. Build visualizations showing how study hours, sleep, attendance, and marks relate to student performance.",
            whyProject:
              "This project proves that you can communicate insights visually, which is a core data science skill.",
            resources: [
              {
                name: "Matplotlib Tutorials",
                link: "https://matplotlib.org/stable/tutorials/index.html",
              },
              {
                name: "Seaborn Tutorial",
                link: "https://seaborn.pydata.org/tutorial.html",
              },
              {
                name: "Data Visualization Guide",
                link: "https://www.data-to-viz.com/",
              },
            ],
            baseHours: 35,
          },
          {
            phase: "Phase 3",
            title: "Exploratory Data Analysis",
            skills: ["EDA", "Correlation", "Outliers", "Insights"],
            focus:
              "Learn how to investigate data, find patterns, detect problems, and explain what the data suggests.",
            practice: [
              "Check column distributions",
              "Find correlations",
              "Detect outliers",
              "Compare groups",
              "Write conclusions from charts",
            ],
            project:
              "Internship Trends Report. Analyze internship listing data to discover common skills, popular roles, remote/on-site patterns, and experience requirements.",
            whyProject:
              "This project feels realistic and career-focused because it extracts useful insights from job-market style data.",
            resources: [
              {
                name: "Kaggle Data Visualization",
                link: "https://www.kaggle.com/learn/data-visualization",
              },
              {
                name: "Google Data Analytics",
                link: "https://grow.google/certificates/data-analytics/",
              },
              {
                name: "Towards Data Science EDA",
                link: "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15/",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 4",
            title: "Basic Machine Learning",
            skills: [
              "Regression",
              "Classification",
              "Evaluation Metrics",
              "Scikit-learn",
            ],
            focus:
              "Learn how data science connects to predictive modeling and how to evaluate model performance.",
            practice: [
              "Train a regression model",
              "Train a classification model",
              "Split train and test data",
              "Evaluate accuracy and error",
              "Explain model results simply",
            ],
            project:
              "Student Success Predictor. Build a model that predicts whether a student is likely to perform well based on study hours, attendance, and previous scores.",
            whyProject:
              "This project connects data analysis with prediction and gives you a complete beginner-friendly data science case study.",
            resources: [
              {
                name: "Scikit-learn Tutorials",
                link: "https://scikit-learn.org/stable/tutorial/index.html",
              },
              {
                name: "Kaggle Intro to ML",
                link: "https://www.kaggle.com/learn/intro-to-machine-learning",
              },
              {
                name: "Google ML Crash Course",
                link: "https://developers.google.com/machine-learning/crash-course",
              },
            ],
            baseHours: 50,
          },
        ],

        Intermediate: [
          {
            phase: "Phase 1",
            title: "Advanced Data Cleaning",
            skills: [
              "Missing Data",
              "Feature Engineering",
              "Encoding",
              "Pipelines",
            ],
            focus:
              "Learn how to prepare messy real-world datasets so analysis and models become more reliable.",
            practice: [
              "Handle missing and duplicate data",
              "Create new features from existing columns",
              "Encode categorical variables",
              "Normalize numerical columns",
              "Build reusable preprocessing steps",
            ],
            project:
              "Job Market Skill Analyzer. Clean and analyze job listing data to identify in-demand skills, role clusters, and salary trends.",
            whyProject:
              "This project is valuable because it connects data science skills with career insights and requires meaningful preprocessing.",
            resources: [
              {
                name: "Kaggle Data Cleaning",
                link: "https://www.kaggle.com/learn/data-cleaning",
              },
              {
                name: "Feature Engineering",
                link: "https://www.kaggle.com/learn/feature-engineering",
              },
              {
                name: "Scikit-learn Preprocessing",
                link: "https://scikit-learn.org/stable/modules/preprocessing.html",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 2",
            title: "Dashboards & Analytics",
            skills: ["Dashboards", "KPIs", "Plotly", "Streamlit"],
            focus:
              "Learn how to turn analysis into an interactive dashboard that non-technical users can explore.",
            practice: [
              "Create KPI cards",
              "Build interactive charts",
              "Add filters",
              "Write insight summaries",
              "Deploy a dashboard",
            ],
            project:
              "CareerPulse Dashboard. Build an interactive dashboard showing tech role demand, top skills, and learning recommendations based on market trends.",
            whyProject:
              "This project looks professional because it combines analytics, UI, storytelling, and practical career value.",
            resources: [
              {
                name: "Streamlit Docs",
                link: "https://docs.streamlit.io/",
              },
              {
                name: "Plotly Python",
                link: "https://plotly.com/python/",
              },
              {
                name: "Dashboard Design Tips",
                link: "https://www.tableau.com/learn/articles/dashboard-design",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "Predictive Modeling",
            skills: [
              "Model Selection",
              "Cross Validation",
              "Metrics",
              "Error Analysis",
            ],
            focus:
              "Learn how to compare models, evaluate them correctly, and explain why one model performs better.",
            practice: [
              "Compare multiple algorithms",
              "Use cross-validation",
              "Tune hyperparameters",
              "Analyze model errors",
              "Create a final model report",
            ],
            project:
              "ChurnSense Predictor. Build a customer churn prediction case study with cleaning, visualization, model comparison, and business recommendations.",
            whyProject:
              "Churn prediction is a classic real-world data science problem and demonstrates business thinking along with modeling.",
            resources: [
              {
                name: "Scikit-learn Model Selection",
                link: "https://scikit-learn.org/stable/model_selection.html",
              },
              {
                name: "Kaggle Intermediate ML",
                link: "https://www.kaggle.com/learn/intermediate-machine-learning",
              },
              {
                name: "Evaluation Metrics",
                link: "https://scikit-learn.org/stable/modules/model_evaluation.html",
              },
            ],
            baseHours: 55,
          },
          {
            phase: "Phase 4",
            title: "Portfolio Case Study",
            skills: ["Storytelling", "GitHub", "Reports", "Deployment"],
            focus:
              "Learn how to present your data science work as a professional case study, not just a notebook.",
            practice: [
              "Write a problem statement",
              "Explain the dataset",
              "Summarize insights",
              "Show model results clearly",
              "Publish notebook, dashboard, and README",
            ],
            project:
              "End-to-End Data Science Case Study. Create a polished case study with dataset explanation, EDA, model, dashboard screenshots, and business recommendations.",
            whyProject:
              "This project helps recruiters understand your full data science workflow from raw data to final insights.",
            resources: [
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
              {
                name: "GitHub README Guide",
                link: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
              },
              {
                name: "Kaggle Notebooks",
                link: "https://www.kaggle.com/code",
              },
            ],
            baseHours: 35,
          },
        ],

        Advanced: [
          {
            phase: "Phase 1",
            title: "Advanced Analytics",
            skills: [
              "SQL",
              "Cohort Analysis",
              "A/B Testing",
              "Business Metrics",
            ],
            focus:
              "Learn how data scientists solve business problems using metrics, experiments, and structured analysis.",
            practice: [
              "Write SQL queries for analysis",
              "Calculate conversion and retention metrics",
              "Perform cohort analysis",
              "Understand A/B testing basics",
              "Translate data into business recommendations",
            ],
            project:
              "Product Growth Analysis. Analyze user behavior data to identify retention issues, feature adoption, and growth opportunities.",
            whyProject:
              "This project shows business-focused data science thinking, which is highly valuable in real companies.",
            resources: [
              {
                name: "Mode SQL Tutorial",
                link: "https://mode.com/sql-tutorial/",
              },
              {
                name: "A/B Testing Guide",
                link: "https://www.optimizely.com/optimization-glossary/ab-testing/",
              },
              {
                name: "Cohort Analysis Guide",
                link: "https://clevertap.com/blog/cohort-analysis/",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 2",
            title: "Machine Learning Systems",
            skills: [
              "Pipelines",
              "Model Monitoring",
              "Deployment",
              "Reproducibility",
            ],
            focus:
              "Learn how to make data science projects reproducible, deployable, and easier to maintain.",
            practice: [
              "Create reusable preprocessing pipelines",
              "Save trained models",
              "Track experiments",
              "Deploy a prediction app",
              "Document assumptions and limitations",
            ],
            project:
              "ForecastLab — Demand Forecasting System. Build a forecasting project with data pipeline, model comparison, deployment demo, and clear limitations.",
            whyProject:
              "Forecasting systems are realistic business use cases and demonstrate advanced data science workflow maturity.",
            resources: [
              {
                name: "MLflow Docs",
                link: "https://mlflow.org/docs/latest/index.html",
              },
              {
                name: "Scikit-learn Pipelines",
                link: "https://scikit-learn.org/stable/modules/compose.html",
              },
              {
                name: "Streamlit Deployment",
                link: "https://docs.streamlit.io/deploy",
              },
            ],
            baseHours: 60,
          },
          {
            phase: "Phase 3",
            title: "Capstone Data Product",
            skills: [
              "Data Product",
              "Dashboard UX",
              "Model Explanation",
              "Case Study",
            ],
            focus:
              "Build one polished data product that combines analysis, prediction, dashboard UI, and a written case study.",
            practice: [
              "Choose a real-world dataset",
              "Build a clean dashboard",
              "Add a predictive model if useful",
              "Explain insights in plain language",
              "Publish a complete project case study",
            ],
            project:
              "InsightOps — Business Intelligence + Prediction Platform. Build a dashboard that analyzes operational data, highlights key insights, and includes one prediction feature.",
            whyProject:
              "This project feels like a real product because it combines analytics, machine learning, visual communication, and business decision support.",
            resources: [
              {
                name: "Streamlit Docs",
                link: "https://docs.streamlit.io/",
              },
              {
                name: "Plotly Dash",
                link: "https://dash.plotly.com/",
              },
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
            ],
            baseHours: 65,
          },
        ],
      },
      Cybersecurity: {
        Beginner: [
          {
            phase: "Phase 1",
            title: "Networking & Linux Basics",
            skills: ["TCP/IP", "DNS", "HTTP", "Linux", "Command Line"],
            focus:
              "Build the basic technical foundation needed to understand how systems communicate and where security risks appear.",
            practice: [
              "Learn common networking terms",
              "Use basic Linux commands",
              "Understand HTTP request and response flow",
              "Practice ping, traceroute, and nslookup",
              "Document how a browser connects to a website",
            ],
            project:
              "NetMap Notes — Networking Fundamentals Lab. Create a beginner-friendly lab report explaining DNS, HTTP, IP addresses, ports, and common network commands with screenshots.",
            whyProject:
              "This project proves that you understand the foundation of cybersecurity instead of jumping directly into tools.",
            resources: [
              {
                name: "Cisco Networking Basics",
                link: "https://www.netacad.com/courses/networking-basics",
              },
              {
                name: "Linux Journey",
                link: "https://linuxjourney.com/",
              },
              {
                name: "MDN HTTP Overview",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 2",
            title: "Web Security Fundamentals",
            skills: ["OWASP", "Authentication", "Input Validation", "HTTPS"],
            focus:
              "Understand the most common web application security risks and how developers can prevent them.",
            practice: [
              "Study OWASP Top 10 basics",
              "Understand SQL injection conceptually",
              "Learn XSS prevention basics",
              "Review password and authentication mistakes",
              "Write notes on secure form handling",
            ],
            project:
              "SecureForm Demo. Build a simple login/contact form page and document common security mistakes like weak validation, insecure passwords, and unsafe input handling.",
            whyProject:
              "This project connects cybersecurity with web development and shows that you understand security from a developer’s perspective.",
            resources: [
              {
                name: "OWASP Top 10",
                link: "https://owasp.org/www-project-top-ten/",
              },
              {
                name: "PortSwigger Web Security Academy",
                link: "https://portswigger.net/web-security",
              },
              {
                name: "MDN Web Security",
                link: "https://developer.mozilla.org/en-US/docs/Web/Security",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "Hands-on Security Labs",
            skills: ["Nmap", "Burp Suite", "TryHackMe", "Basic Pentesting"],
            focus:
              "Start practicing in safe lab environments where you can learn security tools legally and responsibly.",
            practice: [
              "Complete beginner rooms on TryHackMe",
              "Run basic Nmap scans in a lab",
              "Explore requests using Burp Suite",
              "Write short lab notes",
              "Avoid testing on real websites without permission",
            ],
            project:
              "Beginner Security Lab Writeups. Complete 3 beginner-friendly security labs and publish clean writeups explaining the goal, tools used, steps, and lessons learned.",
            whyProject:
              "Writeups show practical learning, communication skill, and responsible cybersecurity practice.",
            resources: [
              {
                name: "TryHackMe Pre Security",
                link: "https://tryhackme.com/path/outline/presecurity",
              },
              {
                name: "Nmap Guide",
                link: "https://nmap.org/book/man.html",
              },
              {
                name: "Burp Suite Academy",
                link: "https://portswigger.net/web-security/learning-path",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 4",
            title: "Security Portfolio Basics",
            skills: ["Writeups", "Reports", "GitHub", "Responsible Disclosure"],
            focus:
              "Learn how to present cybersecurity learning professionally without exposing unsafe or irresponsible content.",
            practice: [
              "Create a GitHub repo for lab notes",
              "Write clean vulnerability explanations",
              "Mention tools and environment used",
              "Add screenshots safely",
              "Include responsible testing disclaimer",
            ],
            project:
              "Cyber Portfolio Starter. Build a portfolio section that includes lab writeups, security notes, tool summaries, and responsible learning guidelines.",
            whyProject:
              "A well-presented cybersecurity portfolio helps recruiters see your learning path, practical effort, and professionalism.",
            resources: [
              {
                name: "GitHub README Guide",
                link: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
              },
              {
                name: "HackerOne Disclosure Guidelines",
                link: "https://www.hackerone.com/disclosure-guidelines",
              },
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
            ],
            baseHours: 30,
          },
        ],

        Intermediate: [
          {
            phase: "Phase 1",
            title: "Web Vulnerability Analysis",
            skills: ["XSS", "SQL Injection", "CSRF", "Authentication Flaws"],
            focus:
              "Learn how common web vulnerabilities happen, how to identify them in labs, and how to explain them clearly.",
            practice: [
              "Complete XSS and SQL injection labs",
              "Compare vulnerable vs secure input handling",
              "Analyze authentication mistakes",
              "Write remediation steps",
              "Create short vulnerability notes",
            ],
            project:
              "OWASP Lab Journal. Complete selected OWASP-style labs and publish structured writeups with impact, cause, reproduction steps, and prevention.",
            whyProject:
              "This project shows practical web security understanding and the ability to communicate risk professionally.",
            resources: [
              {
                name: "PortSwigger Labs",
                link: "https://portswigger.net/web-security/all-labs",
              },
              {
                name: "OWASP Cheat Sheets",
                link: "https://cheatsheetseries.owasp.org/",
              },
              {
                name: "OWASP WebGoat",
                link: "https://owasp.org/www-project-webgoat/",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 2",
            title: "Security Tools & Recon",
            skills: ["Nmap", "Burp Suite", "Wireshark", "Recon Basics"],
            focus:
              "Develop safe tool familiarity by practicing scanning, request inspection, and traffic analysis in controlled environments.",
            practice: [
              "Scan lab machines with Nmap",
              "Capture packets using Wireshark",
              "Inspect HTTP requests in Burp Suite",
              "Document findings clearly",
              "Separate observations from assumptions",
            ],
            project:
              "Lab Recon Report. Create a professional-style recon report for a local/lab target including discovered services, screenshots, observations, and safe recommendations.",
            whyProject:
              "This project teaches how to use security tools responsibly and present findings like a real security report.",
            resources: [
              {
                name: "Wireshark User Guide",
                link: "https://www.wireshark.org/docs/wsug_html_chunked/",
              },
              {
                name: "Nmap Book",
                link: "https://nmap.org/book/",
              },
              {
                name: "Burp Suite Documentation",
                link: "https://portswigger.net/burp/documentation",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "Secure Development",
            skills: [
              "Secure Auth",
              "Validation",
              "Authorization",
              "Secrets Management",
            ],
            focus:
              "Learn how developers can build safer applications by applying security principles during development.",
            practice: [
              "Add validation to forms",
              "Understand authentication vs authorization",
              "Avoid storing secrets in frontend code",
              "Use environment variables",
              "Write secure error messages",
            ],
            project:
              "SecureLogin Demo. Build a small authentication demo with validation, protected route concept, safe error handling, and security notes.",
            whyProject:
              "This is especially useful for web development roles because it shows you can think about security while building apps.",
            resources: [
              {
                name: "OWASP Authentication Cheat Sheet",
                link: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
              },
              {
                name: "OWASP Secrets Management",
                link: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
              },
              {
                name: "MDN Web Security",
                link: "https://developer.mozilla.org/en-US/docs/Web/Security",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 4",
            title: "Security Reporting Portfolio",
            skills: [
              "Report Writing",
              "Risk Rating",
              "Remediation",
              "Documentation",
            ],
            focus:
              "Learn how to write clear security reports that explain the issue, impact, evidence, and fix.",
            practice: [
              "Write vulnerability summaries",
              "Add severity and impact",
              "Include reproduction steps",
              "Suggest fixes",
              "Create a clean report template",
            ],
            project:
              "Vulnerability Report Pack. Create 3 polished sample reports from lab vulnerabilities with summary, impact, reproduction, screenshots, and remediation.",
            whyProject:
              "Good reporting is a major cybersecurity skill and makes your portfolio look much more professional.",
            resources: [
              {
                name: "HackerOne Report Examples",
                link: "https://www.hackerone.com/ethical-hacker/hack-report-writing",
              },
              {
                name: "CVSS Calculator",
                link: "https://www.first.org/cvss/calculator/3.1",
              },
              {
                name: "Google Technical Writing",
                link: "https://developers.google.com/tech-writing",
              },
            ],
            baseHours: 35,
          },
        ],

        Advanced: [
          {
            phase: "Phase 1",
            title: "Application Security Engineering",
            skills: [
              "Threat Modeling",
              "Secure Architecture",
              "Code Review",
              "Risk Analysis",
            ],
            focus:
              "Learn how to evaluate applications from a security design perspective before vulnerabilities appear.",
            practice: [
              "Create simple threat models",
              "Identify trust boundaries",
              "Review authentication flows",
              "Analyze risky data flows",
              "Suggest secure architecture improvements",
            ],
            project:
              "ThreatMap — App Security Review. Choose a sample web app and create a threat model showing assets, risks, attack surfaces, and recommended mitigations.",
            whyProject:
              "This project shows advanced security thinking because it focuses on prevention and architecture, not only tool usage.",
            resources: [
              {
                name: "OWASP Threat Modeling",
                link: "https://owasp.org/www-community/Threat_Modeling",
              },
              {
                name: "Microsoft Threat Modeling",
                link: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool",
              },
              {
                name: "OWASP ASVS",
                link: "https://owasp.org/www-project-application-security-verification-standard/",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 2",
            title: "Advanced Web Security Labs",
            skills: [
              "Advanced XSS",
              "Access Control",
              "SSRF Basics",
              "Security Testing",
            ],
            focus:
              "Deepen your practical testing ability using intentionally vulnerable labs and structured methodology.",
            practice: [
              "Complete intermediate web security labs",
              "Analyze access control flaws",
              "Study SSRF conceptually in labs",
              "Write detailed remediation notes",
              "Build a repeatable testing checklist",
            ],
            project:
              "WebSec Methodology Notebook. Create a structured testing checklist and lab writeups for authentication, access control, XSS, and SSRF-style vulnerabilities.",
            whyProject:
              "This project demonstrates organized security methodology, which is more impressive than random tool usage.",
            resources: [
              {
                name: "PortSwigger Academy",
                link: "https://portswigger.net/web-security",
              },
              {
                name: "OWASP Testing Guide",
                link: "https://owasp.org/www-project-web-security-testing-guide/",
              },
              {
                name: "PentesterLab",
                link: "https://pentesterlab.com/",
              },
            ],
            baseHours: 60,
          },
          {
            phase: "Phase 3",
            title: "Secure Product Capstone",
            skills: [
              "Secure Auth",
              "Logging",
              "Validation",
              "Security Documentation",
            ],
            focus:
              "Build or audit a product-like app with security features, documentation, and clear risk explanations.",
            practice: [
              "Add secure validation patterns",
              "Document authentication flow",
              "Create security checklist",
              "Write risk notes and mitigations",
              "Prepare a portfolio-ready security case study",
            ],
            project:
              "SecureVault — Security-Focused Web App Case Study. Build or audit a simple vault-style web app and document authentication, validation, access control, and security decisions.",
            whyProject:
              "This project combines web development and cybersecurity, making it especially strong for roles that value secure coding and practical security awareness.",
            resources: [
              {
                name: "OWASP Cheat Sheets",
                link: "https://cheatsheetseries.owasp.org/",
              },
              {
                name: "MDN Security",
                link: "https://developer.mozilla.org/en-US/docs/Web/Security",
              },
              {
                name: "GitHub Security Docs",
                link: "https://docs.github.com/en/code-security",
              },
            ],
            baseHours: 55,
          },
        ],
      },
      "Backend Development": {
        Beginner: [
          {
            phase: "Phase 1",
            title: "Programming & Server Basics",
            skills: ["JavaScript", "Node.js", "Command Line", "NPM"],
            focus:
              "Learn how backend code runs outside the browser and how servers handle requests.",
            practice: [
              "Practice JavaScript functions and objects",
              "Run JavaScript using Node.js",
              "Use npm to install packages",
              "Create a basic HTTP server",
              "Understand request and response flow",
            ],
            project:
              "ServerStarter — Basic Node.js API. Build a simple backend server with routes for home, users, and tasks using Node.js.",
            whyProject:
              "This project helps you understand how backend applications receive requests and send responses before adding databases or complex logic.",
            resources: [
              {
                name: "Node.js Learn",
                link: "https://nodejs.org/en/learn",
              },
              {
                name: "MDN HTTP Overview",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
              },
              {
                name: "NPM Docs",
                link: "https://docs.npmjs.com/",
              },
            ],
            baseHours: 35,
          },
          {
            phase: "Phase 2",
            title: "Express & REST APIs",
            skills: ["Express", "Routing", "REST APIs", "Middleware"],
            focus:
              "Learn how to build structured APIs that frontend apps can communicate with.",
            practice: [
              "Create GET and POST routes",
              "Use route parameters",
              "Understand middleware",
              "Send JSON responses",
              "Test APIs using Postman or Thunder Client",
            ],
            project:
              "TaskAPI — REST API for Task Management. Build an Express API where users can create, read, update, and delete tasks.",
            whyProject:
              "CRUD APIs are the foundation of most backend projects, and this proves you understand real API behavior.",
            resources: [
              {
                name: "Express Docs",
                link: "https://expressjs.com/",
              },
              {
                name: "REST API Tutorial",
                link: "https://restfulapi.net/",
              },
              {
                name: "Postman Learning Center",
                link: "https://learning.postman.com/",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 3",
            title: "Databases & Data Modeling",
            skills: ["MongoDB", "Schemas", "CRUD", "Data Relationships"],
            focus:
              "Learn how backend apps store data permanently and how to structure data for real applications.",
            practice: [
              "Connect backend to a database",
              "Create database schemas",
              "Perform CRUD operations",
              "Validate incoming data",
              "Handle database errors",
            ],
            project:
              "NoteVault API — Notes Backend with Database. Build a notes API where notes are stored in a database with title, content, tags, and timestamps.",
            whyProject:
              "This project proves that you can build a backend that stores and manages real data instead of temporary in-memory data.",
            resources: [
              {
                name: "MongoDB University",
                link: "https://learn.mongodb.com/",
              },
              {
                name: "Mongoose Docs",
                link: "https://mongoosejs.com/docs/",
              },
              {
                name: "MongoDB CRUD",
                link: "https://www.mongodb.com/docs/manual/crud/",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 4",
            title: "Authentication Basics",
            skills: [
              "JWT",
              "Password Hashing",
              "Protected Routes",
              "Auth Flow",
            ],
            focus:
              "Learn how backend systems identify users and protect private data.",
            practice: [
              "Create signup and login routes",
              "Hash passwords before storing them",
              "Generate JWT tokens",
              "Protect private routes",
              "Handle invalid credentials safely",
            ],
            project:
              "AuthBase — Secure Login API. Build an authentication API with signup, login, password hashing, JWT-based protected routes, and user profile access.",
            whyProject:
              "Authentication is one of the most common backend requirements, and this project makes your backend skills look much more practical.",
            resources: [
              {
                name: "JWT Introduction",
                link: "https://jwt.io/introduction",
              },
              {
                name: "bcrypt NPM",
                link: "https://www.npmjs.com/package/bcrypt",
              },
              {
                name: "OWASP Authentication Guide",
                link: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 5",
            title: "Deployment & API Documentation",
            skills: [
              "Deployment",
              "Environment Variables",
              "API Docs",
              "GitHub",
            ],
            focus:
              "Learn how to publish your backend so others can test it and understand how to use it.",
            practice: [
              "Use environment variables",
              "Deploy backend publicly",
              "Write API documentation",
              "Add example requests and responses",
              "Create a clean README",
            ],
            project:
              "Backend Portfolio API. Deploy your best backend project and document all routes, request bodies, responses, errors, and setup steps.",
            whyProject:
              "A well-documented deployed API shows professionalism and makes your backend project easy for recruiters or teammates to test.",
            resources: [
              {
                name: "Render Docs",
                link: "https://render.com/docs",
              },
              {
                name: "Railway Docs",
                link: "https://docs.railway.app/",
              },
              {
                name: "Swagger Docs",
                link: "https://swagger.io/docs/",
              },
            ],
            baseHours: 30,
          },
        ],

        Intermediate: [
          {
            phase: "Phase 1",
            title: "API Architecture",
            skills: [
              "Clean Routes",
              "Controllers",
              "Services",
              "Error Handling",
            ],
            focus:
              "Learn how to structure backend projects so the code stays clean as features grow.",
            practice: [
              "Separate routes and controllers",
              "Create service functions",
              "Add centralized error handling",
              "Use consistent response formats",
              "Organize folders professionally",
            ],
            project:
              "ServiceDesk API — Structured Support Ticket Backend. Build a ticket management API using routes, controllers, services, validation, and clean error handling.",
            whyProject:
              "This project shows that you can write backend code that is organized, maintainable, and closer to real team standards.",
            resources: [
              {
                name: "Express Routing",
                link: "https://expressjs.com/en/guide/routing.html",
              },
              {
                name: "Node Best Practices",
                link: "https://github.com/goldbergyoni/nodebestpractices",
              },
              {
                name: "MDN HTTP Status Codes",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
              },
            ],
            baseHours: 40,
          },
          {
            phase: "Phase 2",
            title: "Database Design & Relationships",
            skills: ["MongoDB Relations", "Indexes", "Pagination", "Filtering"],
            focus:
              "Learn how to design database models and query data efficiently for real backend applications.",
            practice: [
              "Create related models",
              "Add search and filtering",
              "Implement pagination",
              "Use indexes conceptually",
              "Optimize repeated queries",
            ],
            project:
              "LearnHub API — Course Platform Backend. Build APIs for courses, lessons, users, enrollments, search, filters, and paginated results.",
            whyProject:
              "This project proves that you can model real product data and build APIs that handle more than simple CRUD.",
            resources: [
              {
                name: "MongoDB Data Modeling",
                link: "https://www.mongodb.com/docs/manual/data-modeling/",
              },
              {
                name: "MongoDB Indexes",
                link: "https://www.mongodb.com/docs/manual/indexes/",
              },
              {
                name: "Mongoose Population",
                link: "https://mongoosejs.com/docs/populate.html",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 3",
            title: "Security & Validation",
            skills: [
              "Input Validation",
              "Rate Limiting",
              "CORS",
              "Auth Security",
            ],
            focus:
              "Learn how to protect APIs from common mistakes and unsafe input.",
            practice: [
              "Validate request bodies",
              "Sanitize user input",
              "Add rate limiting",
              "Configure CORS properly",
              "Review authentication security issues",
            ],
            project:
              "SecureAPI — Hardened Authentication Backend. Build an authentication backend with validation, rate limiting, secure headers, JWT auth, and clean error responses.",
            whyProject:
              "This project makes your backend portfolio stronger because it shows awareness of real security concerns.",
            resources: [
              {
                name: "OWASP API Security",
                link: "https://owasp.org/www-project-api-security/",
              },
              {
                name: "Express Validator",
                link: "https://express-validator.github.io/docs/",
              },
              {
                name: "Helmet Docs",
                link: "https://helmetjs.github.io/",
              },
            ],
            baseHours: 45,
          },
          {
            phase: "Phase 4",
            title: "Testing & Reliability",
            skills: [
              "Unit Testing",
              "Integration Testing",
              "Jest",
              "API Testing",
            ],
            focus:
              "Learn how to test backend logic so your APIs behave correctly and reliably.",
            practice: [
              "Write tests for utility functions",
              "Test API endpoints",
              "Mock database behavior",
              "Check error cases",
              "Run tests before deployment",
            ],
            project:
              "Tested Task API. Take a task management backend and add tests for authentication, task creation, updates, deletion, and invalid inputs.",
            whyProject:
              "Testing shows maturity as a backend developer because it proves you care about reliability, not only feature completion.",
            resources: [
              {
                name: "Jest Docs",
                link: "https://jestjs.io/docs/getting-started",
              },
              {
                name: "Supertest NPM",
                link: "https://www.npmjs.com/package/supertest",
              },
              {
                name: "Node Test Runner",
                link: "https://nodejs.org/api/test.html",
              },
            ],
            baseHours: 40,
          },
        ],

        Advanced: [
          {
            phase: "Phase 1",
            title: "Scalable Backend Architecture",
            skills: ["System Design", "Caching", "Queues", "API Design"],
            focus:
              "Learn how backend systems are designed to handle growth, background work, and performance challenges.",
            practice: [
              "Design scalable API flows",
              "Understand caching use cases",
              "Learn queue-based background jobs conceptually",
              "Separate read-heavy and write-heavy logic",
              "Create architecture diagrams",
            ],
            project:
              "ScaleDesk — Scalable Support Backend Blueprint. Design and partially build a backend for support tickets with caching ideas, background notifications, and clean API architecture.",
            whyProject:
              "This project shows that you can think beyond basic endpoints and understand how backend systems scale.",
            resources: [
              {
                name: "System Design Primer",
                link: "https://github.com/donnemartin/system-design-primer",
              },
              {
                name: "Redis Docs",
                link: "https://redis.io/docs/latest/",
              },
              {
                name: "RabbitMQ Tutorials",
                link: "https://www.rabbitmq.com/tutorials",
              },
            ],
            baseHours: 55,
          },
          {
            phase: "Phase 2",
            title: "Advanced Auth & Permissions",
            skills: ["RBAC", "OAuth Basics", "Sessions", "Permission Models"],
            focus:
              "Learn how real applications manage different user roles, permissions, and secure access patterns.",
            practice: [
              "Create role-based access control",
              "Add admin and user permissions",
              "Understand OAuth conceptually",
              "Protect sensitive routes",
              "Log important security events",
            ],
            project:
              "AccessLayer API — Role-Based Permission System. Build a backend where admins, editors, and users have different permissions for managing resources.",
            whyProject:
              "Permission systems are common in real products, and this project proves you can handle more complex backend authorization logic.",
            resources: [
              {
                name: "Auth0 RBAC Guide",
                link: "https://auth0.com/docs/manage-users/access-control/rbac",
              },
              {
                name: "OAuth 2.0 Overview",
                link: "https://oauth.net/2/",
              },
              {
                name: "OWASP Access Control",
                link: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
              },
            ],
            baseHours: 50,
          },
          {
            phase: "Phase 3",
            title: "Production Backend Capstone",
            skills: ["Docker Basics", "Logging", "Monitoring", "Documentation"],
            focus:
              "Build a backend project that feels production-ready with deployment, logs, documentation, and maintainable structure.",
            practice: [
              "Add structured logging",
              "Use environment configuration",
              "Create API documentation",
              "Add basic monitoring mindset",
              "Deploy and test the production build",
            ],
            project:
              "APIForge — Production-Ready Backend Service. Build a complete backend service with authentication, database models, validation, logging, API docs, deployment, and a professional README.",
            whyProject:
              "This is a strong backend capstone because it demonstrates architecture, security, reliability, deployment, and documentation together.",
            resources: [
              {
                name: "Docker Getting Started",
                link: "https://docs.docker.com/get-started/",
              },
              {
                name: "Pino Logger",
                link: "https://getpino.io/",
              },
              {
                name: "Swagger Docs",
                link: "https://swagger.io/docs/",
              },
            ],
            baseHours: 65,
          },
        ],
      },
    };

    const fallbackRoadmap = [
      {
        phase: "Phase 1",
        title: "Core Foundations",
        skills: ["Basics", "Tools", "Fundamentals", "Practice"],
        project: "Build a beginner-friendly mini project",
        baseHours:
          answers.level === "Beginner"
            ? 40
            : answers.level === "Intermediate"
              ? 28
              : 20,
      },
      {
        phase: "Phase 2",
        title: "Practical Skills",
        skills: ["Applied Concepts", "Tools", "Projects", "Documentation"],
        project: "Build a practical portfolio project",
        baseHours:
          answers.level === "Beginner"
            ? 50
            : answers.level === "Intermediate"
              ? 35
              : 25,
      },
      {
        phase: "Phase 3",
        title: "Portfolio Readiness",
        skills: ["GitHub", "Deployment", "Project Explanation", "Revision"],
        project: "Polish and deploy your best project",
        baseHours:
          answers.level === "Beginner"
            ? 30
            : answers.level === "Intermediate"
              ? 25
              : 20,
      },
    ];

    const selectedRoadmap =
      roadmaps[answers.goal]?.[answers.level] || fallbackRoadmap;

    const dailyHours = getDailyHours();

    const roadmapWithDays = selectedRoadmap.map((item) => {
      return {
        ...item,
        days: Math.ceil(item.baseHours / dailyHours),
      };
    });

    const totalDays = roadmapWithDays.reduce((total, item) => {
      return total + item.days;
    }, 0);

    return {
      phases: roadmapWithDays,
      totalDays: totalDays,
    };
  }
  if (page === "questions") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
        <div className="max-w-2xl w-full bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center">
          <p className="text-indigo-400 mb-4 text-sm tracking-widest uppercase">
            Step {question} of 4
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {question === 1 && "What path do you want to follow?"}
            {question === 2 && "What is your current level?"}
            {question === 3 && "How much time can you give daily?"}
            {question === 4 && "What is your main goal?"}
          </h1>

          <p className="text-gray-400 mb-8">
            {question === 1 &&
              "Choose the tech path you want SkillSync to personalize."}
            {question === 2 && "This helps us adjust the roadmap depth."}
            {question === 3 &&
              "Your timeline will be adapted based on your availability."}
            {question === 4 &&
              "This helps us shape your roadmap around your purpose."}
          </p>

          <div className="grid gap-4">
            {question === 1 && (
              <>
                <button
                  onClick={() => handleAnswer("goal", "Full Stack Development")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Full Stack Development
                </button>

                <button
                  onClick={() => handleAnswer("goal", "Frontend Development")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Frontend Development
                </button>
                <button
                  onClick={() => handleAnswer("goal", "Backend Development")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Backend Development
                </button>

                <button
                  onClick={() => handleAnswer("goal", "AI / ML")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  AI / ML
                </button>

                <button
                  onClick={() => handleAnswer("goal", "Data Science")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Data Science
                </button>

                <button
                  onClick={() => handleAnswer("goal", "Cybersecurity")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Cybersecurity
                </button>
              </>
            )}

            {question === 2 && (
              <>
                <button
                  onClick={() => handleAnswer("level", "Beginner")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Beginner
                </button>

                <button
                  onClick={() => handleAnswer("level", "Intermediate")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Intermediate
                </button>

                <button
                  onClick={() => handleAnswer("level", "Advanced")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Advanced
                </button>
              </>
            )}

            {question === 3 && (
              <>
                <button
                  onClick={() => handleAnswer("time", "1 hour/day")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  1 hour/day
                </button>

                <button
                  onClick={() => handleAnswer("time", "2 hours/day")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  2 hours/day
                </button>

                <button
                  onClick={() => handleAnswer("time", "4 hours/day")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  4 hours/day
                </button>

                <button
                  onClick={() => handleAnswer("time", "6+ hours/day")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  6+ hours/day
                </button>
              </>
            )}

            {question === 4 && (
              <>
                <button
                  onClick={() => handleAnswer("purpose", "Explore the field")}
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Explore the field
                </button>

                <button
                  onClick={() =>
                    handleAnswer("purpose", "Build real-world projects")
                  }
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Build real-world projects
                </button>

                <button
                  onClick={() =>
                    handleAnswer("purpose", "Prepare for internship")
                  }
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Prepare for internship
                </button>

                <button
                  onClick={() =>
                    handleAnswer("purpose", "Prepare for job / placement")
                  }
                  className="border border-gray-700 hover:border-indigo-500 rounded-xl p-4 transition"
                >
                  Prepare for job / placement
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (page === "roadmap") {
    const roadmapData = getRoadmap();
    const roadmap = roadmapData.phases;
    const totalDays = roadmapData.totalDays;

    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => {
              setPage("home");
              setQuestion(1);
            }}
            className="mb-8 text-gray-400 hover:text-white transition"
          >
            ← Back to Home
          </button>

          <div className="mb-12">
            <p className="text-indigo-400 mb-4 text-sm tracking-widest uppercase">
              Roadmap Generated
            </p>

            <h1 className="text-5xl font-bold mb-4">
              Your Personalized Learning Path
            </h1>

            <p className="text-gray-400 max-w-2xl text-lg">
              Follow these phases step by step to build strong fundamentals,
              practical skills, and portfolio-ready projects.
            </p>
            <div className="mt-6 inline-block bg-[#111111] border border-gray-800 rounded-2xl px-6 py-4">
              <p className="text-gray-500 text-sm">Estimated completion</p>
              <p className="text-3xl font-bold text-indigo-400">
                {totalDays} days
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-indigo-400 text-sm">{item.phase}</p>

                  <p className="text-gray-400 text-sm">{item.days} days</p>
                </div>

                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>

                {item.focus && (
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {item.focus}
                  </p>
                )}
                <div className="flex flex-wrap gap-3 mb-5">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-black border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {item.practice && (
                  <div className="mb-5">
                    <p className="text-gray-500 text-sm mb-3">Practice Tasks</p>

                    <ul className="space-y-2 text-gray-300">
                      {item.practice.map((task, taskIndex) => (
                        <li key={taskIndex}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-black/60 border border-gray-800 rounded-2xl p-5 mb-5">
                  <p className="text-gray-500 text-sm mb-2">
                    Suggested Project
                  </p>

                  <p className="text-gray-200 leading-relaxed">
                    {item.project}
                  </p>

                  {item.whyProject && (
                    <div className="mt-4 border-t border-gray-800 pt-4">
                      <p className="text-gray-500 text-sm mb-1">
                        Why this project?
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {item.whyProject}
                      </p>
                    </div>
                  )}
                </div>
                {item.resources && (
                  <div>
                    <p className="text-gray-500 text-sm mb-3">Resources</p>

                    <div className="flex flex-wrap gap-3">
                      {item.resources.map((resource, resourceIndex) => (
                        <a
                          key={resourceIndex}
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black border border-gray-800 hover:border-indigo-500 rounded-full px-4 py-2 text-sm text-gray-300 hover:text-white transition"
                        >
                          {resource.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (page === "features") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setPage("home")}
            className="mb-8 text-gray-400 hover:text-white transition"
          >
            ← Back to Home
          </button>

          <div className="text-center mb-14">
            <p className="text-indigo-400 mb-3 text-sm tracking-widest uppercase">
              Features
            </p>

            <h1 className="text-5xl font-bold mb-4">
              Built for focused learning
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              SkillSync turns confusing career paths into structured,
              time-aware, project-based roadmaps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">Personalized Roadmaps</h2>
              <p className="text-gray-400 leading-relaxed">
                Roadmaps adjust based on the user’s chosen path, current level,
                available time, and learning purpose.
              </p>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">Time-Based Planning</h2>
              <p className="text-gray-400 leading-relaxed">
                Each roadmap phase shows estimated completion time based on
                daily learning availability.
              </p>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">
                Project-Based Learning
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Every phase includes specific project ideas designed to build
                practical and portfolio-ready skills.
              </p>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">Curated Resources</h2>
              <p className="text-gray-400 leading-relaxed">
                Each phase includes useful resources and documentation links so
                users know exactly where to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (page === "explore") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setPage("home")}
            className="mb-8 text-gray-400 hover:text-white transition"
          >
            ← Back to Home
          </button>

          <div className="text-center mb-14">
            <p className="text-indigo-400 mb-3 text-sm tracking-widest uppercase">
              Explore Paths
            </p>

            <h1 className="text-5xl font-bold mb-4">Browse career roadmaps</h1>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore structured learning paths before generating your
              personalized roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">
                Full Stack Development
              </h2>
              <p className="text-gray-400 mb-5">
                Learn frontend, backend, APIs, databases, deployment, and
                portfolio-ready full-stack projects.
              </p>
              <button
                onClick={() => {
                  setAnswers({
                    goal: "Full Stack Development",
                    level: "Beginner",
                    time: "2 hours/day",
                    purpose: "Explore the field",
                  });
                  setPage("roadmap");
                }}
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                View Roadmap →
              </button>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">Frontend Development</h2>
              <p className="text-gray-400 mb-5">
                Master responsive design, React, Tailwind, animations, UI
                systems, and premium frontend projects.
              </p>
              <button
                onClick={() => {
                  setAnswers({
                    goal: "Frontend Development",
                    level: "Beginner",
                    time: "2 hours/day",
                    purpose: "Explore the field",
                  });
                  setPage("roadmap");
                }}
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                View Roadmap →
              </button>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">AI / ML</h2>
              <p className="text-gray-400 mb-5">
                Learn Python, ML models, deep learning, AI app development, and
                deployment.
              </p>
              <button
                onClick={() => {
                  setAnswers({
                    goal: "AI / ML",
                    level: "Beginner",
                    time: "2 hours/day",
                    purpose: "Explore the field",
                  });
                  setPage("roadmap");
                }}
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                View Roadmap →
              </button>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">Data Science</h2>
              <p className="text-gray-400 mb-5">
                Build skills in data cleaning, visualization, analytics, machine
                learning, and dashboards.
              </p>
              <button
                onClick={() => {
                  setAnswers({
                    goal: "Data Science",
                    level: "Beginner",
                    time: "2 hours/day",
                    purpose: "Explore the field",
                  });
                  setPage("roadmap");
                }}
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                View Roadmap →
              </button>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-3">Cybersecurity</h2>
              <p className="text-gray-400 mb-5">
                Learn networking, Linux, web security, labs, secure development,
                and security reporting.
              </p>
              <button
                onClick={() => {
                  setAnswers({
                    goal: "Cybersecurity",
                    level: "Beginner",
                    time: "2 hours/day",
                    purpose: "Explore the field",
                  });
                  setPage("roadmap");
                }}
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                View Roadmap →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (page === "about") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setPage("home")}
            className="mb-8 text-gray-400 hover:text-white transition"
          >
            ← Back to Home
          </button>

          <div className="text-center mb-14">
            <p className="text-indigo-400 mb-3 text-sm tracking-widest uppercase">
              About SkillSync
            </p>

            <h1 className="text-5xl font-bold mb-4">
              Learning paths should not feel random.
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              SkillSync AI helps learners choose a clear direction by generating
              structured roadmaps based on their goal, current level, available
              time, and learning purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>

              <p className="text-gray-400 leading-relaxed">
                Many students waste time jumping between random tutorials,
                roadmaps, and project ideas without knowing what to learn first,
                what to skip, and what to build.
              </p>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>

              <p className="text-gray-400 leading-relaxed">
                SkillSync turns broad career goals into phase-wise learning
                plans with estimated timelines, practical tasks, project ideas,
                and curated learning resources.
              </p>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>

              <p className="text-gray-400 leading-relaxed">
                The platform uses structured roadmap logic to adjust learning
                phases based on the selected career path, experience level, and
                daily time commitment.
              </p>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Built For</h2>

              <p className="text-gray-400 leading-relaxed">
                SkillSync is designed for students, beginners, and aspiring
                developers who want a practical and project-focused way to learn
                modern technical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[120px] rounded-full -translate-x-1/2"></div>

      {/* Navbar */}
      <nav className="relative z-10 px-8 py-6">
        <div className="grid grid-cols-3 items-center">
          <h1 className="text-2xl font-bold">SkillSync AI</h1>

          <div className="hidden md:flex justify-center gap-8 text-gray-300">
            <button
              onClick={() => setPage("features")}
              className="hover:text-white transition"
            >
              Features
            </button>

            <button
              onClick={() => setPage("explore")}
              className="hover:text-white transition"
            >
              Explore
            </button>

            <button
              onClick={() => setPage("about")}
              className="hover:text-white transition"
            >
              About
            </button>
          </div>

          <div></div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-indigo-400 mb-4 text-sm tracking-widest uppercase">
          AI Powered Learning Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Build Your Ideal
          <span className="text-indigo-500"> Tech Roadmap</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Personalized learning paths, curated projects, and milestone-based
          progression tailored to your career goals.
        </p>

        <div className="mt-10">
          <button
            onClick={() => setPage("questions")}
            className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-semibold transition"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
