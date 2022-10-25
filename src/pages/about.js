import React, { useEffect } from 'react'
import { Grid, GridItem, Heading, VStack, Divider } from '@chakra-ui/react'
import { datadogRum } from '@datadog/browser-rum';
function About() {

  useEffect(() => {
    document.title = 'About Toshiba'
  }, [])
  useEffect(() => {
    datadogRum.startView({
      name: 'About',
      service: 'Posts',
      version: '1.2.3'
    })
  })
  return (
    <>
      <Heading as='h3' size='lg' mb='30px'>
        About Toshiba
      </Heading>
      <Divider marginBottom={10} />
      <Grid gridTemplateColumns={'7fr 3fr'} gap='10'>
        <GridItem>
          <p>
            <strong>Toshiba Corporation</strong> (株式会社東芝, <em>Kabushikigaisha Tōshiba</em>, English: /təˈʃiːbə, tɒ-, toʊ-/), commonly known as Toshiba and stylized as TOSHIBA, is a Japanese multinational conglomerate corporation headquartered in Minato, Tokyo, Japan. Its diversified products and services include power, industrial and social infrastructure systems, elevators and escalators, electronic components, semiconductors, hard disk drives (HDD), printers, batteries, lighting, as well as IT solutions such as quantum cryptography which has been in development at Cambridge Research Laboratory, Toshiba Europe, located in the United Kingdom, now being commercialised. It was one of the biggest manufacturers of personal computers, consumer electronics, home appliances, and medical equipment. As a semiconductor company and the inventor of flash memory, Toshiba had been one of the top 10 in the chip industry until its flash memory unit was spun off as Toshiba Memory, later Kioxia, in the late 2010s.
          </p>
          <br />
          <p>
            The Toshiba name is derived from its former name, Tokyo Shibaura Denki K.K. (Tokyo Shibaura Electric Co., Ltd) which in turn was a 1939 merger between Shibaura Seisaku-sho (founded in 1875) and Tokyo Denki (founded in 1890). The company name was officially changed to Toshiba Corporation in 1978. It is listed on the Tokyo Stock Exchange, where it was a constituent of the Nikkei 225 and TOPIX 100 indices (leaving both in August 2018, but returned to the latter in 2021), and the Nagoya Stock Exchange.
          </p>
          <br />
          <p>
            A technology company with a long history and sprawling businesses, Toshiba is a household name in Japan and has long been viewed as a symbol of the country's technological prowess. Its reputation has since been affected following an accounting scandal in 2015 and the bankruptcy of subsidiary energy company Westinghouse in 2017, after which it was forced to shed a number of underperforming businesses, essentially eliminating the company's century-long presence in consumer markets.
          </p>
          <br />
          <p>
            Toshiba announced on 12 November 2021 that it would split into three separate companies, respectively focusing on infrastructure, electronic devices, and all other remaining assets; the latter would retain the Toshiba name. It expected to complete the plan by March 2024. But the plan was challenged by stockholders, and at an extraordinary general meeting on 24 March 2022, they rejected the plan. They also rejected an alternative plan put forward by a large institutional investor that would have had the company search for buyers among private equity firms.
          </p>
          <br />
          <small><i>
            {'Reference: '}
            <a href='https://en.wikipedia.org/wiki/Toshiba'
              style={{ textDecoration: 'underline', color: 'blue' }}
            >
              https://en.wikipedia.org/wiki/Toshiba
            </a>
          </i></small>
        </GridItem>
        <GridItem>
          <VStack>
            <img
              alt='Toshiba headquarter'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hamamatsucho_Building.JPG/800px-Hamamatsucho_Building.JPG'
              style={{ height: '450px' }}
            />
            <small><i>Toshiba global headquarters in Minato, Tokyo, Japan</i></small>
          </VStack>
        </GridItem>
      </Grid>
    </>
  )
}

export default About