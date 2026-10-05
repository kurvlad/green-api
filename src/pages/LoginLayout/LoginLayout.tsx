import { useIsTouchDevice } from '@app/common';
import { CobwebCanvas } from '@app/widgets';
import { Outlet } from 'react-router-dom';

import styles from './LoginLayout.module.css';

const LoginLayout = () => {
    const isTouchDevice = useIsTouchDevice();
    return (
        <main className={styles.main}>
            <Outlet />
            {!isTouchDevice && <CobwebCanvas />}
        </main>
    );
};

export default LoginLayout;
