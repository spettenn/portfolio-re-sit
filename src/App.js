import { useContext } from 'react';
import { ThemeContext } from './mode/mode.js';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Project.js';
import Skills from './components/Skill/Skill.js';
import ScrollToTop from './components/Scroll/Scroll.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

const App = () => {
	const [{ themeName }] = useContext(ThemeContext);

	return (
		<div id='top' className={`${themeName} app`}>
			<Header />

			<main>
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>

			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default App;
