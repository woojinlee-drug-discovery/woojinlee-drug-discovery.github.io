export default function App() {
  const projects = [
    {
      title: "DP1 Modulator Discovery",
      description:
        "Led structure-based discovery for the prostaglandin D2 receptor 1 (DP1) by integrating molecular docking, all-atom molecular dynamics simulations, and structural biology to define ligand recognition and activation mechanisms.",
    },
    {
      title: "Giga-Scale Virtual Screening",
      description:
        "Performed giga-scale virtual screening of ~3 trillion Enamine REAL compounds using V-SYNTHES and prioritized hundreds of candidates for synthesis and functional evaluation, contributing to the discovery of 23 novel DP1 modulators.",
    },
    {
      title: "M2R–β-Arrestin-1 Complex Modeling",
      description:
        "Built all-atom models of the human M2R–β-arrestin-1 complex using RosettaCM and ICM-Pro, translated 65 experimental crosslinking pairs into structural restraints, and evaluated the interface with 36 µs of unbiased MD simulations in GROMACS.",
    },
  ];

  const publications = [
    "Davoudinasab, B.; Raskovalov, A.; Lee, W.; et al. Structural Insights into the Mechanism of Activation and Inhibition of the Prostaglandin D2 receptor 1. Nature Communications (2025).",
    "Lee, W.; Benton, T.; Sengupta, A.; Houk, K. N. Molecular Dynamics of the Norbornyl Cation and Its Generation in Winstein–Trifan Solvolysis: The Timing of Sigma-Bridging. Journal of Organic Chemistry (2024).",
    "Müller, T.; Lee, W.; et al. Phosphorylation site topology governs the functional dynamics of arrestin recruitment to GPCRs. Manuscript submitted.",
  ];

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="brand-name">Woojin Lee</div>
            <div className="brand-subtitle">
              Computational Chemistry · Drug Discovery · GPCR Research
            </div>
          </div>

          <nav className="menu">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <div className="pill">Academic Portfolio</div>
            <h1>
              Computational chemist advancing GPCR drug discovery through
              molecular modeling, large-scale virtual screening, and molecular
              dynamics simulations.
            </h1>
            <p>
              I am a postdoctoral researcher at the University of Southern
              California developing structure-guided computational strategies
              for ligand discovery, receptor mechanism analysis, and
              experimentally actionable hypothesis generation.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Highlights</h3>
            <ul>
              <li>5+ years in computational chemistry and HPC workflows</li>
              <li>~3 trillion-compound virtual screening experience</li>
              <li>23 novel DP1 modulators identified</li>
              <li>36 µs unbiased MD simulations for GPCR–arrestin modeling</li>
              <li>Ph.D. in Chemistry from UCLA</li>
              <li>Postdoctoral Research Associate at USC</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">About</div>
          <h2>Research profile</h2>
          <p>
            I am a computational chemist with a Ph.D. and experience spanning
            drug discovery, structural biology, and computational organic
            chemistry. My research combines molecular docking, molecular
            dynamics simulations, structural modeling, and high-performance
            scientific workflows to understand receptor behavior and guide
            experimental design.
          </p>
          <p>
            My recent work has focused on GPCR systems, including
            structure-based discovery for DP1 and mechanistic modeling of the
            human M2R–β-arrestin-1 complex. I am especially interested in
            translating large-scale computation into experimentally useful
            insights.
          </p>
        </section>

        <section id="research" className="section">
          <div className="section-label">Research</div>
          <h2>What I work on</h2>

          <div className="grid three">
            <div className="card">
              <h3>GPCR Structure and Dynamics</h3>
              <p>
                Mechanistic analysis of receptor activation, ligand recognition,
                sodium allosteric effects, and arrestin engagement using
                atomistic modeling and simulation.
              </p>
            </div>

            <div className="card">
              <h3>Structure-Based Drug Discovery</h3>
              <p>
                Large-scale virtual screening, docking, hit prioritization, and
                computational support for early-stage ligand discovery and
                optimization.
              </p>
            </div>

            <div className="card">
              <h3>Scientific Computing and HPC</h3>
              <p>
                Python-based workflow development, trajectory analysis,
                cheminformatics, and scalable computing across Linux and GPU/HPC
                environments.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">Projects</div>
          <h2>Selected work</h2>

          <div className="grid three">
            {projects.map((project) => (
              <div className="card project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="section">
          <div className="section-label">Publications</div>
          <h2>Selected publications</h2>

          <div className="grid one">
            {publications.map((item) => (
              <div className="card" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">Contact</div>
          <h2>Let’s connect</h2>

          <div className="contact-grid">
            <div>
              <p>
                I am interested in collaborative opportunities in computational
                chemistry, GPCR biology, structure-based drug discovery, and
                scientific software workflows.
              </p>
            </div>

            <div className="contact-box">
              <div>Woojin Lee</div>
              <div>Postdoctoral Research Associate</div>
              <div>University of Southern California</div>
              <div>
                <a href="mailto:woojinl@usc.edu">woojinl@usc.edu</a>
              </div>
              <div>
                <a
                  href="https://github.com/woojinlee-drug-discovery"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                ·{" "}
                <a
                  href="https://www.linkedin.com/in/woojin-lee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}