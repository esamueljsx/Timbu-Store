'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#FFFFFF"
                options={{ showSpinner: true }}
                shallowRouting
                appDirectory
            />
        </>
    )
}

export default Providers;