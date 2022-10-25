import React, { useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Textarea,
  VStack,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import { withAITracking } from '@microsoft/applicationinsights-react-js'
import { reactPlugin } from '../services/insightsConfig'
import { datadogRum } from '@datadog/browser-rum';
function Contact() {

  useEffect(() => {
    document.title = 'Contact page'

  }, [])

  useEffect(() => {
    datadogRum.startView({
      name: 'Contact',
      service: 'Posts',
      version: '1.2.3'
    })
  })
  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        Contact Us
      </Heading>
      <Divider marginBottom={10} />
      <SimpleGrid columns={2} spacing={16}>
        <VStack spacing={6}>
          {/* Name */}
          <FormControl isRequired>
            <FormLabel>Full name</FormLabel>
            <Input />
          </FormControl>

          {/* Email */}
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          {/* Phone */}
          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input type='tel' />
          </FormControl>
        </VStack>

        {/* Message */}
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder='Input your message here' rows={11} />
        </FormControl>
      </SimpleGrid>
    </>
  )
}

// export default Contact
export default withAITracking(reactPlugin, Contact, 'Contact')