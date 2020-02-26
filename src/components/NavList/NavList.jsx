import React, { Component } from 'react'
import './css/navlist.less'
import {getindexDatas} from '../../api/index'
export default class NavList extends Component {
  state = {
    navList:[]
  }
  async componentDidMount(){
    let result = await getindexDatas()
    this.setState({
      navList:result.data.data.kingKongModule.kingKongList
    })
    console.log(result.data);
  }
  render() {
    return (
      <div id="homeList">
         <ul>
          {
            this.state.navList.map((item,index)=>{
              return <li key={index}>
                        <img src={item.picUrl} alt=""/>
                        <span>{item.text}</span>
                     </li>
            })
          }
       </ul>
      </div>
    )
  }
}
