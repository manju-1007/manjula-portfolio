import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Moon,
  Sun,
  ExternalLink,
  Code2,
  Database,
  Award,
  GraduationCap,
  Briefcase,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
} from "lucide-react";
import {
  personalInfo,
  projects,
  skillCategories,
  experience,
  education,
  certifications,
} from "./data/portfolioData";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 glass-card border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Manjula<span className="text-purple-500">.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#projects" className="hover:text-purple-500 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-purple-500 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-purple-500 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-purple-500 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-purple-100/80 dark:bg-navy-800 text-purple-700 dark:text-purple-300 hover:scale-105 transition-transform"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/20 dark:bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-300/60 dark:border-purple-500/30 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Open to Data Analyst, AI/ML & Software Roles
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
              {personalInfo.role}
            </p>

            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-9">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-purple-500/25 transition-all"
              >
                Explore Projects
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold glass-card hover:border-purple-500 transition-all"
              >
                <Linkedin className="w-4 h-4 text-purple-500" />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold glass-card hover:border-purple-500 transition-all"
              >
                <Github className="w-4 h-4 text-purple-500" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2.5">
                <Code2 className="w-7 h-7 text-purple-500" />
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Machine Learning, Data Analytics, Full-Stack & IoT solutions
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "AI & Data Science", "Full-Stack & IoT"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeFilter === cat
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/25"
                      : "glass-card text-slate-700 dark:text-slate-300 hover:border-purple-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-purple-500/50 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View source on GitHub"
                      className="text-slate-500 hover:text-purple-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold mb-2.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-200/40 dark:border-purple-500/15">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-lavender-100/80 dark:bg-navy-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2.5 mb-2">
            <Database className="w-7 h-7 text-purple-500" />
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Core languages, frameworks, and analytics stack
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((group) => (
              <div key={group.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-base text-purple-700 dark:text-purple-300 mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-100/70 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-purple-200/60 dark:border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section
          id="experience"
          className="py-16 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Internships */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2.5 mb-6">
              <Briefcase className="w-6 h-6 text-purple-500" />
              Internships & Experience
            </h2>
            <div className="space-y-5">
              {experience.map((item) => (
                <div key={item.role} className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg">{item.role}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    {item.company}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                    {item.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-purple-500" />
                Certifications & Achievements
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="text-2xl font-bold flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-6 h-6 text-purple-500" />
              Education
            </h2>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                      {edu.period}
                    </span>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-300">
                      {edu.score}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mt-2">{edu.degree}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-3">Let&apos;s Connect</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Looking for an enthusiastic Data Science & Full-Stack intern or entry-level engineer? Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-lavender-100/70 dark:bg-navy-800/90">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-sm font-medium hover:text-purple-500 truncate"
                  >
                    <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.email, "email")}
                    className="p-2 rounded-lg hover:bg-purple-200/50 dark:hover:bg-navy-900 text-purple-600 dark:text-purple-300"
                    title="Copy Email"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-lavender-100/70 dark:bg-navy-800/90">
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 text-sm font-medium hover:text-purple-500"
                  >
                    <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.rawPhone, "phone")}
                    className="p-2 rounded-lg hover:bg-purple-200/50 dark:hover:bg-navy-900 text-purple-600 dark:text-purple-300"
                    title="Copy Phone Number"
                  >
                    {copiedField === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-lavender-100/70 dark:bg-navy-800/90 text-sm font-medium hover:text-purple-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>linkedin.com/in/manjula-goddalla-23473b2a1</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-lavender-100/70 dark:bg-navy-800/90 text-sm font-medium">
                  <MapPin className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-purple-200 dark:border-purple-500/30 focus:outline-none focus:border-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-purple-200 dark:border-purple-500/30 focus:outline-none focus:border-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-purple-200 dark:border-purple-500/30 focus:outline-none focus:border-purple-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <p className="text-sm text-center font-semibold text-emerald-500">
                  Thank you! Your message has been recorded.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-200/50 dark:border-purple-500/20 py-8 px-4 sm:px-6 text-center text-sm text-slate-600 dark:text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-purple-500 transition-colors"
            >
              Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
