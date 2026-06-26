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
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL || "";

  async function handleAnswer(key, value) {
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);

    if (question < 4) {
      setQuestion(question + 1);
    } else {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${API_BASE}/api/roadmap`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedAnswers),
        });
        if (!response.ok) throw new Error("Server error");
        const data = await response.json();
        setRoadmapData(data);
        setPage("roadmap");
      } catch (err) {
        setError("Unable to generate roadmap. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  }

  async function fetchRoadmapDirect(goal) {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE}/api/roadmap`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal: goal,
          level: "Beginner",
          time: "2 hours/day",
          purpose: "Explore the field",
        }),
      });
      if (!response.ok) throw new Error("Server error");
      const data = await response.json();
      setRoadmapData(data);
      setPage("roadmap");
    } catch (err) {
      setError("Unable to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Generating your roadmap...</p>
        </div>
      </div>
    );
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

          {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

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
    const roadmap = roadmapData?.phases || [];
    const totalDays = roadmapData?.totalDays || 0;

    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => {
              setPage("home");
              setQuestion(1);
              setRoadmapData(null);
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
                Roadmaps adjust based on the user's chosen path, current level,
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
    const explorePaths = [
      {
        title: "Full Stack Development",
        desc: "Learn frontend, backend, APIs, databases, deployment, and portfolio-ready full-stack projects.",
        goal: "Full Stack Development",
      },
      {
        title: "Frontend Development",
        desc: "Master responsive design, React, Tailwind, animations, UI systems, and premium frontend projects.",
        goal: "Frontend Development",
      },
      {
        title: "AI / ML",
        desc: "Learn Python, ML models, deep learning, AI app development, and deployment.",
        goal: "AI / ML",
      },
      {
        title: "Data Science",
        desc: "Build skills in data cleaning, visualization, analytics, machine learning, and dashboards.",
        goal: "Data Science",
      },
      {
        title: "Cybersecurity",
        desc: "Learn networking, Linux, web security, labs, secure development, and security reporting.",
        goal: "Cybersecurity",
      },
      {
        title: "Backend Development",
        desc: "Learn Node.js, REST APIs, databases, authentication, deployment, and API documentation.",
        goal: "Backend Development",
      },
    ];

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
            {explorePaths.map((item) => (
              <div
                key={item.goal}
                className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500 transition"
              >
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-gray-400 mb-5">{item.desc}</p>
                <button
                  onClick={() => fetchRoadmapDirect(item.goal)}
                  className="text-indigo-400 hover:text-indigo-300 transition"
                >
                  View Roadmap →
                </button>
              </div>
            ))}
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
                The platform uses a REST API built with Spring Boot to process
                user inputs and return structured, phase-wise roadmaps adjusted
                by career path, experience level, and daily time commitment.
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

  // HOME PAGE
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[120px] rounded-full -translate-x-1/2"></div>

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

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-indigo-400 mb-4 text-sm tracking-widest uppercase">
          AI Powered Learning Platform
        </p>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Build Your Ideal<span className="text-indigo-500"> Tech Roadmap</span>
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
