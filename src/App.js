import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  extendTheme,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import TipsSection from "./components/TipsSection";
import Quiz from "./components/Quiz";
import ResourcesSection from "./components/ResourcesSection";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    arabic: "Tajawal, sans-serif",
  },
  colors: {
    primary: {
      100: "#ffe0e9",
      200: "#ffbfd3",
      300: "#ff9ebd",
      400: "#ff7da7",
      500: "#ff5c91",
      600: "#e54d82",
      700: "#b83b6a",
      800: "#8c2952",
      900: "#61163a",
    },
  },
});

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" padding={3}>
        {" "}
        <Box p={5} bg="primary.100" borderRadius="md">
          <Heading mb={3} color="primary.600">
            🎉 Welcome Super RTs
          </Heading>
          <Heading mb={3} color="primary.600">
             RC Day in MACHS! 🫁
          </Heading>
          <Text fontSize="xl" mb={5}>
            Embark on an exhilarating journey as we explore the realms of airway
            management together. Ready to dive in? 💨
          </Text>
          <Flex justifyContent="center" mt={2}>
            <Player
              src="./lungs.json" // Adjust the path to your Lottie file
              background="transparent"
              speed={1}
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
              onError={(error) => {
                console.log(error);
              }}
            />
          </Flex>
          <Flex justifyContent="center">
            <Badge
              fontSize="xl"
              p={2}
              borderRadius="md"
              fontFamily="arabic"
              border="1px solid"
              borderColor="primary.500"
            >
              نُكَرِّسُ أَنفُسَنَا مِن أَجْلِ أَرْوَاحِ الآخَرِينَ
            </Badge>
          </Flex>

          <Heading mb={5} color="primary.600" textAlign="center">
            🫁 🫁 🫁 🫁 🫁 🫁 🫁 🫁 🫁
          </Heading>

          <TipsSection />

          <Box my={5}>
            <Quiz />
          </Box>

          <ResourcesSection />
        </Box>
      </Container>
      <Flex justifyContent="center" width="100%" paddingBottom={2}>
        <Badge
          fontSize="md"
          color="primary.600"
          borderRadius="md"
          fontFamily="body"
          border="1px solid"
          borderColor="primary.500"
          bg="primary.100"
          justifyContent="center"
        >
          Made with 💙 for 🕯
        </Badge>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
