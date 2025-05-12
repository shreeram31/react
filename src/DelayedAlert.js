import React, { useEffect }from 'react';

function DelayedAlert() {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Hello After 3 Seconds");
        }, 3000);
       
        return () => clearTimeout(timer);
    },[]);

    return <h2>wait for the alert....</h2>
}
export default DelayedAlert;
