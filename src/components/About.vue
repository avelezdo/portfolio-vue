<template>
	<section class="section__body about">
		<div class="about__content">
			<div class="image-wrapper">
				<div class="mobile-shape ms-left"></div>
				<img class="img profile-photo" src="@/assets/images/about-alberto.png" alt="Headshot profile photo" width="260" height="260" />
				<div class="mobile-shape ms-right"></div>
			</div>
			<div id="about-info__wrapper">
				<div class="about__upper">
					<h2 class="section__header">Sobre mí</h2>
					<ul class="nav__icons">
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
				</div>
				<p class="about__intro">Desarrollador web con experiencia en UI/UX.</p>
				<div id="intro-svg"></div>
				<article>
					<p class="section__copy">
						Programador profesional desde el 2012 tomando como piedra angular el código limpio. En un principio como desarrollador fullstack, poco a
						poco he ido centrándome cada vez más en la parte frontend, aunque sin dejar el backend del todo.
					</p>
					<p class="section__copy">
						A medida que he ido creciendo tanto personal como profesionalmente, me he dado cuenta que tanto o más son importantes las llamadas 'soft
						skills' que la propia destreza técnica; el saber escuchar, trabajar en equipo y la buena comunicación son imprescindibles para el buen
						desempeño de nuestra profesión.
					</p>
					<!-- <p class="section__copy">En estos momentos estoy en búsqueda activa de nuevos retos y oportunidades.</p> -->
					<p class="section__copy">
						Me puedes encontrar en
						<a href="mailto:albertovelezdev@gmail.com"> <strong>albertovelezdev@gmail.com&nbsp;&#187;</strong></a>
					</p>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'About',
};
</script>

<style lang="scss">
.about {
	padding: 10% 5%;
}

.profile-photo {
	object-fit: cover;
}

#about-info__wrapper {
	padding: 0 1rem;
}

.about__upper {
	@include flex(row, space-between, center);
}

.about__content {
	@include flex(row, center, center);
	@include tablet {
		@include flex(column, center, center);
	}

	> div {
		display: flex;
		flex-direction: column;
		.section__headline {
			display: inline;
			align-self: flex-start;
		}
	}
	.about__intro {
		font-size: 1.2rem;
		font-family: 'Fira Sans', arial, sans-serif;
		margin-bottom: 10px;
		color: $gray;
	}
}

.nav__icons {
	@include flex(row, center, center);
	list-style: none;
	.nav__icon {
		width: 24px;
		opacity: 0.2;
		margin: 0 10px;
	}
}
</style>
