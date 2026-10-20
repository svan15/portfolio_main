import { i as head, d as attr, f as ensure_array_like, e as escape_html } from "../../../chunks/root.js";
import { p as projects } from "../../../chunks/projects.js";
import { r as resolve } from "../../../chunks/Icon.js";
import { A as Arrow_left } from "../../../chunks/arrow-left.js";
import { A as Arrow_up_right } from "../../../chunks/arrow-up-right.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("rqn88j", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Projects — Van</title>`);
      });
    });
    $$renderer2.push(`<div class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"><a${attr("href", resolve("/"))} class="inline-flex items-center gap-2 text-sm font-semibold">`);
    Arrow_left($$renderer2, { size: 16 });
    $$renderer2.push(`<!----> Back home</a> <p class="mt-16 text-xs font-bold tracking-[.15em] text-neutral-500">ALL WORK / PROJECTS</p> <h1 class="mt-4 text-6xl font-semibold tracking-[-.07em] md:text-8xl">Selected <span class="serif italic font-normal">projects.</span></h1> <p class="mt-6 max-w-xl text-neutral-600">A collection of projects, experiments, and ideas I've worked on.</p> <div class="mt-14 grid gap-7 md:grid-cols-2"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      $$renderer2.push(`<article class="overflow-hidden rounded-xl border border-[#d9d8d1] bg-white"><a${attr("href", resolve(`/projects/${project.slug}`))}><div class="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#e8e7e1]"><img${attr("src", resolve(project.image))}${attr("alt", `${project.name} preview`)} loading="lazy" class="h-full w-full object-contain"/></div></a> <div class="p-7"><p class="text-xs font-bold tracking-wider text-neutral-500">${escape_html(project.type)}</p> <h2 class="mt-3 text-3xl font-semibold">${escape_html(project.name)}</h2> <p class="mt-3 text-sm leading-7 text-neutral-600">${escape_html(project.desc)}</p> <a${attr("href", resolve(`/projects/${project.slug}`))} class="mt-5 inline-flex items-center gap-2 text-sm font-bold">View project `);
      Arrow_up_right($$renderer2, { size: 16 });
      $$renderer2.push(`<!----></a></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
