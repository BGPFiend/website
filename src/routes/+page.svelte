<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Hero from '$lib/components/sections/Hero.svelte'
  import QuickStart from '$lib/components/sections/QuickStart.svelte'
  import Features from '$lib/components/sections/Features.svelte'
  import Playground from '$lib/components/sections/Playground.svelte'
  import Ready from '$lib/components/sections/Ready.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>BGPFiend - Open-Source BGP Tool</title>
</svelte:head>

<div class="app">
  <Navbar />
  <main>
    <Hero />
    <!-- <Features /> -->
    <QuickStart />
    <Playground />
    <!-- <Ready /> -->
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
