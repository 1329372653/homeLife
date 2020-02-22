import React from 'react'
import { fetchpost } from '../../utils/myfetch'
import './exhibition.css'
import Zmage from 'react-zmage'
class Exhibition extends React.Component {
    constructor(props) {
        super(props);
        this.getCategory = this.getCategory.bind(this)
        this.state = {
            exhibitionData: '',
        };
        this.getCategory()

    }
    getCategory() {
        var data = {
            category: this.props.match.params.category
        };
        fetchpost('/api/getExhibitionData', data)
            .then((res) => {
                if (res.code === 101) {
                    this.setState({
                        exhibitionData: res.exhibitionData,
                    });
                }
            })
    }
    render() {
        return (<div className="exhibition_content">
            {this.state.exhibitionData&&this.state.exhibitionData.map((item,index)=>{
                return(
                    <div className="exhibition_item_content" key={index}>
                        <div className="exhibition_category">
                            类别：{item.label}
                        </div>
                        <div className="exhibition_img_content">
                            {item.imgArray&&item.imgArray.map((img,index)=>{
                                return(
                                    <ul>
                                        <li key={index}>
                                            <Zmage src={'http://localhost:8899' + img} alt="img"></Zmage>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>)
    }
}

export default Exhibition;