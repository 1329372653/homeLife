import React from 'react'
import { Link } from 'react-router-dom'
import { fetchpost } from '../../utils/myfetch'
import './category.css'
import { Divider } from 'antd';
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.getCatagory = this.getCatagory.bind(this)
        this.state = {
            category: '',
        };
        this.getCatagory()

    }
    getCatagory() {
        var data = {
            category: this.props.match.params.category
        };
        fetchpost('/api/getCategory', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        category: res.category,
                    });
                }
                console.log(this.state.category)
            })
    }
    componentDidUpdate() {
        var data = {
            category: this.props.match.params.category
        };
        fetchpost('/api/getCategory', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        category: res.category,
                    });
                }
            })
    }
    render() {
        return (<div className="category_content">
            <div className="category_title">
                类别：{this.props.match.params.category}
            </div>
            {
                this.state.category!=''? <div className="good_item_content">
                    <ul>
                        {this.state.category.map((good, index) => {
                            return (
                                <Link to={'/GoodDetail/' + good._id} key={index}>
                                    <li>
                                        <div className="good_mainImg">
                                            <img src={'http://localhost:8899' + good.mainImg} alt="mainImg"></img>
                                        </div>
                                        <div className="good_brand">
                                            {good.brand}
                                        </div>
                                        <div className="good_price">
                                            ￥{good.price}
                                        </div>
                                    </li>
                                </Link>
                            )
                        }
                        )}
                    </ul>
                </div> : <div className="noGoods_content">
                        暂无商品!
                </div>
            }
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
        </div>)
    }
}

export default Category;