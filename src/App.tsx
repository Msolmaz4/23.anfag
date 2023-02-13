import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from './components/Signup';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
            <div
              style={{
                float: 'left',
                width: 120,
                height: 31,
                margin: '16px 24px 16px 0',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(3).fill(null).map((_, index) => ({
                key: String(index + 1),
                label: `nav ${index + 1}`,
              }))}
            />
          </Header>
          <Content className="site-layout" style={{ padding: '150px, 50px' }}>

          </Content>

        </Layout>

        <Routes>

          <Route path='/register' element={<Signup />} />
        </Routes>


        <Footer style={{ textAlign: 'center' }}>2023ms</Footer>
      </Router>
    </div>
  );
}

export default App;
