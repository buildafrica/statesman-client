import { Flex, Heading } from "@chakra-ui/core";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <Flex align="center" justify="center">
      <Searchbar />
      <Heading as="h1">Hi, Stateman Client</Heading>
    </Flex>
  );
}
