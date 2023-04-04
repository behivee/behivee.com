import {
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import { Stat } from './Stat';

export const StatsWithLines = () => (
    <Stack
        as="section"
        maxW="7xl"
        mx="auto"
        px={{ base: '6', md: '8' }}
        py={{ base: '12', md: '20' }}
        spacing="12"
    >
        <Stack maxW="xl" spacing="6">
            <Heading size="2xl" fontWeight="extrabold">
                Less overhead, more collaboration
            </Heading>
            <Text
                fontSize="lg"
                fontWeight="medium"
                color={useColorModeValue('gray.600', 'whiteAlpha.700')}
            >
                Discover how reducing unnecessary costs and streamlining
                processes can improve collaboration and communication among team
                members.
            </Text>
        </Stack>
        <SimpleGrid
            mx="auto"
            spacing={{ base: '10', md: '20' }}
            columns={{ base: 1, md: 3 }}
        >
            <Stat
                title="Mobile revenue"
                value="+30%"
                accentColor={useColorModeValue('green.500', 'green.300')}
            >
                Learn proven techniques to attract and retain new customers, and
                increase your customer base by 30% or more.
            </Stat>
            <Stat
                title="New customers"
                value="34K"
                accentColor={useColorModeValue('blue.500', 'blue.300')}
            >
                Discover how we gained 34,000 new customers and learn from our
                successful marketing and sales strategies.
            </Stat>
            <Stat
                title="Last year’s revenue"
                value="$234K"
                accentColor={useColorModeValue('pink.500', 'pink.300')}
            >
                Find out how we generated $234,000 in revenue last year and
                learn from our strategies to grow your own business.
            </Stat>
        </SimpleGrid>
    </Stack>
);
