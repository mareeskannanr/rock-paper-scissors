import React from 'react';

const Alert = prop => {
    let alertClass  = "text-info";
    let faIcon = "fa-smile";

    if(prop.message.includes('beats')) {
        alertClass = 'text-success';
        faIcon = "fa-thumbs-up";
    } else if(prop.message.includes('loses')) {
        alertClass = 'text-danger';
        faIcon = "fa-thumbs-down";
    }

    return (
        <div className='row mt-10'>
            <div className={`text-center col ${alertClass}`}>
                <h5><span className={`fas ${faIcon}`}></span> {prop.message}</h5>
            </div>
        </div>
    );
};

export default Alert;