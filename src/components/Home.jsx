import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m="auto"
                >
                    Services
                </Heading>

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'180%'}
                        p={['4', '16']}
                        textAlign={'center'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae suscipit natus deserunt vero cum, nisi aliquid debitis. Consequatur saepe aut, eos vel aliquid modi perspiciatis. Hic impedit eos tempore!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, repellat eveniet. Architecto tenetur delectus reiciendis accusamus numquam. Doloribus vitae, officia omnis quisquam veniam ipsum architecto provident, illo ex maxime laborum sit officiis illum libero animi excepturi tempore expedita cumque quibusdam laudantium delectus hic repudiandae fuga eos. Placeat facere enim, cum numquam soluta assumenda repudiandae dolore, deleniti et, quos illum itaque?
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>Future Of Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>Experience Console Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>Immersive Nigh Life</Heading>
        </Box>
    </Carousel>
);

export default Home;
