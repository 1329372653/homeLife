import React from 'react'
import './information.css'
import { Link } from 'react-router-dom'
import { fetchget, fetchpost } from '../../utils/myfetch'
import moment from 'moment';
class information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informationData: ''
        };

        fetchget('/api/getInformationData')
            .then((res) => {
                console.log(res)
                if (res.code === 101) {
                    this.setState({
                        informationData: res.InformationData,
                    });
                }
                console.log(this.state.informationData)
            })
    }

    render() {
        return (<div className='information_content'>
            <div className="information_title">
                前沿资讯
        </div>
            {
                this.state.informationData != '' ? <div className="information_item_content">
                    <ul>
                        {
                            this.state.informationData.map((item, index) => {
                                return (
                                    <Link to={'/informationDetail/' + item._id} key={index}>
                                        <li>
                                            <div className="item_title">{item.title}</div>
                                            <div className="item_createdTime">{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div> : <div>2</div>
            }
        </div>)
    }
}

export default information;