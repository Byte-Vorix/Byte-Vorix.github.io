<template>
	<div>
		<div
			class="bg-[color:hsl(0,0%,90%)] dark:bg-[color:hsl(0,0%,0%)] text-[color:hsl(0,0%,5%)] dark:text-[color:hsl(0,0%,95%)] min-h-svh w-full relative vazir">
			<MainMenu />
			<main class="w-full min-h-svh">
				<div class="relative px-4">
					<div
						class="bg-linear-to-r from-slate-50 via-blue-600 to-slate-50 h-0.5 w-full dark:from-slate-950 dark:via-green-400 dark:to-slate-950">
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
<script setup>
import MainMenu from './components/MainMenu.vue';
const { t, locale, setLocale } = useI18n();
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true });
const pageTitle = computed(() => t('name'));
useHead({
	title: pageTitle,
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs.lang,
		dir: i18nHead.value.htmlAttrs.dir,
		class: 'scroll-smooth',
	}
});
watch(locale, () => {
	useHead({
		title: t('name'),
		htmlAttrs: {
			lang: i18nHead.value.htmlAttrs.lang,
			dir: i18nHead.value.htmlAttrs.dir,
		},
	});
});
onMounted(()=>{
	document.querySelector("main").style.paddingTop = document.querySelector("menu").offsetHeight + "px";
	window.addEventListener("resize",()=>{
		document.querySelector("main").style.paddingTop = document.querySelector("menu").offsetHeight + "px";
	});
});
</script>
<style>
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
