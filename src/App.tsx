import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Server,
  ShieldCheck,
  Sun,
  Terminal,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react'
import { FormEvent, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  experience,
  navigation,
  projectFilters,
  projects,
  siteConfig,
  technologyGroups,
  workSteps,
} from './data'
import type { Project, ProjectCategory } from './types'

type Theme = 'dark' | 'light'
type Filter = 'Todos' | ProjectCategory

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  data: Database,
  tooling: Layers3,
  systems: Wrench,
}

function ExternalAnchor({
  href,
  children,
  className,
  label,
}: {
  href: string
  children: ReactNode
  className?: string
  label?: string
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <div className="section-heading__grid">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const visualContent = {
    flow: (
      <>
        <div className="mini-flow__row">
          <span>Identidad</span><i /><span>QR</span><i /><span>Registro</span>
        </div>
        <div className="mini-log">
          <b>BITÁCORA</b><span>entrada validada</span><em>12:42</em>
        </div>
      </>
    ),
    inventory: (
      <>
        <div className="mini-kpis"><span>Stock</span><strong>API</strong><span>Movimientos</span></div>
        <div className="mini-bars"><i /><i /><i /><i /><i /></div>
      </>
    ),
    mobile: (
      <div className="mini-phone">
        <span className="mini-phone__notch" />
        <b>09:14</b>
        <div className="mini-pin"><MapPin size={16} /></div>
        <p>Ubicación lista</p>
        <button type="button" tabIndex={-1}>CHECK IN</button>
      </div>
    ),
    changes: (
      <>
        <div className="mini-branch"><span>v1.2</span><i /><i /><i /><span>v1.3</span></div>
        <div className="mini-change"><CircleDot size={14} /><span>Cambio revisado</span><b>READY</b></div>
        <div className="mini-change muted"><CircleDot size={14} /><span>Migración</span><b>0024</b></div>
      </>
    ),
    bot: (
      <>
        <div className="mini-chat"><span>/consultar</span></div>
        <div className="mini-chat reply"><b>BOT</b><span>Información localizada</span></div>
        <div className="mini-sheet"><i /><i /><i /><i /><i /><i /></div>
      </>
    ),
    face: (
      <>
        <div className="mini-face"><i /><i /><i /><i /><span /></div>
        <div className="mini-scan"><span>VECTOR</span><i /><b>MATCH</b></div>
      </>
    ),
    tickets: (
      <>
        <div className="mini-ticket"><span>TK-024</span><b>EN REVISIÓN</b></div>
        <div className="mini-route"><i /><i /><i /><i /></div>
        <div className="mini-ticket muted"><span>Inventario</span><b>SYNC</b></div>
      </>
    ),
  }[project.visual]

  return (
    <div
      className={`project-visual project-visual--${project.visual}${large ? ' project-visual--large' : ''}`}
      data-accent={project.accent}
      aria-label={`Visualización conceptual del proyecto ${project.title}`}
      role="img"
    >
      <div className="project-visual__chrome">
        <span /><span /><span />
        <small>system/{project.id}</small>
      </div>
      <div className="project-visual__body">{visualContent}</div>
      <div className="project-visual__grid" aria-hidden="true" />
    </div>
  )
}

function Header({ theme, onThemeChange }: { theme: Theme; onThemeChange: () => void }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -68%', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const close = () => {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Ir al inicio">
          <span className="brand__mark">D</span>
          <span className="brand__name">Diego <b>de Luna</b></span>
        </a>

        <nav id="mobile-navigation" className={`main-nav${open ? ' is-open' : ''}`} aria-label="Navegación principal">
          {navigation.map((item) => {
            const id = item.href.slice(1)
            return (
              <a
                href={item.href}
                key={item.href}
                aria-current={activeSection === id ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="nav-actions">
          {siteConfig.cvUrl && (
            <a className="cv-link" href={siteConfig.cvUrl} download>
              Descargar CV
            </a>
          )}
          <span className="language-label" aria-label="Idioma actual: español">ES</span>
          <button
            className="icon-button"
            type="button"
            onClick={onThemeChange}
            aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          {siteConfig.availability.visible && (
            <div className="availability reveal">
              <i aria-hidden="true" />
              {siteConfig.availability.label}
            </div>
          )}
          <p className="hero__intro reveal">Hola, soy Diego de Luna.</p>
          <h1 className="reveal">
            Convierto problemas reales en <span>software útil.</span>
          </h1>
          <p className="hero__description reveal">
            Desarrollo aplicaciones, automatizo procesos y resuelvo problemas tecnológicos combinando
            frontend, backend, datos y soporte de sistemas.
          </p>
          <div className="hero__actions reveal">
            <a className="button button--primary" href="#proyectos">
              Ver mis proyectos <ArrowRight size={17} />
            </a>
            <a className="button button--secondary" href="#contacto">
              Contactarme
            </a>
          </div>
          <div className="hero__meta reveal">
            <div className="social-links" aria-label="Perfiles profesionales">
              <ExternalAnchor href={siteConfig.links.github} label="GitHub de Diego de Luna">
                <Github size={18} /> <span>GitHub</span>
              </ExternalAnchor>
              <ExternalAnchor href={siteConfig.links.linkedin} label="LinkedIn de Diego de Luna">
                <Linkedin size={18} /> <span>LinkedIn</span>
              </ExternalAnchor>
            </div>
            <span className="hero__location"><MapPin size={15} /> {siteConfig.location}</span>
          </div>
        </div>

        <div className="systems-canvas reveal" aria-label="Mapa conceptual de un sistema de software" role="img">
          <div className="systems-canvas__top">
            <span><i /> SYSTEMS / ONLINE</span>
            <small>01:04:27</small>
          </div>
          <div className="systems-canvas__stage">
            <div className="system-node system-node--ui">
              <Code2 size={19} /><span><b>INTERFACE</b>React / Mobile</span>
            </div>
            <div className="system-node system-node--api">
              <Server size={19} /><span><b>SERVICES</b>REST / Logic</span>
            </div>
            <div className="system-node system-node--data">
              <Database size={19} /><span><b>DATA</b>SQL / Firebase</span>
            </div>
            <div className="system-core">
              <span className="system-core__orbit" /><span className="system-core__orbit second" />
              <Terminal size={29} />
              <b>BUILD</b>
            </div>
            <svg className="system-lines" viewBox="0 0 500 460" preserveAspectRatio="none" aria-hidden="true">
              <path d="M145 108 C220 108 210 215 250 230" />
              <path d="M355 112 C285 112 300 208 250 230" />
              <path d="M250 230 C250 290 260 305 250 353" />
            </svg>
            <div className="code-fragment code-fragment--one">auth.validate()</div>
            <div className="code-fragment code-fragment--two">status: 200</div>
          </div>
          <div className="systems-canvas__footer">
            <span>DISEÑAR</span><ChevronRight size={13} /><span>CONSTRUIR</span><ChevronRight size={13} /><span>MEJORAR</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre-mi" aria-label="Continuar a Sobre mí">
        <span>Explorar</span><ArrowDown size={16} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section section--border" id="sobre-mi">
      <div className="container">
        <SectionHeading
          eyebrow="01 / Sobre mí"
          title="Curiosidad técnica con enfoque práctico."
          description="Me interesa entender cómo funciona un sistema completo: desde lo que ve una persona hasta los servicios, datos y soporte que lo mantienen operativo."
        />
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="about-copy__lead">
              Soy estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital, con
              experiencia práctica participando en aplicaciones y procesos técnicos reales.
            </p>
            <p>
              Mi perfil cruza desarrollo de software, automatización y soporte. Disfruto construir una
              solución desde cero, pero también entrar a un sistema existente, localizar una falla y
              mejorarlo con cuidado.
            </p>
            <p>
              Busco una oportunidad junior, trainee o de prácticas donde pueda aportar criterio,
              disciplina y capacidad de aprendizaje mientras sigo fortaleciendo mis bases de ingeniería.
            </p>
            <div className="about-principles">
              <span><Check size={15} /> Comunicación clara</span>
              <span><Check size={15} /> Mejora continua</span>
              <span><Check size={15} /> Documentación útil</span>
            </div>
          </div>
          <aside className="profile-card reveal" aria-label="Resumen profesional">
            <div className="profile-card__header">
              <div className="profile-monogram">DL</div>
              <div><small>PERFIL</small><strong>Junior con experiencia práctica</strong></div>
            </div>
            <dl>
              <div><dt>Formación</dt><dd>Ingeniería en TI e Innovación Digital</dd></div>
              <div><dt>Enfoque</dt><dd>Web · Backend · Sistemas</dd></div>
              <div><dt>Idioma</dt><dd>{siteConfig.english}</dd></div>
              <div><dt>Base</dt><dd>{siteConfig.location}</dd></div>
            </dl>
            <div className="profile-card__footer"><ShieldCheck size={18} /><span>Contenido basado en experiencia y proyectos verificables</span></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Technologies() {
  const [activeGroup, setActiveGroup] = useState(technologyGroups[0].id)
  const selected = technologyGroups.find((group) => group.id === activeGroup) ?? technologyGroups[0]
  const Icon = groupIcons[selected.id]

  return (
    <section className="section section--soft" id="tecnologias">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Tecnologías"
          title="Herramientas elegidas por su función."
          description="No uso porcentajes arbitrarios. Organizo el stack según el tipo de problema en el que lo he aplicado y el papel que cumple dentro de la solución."
        />
        <div className="tech-layout reveal">
          <div className="tech-tabs" role="tablist" aria-label="Categorías de tecnologías">
            {technologyGroups.map((group) => {
              const GroupIcon = groupIcons[group.id]
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeGroup === group.id}
                  aria-controls="technology-panel"
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                >
                  <GroupIcon size={18} /><span>{group.title}</span><ChevronRight size={16} />
                </button>
              )
            })}
          </div>
          <div className="tech-panel" id="technology-panel" role="tabpanel">
            <div className="tech-panel__intro">
              <span className="tech-panel__icon"><Icon size={24} /></span>
              <div><small>{selected.eyebrow}</small><h3>{selected.title}</h3></div>
              <p>{selected.description}</p>
            </div>
            <div className="tech-list">
              {selected.items.map((item, index) => (
                <div className="tech-item" key={item.name}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.name}</strong>
                  <p>{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="project-card reveal" data-accent={project.accent}>
      <div className="project-card__head">
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__type">{project.type}</span>
      </div>
      <ProjectVisual project={project} />
      <div className="project-card__body">
        <div>
          <p className="project-card__visibility"><CircleDot size={11} /> {project.visibility}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="tags" aria-label="Tecnologías">
          {project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
          {project.technologies.length > 5 && <span>+{project.technologies.length - 5}</span>}
        </div>
        <div className="project-card__actions">
          <button type="button" className="text-button" onClick={onOpen}>
            Ver caso de estudio <ArrowRight size={16} />
          </button>
          {project.links[0] && (
            <ExternalAnchor href={project.links[0].href} className="project-card__quick-link" label={`${project.links[0].label}: ${project.title}`}>
              <Github size={17} />
            </ExternalAnchor>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => !element.hasAttribute('disabled'))
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKey)
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        ref={dialogRef}
      >
        <div className="project-dialog__bar">
          <span>{project.number} / CASO DE ESTUDIO</span>
          <button type="button" className="icon-button" onClick={onClose} ref={closeRef} aria-label="Cerrar detalle">
            <X size={20} />
          </button>
        </div>
        <div className="project-dialog__content">
          <div className="project-dialog__hero">
            <div>
              <p className="eyebrow"><span aria-hidden="true" />{project.type}</p>
              <h2 id="project-dialog-title">{project.title}</h2>
              <p>{project.summary}</p>
              <div className="tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <ProjectVisual project={project} large />
          </div>

          <div className="case-grid">
            <section><span>01</span><h3>Contexto y problema</h3><p>{project.problem}</p></section>
            <section><span>02</span><h3>Objetivo</h3><p>{project.objective}</p></section>
            <section className="case-grid__wide"><span>03</span><h3>Mi contribución</h3><p>{project.contribution}</p></section>
            <section className="case-grid__wide"><span>04</span><h3>Arquitectura técnica</h3>
              <ul>{project.architecture.map((item) => <li key={item}><ChevronRight size={14} />{item}</li>)}</ul>
            </section>
            <section className="case-grid__wide"><span>05</span><h3>Retos y soluciones</h3>
              <div className="challenge-list">{project.challenges.map((item) => (
                <div key={item.title}><strong>{item.title}</strong><p>{item.solution}</p></div>
              ))}</div>
            </section>
            <section className="case-grid__wide"><span>06</span><h3>Resultados confirmados</h3>
              <ul>{project.results.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
            </section>
          </div>

          <div className="project-dialog__footer">
            <p><ShieldCheck size={16} /> {project.visibility}. El visual es conceptual; no se presenta como captura real.</p>
            <div>
              {project.links.map((link) => (
                <ExternalAnchor href={link.href} className="button button--secondary" key={link.href}>
                  {link.kind === 'code' ? <Github size={17} /> : <ExternalLink size={17} />}
                  {link.label}
                </ExternalAnchor>
              ))}
              <button className="button button--primary" type="button" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const visibleProjects = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((project) => project.categories.includes(filter))),
    [filter],
  )

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Trabajo seleccionado"
          title="Casos que conectan código y operación."
          description="Cada caso distingue lo confirmado en código público de la experiencia proporcionada y anonimizada. Sin clientes, métricas ni resultados inventados."
        />
        <div className="project-filters reveal" aria-label="Filtrar proyectos">
          {projectFilters.map((item) => (
            <button
              type="button"
              className={filter === item ? 'is-active' : ''}
              aria-pressed={filter === item}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>{item === 'Todos' ? projects.length : projects.filter((project) => project.categories.includes(item)).length}</span>
            </button>
          ))}
        </div>
        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} onOpen={() => setSelectedProject(project)} />
          ))}
        </div>
        {visibleProjects.length === 0 && <p className="empty-state">No hay proyectos en esta categoría.</p>}
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

function Experience() {
  return (
    <section className="section section--dark" id="experiencia">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Experiencia práctica"
          title="También construyo desde la operación."
          description="Mi experiencia combina mantenimiento de aplicaciones, atención a usuarios, infraestructura cotidiana y colaboración con diferentes áreas."
        />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item reveal" key={item.index}>
              <span className="experience-item__index">{item.index}</span>
              <div><small>{item.context}</small><h3>{item.title}</h3><p>{item.description}</p></div>
              <ul>{item.points.map((point) => <li key={point}><span />{point}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="experience-note reveal">
          Esta sección resume actividades y capacidades prácticas. No atribuye títulos, fechas ni alcance administrativo que no estén confirmados.
        </p>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section--soft" id="proceso">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Cómo trabajo"
          title="Un proceso simple para avanzar con claridad."
          description="Una metodología práctica que uso para reducir incertidumbre, hacer cambios comprobables y dejar el trabajo entendible."
        />
        <ol className="process-grid">
          {workSteps.map((step) => (
            <li className="process-step reveal" key={step.number}>
              <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('')
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const nextErrors: Record<string, string> = {}

    if (name.length < 2) nextErrors.name = 'Escribe tu nombre.'
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Escribe un correo válido.'
    if (message.length < 20) nextErrors.message = 'Cuéntame un poco más (mínimo 20 caracteres).'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Revisa los campos marcados antes de continuar.')
      return
    }

    const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`)
    const body = encodeURIComponent(`${message}\n\nNombre: ${name}\nCorreo de respuesta: ${email}`)
    setStatus('Mensaje preparado. Revisa tu aplicación de correo para enviarlo.')
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section contact" id="contacto">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow"><span aria-hidden="true" />06 / Contacto</p>
          <h2>¿Hay un problema que pueda ayudar a resolver?</h2>
          <p>
            Estoy abierto a posiciones junior, prácticas profesionales y proyectos donde pueda seguir creciendo mientras aporto desde el primer día.
          </p>
          <a className="contact-email" href={`mailto:${siteConfig.email}`}>
            <span><Mail size={20} /></span><div><small>Escríbeme a</small><strong>{siteConfig.email}</strong></div><ArrowRight size={20} />
          </a>
          <div className="contact-links">
            <ExternalAnchor href={siteConfig.links.github}><Github size={17} /> GitHub <ExternalLink size={13} /></ExternalAnchor>
            <ExternalAnchor href={siteConfig.links.linkedin}><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></ExternalAnchor>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__head">
            <div><small>NUEVO MENSAJE</small><strong>Cuéntame sobre la oportunidad</strong></div>
            <span><i /> MAILTO</span>
          </div>
          <label htmlFor="contact-name">Nombre</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" aria-describedby={errors.name ? 'name-error' : undefined} aria-invalid={Boolean(errors.name)} />
          {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}

          <label htmlFor="contact-email">Correo</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@correo.com" aria-describedby={errors.email ? 'email-error' : undefined} aria-invalid={Boolean(errors.email)} />
          {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}

          <label htmlFor="contact-message">Mensaje</label>
          <textarea id="contact-message" name="message" rows={5} placeholder="Puesto, proyecto o problema en el que podría colaborar…" aria-describedby={errors.message ? 'message-error' : undefined} aria-invalid={Boolean(errors.message)} />
          {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}

          <button className="button button--primary contact-form__submit" type="submit">
            Preparar correo <Send size={16} />
          </button>
          <p className={`form-status${Object.keys(errors).length ? ' is-error' : ''}`} role="status">{status}</p>
          <p className="form-note">Este formulario abre tu aplicación de correo; no simula ni almacena envíos.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div><span className="brand__mark">D</span><p>Software útil, sistemas confiables y aprendizaje constante.</p></div>
        <div><small>NAVEGACIÓN</small>{navigation.slice(0, 5).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
        <div><small>ENLACES</small>
          <ExternalAnchor href={siteConfig.links.github}>GitHub <ExternalLink size={12} /></ExternalAnchor>
          <ExternalAnchor href={siteConfig.links.linkedin}>LinkedIn <ExternalLink size={12} /></ExternalAnchor>
          <a href={`mailto:${siteConfig.email}`}>Correo</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Diego de Luna</span>
        <span>Diseñado y desarrollado con intención.</span>
      </div>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('ddl-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('ddl-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#090b10' : '#f5f6fa')
  }, [theme])

  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    if (!target) return
    window.requestAnimationFrame(() => target.scrollIntoView())
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }
    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.96) item.classList.add('is-visible')
      else item.classList.add('reveal-ready')
    })
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }),
      { threshold: 0.08, rootMargin: '0px 0px -50px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header theme={theme} onThemeChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="contenido">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
