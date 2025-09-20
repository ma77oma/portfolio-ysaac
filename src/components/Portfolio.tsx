import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Code2,
  Cloud,
  Globe,
  FileCode2,
  Phone,
  MapPin,
  Server,
  Cpu,
  Database,
  Stars,
} from "lucide-react";

/**
 * Tip: úsalo como App.tsx en un proyecto Vite + React + TS.
 * Dependencias:  npm i framer-motion lucide-react
 */

// Variants tipados
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 160 },
  },
};

export default function Portfolio() {
  const skills = useMemo(
    () => [
      { title: "Backend", items: ["C#", ".NET / .NET Core", "ASP.NET Web API", "EF Core", "LINQ", "REST"] },
      { title: "Frontend", items: ["Angular", "React", "HTML5", "CSS", "Bootstrap", "jQuery"] },
      { title: "Arquitectura", items: ["Clean Architecture", "CQRS", "Mediator", "Microservicios", "UML"] },
      { title: "Cloud & DevOps", items: ["AWS (S3/EC2/CloudWatch)", "Azure (Form Recognizer)", "GCP (Document AI)", "IIS", "Web Deploy"] },
      { title: "Datos", items: ["SQL Server", "PostgreSQL", "MongoDB", "SQLite"] },
      { title: "Testing & Tools", items: ["Selenium (C#)", "Git", "VS/VS Code", "DBeaver", "SSMS"] },
    ],
    []
  );

  const experience = [
    {
      company: "Peru Apps",
      role: "Full-Stack .NET Developer",
      period: "Ago 2021 – Actualidad | Lima, Perú",
      bullets: [
        "Backend/Frontend/DB en banca, viáticos y Home Banking (Figma→UI)",
        "Arquitectura backend CQRS + MediatR y microservicios para 'Somos Chamba' (Marketplace, Finanzas, Inventario, Capacitaciones)",
        "Scrum y despliegues frecuentes; coordinación con stakeholders",
      ],
    },
    {
      company: "TI Soluciones de Negocios",
      role: "Programador Web (.NET C#)",
      period: "Abr 2019 – Jul 2021 | Lima, Perú",
      bullets: [
        "Migración de facturación electrónica de ERP a web",
        "Migraciones AngularJS→Angular, reportes PDF con iTextSharp",
        "Almacenamiento de archivos en AWS S3; modelado de datos PostgreSQL",
      ],
    },
    {
      company: "Solar Consultores S.A.C",
      role: "Analista Programador (.NET C#)",
      period: "Nov 2018 – Ene 2019 | Lima, Perú",
      bullets: ["Levantamiento y diseño técnico; modelado de base de datos"],
    },
    {
      company: "Corporate International Partners S.A.C",
      role: "Programador .NET C#",
      period: "Ene 2018 – Oct 2018 | Lima, Perú",
      bullets: ["Desarrollo multiárea, responsive y pruebas funcionales"],
    },
  ];

  const projects = [
    {
      name: "Somos Chamba (Caja Arequipa)",
      desc: "Backend modular CQRS/MediatR, APIs para Marketplace/Finanzas/Inventario/Capacitaciones; consumo de servicios y maquetación.",
      tags: [".NET", "CQRS", "Microservicios", "Angular"],
      link: "#",
    },
    {
      name: "Facturador Web & Factesol",
      desc: "Emisión electrónica, dashboards y reportes PDF (iTextSharp); almacenamiento en AWS S3.",
      tags: [".NET", "AWS S3", "iTextSharp", "PostgreSQL"],
      link: "#",
    },
    {
      name: "Marketsol E-commerce",
      desc: "Panel admin, checkout e integración de pagos (Mercado Pago).",
      tags: [".NET", "Angular", "Mercado Pago"],
      link: "#",
    },
    {
      name: "Home Banking",
      desc: "Integración de servicios y UI basada en Figma.",
      tags: ["Angular", "Figma", "UX"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stars className="size-5" />
            <span className="font-semibold tracking-tight">Ysaac Luis Rios Huarcaya</span>
          </div>
          <nav className="flex items-center gap-3 text-sm">
            <a href="#experience" className="hover:text-indigo-300">Experiencia</a>
            <a href="#projects" className="hover:text-indigo-300">Proyectos</a>
            <a href="#skills" className="hover:text-indigo-300">Skills</a>
            <a href="#contact" className="hover:text-indigo-300">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(99,102,241,.35),transparent_40%),radial-gradient(600px_circle_at_80%_0,rgba(168,85,247,.25),transparent_40%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="inline-flex items-center text-xs uppercase tracking-wider text-indigo-300/80 bg-indigo-500/10 ring-1 ring-indigo-500/20 px-3 py-1 rounded-full mb-4">
                Full-Stack .NET · Clean Architecture · CQRS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Construyo <strong>APIs</strong> y <strong>productos web</strong> escalables en .NET, Angular y la nube.
              </h1>
              <p className="mt-4 text-zinc-300 max-w-prose">
                7+ años en banca, e-commerce y facturación electrónica. Me enfoco en performance, mantenibilidad y UX moderna.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 font-medium shadow hover:shadow-indigo-500/25 transition-shadow"
                >
                  <Mail className="size-4" /> Contáctame
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 font-medium hover:bg-white/10"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 font-medium hover:bg-white/10"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-300">
                <span className="inline-flex items-center gap-1 bg-white/5 rounded-full px-3 py-1">
                  <MapPin className="size-3" /> Lima, Perú
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 rounded-full px-3 py-1">
                  <Phone className="size-3" /> 940 882 791
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 rounded-full px-3 py-1">
                  <Globe className="size-3" /> Español · Inglés técnico
                </span>
              </div>
            </div>

            {/* Icon grid animado */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 ring-1 ring-white/10 p-1">
                <div className="h-full w-full rounded-2xl bg-zinc-950 grid place-items-center">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    {[
                      Code2,
                      Server,
                      Database,
                      Cloud,
                      Cpu,
                      FileCode2,
                      Briefcase,
                      Globe,
                      Stars,
                    ].map((Icon, i) => (
                      <motion.div
                        key={i}
                        variants={item}
                        initial="hidden"
                        animate="show"
                        className="h-20 w-20 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center"
                      >
                        <Icon className="size-7" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Experiencia
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6"
        >
          {experience.map((exp, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/[0.07] transition"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-indigo-300">· {exp.company}</span>
              </div>
              <p className="text-sm text-zinc-400 mt-1">{exp.period}</p>
              <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Proyectos seleccionados
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          {projects.map((p, i) => (
            <motion.a
              key={i}
              variants={item}
              href={p.link}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/[0.07] transition block"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold group-hover:text-indigo-300 transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/15 ring-1 ring-indigo-500/20">
                  case
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Habilidades
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
            >
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <ul className="text-sm text-zinc-300 space-y-1 list-disc pl-5">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Contacto
        </motion.h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <p className="text-zinc-300">¿Te interesa colaborar? Escríbeme y coordinamos una llamada.</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <a className="hover:text-indigo-300" href="mailto:ysaacrioshuarcaya@gmail.com">
                  ysaacrioshuarcaya@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4" />
                <a className="hover:text-indigo-300" href="tel:+51940882791">
                  +51 940 882 791
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="size-4" />
                <a className="hover:text-indigo-300" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 grid gap-4"
          >
            <input
              className="bg-zinc-900/70 rounded-xl px-4 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Nombre"
            />
            <input
              className="bg-zinc-900/70 rounded-xl px-4 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Email"
            />
            <textarea
              rows={4}
              className="bg-zinc-900/70 rounded-xl px-4 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Mensaje"
            />
            <button
              type="button"
              className="justify-self-start inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 font-medium shadow hover:shadow-indigo-500/25"
            >
              Enviar
            </button>
            <p className="text-xs text-zinc-400">*Formulario demo (sin backend). Puedes conectar a una API/EmailJS.</p>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400">
          © {new Date().getFullYear()} Ysaac Luis Rios Huarcaya — Full-Stack .NET
        </div>
      </footer>
    </div>
  );
}
