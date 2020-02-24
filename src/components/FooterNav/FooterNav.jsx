import React, { Component } from 'react'
import './css/footerNav.less'
import {Button} from 'antd-mobile'
export default class FooterNav extends Component {
  render() {
    return (
      <div id="container">
         <div>
          <span className="iconfont icon-shouye"></span>
          <span>首页</span>
        </div>
        <div>
          <span className="iconfont icon-fenlei"></span>
          <span>分类</span>
        </div>
        <div>
          <span className="iconfont icon-mairu"></span>
          <span>值得买</span>
        </div>
        <div>
          <span className="iconfont icon-goumai"></span>
          <span>购物车</span>
        </div>
        <div>
          <span className="iconfont icon-geren"></span>
          <span>个人</span>
        </div>
      </div>
    )
  }
}
