import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Row, Col } from 'antd';
import { convertRawToHTML } from 'braft-convert';

import styles from './styles/ImageAndText.less';

const ImageAndText = ({
  images: [leftImages, rightImages],
  title,
  subTitle,
  article
}) => {
  const [visible, setVisible] = useState(false);
  const paragraph = convertRawToHTML(article);

  return (
    <Row>
      <Col md={16} xs={24}>
        {leftImages.map(image => (
          <img
            key={image}
            style={{ height: `${100 / rightImages.length}%` }}
            src={image}
          />
        ))}
      </Col>

      <Col md={8} xs={24}>
        <div className={styles.rightAbsolute}>
          {rightImages.map(image => (
            <img
              key={image}
              style={{ height: `${100 / rightImages.length}%` }}
              src={image}
            />
          ))}
        </div>

        <div className={`${styles.text} ${!visible ? '' : styles.visible}`}>
          <VisibilitySensor onChange={setVisible} active={!visible}>
            <div className={styles.visibilitySensor} />
          </VisibilitySensor>

          <div className={styles.title}>
            {title !== []
              ? title.map(text => <div key={text}>{text}</div>)
              : null}
          </div>

          <div className={styles.subTitle}>
            {subTitle.map(text => (
              <div key={text}>{text}</div>
            ))}
          </div>

          <div className={styles.article}>{paragraph}</div>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(ImageAndText);
