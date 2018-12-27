import * as React from 'react'

import log from '@front/log'
import con from '@shared/module'

export default () => {
  con()
  return <p>{log()}</p>
}
