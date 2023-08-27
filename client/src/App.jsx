import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameCollection from './pages/GameCollection';
import Login from './pages/Login';
import Emulator from './pages/Emulator';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/collection',
        element: <GameCollection />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/emulator',
        element: <Emulator />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
