import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Box bg="teal" p={4} color="white">
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="lg">
          My Website
        </Heading>
        <Spacer />
        <Link href="/">
          <Button variant="ghost" mr={2}>
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
