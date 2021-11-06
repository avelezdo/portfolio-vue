import { projects as myProjects } from './projects.js';

let skills = ['Recent Projects', 'HTML & CSS', 'SCSS', 'JavaScript', 'Vue.js', 'Node.js & Express'];

let selectedSkill = null;

let renderSkills = function (num) {
	// map through the array of skills and return a
	// new array with the HTML to render each skill button
	let ul = document.querySelector('.list__skills'),
		newArr = skills.map((skill, index) => {
			if (index == Number.parseInt(num)) {
				selectedSkill = skill;
				return `<li class="skill-selector skill__active" data-id="${index}">${skill}</li>`;
			} else {
				return `<li class="skill-selector skill__inactive" data-id="${index}">${skill}</li>`;
			}
		});
	// attach the above generated HTML to the page
	// then, add the event listener to each button
	ul.innerHTML = newArr.join('');
	// document.querySelectorAll('project').forEach(project => {
	//   project.classList.add('slide-out-to-right');
	// })
	attachSkillEvent();
};

function attachSkillEvent() {
	let skillSelectors = document.querySelectorAll('.skill-selector');
	const projectsDestination = document.querySelector('.projects');
	// cycle through the skill buttons and make it so that
	// they render the associated project for that skill
	skillSelectors.forEach((skill) => {
		skill.addEventListener('mousedown', function (e) {
			renderSkills(e.target.dataset.id);
			renderProjects(filterProjects(selectedSkill));
			// using the scroll.js function to jump
			// down the page and view the projects
			if (window.scrollY <= 5) {
				scroll(projectsDestination);
			}
		});
	});
}

let renderProjects = function (arr, onload = false) {
	const projectList = document.querySelector('.list__projects'),
		allProjects = document.querySelectorAll('.project');
	// loader = document.querySelector('.projects #loader');
	// adding the exit animation
	allProjects.forEach((project, index) => {
		// project.classList.remove(`project-enter-${index + 1}`);
		if (!onload) {
			project.classList.add(`project-exit-${index + 1}`);
		}
	});
	// render the HTML necessary for each
	// project in the given array
	setTimeout(function () {
		projectList.innerHTML = arr
			.map((project, index) => {
				return `
      <li class="project project-enter-${index + 1}">
        <div class="project__description">
          <div class="project__header-row">
            <p class="section__headline project__name">${project.title}</p>
            <div>
              ${addProductionLink(project)}
            </div>
          </div>
          <p class="project__description section__copy">
            ${project.description}
          </p>
          <ul class="project__tech" data-project-name="recordshare">
            ${addTechnologies(project)}
          </ul>
        </div>
        <div>
          <img src="${project.image}" alt="${project.title} UI"
            data-project-name="${project.title.toLowerCase()}" class="img project__img">
        </div>
      </li>
    `;
			})
			.join('');
	}, 500);

	document.querySelector('.projects-listed').innerHTML = `
    ${arr.length === 1 ? `${arr.length} of ${myProjects.length} project listed` : `${arr.length} of ${myProjects.length} projects listed`}
  `;
};

let addProductionLink = function (project) {
	return project.production_link !== ''
		? `            
                <a href="${project.production_link}" target="_blank">
                  <img src="./images/social-icons/production_icon.png" width="32"
                  class="project__link">
                </a>`
		: '';
};

let addTechnologies = function (project) {
	return project.technologies
		.map((tech) => {
			return `<li>${tech}</li>`;
		})
		.join('');
};

let filterProjects = function (query) {
	if (selectedSkill === 'All') {
		return myProjects;
	}
	if (selectedSkill === 'Recent Projects') {
		return myProjects.filter((item, index) => index < 3);
	}

	return myProjects.filter((p) => p.technologies.includes(query));
};

export { renderSkills, attachSkillEvent, renderProjects, myProjects };
