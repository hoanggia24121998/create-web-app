import React from 'react'
import { Badge, Box, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function PostCard(props) {
  const { post } = props
  const path = `/posts/${post.blogid}`
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box w="30%" borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom={10} >
      <Link to={path} className='a'>
        <Image src={post.images_url || property.imageUrl} alt={property.imageAlt} h="60%" />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              ml='2'
            >
              {props.post.views} views &bull; {props.post.country}
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {props.post.name}
          </Box>

          <Box>
            {post.views} &#x1F441;
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default PostCard