import './index.css';
import App from './App';


import { createRoot } from 'react-dom/client';
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);