<script>
  import logo from "$lib/assets/bgpfiend_logo.png"
  import { scrollTo } from "../../scroll.js"

  const workflowSteps = [
    {
      step: "Step 1",
      title: "Register for a token",
      description: "Register for a free API token to access our BGP toolkit.",
      link: "#tools",
      linkLabel: "API token registration →",
    },
    {
      step: "Step 2",
      title: "Access our toolkit",
      description: "Stream, parse, and apply filters for getting BGP data.",
      link: "#tools",
      linkLabel: "Read our docs →",
    },
  ]

  const stats = [
    { value: "70+", label: "BGP Collectors" },
    { value: "1000+", label: "Full-feed Peers" },
    { value: "<5min", label: "Data Delay" },
    { value: "GPL-3.0", label: "Licensed" },
  ]
</script>

<section id="hero" class="hero">
  <div class="grid-bg" aria-hidden="true"></div>
  <div class="glow glow-1" aria-hidden="true"></div>
  <div class="glow glow-2" aria-hidden="true"></div>

  <div class="hero-content">
    <img src={logo} alt="BGPFiend" class="brand-logo" />

    <h1 class="hero-title">
      <span class="title-line">The Open-Source</span>
      <span class="title-accent">BGP Data Toolkit</span>
    </h1>

    <p class="hero-sub">
      High-performance tools for BGP data discovery, parsing, and investigation.
      Built by network researchers, for every network professional or
      enthusiast.
    </p>

    <div class="hero-actions">
      <button class="btn btn--primary" onclick={() => scrollTo("#quick-start")}>
        Get Started Now
      </button>
      <a
        class="btn btn--outline"
        href="https://github.com/BGPFiend"
        target="_blank"
        rel="noopener"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
        Explore GitHub
      </a>
    </div>

    <div class="workflow">
      {#each workflowSteps as step, i}
        <div class="workflow-step">
          <div class="step-number">{step.step}</div>
          <div class="step-body">
            <div class="step-header">
              <span class="step-title">{step.title}</span>
            </div>
            <p class="step-desc">{step.description}</p>
            <a
              class="step-link"
              href={step.link}
              onclick={(e) => {
                e.preventDefault()
                scrollTo(step.link)
              }}
            >
              {step.linkLabel}
            </a>
          </div>
        </div>
        {#if i < workflowSteps.length - 1}
          <div class="workflow-arrow">→</div>
        {/if}
      {/each}
    </div>

    <div class="stats-row">
      {#each stats as stat}
        <div class="stat">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 24px 60px;
    overflow: hidden;
    background: #ffffff;
  }

  .brand-logo {
    height: 300px;
    width: auto;
  }

  .grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(201, 43, 12, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201, 43, 12, 0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(
      ellipse 80% 80% at 50% 50%,
      black 30%,
      transparent 100%
    );
  }

  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .glow-1 {
    width: 600px;
    height: 400px;
    background: rgba(201, 43, 12, 0.08);
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .glow-2 {
    width: 400px;
    height: 300px;
    background: rgba(232, 111, 0, 0.07);
    bottom: 20%;
    right: 10%;
  }

  .hero-content {
    position: relative;
    max-width: 900px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .hero-title {
    font-family: "Space Grotesk", system-ui, sans-serif;
    font-size: clamp(40px, 7vw, 72px);
    font-weight: 800;
    line-height: 1.1;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title-line {
    color: #1a1a2e;
  }

  .title-accent {
    background: linear-gradient(135deg, #c92b0c, #e86f00, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: clamp(15px, 2vw, 18px);
    color: #1a1a2e;
    max-width: 580px;
    line-height: 1.7;
    margin: 0;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    text-decoration: none;
    font-family: inherit;
  }

  .btn--primary {
    background: #c92b0c;
    color: white;
    box-shadow: 0 0 20px rgba(201, 43, 12, 0.25);
  }

  .btn--primary:hover {
    background: #a82209;
    box-shadow: 0 0 30px rgba(201, 43, 12, 0.4);
    transform: translateY(-1px);
  }

  .btn--outline {
    background: transparent;
    color: #a82209;
    border: 1px solid #a82209;
  }

  .btn--outline:hover {
    color: #c92b0c;
    border-color: #c92b0c;
    transform: translateY(-1px);
    background: #ffffff;
  }

  .workflow {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .workflow-step {
    flex: 1;
    min-width: 400px;
    max-width: 520px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 20px;
    text-align: left;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition:
      border-color 0.2s,
      transform 0.2s,
      box-shadow 0.2s;
  }

  .workflow-step:hover {
    border-color: rgba(201, 43, 12, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .step-number {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #c92b0c;
    margin-bottom: 8px;
    font-family: "JetBrains Mono", monospace;
  }

  .step-header {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 8px;
  }

  .step-title {
    font-weight: 700;
    font-size: 15px;
    color: #1a1a2e;
  }

  .step-desc {
    font-size: 13px;
    color: #1a1a2e;
    line-height: 1.6;
    margin: 0 0 10px;
  }

  .step-link {
    font-size: 12px;
    font-weight: 600;
    color: #c92b0c;
    text-decoration: none;
    display: block;
  }

  .step-link:hover {
    text-decoration: underline;
  }

  .workflow-arrow {
    font-size: 20px;
    color: #1a1a2e;
    padding-top: 36px;
    flex-shrink: 0;
  }

  .stats-row {
    display: flex;
    gap: 120px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .stat-value {
    font-family: "JetBrains Mono", monospace;
    font-size: 28px;
    font-weight: 800;
    color: #c92b0c;
  }

  .stat-label {
    font-size: 13px;
    color: #1a1a2e;
    font-weight: 500;
  }
</style>
