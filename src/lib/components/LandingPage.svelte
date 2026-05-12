<script>
  import Navbar from './Navbar.svelte'
  import Hero from './sections/Hero.svelte'
  import QuickStart from './sections/QuickStart.svelte'
  import Features from './sections/Features.svelte'
  import Playground from './sections/Playground.svelte'
  import Ready from './sections/Ready.svelte'
  import Footer from './Footer.svelte'
</script>

<div class="app">
  <Navbar />
  <main>
    <Hero />
    <Features />
    <QuickStart />
    <Playground />
    <Ready />
  </main>
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
  }
</style>
