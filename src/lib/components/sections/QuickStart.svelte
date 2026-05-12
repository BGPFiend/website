<script>
  const sdkTabs = [
    {
      id: "rust",
      label: "Rust SDK",
      description: "Search BGP files and find relevant announcements",
      code: `use bgpkit_broker::BgpkitBroker;
use bgpkit_parser::BgpkitParser;

let broker = BgpkitBroker::new()
    .ts_start("2024-01-01T00:00:00Z")
    .ts_end("2024-01-01T01:00:00Z")
    .data_type("updates");

for item in broker.into_iter().take(3) {
    let parser = BgpkitParser::new(&item.url)
        .unwrap()
        .add_filter("origin_asn", "13335").unwrap();

    for elem in parser {
        println!("{}", elem);
    }
}`,
    },
    {
      id: "python",
      label: "Python SDK",
      description: "Search BGP files and find relevant announcements",
      code: `import bgpkit

# Parse an MRT file with filters (remote URL)
parser = bgpkit.Parser(
    url="https://spaces.bgpkit.org/parser/update-example",
    filters={"peer_ips": "185.1.8.65, 2001:7f8:73:0:3:fa4:0:1"},
)

count = 0
for elem in parser:
  count += 1
  print(elem)

assert count == 4227`,
    },
    {
      id: "cli",
      label: "Monocle CLI",
      description: "All-in-one CLI tool for BGP investigation",
      code: `# Install (macOS Homebrew)
brew install monocle

# Search for announcements for a prefix during a time window
monocle search \\
  -t 2024-01-01T00:00:00Z \\
  -T 2024-01-01T00:01:00Z \\
  -c rrc00 -p 1.1.1.0/24 -m a

# Unified AS / prefix inspection
monocle inspect 13335
monocle inspect 1.1.1.0/24

# RPKI validation (prefix + ASN)
monocle rpki validate 1.1.1.0/24 13335`,
    },
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
        Search BGP archives and parse data with our SDKs. Available in Rust and
        Python.
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
    font-family: "JetBrains Mono", monospace;
    font-size: 0.82rem;
    line-height: 1.7;
    color: #cdd6f4;
    white-space: pre;
  }
</style>
