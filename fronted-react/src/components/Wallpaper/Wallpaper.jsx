import React, { Component } from 'react';

import './Wallpaper.css';

import wallpaper1 from '../../img/fondo-1.jpg';

class Wallpaper extends Component {
    render(){
        return(
            <img src={wallpaper1} className="imagen-fondo" alt=""></img>
        )
    }
};

export default Wallpaper;