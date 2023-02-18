import React from 'react';
import { Button, Form, Input, Result } from 'antd';
import showError from '../utils/SchowEr'
import api from '../utils/api'
import { useNavigate ,useLocation } from "react-router-dom";



const Login = () => {

 const navi = useNavigate()
 const local = useLocation()
 console.log(local)
    const onFinish =  async  (values: any) => {
        console.log('Success:', values);
        try {
            await api.post('/users/login',values)
            navi('/')
        } catch (error) {
            console.log(error)
        }
        
      
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', {errorInfo});
        showError (errorInfo)
      };
      


  return (
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
    {local.state?.newSignup && 
    (
      <Result
        status="success"
        title="You successfully signed up!"
        subTitle="Please login using your credentials."
      />
    )
    }
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

  

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Login