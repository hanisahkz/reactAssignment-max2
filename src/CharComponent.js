import React from 'react';

const charComponent = (props) => {
    const someStyle = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: 'solid 1px black'
    };

    return (
        <div onClick={props.click} style={someStyle}>
            {props.individualChar}
        </div>
    );
};

export default charComponent;