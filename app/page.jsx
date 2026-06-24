"use client";

import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import ProfileScene from "@/components/profile-scene";
import { Timeline } from "@/components/ui/timeline";
import { StarfieldBackground } from "@/components/ui/starfield";
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
    iconClass: "text-teal-300",
    accent: "from-teal-500/10 to-cyan-500/10",
    items: [
      { name: "React",      logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js",    logo: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "HTML5",      logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3",       logo: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "JavaScript",logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    ],
  },
  {
    title: "Back-End",
    icon: Server,
    iconClass: "text-amber-300",
    accent: "from-amber-500/10 to-orange-500/10",
    items: [
      { name: "Node.js",   logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express",   logo: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "PHP",       logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Laravel",   logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    ],
  },
  {
    title: "Languages",
    icon: Brain,
    iconClass: "text-rose-300",
    accent: "from-rose-500/10 to-pink-500/10",
    items: [
      { name: "C",      logo: "https://cdn.simpleicons.org/c/A8B9CC" },
      { name: "C++",    logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java",   logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    iconClass: "text-violet-300",
    accent: "from-violet-500/10 to-purple-500/10",
    items: [
      { name: "MySQL",    logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "MongoDB",  logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    iconClass: "text-emerald-300",
    accent: "from-emerald-500/10 to-teal-500/10",
    items: [
      { name: "Figma",       logo: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Git",         logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "VS Code",     logo: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
      { name: "Tailwind CSS",logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    iconClass: "text-sky-300",
    accent: "from-sky-500/10 to-blue-500/10",
    items: [
      { name: "Communication", logo: null },
      { name: "Leadership",    logo: null },
      { name: "Teamwork",      logo: null },
      { name: "Presentation",  logo: null },
    ],
  },
];

const aboutCards = [
  {
    title: "Scalable product thinking",
    text: "Comfortable shaping interfaces and back-end flows around real user needs.",
    icon: Rocket,
    accent: "from-cyan-500 to-sky-600",
  },
  {
    title: "Continuous learning",
    text: "Regularly writes and experiments across IoT, AI, cybersecurity, and web development.",
    icon: BookOpen,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Hardware-aware software",
    text: "Builds web dashboards and interfaces connected to microcontroller-based projects.",
    icon: Cpu,
    accent: "from-emerald-400 to-teal-500",
  },
];

function AboutCard({ item }) {
  return (
    <article className="group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.015] px-6 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      {/* Dynamic hover background glow */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.06]`} />
      
      {/* Decorative top highlight line */}
      <div className="pointer-events-none absolute left-6 right-6 top-1 h-px bg-white/20 transition-all duration-300 group-hover:bg-white/40" />

      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400 font-extrabold">Core focus</p>
          <h3 className="mt-1.5 text-2xl font-bold text-white tracking-tight group-hover:text-cyan-100 transition-colors duration-300">
            {item.title}
          </h3>
        </div>
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
          <item.icon size={22} />
        </div>
      </div>
      <p className="text-sm sm:text-base leading-7 text-slate-300 font-medium">
        {item.text}
      </p>
    </article>
  );
}

function AboutCardsList({ items }) {
  return (
    <div className="grid gap-6">
      {items.map((item) => (
        <AboutCard key={item.title} item={item} />
      ))}
    </div>
  );
}

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

const containerClass = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const sectionClass = "border-b border-white/5 py-16 sm:py-24";
const cardClass =
  "rounded-lg border border-white/10 bg-slate-800/80 shadow-[0_16px_48px_rgba(0,0,0,0.16)]";
const iconButtonClass =
  "grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-slate-800 text-stone-50 transition hover:-translate-y-0.5 hover:border-amber-300";
const navLinkClass =
  "relative rounded-full px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white";
const liquidIconButtonClass =
  "relative grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/[0.14]";
const gradientButtonShell =
  "group relative inline-flex min-h-11 overflow-hidden rounded-full p-[2px] font-bold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200/70 focus:ring-offset-2 focus:ring-offset-[#0f1115] max-sm:w-full";
const gradientButtonSpin =
  "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_38%,#f8c24e_62%,#a2aeff_100%)]";
const gradientButtonInnerBase =
  "relative inline-flex h-full min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-extrabold backdrop-blur-3xl";
const gradientButtonVariants = {
  primary:
    "bg-[#070e41] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_26px_rgba(50,167,255,0.14)]",
  ghost:
    "bg-[#10151f]/95 text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.13)]",
};

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl" data-reveal>
      <p className="mb-3 text-xs font-extrabold uppercase text-amber-300">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="leading-7 text-slate-300">{text}</p> : null}
    </div>
  );
}

function RotatingGradientButton({
  children,
  className = "",
  href,
  rel,
  target,
  type = "button",
  variant = "primary",
}) {
  const content = (
    <>
      <span className={gradientButtonSpin} />
      <span
        className={`${gradientButtonInnerBase} ${
          gradientButtonVariants[variant] ?? gradientButtonVariants.primary
        }`}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a className={`${gradientButtonShell} ${className}`} href={href} rel={rel} target={target}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${gradientButtonShell} ${className}`} type={type}>
      {content}
    </button>
  );
}

function ExternalButton({ href, children, variant = "primary" }) {
  if (!href) {
    return null;
  }

  return (
    <RotatingGradientButton
      href={href}
      target="_blank"
      rel="noreferrer"
      variant={variant}
    >
      {children}
    </RotatingGradientButton>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0);
    };
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
    <ReactLenis root>
      <main className="relative min-h-screen overflow-x-hidden bg-[#0f1115] text-stone-50">
        <StarfieldBackground
          className="pointer-events-none z-0"
          count={520}
          speed={0.42}
          starColor="#d9f6ff"
          accentColor="#32a7ff"
          secondaryColor="#f8c24e"
        />
        <div className="relative z-10">
      <header className="sticky top-0 z-50 px-3 py-4 sm:px-6">
        <div className="relative mx-auto max-w-6xl">
          <div className="relative isolate flex min-h-16 items-center justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/[0.075] px-3 shadow-[0_18px_70px_rgba(0,0,0,0.34),0_0_55px_rgba(50,167,255,0.18)] backdrop-blur-2xl before:absolute before:inset-px before:-z-10 before:rounded-[15px] before:bg-[linear-gradient(115deg,rgba(255,255,255,0.24),rgba(255,255,255,0.04)_34%,rgba(50,167,255,0.14)_68%,rgba(255,255,255,0.16))] before:opacity-80 before:content-[''] after:pointer-events-none after:absolute after:left-4 after:right-4 after:top-1 after:h-px after:bg-white/45 after:content-[''] sm:px-4">
            <a
              className="group relative flex min-w-0 items-center gap-3"
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-black/25 font-extrabold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_24px_rgba(50,167,255,0.22)] transition group-hover:border-cyan-200/70">
                DR
              </span>
              <span className="min-w-0">
                <strong className="block truncate text-sm sm:text-base">Dinith Rathnayaka</strong>
                <small className="hidden text-xs font-semibold text-cyan-100/70 sm:block">
                  Portfolio
                </small>
              </span>
            </a>

            <nav
              className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <a className={navLinkClass} key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                className={`${liquidIconButtonClass} hidden sm:grid`}
                href="mailto:dinithoshada2003@gmail.com"
                aria-label="Email Dinith"
              >
                <Mail size={19} />
              </a>
              <button
                className={`${liquidIconButtonClass} lg:hidden`}
                type="button"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <nav
            className={`absolute left-0 right-0 top-full z-40 mt-3 grid gap-2 overflow-hidden rounded-2xl border border-white/15 bg-[#0b1324]/90 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.42),0_0_45px_rgba(50,167,255,0.16)] backdrop-blur-2xl transition duration-300 sm:grid-cols-2 lg:hidden ${
              menuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            }`}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/50 hover:bg-white/[0.12] hover:text-white"
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className={`${sectionClass} pt-14 sm:pt-24`} id="home">
        <div className={`${containerClass} grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]`}>
          <div className="order-2 lg:order-1" data-reveal>
            <p className="mb-3 text-xs font-extrabold uppercase text-amber-300">
              Information Technology and Management Undergraduate
            </p>
            <h1 className="mb-5 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              Dinith Rathnayaka
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Full-stack developer and technical writer building practical web, IoT, and software
              experiences with React, Node.js, and a steady curiosity for better systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RotatingGradientButton href="#projects">
                View Work <ArrowUpRight size={18} />
              </RotatingGradientButton>
              <RotatingGradientButton href="#contact" variant="ghost">
                Contact Me <Mail size={18} />
              </RotatingGradientButton>
            </div>
          </div>

          <div className="relative order-1 grid min-h-[340px] place-items-center lg:order-2 lg:min-h-[520px]" data-reveal>
            <ProfileScene />
            <div className="absolute bottom-4 left-0 right-0 z-20 mx-auto flex max-w-[260px] items-center gap-2 rounded-lg border border-white/10 bg-slate-800/95 px-4 py-3 shadow-2xl sm:bottom-14 sm:left-auto sm:right-0">
              <Sparkles className="shrink-0 text-amber-300" size={18} />
              <span>React.js | Node.js | Blogger</span>
            </div>
          </div>
        </div>

        <div className={`${containerClass} mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4`} data-reveal>
          {highlights.map((item) => (
            <article
              className="animated-glass-border relative isolate min-h-32 overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_54px_rgba(0,0,0,0.24),0_0_24px_rgba(50,167,255,0.08)] backdrop-blur-2xl"
              key={item.label}
            >
              <div className="pointer-events-none absolute left-4 right-4 top-1 h-px bg-white/45" />
              <div className="relative">
                <strong className="block text-3xl font-black leading-none text-teal-300 drop-shadow-[0_0_18px_rgba(45,212,191,0.24)]">
                  {item.value}
                </strong>
                <span className="mt-3 block text-sm font-medium text-slate-100 sm:text-base">
                  {item.label}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-white/[0.025]`} id="about">
        <div className={`${containerClass} grid items-start gap-11 lg:grid-cols-[0.86fr_1.14fr]`}>
          <SectionHeader
            eyebrow="About"
            title="Developer with a practical builder mindset."
            text="I enjoy collaborating with teams to ship useful software, exploring new tools, and turning ideas into clear, maintainable digital products."
          />
          <div className="relative grid gap-4" data-reveal>
            <AboutCardsList items={aboutCards} />
          </div>
        </div>
      </section>

      <section className={sectionClass} id="education">
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Education"
            title="Learning path"
            text="A timeline from early academic milestones to current undergraduate work at the University of Moratuwa."
          />
        </div>
        <div className="relative w-full mt-8 px-4 sm:px-8 max-w-6xl mx-auto">
          <Timeline
            data={education.map((item, index) => ({
              title: item.time,
              content: (
                <article className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
                  {/* Decorative top line */}
                  <div className="pointer-events-none absolute left-5 right-5 top-1 h-px bg-white/15 group-hover:bg-white/30 transition-colors duration-300" />
                  {/* Index badge */}
                  <span className="mb-4 inline-grid h-8 w-8 place-items-center rounded-lg bg-amber-300 text-xs font-black text-neutral-950 shadow-[0_0_16px_rgba(251,191,36,0.35)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-sm sm:text-base leading-7 text-slate-300 font-medium">{item.detail}</p>
                </article>
              ),
            }))}
          />
        </div>
      </section>

      <section className={sectionClass} id="skills">
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Skills"
            title="Stack and strengths"
            text="A focused mix of front-end, back-end, database, design, and collaboration skills."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  className={`group relative isolate overflow-hidden ${cardClass} p-5`}
                  key={group.title}
                  data-reveal
                >
                  {/* Gradient hover glow */}
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${group.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="mb-5 flex items-center gap-3">
                    <Icon className={group.iconClass} size={22} />
                    <h3 className="text-lg font-bold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="relative group/chip"
                      >
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={item.name}
                              width={18}
                              height={18}
                              className="h-[18px] w-[18px] object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/10 text-[9px] font-black text-slate-300">
                              {item.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                          <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white/[0.025]`} id="projects">
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            text="A mix of web interfaces, IoT dashboards, product prototypes, and active concepts."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                className={`${cardClass} grid min-h-80 overflow-hidden md:grid-cols-[0.9fr_1.1fr]`}
                key={project.title}
                data-reveal
              >
                <div className="min-h-[232px] bg-slate-700 md:min-h-full">
                  <img
                    className="h-full min-h-[232px] w-full object-cover md:min-h-80"
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <div className="mb-3 grid grid-cols-[1fr_auto] items-start gap-3">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span
                      className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-black ${
                        project.status === "Completed"
                          ? "bg-emerald-300/15 text-emerald-300"
                          : "bg-amber-300/15 text-amber-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-xs text-slate-300"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
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

      <section className={sectionClass} id="achievements">
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Achievements"
            title="Competitions and showcases"
            text="Public speaking, coding, startup ideation, and technology exhibition experiences."
          />
          <div className={`${cardClass} mt-10 grid overflow-hidden lg:grid-cols-2`} data-reveal>
            <div className="min-h-[280px] bg-slate-700 sm:min-h-[340px] lg:min-h-[420px]">
              <img
                className="h-full min-h-[280px] w-full object-cover sm:min-h-[340px] lg:min-h-[420px]"
                src={currentAchievement.image}
                alt={currentAchievement.title}
                loading="lazy"
                key={currentAchievement.image}
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <p className="mb-3 font-black text-teal-300">
                {activeAchievement + 1} / {achievements.length}
              </p>
              <h3 className="mb-3 text-2xl font-bold">{currentAchievement.title}</h3>
              <span className="leading-7 text-slate-300">{currentAchievement.detail}</span>
              <div className="mt-8 flex items-center gap-4">
                <button
                  className={iconButtonClass}
                  type="button"
                  aria-label="Previous achievement"
                  onClick={() => goToAchievement(-1)}
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2" aria-hidden="true">
                  {achievements.map((item, index) => (
                    <span
                      key={item.title}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeAchievement ? "w-7 bg-amber-300" : "w-2.5 bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
                <button
                  className={iconButtonClass}
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

      <section className={sectionClass} id="blogs">
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Writing"
            title="Technical notes and articles"
            text="Short technical posts about IoT, machine learning, AI, cybersecurity, and embedded projects."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article className={`${cardClass} overflow-hidden`} key={blog.href} data-reveal>
                <img
                  className="h-48 w-full bg-slate-700 object-cover"
                  src={blog.image}
                  alt={`${blog.title} cover`}
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="mb-3 text-lg font-bold">{blog.title}</h3>
                  <p className="mb-4 leading-7 text-slate-300">{blog.description}</p>
                  <a
                    className="inline-flex items-center gap-2 font-bold text-amber-300"
                    href={blog.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 flex justify-center" data-reveal>
            <RotatingGradientButton
              href="https://medium.com/@dinithoshada2003"
              target="_blank"
              rel="noreferrer"
            >
              More on Medium <ArrowUpRight size={18} />
            </RotatingGradientButton>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white/[0.025]`} id="contact">
        <div className={`${containerClass} grid items-start gap-11 lg:grid-cols-[1fr_0.86fr]`}>
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something useful."
              text="Reach out for collaboration, project ideas, or a quick conversation about software and technology."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2" data-reveal>
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    className={`${cardClass} flex min-w-0 items-center gap-3 p-4 transition hover:border-teal-300/60`}
                    href={contact.href}
                    key={contact.label}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Icon className="shrink-0 text-teal-300" size={22} />
                    <span className="min-w-0">
                      <strong className="block">{contact.label}</strong>
                      <small className="block overflow-wrap-anywhere text-slate-300">
                        {contact.value}
                      </small>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            className={`${cardClass} grid gap-4 p-6`}
            action="https://formspree.io/f/mwprnkwv"
            method="POST"
            data-reveal
          >
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Your name" },
              { label: "Email", type: "email", name: "email", placeholder: "Your email" },
              { label: "Subject", type: "text", name: "subject", placeholder: "Subject" },
            ].map((field) => (
              <label className="grid gap-2 font-bold text-slate-300" key={field.name}>
                {field.label}
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-3 text-stone-50 outline-none transition placeholder:text-slate-500 focus:border-amber-300"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                />
              </label>
            ))}
            <label className="grid gap-2 font-bold text-slate-300">
              Message
              <textarea
                className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-3 text-stone-50 outline-none transition placeholder:text-slate-500 focus:border-amber-300"
                name="message"
                rows="5"
                placeholder="Your message"
                required
              />
            </label>
            <RotatingGradientButton type="submit">
              Send Message <Send size={18} />
            </RotatingGradientButton>
          </form>
        </div>
      </section>

      <footer className="bg-[#0a0b0e] py-10">
        <div className={`${containerClass} grid items-start gap-7 lg:grid-cols-[1.2fr_1fr_auto]`}>
          <div>
            <strong>Dinith Rathnayaka</strong>
            <p className="mt-2 leading-7 text-slate-300">
              Full-stack developer creating modern, practical digital experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {navItems.slice(0, 5).map((item) => (
              <a
                className="text-sm text-slate-300 transition hover:text-amber-300"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className={iconButtonClass}
              href="https://github.com/dinithrathnayaka23"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={20} />
            </a>
            <a
              className={iconButtonClass}
              href="https://www.linkedin.com/in/dinithrathnayaka/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={20} />
            </a>
            <a
              className={iconButtonClass}
              href="mailto:dinithoshada2003@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <p className={`${containerClass} mt-8 text-sm text-slate-500`}>
          &copy; {new Date().getFullYear()} Dinith Rathnayaka. All rights reserved.
        </p>
      </footer>

      {/* Hexagonal scroll-to-top button with scroll-progress border */}
      <button
        className={`fixed bottom-5 right-5 z-30 transition-all duration-500 group ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        <svg
          viewBox="0 0 56 64"
          width="60"
          height="68"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <defs>
            <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            {/* Glow filter */}
            <filter id="hexGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dark glassmorphic background */}
          <polygon
            points="28,3 53,17.5 53,46.5 28,61 3,46.5 3,17.5"
            fill="#0d1929"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />

          {/* Subtle inner highlight at top */}
          <polygon
            points="28,3 53,17.5 53,46.5 28,61 3,46.5 3,17.5"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="6"
            strokeDasharray="30 150"
            strokeDashoffset="-12"
          />

          {/* Progress track — dim teal outline */}
          <polygon
            points="28,3 53,17.5 53,46.5 28,61 3,46.5 3,17.5"
            fill="none"
            stroke="rgba(45,212,191,0.12)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Animated progress stroke that fills clockwise as you scroll */}
          <polygon
            points="28,3 53,17.5 53,46.5 28,61 3,46.5 3,17.5"
            fill="none"
            stroke="url(#hexGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="180"
            strokeDashoffset={180 - scrollProgress * 180}
            filter="url(#hexGlow)"
            style={{ transition: "stroke-dashoffset 0.12s linear" }}
          />

          {/* Upward arrow icon */}
          <line
            x1="28" y1="38" x2="28" y2="24"
            stroke="#e2e8f0"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="transition-transform duration-300 group-hover:-translate-y-1"
            style={{ transition: "transform 0.2s ease" }}
          />
          <polyline
            points="21,31 28,24 35,31"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
      </div>
    </main>
    </ReactLenis>
  );
}
