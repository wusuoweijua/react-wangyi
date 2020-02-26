import React, { Component } from 'react'
import './css/login.less'
import {Link} from 'react-router-dom'
export default class Login extends Component {
  goIphone=()=>{
    this.props.history.push('/iphone')
  }
  goEmile=()=>{
    this.props.history.push('/emile')
    console.log('点击了');
  }
  render() {
    return (
      <div className="gologin">
          <div className="headers">
            <span className="iconfont icon-shouye" onClick={()=>{this.props.history.push('/home')}}></span>
            <a href="#"></a>
            <div>
              <span className="iconfont icon-sousuo" onClick={()=>{this.props.history.push('/search')}}></span>
              <span className="iconfont icon-gouwuche" onClick={()=>{this.props.history.push('/tobuy')}}></span>
            </div>
          </div>
          <div className="center">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""/>
          </div>
          <div className="login">
              <div className="iphone" onClick={()=>{this.goIphone()}}>
                <span className="iconfont icon-weibiaoti1"></span>
                <span>手机号快捷登录</span>
              </div>
            <div className="emile" onClick={()=>{this.goEmile()}}>
              <span className="iconfont icon-youxiang"></span>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <div className="footer">
            <ul>
              <li>
                <span className="iconfont icon-weixin"></span>
                <span>微信</span>
              </li>
              <li>|</li>
              <li>
                <span className="iconfont icon-qq"></span>
                <span>QQ</span>
              </li>
              <li>|</li>
              <li>
                <span className="iconfont icon-weibo"></span>
                <span>微博</span>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}
