<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="bg-[#FFFCFB] dark:bg-slate-950 text-black dark:text-white min-h-svh w-full relative vazir">
      <menu class="w-full px-4 py-6 bg-white/50 dark:bg-black/50 flex flex-wrap justify-between items-center">
        <h1 class="text-2xl text-slate-800 dark:text-slate-100 tracking-widest">{{ $t('name') }}</h1>
        <Transition>
        <ul class="grid md:flex gap-8 justify-center justify-items-center rounded-t-lg md:justify-between items-center px-2 fixed md:relative bottom-0 bg-slate-600/10 dark:bg-slate-300/10 backdrop-blur-2xl md:bg-transparent right-0 w-full md:w-fit grid-cols-2 py-4 md:py-0 z-10" v-if="menu.mmenu">
          <li><a href="#" class="transition-colors hover:text-blue-600 dark:hover:text-blue-300">{{ $t('home')  }}</a></li>
          <li><a href="#" class="transition-colors hover:text-blue-600 dark:hover:text-blue-300">{{ $t('services')  }}</a></li>
          <li><a href="#" class="transition-colors hover:text-blue-600 dark:hover:text-blue-300">{{ $t('team')  }}</a></li>
          <li><a href="#" class="transition-colors hover:text-blue-600 dark:hover:text-blue-300">{{ $t('contact')  }}</a></li>
          <li class="bg-slate-950/30 dark:bg-slate-50/30 h-10 w-px hidden md:block"></li>
          <li @click="togglemenu('lang')">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 cursor-pointer" viewBox="0 0 16 16">
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
            </svg>
          </li>
          <li @click="togglemenu('theme')">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 cursor-pointer" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
            </svg>
          </li>
        </ul>
        </Transition>
        <button @click="togglemenu('mmenu')" class="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
          </svg>
        </button>
      </menu>
      <div class="relative px-4">
        <div class="bg-linear-to-r from-slate-50 via-slate-600 to-slate-50 h-0.5 w-full dark:from-slate-950 dark:via-slate-100 dark:to-slate-950"></div>
      </div>
      <Transition>
      <div v-if="menu.lang" class="fixed bottom-4 left-1/2 w-full px-2 -translate-x-1/2 flex justify-center">
        <div class="bg-slate-950/5 dark:bg-slate-50/5 rounded-md  backdrop-blur-2xl text-slate-950 dark:text-slate-50 px-3 md:px-12 py-2 flex flex-wrap gap-2 md:gap-12 border-slate-950 dark:border-slate-50 border-2 select-none w-full md:w-fit justify-around">
        <button class="cursor-pointer px-4 py-2 border-2 border-slate-950 dark:border-slate-50 bg-slate-950/20 dark:bg-slate-50/20 rounded-sm transition-colors hover:bg-slate-950/30 dark:hover:bg-slate-50/30" @click="changelang('en')">{{ $t('en')  }}</button>
        <button class="cursor-pointer px-4 py-2 border-2 border-slate-950 dark:border-slate-50 bg-slate-950/20 dark:bg-slate-50/20 rounded-sm transition-colors hover:bg-slate-950/30 dark:hover:bg-slate-50/30" @click="changelang('fa')">{{ $t('fa')  }}</button>
      </div>
      </div>
      </Transition>
      <Transition>
      <div v-if="menu.theme" class="fixed bottom-4 left-1/2 w-full px-2 -translate-x-1/2 flex justify-center">
		    <div class="bg-slate-950/5 dark:bg-slate-50/5 rounded-md  backdrop-blur-2xl text-slate-950 dark:text-slate-50 px-3 md:px-12 py-2 flex flex-wrap gap-2 md:gap-12 border-slate-950 dark:border-slate-50 border-2 select-none w-full md:w-fit justify-around">
		    <button class="cursor-pointer px-4 py-2 border-2 border-slate-950 dark:border-slate-50 bg-slate-950/20 dark:bg-slate-50/20 rounded-sm transition-colors hover:bg-slate-950/30 dark:hover:bg-slate-50/30" @click="changetheme('dark')">{{ $t('dark')  }}</button>
		    <button class="cursor-pointer px-4 py-2 border-2 border-slate-950 dark:border-slate-50 bg-slate-950/20 dark:bg-slate-50/20 rounded-sm transition-colors hover:bg-slate-950/30 dark:hover:bg-slate-50/30" @click="changetheme('system')">{{ $t('system')  }}</button>
        <button class="cursor-pointer px-4 py-2 border-2 border-slate-950 dark:border-slate-50 bg-slate-950/20 dark:bg-slate-50/20 rounded-sm transition-colors hover:bg-slate-950/30 dark:hover:bg-slate-50/30" @click="changetheme('light')">{{ $t('light')  }}</button>
      </div>
      </div>
      </Transition>
    </div>
  </div>
</template>
<script setup>
// imports
import { useI18n } from 'vue-i18n';
// i18n
const { t, locale, setLocale } = useI18n();
// menus
const menu = ref({
    lang: false,
    theme: false,
    mmenu: false
});
const togglemenu = (key) => {
     menu.value[key] = !menu.value[key];
         for (let skey in menu.value) {
          if(window.innerWidth < 768){
            if (skey !== key) {
              if(menu.value['mmenu'] == true){
                menu.value[skey] = false;
              }
            }
          }else{
            if(key == 'theme'){
              menu.value['lang'] = false;
            }
            if(key == 'lang'){
              menu.value['theme'] = false;
            }
          }
        }
}
const menuscreensize = ()=>{
  if(window.innerWidth >= 768){
    menu.value['mmenu'] = true;
  }else{
    menu.value['mmenu'] = false;
  }
}
// i18n changes
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true });
watch(locale, () => {
  useHead({
    title: t('name'),
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs.lang,
      dir: i18nHead.value.htmlAttrs.dir,
    },
  });
});
const changelang = async (lang) =>{
  try{
    await setLocale(lang);
  } catch (e){
    console.error('Error:', e)
  }
}
const pageTitle = computed(() => t('name'));
useHead({
  title: pageTitle,
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
    dir: i18nHead.value.htmlAttrs.dir,
  }
});
//theme
  
const loadTheme = () => {
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
}

onMounted(() => {
    loadTheme();
    menuscreensize();
    window.addEventListener("resize", menuscreensize);
})

const changetheme = (key) => {
    if(key == "system"){
      localStorage.removeItem("theme");
      loadTheme()
    }else{
      localStorage.theme = key;
      loadTheme();
    }
}
</script>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(80px);
  opacity: 0;
}
</style>
