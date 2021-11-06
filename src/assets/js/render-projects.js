let myProjects = [
	{
		id: 101,
		title: 'Portfolio',
		image: 'images/project-images/alt-dough.JPG',
		technologies: ['HTML & CSS', 'Vue.js', 'SCSS'],
		description: 'Portfolio creado con Vue.js 2',
		github_link: 'https://github.com/avelezdo/portfolio-vue',
		production_link: 'https://www.alternativedough.com',
	},
];

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
              ${
					project.production_link !== ''
						? `            
                <a href="${project.production_link}" target="_blank">
                  <img src="./images/social-icons/production_icon.png" width="32"
                  class="project__link">
                </a>`
						: ''
				}
              ${
					project.github_link !== ''
						? `            
                <a href="${project.github_link}" target="_blank">
                  <img src="./images/social-icons/github.png" width="32"
                  class="project__link" alt="${project.title} Github Repo">
                </a>`
						: ''
				}
            </div>
          </div>
          <p class="project__description section__copy">
            ${project.description}
          </p>
          <ul class="project__tech" data-project-name="recordshare">
            ${project.technologies
				.map((tech) => {
					return `<li>${tech}</li>`;
				})
				.join('')}
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
	}, 1000);

	document.querySelector('.projects-listed').innerHTML = `
    ${arr.length === 1 ? `${arr.length} of ${myProjects.length} project listed` : `${arr.length} of ${myProjects.length} projects listed`}
  `;
};

let filterProjects = function (query) {
	let newProjectsList = [];
	if (selectedSkill === 'All') {
		return myProjects;
	}
	// if the user wants to display Recent Projects, serve them
	// the first two items in the myProjects array
	if (selectedSkill === 'Recent Projects') {
		return myProjects.filter((item, index) => index < 3);
	}
	// loop over each project
	for (let i = 0; i < myProjects.length; i++) {
		// loop over each technology per project
		for (let t = 0; t < myProjects[i].technologies.length; t++) {
			// if the selected skill button matches a project's
			// technology, then add the project to the array
			if (myProjects[i].technologies[t] === query) {
				newProjectsList.push(myProjects[i]);
			}
		}
	}
	// return the filtered projects list
	return newProjectsList;
};

export { renderSkills, attachSkillEvent, renderProjects, myProjects };
