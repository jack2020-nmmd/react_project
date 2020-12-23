import React, {Component} from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import "./css/login.less";
import logo from "./img/logo.png";
const {Item} = Form

export default class Login extends Component{
  onFinish = () =>{
    //用户名和密码的合法性要求
    //1、必须输入
    //2、必须大于四位
    //3、必须小于12位
    //4、必须是英文，数字或下划线组成
    alert("dianle")
  }



  render(){
    return(
      <div className='login'>
        <header>
          <img src={logo} alt="官网图标"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>

          <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
          >
              <Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                  { max: 12, message: '用户名必须小于12位!'},
                  { min: 4, message: '用户名必须大于4位!'},
                  { pattern: /^\w+$/, message: '用户名必须由英文、字母和下划线组成!'}
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:  'rgba(0, 0, 0, 0.25)'}}/> } placeholder="Username" 
                />
              </Item>
              <Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" style={{color:  'rgba(0, 0, 0, 0.25)'}}/>}
                  type="password"
                  placeholder="Password"
                />
            </Item>
            
              <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>

        </section>

      </div>
    )
  }
}