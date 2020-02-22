import React from 'react'
import { fetchpost } from '../../utils/myfetch'
import './decoration.css'
import 'swiper/css/swiper.min.css';
import Zmage from 'react-zmage'
class Decoration extends React.Component {
    constructor(props) {
        super(props);
        this.getCategory = this.getCategory.bind(this)
        this.state = {
            decorationData: '',
        };
        this.getCategory()

    }
    getCategory() {
        var data = {
            category: this.props.match.params.category
        };
        fetchpost('/api/getDecorationData', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        decorationData: res.decorationData[0],
                    });
                }
            })
    }

    render() {
        return (<div className="decoration_content">
            <div className="decoration_introduction">
                <img src={require('../../static/images/' + this.props.match.params.category + '介绍.jpg')} alt="img"></img>
            </div>
            <div className="decoration_category_label">
                {this.props.match.params.category}装修案例：
            </div>
            <div className="decoration_img_content">
                <ul>
                    {
                        this.state.decorationData.imgArray && this.state.decorationData.imgArray.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Zmage src={'http://localhost:8899' + item} alt="decoration_img"></Zmage>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>)
    }
}

export default Decoration;