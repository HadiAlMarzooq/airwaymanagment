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
      question: "1. Which of the following glands are most commonly affected by CF?",
      options: ["A. Adrenal glands", "B. Sebaceous glands", "C. Exocrine glands", "D. Endocrine glands"],
      correctAnswer: "C. Exocrine glands",
      explanation: "CF primarily affects the exocrine glands, which are responsible for producing mucus, sweat, and digestive enzymes."
    },
    {
      question: "2. What is the chance of a child being affected by CF if both parents are carriers of the recessive CF gene?",
      options: ["A. 25%", "B. 50%", "C. 75%", "D. 100%"],
      correctAnswer: "A. 25%",
      explanation: "If both parents are carriers of the recessive CF gene, there is a 25% chance that their child will inherit the gene from both and be affected by CF."
    },
    {
      question: "3. The presence of what substance is elevated in the sweat of a person with CF?",
      options: ["A. Sodium", "B. Potassium", "C. Chloride", "D. Calcium"],
      correctAnswer: "C. Chloride",
      explanation: "People with CF have elevated levels of chloride in their sweat, which is a key diagnostic indicator of the disease."
    },
    {
      question: "4. Which of the following is a common clinical manifestation of CF?",
      options: ["A. Dry cough", "B. Low chloride levels in sweat", "C. Elevated hemoglobin levels", "D. Cough with thick mucus production"],
      correctAnswer: "D. Cough with thick mucus production",
      explanation: "A common symptom of CF is a cough that produces thick mucus, due to the accumulation of mucus in the respiratory tract."
    },
    {
      question: "5. Which mucolytic agent is commonly used in the treatment of CF?",
      options: ["A. Acetylcysteine", "B. Dornase alfa", "C. Guaifenesin", "D. Bromhexine"],
      correctAnswer: "B. Dornase alfa",
      explanation: "Dornase alfa is a mucolytic agent commonly used in CF treatment to help break down mucus and improve lung function."
    }
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
