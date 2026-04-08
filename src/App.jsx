export default function App() {
  return (
    <main style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '80px 24px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '12px' }}>Woojin Lee</h1>
      <p style={{ fontSize: '20px', color: '#64748b' }}>
        Computational Chemistry in Drug Discovery and GPCR Research
      </p>

      <section style={{ marginTop: '48px' }}>
        <h2>About</h2>
        <p>
          I am a postdoctoral researcher working at the intersection of
          computational chemistry, structural biology, and GPCR-focused drug discovery.
        </p>
      </section>

      <section style={{ marginTop: '48px' }}>
        <h2>Research</h2>
        <p>
          My interests include molecular dynamics simulations, GPCR structure and dynamics,
          structure-based drug discovery, and scientific workflow development.
        </p>
      </section>

      <section style={{ marginTop: '48px' }}>
        <h2>Links</h2>
        <ul>
          <li><a href="https://github.com/woojinlee-drug-discovery" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/woojin-lee/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </section>
    </main>
  )
}