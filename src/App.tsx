import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Menu, Layout, Breadcrumb } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Pagina2 } from "./Pagina2";
import { Optiune1 } from "./Optiune1";

const { SubMenu } = Menu;
const { Header, Content } = Layout;

function App() {
  return (
    <div className="main_cont">
      <Router>
        <Layout className="layout">
          <Header style={{
            backgroundColor: "#767676",
            position: "fixed",
            width: "50%",
            zIndex: 9999
          }}>
            <div className="logo" >
              <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-p@2x.png"
                style={{
                  width: 110
                }} />
            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{
              backgroundColor: "#767676",
            }}>
              <Menu.Item key="home" icon={<MailOutlined />}>
                <Link to="/">Pagina Principală</Link>
              </Menu.Item>
              <Menu.Item key="pagina2" icon={<AppstoreOutlined />}>
                <Link to="/pagina2">Pagina 2</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<SettingOutlined />} title="Opțiuni">
                <Menu.Item key="optiune1">
                  <Link to="/optiune1">Opțiunea 1</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ padding: '0 200px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
              <Breadcrumb.Item>ThisNode</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 124, minHeight: 200 }}>
              <Routes>
                <Route path="/" element={<h1>Pagina Principală</h1>} />
                <Route path="/pagina2" element={<Pagina2 />} />
                <Route path="/optiune1" element={<Optiune1 />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
