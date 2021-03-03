import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as PhotosIcon } from '../../Assets/feed.svg';
import { ReactComponent as StatisticsIcon } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhotoIcon } from '../../Assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [isActiveMobileMenu, setisActiveMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setisActiveMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileMenuButton} ${
            isActiveMobileMenu && styles.mobileMenuButtonActive
          }`}
          onClick={() => setisActiveMobileMenu(!isActiveMobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          isActiveMobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <PhotosIcon /> {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/account/statistics" activeClassName={styles.active}>
          <StatisticsIcon /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/account/post" activeClassName={styles.active}>
          <AddPhotoIcon /> {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={userLogout}>
          <LogoutIcon /> {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
