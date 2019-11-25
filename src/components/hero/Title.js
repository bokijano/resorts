import React from 'react'

const Title = ({mountain, price}) => {
    return (
        <div className="section-title">
            <h4>Our rooms on {mountain} starting at ${price}</h4>
        </div>
    )
}

export default Title;

