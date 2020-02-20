import React from 'react'
import './goodDetail.css'
import { fetchpost,fetchget } from '../../utils/myfetch'
import { Carousel } from 'react-bootstrap'
import { Divider,Modal } from 'antd'
import { message } from 'antd';
class GoodDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this)
        this.handlemobileNum = this.handlemobileNum.bind(this)
        this.handleaddress = this.handleaddress.bind(this)
        this.state = {
            goodDetail: '',
            visible: false,
            user_data: '',
            mobileNum: '',
            address: '',
        };
        this.getGoodDetail()
        fetchget('/api/getsession')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        user_data: res.user,
                        mobileNum: res.user.mobileNum,
                        address: res.user.address
                    });
                }
            })
    }

    showModal = () => {
        
        if(this.state.user_data){
            this.setState({
                visible: true,
            });
        }else{
            message.error("您未登录！请先登录！！！");
        }
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    getGoodDetail() {
        var data = {
            _id: this.props.match.params._id
        };
        fetchpost('/api/getGoodDetail', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        goodDetail: res.goodDetail[0],
                    });
                }
                console.log(this.state.goodDetail)
            })
    }

    handlemobileNum(e){
        this.setState({
            mobileNum: e.target.value,
        })
    }
    handleaddress(e){
        this.setState({
            address: e.target.value,
        })
    }
    //提交意向表处理
    handlesubmit(e){
        var formData = {
            user_id:this.state.goodDetail._id,
            brand:this.state.goodDetail.brand,
            category:this.state.goodDetail.category,
            goodsNumber:this.state.goodDetail.goodsNumber,
            nickname:this.state.user_data.nickname,
            realname:this.realname.value,
            mobileNum:this.state.mobileNum,
            address:this.state.address
        }
        fetchpost('/api/submitPurpose', formData)
            .then((res) => {
                if (res.code === 101) {
                    message.success(res.msg+'稍后会有专业人员与您取得联系！');
                    this.setState({
                        visible: false,
                    });
                }
                else{
                    message.error(res.msg)
                }
            })
    }
    render() {
        return (<div className="goodDetail_content">
            <div className="goodDetail_title">
                商品详情:
            </div>
            <Carousel>
                {this.state.goodDetail && this.state.goodDetail.pictures.map((picture, index) => {
                    return <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={'http://localhost:8899' + picture}
                            alt="HomeLife"
                        />
                    </Carousel.Item>
                })
                }
            </Carousel>
            <div className="goodDetail_info_content">
                <div className="goodDetail_brand">{this.state.goodDetail.brand}</div>
                <div className="goodDetail_price">￥{this.state.goodDetail.price}</div>
                <div className="goodDetail_item">
                    <div className="goodDetail_label">商品类别：</div>
                    <div className="goodDetail_category">{this.state.goodDetail.category}</div>
                </div>
                <div className="goodDetail_item">
                    <div className="goodDetail_label">商品货号：</div>
                    <div className="goodDetail_goodNumber">{this.state.goodDetail.goodsNumber}</div>
                </div>
                <div className="goodDetail_item">
                    <div className="goodDetail_label">库存数量：</div>
                    <div className="goodDetail_stock">{this.state.goodDetail.stock}</div>
                </div>
                <div className="goodDetail_label">商品描述：</div>
                <div className="goodDetail_describe">{this.state.goodDetail.describe}</div>
                <div className="submit_btn_content">
                    <button className="submit_btn" onClick={this.showModal}>提交购买意向</button>
                </div>
            </div>
            <Divider orientation="right">承诺</Divider>
            <div className='promise_content'>
                <div className='promise_item'>双重质检</div>
                <div className='promise_item'>|</div>
                <div className='promise_item'>售后无忧</div>
                <div className='promise_item'>|</div>
                <div className='promise_item'>原创设计</div>
                <div className='promise_item'>|</div>
                <div className='promise_item'>全球采购</div>
                <div className='promise_item'>|</div>
                <div className='promise_item'>万千口碑</div>
                <div className='promise_item'>|</div>
                <div className='promise_item'>团队优势</div>
            </div>
            <Modal
                    title="提交购买意向"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div className='form_item'>
                        <label>商品ID：</label>
                        <input disabled type='text' value={this.state.goodDetail._id}></input>
                    </div>
                    <div className='form_item'>
                        <label>品牌：</label>
                        <input disabled type='text' value={this.state.goodDetail.brand}></input>
                    </div>
                    <div className='form_item'>
                        <label>类别：</label>
                        <input disabled type='text' value={this.state.goodDetail.category}></input>
                    </div>
                    <div className='form_item'>
                        <label>货号：</label>
                        <input disabled type='text' value={this.state.goodDetail.goodsNumber}></input>
                    </div>
                    <div className='form_item'>
                        <label>昵称：</label>
                        <input disabled type='text' value={this.state.user_data.nickname}></input>
                    </div>
                    <div className='form_item'>
                        <label>真实姓名：</label>
                        <input type='text' ref={(input) => this.realname = input} placeholder='请输入您的真实姓名！'></input>
                    </div>
                    <div className='form_item'>
                        <label>手机号码：</label>
                        <input type='text' value={this.state.mobileNum} onChange={this.handlemobileNum}></input>
                    </div>
                    <div className='form_item'>
                        <label>家庭住址：</label>
                        <input type='text' value={this.state.address} onChange={this.handleaddress}></input>
                    </div>
                    <div className='form_btn'>
                        <button onClick={this.handlesubmit}>提交</button>
                    </div>
                </Modal>
        </div>)
    }
}

export default GoodDetail;