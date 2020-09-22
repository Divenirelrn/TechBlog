import React, {useState} from 'react';
import { List } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined} from '@ant-design/icons'
import './blogList.less'

const BlogList = () => {
    const [blogList, setBlogList] = useState([
        {title: 'HarmonyOS简介', content: '首先，我们来看一下官方对HarmonyOS的定义。根据官方的定义，HarmonyOS是一款面向未来、面向全场景（移动办公、运动健康、社交通信、媒体娱乐等）的分布式操作系统。在传统的单设备系统能力的基础上，HarmonyOS提出了基于同一套系统能力、适配多种终端形态的分布式理念，能够支持多种终端设备的能力。对消费者而言，HarmonyOS能够将生活场景中的各类终端进行能力整合，形成一个超级虚拟终端，可以实现不同的终端设备之间的快速连接、能力互助、资源共享，匹配合适的设备、提供流畅的全场景体验。对应用开发者而言，HarmonyOS采用了多种分布式技术，使得应用程序的开发实现与不同终端设备的形态差异无关，降低了开发难度和成本。这能够让开发者聚焦上层业务逻辑，更加便捷、高效地开发应用。对设备开发者而言，HarmonyOS采用了组件化的设计方案，可以根据设备的资源能力和业务特征进行灵活裁剪，满足不同形态的终端设备对于操作系统的要求。'},
        {title: 'HarmonyOS简介', content: '首先，我们来看一下官方对HarmonyOS的定义。根据官方的定义，HarmonyOS是一款面向未来、面向全场景（移动办公、运动健康、社交通信、媒体娱乐等）的分布式操作系统。在传统的单设备系统能力的基础上，HarmonyOS提出了基于同一套系统能力、适配多种终端形态的分布式理念，能够支持多种终端设备的能力。对消费者而言，HarmonyOS能够将生活场景中的各类终端进行能力整合，形成一个超级虚拟终端，可以实现不同的终端设备之间的快速连接、能力互助、资源共享，匹配合适的设备、提供流畅的全场景体验。对应用开发者而言，HarmonyOS采用了多种分布式技术，使得应用程序的开发实现与不同终端设备的形态差异无关，降低了开发难度和成本。这能够让开发者聚焦上层业务逻辑，更加便捷、高效地开发应用。对设备开发者而言，HarmonyOS采用了组件化的设计方案，可以根据设备的资源能力和业务特征进行灵活裁剪，满足不同形态的终端设备对于操作系统的要求。'},
        {title: 'HarmonyOS简介', content: '首先，我们来看一下官方对HarmonyOS的定义。根据官方的定义，HarmonyOS是一款面向未来、面向全场景（移动办公、运动健康、社交通信、媒体娱乐等）的分布式操作系统。在传统的单设备系统能力的基础上，HarmonyOS提出了基于同一套系统能力、适配多种终端形态的分布式理念，能够支持多种终端设备的能力。对消费者而言，HarmonyOS能够将生活场景中的各类终端进行能力整合，形成一个超级虚拟终端，可以实现不同的终端设备之间的快速连接、能力互助、资源共享，匹配合适的设备、提供流畅的全场景体验。对应用开发者而言，HarmonyOS采用了多种分布式技术，使得应用程序的开发实现与不同终端设备的形态差异无关，降低了开发难度和成本。这能够让开发者聚焦上层业务逻辑，更加便捷、高效地开发应用。对设备开发者而言，HarmonyOS采用了组件化的设计方案，可以根据设备的资源能力和业务特征进行灵活裁剪，满足不同形态的终端设备对于操作系统的要求。'},
        {title: 'HarmonyOS简介', content: '首先，我们来看一下官方对HarmonyOS的定义。根据官方的定义，HarmonyOS是一款面向未来、面向全场景（移动办公、运动健康、社交通信、媒体娱乐等）的分布式操作系统。在传统的单设备系统能力的基础上，HarmonyOS提出了基于同一套系统能力、适配多种终端形态的分布式理念，能够支持多种终端设备的能力。对消费者而言，HarmonyOS能够将生活场景中的各类终端进行能力整合，形成一个超级虚拟终端，可以实现不同的终端设备之间的快速连接、能力互助、资源共享，匹配合适的设备、提供流畅的全场景体验。对应用开发者而言，HarmonyOS采用了多种分布式技术，使得应用程序的开发实现与不同终端设备的形态差异无关，降低了开发难度和成本。这能够让开发者聚焦上层业务逻辑，更加便捷、高效地开发应用。对设备开发者而言，HarmonyOS采用了组件化的设计方案，可以根据设备的资源能力和业务特征进行灵活裁剪，满足不同形态的终端设备对于操作系统的要求。'},
        {title: 'HarmonyOS简介', content: '首先，我们来看一下官方对HarmonyOS的定义。根据官方的定义，HarmonyOS是一款面向未来、面向全场景（移动办公、运动健康、社交通信、媒体娱乐等）的分布式操作系统。在传统的单设备系统能力的基础上，HarmonyOS提出了基于同一套系统能力、适配多种终端形态的分布式理念，能够支持多种终端设备的能力。对消费者而言，HarmonyOS能够将生活场景中的各类终端进行能力整合，形成一个超级虚拟终端，可以实现不同的终端设备之间的快速连接、能力互助、资源共享，匹配合适的设备、提供流畅的全场景体验。对应用开发者而言，HarmonyOS采用了多种分布式技术，使得应用程序的开发实现与不同终端设备的形态差异无关，降低了开发难度和成本。这能够让开发者聚焦上层业务逻辑，更加便捷、高效地开发应用。对设备开发者而言，HarmonyOS采用了组件化的设计方案，可以根据设备的资源能力和业务特征进行灵活裁剪，满足不同形态的终端设备对于操作系统的要求。'}
    ]);

    return (
        <div>
            <List
                header={
                    <div>
                        红衣佳人白衣友，朝与同歌暮同酒
                        <div className='icon-wrapper'>
                            <div className='icon-outer'>
                                <CalendarOutlined className='icon'/>
                                2020-09-22
                            </div>
                            <div className='icon-outer'>
                                <FolderOutlined className='icon'/>
                                视频教程
                            </div>
                            <div className='icon-outer'>
                                <FireOutlined className='icon'/>
                                2435人
                            </div>
                        </div>
                    </div>
                }
                itemLayout='vertical'
                dataSource={blogList}
                renderItem={item => (
                    <List.Item>
                        <h3 className='blog-title'>{item.title}</h3>
                        <div>{item.content}</div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default BlogList;