import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../components/Header";
import LookingFor from "./lookingFor";

const Home = () => {
  return (
    <>
      <Header />
      <LookingFor /> {/* Render the LookingFor component */}
    </>
  );
};

export default Home;
