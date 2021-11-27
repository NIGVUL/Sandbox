import React from 'react';
import './Record.css';
const Record = ({ marginLeft, data, id}) => {
    
    function print(id){
        console.log(id)
    }
    return (
            <div id={id} className='record' style={{marginLeft: marginLeft + 'px'}}>
                <span onClick={ () => {print(id)}}>{data}</span>
            </div>
    );
}

export default Record;
