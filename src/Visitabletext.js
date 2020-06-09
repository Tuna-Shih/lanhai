import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Visitabletext.less';
import VisibilitySensor from 'react-visibility-sensor';

const Visitabletext = props => {
  const [visible, setVisible] = useState(false);
  const { title, square, subTitle, article } = props;

  return (
    <div className={`text ${!visible ? '' : 'visit'}`}>
      <VisibilitySensor onChange={setVisible} active={!visible}>
        <div className="visibilitySensor" />
      </VisibilitySensor>
      <p>
        {title.map(element => (
          <span key={element.id} className="right-title">
            {element.text}
            <br />
          </span>
        ))}
      </p>
      <p>
        {square.map(element => (
          <span key={element.id} className="square">
            {element.text}
            <br />
          </span>
        ))}
      </p>
      <p>
        {subTitle.map(element => (
          <span
            key={element.id}
            className="right-subTitle"
            style={{ transitionDelay: '.25s' }}>
            {element.text}
            <br />
          </span>
        ))}
      </p>
      <p>
        {article.map(element =>
          element.text instanceof Array ? (
            <span
              key={element.id}
              className="right-article"
              style={{ transitionDelay: '.5s' }}>
              {element.text.map(e => (
                <span key={e.id} className="right-article-color">
                  {e.txt}
                </span>
              ))}
              <br />
            </span>
          ) : (
            <span
              key={element.id}
              className="right-article"
              style={{ transitionDelay: '.5s' }}>
              {element.text}
              <br />
            </span>
          )
        )}
      </p>
    </div>
  );
};

export default Visitabletext;
