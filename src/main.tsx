import { createRoot } from 'react-dom/client';
import { Main } from '@/pages/Main';

const container = document.querySelector('main');
if (!container) {
  throw new Error('Root element `main` not found');
}

const root = createRoot(container);
root.render(<Main />);