import React from 'react';
import { Form, Input, Button, Select, Checkbox, Row, Col } from 'antd';
import { PhoneFilled, EnvironmentOutlined } from '@ant-design/icons';
import './formList.less';

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
      <h1 className="title" id="reservation">
        預約賞屋
      </h1>
      <Row gutter={30}>
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
              name="name"
              rules={[
                {
                  required: true,
                  message: '必填'
                }
              ]}>
              <Input placeholder="姓名" size="large" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: '必填'
                }
              ]}>
              <Input placeholder="聯絡電話" size="large" />
            </Form.Item>
            <Form.Item
              name="Date"
              rules={[
                {
                  required: true,
                  message: '必填'
                }
              ]}>
              <Select defaultValue="上午" size="large">
                {['上午', '中午', '晚上', '全日'].map(text => (
                  <Option key={text} value={text}>
                    {text}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: '必勾'
                }
              ]}>
              <Checkbox>
                我同意
                <a href="#type0img1" class="portfolio-link" data-toggle="modal">
                  【隱私權政策】
                </a>
              </Checkbox>
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

      <div className="icon">
        <a href="tel:0226010909" className="phone">
          <PhoneFilled />
        </a>
        <a
          href="http://goo.gl/maps/XqGY5QSrwhR1niMf6"
          className="map"
          target="blank">
          <EnvironmentOutlined />
        </a>
      </div>
    </div>
  );
};
export default FormList;