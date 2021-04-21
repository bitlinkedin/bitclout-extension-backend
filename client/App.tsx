import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './assets/fleming.less';
import Main from './pages/Main';
import Login from './pages/Login';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
import { useHistory } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const setupInterceptors = (history) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'accessToken',
    )}`;

    return config;
  });
  axios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if ([401, 403].includes(error.response.status)) {
        history.push('/login');
        localStorage.removeItem('accessToken');
      }

      return error;
    },
  );
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();
  setupInterceptors(history);

  const onCollapse = (value) => {
    console.log(value);
    setCollapsed(value);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Profiles
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
            <Switch>
              <PrivateRoute exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
