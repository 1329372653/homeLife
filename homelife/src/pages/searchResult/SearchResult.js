import React from 'react'
import './searchResult.css'
import { Link } from 'react-router-dom'
import { fetchpost } from '../../utils/myfetch'
import { Empty } from 'antd';
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: ''
        };
        this.getSearchResult()

    }
    componentWillReceiveProps(nextProps) {
        var searchData = {
            searchContent: nextProps.match.params.searchContent
        }
        fetchpost('/api/search', searchData)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        searchResult: res.searchContent
                    });
                }
            })
    }
    getSearchResult() {
        var searchData = {
            searchContent: this.props.match.params.searchContent
        }
        fetchpost('/api/search', searchData)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        searchResult: res.searchContent
                    });
                }
            })
    }


    render() {
        return (<div className='optimization_content'>
            <div className="optimization_head">搜索结果:</div>
            {
                this.state.searchResult != '' ? <div className="good_item_content">
                    <ul>
                        {this.state.searchResult.map((good, index) => {
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
                </div> : <div className="emptyContent">
                        <Empty description="搜索结果为空！！！" />
                    </div>
            }
        </div>)
    }
}

export default SearchResult;