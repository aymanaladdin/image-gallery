import type { NextPage } from 'next'

import { ServerError } from '@components/ServerError'


const InternalError: NextPage = () => {
  return (
    <div className='page-wrapper'>
      <ServerError />
    </div>
  )
}

export default InternalError
