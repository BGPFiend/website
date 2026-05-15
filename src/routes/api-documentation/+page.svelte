<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { createApiReference } from '@scalar/api-reference'
  import '@scalar/api-reference/style.css'
  import { onMount } from 'svelte'

  const DOCS_URL = 'https://api.bgpfiend.io/docs'

  let error = $state(null)
  let loading = $state(true)
  let container = $state(null)

  onMount(async () => {
    try {
      const res = await fetch(DOCS_URL)
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
      const html = await res.text()
      const parsed = new DOMParser().parseFromString(html, 'text/html')
      const script = parsed.getElementById('api-reference')
      if (!script) throw new Error('No #api-reference script tag found')
      const spec = JSON.parse(script.textContent)

      createApiReference(container, {
        content: spec,
        theme: 'default',
        darkMode: false,
        forceDarkModeState: 'light',
        showDeveloperTools: 'never',
        agent: { disabled: true },
        mcp: { disabled: true },
        hideClientButton: true,
      })
    } catch (e) {
      error = e.message || 'Failed to load API documentation.'
    } finally {
      loading = false
    }
  })
</script>

<svelte:head>
  <title>API Documentation - BGPFiend</title>
</svelte:head>

<div class="docs-page">
  <Navbar />

  <main class="content">
    {#if loading}
      <div class="loader-wrap">
        <div class="spinner"></div>
      </div>
    {/if}
    {#if error}
      <div class="error">{error}</div>
    {/if}
    <div bind:this={container}></div>
  </main>

  <Footer />
</div>

<style>
  .docs-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    max-width: var(--site-width);
    width: 100%;
    margin: 0 auto;
    padding-top: var(--navbar-height);
    display: flex;
    flex-direction: column;
  }

  .loader-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
