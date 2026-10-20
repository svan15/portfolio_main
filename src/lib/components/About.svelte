
<script>
  const phrases = [
    "Curiosity driven",
    "Thoughtfully built",
    "Always learning",
    "Based in the Philippines"
  ];
</script>

<!-- Black Marquee Strip -->
<div
  class="overflow-hidden border-y border-neutral-800 bg-[#1e1e1d] text-[#f6f5f1]"
>
  <!-- Desktop: Original Layout -->
  <div
    class="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-10 py-5 md:flex"
  >
    {#each phrases as phrase}
      <span
        class="text-[10px] font-semibold uppercase tracking-[.19em]"
      >
        {phrase}
      </span>
    {/each}
  </div>

  <!-- Mobile: Infinite Marquee -->
  <div class="overflow-hidden py-4 md:hidden">
    <div class="marquee-track flex w-max items-center">

      {#each [0, 1] as copy}
        <div
          class="flex shrink-0 items-center gap-7 pr-7"
          aria-hidden={copy === 1 ? "true" : undefined}
        >
          {#each phrases as phrase}
            <span
              class="shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.16em]"
            >
              {phrase}
            </span>

            <span
              class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6f36a]"
            ></span>
          {/each}
        </div>
      {/each}

    </div>
  </div>
</div>

<!-- About Section -->
<section
  id="about"
  class="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[.4fr_.6fr] md:px-10 md:py-28"
>
  <div>
    <span
      class="text-xs font-bold tracking-[.15em] text-neutral-500"
    >
      01 / ABOUT
    </span>

    <h2
      class="mt-5 text-5xl font-semibold tracking-[-.07em] md:text-6xl"
    >
      More than<br />
      <span class="serif italic font-normal">just code.</span>
    </h2>
  </div>

  <div class="md:pt-12">
    <p
      class="max-w-2xl text-xl leading-relaxed tracking-[-.02em] md:text-2xl"
    >
      I enjoy transforming ideas into experiences that feel
      simple, intentional, and useful.
    </p>

    <p class="mt-6 max-w-xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
      I'm an Information Technology graduate from the University
      of Saint Louis Tuguegarao, with hands-on experience in
      full-stack development, technical freelancing, and
      enterprise application support.

      My experience includes developing web applications,
      integrating APIs, working with databases, troubleshooting
      software issues, and collaborating with teams to deliver
      practical solutions.
    </p>
  </div>
</section>

<style>
  .marquee-track {
    animation: marquee 28s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none;
    }
  }
</style>
