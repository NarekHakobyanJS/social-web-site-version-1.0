import React, { Suspense } from "react";


//////HOC 
export const WithSuspense = (Component) => {

    return (props) => {
        return <Suspense fallback={<div>Loading ...</div>}>
            <Component {...props} />
        </Suspense>
    }
}