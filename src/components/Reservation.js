import React from 'react';
import { Form, Input, Button, Select, Checkbox, Row, Col } from 'antd';
import { PhoneFilled, EnvironmentOutlined } from '@ant-design/icons';

import styles from './styles/Reservation.less';

const { Option } = Select;
const { Item: FormItem } = Form;

const Reservation = () => {
  const [form] = Form.useForm();

  return (
    <div className={styles.root}>
      <h1 className={styles.title} id="reservation">
        預約賞屋
      </h1>

      <Form form={form} name="control-hooks">
        <Row gutter={30}>
          <Col md={12} xs={24}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.548688654004!2d121.37482481478986!3d25.083281342468535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6c282015199%3A0x9ae6d1cab8465f7f!2zMjQ05paw5YyX5biC5p6X5Y-j5Y2A5paH5YyW5LiJ6Lev5LqM5q61Mjk46Jmf!5e0!3m2!1szh-TW!2stw!4v1584327810050!5m2!1szh-TW!2stw"
              allowFullScreen
            />
          </Col>

          <Col md={12} xs={24}>
            <FormItem
              rules={[
                {
                  required: true,
                  message: '必填'
                }
              ]}
              name="name">
              <Input placeholder="姓名" size="large" />
            </FormItem>

            <FormItem
              rules={[
                {
                  required: true,
                  message: '必填'
                }
              ]}
              name="phone">
              <Input placeholder="聯絡電話" size="large" />
            </FormItem>

            <FormItem name="Date">
              <Select defaultValue="上午" size="large">
                {['上午', '中午', '晚上', '全日'].map(text => (
                  <Option key={text} value={text}>
                    {text}
                  </Option>
                ))}
              </Select>
            </FormItem>

            <FormItem
              rules={[
                {
                  required: true,
                  message: '必勾'
                }
              ]}
              name="agree"
              valuePropName="checked">
              <Checkbox>
                我同意
                <a
                  href="#type0img1"
                  className="portfolio-link"
                  data-toggle="modal">
                  【隱私權政策】
                </a>
              </Checkbox>
            </FormItem>
          </Col>

          <Col md={24} xs={24}>
            <div className={styles.formSubmit}>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  立即預約
                </Button>
              </FormItem>
            </div>

            <div className={styles.icon}>
              <a href="tel:0226010909">
                <PhoneFilled />
              </a>
              <a href="http://goo.gl/maps/XqGY5QSrwhR1niMf6" target="blank">
                <EnvironmentOutlined />
              </a>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default React.memo(Reservation);
