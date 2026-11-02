import Interactions from "@/components/Interactions";

/* Splits a word into letters that rise in one after another and wiggle on hover */
function letters(word, offset) {
  return [...word].map((c, i) => (
    <span key={i} className="ch" style={{ animationDelay: `${(offset + i) * 40}ms` }}>{c}</span>
  ));
}

/* Fixed pseudo-random values so server and browser render the same pills */
const PILL_COLORS = ["var(--accent)", "var(--mark)", "var(--ink)"];
const PILLS = Array.from({ length: 24 }, (_, k) => ({
  "--c": PILL_COLORS[k % 3],
  "--r": `${((k * 73) % 160) - 80}deg`,
  "--y": `${((k * 37) % 16) - 8}px`,
}));

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap">
          <a className="logo" href="#top"><i></i>riddhesh</a>
          <div className="navlinks">
            <a href="#work">work</a>
            <a href="#path">path</a>
            <a href="#terminal">terminal</a>
            <a href="#contact" className="keep">say hi</a>
            <button className="toggle" id="theme" type="button" aria-label="Switch light or dark theme">◐</button>
          </div>
        </div>
      </nav>

      <main id="top">
        <div className="wrap">
          <header className="hero">
            <div className="kicker"><span className="live"></span> Full stack developer · currently shipping at Accenture</div>
            <h1 id="name" aria-label="Riddhesh Mali"><span className="word" aria-hidden="true">{letters("Riddhesh", 0)}</span> <span className="word" aria-hidden="true"><em>{letters("Mali", 8)}</em>{letters(".", 12)}</span></h1>
            <div className="hero-row">
              <p className="lede">I turn ideas into <span className="mark">web products that flow</span>, from React front ends to Node.js engines and the AI in between.</p>
              <div className="ctas">
                <a className="btn primary" href="#work">See my work ↓</a>
                <a className="btn" href="#contact">Get in touch</a>
              </div>
            </div>

            <div className="flow" id="flow" aria-label="Interactive diagram of how I work: me, idea, design, AI assist, build, ship. Nodes can be dragged.">
              <svg id="edges" aria-hidden="true"></svg>
              <canvas id="confetti" aria-hidden="true"></canvas>
              <div className="flow-hint"><b>how I work</b> · drag the nodes, then click ship</div>
              <div className="flow-tag">workflow.run() · status: <span style={{ color: "#22c55e" }}>running</span></div>
              <div className="node me" data-id="me"><img src="/photo.jpg" alt="Riddhesh Mali" /><div><small>start</small><strong>Hi, I'm Riddhesh</strong></div></div>
              <div className="node" data-id="idea"><span className="ic">01</span><div><small>input</small><strong>Your idea</strong></div></div>
              <div className="node" data-id="design"><span className="ic">02</span><div><small>with designers</small><strong>Design &amp; UX</strong></div></div>
              <div className="node ai" data-id="ai"><span className="ic">AI</span><div><small>decision node</small><strong>LLM assist</strong></div></div>
              <div className="node" data-id="build"><span className="ic">03</span><div><small>React · Node · SQL</small><strong>Build</strong></div></div>
              <div className="node ship" data-id="ship" role="button" tabIndex="0"><span className="ic">↗</span><div><small>click me</small><strong>Ship it</strong></div></div>
            </div>
          </header>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            <span>React</span><span>Next.js</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Redux</span><span>Tailwind</span><span>AWS</span><span>LLM pipelines</span><span>C++</span>
            <span>React</span><span>Next.js</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Redux</span><span>Tailwind</span><span>AWS</span><span>LLM pipelines</span><span>C++</span>
          </div>
        </div>

        <div className="wrap">
          <section id="about">
            <div className="about">
              <div className="about-text">
                <span className="eyebrow">{'// about'}</span>
                <h2 style={{ marginBottom: "24px" }}>A builder who likes both ends of the stack.</h2>
                <p>I'm a computer engineer from Sinhgad College, Pune, now building full stack features at Accenture. I like clean component systems, sturdy backends and interfaces that feel quick.</p>
                <p>Lately I've been deep in <span className="mark">AI workflow tooling</span>: engines that run reliably, recover from crashes and don't fall for prompt injection.</p>
              </div>
              <div className="stats">
                <div className="stat"><b data-count="9.26" data-dec="2">9.26</b><span>CGPA, B.E. Computer Engineering</span></div>
                <div className="stat"><b data-count="3">3</b><span>product teams shipped with</span></div>
                <div className="stat"><b data-count="100" data-suffix="+">100+</b><span>DSA problems solved</span></div>
                <div className="stat"><b data-count="25" data-suffix="+">25+</b><span>integration tests guarding Relay</span></div>
              </div>
            </div>
          </section>

          <section id="work">
            <div className="sec-head">
              <div><span className="eyebrow">{'// selected work'}</span><h2>Things I've built.</h2></div>
              <p>Hover a card to wake it up. Each one opens the live site or the code.</p>
            </div>
            <div className="projects">
              <a className="card tilt" href="https://github.com/Riddhesh1009/relay-capstone" target="_blank" rel="noopener">
                <span className="go">→</span>
                <div className="viz v-relay" aria-hidden="true">
                  <div className="n">in</div><div className="e"></div><div className="n d"><span>AI</span></div><div className="e"></div><div className="n">✓</div><div className="e"></div><div className="n">out</div>
                  <div className="lease">lease renewed · exactly-once ✓</div>
                </div>
                <div className="card-body">
                  <div className="card-top"><h3>Relay</h3><span className="num">01 / AI orchestration</span></div>
                  <p>A workflow engine for branching, typed flows with AI decision nodes. It survives crashes mid-run and resumes exactly once, and approval gates stop prompt-injection tricks.</p>
                  <ul className="chips"><li>Node.js</li><li>Express</li><li>PostgreSQL</li><li>JSON Schema</li></ul>
                </div>
              </a>

              <a className="card tilt" href="http://jaahir-suchna-frontend.s3-website.ap-south-1.amazonaws.com/dashboard" target="_blank" rel="noopener">
                <span className="go">→</span>
                <div className="viz v-ocr" aria-hidden="true">
                  <div className="doc"><span className="t">PUBLIC NOTICE</span><i></i><i style={{ width: "80%" }}></i><i className="hl" style={{ width: "60%" }}></i><i></i><i style={{ width: "70%" }}></i><i className="hl" style={{ width: "45%" }}></i><i style={{ width: "85%" }}></i><div className="scan"></div></div>
                  <div className="json">{"{ "}<b>&quot;survey_no&quot;</b>: &quot;142/3&quot;,<br />&nbsp;&nbsp;<b>&quot;owner&quot;</b>: &quot;…&quot;{" }"}</div>
                </div>
                <div className="card-body">
                  <div className="card-top"><h3>Jaahir Suchna</h3><span className="num">02 / LLM + OCR</span></div>
                  <p>Snap a photo of a printed property notice and an LLM pipeline turns it into searchable data. No more manual typing, and anyone can look notices up.</p>
                  <ul className="chips"><li>React</li><li>LLM OCR</li><li>AWS S3</li></ul>
                </div>
              </a>

              <a className="card tilt" href="https://www.listmydrug.com/" target="_blank" rel="noopener">
                <span className="go">→</span>
                <div className="viz v-pills" aria-hidden="true">{PILLS.map((p, k) => <i key={k} className="pill" style={p} />)}</div>
                <div className="card-body">
                  <div className="card-top"><h3>List My Drug</h3><span className="num">03 / B2B commerce</span></div>
                  <p>A marketplace where pharmacies and distributors buy medicines in bulk, with fast search and filters. Its JSON-driven forms cut form build time by 30%.</p>
                  <ul className="chips"><li>Next.js</li><li>Formik</li><li>SQL</li></ul>
                </div>
              </a>

              <a className="card tilt" href="https://ksolare.com/" target="_blank" rel="noopener">
                <span className="go">→</span>
                <div className="viz v-sun" aria-hidden="true">
                  <div className="rays">{Array.from({ length: 12 }, (_, k) => <i key={k} style={{ transform: `rotate(${k * 30}deg)` }} />)}</div><div className="sun"></div>
                  <div className="panel"><i></i><i></i><i></i><i></i><i></i></div>
                </div>
                <div className="card-body">
                  <div className="card-top"><h3>Ksolare</h3><span className="num">04 / brand site</span></div>
                  <p>An animation-rich site for a Pune maker of solar grid-tie inverters and EV chargers.</p>
                  <ul className="chips"><li>Next.js</li><li>Tailwind</li></ul>
                </div>
              </a>
            </div>
          </section>

          <section id="path">
            <div className="sec-head">
              <div><span className="eyebrow">{'// the path so far'}</span><h2>Where I've shipped.</h2></div>
              <p>Three teams, one habit: leave the UI faster and less buggy than I found it.</p>
            </div>
            <ol className="path">
              <li className="job">
                <span className="when">2024 → now</span>
                <div><h3>Accenture<span>Packaged App Developer Analyst</span></h3><p>Full stack features end to end: React on the front, REST APIs behind, built with designers, backend engineers and PMs.</p></div>
                <div className="big">−25%<small>front-end defects</small></div>
              </li>
              <li className="job">
                <span className="when">2024</span>
                <div><h3>Kinu<span>React Developer Intern</span></h3><p>Interactive dashboards in React and MUI, plus export-document tools used by 100+ people.</p></div>
                <div className="big">−40%<small>manual reporting time</small></div>
              </li>
              <li className="job">
                <span className="when">2023</span>
                <div><h3>Touchmedia<span>Next.js Developer Intern</span></h3><p>Responsive pages with Next.js, NextUI and Tailwind, with Formik and Zustand keeping forms honest.</p></div>
                <div className="big">−20%<small>page load times</small></div>
              </li>
            </ol>
          </section>

          <section id="terminal">
            <div className="term-grid">
              <div>
                <span className="eyebrow">{'// poke around'}</span>
                <h2>Ask my terminal.</h2>
                <p style={{ color: "var(--muted)", margin: "16px 0 0", maxWidth: "36ch" }}>Type a command, or tap one below. There may be a hidden one or two.</p>
                <div className="cmds" id="cmds">
                  <button type="button">whoami</button><button type="button">skills</button><button type="button">projects</button><button type="button">wins</button><button type="button">contact</button><button type="button">clear</button>
                </div>
                <div className="skillgroups">
                  <div><h4>Languages</h4><ul className="chips"><li>JavaScript</li><li>C++</li><li>SQL</li><li>HTML5</li><li>CSS3</li></ul></div>
                  <div><h4>Frameworks &amp; data</h4><ul className="chips"><li>React</li><li>Next.js</li><li>Redux</li><li>Node.js</li><li>Express</li><li>Vite</li><li>Tailwind</li><li>MUI</li><li>PostgreSQL</li><li>MySQL</li></ul></div>
                  <div><h4>Tools</h4><ul className="chips"><li>GitHub</li><li>VS Code</li><li>Jira</li><li>Jenkins</li><li>Postman</li><li>AWS</li><li>Claude Code</li><li>OpenAI</li></ul></div>
                </div>
              </div>
              <div className="term" id="term">
                <div className="term-bar"><i></i><i></i><i></i><span>riddhesh@portfolio: ~</span></div>
                <div className="term-out" id="out" aria-live="polite"></div>
                <form className="term-in" id="tform" autoComplete="off">
                  <label htmlFor="tin">➜ ~</label>
                  <input id="tin" type="text" spellCheck="false" aria-label="Terminal command" placeholder="type help" />
                </form>
              </div>
            </div>
          </section>

          <section className="contact" id="contact">
            <span className="eyebrow">{"// let's build something"}</span>
            <h2>Got an idea?<br /><em>Let's ship it.</em></h2>
            <div className="mailrow">
              <a className="mail" href="mailto:riddheshmali109@gmail.com">riddheshmali109@gmail.com</a>
              <button className="copy" id="copy" type="button">copy email</button>
            </div>
            <div className="socials">
              <a href="https://github.com/Riddhesh1009" target="_blank" rel="noopener">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/riddheshmali109/" target="_blank" rel="noopener">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/Riddhesh1009/" target="_blank" rel="noopener">LeetCode ↗</a>
              <a href="Riddhesh_Mali_Resume.pdf" target="_blank" rel="noopener">Résumé ↗</a>
            </div>
            <p className="phone">or call +91 85529 78723</p>
          </section>

          <footer>
            <span>© 2026 Riddhesh Mali · Pune, India</span>
            <span>built with Next.js · hosted on Netlify</span>
          </footer>
        </div>
      </main>
      <Interactions />
    </>
  );
}
