export default function App() {
  const projects = [
    {
      title: "DP1 Drug Discovery via Giga-Scale Virtual Ligand Screening",
      description:
        "Led the giga-scale virtual screening of ~3 trillion make-on-demand compounds using the V-SYNTHES and ICM-Pro. Prioritized candidates for synthesis and in vitro evaluation, directly enabling the discovery of 23 novel DP1 modulators (20 antagonists, 3 agonists) with best potencies reaching an IC50 of 1.1 µM.",
    },
    {
      title: "Mechanistic Studies & Structural Dynamics of DP1",
      description:
        "Collaborated with cross-functional structural biology teams to define DP1 ligand recognition and activation mechanisms. Integrated molecular docking and all-atom MD simulations to elucidate critical structural features, including a DP1-specific activation switch in the sodium allosteric pocket and a stabilizing TM6–helix 8 network.",
    },
    {
      title: "M2R–β-Arrestin-1 Complex Modeling",
      description:
        "Built all-atom models of the human M2R–β-arrestin-1 complex using RosettaCM and ICM-Pro, translated 65 experimental crosslinking pairs into structural modeling, and evaluated the interaction of the proteins with 36 µs of unbiased MD simulations in GROMACS.",
    },
  ];

  const publications = [
    "Müller, T.; Lee, W.; et al. Phosphorylation site topology governs the functional dynamics of arrestin recruitment to GPCRs. Manuscript under review.",
    "Davoudinasab, B.; Raskovalov, A.; Lee, W.; et al. Structural Insights into the Mechanism of Activation and Inhibition of the Prostaglandin D2 receptor 1. Nature Communications (2025).",
    "Lee, W.; Benton, T.; Sengupta, A.; Houk, K. N. Molecular Dynamics of the Norbornyl Cation and Its Generation in Winstein–Trifan Solvolysis: The Timing of Sigma-Bridging. Journal of Organic Chemistry (2024).",
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
            <div className="pill">Portfolio</div>
            <h1>
              Computational Chemist in GPCR Drug Discovery
            </h1>
            <p>
              I develop structure-guided computational strategies for ligand discovery and receptor mechanism analysis. By bridging the gap between high-performance computing and wet-lab chemistry, I translate massive-scale data into experimentally actionable hypotheses.
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
              <li>5+ years in computational chemistry and HPC workflows for CADD, MD, and QM simulations</li>        
              <li>Discovered 23 novel GPCR DP1 modulators via giga-scale virtual ligand screening (~3 trillion compounds)</li>
              <li>Industry small-molecule drug discovery experience at Genentech</li>
              <li>Ph.D. in Chemistry from UCLA and B.S. from UC Berkeley</li>
              <li>U.S. Permanent Resident</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">About</div>
          <h2>Research profile</h2>
          <p>
            I am a computational chemist with a Ph.D. from UCLA and over five years of experience building high-performance computing workflows for drug discovery, structural biology, and computational organic chemistry. Recently, my work as a Postdoctoral Researcher at USC has focused heavily on GPCR systems. This includes leading a 3-trillion-compound virtual screening that successfully identified 23 novel DP1 ligands and modeling the complex M2R–β-arrestin-1 interface.
          </p>
          <p>
            Beyond my current focus on GPCRs and computer-aided drug discovery, my foundation is deeply rooted in physical organic chemistry and quantum mechanics. Because my early career included hands-on synthetic organic chemistry—both in academia and during an internship at Genentech—I approach computational problems with a wet-lab mindset, ensuring my virtual models prioritize real-world synthetic viability.
          </p>
          <p>
            I thrive at the intersection of disciplines. By integrating Python, Linux, and advanced AI structural modeling (such as AlphaFold and Rosetta), I operate as a full-stack scientific programmer capable of building customized pipelines. Whether collaborating with international structural biologists or guiding synthetic chemists, my ultimate goal is breaking down complex computational studies into intuitive, actionable chemical concepts to accelerate therapeutic development.
          </p>
        </section>

        <section id="research" className="section">
          <div className="section-label">Research</div>
          <h2>What I work on is:</h2>

          <div className="grid three">
            <div className="card">                    
              <h3>Structure-Based Drug Discovery</h3>
              <p>
                Large-scale virtual screening, docking, hit prioritization, and
                computational support for early-stage ligand discovery and
                optimization.
              </p>
            </div>

            <div className="card">              
              <h3>GPCR Structure and Dynamics</h3>
              <p>
                Mechanistic analysis of receptor activation, ligand recognition,
                sodium allosteric effects, and arrestin engagement using
                atomistic modeling and simulation.
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