import React, { useEffect } from 'react'
import { Heading, Divider } from '@chakra-ui/react'
import { datadogRum } from '@datadog/browser-rum';
function PostDetail() {
  useEffect(() => {
    datadogRum.startView({
      name: 'Post Detail ',
      service: 'Posts',
      version: '1.2.3'
    })
  })
  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        Detail
      </Heading>
      <Divider marginBottom={10} />
    </>
  )
}

export default PostDetail