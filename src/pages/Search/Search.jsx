import React, { Component } from 'react'
import {getSearch,getSearchKeyWord} from '../../api/index'
import './css/search.less'
export default class Search extends Component {
  state = {
    SearchDatas:{},
    hotKeywordVOList:[],
    isShow:false, //是否展示下拉列表
    keyword:[],//关键词搜索
  }
  async componentDidMount(){
    let result = await getSearch()
    console.log(result.data);
    this.setState({
      SearchDatas:result.data.data.data,
      hotKeywordVOList:result.data.data.data.hotKeywordVOList
    })
  }
  search=()=>{
    this.setState({
      isShow:true
    })
  }
  back=()=>{
    if(this.state.isShow){
      this.setState({
        isShow:false
      })
      this.refs.input.value=""
    }else{
      this.props.history.push('/home')
    }
  }
  sendSearch =async (e)=>{
    let result = await getSearchKeyWord(e.target.value)
    this.setState({
      keyword:result.data.data
    })

  }
  render() {
    return (
      <div className="container"> 
          <span className="iconfont icon-sousuo"></span>
          <div className="headers">
            <input type="text" className="input" ref="input" onInput={(e)=>{this.sendSearch(e)}} onClick={()=>{this.search()}}placeholder={this.state.SearchDatas.defaultKeyword?this.state.SearchDatas.defaultKeyword.keyword:'loading...'}/>
            <span onClick={()=>{this.back()}}>取消</span>
          </div>
          <div className="hotSearch">
            <div className="hot">热门搜索</div>
            <div className="module">
              <ul>
                {
                  this.state.hotKeywordVOList.map((item,index)=>{
                  return <li key={index}>{item.keyword}</li>
                  })
                }
              </ul>
            </div>
          </div>
          <div className={this.state.isShow?'list':'list active'}>
            <ul>
             {
               this.state.keyword.map((item,index)=>{
               return <li key={index}>{item}</li>
               })
             }
            </ul>
          </div>
    </div>
    )
  }
}
