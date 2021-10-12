<template>
	<footer class="navbar">
		<div class="footer__social">
			<ul class="nav__ul">
				<li>
					<a href="https://www.linkedin.com/in/alberto-v%C3%A9lez-51155320/" target="_blank">
						<img class="nav__icon" src="@/assets/images/social-icons/linked-in.png" alt="LinkedIn icon" />
					</a>
				</li>
				<li>
					<a href="https://github.com/avelezdo" target="_blank">
						<img class="nav__icon" src="@/assets/images/social-icons/github.png" alt="Github icon" />
					</a>
				</li>
				<li>
					<a id="email-link" href="mailto:albertovelezdev@gmail.com">
						<img id="email-icon" class="nav__icon" src="@/assets/images/social-icons/email-2.png" alt="Email icon" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/avelezdo" target="_blank">
						<img id="twitter-icon" class="nav__icon" src="@/assets/images/social-icons/twitter.png" alt="Twitter icon" />
					</a>
				</li>
			</ul>
			<div>
				<p class="foot__copyright">&copy; <span id="year"></span> Alberto Vélez</p>
				<span class="based-on">Basado en la web de <a href="https://mattpignatore.dev/" target="_blank">Matt Pignatore</a></span>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	mounted: function () {
		let year = new Date().getFullYear();
		document.querySelector('#year').innerText = year;
	},
};
</script>

<style lang="scss" scoped>
footer.navbar {
	@include flex(column, space-around, center);
	background: $blue__dark;
	color: $white;
	padding: 1rem;
	box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
	position: relative;
	@include nav-collapse {
		margin-bottom: 0;
	}
	@include mobile {
		@include flex(column, center, center);
	}
	.nav__header {
		font-family: 'Fira Sans', arial, sans-serif;
		font-size: 1.8rem;
		letter-spacing: 1px;
		cursor: pointer;
	}
	.nav__ul {
		@include flex(row, center, center);
		list-style-type: none;
		transform: translateY(3px);
		@include mobile {
			@include flex(row, space-around, center);
			width: 100%;
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
	}
	.nav__icon {
		@include icon_hover(32px, invert(0.5), invert(1));
	}
	.foot__copyright {
		font-size: 0.9em;
		letter-spacing: -0.5px;
		font-weight: 700;
	}
	.footer__social {
		.based-on {
			font-size: 13px;
		}
		.based-on a {
			color: #b8b8ef;
		}
		@include flex(row, space-around, center);
		width: 100%;
		@include mobile {
			@include flex(column, center, center);
		}
	}
}
@keyframes mobile-navigation {
	0% {
		transform: translateX(-500%);
		opacity: 0;
	}
	30% {
		transform: translateX(50%);
	}
	60% {
		transform: translateX(0%);
		opacity: 1;
	}
	80% {
		transform: translateX(8%);
	}
	100% {
		transform: translateX(0%);
		opacity: 1;
	}
}

@keyframes close-mobile-navigation {
	0% {
		transform: translateY(0%);
		opacity: 1;
	}
	100% {
		transform: translateY(100%);
		opacity: 0;
	}
}
</style>
