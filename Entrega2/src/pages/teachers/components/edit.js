// project imports
import { useState, useEffect } from 'react';
import TeacherForm from './TeachersForm'; // Importamos el formulario de Teachers

const Edit = () => {
  // Ejemplo de datos de un profesor
  const teacher = {
    name: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@example.com',
    phone: '0987654321',
    address: '456 Elm Street',
    age: 35,
    gender: 'female',
    typeDocument: 'passport',
    numberDocument: 'AB1234567',
    dateBirth: '1988-04-12'
  };

  return <TeacherForm teacher={teacher} isEdit />;
};

export default Edit;
