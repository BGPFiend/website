<script>
  import { apiTokenDialogOpen } from '$lib/stores/dialog.js'
  import { replaceState } from '$app/navigation'
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  // Open immediately if user navigated directly to the hash
  if (browser && window.location.hash === '#api-token-registration') {
    apiTokenDialogOpen.set(true)
  }

  let dialog = $state(null)

  $effect(() => {
    if ($apiTokenDialogOpen) {
      dialog?.showModal()
      if (window.location.hash !== '#api-token-registration') {
        replaceState('#api-token-registration', {})
      }
    } else {
      dialog?.close()
      if (window.location.hash === '#api-token-registration') {
        replaceState(window.location.pathname, {})
      }
    }
  })

  onMount(() => {
    const handlePopstate = () => {
      apiTokenDialogOpen.set(window.location.hash === '#api-token-registration')
    }
    window.addEventListener('popstate', handlePopstate)
    return () => window.removeEventListener('popstate', handlePopstate)
  })

  function close() {
    apiTokenDialogOpen.set(false)
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  class="dialog"
  onclose={close}
  onclick={(e) => e.target === dialog && close()}
>
  <div class="dialog-panel">
    <div class="dialog-header">
      <h2 class="dialog-title">API Token Registration</h2>
      <button class="close-btn" aria-label="Close" onclick={close}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <p class="dialog-intro">
      BGPFiend API access is granted on request. Follow the steps below to
      obtain your API token.
    </p>

    <ol class="steps">
      <li class="step">
        <span class="step-number">1</span>
        <div class="step-body">
          <strong
            >Send an email to <a
              class="email-link"
              href="mailto:info@bgpfiend.io">info@bgpfiend.io</a
            ></strong
          >
          <div>The subject line should be <em>"API Token Request"</em>.</div>
        </div>
      </li>
      <li class="step">
        <span class="step-number">2</span>
        <div class="step-body">
          <strong>Describe your use case</strong>
          <div>
            In the email, explain who you are and why you need access, for
            example, your research goals, organization, or the specific BGP data
            you intend to analyze.
          </div>
        </div>
      </li>
      <li class="step">
        <span class="step-number">3</span>
        <div class="step-body">
          <strong>Wait for our reply</strong>
          <div>
            We will review your request and, if approved, send you your personal
            API Token Key. You can expect a response within a few business days.
          </div>
        </div>
      </li>
    </ol>

    <!-- <div class="notice">
      <svg
        class="notice-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <p class="notice-text">
        <strong>Note:</strong> We reserve the right to revoke API keys at any time
        if a user is found to be in violation of our terms of use.
      </p>
    </div> -->

    <button class="done-btn" onclick={close}>Got it</button>
  </div>
</dialog>

<style>
  .dialog {
    padding: 0;
    border: none;
    border-radius: 14px;
    background: transparent;
    max-width: 520px;
    width: calc(100vw - 48px);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
  }

  .dialog::backdrop {
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(4px);
  }

  .dialog-panel {
    background: #ffffff;
    border-radius: 14px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dialog-title {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    color: #1a1a2e;
    cursor: pointer;
    border-radius: 6px;
    transition:
      background 0.15s,
      color 0.15s;
    flex-shrink: 0;
  }

  .close-btn:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #1a1a2e;
  }

  .dialog-intro {
    font-size: 14px;
    color: #1a1a2e;
    line-height: 1.6;
    margin: 0;
  }

  .steps {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .step {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(201, 43, 12, 0.1);
    color: #c92b0c;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .step-body {
    font-size: 14px;
    color: #1a1a2e;
    line-height: 1.6;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: baseline;
  }

  .email-link {
    color: #c92b0c;
    text-decoration: none;
    font-weight: 600;
  }

  .email-link:hover {
    text-decoration: underline;
  }

  /* .notice {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    background: rgba(201, 43, 12, 0.05);
    border: 1px solid rgba(201, 43, 12, 0.15);
    border-radius: 8px;
    padding: 12px 14px;
  }

  .notice-icon {
    color: #c92b0c;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .notice-text {
    font-size: 13px;
    color: #1a1a2e;
    line-height: 1.6;
    margin: 0;
  } */

  .done-btn {
    align-self: flex-end;
    padding: 10px 24px;
    border-radius: 8px;
    border: none;
    background: #c92b0c;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition:
      background 0.15s,
      transform 0.15s;
  }

  .done-btn:hover {
    background: #a82209;
    transform: translateY(-1px);
  }
</style>
