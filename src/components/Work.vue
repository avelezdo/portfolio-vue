<template>
	<section class="section__body work">
		<div class="section__intro">
			<h2 class="section__header header-with-tag">Experiencia</h2>
			<div class="image-wrapper" style="float: right; margin-top: -15%">
				<div class="mobile-shape ms-left"></div>
				<img class="img" src="@/assets/images/work.jpg" alt="" width="260" />
				<div class="mobile-shape ms-right"></div>
			</div>
		</div>

		<div class="work-container"></div>
	</section>
</template>

<script>
import * as work from '@/assets/js/render-work.js';

export default {
	name: 'Work',
	mounted: async function () {
		// render jobs and attach show events
		await work.renderJobs(work.myJobs);
		work.attachShowEvent();
	},
};
</script>

//no scoped due to some parts in DOM are charged by JavaScript
<style lang="scss">
.work {
	padding: 5% 5%;
	border-bottom: 2px solid $blue__light-x;
	.section__intro {
		@include tablet {
			@include flex(column, flex-start, flex-start);
			flex-direction: column-reverse;
		}
		.about__content {
			align-self: center;
			margin-top: -20%;
		}
	}
}

.company-wrapper {
	&:first-child .job-wrapper .job-details {
		width: 120%;
	}
	margin: 2rem auto;
	padding: 1rem;
	cursor: pointer;
	border-left: 2px solid $blue__light;
	@include mobile {
		padding: 1rem 0;
		border-left: none;
		border-bottom: 1px solid $blue__light-x;
	}
	.about__content {
		@include tablet {
			@include flex(column, center, center);
		}
	}
	.job-content {
		@include flex(row, flex-start, flex-start);
		overflow-x: hidden;
	}
	.job-wrapper {
		width: 100%;
		padding-bottom: 1rem;
		// margin: 2rem auto;
		.job-headline-wrapper {
			@include flex(row, flex-start, center);
			@include mobile {
				@include flex(column, flex-start, flex-start);
			}
			img {
				margin-left: 1rem;
				margin-right: 1rem;
				opacity: 0.2;
			}
		}
		.job-headline {
			@include flex(row, auto, center);
			gap: 1rem;
		}
		.job-title {
			margin: 10px;
			letter-spacing: 1px;
			font-weight: 300;
			font-size: 1.8rem;
			transition: transform 200ms;
			@include mobile {
				font-size: 1.4rem;
			}
		}
		.job-title.hover {
			transform: translateY(-5px);
			transition: transform 200ms;
		}
		.job-details {
			margin: 0 10px 20px 10px;
			@include flex(row, flex-start, center);
			@include nav-collapse {
				@include flex(column, flex-start, flex-start);
			}
			h4 {
				font-weight: 300;
				font-size: 1.2rem;
				@include nav-collapse {
					margin-bottom: 20px;
				}
				@include mobile {
					font-size: 1.1rem;
				}
			}
			.job__tech-container {
				margin-left: 20px;
				.job__tech {
					justify-self: start;
					background: #ececec;
					font-size: 0.9em;
					padding: 2px 8px;
					margin: 6px;
					border-radius: 5px;
					white-space: no-wrap;
					&:first-child {
						margin-left: 0;
					}
				}
				@include nav-collapse {
					margin-left: 0px;
				}
			}
		}
	}
	.job-description {
		display: none;
		height: 0;
		overflow: hidden;
		transition: all 200ms ease-in-out;
	}
	.job-description.is-visible {
		display: block;
		transition: all 200ms ease-in-out;
		height: auto;
	}
}

ul.work-bullets {
	width: 80%;
	margin: 0 auto;
	font-size: 1.05rem;
	list-style: circle;
	li {
		margin: 10px 0;
		span.bold {
			font-weight: 900;
			color: $blue__med;
			font-size: 1.1rem;
		}
	}
}
</style>
