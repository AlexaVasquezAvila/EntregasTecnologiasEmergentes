// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

import { lazy } from 'react';

const Students = Loadable(lazy(() => import('../pages/students')));
const Create = Loadable(lazy(() => import('../pages/students/Create')));
const Edit = Loadable(lazy(() => import('../pages/students/components/edit'))); // Ruta corregida si 'edit.js' está en 'components'

// Definición de las rutas de estudiantes
const StudentsRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'students', // ruta asignada en menu-items
        element: <Students /> // la vista de estudiantes
      },
      {
        path: 'students/create',
        element: <Create />
      },
      {
        path: 'students/edit/:studentId',
        element: <Edit />
      }
    ]
  }
];

export default StudentsRoutes;
