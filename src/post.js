import React from 'react';

function post(props) {
    return (
        <div className='card'> <div className='container'><h1>{props.title}</h1><p>{props.body}</p></div></div>
    )
}

export default post;