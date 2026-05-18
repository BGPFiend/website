<script>
  import logo from '$lib/assets/bgpfiend_logo.png'
  import logoSupplement from '$lib/assets/bgpfiend_logo_supplement.png'
  import { scrollTo } from '../scroll.js'
  import { replaceState, goto } from '$app/navigation'
  import { base } from '$app/paths'
  import { apiTokenDialogOpen } from '$lib/stores/dialog.js'
  import iij_logo from '$lib/assets/iij_logo.svg'
  import routeviews_logo from '$lib/assets/routeviews_logo.png'
  import ripe_logo from '$lib/assets/ripe_logo.png'
  import caida_logo from '$lib/assets/caida_logo.png'

  const footerLinks = {
    Resources: [
      {
        label: 'API Token Registration',
        href: '#api-token-registration',
        dialog: 'api-token',
      },
      { label: 'API Documentation', href: `${base}/api-documentation` },
      { label: 'GitHub', href: 'https://github.com/BGPFiend' },
      // { label: 'System Status', href: '#' },
    ],
  }

  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    e.preventDefault()
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
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="brand" href={base} onclick={(e) => handleNav(e, '#top')}>
        <div class="brand-logo-row">
          <img class="brand-logo" src={logo} alt="BGPFiend" />
          <img src={logoSupplement} alt="" class="brand-logo-supplement" />
        </div>
      </a>
      <p class="brand-desc">
        Open-source BGP data processing tools for network operators and
        researchers.
      </p>
      <a
        class="github-link"
        href="https://github.com/BGPFiend"
        target="_blank"
        rel="noopener"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
        github.com/BGPFiend
      </a>
    </div>

    {#each Object.entries(footerLinks) as [heading, links]}
      <div class="footer-col">
        <h4 class="footer-heading">{heading}</h4>
        <ul class="footer-list">
          {#each links as link}
            <li>
              <a
                class="footer-link"
                href={link.href}
                onclick={link.dialog === 'api-token'
                  ? (e) => {
                      e.preventDefault()
                      apiTokenDialogOpen.set(true)
                    }
                  : link.href.startsWith('#')
                    ? (e) => handleNav(e, link.href)
                    : undefined}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}

    <div class="footer-col">
      <h4 class="footer-heading">Contact</h4>
      <ul class="footer-list">
        <li>
          <a class="footer-link" href="mailto:info@bgpfiend.io"
            >info@bgpfiend.io</a
          >
        </li>
      </ul>
    </div>

    <div class="footer-col footer-col--attribution">
      <h4 class="footer-heading">Supported by</h4>
      <div class="attribution-logos">
        <!-- Add attribution logos here -->
        <a href="https://www.iij.ad.jp/" target="_blank" rel="noopener">
          <img src={iij_logo} alt="IIJ" />
        </a>
        <a href="https://www.routeviews.org/" target="_blank" rel="noopener">
          <img src={routeviews_logo} alt="RouteViews" />
        </a>
        <a href="https://www.ripe.net/" target="_blank" rel="noopener">
          <img src={ripe_logo} alt="RIPE NCC" />
        </a>
        <a href="https://www.caida.org/" target="_blank" rel="noopener">
          <img src={caida_logo} alt="Caida" />
        </a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <span>&#169; {year} BGPFiend. All rights reserved.</span>
    <!-- <span class="footer-badge">GPL-3.0 Licensed &#8226; Open Source</span> -->
  </div>
</footer>

<style>
  .footer {
    background: #f5f5f7;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 60px 24px 30px;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 48px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #1a1a2e;
    margin-bottom: 14px;
  }

  .brand-logo-row {
    position: relative;
    display: inline-flex;
  }

  .brand-logo {
    height: 150px;
    width: auto;
  }

  .brand-logo-supplement {
    position: absolute;
    bottom: -10px;
    right: -25px;
    height: 48px;
    width: auto;
  }

  .brand-desc {
    font-size: 13px;
    color: #1a1a2e;
    line-height: 1.7;
    margin: 0 0 16px;
    max-width: 260px;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #1a1a2e;
    text-decoration: none;
    transition: color 0.15s;
  }

  .github-link:hover {
    color: #c92b0c;
  }

  .footer-heading {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #1a1a2e;
    margin: 0 0 16px;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-link {
    font-size: 14px;
    color: #1a1a2e;
    text-decoration: none;
    transition: color 0.15s;
  }

  .footer-link:hover {
    color: #c92b0c;
  }

  .footer-col--attribution .footer-heading {
    text-align: center;
  }

  .attribution-logos {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .attribution-logos img {
    max-height: 40px;
    width: auto;
  }

  .attribution-logos a {
    display: inline-flex;
    align-items: center;
  }

  .footer-bottom {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: #1a1a2e;
    flex-wrap: wrap;
    gap: 8px;
  }

  /* .footer-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #c92b0c;
    background: rgba(201, 43, 12, 0.06);
    border: 1px solid rgba(201, 43, 12, 0.15);
    padding: 3px 10px;
    border-radius: 999px;
  } */

  @media (max-width: 768px) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .footer-inner {
      grid-template-columns: 1fr;
    }
  }
</style>
