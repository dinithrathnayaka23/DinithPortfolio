"use client";

import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import ProfileScene from "@/components/profile-scene";
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
    items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Back-End",
    icon: Server,
    iconClass: "text-amber-300",
    items: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    title: "Languages",
    icon: Brain,
    iconClass: "text-rose-300",
    items: ["C", "C++", "Python", "Java"],
  },
  {
    title: "Databases",
    icon: Database,
    iconClass: "text-violet-300",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    iconClass: "text-emerald-300",
    items: ["Figma", "Git", "VS Code", "Tailwind CSS"],
  },
  {
    title: "Collaboration",
    icon: Users,
    iconClass: "text-sky-300",
    items: ["Communication", "Leadership", "Teamwork", "Presentation"],
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

function useScrollProgress(targetRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = targetRef.current;
      if (!element || typeof window === "undefined") {
        return;
      }

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.9;
      const end = -rect.height * 0.25;
      const value = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, value)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [targetRef]);

  return progress;
}

function interpolate(progress, range, output) {
  const [from, to] = range;
  const [outFrom, outTo] = output;
  if (progress <= from) return outFrom;
  if (progress >= to) return outTo;
  const t = (progress - from) / (to - from);
  return outFrom + (outTo - outFrom) * t;
}

function StackingAboutCard({ item, progress, range, index }) {
  const cardProgress = Math.max(0, Math.min(1, (progress - range[0]) / (range[1] - range[0])));
  const translateY = interpolate(cardProgress, [0, 1], [80, index * 8]);
  const translateX = interpolate(cardProgress, [0, 1], [index * 16, 0]);
  const scale = interpolate(cardProgress, [0, 1], [0.97, 1]);
  const opacity = interpolate(cardProgress, [0, 1], [0.7, 1]);
  const rotate = interpolate(cardProgress, [0, 1], [index === 0 ? -1 : index === 1 ? -2.5 : 2.5, 0]);

  return (
    <article
      className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[460px] rounded-[36px] border border-white/10 bg-slate-900/95 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-all duration-500 ease-out"
      style={{
        zIndex: 40 - index,
        top: index * 30,
        transform: `translate(calc(-50% + ${translateX}px), ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
        opacity,
      }}
    >
      <div className="mb-5 flex items-center justify-between gap-4 rounded-[28px] bg-slate-800/95 px-5 py-4 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Core skill</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
        </div>
        <div className={`grid h-12 w-12 place-items-center rounded-3xl bg-gradient-to-r ${item.accent} text-white shadow-xl shadow-slate-950/30`}>
          <item.icon size={18} />
        </div>
      </div>
      <p className="text-sm leading-7 text-slate-300">{item.text}</p>
    </article>
  );
}

function AboutStack({ items }) {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <div ref={sectionRef} className="relative overflow-hidden rounded-[50px] border border-white/10 bg-slate-900/95 px-4 py-6 shadow-[0_50px_140px_rgba(0,0,0,0.28)] backdrop-blur-2xl lg:px-7 lg:py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_22%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),transparent)]" />
      <div className="relative mx-auto h-[520px] w-full max-w-[620px] lg:h-[540px]">
        {items.map((item, index) => (
          <StackingAboutCard
            key={item.title}
            item={item}
            progress={progress}
            range={[index * 0.18, index * 0.18 + 0.75]}
            index={index}
          />
        ))}
      </div>
      <div className=" mt-6 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
        <p className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3">Layered cards with soft shadow and motion.</p>
        <p className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3">Visible at load, then stack as you scroll.</p>
      </div>
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
            <div className="lg:sticky lg:top-28">
              <AboutStack items={aboutCards} />
            </div>
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
          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:before:absolute lg:before:left-[5%] lg:before:right-[5%] lg:before:top-8 lg:before:h-px lg:before:bg-white/10">
            {education.map((item, index) => (
              <article className={`${cardClass} relative p-5`} key={item.title} data-reveal>
                <span className="relative z-10 mb-6 grid h-10 w-10 place-items-center rounded-lg bg-amber-300 font-black text-neutral-950">
                  {index + 1}
                </span>
                <p className="mb-2 font-extrabold text-teal-300">{item.time}</p>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <span className="leading-7 text-slate-300">{item.detail}</span>
              </article>
            ))}
          </div>
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
                <article className={`${cardClass} p-5`} key={group.title} data-reveal>
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className={group.iconClass} size={24} />
                    <h3 className="text-lg font-bold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-slate-300"
                        key={item}
                      >
                        {item}
                      </span>
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

      <button
        className={`fixed bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-lg border-0 bg-amber-300 text-neutral-950 transition ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
      </div>
    </main>
    </ReactLenis>
  );
}
