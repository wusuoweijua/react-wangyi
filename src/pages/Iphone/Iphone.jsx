import React, { Component } from 'react'
import './css/iphone.less'
export default class Iphone extends Component {
  state = {
    initTime:0,
    username:'',//用户输入的手机号
    password:'',
    isShowUser:false,//是否展示手机号提示
    isClearSHow:false,//是否展示取消
    isSHowPwd:false,//是否展示验证码提示
  }
  sendCode=()=>{
    if(this.state.username.length>0 && !this.state.isShowUser){
      if(this.timer){
        return
      }else{
        this.setState({
          initTime:10
        })
        this.timer = setInterval(()=>{
          this.setState({
            initTime:this.state.initTime - 1
          })
          console.log(this.state.initTime);
          if(this.state.initTime <= 0){
            clearInterval(this.timer)
            delete this.timer
          }
        },1000)
      }
    }else{
      this.setState({
        isShowUser:true
      })
    }
    
  }
  username=(event)=>{
    this.setState({
      isShowUser:true,
      isClearSHow:true
    })
    let reg = /^0?(13|14|15|18)[0-9]{9}$/
    let result = reg.test(event.target.value)
    if(result){
      this.setState({
        username:event.target.value,
        isShowUser:false
      })
    }
  }
  password=(event)=>{
    this.setState({
      isSHowPwd:true
    })
    let reg = /^\d{4,6}$/
    let result = reg.test(event.target.value)
    if(result){
      this.setState({
        password:event.target.value,
        isSHowPwd:false
      })
    }
  }
  clear=()=>{
    this.refs.username.value=""
  }
  goMyhome=()=>{
    let {username,password,isShowUser,isSHowPwd} = this.state
    if(username.length>0 && password.length>0 && !isShowUser && !isSHowPwd){
      this.props.history.push('/home')
    }else if(!username){
      this.setState({
        isShowUser:true
      })
    }else if(!password){
      this.setState({
        isSHowPwd:true
      })
    }
  }
  render() {
    return (
      <div className="iphone">
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
              <input type="text" className="username" placeholder="请输入手机号" onChange={(event)=>{this.username(event)}} ref="username"/>
              <span className={this.state.isShowUser?'Usertip':'Usertip userShow'}>请输入正确的手机号</span>
              <div className="login-pwd">
                <input type="text" className="password" placeholder="请输入短信验证码"  maxLength="6" onChange={(event)=>{this.password(event)}} ref="password"/>
                <span className={this.state.isSHowPwd?'Pwdtip':'Pwdtip pwdShow'}>请输入正确的验证码</span>
    <span className="getCode" onClick={()=>{this.sendCode()}}>{this.state.initTime === 0?'获取验证码':this.state.initTime+'s后获取'}</span>
              </div>
              <div className="request">
                <span>遇到问题？</span>
                <span>使用密码验证登录</span>
              </div>
              <div className="btn" onClick={()=>{this.goMyhome()}}>登录</div>
              <div className="success">
                <input type="checkbox" className="success-one" value="0" />
                <span>我同意<a href="#">《服务条款》</a>和<a href="#">《网易隐私政策》</a></span>
              </div>
              <div className="other" onClick={()=>{this.props.history.push('/myhome')}}>其他方式登录</div>
              <span className={this.state.isClearSHow?'iconfont icon-quxiao clear':'iconfont icon-quxiao clear clearShow'} onClick={()=>{this.clear()}}></span>
            </div>
      </div>
    )
  }
}
