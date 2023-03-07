import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Col, Form, Input, MenuProps, Row, Card } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Menu from 'antd/es/menu';
import style from 'antd/es/alert/style';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];



const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function App() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [userDetails, setUserDetails] = useState({name: '', email: ''})

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const onFinish = (values: any) => {
    console.log('Success:',email, username, password, confirmpassword);
    setUserDetails({name: username, email: email})
  };

  return (
    <div className="App">

<Row gutter={16}>
      <Col className="gutter-row" span={6}>
      <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
      </Col>
      <Col className="gutter-row" span={6}>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

<Form.Item
    label="Email"
    name="email"
    rules={[
      { required: true, message: 'Please input your email!' },
      { type: 'email', message: 'Please input a valid email!' },
    ]}
  >
    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
  </Form.Item>

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input value={username} onChange={(e) => setUsername(e.target.value)} />
    </Form.Item>

    <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    <Input.Password
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        // Set confirm password as empty when password is changed
        setConfirmPassword('');
      }}
    />
  </Form.Item>

  <Form.Item
    label="Confirm Password"
    name="confirmpassword"
    rules={[
      {
        required: password !== '',
        message: 'Please confirm your password!',
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
      }),
    ]}
  >
    <Input.Password value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Col>
      <Col className="gutter-row" span={6}>
        {userDetails.name && userDetails.email ?
          <Card title="User Details" style={{ width: 300 }}>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
          </Card>
          : null
        }
      </Col>
    </Row>

    </div>
  );
}

export default App;

