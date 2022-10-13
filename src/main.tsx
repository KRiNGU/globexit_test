import { createRoot } from 'react-dom/client';
import Cards from './views/Cards/Cards';

const rootNode = document.getElementById('root');

if (rootNode) {
  createRoot(rootNode).render(<Cards />);
}
