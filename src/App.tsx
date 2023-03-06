import { Navigate, useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Loadable = ( Component: any ) => ( props: any ) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
);
const Home = Loadable( lazy( () => import( './pages/Home' ) ) );

export default () => {
    return useRoutes( [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '404',
            element: <h1>NOT FOUND</h1>,
        },
        {
            path: '*',
            element: <Navigate to="404" />,
        },
    ] );
};
