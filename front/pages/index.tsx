import * as React from 'react'

import log from '@front/log'
import con from '@shared/module'

import s from './index.css'

const Index = () => {
  con()
  return <p className={s.title}>{log()}</p>
}

export default Index
