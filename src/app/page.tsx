'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useInView } from 'framer-motion';

const cv = {
  name: "Denandra Prasetya Laksma Putra",
  photo: "/adra.jpeg",
  title: "Mobile Developer",
  location: "Jakarta, Indonesia",
  contacts: [
    { label: "prasetya.denandra@gmail.com", href: "mailto:prasetya.denandra@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/denandra-prasetya" },
    { label: "Github", href: "https://github.com/denandrapr" },
  ],
  summary:
    "Over 5 years of experience building Android apps using Kotlin, Java, and React Native. Comfortable working in collaborative teams, implementing product requirements, and paying attention to performance, code structure, and long-term maintainability.",
  skills: {
    mobile: ["Kotlin", "Jetpack Compose", "Coroutines/Flow", "Hilt/Dagger", "Java", "React Native (JS/TS)", "Flutter"],
    webBackend: ["Next.js", "React.js", "Firebase", "SQL"],
    tools: ["Git/GitLab", "CI/CD", "Agile/Scrum", "Unit/UI Testing", "Crashlytics"],
  },
  experiences: [
    {
      company: "PT Bank KEB Hana Indonesia",
      location: "Jakarta (Full Time)",
      role: "Android Developer",
      period: "Nov 2025 – Present",
      bullets: [
        "Developed and enhanced key features for the LINE Bank Android application using Kotlin and the MVVM architecture.",
      ],
    },
    {
      company: "PT. Bank Digital BCA",
      location: "Jakarta (Contract Vendor)",
      role: "Android Developer",
      period: "Nov 2024 – Oct 2025",
      bullets: [
        "Collaborate on Blu by BCA Digital app; migrated core features from React Native to Kotlin to improve performance & maintainability.",
        "Contributed to rewriting the application from React Native to Kotlin, ensuring improved performance and maintainability.",
        "Took full responsibility for the bluExtraCash module, a feature dedicated to online loans, managing development and performance optimization.",
        "Assisted in debugging and implementing new features for other modules to enhance functionality and user experience.",
        "Worked closely with cross-functional teams to deliver a high-quality, seamless mobile application.",
      ],
    },
    {
      company: "PT. Akar Inti Teknologi (Djarum Group)",
      location: "Jakarta (Full Time)",
      role: "Mobile Developer",
      period: "Mar 2022 – Oct 2025",
      bullets: [
        "Mandiri Taspen Navigator – Kotlin, Jetpack Compose, MVI.",
        "U+Reward – Java, MVP; shipped new features for 10k+ users on Play Store.",
        "BPP Revamp (Pertamina) – Kotlin, MVP, RxJava, Dagger for EDC devices in Jabodetabek & West Java.",
        "Padma Hotel – React Native; Adira Website Mgmt – React.js",
        "Akar Inti UX Template – Kotlin, Compose.",
        "Altea Care – Kotlin; integrated MoEngage/Appsflyer (100k+ installs).",
        " Revivo – Java (50k+ installs)."
      ],
    },
    {
      company: "PT. Telkom Indonesia (DBT – Tribe ENT)",
      location: "Jakarta (Contract)",
      role: "Mobile Developer",
      period: "Jun 2020 – Feb 2022",
      bullets: [
        "Perhutani incident management – React Native.",
        "LRT City ADHI Karya apartment management – React Native (tenants & technicians workflows).",
        "Jaklingko Intermoda ticketing – React Native (MRT/LRT/KRL/TransJakarta).",
        "Rewrite TINDA app from Java to Kotlin.",
      ],
    },
    {
      company: "PT. Vascomm Solusi Teknologi",
      location: "Sidoarjo (Internship)",
      role: "Android Developer",
      period: "Feb 2020 – Apr 2020",
      bullets: [
        "Created chat application implementing Socket.io on Android with Kotlin.",
      ],
    },
    {
      company: "PT. Kasir Pintar",
      location: "Surabaya (Internship)",
      role: "Android Developer",
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
      name: "LINE Bank",
      description: "Developed key features for the LINE Bank Android app using Kotlin and MVVM, enhancing performance, security, and user experience through effective collaboration.",
    },
    {
      name: "Mandiri Taspen Navigator",
      description: "Compose + MVI, enterprise app for field system management services.",
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

// ——— Animation Wrapper ———
function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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

// ——— UI Helpers ———
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide cursor-default select-none
        border-cyan-500/30 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-900/50 transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-20" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
        <span className="h-5 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-teal-500 inline-block" />
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="my-8 border-zinc-800/60" />;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 30px -8px rgba(34, 211, 238, 0.2)" }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ——— Page Component ———
export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 antialiased selection:bg-cyan-900 selection:text-cyan-100">

      {/* Subtle background glow blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-600/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-72 w-72 rounded-full bg-teal-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-700/5 blur-3xl" />
      </div>

      {/* ——— Header ——— */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/60">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {cv.contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="text-zinc-400 underline underline-offset-4 decoration-zinc-700
                  hover:text-cyan-400 hover:decoration-cyan-500 transition-colors duration-200"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ——— Hero ——— */}
      <section className="mx-auto max-w-4xl px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

          {/* Photo */}
          <FadeInUp>
            <div className="relative h-28 w-28 md:h-40 md:w-40 overflow-hidden rounded-full ring-2 ring-zinc-800 flex-none mx-auto md:mx-0">
              <Image
                src={cv.photo}
                alt={cv.name}
                fill
                sizes="(min-width: 768px) 160px, 112px"
                className="object-cover"
                priority
              />
            </div>
          </FadeInUp>

          {/* Info */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <FadeInUp delay={0.05}>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                {cv.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-cyan-400">{cv.title}</p>
              <p className="mt-0.5 text-zinc-500 text-sm">{cv.location}</p>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400 text-sm mx-auto md:mx-0">{cv.summary}</p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:hidden">
                {cv.contacts.map((c) => (
                  <a key={c.label} href={c.href}
                    className="text-sm underline underline-offset-4 decoration-zinc-300 hover:text-cyan-400 transition-colors duration-200">
                    {c.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex gap-3 justify-center md:justify-start print:hidden flex-wrap">
                {[
                  { label: "Skills", href: "#skills" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#project" },
                ].map((nav) => (
                  <motion.a
                    key={nav.label}
                    href={nav.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl px-4 py-2 text-sm font-medium border
                      border-zinc-700 hover:border-cyan-600 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all duration-200"
                  >
                    {nav.label}
                  </motion.a>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <Divider />

      {/* ——— Skills ——— */}
      <div className="mx-auto max-w-4xl px-4">
        <FadeInUp>
          <Section title="Skills">
            <div className="grid md:grid-cols-3 gap-6" id="skills">
              {[
                { label: "Mobile", items: cv.skills.mobile },
                { label: "Web & Backend", items: cv.skills.webBackend },
                { label: "Tools & Practices", items: cv.skills.tools },
              ].map((group, i) => (
                <FadeInUp key={group.label} delay={i * 0.07}>
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">{group.label}</h3>
                    <div className="flex flex-wrap gap-2">{group.items.map((s) => <Badge key={s}>{s}</Badge>)}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </Section>
        </FadeInUp>
      </div>

      <Divider />

      {/* ——— Experience ——— */}
      <div className="mx-auto max-w-4xl px-4">
        <FadeInUp>
          <Section title="Experience">
            <ol className="relative border-s-2 border-zinc-800 space-y-6" id="experience">
              {cv.experiences.map((exp, i) => (
                <FadeInUp key={i} delay={i * 0.06}>
                  <li className="ms-6 relative">
                    {/* Timeline dot with accent */}
                    <span className="absolute -start-[1.65rem] mt-1.5 flex h-5 w-5 items-center justify-center rounded-full
                      border-2 border-cyan-600 bg-zinc-950 ring-4 ring-zinc-950">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500" />
                    </span>

                    <Card>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="text-base font-semibold text-zinc-100">
                          {exp.company}
                          <span className="text-cyan-400"> — </span>
                          {exp.role}
                        </h3>
                        <span className="text-xs font-medium text-zinc-500 whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-xs text-zinc-600 mt-0.5">{exp.location}</p>
                      <ul className="mt-2 list-disc ps-5 space-y-1 text-sm leading-relaxed text-zinc-400">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    </Card>
                  </li>
                </FadeInUp>
              ))}
            </ol>
          </Section>
        </FadeInUp>
      </div>

      <Divider />

      {/* ——— Selected Projects ——— */}
      <div className="mx-auto max-w-4xl px-4">
        <FadeInUp>
          <Section title="Selected Projects">
            <div className="grid md:grid-cols-3 gap-4" id="project">
              {cv.projects.map((p, i) => (
                <FadeInUp key={p.name} delay={i * 0.08}>
                  <Card>
                    <h3 className="font-semibold text-zinc-100">{p.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{p.description}</p>
                  </Card>
                </FadeInUp>
              ))}
            </div>
          </Section>
        </FadeInUp>
      </div>

      <Divider />

      {/* ——— Education & Achievements ——— */}
      <div className="mx-auto max-w-4xl px-4">
        <FadeInUp>
          <Section title="Education">
            <div className="space-y-3">
              {cv.education.map((ed, i) => (
                <FadeInUp key={ed.school} delay={i * 0.08}>
                  <Card>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-semibold text-zinc-100">{ed.school}</h3>
                      <span className="text-xs font-medium text-zinc-500">{ed.period}</span>
                    </div>
                    <p className="text-sm text-zinc-400">{ed.degree}</p>
                    {ed.notes?.length ? (
                      <ul className="mt-2 list-disc ps-5 text-sm text-zinc-500 space-y-1">
                        {ed.notes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                </FadeInUp>
              ))}
            </div>
          </Section>
        </FadeInUp>

        <div className="mt-6" id="achievements">
          <FadeInUp>
            <Section title="Achievements">
              <ul className="space-y-3">
                {cv.achievements.map((a) => (
                  <FadeInUp key={a.name}>
                    <Card>
                      <li>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                          <p className="font-semibold text-zinc-100">{a.name}</p>
                          {a.link && (
                            <a href={a.link}
                              className="text-sm font-medium text-cyan-400 underline underline-offset-4
                                decoration-cyan-700 hover:text-cyan-300 transition-colors"
                            >
                              Proof / Details →
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-zinc-400 mt-1">{a.detail}</p>
                      </li>
                    </Card>
                  </FadeInUp>
                ))}
              </ul>
            </Section>
          </FadeInUp>
        </div>
      </div>

      <Divider />

      {/* ——— Footer ——— */}
      <footer className="mx-auto max-w-4xl px-4 pb-12 text-sm text-zinc-500">
        <div className="flex flex-wrap items-center gap-4">
          {cv.contacts.map((c) => (
            <a key={c.label} href={c.href}
              className="underline underline-offset-4 decoration-zinc-700 hover:text-cyan-400 transition-colors duration-200"
            >
              {c.label}
            </a>
          ))}
        </div>
        <p className="mt-4 text-zinc-600">© {new Date().getFullYear()} {cv.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}
