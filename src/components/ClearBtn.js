import React from 'react';
import '../styles/ClearBtn.css'

const ClearBtn = (props) => (
    <div className='clearBtn' onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ClearBtn;