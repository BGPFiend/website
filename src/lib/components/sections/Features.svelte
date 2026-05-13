<script>
  import Card, { Content, Actions, ActionButtons } from '@smui/card'
  import Button, { Label } from '@smui/button'
  import performanceImg from '$lib/assets/vite.svg'

  const features = [
    {
      name: 'High Performance',
      description:
        'Collector-side preprocessing that drastically reduces data transfer. Prefix queries drop from 325 MB to under 4 KB compared to state of the art tools.',
      features: [
        'Filter by prefix, community, or peer AS at the collector side',
        'Parquet support for sub-second prefix query response times',
        'Reduces consumer-side download volume by up to 96%',
        'Systematic duration gains across all query types',
      ],
      img: performanceImg,
    },
    {
      name: 'Easy to Use',
      description:
        'HTTP-native BGP data access via generic tools like curl or a web browser - no specialized MRT parsers required.',
      features: [
        'Query BGP data over standard HTTP',
        'Compatible with RIPE RIS and RouteViews archives',
        'Supports prefix, community, and peer AS queries',
        'Uniform query interface over underlying archives',
      ],
      lang: 'bash',
      code: `curl bgpfiend/parquet?k=prefix
curl bgpfiend/mrt?k=prefix
bgpreader -k prefix`,
      linkLabel: 'Documentation',
      link: '#',
    },
    {
      name: 'Backward Compatible',
      description:
        'Modernizes BGP data access without replacing existing archives or disrupting established consumer workflows.',
      features: [
        'Preserves existing MRT formats and trust assumptions',
        'Incremental adoption of improved indexing mechanisms',
        'Supports alternative archival formats such as Parquet',
        'Complements bulk-download and streaming pipelines',
      ],
      lang: 'bash',
      code: `curl bgpfiend/parquet?k=prefix
curl bgpfiend/mrt?k=prefix
bgpreader -k prefix`,
      linkLabel: 'Documentation',
      link: '#',
    },
    {
      name: 'Open & Extensible',
      description:
        'A foundation for scalable BGP analysis, with planned support for broader collector deployment, richer indexing, and additional query primitives.',
      features: [
        'Broader deployment across route collectors planned',
        'Extensible with richer indexing and caching',
        'Additional query primitives and data sources on roadmap',
        'Research-backed by IIJ, RouteViews, RIPE NCC, and CAIDA',
      ],
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
