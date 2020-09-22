import React from 'react';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, VideoCameraOutlined, SmileOutlined } from '@ant-design/icons'
//导入样式
import './header.less'

const Header = () => (
    <div className='header'>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='text-wrapper'>
                <span className='logo'>xiaojun</span>
                <span className='desc'>世人谓我恋长安，其实只恋长安某</span>
            </Col>
            <Col>
                <Menu mode='horizontal'>
                    <Menu.Item key="home">
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <VideoCameraOutlined />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;