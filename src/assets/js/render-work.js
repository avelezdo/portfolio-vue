const myJobs = [
	{
		company: 'Solid Stack',
		works: [
			{
				title: 'Desarrollador Web FullStack / Corresponsable del proyecto',
				name: 'Zigma',
				duration: '2018 - Actualidad',
				technologies: ['Hermes', 'CSS', 'Bootstrap', 'jQuery', 'C#', 'SQL Server'],
				type: 'Proyecto',
				github_link: '',
				production_link: '',
				description: 'ERP para una empresa internacional manufacturadora aeronáutica llamada Sofitec.',
				bullets: [
					'Se desarrolló un framework desde cero basado en componentes. Actualmente sigue en proceso de mejora continua.',
					'Análisis de los requisitos del cliente para ofrecer la opción óptima, tanto en tiempo como usabilidad.',
					'Ciclos de trabajo (sprint) de dos semanas.',
				],
			},
			{
				title: 'Desarrollador Web FullStack',
				name: 'Picly',
				duration: '2017 - 2019',
				technologies: ['Node.js/Express', 'CSS', 'Bootstrap', 'jQuery', 'Redis', 'Nginx', 'Hotjar'],
				type: 'Producto',
				github_link: '',
				production_link: 'https://picly.io',
				description: 'Un servidor de imágenes con transformaciones al vuelo a través de urls.',
				bullets: [
					'Encargado del landing page así como de la interfaz de la aplicación del usuario.',
					'Apliqué conocimientos de UX para presentar la información de una manera cómoda y rápida al visitante.',
					'Trabajo en equipo, en la que todos estuvieron comprometidos y aportando más allá de lo púramente técnico.',
					'Se aplicaron metodologías ágiles durante la elaboración y procesos de negocio una vez que la aplicación estaba en producción.',
					'También me encargué de configurar herramientas de análisis como Google Analytics y Hotjar.',
				],
			},
		],
	},
	{
		company: 'Telecontrol STM',
		works: [
			{
				title: 'Desarrollador Web Fullstack / Soporte',
				name: 'Iris',
				duration: '2012 - 2017',
				technologies: ['HTML', 'CSS', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'Azure', 'APIs'],
				type: 'Producto',
				github_link: '',
				production_link: '',
				description: 'Sistema de telegestión y telemedida de contadores digitales (STG).',
				bullets: [
					'Partícipe desde la concepción del producto hasta su explotación comercial.',
					'Pioneros en llevar la tecnología Azure al sector eléctrico, ofreciendo la posibilidad de pago por uso.',
					'Sistema que sigue en producción en varios clientes internacionales, dando soporte a miles de contadores digitales.',
				],
			},
			{
				title: 'Desarrollador Web Fullstack',
				name: 'iControl',
				duration: '2016',
				technologies: ['HTML', 'CSS', 'jQuery', 'Node.js/Express', 'MySQL', 'Nginx'],
				type: 'Proyecto',
				github_link: '',
				production_link: '',
				description: 'Panel de administración de medidas para compañía eléctrica.',
				bullets: [],
			},
			{
				title: 'Desarrollador Web Fullstack',
				name: 'PRIME DHE Server',
				duration: '2016',
				technologies: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'ASP.NET Core', 'Azure', 'SQL Server'],
				type: 'Producto',
				github_link: '',
				production_link: '',
				description: 'Contador digital virtualizado para compañías eléctricas.',
				bullets: [],
			},
			{
				title: 'Desarrollador Web Fullstack',
				name: 'Voyager',
				duration: '2013',
				technologies: ['HTML', 'CSS', 'Bootstrap', 'Angular.js', 'Node.js/Express', 'MySQL', 'Nginx'],
				type: 'Producto',
				github_link: '',
				production_link: '',
				description: 'Sistema de control para compañías eléctricas.',
				bullets: [],
			},
		],
	},
];

let renderJobs = function (jobs) {
	const work = document.querySelector('.work-container');

	work.innerHTML = jobs
		.map((job, index) => {
			return `
      <div class="company-wrapper">
        <h3 class="section__headline large">
        ${job.company}
        </h3>
        ${job.works
			.map((work) => {
				return `<div class="job-wrapper">
          <div class="job-headline-wrapper">
            <div class='job-headline'>
              <h3>${work.name}</h3>
              <h5>(${work.type})</h5>
            </div>
          </div>
          <div class='job-content'>
            <div>
              <h3 class="job-title">${work.title}</h3>
              <div class="job-details">
                <h4>${work.duration}</h4>
                <div class="job__tech-container">
                  ${work.technologies
						.map((tech) => {
							return `<span class="job__tech">${tech}</span>`;
						})
						.join('')}
                </div>
                </h4>
              </div>
            </div>
          </div>
          <div class="job-description${index === 0 ? ' is-visible' : ''}">
            <p class="section__copy">
              ${work.description}
            </p>
            <ul class="work-bullets">
              ${work.bullets
					.map((bullet) => {
						return `<li>${bullet}</li>`;
					})
					.join('')}
            </ul>
          </div>
        </div>`;
			})
			.join('')}
        
      </div>
    `;
		})
		.join('');
};

let attachShowEvent = function () {
	document.querySelectorAll('.job-wrapper').forEach(function (item) {
		item.addEventListener('click', function () {
			const allJobs = document.querySelectorAll('.job-description');
			const thisJob = item.querySelector('.job-description');

			if (thisJob.classList.contains('is-visible')) {
				hideElement(thisJob);
			} else {
				for (let i = 0; i < allJobs.length; i++) {
					if (allJobs[i].classList.contains('is-visible')) {
						hideElement(allJobs[i]);
					}
				}
				showElement(thisJob);
			}
		});
	});
};

// work job description height animation
const showElement = (el) => {
	const getHeight = () => {
		el.style.display = 'block';
		let height = el.scrollHeight + 'px';
		el.style.display = '';
		return height;
	};

	let height = getHeight();
	el.classList.add('is-visible');
	el.style.height = height;
	// el.querySelector('.fading-arrow').classList.add('close');
};

const hideElement = (el) => {
	el.style.height = el.scrollHeight + 'px';

	window.setTimeout(function () {
		el.style.height = '0';
	}, 1);

	window.setTimeout(function () {
		el.classList.remove('is-visible');
		// el.querySelector('.fading-arrow').classList.remove('close');
	}, 200);
};

export { renderJobs, myJobs, attachShowEvent };
