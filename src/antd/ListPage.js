import React from 'react';
import { connect } from 'dva';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './choose.css';
import { List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListPage extends React.Component {

    state = {
      disabled: false,
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar
                      mode="light"
                      icon={<Icon type="left" />}
                      onLeftClick={() => console.log('onLeftClick')}
                      rightContent={[
                        <Icon key="1" type="ellipsis" />,
                      ]}
                    >查看行程</NavBar>

                <List  className="my-list">
                    <Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item><Item
                      arrow="horizontal"
                      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                      multipleLine
                      onClick={() => {}}
                      platform="android"
                    >
                      松江 -> 宿松
                      <Brief>
                        时间: 2017-02-01 08:00:00  星期3   带1人<br />
                        职业：IT工程师
                      </Brief>
                    </Item>

                </List>
            </div>
        )
    }
}

export default ListPage;
