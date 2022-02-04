import React, { Component } from 'react';

export default class Cabecera extends Component {
    render() {
        return <nav className="navbar navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/logo.png" alt="" height="100"/>
                </a>
                <span className='fs-1 text-light'>Siniestros en las principales vías de Guayaquil</span>
            </div>
        </nav>;
    }
}
