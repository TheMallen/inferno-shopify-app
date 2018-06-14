import { render } from 'inferno';
import App from './App';
import './index.css';

const rootElement = document.getElementById("app");
rootElement.innerHTML = '';

render(
  <App/>,
  rootElement
);
