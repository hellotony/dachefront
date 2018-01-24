//import { NavBar, Icon } from 'antd-mobile';
import { Button, List, WhiteSpace } from 'antd-mobile';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './choose.css';

ReactDOM.render(
  <div>
      <div className={styles.titleDiv}>
        <span className={styles.title}>开始您的旅程吧</span>
      </div>
      <div className={styles.choose} />
      <Button type="ghost"    style={{ marginRight: '40px', marginLeft: '40px' }}>我要搭车</Button><br/>
      <Button type="ghost"    style={{ marginRight: '40px', marginLeft: '40px' }}>我要带人</Button>
  </div>
  , document.getElementById("choose"));
