import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  extendTheme,
  Badge,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import TipsSection from "./components/TipsSection";
import Quiz from "./components/Quiz";
import ResourcesSection from "./components/ResourcesSection";
import InterestingFacts from "./components/InterestingFacts";
import { motion } from "framer-motion";

// Define your theme
const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    arabic: "Tajawal, sans-serif",
  },
  colors: {
    primary: {
      100: "#e6e0ff",
      200: "#bfb2ff",
      300: "#9984ff",
      400: "#7356ff",
      500: "#240d8c",
      600: "#411de4",
      700: "#3215b8",
      800: "#240d8c",
      900: "#160561",
    },
  },
});

// Create motion variants for your components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Define your App component
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" padding={3}>
        <MotionBox
          p={5}
          bg="primary.100"
          borderRadius="md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionHeading
            mb={3}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#2D3748",
              marginBottom: "1rem",
            }}
            color="primary.600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            🎉 Welcome Super RTs
          </MotionHeading>
          <MotionHeading
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
            mb={3}
            color="primary.800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Pediatrics Disorder Day at MACHS! 🫁
          </MotionHeading>
          <Flex justifyContent="center" mt={2}>
            <Player
              src="./lungs.json"
              background="transparent"
              speed={0.5}
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
          <MotionText
            fontSize="l"
            mb={5}
            mt="2rem"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Embark on an exhilarating journey as we explore the realms of Cystic
            Fibrosis together. Ready to dive in?
          </MotionText>
          <InterestingFacts />

          <Box my={5}>
            <TipsSection />
          </Box>

          <Box my={5}>
            <Quiz />
          </Box>
          <Box my={5}>
            <ResourcesSection />
          </Box>
        </MotionBox>
      </Container>
      <Flex
        textAlign="center"
        paddingTop="0.5rem"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="xs" fontFamily="arabic" style={{ direction: "rtl" }}>
          © جميع حقوق النشر للنطاقات تحت candles.works تابعة لـ شموع البصري
        </Text>
        <Link href="https://github.com/HadiAlmarzooq" isExternal>
          {/* <Icon as={FaGithub} mx={1} /> */}
        </Link>
      </Flex>
    </ChakraProvider>
  );
}

// Export your App component
export default App;
