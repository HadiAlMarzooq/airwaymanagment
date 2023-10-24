import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Confetti from "react-confetti";

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Add this line

  const theme = useTheme();
  const toast = useToast();

  const questions = [
    {
      question: "1. What's the first step in airway management?",
      options: ["Check pulse", "Check responsiveness", "Ventilate chest"],
      correctAnswer: "Check responsiveness",
      explanation:
        "Checking responsiveness is crucial to determine the patient's level of consciousness and to proceed with further airway management steps.",
    },
    {
      question: "2. Which maneuver can be used to open the airway?",
      options: ["Chest compression", "Chin lift", "Heimlich maneuver"],
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
        "Wait for spontaneous breathing",
        "Institute positive-pressure ventilation",
        "Check pulse only",
      ],
      correctAnswer: "Institute positive-pressure ventilation",
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
  useEffect(() => {
    const answeredQuestionsCount = Object.keys(selectedAnswers).length;
    setIsSubmitDisabled(answeredQuestionsCount !== questions.length);
  }, [selectedAnswers, questions.length]);
  const checkAnswers = () => {
    let score = 0;
    for (let q of questions) {
      if (selectedAnswers[q.question] === q.correctAnswer) {
        score++;
      }
    }
    setScore(score);
    setIsQuizFinished(true);
    toast({
      title:
        score === 5
          ? `You scored ${score} out of ${questions.length}! 🎉`
          : `You scored ${score} out of ${questions.length}! 🙁`,
      status: score === 5 ? "success" : "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setIsQuizFinished(false);
    setScore(0);
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
            <Button
              colorScheme="pink"
              onClick={checkAnswers}
              isDisabled={isSubmitDisabled}
            >
              Submit
            </Button>
          </VStack>
        ) : (
          <VStack spacing={4} align="start">
            <Box position="relative">
              {score === 5 && (
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight * 2}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              )}
              <Text color="primary.600">
                You scored {score} out of {questions.length}
              </Text>
            </Box>
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
            <Button colorScheme="pink" onClick={resetQuiz}>
              Reset
            </Button>
          </VStack>
        )}
      </Collapse>
    </Box>
  );
}

export default Quiz;
