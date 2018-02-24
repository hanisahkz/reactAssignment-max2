import React from 'react';


//props must always be passed
const validationComponent = (props) => {
    return(
        <div>
            <p>{props.textLength}</p>
        </div>
    )
};

export default validationComponent;