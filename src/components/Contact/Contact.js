import { contact } from '../../me.js';
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
	if (!contact.email) return null;
	return (
		<section className='section contact center' id='contact'>
			<h2 className='section__title'>Contact</h2>
			<a href={`mailto:${contact.email}`}>
				<span type='button' className='btn btn--outline'>
					Email me
				</span>
			</a>
			<a href='https://www.linkedin.com/in/aleksander-spetalen-450013209/'>
				<LinkedInIcon id='contact_icon_size' />
			</a>
		</section>
	);
};

export default Contact;
