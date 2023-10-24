import { useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Text,
  VStack,
  Heading,
  Flex,
  Icon,
  Collapse,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";


function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();

  const questions = [
    {
      question: "1. What's the first step in airway management?",
      options: ["Check responsiveness", "Ventilate chest", "Check pulse"],
      correctAnswer: "Check responsiveness",
      explanation:
        "Checking responsiveness is crucial to determine the patient's level of consciousness and to proceed with further airway management steps.",
    },
    {
      question: "2. Which maneuver can be used to open the airway?",
      options: ["Chin lift", "Chest compression", "Heimlich maneuver"],
      correctAnswer: "Chin lift",
      explanation:
        "The chin lift maneuver helps to open the airway by tilting the head back and lifting the chin up.",
    },
    {
      question: "3. What device can provide supplemental oxygen?",
      options: ["Bag-mask", "Stethoscope", "Defibrillator"],
      correctAnswer: "Bag-mask",
      explanation:
        "A bag-mask device is used to provide positive pressure ventilation and supplemental oxygen to patients in need.",
    },
    {
      question: "4. What should you do if spontaneous breathing is absent?",
      options: [
        "Institute positive-pressure ventilation",
        "Wait for spontaneous breathing",
        "Check pulse only",
      ],
      correctAnswer: "5. Institute positive-pressure ventilation",
      explanation:
        "If spontaneous breathing is absent, it's essential to institute positive-pressure ventilation to support the patient's respiratory needs.",
    },
    {
      question: "Which of the following is a basic airway adjunct?",
      options: ["Oral airway", "ECG machine", "Blood pressure cuff"],
      correctAnswer: "Oral airway",
      explanation:
        "Oral airways are basic airway adjuncts used to maintain an open airway in unconscious patients.",
    },
  ];

  const checkAnswers = () => {
    let score = 0;
    for (let q of questions) {
      if (selectedAnswers[q.question] === q.correctAnswer) {
        score++;
      }
    }
    setScore(score);
    setIsQuizFinished(true);
  };

  const onChange = (value, question) => {
    setSelectedAnswers((prev) => ({ ...prev, [question]: value }));
  };

  return (
    <Box mt={5}>
      <Flex align="center" onClick={onToggle} cursor="pointer">
        <Heading size="lg" color="primary.500" mb={3}>
          🫁 Quiz
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={8}
        />{" "}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {!isQuizFinished ? (
          <VStack spacing={4} align="start">
            {questions.map((q, index) => (
              <Box key={index} p={4} borderRadius="md" boxShadow="md">
                <Text color="primary.600" fontWeight="bold">
                  {q.question}
                </Text>
                <RadioGroup
                  onChange={(value) => onChange(value, q.question)}
                  value={selectedAnswers[q.question]}
                >
                  {q.options.map((option) => (
                    <Box
                      key={option}
                      p={4}
                      borderRadius="md"
                      boxShadow="md"
                      bg="white"
                      _hover={{
                        bg: "primary.100",
                      }}
                      marginBottom={2}
                    >
                      <Radio
                        value={option}
                        colorScheme="pink"
                        isDisabled={isQuizFinished}
                        _focus={{
                          boxShadow: `0 0 0 2px ${theme.colors.pink[500]}`,
                        }}
                        _checked={{
                          bg: "white",
                          borderColor: theme.colors.pink[500],
                        }}
                      >
                        {option}
                      </Radio>
                    </Box>
                  ))}
                </RadioGroup>
              </Box>
            ))}
            <Button colorScheme="pink" onClick={checkAnswers}>
              Submit
            </Button>
          </VStack>
        ) : (
          <VStack spacing={4} align="start">
            <Text color="primary.600">
              You scored {score} out of {questions.length}
            </Text>
            {questions.map((q, index) => (
              <Box
                key={index}
                p={4}
                borderRadius="md"
                boxShadow="md"
                bg={
                  selectedAnswers[q.question] === q.correctAnswer
                    ? theme.colors.green[500]
                    : theme.colors.red[500]
                }
                color="white"
              >
                <Text color="white" fontWeight="bold">
                  {q.question}
                </Text>
                <Text color="white">
                  Your answer: {selectedAnswers[q.question]}
                </Text>
                <Text color="white">Correct answer: {q.correctAnswer}</Text>
                <Text color="white" mt={2}>
                  Explanation: {q.explanation}
                </Text>
              </Box>
            ))}
          </VStack>
        )}
      </Collapse>
    </Box>
  );
}

export default Quiz;
