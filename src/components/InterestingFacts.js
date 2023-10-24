// src/components/InterestingFacts.js
import {
    Box,
    Collapse,
    Flex,
    Heading,
    Icon,
    List,
    ListItem,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function InterestingFacts() {
    const { isOpen, onToggle } = useDisclosure();
    const facts = [
        "Respiratory therapists care for patients who have trouble breathing—for example, from a chronic respiratory disease, such as asthma or emphysema.",
        "Respiratory therapists need at least an associate’s degree, but employers may prefer applicants who have a bachelor’s degree.",
        "Employment of respiratory therapists is projected to grow 19 percent from 2019 to 2029, much faster than the average for all occupations.",
        "The median annual wage for respiratory therapists was $62,810 in May 2020.",
        "Respiratory therapists are on the front lines of responding to respiratory emergencies and managing patients with chronic respiratory issues.",
        "They also play a critical role in emergency situations and are a key part of the hospital response team.",
        "Respiratory therapists work with patients of all ages, from premature infants whose lungs are not fully developed to elderly people whose lungs are diseased.",
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
                    🔍 Interesting Facts about RTs
                </Heading>
                <Icon
                    as={isOpen ? ChevronUpIcon : ChevronDownIcon}
                    color="white"
                    boxSize={8}
                />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <List spacing={3} mt={4}>
                    {facts.map((fact, index) => (
                        <ListItem
                            key={index}
                            bg="white"
                            p={4}
                            borderRadius="md"
                            boxShadow="md"
                            _hover={{
                                bg: "primary.50",
                            }}
                        >
                            <Text color="primary.600">{fact}</Text>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Box>
    );
}

export default InterestingFacts;