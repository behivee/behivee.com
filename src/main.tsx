import React, { Suspense } from 'react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const Loadable = ( Component: any ) => ( props: any ) =>
    <Suspense fallback={<p>Looding...</p>}>
        <Component {...props} />
    </Suspense>


ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
