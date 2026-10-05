import { queryClient } from '@app/api/queryClient';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import { ReduxProvider } from './ReduxProvider';
import { RouterProvider } from './RouterProvider';

export const RootProvider = () => {
    return (
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <RouterProvider />
                </TooltipProvider>
                <ToastContainer
                    style={{ zIndex: 90000000000000000000 }}
                    position="bottom-right"
                    autoClose={2500}
                    closeOnClick={true}
                    pauseOnFocusLoss
                    draggable
                />
            </QueryClientProvider>
        </ReduxProvider>
    );
};
