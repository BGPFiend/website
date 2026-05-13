<script>
  const sdkTabs = [
    {
      id: 'bash',
      label: 'Bash / curl',
      description: 'Query BGPFiend directly with curl — no parser needed.',
      code: `# Query by prefix (MRT backend)
curl "bgpfiend/mrt?k=1.1.1.0/24"

# Query by prefix (Parquet backend — sub-second response)
curl "bgpfiend/parquet?k=1.1.1.0/24"

# Query by community
curl "bgpfiend/parquet?k=65000:100"

# Query by peer AS
curl "bgpfiend/parquet?k=13335"`,
    },
    {
      id: 'python',
      label: 'Python SDK',
      description: 'Query BGPFiend and parse filtered BGP data over HTTP.',
      code: `import requests

# Query BGPFiend for prefix announcements
response = requests.get(
    "https://bgpfiend.example.org/mrt",
    params={"k": "1.1.1.0/24"}
)

for record in response.json():
    print(record)`,
    }
  ]

  let activeTab = $state(sdkTabs[0].id)
  let copied = $state(false)

  let activeData = $derived(sdkTabs.find((t) => t.id === activeTab))

  async function copyCode() {
    await navigator.clipboard.writeText(activeData.code)
    copied = true
    setTimeout(() => (copied = false), 2000)
  }
</script>

<section id="quick-start" class="section section--alt">
  <div class="section-inner">
    <div>
      <h1 class="section-title">Quick Start</h1>
      <h2 class="section-caption">Get Started with BGPFiend</h2>
      <p class="section-sub">
        Access BGP archives with collector-side filtering via HTTP. No specialized MRT parsers required.
      </p>
    </div>

    <div class="sdk-container">
      <div class="tabs" role="tablist">
        {#each sdkTabs as tab}
          <button
            class="tab"
            class:tab--active={activeTab === tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onclick={() => (activeTab = tab.id)}
          >
            {tab.label}
          </button>
        {/each}
      </div>

      <div class="code-panel">
        <div class="code-header">
          <span class="code-description">{activeData.description}</span>
          <button class="copy-btn" onclick={copyCode}>
            {#if copied}
              ✓ Copied
            {:else}
              Copy
            {/if}
          </button>
        </div>
        <pre class="code-block"><code>{activeData.code}</code></pre>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: 100px 24px;
    position: relative;
  }

  .section--alt {
    background: #f5f5f7;
  }

  .section-inner {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
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

  .section-sub {
    font-size: clamp(15px, 2vw, 18px);
    color: #1a1a2e;
    text-align: center;
    max-width: 540px;
    line-height: 1.7;
    margin: 0 auto 24px;
  }

  .sdk-container {
    width: 100%;
  }

  .tabs {
    display: flex;
    gap: 4px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    padding: 8px 8px 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .tabs::-webkit-scrollbar {
    display: none;
  }

  .tab {
    padding: 10px 18px;
    border-radius: 6px 6px 0 0;
    border: none;
    background: transparent;
    color: #9ca3af;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition:
      color 0.15s,
      background 0.15s;
    font-family: inherit;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .tab:hover {
    color: #6b7280;
    background: rgba(0, 0, 0, 0.04);
  }

  .tab--active {
    color: #c92b0c;
    background: rgba(201, 43, 12, 0.06);
    font-weight: 600;
  }

  /* Keep code panel dark for readability */
  .code-panel {
    background: #0f1117;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0 0 10px 10px;
    overflow: hidden;
  }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .code-description {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
  }

  .copy-btn {
    padding: 4px 12px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
  }

  .copy-btn:hover {
    background: rgba(201, 43, 12, 0.2);
    border-color: rgba(201, 43, 12, 0.5);
    color: #e86f00;
  }

  .code-block {
    margin: 0;
    padding: 24px;
    overflow-x: auto;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    line-height: 1.7;
    color: #cdd6f4;
    white-space: pre;
  }
</style>
