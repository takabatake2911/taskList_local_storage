import { createRoot } from 'react-dom/client';
import App from './components/App';
const $container = document.querySelector<HTMLDivElement>('#container');
if ($container === null) {
    throw new Error(
        "Container DOM not exist. Please create <div id='container'><div> at index.html."
    );
}
const root = createRoot($container);
root.render(<App />);
