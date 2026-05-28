import { ArrowUpRight, Cpu, Database, Github, Layers, Radar, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Von Mises Bistable UAV Wing Research',
    type: 'Primary Research System',
    description:
      'Experimental bistable wing platform studying dynamic snap-through thresholds, rotating actuation, nonlinear structural response, and future UAV implementation.',
    details: [
      'Rotating arm test rig for trigger threshold testing',
      'Centrifugally assisted Von Mises truss snap-through experiments',
      'IMU-based instrumentation roadmap with serial logging and event detection',
      'OpenCV marker tracking and MATLAB signal analysis workflows'
    ],
    hardware: ['NEMA 17', 'NEMA 23', 'A4988', 'DM542', 'Arduino Mega', 'Raspberry Pi 4', 'ICM-20948', 'ICM-42688', 'Adafruit 6-axis IMU', 'Adafruit 9-axis IMU'],
    software: ['MATLAB', 'Python', 'OpenCV', 'FFT analysis', 'CSV logging', 'AccelStepper', 'Serial data acquisition'],
    fabrication: ['Bambu X1E', 'PA-CF', 'PLA+', 'Clamp hubs', 'Couplers', 'Washer tip masses', 'Parametric CAD'],
    link: 'https://github.com/pallmy/von_mises_imu'
  },
  {
    title: 'Psylo Tech-Style Elastomer Load Frame',
    type: 'Experimental Mechanics Fixture',
    description:
      'Custom load-frame concept for rubber band and elastomer characterization supporting snap-through force estimation in the bistable wing system.',
    details: [
      'Clamp-style gripping fixture for aligned tensile loading',
      'Through-bolt or heat-set insert sandwich clamp design',
      'Designed for repeatable force-displacement characterization',
      'Supports material calibration for Von Mises truss trigger models'
    ],
    hardware: ['Rubber bands', 'Elastomer specimens', 'Through bolts', 'Heat-set inserts', 'Load fixture hardware'],
    software: ['CAD documentation', 'Test logs', 'Force-displacement plotting'],
    fabrication: ['Bambu X1E', 'PA-CF', '100% infill structural prints', 'Rapid prototyping'],
    link: '#'
  },
  {
    title: 'Verizon Scope Automation / Project Workflow Tools',
    type: 'Engineering Software',
    description:
      'Infrastructure workflow system for parsing job packages into organized scope-of-work data that can support inspector reports and location-specific item lookup.',
    details: [
      'PDF parsing of pre-engineering scope packages',
      'Street/intersection/corner-based item organization',
      'SQL-backed word-bank style inspector reporting logic',
      'Designed around real ECS utility coordination workflows'
    ],
    hardware: ['Field reporting workflow', 'Inspector report pipeline'],
    software: ['Python', 'SQL', 'PDF parsing', 'Data cleaning', 'Automation pipeline'],
    fabrication: ['N/A'],
    link: 'https://github.com/pallmy/verizon-invoice-pipeline'
  },
  {
    title: 'DayZ Acoustic Detection System',
    type: 'Sensor + ML Project',
    description:
      'Audio monitoring and classification system concept using acoustic features, trained models, and remote alerting for game-environment event detection.',
    details: [
      'Audio feature extraction and classification',
      'Remote monitoring architecture for always-on detection',
      'Frontend/backend iteration for event visibility',
      'Applied ML workflow from noisy recorded data'
    ],
    hardware: ['Xbox audio capture concept', 'Raspberry Pi target', 'Game capture workflow'],
    software: ['Python', 'Flask', 'Machine learning', 'Audio processing', 'Frontend dashboard'],
    fabrication: ['N/A'],
    link: 'https://github.com/pallmy/dayz-acoustic-sensor'
  },
  {
    title: 'OpenCV Experimental Tracking',
    type: 'Computer Vision',
    description:
      'Computer vision workflows for tracking experimental markers and extracting motion behavior from rotating dynamic systems.',
    details: [
      'HSV marker tracking using high-contrast tape',
      'Motion masks and feature extraction from video',
      'Experimental setup support for wingtip tracking',
      'Bridge between physical experiments and quantitative data'
    ],
    hardware: ['Camera', 'Reflective markers', 'Controlled lighting', 'Experimental rig'],
    software: ['Python', 'OpenCV', 'NumPy', 'Video processing', 'Data export'],
    fabrication: ['Marker mounts', 'Test background'],
    link: 'https://github.com/pallmy/openCV_greentracker'
  }
]

