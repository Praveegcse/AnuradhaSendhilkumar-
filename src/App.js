import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Add from './pages/student/Add.js'
import Logo from './images/logo.jpg'


const { Header, Sider, Content } = Layout;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Add />,
      },
    ],
  },
]);


function Root() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={Logo} alt="logo" style={{ transitionDuration: '0.2s', height: 32, width: collapsed ? 48 : 170, objectFit: collapsed ? 'contain' : 'cover' }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Add Student',
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{
        minHeight: '100vh',
      }}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            height: 'calc(100vh - 112px)',
            overflow: 'scroll'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>

  )

}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
