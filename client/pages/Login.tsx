import { Form, Input, Button, Card, notification } from 'antd';
import * as React from 'react';
import axios  from 'axios';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const history = useHistory();

  const onFinish = async (values: any) => {
    const { error, token } = await axios
      .post<any>('/api/login', values)
      .then((response) => response.data);
    if (error) {
      notification.error({ message: error.message });
    }
    const accessToken = token.accessToken;
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${accessToken}`;

      return config;
    });
    localStorage.setItem('accessToken', accessToken);

    history.push('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card
      title="Login"
      style={{ width: '400px', margin: 'auto', marginTop: '200px' }}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default Login;
