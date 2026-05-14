'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Terminal,
  Trophy,
} from 'lucide-react';

const cv = {
  name: 'Denandra Prasetya Laksma Putra',
  photo: '/new_photo.png',
  title: 'Mobile Developer',
  location: 'Jakarta, Indonesia',
  contacts: [
    { label: 'Email', value: 'prasetya.denandra@gmail.com', href: 'mailto:prasetya.denandra@gmail.com' },
    { label: 'LinkedIn', value: 'LinkedIn', href: 'https://linkedin.com/in/denandra-prasetya' },
    { label: 'Github', value: 'Github', href: 'https://github.com/denandrapr' },
  ],
  summary:
    'Over 5 years of experience building Android apps using Kotlin, Java, and React Native. Comfortable working in collaborative teams, implementing product requirements, and paying attention to performance, code structure, and long-term maintainability.',
  skills: {
    mobile: ['Kotlin', 'Jetpack Compose', 'Coroutines/Flow', 'Hilt/Dagger', 'Java', 'React Native (JS/TS)', 'Flutter'],
    frontend: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    tools: ['Git/GitLab', 'CI/CD', 'Agile/Scrum', 'Unit/UI Testing', 'Crashlytics'],
  },
  experiences: [
    {
      company: 'PT Bank KEB Hana Indonesia',
      location: 'Jakarta, Indonesia',
      role: 'Android Developer',
      period: 'Nov 2025 - Present',
      bullets: [
        'Developing and maintaining the LINE Bank by Hana Bank mobile application.',
        'Focusing on delivering a secure, high-performance, and seamless digital banking experience for users.',
      ],
    },
    {
      company: 'PT Bank Digital BCA (BCA Digital)',
      location: 'Jakarta, Indonesia',
      role: 'Android Developer',
      period: 'Nov 2024 - Oct 2025',
      bullets: [
        'Dedicated Vendor for the blu by BCA Digital mobile application.',
        'Responsible for the blu ExtraCash module, managing feature development and integration for digital loan services.',
      ],
    },
    {
      company: 'Akar Inti Teknologi',
      location: 'Jakarta (Full Time)',
      role: 'Android Developer',
      period: 'Mar 2022 - Oct 2025',
      bullets: [
        'Full-time remote Android Developer at Akar Inti Teknologi (AIT), part of the Djarum Group.',
        'Developed mobile solutions for banking, healthcare, and loyalty sectors using Kotlin (Jetpack Compose, MVI/MVP) and Java.',
        'Built Mandiri Taspen Navigator and revamped BPP Pertamina for EDC devices.',
        'Integrated MoEngage and AppsFlyer for Altea Care (100k+ installs) and supported cross-platform apps using React Native/React.js.',
        'Created an internal UX Template to streamline UI development for future company projects.',
      ],
    },
    {
      company: 'Telkom Indonesia',
      location: 'Jakarta Pusat, Jakarta Raya, Indonesia',
      role: 'Mobile Developer',
      period: 'Jun 2020 - Mar 2022',
      bullets: [
        'Full-time contract Mobile Developer at Telkom Indonesia, part of Telkom DBT in Tribe ENT.',
        'Collaborated with other developers on several external projects using React Native and Kotlin for mobile application development.',
        'Developed the PERHUTANI incident management application used by employees to report accidents in the Perhutani environment.',
        'Developed the ADHI KARYA apartment management application for tenant complaints, IPL payments, electricity and water payments, technician monitoring, and apartment handovers.',
        'Developed Jaklingko Intermoda tender application for purchasing MRT, LRT, KRL, and Transjakarta tickets using React Native.',
        'Rewrote the TINDA application from Java to Kotlin.',
      ],
    },
    {
      company: 'DOT Indonesia',
      location: 'Remote',
      role: 'Mobile Developer',
      period: 'Jun 2021 - Nov 2021',
      bullets: [
        'Freelance mobile developer at PT. DOT Indonesia.',
        'Collaborated with other developers to develop and fix bugs for Sakoo Mobile and Alami Hijra Banking mobile applications using React Native.',
      ],
    },
    {
      company: 'Vascomm',
      location: 'Surabaya dan Sekitarnya, Jawa Timur, Indonesia',
      role: 'Android Developer Internship',
      period: 'Feb 2020 - Apr 2020',
      bullets: [
        'Internship at PT Vascomm Solusi Teknologi as Mobile Developer.',
        'Built chat app using Kotlin and connecting to REST API and real-time service Socket.io.',
      ],
    },
    {
      company: 'PT Kasir Pintar Internasional',
      location: 'Surabaya dan Sekitarnya, Jawa Timur, Indonesia',
      role: 'Android Engineer Internship',
      period: 'Jul 2019 - Sep 2019',
      bullets: [
        'Internship at Kasir Pintar as Android Engineer.',
        'Developed Kitchen Management and Food Menu using Java.',
      ],
    },
    {
      company: 'STIKOM Surabaya',
      location: 'Surabaya, Indonesia',
      role: 'Computer Lab Assistant',
      period: 'Jan 2019 - May 2019',
      bullets: [
        'Assisted the lecturer in delivering Basic Programming material using Java to other students.',
      ],
    },
  ],
  projects: [
    {
      name: 'Blu by BCA Digital',
      description:
        'Large-scale consumer banking app; Kotlin migration, feature ownership for bluExtraCash, and performance-focused delivery.',
    },
    {
      name: 'LINE Bank',
      description:
        'Developed key features for the LINE Bank Android app using Kotlin and MVVM, with focus on performance, security, and collaboration.',
    },
    {
      name: 'Mandiri Taspen Navigator',
      description: 'Enterprise field service app built with Kotlin, Jetpack Compose, and MVI architecture.',
    },
  ],
  education: [
    {
      school: 'Universitas Dinamika (Stikom Surabaya)',
      degree: 'S1, Information Systems (GPA 3.72/4.00)',
      period: '2017 - 2021',
      notes: [
        'Graduated Cum Laude in 3.5 years',
        'ITCC Udayana Finalist (Android) 2019',
        '1st Place HIMA IS Programming 2018',
      ],
    },
    {
      school: 'SMKN 1 Denpasar',
      degree: 'High School Diploma, Software Engineering',
      period: '2014 - 2017',
      notes: [
        '3rd Place in FIKSI SMK 2016',
      ],
    },
  ],
  achievements: [
    {
      name: '2nd place - ICP 6.0 Hackathon (2024)',
      detail: 'Built NFT-based agricultural investment platform leveraging ICP for security and decentralization.',
      link: 'https://drive.google.com/file/d/1qRf3xudF_RkRSLGK6uSnV1BWcGRusFqh/view?usp=sharing',
    },
  ],
};

