import { BiDirections, BiHappyBeaming } from 'react-icons/bi';
import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { FaGraduationCap, FaRegLifeRing } from 'react-icons/fa';

import { CTAButton } from './CTAButton';
import { Feature } from './Feature';
import { Testimonial } from './Testimonial';

export const DarkWithTestimonial = () => {
    return (
        <Box as="section" pb="24">
            <Box bg="gray.800" color="white" pt="24" pb="12rem">
                <Box
                    maxW={{ base: 'xl', md: '7xl' }}
                    mx="auto"
                    px={{ base: '6', md: '8' }}
                >
                    <Stack
                        spacing="10"
                        direction={{ base: 'column', lg: 'row' }}
                        align={{ base: 'flex-start', lg: 'center' }}
                        justify="space-between"
                    >
                        <Heading
                            size="2xl"
                            lineHeight="short"
                            fontWeight="extrabold"
                            maxW={{ base: 'unset', lg: '800px' }}
                        >
                            Your Team, Supercharged with outstanding Design &
                            Support.
                        </Heading>
                        <CTAButton w={{ base: 'full', md: 'auto' }}>
                            Engage Us
                        </CTAButton>
                    </Stack>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 4 }}
                        spacing={{ base: '12', md: '8', lg: '2' }}
                        mt={{ base: '12', md: '20' }}
                    >
                        <Feature icon={<BiDirections />} title="Onboarding">
                            Streamline your employee onboarding process and
                            ensure a smooth transition for new hires with our
                            comprehensive onboarding solutions.
                        </Feature>
                        <Feature
                            icon={<BiHappyBeaming />}
                            title="Customer Success"
                        >
                            Unlock the full potential of your business with our
                            customer success strategies that prioritize the
                            satisfaction and growth of your customer base.
                        </Feature>
                        <Feature icon={<FaGraduationCap />} title="Education">
                            Empower your workforce with the knowledge and skills
                            they need to succeed with our comprehensive
                            educational resources and training programs
                        </Feature>
                        <Feature
                            icon={<FaRegLifeRing />}
                            title="Technical Support"
                        >
                            Maximize your operational efficiency and minimize
                            downtime with our reliable technical support
                            services, available 24/7 to address all your IT
                            needs.
                        </Feature>
                    </SimpleGrid>
                </Box>
            </Box>
            <Box mt="-24">
                <Box
                    maxW={{ base: 'xl', md: '7xl' }}
                    mx="auto"
                    px={{ base: '6', md: '8' }}
                >
                    <SimpleGrid spacing="14" columns={{ base: 1, lg: 2 }}>
                        <Testimonial
                            image="https://avatars.githubusercontent.com/u/49788350?v=4"
                            name="Ian Balijawa"
                            role="CEO, ABC Company"
                        >
                            Their customer success strategies have been
                            transformative for our business. They have helped us
                            identify new opportunities for growth, improve
                            customer engagement, and increase revenue. Their
                            team is dedicated, passionate, and always willing to
                            work collaboratively with us. Highly recommend them.
                        </Testimonial>
                        <Testimonial
                            image="https://avatars.githubusercontent.com/u/49788350?v=4"
                            name="Ian Balijawa"
                            role="Marketing Manager, ACME Inc."
                        >
                            Their technical support team is quick to respond and
                            resolve any issues, ensuring our operations run
                            smoothly. Their customer success team has been
                            instrumental in helping us develop a strong
                            relationship with our customers. Highly recommend
                            their services!
                        </Testimonial>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
};
