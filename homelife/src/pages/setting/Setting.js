import React from 'react'
import './setting.css'
import { Link } from 'react-router-dom'
import { fetchget,fetchpost } from '../../utils/myfetch'
import { message } from 'antd';
class Setting extends React.Component{
    constructor(props){
        super(props);
        this.submitBth = this.submitBth.bind(this);
        this.state = {
            user_data:'',
        };
        fetchget('/api/getsession')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        user_data: res.user,
                    });
                }
            })
    }
    submitBth(){
        var obj = {
            oldPassword: this.oldPassword.value,
            newPassword: this.newPassword.value,
            confirmPassword:this.confirmPassword.value
        }
        fetchpost('/api/settings/password', obj)
            .then((res) => {
                if (res.code === 101) {
                    message.success(res.msg);
                    this.oldPassword.value = ''
                    this.newPassword.value = ''
                    this.confirmPassword.value = ''
                }
                else if (res.code === 100) {
                    message.error(res.msg);
                }
            })
    }

    render(){
        return(<div className='userInfo_content'>
        <div className='userInfo_left_content'>
            <Link to='/userInfo'>
                <div className='userInfo'>
                    基本信息
                </div>
            </Link>
            <Link to='/setting/userInfo'>
                <div className='modifyPassword'>
                    修改密码
                </div>
            </Link>
        </div>
        <div className='userInfo_right_content'>
            <div className='setting_form_item'>
                <label>原来密码：</label>
                <input type='password' placeholder='请输入原密码' ref={(input) => this.oldPassword = input}></input>
            </div>
            <div className='setting_form_item'>
                <label>修改的密码：</label>
                <input type='password' placeholder='请输入要修改的密码' ref={(input) => this.newPassword = input}></input>
            </div>
            <div className='setting_form_item'>
                <label>确认密码：</label>
                <input type='password' placeholder='请再次输入密码' ref={(input) => this.confirmPassword = input}></input>
            </div>
            <button className='setting_submitBtn' onClick={this.submitBth}>提交修改</button>
        </div>
    </div>)
    }
}

export default Setting;