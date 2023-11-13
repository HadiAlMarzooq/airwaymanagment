import { Box, Heading, VStack, Avatar, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

// 1- Shomoa Albasri 
// 2- Fatima Ameen 
// 3- Saja Hassan 
// 4- Noor Jawad 
// 5- Makarem Alkalaf 
// 6- Najla Omar 
// 7- Fursan

function Team() {
    const teamMembers = [
        {
            name: 'Shmoa Al Basri',
        },
        {
            name: 'Fatima Alkuaibi',
        },
        {
            name: 'Saja Abuzaid',
        },
        {
            name: 'Noor Jawad',
        },
        {
            name: 'Makarem Alkhalaf',
        },
        {
            name: 'Najla Omar',
        },
        {
            name: 'Frsan Al Sulwli',
        },
    ];
    

    return (
        <MotionBox
            padding={5}
            color="white"
            bg="primary.100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Heading marginBottom={5} color="primary.500">Our Team</Heading>
            <VStack spacing={5} align="stretch">
                {teamMembers.map((member, index) => (
                    <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        padding={5}
                        bg="white"
                        color="primary.500"
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Avatar name={member.name} marginRight={3} />
                        <Text fontSize="xl" fontWeight="bold">
                            {member.name}
                        </Text>
                    </Box>
                ))}
            </VStack>
            <MotionButton
                as={RouterLink}
                to="/"
                marginTop={5}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                Back
            </MotionButton>
        </MotionBox>
    );
}

export default Team;