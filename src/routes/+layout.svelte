<script>
  import '../app.css'
  import '@fontsource/roboto/300.css'
  import '@fontsource/roboto/400.css'
  import '@fontsource/roboto/500.css'
  import '@fontsource/roboto/700.css'
  import '@fontsource/roboto-mono/400.css'
  import '@fontsource/roboto-mono/500.css'
  import favicon from '$lib/assets/bgpfiend_logo.png'

  let { children } = $props()
</script>

<svelte:head>
  <title>BGPFiend - Open-Source BGP Tool</title>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
