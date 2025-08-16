'use client';

import React from 'react';
import Image from "next/image";

const cv = {
  name: "Denandra Prasetya Laksma Putra",
  photo: "/adra.jpeg",
  title: "Mobile Developer (Android | Kotlin | RN | Flutter)",
  location: "Jakarta, Indonesia",
  contacts: [
    { label: "+62 822-2887-9229", href: "tel:+6282228879229" },
    { label: "prasetya.denandra@gmail.com", href: "mailto:prasetya.denandra@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/denandra-prasetya" },
    { label: "Github", href: "https://github.com/denandrapr" },
    { label: "Download CV (PDF)", href: "/cv_denandra.pdf" },
  ],
  summary:
    "Mobile Developer with 5 years of experience building high-impact Android applications using Kotlin (Jetpack Compose, MVVM/MVI) and cross-platform solutions with React Native and Flutter. Proven ability to deliver and scale large consumer apps such as Blu by BCA Digital, with a strong focus on performance optimization, clean architecture, and seamless user experience.",
  skills: {
    mobile: ["Kotlin", "Jetpack Compose", "Coroutines/Flow", "Hilt/Dagger", "Java", "React Native (JS/TS)", "Flutter"],
    webBackend: ["Next.js", "React.js", "Firebase", "SQL"],
    tools: ["Git/GitLab", "CI/CD", "Agile/Scrum", "Unit/UI Testing", "Crashlytics", "Appsflyer", "MoEngage"],
  },
  experiences: [
    {
      company: "PT. Bank Digital BCA",
      location: "Jakarta",
      role: "Android Developer (Vendor)",
      period: "Nov 2024 – Present",
      bullets: [
        "Collaborate on Blu by BCA Digital app; migrated core features from React Native to Kotlin to improve performance & maintainability.",
        "Owned bluExtraCash online-loan module; led development & optimizations across stability and performance.",
        "Partnered with cross-functional teams to deliver features on schedule and with strong UX quality.",
      ],
    },
    {
      company: "PT. Akar Inti Teknologi (Djarum Group)",
      location: "Jakarta (Remote)",
      role: "Mobile Developer",
      period: "Mar 2022 – Present",
      bullets: [
        "Mandiri Taspen Navigator – Kotlin, Jetpack Compose, MVI.",
        "U+Reward – Java, MVP; shipped new features for 10k+ users on Play Store.",
        "BPP Revamp (Pertamina) – Kotlin, MVP, RxJava, Dagger for EDC devices in Jabodetabek & West Java.",
        "Padma Hotel – React Native; Adira Website Mgmt – React.js",
        "Akar Inti UX Template – Kotlin, Compose.",
        "Altea Care – Kotlin; integrated MoEngage/Appsflyer (100k+ installs). Revivo – Java (50k+ installs).",
      ],
    },
    {
      company: "PT. Telkom Indonesia (DBT – Tribe ENT)",
      location: "Jakarta",
      role: "Mobile Developer (Contract)",
      period: "Jun 2020 – Feb 2022",
      bullets: [
        "Perhutani incident management – React Native.",
        "LRT City ADHI Karya apartment management – React Native (tenants & technicians workflows).",
        "Jaklingko Intermoda ticketing – React Native (MRT/LRT/KRL/TransJakarta).",
        "Refactored TINDA app from Java to Kotlin.",
      ],
    },
    {
      company: "PT. Vascomm Solusi Teknologi",
      location: "Sidoarjo",
      role: "Android Developer (Intern)",
      period: "Feb 2020 – Apr 2020",
      bullets: [
        "Created chat application implementing Socket.io on Android with Kotlin.",
      ],
    },
    {
      company: "PT. Kasir Pintar",
      location: "Surabaya",
      role: "Android Developer (Intern)",
      period: "Jul 2019 – Sep 2019",
      bullets: [
        "Fixed bugs and added features to Kitchen Management and Food Menu Android App (Java).",
      ],
    },
  ],
  projects: [
    {
      name: "Blu by BCA Digital",
      description:
        "Large-scale consumer banking app; Kotlin migration, feature ownership (bluExtraCash). Focus on performance & crash-free stability.",
    },
    {
      name: "Mandiri Taspen Navigator",
      description: "Compose + MVI, enterprise app for field system management services.",
    },
    {
      name: "Altea Care (100k+ installs)",
      description: "Integrated MoEngage/Appsflyer marketing events in Kotlin.",
    },
  ],
  education: [
    {
      school: "Universitas Dinamika (Stikom Surabaya)",
      degree: "S1, Information Systems (GPA 3.72/4.00)",
      period: "2017 – 2021",
      notes: [
        "Graduated Cum Laude in 3.5 years",
        "ITCC Udayana Finalist (Android) 2019",
        "1st Place HIMA IS Programming 2018"
      ],
    },
    {
      school: "SMKN 1 Denpasar",
      degree: "High School Diploma, Software Engineering",
      period: "2014 – 2017",
      notes: [
        "3rd Place in FIKSI SMK 2016"
      ],
    },
  ],
  achievements: [
    {
      name: "2nd place – ICP 6.0 Hackathon (2024)",
      detail: "Built NFT-based agricultural investment platform leveraging ICP for security & decentralization.",
      link: "https://drive.google.com/file/d/1qRf3xudF_RkRSLGK6uSnV1BWcGRusFqh/view?usp=sharing",
    },
  ],
};

