
<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<Navbar />

<div class="min-h-screen pt-18">
  {@render children()}
</div>

<Footer />
