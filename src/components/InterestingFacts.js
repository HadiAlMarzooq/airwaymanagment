import {
    Box,
    Collapse,
    Flex,
    Heading,
    Icon,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
  
  function InterestingFacts() {
    const mainDisclosure = useDisclosure();
    const introDisclosure = useDisclosure();
    const pathoDisclosure = useDisclosure();
    const clinicalDisclosure = useDisclosure();
    const treatmentDisclosure = useDisclosure();
    const diagnosisDisclosure = useDisclosure();
  
    const sections = [
      { title: "Introduction", disclosure: introDisclosure },
      { title: "Pathophysiology", disclosure: pathoDisclosure },
      { title: "Clinical Manifestations", disclosure: clinicalDisclosure },
      { title: "Treatment", disclosure: treatmentDisclosure },
      { title: "Diagnosis", disclosure: diagnosisDisclosure },
    ];
  
    return (
      <Box mt={5}>
        <Flex
          align="center"
          justify="space-between"
          onClick={mainDisclosure.onToggle}
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
            🔍 The Mystery Of Cystic Fibrosis
          </Heading>
          <Icon
            as={mainDisclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
            color="white"
            boxSize={8}
          />
        </Flex>
        <Collapse in={mainDisclosure.isOpen} animateOpacity>
          {sections.map((section, index) => (
            <Box key={index} mt={4}>
              <Flex
                align="center"
                justify="space-between"
                onClick={section.disclosure.onToggle}
                cursor="pointer"
                bg="primary.200"
                p={3}
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  bg: "primary.400",
                }}
              >
                <Heading size="md" color="primary.800">
                  {section.title}
                </Heading>
                <Icon
                  as={section.disclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
                  color="white"
                  boxSize={6}
                />
              </Flex>
              <Collapse in={section.disclosure.isOpen} animateOpacity>
                {/* content */}
              </Collapse>
            </Box>
          ))}
        </Collapse>
      </Box>
    );
  }
  
  export default InterestingFacts;
  