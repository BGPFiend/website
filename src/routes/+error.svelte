<script>
  import { page } from '$app/stores'
  import logo from '$lib/assets/bgpfiend_logo.png'
</script>

<svelte:head>
  <title>{$page.status} — BGPFiend</title>
</svelte:head>

<div class="error-page">
  <a href="/" class="brand">
    <img src={logo} alt="BGPFiend" class="brand-logo" />
  </a>

  <div class="content">
    <span class="status">{$page.status}</span>
    <h1 class="title">
      {#if $page.status === 404}
        Page not found
      {:else}
        Something went wrong
      {/if}
    </h1>
    <p class="description">
      {#if $page.status === 404}
        The page you're looking for doesn't exist or has been moved.
      {:else}
        {$page.error?.message ?? 'An unexpected error occurred.'}
      {/if}
    </p>
    <a href="/" class="btn btn--primary">Go back home</a>
  </div>
</div>

<style>
  .error-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--color-bg);
  }

  .brand {
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .brand-logo {
    height: 44px;
    width: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    max-width: 480px;
  }

  .status {
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
    color: var(--color-primary);
    font-family: 'Roboto', system-ui, sans-serif;
    letter-spacing: -4px;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    color: #1a1a2e;
  }

  .description {
    font-size: 16px;
    color: #1a1a2e;
    margin: 0;
    line-height: 1.6;
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
</style>
