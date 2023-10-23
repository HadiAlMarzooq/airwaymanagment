import { useState } from "react";
import {
    Box,
    Heading,
    Link,
    Flex,
    Icon,
    Collapse,
    useDisclosure,
    useTheme,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function ResourcesSection() {
    const { isOpen, onToggle } = useDisclosure();
    const theme = useTheme();

    const resources = [
        { name: "Airway Management Tips", url: "https://example.com/airway-management-tips" },
        { name: "Basic Airway Adjuncts", url: "https://example.com/basic-airway-adjuncts" },
        { name: "Supplemental Oxygen Devices", url: "https://example.com/supplemental-oxygen-devices" },
        // ... add more resources
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
                        <Link href={resource.url} isExternal color="primary.400" fontWeight="bold" fontSize="lg">
                            {resource.name}
                        </Link>
                    </MotionBox>
                ))}
            </Collapse>
        </Box>
    );
}

export default ResourcesSection;
