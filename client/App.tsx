import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import './assets/fleming.less'
import Main from './pages/Main';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (value) => {
    console.log(value);
    setCollapsed(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
          {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
          {/*</Breadcrumb>*/}
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </Router>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
