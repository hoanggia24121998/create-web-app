import React, { useEffect, useState } from 'react'
import { Heading, Flex, Divider, Text } from '@chakra-ui/react'
import { getAllPosts } from '../../services/apiConfig'
import PostCard from '../../components/PostCard'
import { withAITracking } from '@microsoft/applicationinsights-react-js'
import { reactPlugin } from '../../services/insightsConfig'
import { datadogRum } from '@datadog/browser-rum';
function ListPosts() {
  const [listPosts, setListPosts] = useState([])

  useEffect(() => {
    document.title = 'Blog page'
  }, [])

  useEffect(() => {
    getAllPosts().then(res => {
      console.log('res all posts nè: ', res)
      setListPosts(res)
    })
      .catch(error => {
        console.log('Opps! Errpr :<', error);
      })
  }, [])

  useEffect(() => {
    datadogRum.startView({
      name: 'List Post',
      service: 'Posts',
      version: '1.2.3'
    })
  })

  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        Blog
      </Heading>
      <Text fontSize='xl'>
        The blog topic about movies and games
      </Text>
      <Divider marginBottom={10} />
      <Flex justifyContent='space-between' flexWrap='wrap'>
        {(listPosts && listPosts?.length > 0) &&
          listPosts?.map((post, index) => (
            <PostCard data-custom-name={`Select post: ${index}`}  {...{ key: index, post }} />
          ))}
      </Flex>
    </>
  )
}

// export default ListPosts
export default withAITracking(reactPlugin, ListPosts, 'ListPosts')