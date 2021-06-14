import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Link,
    Text,
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/react'

import Container from '../components/Container'
import ProjectListFull from '../components/ProjectListFull'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import GitHubSponsorCard from '../components/GitHubSponsorCard'

const url = 'https://next-chakra-firebase-personal-website.vercel.app/projects'
const title = 'Projects – James Li'
const description = 'Here are some of the open source projects and GitHub repos I am working on.'

const Projects = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Projects
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>Between school, work, youtube, and individual curiosity, I have worked on many projects over the years. Below you will find
                        all of them. Clicking on the project card will bring you to the GitHub repo. If you enjoy or use any of these projects, please <Link href="https://github.com/sponsors/likewagon" isExternal color="blue.500">consider sponsoring me</Link> on GitHub!
                        </Text>
                        <Heading letterSpacing="tight" as="h1" mt={4} size="xl" fontWeight={700}>
                            Featured Projects
                        </Heading>
                        <FeaturedProjectCard
                            title="Coffeeclass"
                            href="https://www.coffeeclass.io/"
                            src="/images/coffee-only-transparent-bg.png"
                            alt='Image of coffee'
                            color={iconColor[colorMode]}
                        >
                            Coffeeclass is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Word Of The Day App"
                            href="https://github.com/likewagon/wotd"
                            src="/images/wotd.png"
                            alt='Word Of The Day logo'
                            color={iconColor[colorMode]}
                        >
                            Word of the day app built with <Code>Dart</Code>, <Code>Flutter</Code>, and <Code>Wordnik API</Code>. Video tutorial posted on YouTube.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Personal Website"
                            href="https://github.com/likewagon/jamesli.io"
                            src="/images/logo.png"
                            alt='Personal website logo'
                            color={iconColor[colorMode]}
                        >
                            My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data.
                        </FeaturedProjectCard>
                        <Heading letterSpacing="tight" as="h2" mb={2} mt={4} size="xl" fontWeight={700}>
                            All Projects
                        </Heading>
                        <ProjectListFull />
                        <GitHubSponsorCard />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects