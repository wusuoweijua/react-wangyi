import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home/Home'
import Class from './pages/Class/Class'
import MyHome from './pages/MyHome/Myhome'
import ShopCar from './pages/ShopCar/ShopCar'
import Tobuy from './pages/Tobuy/Tobuy'
import Search from './pages/Search/Search'
import Login from './pages/Login/Login'
import Iphone from './pages/Iphone/Iphone'
import Emile from './pages/Emile/Emile'
import FooterNav from './components/FooterNav/FooterNav'

export default class App extends Component {
  componentDidMount(){
    console.log('----父组件渲染---')
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/class" component={Class}/>
          <Route path="/myhome" component={Login}/>
          <Route path="/shopcar" component={ShopCar}/>
          <Route path="/tobuy" component={Tobuy}/>
          <Route path="/search" component={Search}/>
          <Route path="/login" component={Login}/>
          <Route path="/iphone" component={Iphone}/>
          <Route path="/emile" component={Emile}/>
          <Redirect  to='/home'/>
        </Switch>
        <FooterNav/>
      </div>
    )
  }
}
