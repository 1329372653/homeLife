import React from 'react'
import './userInfo.css'
import { fetchget } from '../../utils/myfetch'
import 'whatwg-fetch'
import 'es6-promise'
import { message } from 'antd';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleNickname = this.handleNickname.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleMobileNum = this.handleMobileNum.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.submitBtn = this.submitBtn.bind(this)
        this.state = {
            user_data: '',
            nickname: '',
            bio: '',
            gender: '',
            avatar: '',
            _id: '',
            mobileNum: '',
            address: ''
        };
        fetchget('/api/getsession')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        user_data: res.user,
                        nickname: res.user.nickname,
                        bio: res.user.bio,
                        _id: res.user._id,
                        mobileNum: res.user.mobileNum,
                        address: res.user.address,
                        gender: res.user.gender
                    });
                }
            })
    }
    handle_id(e) {
        this.setState({
            _id: e.target.value,
        })
    }
    handleNickname(e) {
        this.setState({
            nickname: e.target.value,
        })
    }
    handleBio(e) {
        this.setState({
            bio: e.target.value,
        })
    }
    handleGender(e) {
        this.setState({
            gender: e.target.value,
        })
    }
    handleAvatar(e) {
        this.setState({
            avatar: e.target.files[0],
        })
    }
    handleMobileNum(e) {
        this.setState({
            mobileNum: e.target.value,
        })
    }
    handleAddress(e) {
        this.setState({
            address: e.target.value,
        })
    }
    submitBtn() {
        let formData = new FormData();
        formData.append('_id', this.state._id);
        formData.append('nickname', this.state.nickname);
        formData.append('bio', this.state.bio);
        formData.append('gender', this.state.gender);
        formData.append('avatar', this.state.avatar);
        formData.append('mobileNum', this.state.mobileNum);
        formData.append('address', this.state.address);
        fetch('/api/settings/person', {
            method: 'post',   //请求方式
            credentials: "include",
            headers: {
                //post请求格式
                // 'Content-Type': 'multipart/form-data'
            },
            //post请求发送的数据需要是这样的
            body: formData
        })
            .then(response => response.json())
            .then(res => {
                if (res.code === 101) {
                    message.success(res.msg);
                    this.setState({
                        user_data: res.user
                    })
                    window.location.reload()

                }
                else {
                    message.error(res.msg);
                }
            })
    }

    render() {
        return (<div className='userInfo_content'>
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
                <input type='hidden' name='_id' value={this.state._id} onChange={this.handle_id}></input>
                <div className='user_form_item'>
                    <label>账号：</label>
                    <p className='email_p'>{this.state.user_data.email}</p>
                </div>
                <div className='user_form_item'>
                    <label>昵称：</label>
                    <input className='nickname_input' name='nickname' type='text' value={this.state.nickname} onChange={this.handleNickname}></input>
                </div>
                <div className='user_form_item'>
                    <label>简介：</label>
                    <input className='bio_input' name='bio' value={this.state.bio} onChange={this.handleBio}></input>
                </div>
                <div className='user_form_item'>
                    <label>性别：</label>
                    <input className='gender_input' type='radio' value='-1' checked= {this.state.gender == -1?true:false} name="gender" onChange={this.handleGender} />男
                        <input className='gender_input' type='radio' value='1' checked= {this.state.gender == 1?true:false} name="gender" onChange={this.handleGender} />女
                        <input className='gender_input' type='radio' value='0' checked= {this.state.gender == 0?true:false} name="gender" onChange={this.handleGender} />保密
                    </div>
                <div className='user_form_item'>
                    <label>头像设置：</label>
                    <input className='avatar_input' type='file' name="avatar" accept="image/*" onChange={this.handleAvatar}></input>
                </div>
                <div className='user_form_item'>
                    <label>手机号码：</label>
                    <input type='text' className='mobileNum_input' name='mobileNum' value={this.state.mobileNum} onChange={this.handleMobileNum}></input>
                </div>
                <div className='user_form_item'>
                    <label>家庭地址：</label>
                    <input type='text' className='address_input' name='address' value={this.state.address} onChange={this.handleAddress}></input>
                </div>
                <button className='submitBtn' onClick={this.submitBtn}>提交</button>
            </div>
        </div>)
    }
}

export default withRouter(UserInfo);