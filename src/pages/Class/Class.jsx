import React, { Component } from 'react'
import {getClass} from '../../api/index'
import './css/class.less'
import BScroll from 'better-scroll'
import {NavLink,Link,Route,Switch} from 'react-router-dom'
import CateList from '../../components/CateList/CateList'
export default class Class extends Component {
  state={
    classList:[],
    isActive:false,//是否点击
    navIndex:0
  }
  async componentDidMount(){
    let result = await getClass()
    this.setState({
      classList:result.data.data.categoryL1List
    })
    new BScroll('.left',{
      scrollY:true,
      click:true
    })
    this.props.history.push('/class/11')
  }
  handleActive=(index)=>{
    this.setState({
      navIndex:index
    })
  }
  render() {
    return (
      <div className="class">
        <div className="search">
          <input type="text" placeholder="搜索商品，共22003款好物"/>
          <span className="iconfont icon-sousuo"></span>
       </div>
        <div className="list">
          <div className="left">
              <ul>
                {
                  this.state.classList.map((item,index)=>{
                  return <li key={index} className={this.state.navIndex === index?'active':''} onClick={()=>{this.handleActive(index)}}>
                    <Link to={`/class/${item.id}`}>{item.name}</Link>
                    </li>
                  })
                }
              </ul>
          </div>
          <div className="right">
          <Route path="/class/:id" component={CateList}></Route>
          </div>
        </div>
      </div>
    )
  }
}
