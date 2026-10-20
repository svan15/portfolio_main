
<script>
  import { Code2, ArrowUpRight } from "lucide-svelte";

  const skills = [
    {
      title: "Frontend",
      items: [
        "HTML", "CSS", "JavaScript", "Svelte",
        "React Native", "Tailwind CSS", "Bootstrap"
      ]
    },
    {
      title: "Backend",
      items: [
        "Supabase", "Java", "C#", "Node.js",
        "PHP", "Firebase", "SQL", "REST APIs"
      ]
    },
    {
      title: "Tools & Workflow",
      items: [
        "Git", "GitHub", "VS Code", "Responsive Design"
      ]
    },
    {
      title: "Design & Prototyping",
      items: [
        "Figma", "Webflow", "WordPress", "Canva"
      ]
    },
    {
      title: "Other Technical Skills",
      items: [
        "Agile / Scrum", "SDLC", "Debugging",
        "Troubleshooting", "Cisco Networking"
      ]
    },
    {
      title: "Exploring",
      items: [
        "Cloud Technologies", "AI Integration"
      ]
    }
  ];

  let activeIndex = $state(0);
</script>

<section
  id="skills"
  class="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24"
>
  <span
    class="text-xs font-bold tracking-[.15em] text-neutral-500"
  >
    03 / MY TOOLKIT
  </span>

  <h2
    class="mt-4 text-5xl font-semibold tracking-[-.07em] md:text-7xl"
  >
    Tools of the
    <span class="serif italic font-normal">trade.</span>
  </h2>

  <div
    class="mt-10 overflow-hidden rounded-2xl border border-neutral-200 md:mt-12"
  >
    <div class="grid md:grid-cols-[260px_1fr]">

      <!-- Categories -->
      <div
        class="border-b border-neutral-200 p-3 md:border-r md:border-b-0"
      >
        <div class="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible">
          {#each skills as skill, i}
            <button
              type="button"
              onclick={() => (activeIndex = i)}
              aria-pressed={activeIndex === i}
              class={`flex shrink-0 items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 md:w-full ${
                activeIndex === i
                  ? "bg-[#1e1e1d] text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }`}
            >
              <span>{skill.title}</span>

              {#if activeIndex === i}
                <ArrowUpRight size={15} class="hidden md:block" />
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Selected Skills -->
      <div class="min-h-52 p-6 md:p-10">
        {#key activeIndex}
          <div class="animate-skills-in">
            <div class="mb-7 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <Code2 size={22} strokeWidth={1.5} />

                <h3 class="text-xl font-semibold tracking-tight md:text-2xl">
                  {skills[activeIndex].title}
                </h3>
              </div>

              <span class="text-xs text-neutral-400">
                0{activeIndex + 1} / 0{skills.length}
              </span>
            </div>

            <div class="flex flex-wrap gap-2.5">
              {#each skills[activeIndex].items as item}
                <span
                  class="rounded-lg border border-neutral-200 bg-white/60 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
                >
                  {item}
                </span>
              {/each}
            </div>
          </div>
        {/key}
      </div>

    </div>
  </div>
</section>

<style>
  .animate-skills-in {
    animation: skills-in 0.25s ease-out both;
  }

  @keyframes skills-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-skills-in {
      animation: none;
    }
  }
</style>
