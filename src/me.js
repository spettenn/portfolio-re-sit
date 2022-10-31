import rainyDays from './components/Projects/images/rainyDays.PNG';
import funToPlay from './components/Projects/images/f2pFirstImg.PNG';

const header = {
	homepage: 'https://github.com/spettenn',
	title: 'AS.',
};

const about = {
	name: 'Aleksander Spetalen',
	role: 'Front-End Developer',
	description:
		'I am a front-end developer from Oslo (Norway), currently i am working for a headhunting firm developing the website and CMS. I am passionate about web development and i am always looking for new challenges.',
	social: {
		linkedin: 'https://www.linkedin.com/in/aleksander-spetalen-450013209/',
		github: 'https://github.com/spettenn',
	},
};

const projects = [
	{
		name: 'Rainy Days',
		description:
			'This was my first initial project. The website is a e-comerce website selling rain related clothing.',
		stack: ['HTML', 'CSS', 'JavaScript'],
		sourceCode: 'https://github.com/spettenn/RainyDays',
		livePreview: 'https://loving-mccarthy-1cddeb.netlify.app/',
		image: rainyDays,
	},
	{
		name: 'Fun to play',
		description:
			'This was my first semester project. I made a e-comerce website for my friend who is selling fotball gols.',
		stack: ['HTML', 'CSS', 'JavaScript'],
		sourceCode: 'https://github.com/spettenn/FunToPlay',
		livePreview: 'https://musing-banach-c2b4b8.netlify.app',
		image: funToPlay,
	},
];

const skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'SASS',
	'Material UI',
	'Git',
	'Jest',
];

const contact = {
	email: 'Aleksanderspetalen@gmail.com',
};

export { header, about, projects, skills, contact };
