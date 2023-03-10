
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import api from '../utils/api'

const Signup = () => {

  const navigate = useNavigate()
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = async (values: any) => {

    try {
      await api.post('/users/register', values)
      //burada yeni kullanici gelice bir ayarlama yaptik loginle birlikte bir deger gonderecegiy
      navigate('/login',{
        state:{
          newSignup:true
        }
        })


    } catch (error) {
      console.log('error')

    }

  };


  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item name='username' label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!', min: 6 }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='fullName' label="FullName" >
        <Input />
      </Form.Item>


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Signup