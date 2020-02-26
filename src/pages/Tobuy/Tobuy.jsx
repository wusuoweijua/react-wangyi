import React, { Component } from 'react'
import {getBuyList} from '../../api/index'
import './css/tobuy.less'
import _ from 'lodash'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default class Tobuy extends Component {
  state={
    navList:[]
  }
  async componentDidMount(){
    let result = await getBuyList()
    console.log(result.data.data);
    this.setState({
      navList:_.chunk(result.data.data.navList,8)
    })
    new Swiper('.swiper-container',{
      autoplay:true,
      pagination:{
        el:'.swiper-pagination'
      }
    })
  }
  render() {
    return (
      <div className="tobuy">
           <div className="headers">
              <span className="iconfont icon-shouye"></span>
              <a href="#">值得买</a>
              <div>
                <span className="iconfont icon-sousuo"></span>
                <span className="iconfont icon-gouwuche"></span>
              </div>
            </div>
            <div className="content">
              <div className="bg-img">
                <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="" className="img-one"/>
                <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="" className="img-two"/>
                <div className="text">严选好物 用心生活</div>
              </div>
              <div className="content-nav">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {/* <div className="swiper-slide">
                      <ul>
                        <li>
                          <img src=""  alt=""/>
                          <span></span>
                          <span></span>
                        </li>
                      </ul>
                    </div> */}
                    {
                      this.state.navList.map((item,index)=>{
                        return <div className="swiper-slide" key={index}>
                                  <ul>
                                    {
                                      item.map((list,Listindex)=>{
                                        return  <li key={Listindex}>
                                                  <img src={list.picUrl} alt=""/>
                                                  <span>{list.mainTitle}</span>
                                                  <span>{list.viceTitle}</span>
                                                </li>
                                      })
                                    }
                                  </ul>
                              </div>
                      })
                    }
                  </div>
                  <div className="swiper-pagination"></div> 
                </div>
              </div>
          </div>
      </div>
    )
  }
}
