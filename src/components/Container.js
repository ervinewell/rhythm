import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux, withRouter } from 'dva/router'
import propTypes from 'prop-types'
import styles from './Container.css'
import { Layout, Menu, Icon } from 'antd'

const { Header: AHeader, Content } = Layout

class Container extends Component {
  state = {
    menuList: [{
      label: '设置',
      value: 'setting',
      icon: 'setting',
      url: '/setting'
    }],
    currentMenu: ''
  }

  clickMenuItem = (item) => {
    this.props.dispatch(routerRedux.push(item.url))
    this.setState({
      currentMenu: item.value
    })
  }

  render () {
    const { clickMenuItem, state } = this
    const { currentMenu, menuList } = state
    return (
      <Layout>
        <AHeader>
          <Menu
            theme="dark"
            mode="horizontal"
            current={currentMenu}
            className={styles.menu}
          >
            {
              menuList.map(item => (
                <Menu.Item
                  onClick={() => clickMenuItem(item)}
                  key={item.value}
                >
                  {item.type && <Icon type={item.type} />}
                  {item.label}
                </Menu.Item>
              ))
            }
          </Menu>
        </AHeader>
        <Content className={styles.content}>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

Container.propTypes = {
  children: propTypes.node,
  dispatch: propTypes.func
}

export default withRouter(connect(({ container }) => ({
  container
}))(Container))
