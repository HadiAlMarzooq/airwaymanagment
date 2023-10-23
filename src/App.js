import { ChakraProvider, Box, Container, Heading, useToast, extendTheme } from '@chakra-ui/react';
import TipsSection from './components/TipsSection';
import Quiz from './components/Quiz';
import ResourcesSection from './components/ResourcesSection';

const theme = extendTheme({
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
  const toast = useToast();

  // Sample toast function
  const showToast = () => {
    toast({
      title: "Notification",
      description: "This is a sample toast notification.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <Box p={5} bg="primary.100" borderRadius="md">
          <Heading mb={5} color="primary.600">
            🫁 Airway Management Quick Tips 🫁
          </Heading>

          <TipsSection />

          <Box my={5}>
            <Quiz />
          </Box>

          <ResourcesSection />

          <Box my={5}>
            <Heading size="md" mb={3} color="primary.500">
              Feedback
            </Heading>
            {/* <iframe 
              src="YOUR_GOOGLE_FORM_LINK" 
              width="100%" 
              height="500" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">
              Loading…
            </iframe> */}
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