// ——— UI Helpers ———
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors border-zinc-300/60 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-800/70">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-20" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="my-8 border-zinc-200 dark:border-zinc-800" />;
}

// ——— Page Component ———
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-800 antialiased dark:bg-zinc-950 dark:text-zinc-200 selection:bg-zinc-900 selection:text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-center text-center">
          {/* Contacts & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {cv.contacts.slice(0, 4).map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-600 dark:decoration-zinc-700 dark:hover:decoration-zinc-300"
              >
                {c.label}
              </a>
            ))}
            <a href={cv.contacts[4].href} className="rounded-lg px-3 py-1.5 border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">
              {cv.contacts[4].label}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-10 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          <div className="relative h-24 w-24 md:h-40 md:w-40 flex-none overflow-hidden rounded-full ring-2 ring-zinc-300 dark:ring-zinc-700 mx-auto md:mx-0">
            <Image
              src={cv.photo}
              alt={cv.name}
              fill
              sizes="(min-width: 768px) 80px, 96px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{cv.name}</h1>
            <p className="mt-1 text-zinc-500 dark:text-zinc-400">{cv.location}</p>
            <p className="mt-4 max-w-3xl leading-relaxed mx-auto md:mx-0">{cv.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center md:hidden">
              {cv.contacts.map((c) => (
                <a key={c.label} href={c.href} className="text-sm underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-600 dark:decoration-zinc-700 dark:hover:decoration-zinc-300">
                  {c.label}
                </a>
              ))}
            </div>
            <div className="mt-6 flex gap-3 justify-center md:justify-start print:hidden">
              <a href="#skills" className="rounded-xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Skills</a>
              <a href="#experience" className="rounded-xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Experience</a>
              <a href="#project" className="rounded-xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Project</a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Skills */}
      <div className="mx-auto max-w-4xl px-4">
        <Section title="Skills">
          <div className="grid md:grid-cols-3 gap-6" id="skills">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">Mobile</h3>
              <div className="flex flex-wrap gap-2">{cv.skills.mobile.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">Web & Backend</h3>
              <div className="flex flex-wrap gap-2">{cv.skills.webBackend.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">Tools & Practices</h3>
              <div className="flex flex-wrap gap-2">{cv.skills.tools.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            </div>
          </div>
        </Section>
      </div>

      <Divider />

      {/* Experience */}
      <div className="mx-auto max-w-4xl px-4">
        <Section title="Experience">
          <ol className="relative border-s border-zinc-200 dark:border-zinc-800 space-y-8" id="experience">
            {cv.experiences.map((exp, i) => (
              <li key={i} className="ms-6">
                <span className="absolute -start-3 mt-1.5 h-5 w-5 rounded-full border border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold">{exp.role} — {exp.company}</h3>
                  <span className="text-sm text-zinc-500">{exp.period}</span>
                </div>
                <p className="text-sm text-zinc-500">{exp.location}</p>
                <ul className="mt-2 list-disc ps-5 space-y-1 text-sm leading-relaxed">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <Divider />

      {/* Selected Projects */}
      <div className="mx-auto max-w-4xl px-4">
        <Section title="Selected Projects">
          <div className="grid md:grid-cols-3 gap-4" id="project">
            {cv.projects.map((p) => (
              <div key={p.name} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                <h3 className="font-medium">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Divider />

      {/* Education & Achievements */}
      <div className="mx-auto max-w-4xl px-4">
        <Section title="Education">
          {cv.education.map((ed) => (
            <div key={ed.school} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">{ed.school}</h3>
                <span className="text-sm text-zinc-500">{ed.period}</span>
              </div>
              <p className="text-sm">{ed.degree}</p>
              {ed.notes?.length ? (
                <ul className="mt-2 list-disc ps-5 text-sm text-zinc-500 space-y-1">
                  {ed.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </Section>

        <div className="mt-6" id="achievements">
          <Section title="Achievements">
            <ul className="space-y-3">
              {cv.achievements.map((a) => (
                <li key={a.name} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <p className="font-medium">{a.name}</p>
                    {a.link && (
                      <a href={a.link} className="text-sm underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-600 dark:decoration-zinc-700 dark:hover:decoration-zinc-300">
                        Proof / Details
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">{a.detail}</p>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      <Divider />

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-4 pb-12 text-sm text-zinc-500">
        <div className="flex flex-wrap items-center gap-3">
          {cv.contacts.map((c) => (
            <a key={c.label} href={c.href} className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-600 dark:decoration-zinc-700 dark:hover:decoration-zinc-300">
              {c.label}
            </a>
          ))}
        </div>
        <p className="mt-4">© {new Date().getFullYear()} {cv.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}
