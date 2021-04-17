<template>
	<section class="section__body about">
		<div class="about__content">
			<div class="image-wrapper">
				<div class="mobile-shape ms-left"></div>
				<img class="img" src="@/assets/images/about-alberto.png" alt="Headshot profile photo" width="260" height="260" />
				<div class="mobile-shape ms-right"></div>
			</div>
			<div>
				<div style="display: flex; justify-content: space-between; align-items: flex-start">
					<h2 class="section__header">About</h2>
					<ul class="nav__icons">
						<li>
							<a href="https://github.com/mpaitgt" target="_blank">
								<img class="nav__icon" src="@/assets/images/social-icons/github.png" alt="Github icon" />
							</a>
						</li>
						<li>
							<a id="email-link" href="mailto:mattpignatore@gmail.com">
								<img id="email-icon" class="nav__icon" src="@/assets/images/social-icons/email-2.png" alt="Email icon" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/matt-pignatore/" target="_blank">
								<img class="nav__icon" src="@/assets/images/social-icons/linked-in.png" alt="LinkedIn icon" />
							</a>
						</li>
						<li>
							<a href="https://www.twitter.com/matt_pignatore" target="_blank">
								<img id="twitter-icon" class="nav__icon" src="@/assets/images/social-icons/twitter.png" alt="Twitter icon" />
							</a>
						</li>
					</ul>
				</div>
				<p class="about__intro">Full-stack web developer with experience in&nbsp;UI/UX&nbsp;design.</p>
				<div id="intro-svg"></div>
				<p class="section__copy">
					With a passion for creativity and problem-solving, I have experience establishing organized design systems and bringing UI frameworks to
					life. I'm a life-long learner always interested in new languages, frameworks, and&nbsp;methodologies.
				</p>
				<p class="section__copy">
					Currently I am freelancing on a SaaS product called Bearclaw, where I am designing the software's UI/UX, but am actively seeking new
					work&nbsp;opportunities.
				</p>
				<p class="section__copy">
					When I'm not coding you can find me writing and producing songs, watching movies with my wife (and my dog too, sure!), and experimenting in
					the&nbsp;kitchen.
				</p>
				<p class="section__copy">
					You can reach me at
					<a href="mailto:mattpignatore@gmail.com"> <strong>mattpignatore@gmail.com&nbsp;&#187;</strong></a>
				</p>
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
