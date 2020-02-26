import React, { Component } from 'react'
import './css/cateList.less'
import {getCateList} from '../../api/index'
import BScroll from 'better-scroll'
export default class CateList extends Component {
  state = {
    cateList:[],
    List:{
      categoryList:[],
      subCateList:[]
    },//查找出来之后的数组
    category:[]//要展示的数据
  }
  async componentDidMount(){
    let result = await getCateList()
    this.setState({
      cateList:result.data.data
    })
    let id = this.props.match.params.id
    let newList = this.state.cateList.find((item)=>{
      return item.id == id
    })
    this.setState({
      List:newList
    })
    new BScroll('.cateList',{
      scrollY:true,
      click:true
    })
    
  }
  componentWillReceiveProps(a,b){
    let id = this.props.match.params.id
    let newList = this.state.cateList.find((item)=>{
      return item.id == id
    })
    if(newList){
      this.setState({
        List:newList
      })
      // if(this.List.categoryList){
      //   this.setState({
      //     category:this.state
      //   })
      // }
    }
  }
  render() {
    if(this.state.List){
      this.navList = this.state.List.categoryList || this.state.List.subCateList
    }
    return (
      <div className="cateList">
        <div className="come">
            <div className="on">
                <div className="logo">
                  <img src={this.state.List?this.state.List.img:''} />
                </div>
            <div className="list">
                <ul className="oneUl">
                 {
                   this.navList.map((item,index)=>{
                      return <li key={index}>
                                <img src={item.wapBannerUrl} alt=""/>
                                <span>{item.name}</span>
                            </li>
                   })
                 }
                </ul>
                  </div>
            </div>
        </div>
      </div>
    )
  }
}
