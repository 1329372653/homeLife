import React from 'react'
import './Footer.css'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='footer_content'>
                <div className="footer_label1">为大众创造更加美好的日常生活、提供种类繁多、美观实用、老百姓买得起的家居用品</div>
                <div className="footer_label2">Copyright © 2019-2020 <a href="http://wpa.qq.com/msgrd?v=3&uin=1329372653&site=qq&menu=yes">HomeLife生活家居有限公司</a>. All Rights Reserved.</div>
            </div>)
    }
}

export default Footer;