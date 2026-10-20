
<script>
  const experiences = [
    {
      type: "PROFESSIONAL EXPERIENCE",
      date: "Jan 2026 — Jun 2026",
      role: "SW/App/Cloud Tech Support",
      organization: "Accenture",
      description:
        "Investigated software and cloud application issues, validated fixes, and documented technical resolutions."
    },
    {
      type: "FREELANCE",
      date: "Jun 2025 — Present",
      role: "Technical Freelancer",
      organization: "Independent",
      description:
        "Developed web applications, integrated APIs, and worked with databases to deliver client solutions."
    },
    {
      type: "INTERNSHIP",
      date: "Feb 2025 — Jun 2025",
      role: "Full-Stack Developer Intern",
      organization: "CHED Region II",
      description:
        "Helped develop internal systems, improve workflows, and support testing and automation."
    },
    {
      type: "EDUCATION",
      date: "Aug 2021 — Jun 2025",
      role: "BS Information Technology",
      organization: "University of Saint Louis Tuguegarao",
      description: "Bachelor's degree in Information Technology."
    }
  ];
</script>

<section
  id="experience"
  class="border-y hairline bg-[#efeee8] px-6 py-20 md:px-10 md:py-24"
>
  <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

    <!-- Section Heading -->
    <div>
      <span
        class="text-xs font-bold tracking-[.15em] text-neutral-500"
      >
        04 / JOURNEY
      </span>

      <h2
        class="mt-4 text-5xl font-semibold tracking-[-.07em] md:text-6xl"
      >
        Where I've
        <span class="serif italic font-normal">been.</span>
      </h2>

      <p class="mt-5 max-w-xs text-sm leading-7 text-neutral-500">
        A look at my experience, education, and the journey
        that shaped my development skills.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative border-l border-neutral-300 pl-6 md:pl-9">

      {#each experiences as item, i}
        <article class="relative pb-9 last:pb-0">

          <!-- Timeline Dot -->
          <span
            class="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-[3px] border-[#efeee8] bg-[#8a9c4b] ring-1 ring-[#8a9c4b] md:-left-[42px]"
          ></span>

          <!-- Category and Date -->
          <div class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span
              class="text-[10px] font-bold uppercase tracking-[.12em] text-neutral-500"
            >
              {item.type}
            </span>

            <span class="text-xs text-neutral-400">
              {item.date}
            </span>
          </div>

          <!-- Role -->
          <h3
            class="text-lg font-semibold tracking-[-.03em] md:text-xl"
          >
            {item.role}
          </h3>

          <!-- Organization -->
          <p class="mt-1 text-sm font-medium text-neutral-700">
            {item.organization}
          </p>

          <!-- Description -->
          <p class="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
            {item.description}
          </p>

        </article>
      {/each}

    </div>
  </div>
</section>
