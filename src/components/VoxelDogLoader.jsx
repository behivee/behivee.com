import '@css/loader.css';

import { forwardRef } from 'react';

export const Spinner = () => (
    <div className="spinner__container">
        <span class="loader"></span>
    </div>
);

export const SpinnerContainer = forwardRef(({ children }, ref) => (
    <div ref={ref} className="voxel-dog">
        {children}
    </div>
));

const Loader = () => {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    );
};

export default Loader;
