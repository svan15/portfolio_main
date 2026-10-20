
<script>
  import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-svelte';

  let { data } = $props();
  let project = $derived(data.project);

  let activeImage = $state(0);
  let screenshots = $derived(
    project.images?.length ? project.images : [project.image]
  );

  let touchStart = 0;

  function next() {
    activeImage = (activeImage + 1) % screenshots.length;
  }

  function previous() {
    activeImage = (activeImage - 1 + screenshots.length) % screenshots.length;
  }

  function handleTouchEnd(event) {
    const distance = touchStart - event.changedTouches[0].clientX;

    if (Math.abs(distance) < 50) return;
    if (distance > 0) next();
    else previous();
  }
</script>

<svelte:head>
  <title>{project.name} — Van</title>
</svelte:head>

<article class="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">

  <a href="/projects" class="inline-flex items-center gap-2 text-sm font-semibold">
    <ArrowLeft size={16} /> All projects
  </a>

  <p class="mt-16 text-xs font-bold tracking-[.15em] text-neutral-500">
    {project.type}
  </p>

  <h1 class="mt-4 text-6xl font-semibold tracking-[-.07em] md:text-8xl">
    {project.name}
  </h1>

  <p class="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
    {project.summary}
  </p>

  <!-- Screenshot Gallery -->
  <div class="mt-12">

    <div
      class="relative overflow-hidden rounded-xl bg-[#e8e7e1]"
      ontouchstart={(e) => (touchStart = e.touches[0].clientX)}
      ontouchend={handleTouchEnd}
      role="region"
      aria-label={`${project.name} screenshot gallery`}
    >
      {#key screenshots[activeImage]}
        <img
          src={screenshots[activeImage]}
          alt={`${project.name} screenshot ${activeImage + 1}`}
          class="aspect-[16/10] w-full object-contain animate-gallery"
        />
      {/key}

      {#if screenshots.length > 1}
        <button
          type="button"
          onclick={previous}
          aria-label="Previous screenshot"
          class="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onclick={next}
          aria-label="Next screenshot"
          class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      {/if}
    </div>

    {#if screenshots.length > 1}
      <div class="mt-4 flex items-center justify-between">
        <span class="text-xs font-medium text-neutral-500">
          SCREENSHOT {String(activeImage + 1).padStart(2, '0')}
          / {String(screenshots.length).padStart(2, '0')}
        </span>

        <span class="text-xs text-neutral-400">
          Swipe or use arrows to explore
        </span>
      </div>

      <!-- Thumbnail Navigation -->
      <div class="mt-5 flex gap-3 overflow-x-auto pb-2">
        {#each screenshots as image, i}
          <button
            type="button"
            onclick={() => (activeImage = i)}
            aria-label={`View screenshot ${i + 1}`}
            aria-current={activeImage === i ? 'true' : undefined}
            class={`w-24 shrink-0 overflow-hidden rounded-lg border-2 transition md:w-30 ${
              activeImage === i
                ? 'border-[#8a9c4b] opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              class="aspect-video w-full object-cover"
            />
          </button>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Project Information -->
  <div class="mt-14 grid gap-12 md:grid-cols-2">

    <div>
      <h2 class="text-2xl font-semibold">About the project</h2>
      <p class="mt-4 leading-8 text-neutral-600">{project.desc}</p>
    </div>

    <div>
      <h2 class="text-2xl font-semibold">Key features</h2>

      <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-600">
        {#each project.features as feature}
          <li>{feature}</li>
        {/each}
      </ul>

      <h3 class="mt-8 text-lg font-semibold">Tech stack</h3>

      <div class="mt-3 flex flex-wrap gap-2">
        {#each project.tags as tag}
          <span class="rounded-full border border-neutral-300 px-3 py-1 text-xs">
            {tag}
          </span>
        {/each}
      </div>
    </div>

  </div>
</article>

<style>
  .animate-gallery {
    animation: gallery-in 0.25s ease-out;
  }

  @keyframes gallery-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-gallery {
      animation: none;
    }
  }
</style>
