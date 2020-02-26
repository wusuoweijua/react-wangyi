import React, { Component } from 'react'
import './css/home.less'
import {getindexCateModule} from '../../api/index'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import HomeList from '../../components/NavList/NavList'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
export default class Home extends Component {
  state={
    navList:[],
    navIndex:0,
    isActive:false
  }
  async componentDidMount(){
    let result = await getindexCateModule()
    this.setState({
      navList:result.data.data
    })
    new BScroll('.homeNav',{
      scrollX:true,
      click:true
    })
   if(this.state.navList.length > 0){
    new Swiper('.swiper-container',{
      autoplay:true,
      pagination:{
        el:'.swiper-pagination'
      }
    })
   }
  }
  handleActive=(index)=>{
    this.setState({
      navIndex:index 
    })
  }
  bottomSpan=(event)=>{
    this.setState({
      isActive:!this.state.isActive
    })
  }
  render() {
    return (
      <div className="container-top">
        <div className="homeHeaders">
          <a href="#" className="logo"></a>
          <i className="search iconfont icon-sousuo"></i>
          <NavLink to="/search">
            <input type="text" className="input" placeholder="搜索商品，共2016款好物" />
          </NavLink>
          <div className="btn" onClick={()=>{this.props.history.push('/login')}}>登录</div>
        </div>
        <div className="homeNav">
          <ul className="content">
             {
               this.state.navList.map((item,index)=>{
               return <li key={index} onClick={()=>{this.handleActive(index)}} className={this.state.navIndex === index?'active':''}>{item.name}</li>
               })
             }
            </ul>
          <div className="down" onClick={(event)=>{this.bottomSpan(event)}}>
            <span className={this.state.isActive?'iconfont icon-xiangxia1 active':'iconfont icon-xiangxia1'}></span>
          </div>
          
    </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.state.navList.map((item,index)=>{
              return <div className="swiper-slide" key={index}>
                        <img src={item.imgUrl} alt=""/>
                     </div>
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="guarantee">
        <div>
          <span className="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></span>
          <span>网易自营品牌</span>
        </div>
        <div>
          <span className="iconfont icon-tuihuo"></span>
          <span>30天无忧退货</span>
        </div>
        <div>
          <span className="iconfont icon-tuikuan"></span>
          <span>48小时快速退款</span>
        </div>
    </div>
      <HomeList/>
      <div className={this.state.isActive?'cover':'cover selectNone'}>
                <div className="select">
                    <span>全部频道</span>
                    <ul className="select-ul">
                    {
                      this.state.navList.map((item,index)=>{
                      return <li key={index} onClick={()=>{this.handleActive(index)}} className={this.state.navIndex === index?'active':''}>{item.name}</li>
                      })
                   }
                    </ul>
              </div>
                <div className="hidden" onClick={()=>{this.bottomSpan()}}>
                </div>
        </div>
    </div>
    )
  }
}
