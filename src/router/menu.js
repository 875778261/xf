import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
export default [
    {
        key: "/",
        icon: AppstoreOutlined,
        title: 'Dashboard',
        children: [
            {
                key: "/introduce",
                icon: PieChartOutlined,
                title: '系统介绍',
                role: ['user', 'admin', 'super']
            },
            {
                key: "/dashboard",
                icon: PieChartOutlined,
                title: 'Dashboard',
                role: ['user', 'admin', 'super']
            },
            {
                key: "/add",
                icon: PieChartOutlined,
                title: '添加商品',
                role: ['admin', 'super']
            },
        ]
    },
    {
        key: "homeset",
        icon: DesktopOutlined,
        title: '首页配置',
        children: [
            {
                key: "/swiper",
                icon: ContainerOutlined,
                title: '轮播图设置',
                role: ['user', 'admin', 'super']
            }
        ]
    }
]
/* 之后导给route.jsx渲染 */