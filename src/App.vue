<template>
	<div id="app">
		<Navbar />
		<div class="container">
			<About />
			<Work />
			<Projects />
			<!-- <Testimonials /> -->
			<!-- <Contact /> -->
		</div>
		<Footer />
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Projects from './components/Project.vue';
// import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
// import Testimonials from './components/Testimonials.vue';

import initScroll from './assets/js/scroll.js';

export default {
	name: 'App',
	components: {
		Navbar,
		About,
		Work,
		Projects,
		// Testimonials,
		// Contact,
		Footer,
	},
	mounted: async function () {
		// animations
		initScroll();
	},
};
</script>

<style lang="scss" scoped>
// #app {
// 	font-family: Avenir, Helvetica, Arial, sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: #2c3e50;
// 	margin-top: 60px;
// }
</style>
