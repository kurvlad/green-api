import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { routerNames } from './router.names';

const LayoutLazy = lazy(() => import('@app/pages/Layout'));
const LoginLayoutLazy = lazy(() => import('@app/pages/LoginLayout'));
const LoginPageLazy = lazy(() => import('@app/pages/LoginPage'));
const HomePageLazy = lazy(() => import('@app/pages/HomePage'));

export const Router = () => {
    return (
        <Suspense>
            <Routes>
                <Route element={<LoginLayoutLazy />}>
                    <Route path={routerNames.LOGIN} element={<LoginPageLazy />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route element={<LayoutLazy />}>
                        <Route path={routerNames.HOME} element={<HomePageLazy />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
};
