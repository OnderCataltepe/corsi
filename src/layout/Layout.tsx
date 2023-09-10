import { Outlet } from 'react-router-dom';
import homeIcon from '~/assets/icons/home.svg';

const Layout = (): JSX.Element => {
  return (
    <div bg="sky-100" min-h="screen" flex="~ col" p="4">
      <a href="/" flex="~ self-start" m="b-2">
        <img alt="home icon" src={homeIcon} />
      </a>
      <div flex="~ col items-center justify-center 1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
