export default function App() {
  const projects = [
    {
      title: "DP1 Modulator Discovery",
      description:
        "Structure-based discovery integrating molecular dynamics simulations and giga-scale virtual screening for the DP1 receptor.",
    },
    {
      title: "GPCR–Arrestin Complex Modeling",
      description:
        "Crosslinking-guided modeling and structural interpretation of GPCR–arrestin assemblies with computational refinement.",
    },
    {
      title: "Scientific Workflow Development",
      description:
        "Python and HPC workflows for MD analysis, data processing, and reproducible computational chemistry pipelines.",
    },
  ];

  const publications = [
    "Nature Communications paper on DP1-related research (upcoming / selected work)",
    "Selected publications in JACS, Organic Letters, and Journal of Organic Chemistry",
    "Computational studies in GPCR structure, dynamics, and ligand discovery",
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
              Computational chemist building structure-guided strategies for
              GPCR drug discovery.
            </h1>
            <p>
              I work at the intersection of molecular dynamics, structural
              biology, and medicinal chemistry to understand receptor behavior
              and identify functionally meaningful ligands.
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
            <h3>Focus Areas</h3>
            <ul>
              <li>Computational chemistry</li>
              <li>GPCR structure and dynamics</li>
              <li>Molecular dynamics simulations</li>
              <li>Structure-based drug discovery</li>
              <li>Virtual screening</li>
              <li>Scientific Python workflows</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">About</div>
          <h2>Research profile</h2>
          <p>
            I am a postdoctoral researcher focused on computational chemistry in
            drug discovery, with particular interest in GPCR structure,
            dynamics, ligand recognition, and mechanism-driven modeling. My work
            combines atomistic simulations, structure-based modeling, and
            workflow automation to generate experimentally useful hypotheses.
          </p>
        </section>

        <section id="research" className="section">
          <div className="section-label">Research</div>
          <h2>What I work on</h2>

          <div className="grid three">
            <div className="card">
              <h3>Molecular Dynamics</h3>
              <p>
                Protein dynamics, water networks, conformational transitions,
                and interaction analysis.
              </p>
            </div>

            <div className="card">
              <h3>Structure-Based Design</h3>
              <p>
                Receptor-informed ligand discovery using docking, refinement,
                and screening pipelines.
              </p>
            </div>

            <div className="card">
              <h3>Scientific Computing</h3>
              <p>
                Python-driven analysis, reproducible workflows, and HPC-scale
                computation.
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
          <h2>Selected outputs</h2>

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
                I am interested in computational chemistry, GPCR biology,
                structure-based drug discovery, and collaborative scientific
                research.
              </p>
            </div>

            <div className="contact-box">
              <div>Woojin Lee</div>
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