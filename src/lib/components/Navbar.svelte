<script>
  import logo from '$lib/assets/bgpfiend_logo.png'
  import { scrollTo } from '../scroll.js'
  import { replaceState, goto } from '$app/navigation'
  import { base } from '$app/paths'
  import { apiTokenDialogOpen } from '$lib/stores/dialog.js'

  const navLinks = [
    { label: 'Top', href: '#top' },
    { label: 'Features', href: '#features' },
    { label: 'Quick Start', href: '#quick-start' },
    { label: 'Playground', href: '#playground' },
    {
      label: 'API Token Registration',
      href: '#api-token-registration',
      dialog: 'api-token',
    },
    { label: 'API Documentation', href: `${base}/api-documentation` },
    { label: 'Contact', href: 'mailto:info@bgpfiend.io' },
  ]

  let menuOpen = $state(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    menuOpen = false
    if (window.location.pathname !== base + '/') {
      goto(href === '#top' ? base + '/' : base + '/' + href)
      return
    }
    scrollTo(href)
    if (href === '#top') {
      replaceState(window.location.pathname, {})
    } else {
      replaceState(href, {})
    }
  }

  const openApiDialog = () => {
    menuOpen = false
    apiTokenDialogOpen.set(true)
  }
</script>

<header class="nav">
  <div class="nav-inner">
    <a class="brand" href={base} onclick={(e) => handleNav(e, '#top')}>
      <img src={logo} alt="BGPFiend" class="brand-logo" />
    </a>

    <nav class="nav-links">
      {#each navLinks as link}
        <a
          class="nav-link"
          href={link.href}
          onclick={link.dialog === 'api-token'
            ? (e) => {
                e.preventDefault()
                openApiDialog()
              }
            : link.href.startsWith('#')
              ? (e) => handleNav(e, link.href)
              : undefined}
        >
          {link.label}
        </a>
      {/each}

      <a
        class="nav-link"
        href="https://github.com/BGPFiend"
        target="_blank"
        rel="noopener"
        aria-label="BGPFiend on GitHub"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      </a>
    </nav>

    <button
      class="hamburger"
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
    </button>
  </div>

  {#if menuOpen}
    <nav class="mobile-menu">
      {#each navLinks as link}
        <a
          class="mobile-link"
          href={link.href}
          onclick={link.dialog === 'api-token'
            ? (e) => {
                e.preventDefault()
                openApiDialog()
              }
            : link.href.startsWith('#')
              ? (e) => handleNav(e, link.href)
              : () => (menuOpen = false)}
        >
          {link.label}
        </a>
      {/each}
      <a
        class="mobile-link"
        href="https://github.com/BGPFiend"
        target="_blank"
        rel="noopener"
        onclick={() => (menuOpen = false)}
      >
        GitHub
      </a>
    </nav>
  {/if}
</header>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }

  .nav-inner {
    max-width: var(--site-width);
    margin: 0 auto;
    padding: 0 24px;
    height: var(--navbar-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .brand-logo {
    height: 44px;
    width: auto;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a2e;
    text-decoration: none;
    transition:
      color 0.15s,
      background 0.15s;
    cursor: pointer;
  }

  .nav-link:hover {
    color: #1a1a2e;
    background: rgba(0, 0, 0, 0.05);
  }

  /* Hamburger button */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    padding: 6px;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 6px;
  }

  .hamburger:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .bar {
    display: block;
    width: 20px;
    height: 2px;
    background: #1a1a2e;
    border-radius: 2px;
    transition:
      transform 0.2s,
      opacity 0.2s;
    transform-origin: center;
  }

  .bar:nth-child(1).open {
    transform: translateY(7px) rotate(45deg);
  }

  .bar:nth-child(2).open {
    opacity: 0;
  }

  .bar:nth-child(3).open {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Mobile menu */
  .mobile-menu {
    display: none;
    flex-direction: column;
    padding: 8px 16px 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  .mobile-link {
    padding: 12px 8px;
    font-size: 15px;
    font-weight: 500;
    color: #1a1a2e;
    text-decoration: none;
    border-radius: 6px;
    transition: background 0.15s;
  }

  .mobile-link:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 950px) {
    .nav-links {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .mobile-menu {
      display: flex;
    }
  }
</style>
