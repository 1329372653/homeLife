import React from 'react'
import { fetchpost } from '../../utils/myfetch'
import './brand.css'
import { Divider } from 'antd';
import { Link } from 'react-router-dom'
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.getBrand = this.getBrand.bind(this)
        this.state = {
            BrandData: '',
            goodsData: ''
        };
        this.getBrand()

    }
    getBrand() {
        var data = {
            brand: this.props.match.params.brand
        };
        fetchpost('/api/getBrandData', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        BrandData: res.BrandData,
                        goodsData: res.goodsData
                    });
                }
                console.log(this.state.BrandData)
                console.log(this.state.goodsData)
            })
    }
    componentDidMount() {
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        });
    }
    render() {
        return (<div className="Brand_content">
            <div className="Brand_describe_content">
                <img className="Brand_img" src={'http://localhost:8899' + this.state.BrandData.image} alt={this.state.BrandData.brand}></img>
                <div className="Brand_describe_brand">
                    {this.state.BrandData.brand}
                </div>
                <div className="Brand_describe_text">
                    {this.state.BrandData.describe}
                </div>
            </div>
            <div className="Brand_goods_Recommend">
                推荐产品
            </div>
            <div className="Brand_goods_content">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.goodsData && this.state.goodsData.map((good, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <Link to={'/GoodDetail/' + good._id}>
                                            <img src={'http://localhost:8899' + good.mainImg} alt="img"></img>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar">
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Brand;