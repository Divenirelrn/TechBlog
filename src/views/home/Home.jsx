import React, { Component } from 'react';
import Header from './childComponents/header/Header'
import BlogList from './childComponents/blogList/BlogList'
import Author from './childComponents/avatar/Author'
import Ads from './childComponents/ads/Ads'
import { Row, Col } from 'antd'
import './home.less'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header></Header>
                <Row type='flex' justify='center' className='com'>
                    <Col className='com-left' xs={24} sm={24} md={13} lg={13} xl={13}>
                        <BlogList></BlogList>
                    </Col>
                    <Col className='com-right' xs={24} sm={24} md={4} lg={4} xl={4}>
                        <Author></Author>
                        <Ads></Ads>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Home;