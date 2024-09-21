import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// Importar las rutas de estudiantes y docentes
import StudentsRoutes from './StudentsRoutes';
import TeachersRoutes from './TeachersRoutes'; // Importa las rutas de Teachers

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    // Incluir las rutas de estudiantes
    ...StudentsRoutes,
    // Incluir las rutas de profesores
    ...TeachersRoutes // Agregamos las rutas de Teachers aquí
  ]
};

export default MainRoutes;
