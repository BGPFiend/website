<script>
  import { scrollTo } from '../../scroll.js'
  import { apiTokenDialogOpen } from '$lib/stores/dialog.js'
</script>

<section class="ready-section">
  <div class="glow" aria-hidden="true"></div>
  <div class="ready-inner">
    <h2 class="ready-title">Ready to Get Started?</h2>
    <p class="ready-sub">
      Join thousands of developers and researchers using BGPFiend for BGP data
      analysis. Start your journey into BGP data processing today.
    </p>
    <div class="ready-actions">
      <a
        class="btn btn--primary"
        href="#api-token-registration"
        onclick={(e) => {
          e.preventDefault()
          apiTokenDialogOpen.set(true)
        }}
      >
        API Token Registration
      </a>
      <a class="btn btn--outline" href="/api-documentation"> Read Our Docs </a>
    </div>
  </div>
</section>

<style>
  .ready-section {
    padding: 100px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: #f5f5f7;
  }

  .glow {
    position: absolute;
    width: 500px;
    height: 300px;
    background: rgba(201, 43, 12, 0.08);
    border-radius: 50%;
    filter: blur(80px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .ready-inner {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .ready-title {
    font-size: clamp(28px, 5vw, 46px);
    font-weight: 800;
    color: #1a1a2e;
    margin: 0;
    line-height: 1.15;
    font-family: 'Permanent Marker', cursive;
  }

  .ready-sub {
    font-size: 16px;
    color: #1a1a2e;
    line-height: 1.7;
    margin: 0;
  }

  .ready-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 28px;
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
    transform: translateY(-2px);
  }

  .btn--outline {
    background: transparent;
    color: #a82209;
    border: 1px solid #a82209;
  }

  .btn--outline:hover {
    color: #c92b0c;
    border-color: #c92b0c;
    transform: translateY(-2px);
    background: #ffffff;
  }
</style>
