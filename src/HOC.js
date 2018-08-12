//Higher Order Compontent (HOC) - A HOC component that renders another component
//Goals of Higher Order Compontent
//Code Reuse 
//Render Hijacking 
//Porp manupulation
//Abstract State

import React from "react";


const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p> The info is :{props.data}</p>

        </div>
    );
}


const withAdminWarning = (WrappedComponent) => {
    return (props) =>
        (
            <div>
                {props.isAdmin &&
                    <p>This is private info .Please don't share</p>}
                <WrappedComponent {...props} />
            </div>
        );

};

//requireAuthentication

const requireAuthentication = (WrappedComponent) => {
   
    return (props) =>{
        let result = "";
        if (props.isAuthenticated) {
            result = <WrappedComponent {...props} />
        } else {
            result = <div>you are not authenticated</div>
        }
     return    (
        <div>
           { result}
            {/* {props.isAuthenticated ?
                <WrappedComponent {...props} />
                :<div>you are not authenticated</div>
            } */}
        </div>
    );
}
}

export const RequireAuthentication = requireAuthentication(Info);

export const AdminInfo = withAdminWarning(Info);


