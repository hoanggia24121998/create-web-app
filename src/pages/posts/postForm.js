import React, { useState, useEffect } from 'react'
import { AddIcon } from '@chakra-ui/icons'
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
  Divider
} from '@chakra-ui/react'
import { datadogRum } from '@datadog/browser-rum';
function PostForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [views, setViews] = useState('')

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

  const handleInputViewsChange = (e) => {
    setViews(e.target.value)
  }

  const isError = name === '' || description === '' || country === ''


  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1000,
      defaultValue: 100,
      min: 100,
      max: 5000000000,
      precision: 2,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()


  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        {window?.location?.pathname?.includes('edit') ? 'Edit A Blog' : 'Add New Blog'}
      </Heading>
      <Divider marginBottom={10} />
      <FormControl isInvalid={isError}>
        <FormLabel>Name</FormLabel>
        <Input type='text' value={name} onChange={handleInputNameChange} />
        {!isError && (
          <FormErrorMessage>Name is required.</FormErrorMessage>
        )}

        <FormLabel>Description</FormLabel>
        <Input type='text' value={description} onChange={handleInputDescriptionChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}

        <FormLabel>Country</FormLabel>
        <Input type='text' value={country} onChange={handleInputCountryChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}

        <FormLabel>Views</FormLabel>
        <HStack maxW='320px'>
          <Button {...inc}>+</Button>
          <Input {...input} />
          <Button {...dec}>-</Button>
        </HStack>
        <Button pos="absolute" bottom="0" right="0" leftIcon={<AddIcon />} data-custom-name="Add button" colorScheme='teal' marginTop={10} variant='solid'>
          Add
        </Button>
      </FormControl>
    </>
  )
}

export default PostForm