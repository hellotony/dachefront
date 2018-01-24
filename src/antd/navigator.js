import { NavBar, Icon } from 'antd-mobile';
import ReactDOM from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
    >请选择</NavBar>
  </div>
  , document.getElementById("navigator"));
