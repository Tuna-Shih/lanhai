import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import './App.less';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

const FormList = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="wrapper-formList">
      <h1 className="title" id={2}>
        預約賞屋
      </h1>
      <Row>
        <Col sm={12} xs={24}>
          <iframe
            title="map"
            style={{
              padding: '10px',
              width: '100%',
              height: '100%',
              frameborder: '0',
              border: 0,
              allowfullscreen: '',
              ariaHidden: 'false',
              tabindex: '0'
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.548688654004!2d121.37482481478986!3d25.083281342468535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6c282015199%3A0x9ae6d1cab8465f7f!2zMjQ05paw5YyX5biC5p6X5Y-j5Y2A5paH5YyW5LiJ6Lev5LqM5q61Mjk46Jmf!5e0!3m2!1szh-TW!2stw!4v1584327810050!5m2!1szh-TW!2stw"></iframe>
        </Col>
        <Col sm={12} xs={24}>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}>
            <Form.Item
              name="姓名"
              label="姓名"
              rules={[
                {
                  required: true
                }
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="電話"
              label="電話"
              rules={[
                {
                  required: true
                }
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="時間"
              label="時間"
              rules={[
                {
                  required: true
                }
              ]}>
              <Select allowClear>
                <Option value="全日">全日</Option>
                <Option value="上午">上午</Option>
                <Option value="中午">中午</Option>
                <Option value="晚上">晚上</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className="form-submit">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            立即預約
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};
export default FormList;
