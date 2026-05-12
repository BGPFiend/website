<script>
  import Card, { Content, Actions, ActionButtons } from '@smui/card'
  import Button, { Label } from '@smui/button'
  import performanceImg from '$lib/assets/vite.svg'

  const features = [
    {
      name: 'High Performance',
      description:
        'Built in Rust for maximum speed. Comparable to C-based implementations like bgpdump.',
      features: [
        'Parse local and remote MRT files',
        'Early-exit prefix and AS path filters',
        'Rust, Python, and CLI interfaces',
        'RFC 6396 and RFC 6397 compliant',
      ],
      img: performanceImg,
    },
    {
      name: 'Easy to Use',
      description:
        'Ergonomic SDKs that get you started with just a few lines of code. Battery-included with remote file support.',
      features: [
        '70+ collectors indexed in real-time',
        'Query by time window and collector',
        'REST API and Rust/Python SDKs',
        'Deterministic, reproducible results',
      ],
      lang: 'bash',
      code: `bgpflux \\
--start "2025-01-15T12:00:00Z" \\
--end "2025-01-15T13:00:00Z" \\
-c route-views.wide,rrc04 \\
-t update`,
      linkLabel: 'Documentation',
      link: '#',
    },
    {
      name: 'Actively Maintained',
      description:
        'Regular updates, bug fixes, and support for the latest BGP RFCs. Community-driven development.',
      features: [
        'Live stream monitoring from collectors',
        'Built-in RPKI route-origin validation',
        'AS path analysis and leak detection',
        'JSON/CSV output for pipeline integration',
      ],
      lang: 'bash',
      code: `bgpflux \\
--start "2025-01-15T12:00:00Z" \\
--end "2025-01-15T13:00:00Z" \\
-c route-views.wide,rrc04 \\
-t update`,
      linkLabel: 'Documentation',
      link: '#',
    },
    {
      name: 'Open Source',
      description:
        'GPL-3.0 licensed and completely open source. Use it anywhere, contribute back, or build commercial products.',
      features: [],
      img: performanceImg,
      linkLabel: 'GitHub',
      link: '#',
    },
  ]
</script>

<section id="features" class="section">
  <div class="container">
    <div class="header">
      <h1 class="section-title">Why BGPFiend?</h1>
      <h2 class="section-caption">
        Built for performance, designed for simplicity
      </h2>
    </div>

    <div class="feature-list">
      {#each features as feature, i}
        <div class="feature-row" class:reversed={i % 2 === 1}>
          <Card class="feature-card">
            <Content class="feature-content">
              <h3 class="feature-name">{feature.name}</h3>
              <p class="feature-desc">{feature.description}</p>
              <ul class="feature-features">
                {#each feature.features as feat}
                  <li>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {feat}
                  </li>
                {/each}
              </ul>
            </Content>
            {#if feature.linkLabel && feature.link}
              <Actions class="feature-actions">
                <ActionButtons>
                  <a
                    href={feature.link}
                    class="btn btn--primary"
                    target="_blank"
                  >
                    {feature.linkLabel}
                  </a>
                </ActionButtons>
              </Actions>
            {/if}
          </Card>

          {#if feature.img}
            <img src={feature.img} alt={feature.name} class="feature-image" />
          {:else}
            <div class="feature-code-panel">
              <div class="lang-badge">{feature.lang}</div>
              <pre class="feature-code"><code>{feature.code}</code></pre>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .section {
    padding: 100px 24px;
    position: relative;
  }

  .section-title {
    font-size: clamp(24px, 4vw, 48px);
    font-weight: 700;
    color: #c92b0c;
    text-align: center;
    font-family: 'Permanent Marker', cursive;
  }

  .section-caption {
    font-size: clamp(24px, 4vw, 38px);
    font-weight: 800;
    color: #1a1a2e;
    text-align: center;
    margin: 0 0 40px;
    line-height: 1.2;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .feature-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: stretch;
  }

  .feature-row.reversed {
    direction: rtl;
  }

  .feature-row.reversed > * {
    direction: ltr;
  }

  :global(.feature-card) {
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
    display: flex !important;
    flex-direction: column !important;
    direction: ltr;
  }

  :global(.feature-content) {
    padding: 2rem !important;
    flex: 1 !important;
  }

  :global(.feature-actions) {
    padding: 0 2rem 1.5rem !important;
  }

  .feature-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 0.25rem;
    margin-top: 0.5rem;
  }

  .feature-desc {
    font-size: 0.9375rem;
    color: #1a1a2e;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .feature-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .feature-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #1a1a2e;
  }

  .feature-features li svg {
    color: #c92b0c;
    flex-shrink: 0;
  }

  .feature-image {
    height: 100%;
    align-self: center;
    justify-self: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 14px;
    border-radius: 8px;
    font-size: 15px;
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
    box-shadow: 0 0 24px rgba(201, 43, 12, 0.25);
  }

  .btn--primary:hover {
    background: #a82209;
    box-shadow: 0 0 36px rgba(201, 43, 12, 0.4);
  }

  /* Keep code panel dark */
  .feature-code-panel {
    background: #0f1117;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .lang-badge {
    padding: 0.6rem 1.25rem;
    background: #1a1a2e;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .feature-code {
    flex: 1;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 0;
  }

  .feature-code code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    line-height: 1.75;
    color: #cdd6f4;
    white-space: pre;
  }

  @media (max-width: 900px) {
    .feature-row,
    .feature-row.reversed {
      grid-template-columns: 1fr;
      direction: ltr;
    }

    .feature-row.reversed > * {
      direction: ltr;
    }
  }
</style>
