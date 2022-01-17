<template>
	<nav class="navbar nav__top">
		<div>
			<h1 class="nav__header">Alberto Vélez</h1>
		</div>
		<div class="mobile-nav__container">
			<ul class="nav__ul">
				<li class="nav__link" data-name="about">Sobre mí</li>
				<li class="nav__link" data-name="work">Experiencia</li>
				<li class="nav__link" data-name="projects">Proyectos</li>
				<li class="nav__link CV" data-name="CV" title="Descargar CV">
					<a href="https://www.dropbox.com/s/cbrw880zet31l3d/Alberto%20V%C3%A9lez%20CV.pdf?raw=1" download="Alberto Vélez CV" target="_blank"
						>CV
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWRJREFUWEftljFOxDAQRceDqLMVVwAWpG2pqBKbHCAcAAmJgooLsHAASoS0NyAHADupqGgRghVXoEtawgwyChIFCYkDZJHixpLlmf/me2xZQM9D9KwPA8D/dSCKoqUsy04AgD3Pm8Zx/OrST84OKKV2mPnKigohQq319Z8CBEEQCSEurSgz7yZJEg8AgwODA7/ugFJqg4jGVggRt5j5qHwHzojotlx/1Fo/NIVp/BD5vr+OiHcAsPxN8hcimqRpOm8C0RggDMNxURT3QgisS8zMxMybPw5gRaWUe8w8q4FgADg0xpw3qf79+Jpu/NhXA9Fa3AmgwgkncWcAG6iU2ieii7LzD7TWs7ZudgIoISZ21lrb2+E0WveAk0pN0OICSClXiOgGEVe7VE1ET4i4bYx5/ipPpQNSygAATBfxT7HSGJO0ArCfzjzPjwFgrQsEEc1Ho9Fp1ad1cXugS9VtYgcHenfgDXY2tSHuZo1IAAAAAElFTkSuQmCC"
							alt="Download file icon"
					/></a>
				</li>
				<!-- <li class="nav__link" data-name="recommendations">Testimonials</li> -->
				<!-- <li class="nav__link" data-name="contact">Contacto</li> -->
			</ul>
		</div>
		<div id="burger">
			<div class="line line-1"></div>
			<div class="line line-2"></div>
			<div class="line line-3"></div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	mounted: function () {
		const burger = document.getElementById('burger'),
			navContents = document.querySelector('.mobile-nav__container'),
			navItems = document.querySelectorAll('.nav__link');

		burger.addEventListener('click', function () {
			navContents.classList.toggle('toggle-nav');
		});

		navContents.addEventListener('transitionend', function () {
			if (navContents.classList.contains('toggle-nav')) {
				navItems.forEach((item, index) => {
					item.classList.add(`appear-${index + 1}`);
				});
			} else {
				navItems.forEach((item, index) => {
					item.classList.remove(`appear-${index + 1}`);
				});
			}
		});

		navItems.forEach((item) => {
			item.addEventListener('click', function () {
				navContents.classList.toggle('toggle-nav');
			});
		});
	},
};
</script>

<style lang="scss" scoped>
nav.navbar {
	@include flex(row, space-around, center);
	z-index: 1;
	background: $blue__dark;
	color: $white;
	padding: 1rem;
	box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.1);
	margin-top: 10px;
	position: relative;
	@include nav-collapse {
		margin-top: 0px;
		@include flex(row, space-between, center);
		padding-left: 2rem;
		padding-right: 2rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.nav__header {
		font-family: 'Fira Sans', arial, sans-serif;
		font-size: 1.8rem;
		letter-spacing: 1px;
		cursor: pointer;
		@include mobile {
			font-size: 1.5rem;
		}
	}
	.mobile-nav__container {
		background: $blue__dark;
		z-index: -1;
		@include flex(row, space-between, center);
		@include nav-collapse {
			margin-top: 50px;
			position: fixed;
			right: 0;
			top: 0;
			transform: translateY(-200%);
			width: 100%;
			transition: all 0.25s;
			z-index: -99;
		}
	}
	.nav__ul {
		@include flex(row, center, center);
		list-style: none;
		@include nav-collapse {
			@include flex(column, space-evenly, flex-start);
			padding: 2rem 0;
		}
		@include mobile {
			@include flex(column, space-evenly, flex-start);
		}
		.nav__link {
			padding: 8px 12px;
			cursor: pointer;
			transition: all 0.25s;
			@include nav-collapse {
				transform: translateX(-500%);
				font-size: 1.4rem;
				padding-left: 2rem;
				margin-top: 1rem;
				margin-bottom: 1rem;
				margin: 5px;
				text-align: center;
			}
			&:hover {
				background: $white;
				color: $blue__dark;
				img {
					filter: brightness(0);
				}
			}
		}
		.CV img {
			height: 20px;
			margin-bottom: -3px;
			filter: brightness(10);
		}
		@for $i from 1 through 6 {
			.nav__link.appear-#{$i} {
				animation: mobile-navigation 500ms ease-out 60ms 1 forwards;
			}
		}
	}
	#burger {
		display: none;
		width: 32px;
		height: 32px;
		cursor: pointer;
		@include nav-collapse {
			display: inline-block;
		}
		.line {
			width: 100%;
			height: 2px;
			background: white;
			margin-top: 7px;
			margin-bottom: 7px;
			border-radius: 5px;
		}
	}
	.toggle-nav {
		transform: translateY(0%);
		transition: all 0.15s;
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
