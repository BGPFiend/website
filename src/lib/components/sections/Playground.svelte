<script>
  import Card, { Content, Actions, ActionButtons } from '@smui/card'

  const BASE_URL = 'http://localhost:8080'

  let startTime = $state('2025-01-01T00:00:00')
  let endTime = $state('2025-01-01T01:00:00')
  let collectors = $state('route-views.wide')
  let dataTypes = $state('updates')
  let peerAsn = $state(2497)

  let response = $state('')
  let loading = $state(false)

  function toRFC3339(dt) {
    // datetime-local omits seconds when they are :00 → pad before adding Z
    return (dt.length === 16 ? dt + ':00' : dt) + 'Z'
  }

  async function execute() {
    const params = new URLSearchParams({
      start_time: toRFC3339(startTime),
      end_time: toRFC3339(endTime),
      collectors,
      data_types: dataTypes,
    })

    if (peerAsn != null && !Number.isNaN(peerAsn)) {
      params.set('peer_asn', String(peerAsn))
    }

    const url = `${BASE_URL}/stream?${params.toString()}`
    loading = true
    response = ''

    try {
      const res = await fetch(url)
      const text = await res.text()
      response = text
    } catch (err) {
      console.error(err)
      response = `Error: ${err.message}`
    } finally {
      loading = false
    }
  }
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
              <span class="tool-tag">BGPFiend API v0.1</span>
            </div>
            <h3 class="tool-name">Stream BGP elements (line-by-line)</h3>
            <p class="tool-subtitle">GET /stream</p>
            <p class="tool-desc">
              A quick taste of what BGPFiend can do. Fill in the parameters and
              hit Execute to stream real BGP data. This covers the basics, for
              filtering, pagination, output formats, and the full API surface,
              head to the <a class="doc-link" href="/" target="_blank"
                >documentation</a
              >.
            </p>

            <form
              class="stream-form"
              onsubmit={(e) => {
                e.preventDefault()
                execute()
              }}
            >
              <div class="form-row">
                <label class="form-label" for="start-time">Start Time</label>
                <div class="input-wrapper">
                  <input
                    id="start-time"
                    class="form-input"
                    type="datetime-local"
                    step="1"
                    disabled={loading}
                    bind:value={startTime}
                  />
                  <span class="info-icon">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      ><path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      /></svg
                    >
                    <span class="tooltip"
                      >Start of the time range (e.g. "2025-01-01T00:00:00Z")</span
                    >
                  </span>
                </div>
              </div>
              <div class="form-row">
                <label class="form-label" for="end-time">End Time</label>
                <div class="input-wrapper">
                  <input
                    id="end-time"
                    class="form-input"
                    type="datetime-local"
                    step="1"
                    disabled={loading}
                    bind:value={endTime}
                  />
                  <span class="info-icon">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      ><path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      /></svg
                    >
                    <span class="tooltip"
                      >End of the time range (e.g. "2025-01-01T01:00:00Z").</span
                    >
                  </span>
                </div>
              </div>
              <div class="form-row">
                <label class="form-label" for="collectors">Collectors</label>
                <div class="input-wrapper">
                  <input
                    id="collectors"
                    class="form-input"
                    type="text"
                    placeholder="route-views.wide"
                    disabled={loading}
                    bind:value={collectors}
                  />
                  <span class="info-icon">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      ><path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      /></svg
                    >
                    <span class="tooltip"
                      >Route collectors to query (e.g. ["rrc00"]). Accepts a
                      single string, comma-separated, or array.</span
                    >
                  </span>
                </div>
              </div>
              <div class="form-row">
                <label class="form-label" for="data-types">Data Types</label>
                <div class="input-wrapper">
                  <input
                    id="data-types"
                    class="form-input"
                    type="text"
                    placeholder="updates"
                    disabled={loading}
                    bind:value={dataTypes}
                  />
                  <span class="info-icon">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      ><path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      /></svg
                    >
                    <span class="tooltip"
                      >Data types to include: "updates", "ribs", or both.
                      Accepts a single string, comma-separated, or array.</span
                    >
                  </span>
                </div>
              </div>
              <div class="form-row">
                <label class="form-label" for="peer-asn">Peer ASN</label>
                <div class="input-wrapper">
                  <input
                    id="peer-asn"
                    class="form-input"
                    type="number"
                    placeholder="2497"
                    disabled={loading}
                    bind:value={peerAsn}
                  />
                  <span class="info-icon">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      ><path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      /></svg
                    >
                    <span class="tooltip">Filter by peer AS number.</span>
                  </span>
                </div>
              </div>
            </form>
          </Content>
          <Actions class="tool-actions">
            <ActionButtons>
              <button
                onclick={execute}
                class="btn btn--primary"
                disabled={loading}
                type="button"
              >
                {loading ? 'Executing…' : 'Execute'}
              </button>
            </ActionButtons>
          </Actions>
        </Card>

        <div class="tool-code-container">
          <div class="tool-code-panel">
            <div class="lang-badge">Response</div>
            <pre class="tool-code"><code
                >{response || '// Click Execute to run the query'}</code
              ></pre>
          </div>
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
    font-family: 'JetBrains Mono', monospace;
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
    color: #1a1a2e;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 1rem;
  }

  .doc-link {
    font-weight: 600;
    color: #c92b0c;
    text-decoration: none;
  }

  .doc-link:hover {
    text-decoration: underline;
  }

  .tool-desc {
    font-size: 0.9375rem;
    color: #1a1a2e;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  /* Form */
  .stream-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 110px 1fr;
    align-items: center;
    gap: 0.75rem;
  }

  .form-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #1a1a2e;
    white-space: nowrap;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-wrapper .form-input {
    padding-right: 2rem;
  }

  .info-icon {
    position: absolute;
    right: 0.6rem;
    display: inline-flex;
    align-items: center;
    color: #1a1a2e;
    cursor: help;
    flex-shrink: 0;
  }

  .info-icon:hover {
    color: #1a1a2e;
  }

  .tooltip {
    display: none;
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    background: #1a1a2e;
    color: #fff;
    font-size: 0.72rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.4rem 0.65rem;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 0.45rem;
    border: 5px solid transparent;
    border-top-color: #1a1a2e;
  }

  .info-icon:hover .tooltip {
    display: block;
  }

  .form-input {
    width: 100%;
    padding: 0.45rem 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    font-size: 0.82rem;
    font-family: 'JetBrains Mono', monospace;
    color: #1a1a2e;
    outline: none;
    transition: border-color 0.15s;
    box-sizing: border-box;
  }

  .form-input:focus {
    border-color: #c92b0c;
    background: #fff;
  }

  .form-input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 14px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    line-height: inherit;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    text-decoration: none;
    font-family: inherit;
    appearance: none;
    -webkit-appearance: none;
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

  /* Remove number input spinners */
  .form-input[type='number']::-webkit-inner-spin-button,
  .form-input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  /* Code panel */
  .tool-code-container {
    position: relative;
    min-height: 200px;
  }

  .tool-code-panel {
    position: absolute;
    inset: 0;
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

  .tool-code {
    flex: 1;
    padding: 1.5rem;
    overflow-y: auto;
    margin: 0;
  }

  .tool-code code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    line-height: 1.75;
    color: #cdd6f4;
    white-space: pre-wrap;
    word-break: break-all;
  }

  @media (max-width: 900px) {
    .tool-row {
      grid-template-columns: 1fr;
      direction: ltr;
    }

    .form-row {
      grid-template-columns: 1fr;
      gap: 0.25rem;
    }
  }
</style>
