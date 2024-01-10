import './index.css'
import React from 'react';

function Card({title, name, info, co, img}) {
    return (
        <React.Fragment>
            <div class="card">
                <img className='profile-image' src={img} alt={name}/>

                <h1 className='card-name'>{name}</h1>
                <p className="title">{title}</p>
                <p className='info' >{info}</p>
                
                <p><a className='button' href={co.link}>{co.name}</a></p>
            </div>
            <br/>
        </React.Fragment>
        
    )
}

export default Card;