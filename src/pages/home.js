import React, { useEffect } from 'react'
import { Badge, Heading, Highlight, List, ListIcon, ListItem, Text, Divider } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Home() {
  // const [initialized, setInitialized] = useState()


  useEffect(() => {
    document.title = 'Home page'
  }, [])

  // useEffect(() => {
  //     // const { history } = this.props;
  //     // const { initialized } = this.state;
  //     // const AppInsightsInstrumentationKey = this.props.instrumentationKey; // PUT YOUR KEY HERE
  //     // if (!Boolean(initialized) && Boolean(AppInsightsInstrumentationKey) && Boolean(history)) {
  //     //   ai.initialize(AppInsightsInstrumentationKey, history);
  //     //   this.setState({ initialized: true });
  //     // }

  //     // this.props.after();
  // }, [])

  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        Welcome to Toshiba Blog!
      </Heading>
      <Divider marginBottom={10} />
      <b>
        <Highlight
          query='Port FE: 3456'
          styles={{ px: '5', py: '2', bg: 'yellow.100' }}
        >
          Port FE: 3456
        </Highlight>
      </b>

      <Text fontSize='xl' my='10px'>List pages:</Text>
      <List spacing={3}>
        {/* Commom pages */}
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          Home:
          &emsp;
          <Link to='/' className='a'>/</Link>
          &emsp;
          <Badge variant='subtle' colorScheme='green'>
            Done
          </Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          About:
          &emsp;
          <Link to='/about' className='a'>/about</Link>
          &emsp;
          <Badge variant='subtle' colorScheme='green'>
            Done
          </Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          Contact:
          &emsp;
          <Link to='/contact' className='a'>/contact</Link>
          &emsp;
          <Badge variant='subtle' colorScheme='green'>
            Done
          </Badge>
        </ListItem>

        <br />

        {/* Posts' pages */}
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          List all posts:
          &emsp;
          <Link to='/posts' className='a'>/posts</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          Post detail:
          &emsp;
          <Link to='/posts/1' className='a'>/posts/:postId</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          Add new post:
          &emsp;
          <Link to='/posts/add' className='a'>/posts/add</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color='blue.300' />
          Update a post:
          &emsp;
          <Link to='/posts/1/edit' className='a'>/posts/:postId/edit</Link>
        </ListItem>
      </List>
    </>
  )
}

export default Home
