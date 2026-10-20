
<script>
  import { Menu, X, ArrowUpRight } from "lucide-svelte";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
import { resolve } from "$app/paths";


  let menuOpen = $state(false);

const links = [
  { name: "About", href: resolve("/#about") },
  { name: "Projects", href: resolve("/#projects") },
  { name: "Skills", href: resolve("/#skills") },
  { name: "Experience", href: resolve("/#experience") },
  { name: "Contact", href: resolve("/#contact") }
];

  async function navigate(href) {
    menuOpen = false;

    const hash = href.split("#")[1];

    if (page.url.pathname === resolve("/") && hash) {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      await goto(href);
    }
  }

  async function goHome() {
    menuOpen = false;

    if (page.url.pathname === resolve("/")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      await goto(resolve("/"));
    }
  }
</script>

<svelte:window
  onkeydown={(event) => {
    if (event.key === "Escape") {
      menuOpen = false;
    }
  }}
/>

<header
  class="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-[#f6f5f1]/95 backdrop-blur-md"
>
  <div
    class="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-10"
  >
    <!-- Logo -->
    <a
      href={resolve("/")}
      class="text-xl font-black tracking-[-.09em]"
      onclick={(e) => {
        e.preventDefault();
        goHome();
      }}
    >
      van<span class="text-[#8a9c4b]">.</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden items-center gap-8 md:flex">
      {#each links as link}
        <a
          href={link.href}
          class="text-xs font-semibold text-neutral-600 transition hover:text-black"
          onclick={(e) => {
            e.preventDefault();
            navigate(link.href);
          }}
        >
          {link.name}
        </a>
      {/each}
    </nav>

    <!-- Desktop Contact -->
    <a
      href={resolve("/#contact")}
      class="hidden items-center gap-2 rounded-full border border-neutral-800 px-5 py-2.5 text-xs font-bold transition hover:bg-neutral-900 hover:text-white md:flex"
      onclick={(e) => {
        e.preventDefault();
        navigate(resolve("/#contact"));
      }}
    >
      Let's talk
      <ArrowUpRight size={15} />
    </a>

    <!-- Mobile Menu Button -->
    <button
      type="button"
      class="flex h-10 w-10 items-center justify-center md:hidden"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onclick={() => (menuOpen = !menuOpen)}
    >
      {#if menuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile Floating Dropdown -->
  {#if menuOpen}
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      class="absolute inset-x-4 top-full mt-2 overflow-hidden rounded-xl border border-neutral-200 bg-[#f6f5f1] p-3 shadow-xl md:hidden"
    >
      {#each links as link, i}
        <a
          href={link.href}
          class="flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-semibold transition hover:bg-neutral-200/60"
          onclick={(e) => {
            e.preventDefault();
            navigate(link.href);
          }}
        >
          {link.name}

          <span class="text-xs font-normal text-neutral-400">
            0{i + 1}
          </span>
        </a>
      {/each}
    </nav>
  {/if}
</header>
