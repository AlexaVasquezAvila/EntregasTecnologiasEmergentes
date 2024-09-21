// assets
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==============================|| MENU ITEMS - TEACHERS ||============================== //

const teachers = {
  id: 'teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'teachers-list',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default teachers;
