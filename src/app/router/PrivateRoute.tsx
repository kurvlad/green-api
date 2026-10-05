import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/queries/queries.constants';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getLocalStorageItem } from '../localStorage/localStorage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../localStorage/localStorage.constants';
import { routerNames } from './router.names';

const PrivateRoute = () => {
    const [isChecking, setIsChecking] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = getLocalStorageItem(ACCESS_TOKEN);
            const refreshToken = getLocalStorageItem(REFRESH_TOKEN);

            if (!accessToken && !refreshToken) {
                setIsChecking(false);

                return;
            }

            if (!accessToken && refreshToken) {
                try {
                    const { data } = await apiClient.post(endpoints.users.getRefresh(), {
                        refresh_token: refreshToken,
                    });

                    const { token } = data.data;

                    localStorage.setItem(ACCESS_TOKEN, token);

                    setIsAuthenticated(true);
                } catch (error) {
                    localStorage.clear();

                    setIsAuthenticated(false);
                }
            } else {
                setIsAuthenticated(true);
            }

            setIsChecking(false);
        };

        checkAuth();
    }, []);

    if (isChecking) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to={routerNames.LOGIN} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
