<script>
  import { MoveUpRight, Github, Linkedin, Mail } from "lucide-svelte";
</script>

<section id="contact" class="mx-auto max-w-7xl px-6 py-25 md:px-10 md:py-34">
  <span class="text-xs font-bold tracking-[.15em] text-neutral-500"
    >05 / CONTACT</span
  >

  <div class="mt-5">
    <h2
      class="text-[clamp(3rem,10vw,9rem)] leading-[.94] font-semibold tracking-[-.09em]"
    >
      Have an idea?<br />

      <span class="inline-flex items-center gap-3 md:gap-6">
        <span class="serif italic font-normal"> Let's talk. </span>

        <a
          href="mailto:bunagan.van@gmail.com"
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6f36a] transition-transform duration-300 hover:rotate-45 hover:scale-105 md:h-24 md:w-24"
          aria-label="Send me an email"
        >
          <MoveUpRight size={22} class="md:hidden" />
          <MoveUpRight size={34} class="hidden md:block" />
        </a>
      </span>
    </h2>
  </div>

  <p class="mt-7 max-w-lg text-neutral-600">
    I'm open to interesting projects, learning opportunities, and conversations
    about technology.
  </p>
  <div class="mt-12 flex flex-wrap gap-5 text-sm font-semibold">
    <a
      class="flex items-center gap-2 hover:underline"
      href="https://github.com/svan15"
      target="_blank"
      rel="noreferrer"><Github size={18} /> GitHub</a
    ><a
      class="flex items-center gap-2 hover:underline"
      href="https://www.linkedin.com/in/stacy-mae-bunagan"
      target="_blank"
      rel="noreferrer"><Linkedin size={18} /> LinkedIn</a
    ><a
      class="flex items-center gap-2 hover:underline"
      href="mailto:bunagan.van@gmail.com"><Mail size={18} /> Email</a
    >
  </div>
</section>
