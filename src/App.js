import { Main } from "./components/Main";
import {
  ChakraProvider,
  Container,
  Text,
  extendTheme,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import Team from "./components/Team";
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

// Define your App component
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container maxW="container.xl" padding={3}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Container>
        <Flex
          textAlign="center"
          paddingTop="0.5rem"
          alignItems="center"
          justifyContent="center"
        >
          <Link
            href="https://www.linkedin.com/in/shmoa-albasri-970261244/"
            isExternal
          >
            <Icon as={FaLinkedin} mx={1} />
          </Link>
          <Text fontSize="xs" fontFamily="arabic" style={{ direction: "rtl" }}>
            © جميع حقوق النشر للنطاقات تحت candles.works تابعة لـ شموع البصري
          </Text>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

// Export your App component
export default App;
