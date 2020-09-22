import React from 'react'
import { Avatar, Divider } from 'antd'
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons'
import imgSrc from '../../../../static/img/home/logo.jpg'
import './author.less'

const Author = () => {
    return (
        <>
            <div className='author-wrapper'>
                <Avatar size={100} src={imgSrc}/>
                <div className='author-name'>笑君</div>
                <div className='author-desc'>
                    一眼红尘笑，此生此一人
                </div>
                <Divider>社交账号</Divider>
                <Avatar size={30} icon={<GithubOutlined />}></Avatar>
                <Avatar size={30} className='contact' icon={<WechatOutlined />}></Avatar>
                <Avatar size={30} icon={<QqOutlined />}></Avatar>
            </div>
            
        </>
    )
}

export default Author;