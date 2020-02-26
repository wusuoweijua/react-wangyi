import React, { Component } from 'react'
import './css/footerNav.less'
import {Button} from 'antd-mobile'
import {NavLink,withRouter} from 'react-router-dom'
class FooterNav extends Component {
  componentDidMount(){
  }
  render() {
    const {pathname} = this.props.location
    if(pathname==='/myhome' || pathname ==='/login' || pathname === '/iphone'){
      return null
    }else{
      return (
        <div id="container">
           <NavLink to="/home">
            <div>
              <span className="iconfont icon-shouye"></span>
              <span>首页</span>
            </div>
           </NavLink>
          <NavLink to="/class">
            <div>
              <span className="iconfont icon-fenlei"></span>
              <span>分类</span>
            </div>
          </NavLink>
          <NavLink to="/tobuy">
            <div>
              <span className="iconfont icon-mairu"></span>
              <span>值得买</span>
            </div>
          </NavLink>
         <NavLink to="/shopcar">
          <div>
              <span className="iconfont icon-goumai"></span>
              <span>购物车</span>
          </div>
         </NavLink>
          <NavLink to="/myhome">
            <div>
              <span className="iconfont icon-geren"></span>
              <span>个人</span>
            </div>
          </NavLink>
        </div>
      )
    }
   
  }
}
export default withRouter(FooterNav)