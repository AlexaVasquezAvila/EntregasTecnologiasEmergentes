// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

import { lazy } from 'react';

const Teachers = Loadable(lazy(() => import('../pages/teachers')));
const Create = Loadable(lazy(() => import('../pages/teachers/Create')));
const Edit = Loadable(lazy(() => import('../pages/teachers/components/edit')));

// ==============================|| MAIN ROUTING - TEACHERS ||============================== //

const TeachersRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'teachers', // ruta asignada en menu-items
        element: <Teachers /> // la vista de estudiantes
      },
      {
        path: 'teachers/create',
        element: <Create />
      },
      {
        path: 'teachers/edit/:teacherId',
        element: <Edit />
      }
    ]
  }
];

export default TeachersRoutes;
