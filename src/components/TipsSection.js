// src/components/TipsSection.js
import {
  Box,
  Heading,
  Text,
  useDisclosure,
  Collapse,
  Flex,
  Icon,
  Link,
  useTheme,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import myVideo from "../assets/videos/story.mp4";

const MotionBox = motion(Box);

function TipsSection() {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();

  return (
    <Box mt={5}>
      <Flex
        align="center"
        justify="space-between"
        onClick={onToggle}
        cursor="pointer"
        bg="primary.100"
        p={4}
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: "primary.200",
        }}
      >
        <Heading size="lg" color="primary.500" mb={3}>
          📄 Video & Story
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={8}
        />{" "}
      </Flex>
      <Box my={5}>
        <Collapse in={isOpen} animateOpacity>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="500px"
            width="100%"
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
            bg="gray.100"
          >
            <video controls style={{ maxWidth: "100%", height: "auto" }}>
              <source src={myVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

export default TipsSection;
