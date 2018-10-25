import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

import { Layout, Menu, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';

import GLInstance from './GoldenLayout/GLInstance.jsx';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SideBar extends TrackerReact(React.Component) {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {

    return (
      <Layout style={{ display: 'flex', flexDirection: 'row', flex: 'auto',}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
            flex: 'auto',
          }}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" inlineCollapsed='true'>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{
          flex: 'auto'
          }}>
          <Content style={{
            display: 'flex',
            flexDirection : 'column',
            flex: 'auto',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow : 1,}}>
              <GLInstance
                sideBarCollapsed={this.state.collapsed}
                />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SideBar;
