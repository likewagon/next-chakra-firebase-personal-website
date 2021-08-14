import React, { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Link,
    Box,
    Image,
    Icon
} from '@chakra-ui/react'
import { TwitterIcon, GitHubIcon } from '../components/CustomIcons'
import { useRouter } from 'next/router'

import Container from '../components/Container'
import ViewCounter from '../components/ViewCounter'
import LikeCounter from '../components/LikeCounter'
import BlogSeo from '../components/blog/BlogSeo'
import GitHubSponsorCard from '../components/GitHubSponsorCard'
import Comments from '../components/blog/Comments'
import BlogAd from '../components/blog/BlogAd'
import FeaturedProjectCard from '../components/FeaturedProjectCard'

const editUrl = (slug) =>
    `https://github.com/likewagon/jamesli.io/edit/main/pages/blog${slug}.mdx`
const tweetUrl = (slug) =>
    `https://twitter.com/intent/tweet?text=https://next-chakra-firebase-personal-website.vercel.app/blog${slug} by @bjmncrlsn`

export default function BlogLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }
    const router = useRouter();
    const slug = router.asPath.replace('/blog', '')


    const [width, setWidth] = useState(1)
    const handleScroll = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setWidth(scrollPercentRounded)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <Box h={1} as="div" bgGradient="linear(to-r, green.200, pink.500)" position="sticky" top={0} zIndex={100} w={`${width}%`}></Box>
            <Container>
                <BlogSeo url={`https://next-chakra-firebase-personal-website.vercel.app/blog${slug}`} {...frontMatter} />
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w="100%"
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            {frontMatter.title}
                        </Heading>
                        <Flex
                            justify="space-between"
                            align={['initial', 'center']}
                            direction={['column', 'row']}
                            mt={2}
                            w="100%"
                            mb={4}
                        >
                            <Flex align="center">
                                <Avatar
                                    size="xs"
                                    name="Maxim Dymchenko"
                                    src="../images/portrait.jpg"
                                    mr={2}
                                />
                                <Text fontSize="sm" color={textColor[colorMode]}>
                                    {frontMatter.by}
                                    {'Maxim Dymchenko / '}
                                    {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                                </Text>
                            </Flex>
                            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text}
                            {` • `}
                            <ViewCounter id={slug} />
                            {` • `}
                            <LikeCounter id={slug} />
                        </Text>
                        </Flex>
                        {frontMatter.Image != '' ? <Image src={frontMatter.image} alt={frontMatter.alt} /> : null}
                    </Flex>
                    <BlogAd />
                    {children}
                    <Box>
                        <Link href={tweetUrl(slug)} isExternal>
                            <Icon as={TwitterIcon} size="18px" mr={2} />
                            {'Share on Twitter'}
                        </Link>
                        {` • `}
                        <Link href={editUrl(slug)} isExternal>
                            <Icon as={GitHubIcon} size="18px" mr={2} />
                            {'Edit on GitHub'}
                        </Link>
                    </Box>
                    <FeaturedProjectCard
                        title="Coffeeclass"
                        href="https://www.coffeeclass.io/"
                        src="/images/coffee-only-transparent-bg.png"
                        alt='Image of coffee'
                        color={iconColor[colorMode]}
                    >
                        Coffeeclass is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner.
                    </ FeaturedProjectCard>
                    <GitHubSponsorCard />
                    <Comments />
                </Stack>
            </Container>
        </>
    )
}
