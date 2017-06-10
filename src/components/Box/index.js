import React from 'react'
import './index.less'
export default () => {
  return (
    Array(30).map(() => <div className='box' />)
  )
}
