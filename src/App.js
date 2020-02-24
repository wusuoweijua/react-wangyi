import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home/Home'
import Class from './pages/Class/Class'
import MyHome from './pages/MyHome/Myhome'
import ShopCar from './pages/ShopCar/ShopCar'
import Tobuy from './pages/Tobuy/Tobuy'
import FooterNav from './components/FooterNav/FooterNav'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/class" component={Class}/>
          <Route path="/myhome" component={MyHome}/>
          <Route path="/shopcat" component={ShopCar}/>
          <Route path="/tobuy" component={Tobuy}/>
          <Redirect  to='/home'/>
        </Switch>
        <FooterNav/>
      </div>
    )
  }
}
