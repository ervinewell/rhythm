import React, { Component } from 'react'
import { Button } from 'antd'

class Setting extends Component {
  doUpload = () => {

  }

  render () {
    const { doUpload } = this
    return (
      <div>
        <h2>设置</h2>
        <Button
          type="primary"
          icon="upload"
          onClick={doUpload}
        >
          选择配置文件
        </Button>
      </div>
    )
  }
}

export default Setting
