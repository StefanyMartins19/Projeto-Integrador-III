import { RouterProvider } from 'react-router';
import { DarkModeToggle } from './components/DarkModeToggle';
import { router } from './routes';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <DarkModeToggle />
    </>
  );
}
