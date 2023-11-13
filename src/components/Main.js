import React from "react";

import { Box, Heading, Text, Badge, Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import TipsSection from "./TipsSection";
import Quiz from "./Quiz";
import ResourcesSection from "./ResourcesSection";
import InterestingFacts from "./InterestingFacts";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';
import { Button, Icon } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';

export function Main() {
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  return (
    <MotionBox
      p={5}
      bg="primary.100"
      borderRadius="md"
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <MotionHeading
        mb={3}
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#2D3748",
          marginBottom: "1rem",
        }}
        color="primary.600"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        🎉 Welcome Super RTs
      </MotionHeading>
      <MotionHeading
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
        mb={3}
        color="primary.800"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
          duration: 0.5,
        }}
      >
        Pediatrics Disorder Day at MACHS! 🫁
      </MotionHeading>
      <Flex justifyContent="center" mt={2}>
        <Player
          src="./lungs.json"
          background="transparent"
          speed={0.5}
          style={{
            width: "300px",
            height: "300px",
          }}
          loop
          autoplay
          onError={(error) => {
            console.log(error);
          }}
        />
      </Flex>
      <Flex justifyContent="center">
        <Badge
          fontSize="xl"
          p={2}
          borderRadius="md"
          fontFamily="arabic"
          border="1px solid"
          borderColor="primary.500"
        >
          نُكَرِّسُ أَنفُسَنَا مِن أَجْلِ أَرْوَاحِ الآخَرِينَ
        </Badge>
      </Flex>
      <MotionText
        fontSize="l"
        mb={5}
        mt="2rem"
        textAlign="center"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
      >
        Embark on an exhilarating journey as we explore the realms of Cystic
        Fibrosis together. Ready to dive in?
      </MotionText>
      <InterestingFacts />

      <Box my={5}>
        <TipsSection />
      </Box>

      <Box my={5}>
        <Quiz />
      </Box>
      <Box my={5}>
        <ResourcesSection />
      </Box>
      <Box my={5} textAlign="center">
        <Button as={RouterLink} to="/team" leftIcon={<Icon as={FaUsers} />}>
          Discover the Team Members
        </Button>
      </Box>
    </MotionBox>
  );
}
