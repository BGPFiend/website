<script>
  import Card, { Content, Actions, ActionButtons } from "@smui/card"
  import Button, { Label } from "@smui/button"
</script>

<section id="playground" class="section">
  <div class="container">
    <div class="header">
      <h1 class="section-title">Playground</h1>
      <h2 class="section-caption">Play with BGPFiend</h2>
      <p class="section-sub">
        For hands-on exploration, check out our interactive playground where you
        can run queries against real BGP data and see the results in real-time.
      </p>
    </div>

    <div class="tool-list">
      <div class="tool-row">
        <Card class="tool-card">
          <Content class="tool-content">
            <div class="tool-meta">
              <span class="tool-tag">v0.15.0</span>
            </div>
            <h3 class="tool-name">Test</h3>
            <p class="tool-subtitle">123</p>
            <p class="tool-desc">test</p>
          </Content>
          <Actions class="tool-actions">
            <ActionButtons>
              <Button href="#" target="_blank" variant="raised" color="primary">
                <Label>Documentation</Label>
              </Button>
            </ActionButtons>
          </Actions>
        </Card>

        <div class="tool-code-panel">
          <div class="lang-badge">JSON</div>
          <pre class="tool-code"><code>foo</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: 100px 24px;
    position: relative;
  }

  .header {
    text-align: center !important;
  }

  .section-title {
    font-size: clamp(24px, 4vw, 48px);
    font-weight: 700;
    color: #c92b0c;
    text-align: center;
  }

  .section-caption {
    font-size: clamp(24px, 4vw, 38px);
    font-weight: 800;
    color: #1a1a2e;
    text-align: center;
    margin: 0 0 40px;
    line-height: 1.2;
  }

  .section-sub {
    font-size: clamp(15px, 2vw, 18px);
    color: #1a1a2e;
    text-align: center;
    max-width: 540px;
    line-height: 1.7;
    margin: 0 auto 24px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .tool-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .tool-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: stretch;
  }

  :global(.tool-card) {
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
    display: flex !important;
    flex-direction: column !important;
  }

  :global(.tool-content) {
    padding: 2rem !important;
    flex: 1 !important;
  }

  :global(.tool-actions) {
    padding: 0 2rem 1.5rem !important;
  }

  .tool-meta {
    margin-bottom: 0.5rem;
  }

  .tool-tag {
    font-size: 0.72rem;
    font-weight: 600;
    font-family: "JetBrains Mono", monospace;
    color: #c92b0c;
    background: rgba(201, 43, 12, 0.08);
    padding: 0.2rem 0.55rem;
    border-radius: 4px;
  }

  .tool-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 0.25rem;
    margin-top: 0.5rem;
  }

  .tool-subtitle {
    font-size: 0.875rem;
    color: #9ca3af;
    margin-bottom: 1rem;
  }

  .tool-desc {
    font-size: 0.9375rem;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  /* Keep code panel dark */
  .tool-code-panel {
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
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .tool-code {
    flex: 1;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 0;
  }

  .tool-code code {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.82rem;
    line-height: 1.75;
    color: #cdd6f4;
    white-space: pre;
  }

  @media (max-width: 900px) {
    .tool-row {
      grid-template-columns: 1fr;
      direction: ltr;
    }
  }
</style>