const heroStats = ['5+ years', 'Android/Kotlin', 'React Native', 'Jakarta'];

const skillGroups = [
  {
    label: 'Mobile',
    description: 'Native Android, cross-platform delivery, and production app architecture.',
    icon: Smartphone,
    items: cv.skills.mobile,
  },
  {
    label: 'Frontend',
    description: 'Clean web interfaces, responsive layouts, and product-facing React surfaces.',
    icon: Code2,
    items: cv.skills.frontend,
  },
  {
    label: 'Tools & Practices',
    description: 'Delivery habits for stable releases, debugging, automation, and quality.',
    icon: Terminal,
    items: cv.skills.tools,
  },
];

function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section className="scroll-mt-24 py-14 md:py-20" id={id}>
      <FadeInUp>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">{title}</h2>
        </div>
      </FadeInUp>
      {children}
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
      {children}
    </span>
  );
}

function Header() {
  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a className="text-sm font-semibold tracking-tight text-zinc-100" href="#top">
          nndraa.space
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-zinc-400 md:flex">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 transition hover:bg-emerald-400/10 hover:text-emerald-200"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            aria-label="Email Denandra"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            href={cv.contacts[0].href}
          >
            <Mail size={16} />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            href={cv.contacts[1].href}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size={16} />
          </a>
          <a
            aria-label="Github profile"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            href={cv.contacts[2].href}
            rel="noreferrer"
            target="_blank"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="hero-contours relative min-h-[calc(100svh-72px)] overflow-hidden"
      id="top"
    >
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] md:py-20">
        <div>
        <FadeInUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-200">
            <Sparkles size={15} />
            Mobile apps with clean architecture and steady delivery
          </div>
        </FadeInUp>
        <FadeInUp delay={0.05}>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-zinc-50 md:text-7xl">
            {cv.name}
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="mt-5 text-2xl font-medium text-emerald-300 md:text-3xl">{cv.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            I build Android and cross-platform mobile products that are maintainable, performant, and practical for real product teams.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_-18px_rgba(52,211,153,0.75)] transition hover:bg-emerald-300"
              href="/cv_denandra.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={17} />
              Download CV
            </motion.a>
            <motion.a
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-emerald-400/40 hover:text-emerald-200"
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View projects
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroStats.map((stat) => (
              <Pill key={stat}>{stat}</Pill>
            ))}
          </div>
        </FadeInUp>
        </div>

        <FadeInUp delay={0.12}>
          <div className="relative mx-auto flex min-h-[390px] w-full max-w-md items-center justify-center md:min-h-[460px]">
            <div className="absolute inset-6 rounded-full border border-emerald-400/10 bg-emerald-400/[0.03] blur-3xl" />
            <div className="absolute h-72 w-72 rounded-full border border-dashed border-emerald-300/20 md:h-80 md:w-80" />
            <div className="absolute h-52 w-52 rounded-full border border-white/10 md:h-60 md:w-60" />

            <motion.div
              className="absolute left-2 top-8 rounded-2xl border border-white/10 bg-zinc-950/75 px-4 py-3 text-sm text-zinc-300 shadow-2xl shadow-black/20 backdrop-blur-xl md:left-0 md:top-14"
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Focus</span>
              Android + Kotlin
            </motion.div>

            <motion.div
              className="absolute right-0 top-12 z-20 rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-300 shadow-2xl shadow-black/20 backdrop-blur-xl md:-right-8 md:top-16"
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Based in</span>
              {cv.location}
            </motion.div>

            <div className="relative rounded-full border border-emerald-300/20 bg-zinc-950/80 p-3 shadow-[0_32px_100px_-32px_rgba(52,211,153,0.6)]">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-emerald-300/30 via-transparent to-emerald-700/20 blur-xl" />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border border-white/10 bg-zinc-900 ring-8 ring-zinc-950 md:h-64 md:w-64">
                <Image
                  alt={cv.name}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 768px) 256px, 208px"
                  src={cv.photo}
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 w-[min(100%,22rem)] -translate-x-1/2 rounded-3xl border border-white/10 bg-zinc-950/80 p-4 text-center backdrop-blur-xl md:bottom-4">
              <p className="text-sm font-semibold text-zinc-100">{cv.title}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-400">Building reliable mobile experiences with product-minded engineering.</p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function SkillPanel({
  group,
  delay,
}: {
  group: (typeof skillGroups)[number];
  delay: number;
}) {
  const Icon = group.icon;

  return (
    <FadeInUp delay={delay}>
      <motion.article
        className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/10 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Icon size={21} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-zinc-50">{group.label}</h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400">{group.items.length} tools</span>
        </div>
        <p className="mt-3 min-h-16 text-sm leading-6 text-zinc-400">{group.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              className="rounded-full border border-zinc-700/80 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.article>
    </FadeInUp>
  );
}

function ProjectCard({ project, index }: { project: (typeof cv.projects)[number]; index: number }) {
  return (
    <FadeInUp delay={index * 0.08}>
      <motion.article
        className="group flex min-h-64 flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-2xl shadow-black/10 transition hover:border-emerald-400/30"
        whileHover={{ y: -5 }}
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Featured
            </span>
            <ArrowUpRight className="text-zinc-600 transition group-hover:text-emerald-300" size={20} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-50">{project.name}</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-emerald-400/50 via-emerald-400/10 to-transparent" />
      </motion.article>
    </FadeInUp>
  );
}

function ExperienceTimeline() {
  return (
    <div className="space-y-4">
      {cv.experiences.map((exp, index) => (
        <FadeInUp delay={index * 0.05} key={`${exp.company}-${exp.period}`}>
          <article className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/25 md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-300">{exp.role}</p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-50">{exp.company}</h3>
                <p className="mt-1 text-sm text-zinc-500">{exp.location}</p>
              </div>
              <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400">{exp.period}</span>
            </div>
            <ul className="mt-5 grid gap-2 text-sm leading-6 text-zinc-400 md:grid-cols-2">
              {exp.bullets.map((bullet) => (
                <li className="flex gap-3" key={bullet}>
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </FadeInUp>
      ))}
    </div>
  );
}

function SupportingSections() {
  return (
    <section className="grid gap-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
      <FadeInUp>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <BriefcaseBusiness size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-50">Education</h2>
          </div>
          <div className="space-y-5">
            {cv.education.map((ed) => (
              <div className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0" key={ed.school}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-zinc-100">{ed.school}</h3>
                  <span className="text-xs font-medium text-zinc-500">{ed.period}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">{ed.degree}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ed.notes.map((note) => (
                    <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400" key={note}>
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.08}>
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
              <Trophy size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-50">Achievement</h2>
          </div>
          {cv.achievements.map((achievement) => (
            <div key={achievement.name}>
              <h3 className="text-lg font-semibold text-zinc-50">{achievement.name}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{achievement.detail}</p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                href={achievement.link}
                rel="noreferrer"
                target="_blank"
              >
                Proof / Details
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </FadeInUp>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_32rem),linear-gradient(180deg,#09090b_0%,#0b1110_45%,#09090b_100%)] text-zinc-200 antialiased selection:bg-emerald-400 selection:text-zinc-950">
      <div className="pointer-events-none fixed inset-0 opacity-40" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>
      <Header />
      <Hero />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <Section eyebrow="Capability" id="skills" title="Skill sets shaped by real product delivery.">
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <SkillPanel delay={index * 0.08} group={group} key={group.label} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Selected Work" id="projects" title="Mobile products with scale, ownership, and polish.">
          <div className="grid gap-5 md:grid-cols-3">
            {cv.projects.map((project, index) => (
              <ProjectCard index={index} key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Experience" id="experience" title="A compact view of the roles behind the work.">
          <ExperienceTimeline />
        </Section>

        <SupportingSections />

        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {cv.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {cv.contacts.map((contact) => (
              <a
                className="font-medium text-zinc-400 transition hover:text-emerald-300"
                href={contact.href}
                key={contact.label}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
              >
                {contact.value}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
