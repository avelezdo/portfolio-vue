<template>
	<section class="section__body projects">
		<h2 class="section__header header-with-tag">Proyectos</h2>
		<!-- <p class="section__copy">
			I've pinned some of my recent projects. If you'd like to see other projects I've worked on, you can sort through the applied skills and technologies
			below.
		</p> -->
		<!-- This is where skills will render -->
		<ul class="list__skills"></ul>
		<p class="section__copy projects-listed"></p>
		<!-- This is where projects will render -->
		<ul class="list__projects"></ul>
	</section>
</template>

<script>
import * as projects from '@/assets/js/render-projects.js';
function compare(a, b) {
	if (a.id < b.id) {
		return 1;
	}
	if (a.id > b.id) {
		return -1;
	}
	return 0;
}
export default {
	name: 'Project',
	mounted: async function () {
		// render projects
		const sortedProjects = projects.myProjects.sort(compare);
		await projects.renderSkills(0);
		projects.attachSkillEvent();

		await projects.renderProjects(
			sortedProjects.filter((_, index) => index < 3),
			true
		);
	},
};
</script>

<style lang="scss">
.list__projects {
	height: auto;
}

.projects {
	padding: 5%;
	.skill-selector {
		list-style: none;
		display: inline-block;
		padding: 0.5rem 1rem;
		margin: 6px;
		font-size: 1.1em;
		border-radius: 2px;
		cursor: pointer;
		@include nav-collapse {
			font-size: 0.9rem;
		}
	}
	.projects-listed {
		text-align: right;
		font-family: 'Fira Sans';
		letter-spacing: 1px;
		color: $gray__light;
		padding-top: 1rem;
		padding-bottom: 0.5rem;
	}
	.skill__active {
		background: $blue__light;
		color: $blue__med;
	}
	.skill__inactive {
		background: #f5f5f5;
	}
	.project {
		@include flex(row, center, center);
		margin: 2rem 0;
		max-height: 250px;
		gap: 3rem;
		box-shadow: $project_shadow;
		padding: 20px;
		transform: translateX(-300%);
		border-radius: 4px;
		@include mobile {
			@include flex(column, center, center);
			max-height: fit-content;
			gap: 1rem;
		}
		.project__header-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			@include tablet {
				padding-right: 0;
			}
		}
		.project__info {
			display: flex;
			flex-direction: column;
			width: 60%;
			@include tablet {
				width: 100%;
			}
		}
		.project__description {
			min-height: 60px;
			color: $gray;
			font-size: 1.2rem;
			max-width: 90%;
			padding-bottom: 20px;
			width: 100%;
			@include nav-collapse {
				font-size: 1.1rem;
			}
			@include tablet {
				padding-bottom: 10px;
			}
		}
		.project__img {
			width: 340px;
			border-radius: 2px;
			@include tablet {
				margin-top: 1rem;
				margin-bottom: 1.5rem;
				width: 100%;
			}
		}
		.project__tech {
			list-style: none;
			display: grid;
			grid-template-columns: 33.33% 33.33% 33.33%;
			@include nav-collapse {
				grid-template-columns: 50% 50%;
			}
			@include tablet {
				grid-template-columns: 33.33% 33.33% 33.33%;
			}
			@include mobile {
				grid-template-columns: 50% 50%;
				justify-self: center;
			}
			li {
				justify-self: start;
				background: #ececec;
				font-size: 0.9em;
				padding: 2px 8px;
				margin: 6px;
				border-radius: 5px;
			}
			@include mobile {
				justify-self: center;
			}
		}
	}
	#loader {
		display: none;
	}
}

.project__link {
	width: 28px;
	opacity: 0.2;
	margin: 0 10px;
}

@for $i from 1 through 8 {
	.project-enter-#{$i} {
		animation: slide-in-from-left 0.5s linear #{$i / 12}s 1 forwards;
	}
}

@for $i from 1 through 8 {
	.project-exit-#{$i} {
		animation: slide-out-to-right 0.5s linear #{$i / 8}s 1 backwards;
	}
}

.project.onload {
	transform: translateX(0%);
}

@keyframes slide-in-from-left {
	0% {
		transform: translateX(-300%);
	}
	100% {
		transform: translateX(0%);
	}
}
@keyframes slide-out-to-right {
	0% {
		transform: translateX(0%) translateY(0%) rotate(0deg);
		transform-origin: bottom right;
		opacity: 1;
	}
	100% {
		transform: translateX(0%) translateY(10%) rotate(-45deg);
		transform-origin: bottom right;
		opacity: 0;
	}
}
</style>
