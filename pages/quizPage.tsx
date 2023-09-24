import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../components/Header";

import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Quiz from "../components/Quiz";
import renterQuiz from "../data/renterQuiz";
// import autoQuiz from '../data/renterQuiz';

function quizPage() {
  return (
    <ChakraProvider>
      <Header />
      <CSSReset />
      <Quiz questions={renterQuiz} />
    </ChakraProvider>
  );
}

export default quizPage;
