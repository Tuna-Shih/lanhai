import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const FormList = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>預約賞屋</h1>
      <Row>
        <Col span={12}>
          <iframe
            title="map"
            style={{
              width: '90%',
              height: '500',
              frameborder: '0',
              border: 0,
              allowfullscreen: '',
              ariaHidden: 'false',
              tabindex: '0'
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002890183707!2d121.5623502150063!3d25.03397598397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1591099061919!5m2!1szh-TW!2stw"></iframe>
        </Col>
        <Col span={12}>
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
              <Select placeholder="全日" allowClear>
                <Option value="全日">全日</Option>
                <Option value="上午">上午</Option>
                <Option value="中午">中午</Option>
                <Option value="晚上">晚上</Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            立即預約
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};
export default FormList;
