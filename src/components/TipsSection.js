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

const MotionBox = motion(Box);

function TipsSection() {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();

  const articles = [
    {
      title:
        "An Introduction to Cystic Fibrosis For Patients and Their Families",
      author: "Cunningham, J. C., & Taussig, L. M. (6th ed.)",
      link: "https://www.cff.org/sites/default/files/2021-09/Intro-to-CF.pdf",
    },
    {
      title: "Neonatal and Pediatric Respiratory Care (5th ed.)",
      author: "Walsh, B. K. (2019)",
      link: "https://www.biblio.com/book/neonatal-pediatric-respiratory-care-5ed-pb/d/1430477091",
    },
  ];

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
          📄 Article
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={8}
        />{" "}
      </Flex>
      <Box my={5}>
        <Collapse in={isOpen} animateOpacity>
          {articles.map((article, index) => (
            <MotionBox
              key={index}
              bg={"#fff"}
              p={3}
              borderRadius="md"
              mb={3}
              boxShadow="md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Flex align="center" mb={3}>
                <Box>
                  <Text color="primary.600" fontWeight="bold">
                    {article.title}
                  </Text>
                  <Text color="primary.600">{article.author}</Text>
                  <Link href={article.link} isExternal color="blue.500">
                    Read More
                  </Link>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </Collapse>
      </Box>
    </Box>
  );
}

export default TipsSection;
