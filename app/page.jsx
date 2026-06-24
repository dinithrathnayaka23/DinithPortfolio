"use client";

import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  AtSign,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Camera,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  Phone,
  Rocket,
  Send,
  Server,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  { value: "3.82", label: "Current CGPA" },
  { value: "7", label: "Featured projects" },
  { value: "6", label: "Technical articles" },
  { value: "5", label: "Events and showcases" },
];

const education = [
  {
    title: "Grade 5 Scholarship",
    time: "2013",
    detail: "Achieved a score of 169 and earned a scholarship to Kegalu Vidyalaya.",
  },
  {
    title: "G.C.E. Ordinary Level",
    time: "2019",
    detail: "Achieved 9 A passes, including English Literature.",
  },
  {
    title: "G.C.E. Advanced Level",
    time: "2023",
    detail: "Specialized in Biological Science with A for Chemistry, B for Physics, and C for Biology.",
  },
  {
    title: "University of Moratuwa",
    time: "2024 - Present",
    detail:
      "Pursuing a BSc in Information Technology and Management while maintaining a 3.82 CGPA.",
  },
];

const skills = [
  {
    title: "Front-End",
    icon: Code2,
    color: "teal",
    items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Back-End",
    icon: Server,
    color: "amber",
    items: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    title: "Languages",
    icon: Brain,
    color: "coral",
    items: ["C", "C++", "Python", "Java"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "violet",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "green",
    items: ["Figma", "Git", "VS Code", "Tailwind CSS"],
  },
  {
    title: "Collaboration",
    icon: Users,
    color: "blue",
    items: ["Communication", "Leadership", "Teamwork", "Presentation"],
  },
];

const projects = [
  {
    title: "The Burger Barn",
    image: "/project1.png",
    description: "A fast, playful front-end restaurant page with a focused ordering experience.",
    stack: ["HTML", "JavaScript", "Tailwind CSS"],
    status: "Completed",
    repo: "https://github.com/dinithrathnayaka23/burgerbarn.github.io",
    live: "https://burgerbarn-github-io.vercel.app/",
  },
  {
    title: "Server Room Monitoring System",
    image: "/project2.jpg",
    description: "ESP32-based IoT monitoring for temperature, humidity, and room conditions.",
    stack: ["React", "CSS", "JavaScript", "IoT"],
    status: "Completed",
    repo: "https://github.com/dinithrathnayaka23/Hardware_Frontend",
    live: "https://serverroomsystem.web.app/",
  },
  {
    title: "BrainBuzz",
    image: "/project3.png",
    description: "A quiz application designed for Advanced Level Physics practice.",
    stack: ["HTML", "JavaScript", "Tailwind CSS"],
    status: "Completed",
    repo: "https://github.com/dinithrathnayaka23/physicsquiz.dinith.io",
    live: "https://physicsquiz-dinith-io.vercel.app/",
  },
  {
    title: "Bite2Go",
    image: "/project4.png",
    description: "A food ordering interface design explored through Figma prototypes.",
    stack: ["Figma", "UI Design"],
    status: "Completed",
    live: "https://www.figma.com/design/tcL7CUeZN0VKfzRuBnDsUF/Scope-Project?node-id=0-1&p=f&t=nXMapdWnFr5qiYc6-0",
  },
  {
    title: "Portfolio 1.0",
    image: "/project5.png",
    description: "The first version of the personal portfolio, now rebuilt into this Next.js experience.",
    stack: ["React", "CSS"],
    status: "Completed",
    repo: "https://github.com/dinithrathnayaka23/DinithRathnayaka.io",
    live: "https://dinithrathnayaka23.github.io/DinithRathnayaka.io/",
  },
  {
    title: "Harmony Hub",
    image: "/project6.png",
    description: "An interactive music web app concept with playlist and discovery workflows.",
    stack: ["React", "Tailwind CSS", "PHP", "MySQL"],
    status: "In progress",
  },
  {
    title: "Medixia",
    image: "/project7.png",
    description: "A personalized healthcare web application concept focused on useful daily support.",
    stack: ["React", "CSS", "Firebase"],
    status: "In progress",
  },
];

const achievements = [
  {
    title: "Semi-Finalist at HackX 9.0",
    image: "/hackx.jpeg",
    detail:
      "Selected among the top teams in an inter-university startup ideathon organized by the University of Kelaniya.",
  },
  {
    title: "Speech Olympiad XVII",
    image: "/sovii.jpeg",
    detail:
      "Participated in the public speaking competition organized by the Gavel Club of the University of Moratuwa.",
  },
  {
    title: "Speech Olympiad XVIII",
    image: "/soviii.jpeg",
    detail:
      "Built confidence, stage presence, and persuasive communication through competitive speaking.",
  },
  {
    title: "CodeRush Hackathon",
    image: "/coderush.jpeg",
    detail:
      "Joined a collaborative coding challenge organized by the Faculty of IT, University of Moratuwa.",
  },
  {
    title: "FITEXPO Project Showcase",
    image: "/fitexpo.jpeg",
    detail:
      "Presented a technology project at FITEXPO to peers, faculty members, and industry visitors.",
  },
];

const blogs = [
  {
    title: "Smart Server Room Monitoring: A Beginner's Take on Microcontroller Projects",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YJy8Ca0cB_nYvbB1VAkvdA.jpeg",
    description:
      "An IoT project using microcontrollers to monitor temperature, humidity, and security conditions in real time.",
    href: "https://medium.com/@dinithoshada2003/smart-server-room-monitoring-a-beginners-take-on-microcontroller-projects-96afc744648e",
  },
  {
    title: "Real-time IoT Sensor Data Visualization with MQTT and HiveMQ",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*MT6K3WeGGUYmoDj0.jpg",
    description:
      "A look at live IoT data monitoring and device communication using MQTT and HiveMQ.",
    href: "https://medium.com/@dinithoshada2003/real-time-iot-sensor-data-visualization-with-mqtt-and-hivemq-64e9b4448c19",
  },
  {
    title: "Smarter Living Starts Here: ESP32 IR Controller for Everyday Devices",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*n6WLYk-DAGffWBhf",
    description:
      "An ESP32 project for controlling everyday appliances through infrared automation.",
    href: "https://medium.com/@dinithoshada2003/smarter-living-starts-here-esp32-ir-controller-for-everyday-devices-23f40ab00af1",
  },
  {
    title: "AI-Powered Cybersecurity: The New Frontier in Digital Protection",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Vl8xfkIwJjN8nfib.jpeg",
    description:
      "How AI can improve cybersecurity through faster detection and stronger digital defenses.",
    href: "https://medium.com/@dinithoshada2003/ai-powered-cybersecurity-the-new-frontier-in-digital-protection-9af1429421d2",
  },
  {
    title: "Little Introduction to Large Language Models and Machine Learning",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*HeWcpH9IG_QofQ4B8c3rhA.jpeg",
    description:
      "A beginner-friendly explanation of LLMs, capabilities, and natural language generation.",
    href: "https://medium.com/@dinithoshada2003/little-introduction-to-large-language-models-llms-e215844704fb",
  },
  {
    title: "Brief Discussion about Generative AI and Art of Prompting",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*SpFp3yDLiPDwXl8REpm1Gw.jpeg",
    description:
      "Principles of generative AI and practical prompt techniques for more useful creative outputs.",
    href: "https://medium.com/@dinithoshada2003/brief-discussion-about-generative-ai-and-art-of-prompting-ff2000545735",
  },
];

const contacts = [
  {
    label: "GitHub",
    value: "github.com/dinithrathnayaka23",
    href: "https://github.com/dinithrathnayaka23",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dinithrathnayaka",
    href: "https://www.linkedin.com/in/dinithrathnayaka/",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    value: "dinithoshada2003@gmail.com",
    href: "mailto:dinithoshada2003@gmail.com",
    icon: AtSign,
  },
  {
    label: "Phone",
    value: "+94 70 180 3826",
    href: "tel:+94701803826",
    icon: Phone,
  },
  {
    label: "Instagram",
    value: "@dinithrathanayaka23",
    href: "https://www.instagram.com/dinithrathanayaka23/?hl=en",
    icon: Camera,
  },
  {
    label: "Facebook",
    value: "facebook.com/dinith.rathnayaka",
    href: "https://www.facebook.com/dinith.rathnayaka.2025",
    icon: Globe,
  },
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function ExternalButton({ href, children, variant = "primary" }) {
  if (!href) {
    return null;
  }

  return (
    <a className={`button ${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const currentAchievement = achievements[activeAchievement];

  const goToAchievement = (direction) => {
    setActiveAchievement((current) => {
      const next = current + direction;
      if (next < 0) return achievements.length - 1;
      if (next >= achievements.length) return 0;
      return next;
    });
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span>DR</span>
          <strong>Dinith Rathnayaka</strong>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section-band" id="home">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Information Technology and Management Undergraduate</p>
            <h1>Dinith Rathnayaka</h1>
            <p className="hero-lede">
              Full-stack developer and technical writer building practical web, IoT, and software
              experiences with React, Node.js, and a steady curiosity for better systems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Work <ArrowUpRight size={18} />
              </a>
              <a className="button ghost" href="#contact">
                Contact Me <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="portrait-wrap" data-reveal>
            <img
              className="portrait"
              src="/myportfoliopic-removebg-preview.png"
              alt="Dinith Rathnayaka"
              width="520"
              height="520"
            />
            <div className="profile-note">
              <Sparkles size={18} />
              <span>React.js | Node.js | Blogger</span>
            </div>
          </div>
        </div>

        <div className="container stats-strip" data-reveal>
          {highlights.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band about-band" id="about">
        <div className="container about-layout">
          <SectionHeader
            eyebrow="About"
            title="Developer with a practical builder mindset."
            text="I enjoy collaborating with teams to ship useful software, exploring new tools, and turning ideas into clear, maintainable digital products."
          />
          <div className="about-points" data-reveal>
            <article>
              <Rocket size={22} />
              <h3>Scalable product thinking</h3>
              <p>Comfortable shaping interfaces and back-end flows around real user needs.</p>
            </article>
            <article>
              <BookOpen size={22} />
              <h3>Continuous learning</h3>
              <p>Regularly writes and experiments across IoT, AI, cybersecurity, and web development.</p>
            </article>
            <article>
              <Cpu size={22} />
              <h3>Hardware-aware software</h3>
              <p>Builds web dashboards and interfaces connected to microcontroller-based projects.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band" id="education">
        <div className="container">
          <SectionHeader
            eyebrow="Education"
            title="Learning path"
            text="A timeline from early academic milestones to current undergraduate work at the University of Moratuwa."
          />
          <div className="timeline">
            {education.map((item, index) => (
              <article className="timeline-item" key={item.title} data-reveal>
                <span className="timeline-marker">{index + 1}</span>
                <div>
                  <p>{item.time}</p>
                  <h3>{item.title}</h3>
                  <span>{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band skills-band" id="skills">
        <div className="container">
          <SectionHeader
            eyebrow="Skills"
            title="Stack and strengths"
            text="A focused mix of front-end, back-end, database, design, and collaboration skills."
          />
          <div className="skill-grid">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <article className={`skill-card ${group.color}`} key={group.title} data-reveal>
                  <div className="skill-heading">
                    <Icon size={24} />
                    <h3>{group.title}</h3>
                  </div>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band projects-band" id="projects">
        <div className="container">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            text="A mix of web interfaces, IoT dashboards, product prototypes, and active concepts."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title} data-reveal>
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                </div>
                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className={project.status === "Completed" ? "status done" : "status progress"}>
                      {project.status}
                    </span>
                  </div>
                  <p>{project.description}</p>
                  <div className="mini-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <ExternalButton href={project.repo} variant="ghost">
                      <Code2 size={17} /> Code
                    </ExternalButton>
                    <ExternalButton href={project.live} variant="primary">
                      <ExternalLink size={17} /> Live
                    </ExternalButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band achievement-band" id="achievements">
        <div className="container">
          <SectionHeader
            eyebrow="Achievements"
            title="Competitions and showcases"
            text="Public speaking, coding, startup ideation, and technology exhibition experiences."
          />
          <div className="achievement-panel" data-reveal>
            <div className="achievement-image">
              <img
                src={currentAchievement.image}
                alt={currentAchievement.title}
                loading="lazy"
                key={currentAchievement.image}
              />
            </div>
            <div className="achievement-copy">
              <p>
                {activeAchievement + 1} / {achievements.length}
              </p>
              <h3>{currentAchievement.title}</h3>
              <span>{currentAchievement.detail}</span>
              <div className="achievement-controls">
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Previous achievement"
                  onClick={() => goToAchievement(-1)}
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="dots" aria-hidden="true">
                  {achievements.map((item, index) => (
                    <span
                      key={item.title}
                      className={index === activeAchievement ? "active" : ""}
                    />
                  ))}
                </div>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Next achievement"
                  onClick={() => goToAchievement(1)}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band blogs-band" id="blogs">
        <div className="container">
          <SectionHeader
            eyebrow="Writing"
            title="Technical notes and articles"
            text="Short technical posts about IoT, machine learning, AI, cybersecurity, and embedded projects."
          />
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.href} data-reveal>
                <img src={blog.image} alt="" loading="lazy" />
                <div>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <a href={blog.href} target="_blank" rel="noreferrer">
                    Read More <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="center-action" data-reveal>
            <a className="button primary" href="https://medium.com/@dinithoshada2003" target="_blank" rel="noreferrer">
              More on Medium <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-band contact-band" id="contact">
        <div className="container contact-layout">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something useful."
              text="Reach out for collaboration, project ideas, or a quick conversation about software and technology."
            />
            <div className="contact-grid" data-reveal>
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a className="contact-card" href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                    <Icon size={22} />
                    <span>
                      <strong>{contact.label}</strong>
                      <small>{contact.value}</small>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/mwprnkwv"
            method="POST"
            data-reveal
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your email" required />
            </label>
            <label>
              Subject
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Your message" required />
            </label>
            <button className="button primary" type="submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Dinith Rathnayaka</strong>
            <p>Full-stack developer creating modern, practical digital experiences.</p>
          </div>
          <div className="footer-links">
            {navItems.slice(0, 5).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-socials">
            <a href="https://github.com/dinithrathnayaka23" aria-label="GitHub" target="_blank" rel="noreferrer">
              <Code2 size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dinithrathnayaka/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={20} />
            </a>
            <a href="mailto:dinithoshada2003@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Dinith Rathnayaka. All rights reserved.</p>
      </footer>

      <button
        className={`scroll-top ${showTop ? "visible" : ""}`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </main>
  );
}
