<script>
    import { projects } from "$lib/data/projects.js";
    import { ArrowUpRight, ArrowLeft } from "lucide-svelte";
    import { resolve } from "$app/paths";
</script>

<svelte:head><title>Projects — Van</title></svelte:head>
<div class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
    <a href={resolve("/")} class="inline-flex items-center gap-2 text-sm font-semibold"
        ><ArrowLeft size={16} /> Back home</a
    >
    <p class="mt-16 text-xs font-bold tracking-[.15em] text-neutral-500">
        ALL WORK / PROJECTS
    </p>
    <h1 class="mt-4 text-6xl font-semibold tracking-[-.07em] md:text-8xl">
        Selected <span class="serif italic font-normal">projects.</span>
    </h1>
    <p class="mt-6 max-w-xl text-neutral-600">
        A collection of projects, experiments, and ideas I've worked on.
    </p>
    <div class="mt-14 grid gap-7 md:grid-cols-2">
        {#each projects as project}<article
                class="overflow-hidden rounded-xl border border-[#d9d8d1] bg-white"
            >
                <a href={resolve(`/projects/${project.slug}`)}
                    ><div class="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#e8e7e1]">
  <img
    src={resolve(project.image)}
    alt={`${project.name} preview`}
    loading="lazy"
    class="h-full w-full object-contain"
  />
</div></a
                >
                <div class="p-7">
                    <p
                        class="text-xs font-bold tracking-wider text-neutral-500"
                    >
                        {project.type}
                    </p>
                    <h2 class="mt-3 text-3xl font-semibold">{project.name}</h2>
                    <p class="mt-3 text-sm leading-7 text-neutral-600">
                        {project.desc}
                    </p>
                    <a
                        href={resolve(`/projects/${project.slug}`)}
                        class="mt-5 inline-flex items-center gap-2 text-sm font-bold"
                        >View project <ArrowUpRight size={16} /></a
                    >
                </div>
            </article>{/each}
    </div>
</div>
