import { React, Link } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, List, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

function IndexPage() {
  return (
      <div>
          <div className={styles.titleDiv}>
            <span className={styles.title}>开始您的旅程吧</span>
          </div>
          <Link to="/about" >About</Link>
          <div className={styles.choose} />
          <Button type="ghost"    style={{ marginRight: '40px', marginLeft: '40px' }}>我要搭车</Button><br/>
          <Button type="ghost"    style={{ marginRight: '40px', marginLeft: '40px' }}>我要带人</Button>
      </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
