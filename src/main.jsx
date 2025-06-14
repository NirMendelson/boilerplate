import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
);