const skillGroups = [
  { title: 'Engineering', items: ['Structural dynamics', 'Vibrations', 'Mechanics of solids', 'Experimental mechanics', 'Nonlinear systems', 'Structural analysis', 'Dynamics'] },
  { title: 'Software', items: ['Python', 'MATLAB', 'SQL', 'Git/GitHub', 'OpenCV', 'TypeScript', 'React'] },
  { title: 'Embedded', items: ['Arduino Mega', 'Raspberry Pi 4', 'IMU integration', 'Stepper motor systems', 'Serial communication', 'Sensor logging'] },
  { title: 'Hardware', items: ['NEMA 17', 'NEMA 23', 'A4988', 'DM542', 'ICM-20948', 'ICM-42688', 'Adafruit IMUs'] },
  { title: 'Fabrication', items: ['Bambu X1E', 'PA-CF', 'PLA+', 'Parametric CAD', '3D printed fixtures', 'Clamp design'] },
  { title: 'Data', items: ['FFT analysis', 'CSV pipelines', 'Data acquisition', 'Signal processing', 'Computer vision tracking', 'Experimental plots'] }
]

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-12">
      <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs font-bold mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">{title}</h2>
      {text && <p className="mt-5 text-zinc-400 max-w-3xl text-lg leading-relaxed">{text}</p>}
    </div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-black/40"
    >
      <div className="aspect-[16/9] border-b border-zinc-800 bg-[radial-gradient(circle_at_40%_20%,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,#18181b,#09090b)] flex items-center justify-center">
        <div className="text-center">
          <Layers className="mx-auto mb-4 text-cyan-300" size={36} />
          <p className="text-zinc-500 text-sm uppercase tracking-[0.25em]">Image / CAD / Graph Slot</p>
        </div>
      </div>
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div>
            <p className="text-cyan-300 text-xs uppercase tracking-[0.25em] font-bold mb-3">{project.type}</p>
            <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
          </div>
          <a href={project.link} className="shrink-0 rounded-full border border-zinc-700 p-3 text-zinc-300 hover:text-white hover:border-cyan-300 transition" aria-label={`Open ${project.title}`}>
            <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
        <ul className="space-y-2 mb-6">
          {project.details.map((detail) => (
            <li key={detail} className="text-sm text-zinc-300 flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
        <div className="space-y-4">
          {[['Hardware', project.hardware], ['Software', project.software], ['Fabrication', project.fabrication]].map(([label, items]) => (
            <div key={label as string}>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">{label as string}</p>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((item) => (
                  <span key={item} className="rounded-full border border-zinc-800 bg-black/40 px-3 py-1.5 text-xs text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-300 selection:text-black">
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-black tracking-tight">James Palma</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#systems" className="hover:text-white">Systems</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden border-b border-zinc-900 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-8 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
              Structural Dynamics • Embedded Systems • Experimental Engineering
            </div>
            <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
              Engineering research, hardware, and code for dynamic systems.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              I am James Palma, a Civil Engineering student at Stony Brook University building across nonlinear structures, UAV mechanisms, vibration systems, embedded instrumentation, computer vision, and engineering software automation.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="rounded-full bg-white px-6 py-3 text-center font-bold text-black hover:bg-cyan-200 transition">View Projects</a>
              <a href="https://github.com/pallmy" className="rounded-full border border-zinc-700 px-6 py-3 text-center font-bold text-white hover:border-cyan-300 transition">GitHub</a>
            </div>
          </motion.div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['NEMA 23 + DM542 Rig', 'ICM-20948 / ICM-42688 IMUs', 'MATLAB + OpenCV Analysis', 'Bambu X1E PA-CF Fixtures'].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">System</p>
                <p className="mt-2 font-bold text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Featured Work" title="Project-centered engineering portfolio" text="Each project card is designed for future photos, CAD screenshots, graphs, test setups, and build documentation." />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>

      <section id="systems" className="border-y border-zinc-900 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Systems Identity" title="Hardware + software + mechanics" text="The portfolio is structured to show integrated engineering systems, not isolated class projects." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Cpu, title: 'Embedded Instrumentation', text: 'Arduino Mega, Raspberry Pi 4, IMUs, serial logging, stepper control, event flags, and sensor pipelines.' },
              { icon: Radar, title: 'Dynamic Testing', text: 'Rotating arm experiments, bistable snap-through thresholds, impulse triggering, rubber band characterization, and vibration analysis.' },
              { icon: Database, title: 'Engineering Automation', text: 'PDF parsing, SQL-backed location logic, project scope extraction, inspection report tools, and data organization.' },
              { icon: Wrench, title: 'Fabrication', text: 'Bambu X1E, PA-CF, PLA+, 100% infill fixtures, clamp geometry, couplers, hubs, and rapid test hardware.' },
              { icon: Github, title: 'Code Portfolio', text: 'Public repos for Von Mises IMU systems, OpenCV tracking, acoustic monitoring, and infrastructure automation.' },
              { icon: Layers, title: 'Research Direction', text: 'Aerospace structures, robotics, defense systems, smart structures, computational mechanics, and experimental R&D.' }
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-zinc-800 bg-black/50 p-7">
                <card.icon className="mb-5 text-cyan-300" size={30} />
                <h3 className="text-xl font-black mb-3">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Technical Stack" title="Skills grouped by engineering function" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="mb-5 text-xl font-black">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-zinc-800 bg-black px-3 py-2 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-zinc-800 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),#09090b] p-8 md:p-12">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs font-bold mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">Build-oriented engineering researcher.</h2>
            <p className="max-w-3xl text-zinc-400 leading-relaxed mb-8">
              Focused on roles and research involving structural dynamics, aerospace mechanisms, robotics, embedded systems, computational mechanics, and experimental engineering platforms.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/pallmy" className="rounded-full bg-white px-6 py-3 text-center font-bold text-black hover:bg-cyan-200 transition">GitHub Profile</a>
              <a href="mailto:j071palma@gmail.com" className="rounded-full border border-zinc-700 px-6 py-3 text-center font-bold text-white hover:border-cyan-300 transition">Email</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
