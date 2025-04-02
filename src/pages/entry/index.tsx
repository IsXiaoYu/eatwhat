import banner from "../../common/images/banner.png";
import React from "react";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
// 从 Layout 组件中解构出 Header, Content, Footer
const { Header, Content, Footer } = Layout;
// 创建导航项数组
const App: React.FC = () => {
  const navigate = useNavigate();
  // 使用 Ant Design 的主题 token
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgBase },
  } = theme.useToken();

  const items = [
    {
      label: "推荐",
      key: "recommend",
      onClick: () => {
        navigate("/");
      },
    },
    {
      label: "菜谱",
      key: "menu",
      onClick: () => {
        navigate("/menu");
      },
    },
    {
      label: "我的",
      key: "my",
      onClick: () => {
        navigate("/my");
      },
    },
    {
      label: "关于",
      key: "about",
      onClick: () => {
        navigate("/about");
      },
    },
  ];

  return (
    // 使用 ConfigProvider 来自定义主题
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: colorBgBase, // 设置 Header 背景色为基础背景色
          },
        },
      }}
    >
      <Layout>
        {/* 页面头部 */}
        <Header
          className="header"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo 区域 */}
          <div className="logo">
            <img height={50} src={banner} />
          </div>
          {/* 导航菜单 */}
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["recommend"]}
            items={items}
            style={{ flex: 1, minWidth: 0, position: "absolute", right: "10%" }}
          />
        </Header>
        {/* 页面内容区 */}
        <Content style={{ padding: "5px 48px" }}>
          {/* 主要内容区域 */}
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* 页面底部 */}
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          eatwhat ©{new Date().getFullYear()} Created by xiaoyu
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
