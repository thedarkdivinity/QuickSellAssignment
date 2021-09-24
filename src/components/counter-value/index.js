import React from 'react'

const CounterValue = ({counter}) => {
    return (
        <div style={{
            marginTop:"60px"
        }} className="dashBox">
            <h4>Counter value </h4><span style={{
                marginTop:"10px",
                
            }}>{counter}</span>
        </div>
    )
}

export default CounterValue;
