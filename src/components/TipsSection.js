import {
  Box,
  Heading,
  Image,
  Text,
  useDisclosure,
  Collapse,
  Flex,
  Icon,
  useTheme,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import tip1 from "../assets/images/tip1.png";
import tip2 from "../assets/images/tip2.png";
import tip3 from "../assets/images/tip3.png";
import tip4 from "../assets/images/tip4.png";
import tip5 from "../assets/images/tip5.png";
const MotionBox = motion(Box);

function TipsSection() {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();
  const imageSize = useBreakpointValue({
    base: "100px",
    md: theme.sizes["2xs"],
  });

  const tips = [
    {
      text: "Tip 1: Always ensure clear airways by assessing responsiveness, calling for help if needed, and opening the airway to check for breathing.",
      image: tip1,
    },
    {
      text: "Tip 2: Use basic airway maneuvers such as chin lift or jaw thrust to open the airway.",
      image: tip2,
    },
    {
      text: "Tip 3: Employ airway adjuncts like oral or nasal airways if simple maneuvers are inadequate.",
      image: tip3,
    },
    {
      text: "Tip 4: In case of inadequate or absent spontaneous breathing, provide supplemental oxygen and institute positive-pressure ventilation.",
      image: tip4,
    },
    {
      text: "Tip 5: Use a bag-mask ventilation or a two-person technique for better airway management, and continuously monitor the patient's pulse and breathing.",
      image: tip5,
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
          🫁 Quick Tips
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={8}
        />{" "}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {tips.map((tip, index) => (
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
              <Image src={tip.image} boxSize={imageSize} mr={3} />
              <Text color="primary.600" fontWeight="bold">
                {tip.text}
              </Text>
            </Flex>
          </MotionBox>
        ))}
      </Collapse>
    </Box>
  );
}

export default TipsSection;
