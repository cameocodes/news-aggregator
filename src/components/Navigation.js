import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(){
    return (
        <div className="nav"><Link to="/">All The News <span role="img" aria-label="logo">🔥</span></Link></div>
    )
}