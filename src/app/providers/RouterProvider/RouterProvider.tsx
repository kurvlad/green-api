import { Router } from '@app/app/router';
import { BrowserRouter } from 'react-router-dom';

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};
