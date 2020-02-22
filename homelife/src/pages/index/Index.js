import React from 'react'
import { Carousel } from 'antd';
import './index.css'
import { fetchget } from '../../utils/myfetch'
import { Link } from 'react-router-dom'
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
import { Divider } from 'antd';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_data: '',
            CarouselData: '',
            goodGoodsData: ''
        };
        fetchget('/api/getsession')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        user_data: res.user,
                    });
                }
            })
        fetchget('/api/getCarouselData')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        CarouselData: res.CarouselData,
                    });
                }
            })
        fetchget('/api/getgoodGoods')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        goodGoodsData: res.goodGoodsData,
                    });
                }
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
        return (
            <div className='index_content'>
                <div className='index_carousel'>
                    <Carousel autoplay>
                        {this.state.CarouselData && this.state.CarouselData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link to={'/GoodDetail/' + item._id}>
                                        <img src={'http://localhost:8899' + item.mainImg} alt={item.brand}></img>
                                    </Link>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <Divider>展示</Divider>
                <div className='display_content'>
                    <Link to='/exhibition/区域展示'>
                        <div className='display_item1'>
                            区域展示
                        </div>
                    </Link>
                    <Link to='/exhibition/套件展示'>
                        <div className='display_item2'>
                            套件展示
                        </div>
                    </Link>
                    <Link to='/exhibition/室内装饰展示'>
                        <div className='display_item3'>
                            室内装饰展示
                        </div>
                    </Link>
                    <Link to='/exhibition/精选案例展示'>
                        <div className='display_item4'>
                            精选案例展示
                        </div>
                    </Link>
                </div>
                <Divider>好货研究所</Divider>
                <div className='good_goods_content'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.state.goodGoodsData && this.state.goodGoodsData.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <Link to={'/GoodDetail/' + item._id}>
                                            <img src={'http://localhost:8899' + item.mainImg} alt={item.brand}></img>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="swiper-pagination"></div>


                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>


                        <div className="swiper-scrollbar">
                        </div>
                    </div>

                </div>

                <Divider>品牌推荐</Divider>
                <div className='brand_recommendation'>
                    <Link to="/brand/全友">
                        <div className='brand_item'>全友</div>
                    </Link>
                    <Link to="/brand/芝华仕">
                        <div className='brand_item'>芝华仕</div>
                    </Link>
                    <Link to="/brand/林氏木业">
                        <div className='brand_item'>林氏木业</div>
                    </Link>
                    <Link to="/brand/索菲亚">
                        <div className='brand_item'>索菲亚</div>
                    </Link>
                    <Link to="/brand/凯佳蒂">
                        <div className='brand_item'>凯佳蒂</div>
                    </Link>
                    <Link to="/brand/慕梵迪">
                        <div className='brand_item'>慕梵迪</div>
                    </Link>
                    <Link to="/brand/凯瑞佳">
                        <div className='brand_item'>凯瑞佳</div>
                    </Link>
                    <Link to="/brand/太子">
                        <div className='brand_item'>太子</div>
                    </Link>
                </div>
                <Divider>装修案例</Divider>
                <div className='decoration_case'>
                    <Link to="/decoration/卧室">
                        <div className='case_item1'>卧室</div>
                    </Link>
                    <Link to="/decoration/浴室">
                        <div className='case_item2'>浴室</div>
                    </Link>
                    <Link to="/decoration/客厅">
                        <div className='case_item3'>客厅</div>
                    </Link>
                    <Link to="/decoration/厨房">
                        <div className='case_item4'>厨房</div>
                    </Link>
                    <Link to="/decoration/餐厅">
                        <div className='case_item5'>餐厅</div>
                    </Link>
                    <Link to="/decoration/儿童房">
                        <div className='case_item6'>儿童房</div>
                    </Link>
                    <Link to="/decoration/书房">
                        <div className='case_item7'>书房</div>
                    </Link>
                    <Link to="/decoration/阳台">
                        <div className='case_item8'>阳台</div>
                    </Link>
                </div>
                <Divider>我们承诺</Divider>
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
            </div>
        )
    }
}

export default Index;