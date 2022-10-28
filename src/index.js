import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from './mode/mode';
import './index.css';

render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
