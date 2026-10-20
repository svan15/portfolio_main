<script>
  import { resolve } from "$app/paths";
</script>
  <footer class="border-t hairline px-6 py-7 md:px-10">
    <div
      class="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-xs text-neutral-500"
    >
      <span>© {new Date().getFullYear()} Van. Built with SvelteKit.</span><a
        href={resolve("/")}
        class="font-semibold text-neutral-800">Back to top ↑</a
      >
    </div>
  </footer>
