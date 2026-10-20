<script>
  import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-svelte";
  import { projects } from "$lib/data/projects.js";
  import { resolve } from '$app/paths';

  let track;
  function move(direction) {
    if (!track) return;
    track.scrollBy({
      left:
        direction *
        (track.querySelector("article")?.getBoundingClientRect().width + 20 ||
          340),
      behavior: "smooth",
    });
  }
</script>

<section id="projects" class="bg-[#ebeae4] px-6 py-24 md:px-10 md:py-30">
  <div class="mx-auto max-w-7xl">
    <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div>
        <span class="text-xs font-bold tracking-[.15em] text-neutral-500"
          >02 / SELECTED WORK</span
        >
        <h2 class="mt-4 text-5xl font-semibold tracking-[-.07em] md:text-7xl">
          Things I've <span class="serif italic font-normal">made.</span>
        </h2>
      </div>
      <div class="flex gap-2">
        <button
          onclick={() => move(-1)}
          aria-label="Previous project"
          class="rounded-full border border-neutral-400 p-3 transition hover:bg-white"
          ><ArrowLeft size={19} /></button
        ><button
          onclick={() => move(1)}
          aria-label="Next project"
          class="rounded-full border border-neutral-400 p-3 transition hover:bg-white"
          ><ArrowRight size={19} /></button
        >
      </div>
    </div>
    <div
      bind:this={track}
      class="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {#each projects as project}
        <article
          class="group w-[87%] shrink-0 snap-start overflow-hidden rounded-xl border border-[#d9d8d1] bg-[#f6f5f1] sm:w-[65%] lg:w-[calc(50%-10px)]"
        >

<a
  href={resolve(`/projects/${project.slug}`)}
  class="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#e8e7e1]"
>
  <img
    src={resolve(project.image)}
    alt={"Preview of " + project.name}
    loading="lazy"
    class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
  />
</a>

          <div class="p-6 md:p-8">
            <div
              class="flex justify-between gap-2 text-[10px] font-bold tracking-[.13em] text-neutral-500"
            >
              <span>{project.type}</span><span>{project.n}</span>
            </div>
            <h3 class="mt-6 text-3xl font-semibold tracking-[-.05em]">
              {project.name}
            </h3>
            <p class="mt-3 min-h-14 text-sm leading-7 text-neutral-600">
              {project.desc}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              {#each project.tags as tag}<span
                  class="rounded-full border border-[#d7d5cb] px-3 py-1.5 text-[11px]"
                  >{tag}</span
                >{/each}
            </div>
            <a
              href={resolve(`/projects/${project.slug}`)}
              class="mt-7 inline-flex items-center gap-2 text-sm font-bold hover:underline"
              >Explore project <ArrowUpRight size={16} /></a
            >
          </div>
        </article>
      {/each}
    </div>
    <div class="mt-7 flex justify-between items-center gap-4">
      <p class="text-xs text-neutral-500">Swipe to explore selected work</p>
      <a
        href={resolve('/projects')}
        class="inline-flex items-center gap-2 rounded-full bg-[#1e1e1d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#42423c]"
        >View all projects <ArrowUpRight size={17} /></a
      >
    </div>
  </div>
</section>
