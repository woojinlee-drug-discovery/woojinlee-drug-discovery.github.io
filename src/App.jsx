const resume = "/WOOJIN_LEE_RESUME.pdf";
const scholar = "https://scholar.google.com/citations?hl=en&user=mln2p5EAAAAJ";
const studies = [
  ["Virtual screening", "Selecting DP1 ligands for synthesis", "Which compounds should advance to experimental testing?", "I led a V-SYNTHES screen of the three-trillion-compound Enamine REAL chemical space. Using structure-based screening and cheminformatics, I prioritized 275 candidates for synthesis and experimental evaluation.", "Manuscript in preparation · Co-first author"],
  ["Structural pharmacology", "Ligand recognition and activation in DP1", "Which interactions help explain how ligands modulate the receptor?", "I combined cryo-EM structures, molecular docking, and all-atom molecular dynamics to investigate ligand recognition. We identified a DP1-specific activation switch in the sodium allosteric pocket and a stabilizing network between transmembrane helix 6 and helix 8.", "Nature Communications · 2025"],
  ["Protein complex modeling", "How M2R engages β-arrestin-1", "How does the receptor’s third intracellular loop interact with arrestin?", "I incorporated 65 experimental crosslink restraints into M2R–β-arrestin-1 models using RosettaCM and ICM-Pro. I analyzed 36 µs of all-atom GROMACS simulations to characterize how the loop interacts with arrestin over time.", "Manuscript under review · Co-first author"],
  ["Quantum chemistry", "Reaction pathways of short-lived intermediates", "Which steps determine reaction rates and product selectivity?", "In the Houk and Nelson labs at UCLA, I used density functional theory and dynamics simulations to study carbocations, radicals, and conformationally complex transition states. Working with experimental collaborators, I identified competing pathways that explained observed reactivity and guided follow-up experiments.", "Gaussian · ORCA · Progdyn"]
];
const coFirst = <em>[<strong>#</strong>Co-first authors]</em>;
function References() {
  return <ul className="citations">
    <li><strong>Lee, W.<sup>#</sup></strong>; Raskovalov, A.<sup>#</sup>; <em>et al.</em> “Structure-based discovery of prostaglandin D2 receptor 1 modulators via virtual screening of trillion-scale chemical space,” <em>Manuscript in preparation</em> {coFirst}</li>
    <li>Müller, T.<sup>#</sup>; <strong>Lee, W.<sup>#</sup></strong>; <em>et al.</em> “Phosphorylation site topology governs the functional dynamics of arrestin recruitment to GPCRs,” <em>Manuscript under review</em> {coFirst}</li>
    <li>Davoudinasab, B.; Raskovalov, A.; <strong>Lee, W.</strong>; <em>et al.</em> “Structural insights into the mechanism of activation and inhibition of the prostaglandin D2 receptor 1,” <em>Nat. Commun.</em>, <strong>2025</strong>, <em>16</em>, 8944.</li>
    <li><strong>Lee, W.</strong>; <em>et al.</em> “Molecular Dynamics of the Norbornyl Cation in Solution and Its Generation in Winstein–Trifan Solvolysis: The Timing of Sigma Bridging,” <em>J. Org. Chem.</em>, <strong>2024</strong>, <em>89</em>, 1140–1146. [<em>ACS Editors’ Choice</em>]</li>
    <li>Galeotti, M.<sup>#</sup>; <strong>Lee, W.<sup>#</sup></strong>; <em>et al.</em> “Radical and Cationic Pathways in C(<em>sp</em><sup>3</sup>)–H Bond Oxygenation by Dioxiranes of Bicyclic and Spirocyclic Hydrocarbons Bearing Cyclopropane Moieties,” <em>J. Am. Chem. Soc.</em>, <strong>2023</strong>, <em>145</em>, 24021–24034. {coFirst}</li>
  </ul>;
}
function ScreeningFigure() {
  return <figure>
    <div className="figurehead"><span>DP1 screening results</span><span>V-SYNTHES</span></div>
    <div className="numeral">29</div><p>Experimentally validated DP1 modulators</p>
    <svg viewBox="0 0 360 45" role="img" aria-label="23 antagonists and 6 agonists">
      {Array.from({length: 29}, (_, i) => <circle key={i} cx={9 + (i % 15) * 24} cy={10 + Math.floor(i / 15) * 24} r="6" fill={i < 23 ? "#9ce9ca" : "#ffbb77"}/>)}
    </svg>
    <figcaption><span><i/>23 antagonists</span><span><i/>6 agonists</span></figcaption>
  </figure>
}
export default function App(){
 return <><a className="skip" href="#main">Skip to content</a><header><div className="wrap top"><a className="brand" href="#main">Woojin Lee<span>, Ph.D.</span></a><nav aria-label="Main navigation"><a href="#projects">Research</a><a href="#publications">Publications</a><a href="#about">Background</a><a href="#contact">Contact</a></nav></div></header>
 <main id="main" className="wrap"><section className="hero"><div><div className="label">Computational Chemist</div><h1>Structure-based<br/>drug discovery</h1><p className="intro">I’m Woojin Lee, a postdoctoral research associate in the Katritch Lab at USC. I use GPCR structures to guide virtual screening and select small molecules for synthesis and testing. In a screen of a three-trillion-compound library, I prioritized 275 candidates and contributed to the discovery of 29 experimentally validated DP1 modulators. I also use molecular dynamics to study how GPCRs recognize ligands and recruit signaling proteins such as arrestin.</p><div className="actions"><a className="btn" href="#projects">Explore research</a><a className="outline" href={resume}>Résumé (PDF)</a></div></div><ScreeningFigure/></section>
 <section id="projects"><h2>Selected research</h2><div className="grid">{studies.map(([area,title,question,body,result])=><article key={title}><div className="label">{area}</div><h3>{title}</h3><p className="question">{question}</p><p>{body}</p><div className="result">{result}</div></article>)}</div></section>
 <section id="publications"><div className="sectionhead"><h2>Publications and manuscripts</h2><a href={scholar}>Full list on Google Scholar</a></div><References/></section>
 <section id="about" className="bio"><h2>Research background</h2><div>
 <p><strong>University of Southern California · Postdoctoral Research Associate, 2023–present.</strong> In the Katritch Lab, I work with structural biologists and pharmacologists on GPCR ligand discovery, receptor activation, and arrestin recruitment.</p>
 <p><strong>UCLA · Ph.D. in Chemistry, 2023.</strong> With Kendall N. Houk and Hosea M. Nelson, I studied the reactivity of short-lived intermediates. As a visiting researcher at Caltech in 2021–2022, I modeled cationic cascades to identify rearrangement mechanisms.</p>
 <p><strong>Genentech · Medicinal Chemist Intern, 2017.</strong> I designed and optimized synthetic routes for dendrimer–drug conjugates and an active pharmaceutical ingredient.</p>
 <p><strong>UC Berkeley · B.S. in Chemistry, 2016.</strong> In F. Dean Toste’s lab, I optimized the catalytic conversion of glucarate to adipate through synthesis, mechanistic studies, and chemical characterization.</p>
 </div></section>
 <section id="research" className="bio"><h2>Computational methods</h2><div>
 <p><strong>Compound selection.</strong> I use V-SYNTHES, molecular docking, and protein–ligand interaction analysis to prioritize screening hits. Python and RDKit support molecular descriptor calculations and physicochemical property analysis.</p>
 <p><strong>Molecular modeling.</strong> My toolkit includes ICM-Pro and RosettaCM for structural modeling, CHARMM-GUI and GROMACS for molecular dynamics, and MDTraj and MDAnalysis for trajectory analysis.</p>
 <p><strong>Quantum chemistry and computing.</strong> I use Gaussian, ORCA, Progdyn, and xTB–CREST for reaction-pathway and conformational analysis. I run parallel and GPU-accelerated workflows on Linux clusters using Slurm.</p>
 </div></section>
 <section className="bio"><h2>Presentations and honors</h2><div>
 <p>I presented the DP1 discovery campaign at ACS Fall 2026 in Chicago, where it was selected for Sci-Mix and presented in the COMP division. The work received a poster award at the 2026 KASBP Spring Symposium in San Diego.</p>
 <p>Other honors include selection for the Hanwha TotalEnergies Industry-Sponsored Scholarship (2023), the UCLA Excellence in Chemistry Fellowship (2018–2023), and the UCLA Graduate Dean’s Scholar Award (2018).</p>
 </div></section></main>
 <footer id="contact"><div className="wrap foot"><div><div className="label">Contact</div><h2>Woojin Lee, Ph.D.</h2><p>Katritch Lab · University of Southern California · Los Angeles</p></div><div><a className="email" href="mailto:woojinl@usc.edu">woojinl@usc.edu</a><div className="links"><a href={resume}>Résumé</a><a href="https://github.com/woojinlee-drug-discovery">GitHub</a><a href="https://www.linkedin.com/in/woojin-lee/">LinkedIn</a></div></div></div></footer></>
}
