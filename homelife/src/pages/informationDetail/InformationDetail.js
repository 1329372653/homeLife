import React from 'react'
import './informationDetail.css'
import { fetchpost } from '../../utils/myfetch'
import moment from 'moment';
class Optimization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informationDetailData: ''
        };

        this.getInformationDetail()
    }

    getInformationDetail() {
        var data = {
            _id: this.props.match.params._id
        };
        fetchpost('/api/getInformationDetail', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        informationDetailData: res.InformationDetail[0],
                    });
                }
            })
    }

    render() {
        return (<div className='informationDetail_content'>
            <div className="informationDetail_title">
                {this.state.informationDetailData.title}
            </div>
            <div className="information_createdTime">{moment(this.state.informationDetailData.created_time).format('YYYY-MM-DD HH:mm:ss')}</div>
            <div className="information_content" dangerouslySetInnerHTML={{ __html: this.state.informationDetailData.content }}>
            </div>
        </div>)
    }
}

export default Optimization;