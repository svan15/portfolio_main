<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
  <div class="float-shape absolute left-[6%] top-[15%] h-20 w-20 rounded-full border border-[#9da884]/25"></div>
  <div class="float-shape float-delay absolute right-[42%] top-[18%] h-10 w-10 rotate-45 border border-[#9da884]/30"></div>
  <div class="float-shape float-slow absolute bottom-[12%] left-[45%] h-24 w-24 rounded-full bg-[#d6f36a]/10 blur-xl"></div>
  <div class="absolute right-[4%] top-[30%] h-64 w-64 rounded-full bg-[#d9dfcb]/20 blur-3xl"></div>
</div>
<style>
  .float-shape { animation: drift 9s ease-in-out infinite; }
  .float-delay { animation-delay: -3s; }
  .float-slow { animation-duration: 13s; }
  @keyframes drift { 0%,100% {transform:translateY(0) rotate(0deg)} 50% {transform:translateY(-20px) rotate(8deg)} }
  @media (prefers-reduced-motion: reduce) { .float-shape { animation:none; } }
</style>
