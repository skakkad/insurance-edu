import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Heading,
  Radio,
  RadioGroup,
  Text,
  VStack,
  Center,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  // displays the explanation of the answer if the user gets it incorrect
  const displayAccuracy = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextClick = () => {
    setNextClicked(true);
  };

  const handleSubmitClick = () => {
    setSubmitClicked(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswerCorrect(null);
    } else {
      // If there are no more questions, mark the quiz as completed
      setQuizCompleted(true);
      setIsAnswerCorrect(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setQuizCompleted(false);
    setIsAnswerCorrect(null);
  };

  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <VStack spacing={6} align="center">
      <Box
        maxW="800px"
        m={15}
        p={10}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg={bgColor}
      >

        <text>Progress: {progress}%</text>
          <Progress
            mt = {1} mb={4}
            value={progress}
            size="sm"
            colorScheme="red"
            width="100%"
            />
        
        <Heading as="h1" size="lg" mb={4}>
          Learn More About Renters Insurance
        </Heading>
        {!quizCompleted ? (
          <>
            <Text mb={4}>{questions[currentQuestion].question}</Text>
            <RadioGroup onChange={handleOptionChange} value={selectedOption}>
              {questions[currentQuestion].options.map((option, index) => (
                <Radio
                  key={index}
                  value={option}
                  colorScheme="red"
                  mr={4}
                  ml={4}
                  mb={2}
                >
                  {option}
                </Radio>
              ))}
            </RadioGroup>
            <Center>
              <Button
                mt={4}
                ml={4}
                mr={4}
                onClick={displayAccuracy || handleNextClick}
                colorScheme="red"
                size="md"
                isDisabled={nextClicked}
              >
                Submit
              </Button>
            </Center>
            {isAnswerCorrect !== null && (
              <>
                <Text
                  mt={4}
                  fontSize="lg"
                  fontWeight="bold"
                  color={isAnswerCorrect ? "green" : "red"}
                >
                  {isAnswerCorrect ? "Correct!" : "Incorrect!"}
                </Text>
                <Text mt={2}>{questions[currentQuestion].explanation}</Text>
              </>
            )}

            <Box alignContent="left">
              <Button
                // maxW={'60px'}
                // alignContent={'right'}
                mt={4}
                onClick={handleNextQuestion || handleSubmitClick}
                colorScheme="red"
                size="md"
                isDisabled={submitClicked}
                mr={0}
              >
                Next
              </Button>
            </Box>

          
          </>
        ) : (
          <Center flexDirection="column">
            <Text mb={4}>
              Yay! You finished learning all about renters insurance.
            </Text>
            <Link
              href="https://www.statefarm.com/agent/?zipCode=52242"
              target="_blank"
            >
              <Button mt={4} colorScheme="red" size="md">
                Talk to an agent!
              </Button>
            </Link>
            <Link href="/insuranceList">
              <Button mt={4} colorScheme="red" size="md">
                Learn more about each type of insurance!
              </Button>
            </Link>
          </Center>
        )}
      </Box>
    </VStack>
  );
};

export default Quiz;