<script>
  import { ArrowUpRight, ArrowRight, ArrowDownRight } from "lucide-svelte";
  import FloatingBackground from "./FloatingBackground.svelte";
import { resolve } from "$app/paths";

</script>

<section
  id="home"
  class="relative isolate mx-auto grid max-w-7xl items-center gap-10 px-6 pb-22 pt-16 md:grid-cols-[1.15fr_.85fr] md:gap-16 md:px-10 md:pb-30 md:pt-24"
>
  <FloatingBackground />
  <div class="relative z-10 reveal">
    <div
      class="mb-9 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.22em]"
    >
      <span class="h-2 w-2 rounded-full bg-[#8ba348]"></span> Available for
      opportunities <span class="ml-3 h-px w-12 bg-neutral-400"></span>
    </div>
    <p class="mb-3 text-sm font-medium text-neutral-500">Hello, I'm Van —</p>
    <h1
      class="text-[clamp(3.8rem,9vw,8rem)] leading-[.89] font-semibold tracking-[-.09em]"
    >
      Building<br /><span class="serif font-normal italic tracking-[-.09em]"
        >what's next.</span
      >
    </h1>
    <p class="mt-8 max-w-md text-base leading-8 text-neutral-600">
      Full-Stack Developer with a background in Information Technology, building
      practical digital solutions through thoughtful design and development.
    </p>
    <div class="mt-9 flex flex-wrap gap-3">
      <a
        href={resolve("/#projects")}
        class="inline-flex items-center gap-3 rounded-full bg-[#1e1e1d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42423c]"
        >Explore my work <ArrowUpRight size={17} /></a
      ><a
        href="#contact"
        class="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
        >Get in touch <ArrowRight size={16} /></a
      >
    </div>
    <div class="mt-14 flex items-center gap-4 text-xs text-neutral-500">
      <span class="h-px w-12 bg-neutral-400"></span> SCROLL TO EXPLORE <ArrowDownRight
        size={15}
      />
    </div>
  </div>
  <div class="relative z-10 reveal" style="animation-delay:.12s">
    <div
      class="absolute -right-3 -top-3 h-25 w-25 rounded-full border border-[#b6b8a6] md:-right-7 md:-top-7"
    ></div>
    <div
      class="relative aspect-[4/4.5] overflow-hidden rounded-[12px] bg-[#dddcd5]"
    >
      <img
        src={resolve("/images/profile/photo.jpg")}
        alt="My Photo"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="absolute -bottom-5 -right-3 rounded-md bg-[#d6f36a] px-5 py-4 text-xs font-bold shadow-sm md:-right-5"
    >
      IDEA × CODE<br /><span class="text-neutral-600"></span>
    </div>
  </div>
</section>
