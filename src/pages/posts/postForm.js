import React, { useState, useEffect } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { addPost } from '../../services/apiConfig'
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useNumberInput,
  Input,
  Button,
  HStack,
  Divider, InputGroup, InputLeftAddon, useToast
} from '@chakra-ui/react'

import { datadogRum } from '@datadog/browser-rum';
function PostForm() {
  const toast = useToast()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    datadogRum.startView({
      name: 'Add New',
      service: 'Posts',
      version: '1.2.3'
    })
  })
  const handleInputNameChange = (e) => {
    setName(e.target.value)
  }

  const handleInputDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleInputCountryChange = (e) => {
    setCountry(e.target.value)
  }

  const isNameInputError = name === '';
  const isDesInputError = description === '';
  const isCountryInputError = country === '';

  const isError = isNameInputError || isDesInputError || isCountryInputError


  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1000,
      defaultValue: 100,
      min: 100,
      max: 5000000000,
      precision: 2,
    })

  const handleImageUrlBlur = (e) => {
    setUrl(e.target.value)
  }
  const refreshInput = () => {
    setName('')
    setDescription('')
    setCountry('')
    setUrl('')
  }

  const handleSubmitAdd = () => {
    const blog = {
      "name": name,
      "description": description,
      "country": country,
      "views": parseInt(input.value),
      "images_url": `https://${url}`
    }
    addPost(blog).then(res => {
      refreshInput()
      toast({
        title: 'Added',
        description: "This post is added in system",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(error => {
      console.log('Opps! Errpr :<', error);
    })

  }
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()


  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        {window?.location?.pathname?.includes('edit') ? 'Edit A Blog' : 'Add New Blog'}
      </Heading>
      <Divider marginBottom={10} />
      <form>
        <FormControl isRequired isInvalid={isError}>
          <FormLabel>Name</FormLabel>
          <Input type='text' value={name} onChange={handleInputNameChange} />
          {!isNameInputError ? "" : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}

          <FormLabel>Description</FormLabel>
          <Input type='text' required value={description} onChange={handleInputDescriptionChange} />
          {!isDesInputError ? "" : (
            <FormErrorMessage>Description is required.</FormErrorMessage>
          )}

          <FormLabel>Country</FormLabel>
          <Input type='text' required value={country} onChange={handleInputCountryChange} />
          {!isCountryInputError ? (
            ""
          ) : (
            <FormErrorMessage>Country is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormLabel>Image Url</FormLabel>
        <InputGroup size='sm'>
          <InputLeftAddon children='https://' />
          <Input onChange={handleImageUrlBlur} placeholder='my-site/my-image.jpg' />
        </InputGroup>

        <FormLabel>Views</FormLabel>
        <HStack maxW='320px'>
          <Button {...inc}>+</Button>
          <Input  {...input} />
          <Button {...dec}>-</Button>
        </HStack>
        <Button
          bottom="0" right="0"
          leftIcon={<AddIcon />}
          data-custom-name="Add button"
          colorScheme='teal'
          marginTop={10}
          variant='solid'
          onClick={handleSubmitAdd}>
          Add
        </Button>
      </form>
    </>
  )
}

export default PostForm