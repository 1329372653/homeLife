import React, { Fragment } from 'react'
import './Header.css'
import logo from '../../static/images/logo.png'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import { fetchpost, fetchget } from '../../utils/myfetch'
import { message } from 'antd';
import { withRouter } from "react-router-dom";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.register_btn = this.register_btn.bind(this);
        this.login_btn = this.login_btn.bind(this);
        this.Logout = this.Logout.bind(this);
        this.searchBtn = this.searchBtn.bind(this);
        this.searchHandle = this.searchHandle.bind(this);
        this.state = {
            visible1: false,
            visible2: false,
            user_data: '',
        };
        fetchget('/api/getsession')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        user_data: res.user
                    });
                }
            })
    }
    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    }

    handleOk1 = e => {
        this.setState({
            visible1: false,
        });
    };

    handleCancel1 = e => {
        this.setState({
            visible1: false,
        });
    };
    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    }
    handleOk2 = e => {
        this.setState({
            visible2: false,
        });
    };

    handleCancel2 = e => {
        this.setState({
            visible2: false,
        });
    };
    register_btn() {
        var user = {
            email: this.email.value,
            password: this.password.value,
            nickname: this.nickname.value,
            mobileNum: this.mobileNum.value,
            address: this.address.value
        }
        fetchpost('/api/register', user)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        visible1: false,
                        visible2: true,
                    });
                    message.success(res.msg);
                }
                else {
                    message.error(res.msg);
                }
            })
    }
    login_btn() {
        var user = {
            email: this.email2.value,
            password: this.password2.value,
            confirmPassword: this.confirmPassword.value
        }
        fetchpost('/api/login', user)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        visible2: false,
                        user_data: res.user
                    });
                    message.success('登陆成功！欢迎回来，' + res.user.nickname);
                    window.location.reload()
                }
                else if (res.code === 100) {
                    message.error(res.msg);
                }
                else if (res.code === 102) {
                    message.error(res.msg);
                }
            })
    }
    handleMouseEnter() {
        var user_Information = document.querySelector('.user_Information')
        user_Information.style.display = 'block'
    }
    handleMouseLeave() {
        var user_Information = document.querySelector('.user_Information')
        user_Information.style.display = 'none'
    }
    Logout() {
        fetchget('/api/logout')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        user_data: ''
                    });
                    message.success(res.msg);
                }
            })
    }

    searchBtn() {
        var searchContent = this.searchContent.value
        if(searchContent){
            this.props.history.push({pathname:"/searchResult/" + searchContent});
        }
        else{
            message.error("请输入搜索内容哦！！！");
        }
       
    }
    searchHandle(){
        var searchContent = this.searchContent.value
        this.props.history.push({pathname:"/searchResult/" + searchContent});
    }

    render() {
        return (
            <div id="head">
                <div className='header_content'>
                    <div className='header_logo'>
                        <Link to="/index">
                            <img src={logo} alt='HomeLife' />
                        </Link>
                        <div className='header_logo_text'>欢迎来到HomeLife！</div>
                    </div>
                    <div className='header_search'>
                        <input type='text' ref={(input) => this.searchContent = input} placeholder='搜搜看吧~' onChange={this.searchHandle}></input>
                        <button className='header_search_btn' onClick={this.searchBtn}>搜一搜</button>
                    </div>
                    <div className='head_middle'>
                        <Link to='/optimization'>产品优选</Link>
                        <Link to='/information'>前沿资讯</Link>
                    </div>
                    {
                        this.state.user_data ? <div className='user_content' onMouseLeave={this.handleMouseLeave}>
                            <div className='user_avatar' onMouseEnter={this.handleMouseEnter}>
                                <img src={'http://localhost:8899' + this.state.user_data.avatar} alt={this.state.user_data.nickname}></img>
                            </div>
                            <div className='user_nickname'>{this.state.user_data.nickname}</div>
                            <div className="user_Information">
                                <ul>
                                    <li><label>{this.state.user_data.nickname}</label></li>
                                    <Link to='/userInfo'>
                                        <li>个人信息</li>
                                    </Link>
                                    <Link to='/setting/userInfo'>
                                        <li>设置</li>
                                    </Link>
                                    <li className='Logout' onClick={this.Logout}>退出登录</li>
                                </ul>
                            </div>
                        </div> : <div className='header_right'>
                                <ul>
                                    <li>
                                        <div className='login_btn' onClick={this.showModal2}>登录</div>
                                    </li>
                                    <li>
                                        <div className='login_btn' onClick={this.showModal1}>注册</div>
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
                <div className='header_nav'>
                    <Link to='/category/床'>
                        <div className='nav_list'>床</div>
                    </Link>
                    <Link to="/category/衣柜">
                        <div className='nav_list'>衣柜</div>
                    </Link>
                    <Link to="/category/沙发">
                        <div className='nav_list'>沙发</div>
                    </Link>
                    <Link to="/category/餐桌">
                        <div className='nav_list'>餐桌</div>
                    </Link>
                    <Link to="/category/书桌">
                        <div className='nav_list'>书桌</div>
                    </Link>

                    <Link to="/category/椅子">
                        <div className='nav_list'>椅子</div>
                    </Link>
                    <Link to="/category/灯具">
                        <div className='nav_list'>灯具</div>
                    </Link>
                    <Link to="/category/纺织品">
                        <div className='nav_list'>纺织品</div>
                    </Link>
                    <Link to="/category/镜子">
                        <div className='nav_list'>镜子</div>
                    </Link>
                    <Link to="/category/床垫">
                        <div className='nav_list'>床垫</div>
                    </Link>
                </div>
                <Modal
                    title="注册新用户"
                    visible={this.state.visible1}
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                    footer={null}
                >
                    <div className='form_item'>
                        <label>邮箱：</label>
                        <input type='text' ref={(input) => this.email = input} placeholder='请输入您的邮箱'></input>
                    </div>
                    <div className='form_item'>
                        <label>密码：</label>
                        <input type='password' ref={(input) => this.password = input} placeholder='请输入您的密码'></input>
                    </div>
                    <div className='form_item'>
                        <label>昵称：</label>
                        <input type='text' ref={(input) => this.nickname = input} placeholder='请输入您的昵称'></input>
                    </div>
                    <div className='form_item'>
                        <label>手机号码：</label>
                        <input type='text' ref={(input) => this.mobileNum = input} placeholder='请输入您的手机号码'></input>
                    </div>
                    <div className='form_item'>
                        <label>家庭住址：</label>
                        <input type='text' ref={(input) => this.address = input} placeholder='请输入您的家庭住址'></input>
                    </div>
                    <div className='form_btn'>
                        <button onClick={this.register_btn}>注册</button>
                    </div>
                </Modal>
                <Modal
                    title="登录"
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                    footer={null}
                >
                    <div className='form_item'>
                        <label>邮箱：</label>
                        <input type='text' ref={(input) => this.email2 = input} placeholder='请输入您的邮箱'></input>
                    </div>
                    <div className='form_item'>
                        <label>密码：</label>
                        <input type='password' ref={(input) => this.password2 = input} placeholder='请输入您的密码'></input>
                    </div>
                    <div className='form_item'>
                        <label>确认密码：</label>
                        <input type='password' ref={(input) => this.confirmPassword = input} placeholder='请再次输入您的密码'></input>
                    </div>
                    <div className='form_btn'>
                        <button onClick={this.login_btn}>登录</button>
                    </div>
                </Modal>
            </div>)
    }
}

export default withRouter(Header);