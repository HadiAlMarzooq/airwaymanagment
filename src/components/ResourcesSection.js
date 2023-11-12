// src/components/ResourcesSection.js
import {
  Box,
  Heading,
  Link,
  Flex,
  Icon,
  Collapse,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function ResourcesSection() {
  const { isOpen, onToggle } = useDisclosure();

  const resources = [
    {
      name: "An Introduction to Cystic Fibrosis For Patients and Their Families",
      url: "https://www.cysticfibrosis.ca/uploads/intro%20to%20treatment/Lung_Transplants_WEB_Compressed.pdf",
    },
    {
      name: "Neonatal and Pediatric Respiratory Care",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7021809/",
    },
  ];

  return (
    <Box mt={5}>
      <Flex align="center" onClick={onToggle} cursor="pointer">
        <Heading size="lg" color="primary.500" mb={3}>
          🔗 Resources 
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={8}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {resources.map((resource, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            mb={3}
            p={3}
            borderRadius="md"
            boxShadow="md"
            bg="white"
          >
            <Link
              href={resource.url}
              isExternal
              color="primary.400"
              fontWeight="bold"
              fontSize="lg"
            >
              {resource.name}
            </Link>
          </MotionBox>
        ))}
      </Collapse>
    </Box>
  );
}

export default ResourcesSection;