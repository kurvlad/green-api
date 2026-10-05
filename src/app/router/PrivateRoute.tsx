import { Navigate, Outlet } from 'react-router-dom';

import { getLocalStorageItem } from '../localStorage/localStorage';
import { API_TOKEN_INSTANCE, ID_INSTANCE } from '../localStorage/localStorage.constants';
import { routerNames } from './router.names';

const PrivateRoute = () => {
    const idInstance = getLocalStorageItem<string>(ID_INSTANCE);
    const apiTokenInstance = getLocalStorageItem<string>(API_TOKEN_INSTANCE);

    if (!idInstance || !apiTokenInstance) {
        return <Navigate to={routerNames.LOGIN} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
