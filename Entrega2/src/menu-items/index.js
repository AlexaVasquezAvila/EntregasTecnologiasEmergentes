// project import
import dashboard from './dashboard';
import students from './students';
import teachers from './teachers'; // Importamos el archivo teachers.js

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, students, teachers] // Agregamos "teachers" a los ítems del menú
};

export default menuItems;
