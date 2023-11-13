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
      name: "Lung Transplantation and Cystic Fibrosis",
      url: "https://www.cysticfibrosis.ca/uploads/intro%20to%20treatment/Lung_Transplants_WEB_Compressed.pdf",
    },
    {
      name: "Antimicrobial Essential Oils and Machine Learning in Cystic Fibrosis",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7021809/",
    },
    {
      name: "Proper Order of Multiple Therapies for Cystic Fibrosis",
      url: "https://intmed.vcu.edu/media/vcusom-t4-migration/internal-medicine/about-us/institutes-and-centers/information-sheets/VCUCF_Proper-Therapy-Order.pdf",
    },
  ];

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
        <Heading size="lg" color="primary.500">
          🔗 References
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          boxSize={8}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Heading color="primary.500" size="md" my="7">
          {" "}
          📄 Articles{" "}
        </Heading>
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
        <Heading color="primary.500" size="md" my="7">
          {" "}
          📚 Books{" "}
        </Heading>
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
  );
}

export default ResourcesSection;
