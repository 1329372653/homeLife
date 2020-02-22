import React from 'react'
import './optimization.css'
import { Link } from 'react-router-dom'
import { fetchget } from '../../utils/myfetch'
class Optimization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OptimizationData: ''
        };
        fetchget('/api/getOptimizationData')
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        OptimizationData: res.OptimizationData,
                    });
                }
            })

    }

    render() {
        return (<div className='optimization_content'>
            <div className="optimization_head">产品优选:</div>
            {
                this.state.OptimizationData != '' ? <div className="good_item_content">
                    <ul>
                        {this.state.OptimizationData.map((good, index) => {
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
        </div>)
    }
}

export default Optimization;