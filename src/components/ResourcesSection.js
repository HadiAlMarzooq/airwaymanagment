import {
  Box,
  Heading,
  Link,
  Flex,
  Icon,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function ResourcesSection() {
  const { isOpen, onToggle } = useDisclosure();


  const resources = [
    {
      name: "Simple Airway Maneuvers - Elentra",
      url: "https://elentra.healthsci.queensu.ca/assets/modules/basic-airway-management/simple_airway_maneuvers.html",
    },
    {
      name: "Airway Training - Harvard",
      url: "https://www.pulmonaryfellowship.hms.harvard.edu/airway-training",
    },
    {
      name: "Crisis Resource Management of the Airway - Harvard",
      url: "https://projects.iq.harvard.edu/airwaymanagement/crisis-resource-management-airway",
    },
    {
      name: "Emergency Airway Encounters by Air Medical Providers - Harvard",
      url: "https://dash.harvard.edu/handle/1/3966436",
    },
    {
      name: "The Walls Manual Of Emergency Airway Management - Harvard",
      url: "https://help.environment.harvard.edu/the-walls-manual-of-emergency-airway-management",
    },
  ];

  return (
    <Box mt={5}>
      <Flex align="center" onClick={onToggle} cursor="pointer">
        <Heading size="lg" color="primary.500" mb={3}>
          🫁 Resources & Links
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
