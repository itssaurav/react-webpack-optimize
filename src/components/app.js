import React,{Component} from 'react';
import './index.scss'
import {Image} from '../images/Hopetoun_falls.jpg'
export default class App extends Component{
    render()
    {
        return (
            <div>
                <p>Saurav</p>
                <img src={require('../images/Hopetoun_falls.jpg')}/>
            </div>
        )
    }
}
