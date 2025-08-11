<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="bg-slate-50 dark:bg-slate-950 text-black dark:text-white min-h-svh w-full relative vazir">
      <menu class="w-full px-4 py-6 bg-white/5 dark:bg-black/5 backdrop-blur-2xl flex flex-wrap justify-between items-center">
        <h1 class="text-2xl text-slate-800 dark:text-slate-100 tracking-widest" id="name">{{ $t('name') }}</h1>
        <ul class="flex gap-8 justify-between items-center px-2" id="menu">
          <li><a href="#" class="transition-colors hover:text-blue-600">{{ $t('home')  }}</a></li>
          <li><a href="#" class="transition-colors hover:text-blue-600">{{ $t('services')  }}</a></li>
          <li><a href="#" class="transition-colors hover:text-blue-600">{{ $t('team')  }}</a></li>
          <li><a href="#" class="transition-colors hover:text-blue-600">{{ $t('contact')  }}</a></li>
        </ul>
      </menu>
      <div class="relative px-4">
        <div class="bg-linear-to-r from-slate-50 via-slate-600 to-slate-50 h-0.5 w-full"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);
const { t } = useI18n();
useHead({
  title: t('name'),
});

onMounted(() => {
	let name = SplitText.create("#name", { type: "chars" });
  let menu = SplitText.create("#menu",{ type: "words"  });
  gsap.from(name.chars, {
    duration: 1,
    x: "random(-100, 100)",
    y: "random(-150, 150)",
    opacity: 0,
    stagger: 0.2,
    scale: "random(0,5)",
    rotate: "random(-180,180)",
    ease: "power4.inOut",
    onComplete: () => split.revert()
  });
  gsap.from(menu.words, {
    y: "random(100,-100)",
    opacity: 0,
    stagger: 0.5,
    delay: 2.5,
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => split.revert()
  });
});
</script>

