import {
  Box,
  Collapse,
  Flex,
  Heading,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon,
  StarIcon,
  WarningTwoIcon,
  CalendarIcon,
  Search2Icon, // Replaced icons
} from "@chakra-ui/icons";
import React from "react";
function InterestingFacts() {
  const mainDisclosure = useDisclosure();
  const introDisclosure = useDisclosure();
  const pathoDisclosure = useDisclosure();
  const clinicalDisclosure = useDisclosure();
  const treatmentDisclosure = useDisclosure();
  const diagnosisDisclosure = useDisclosure();

  const sections = [
    {
      title: "Introduction & Etiology",
      disclosure: introDisclosure,
      icon: <InfoIcon color="blue.500" />,
      content: (
        <>
          <Text>
            Cystic Fibrosis is a hereditary disease that affects the exocrine
            glands, particularly located in the pancreas, sweat glands, and
            lungs. The condition results from a unique genetic transmission
            where both parents must carry the gene for the disease, and there's
            a one-in-four chance that their child will inherit it.
          </Text>
        </>
      ),
    },
    {
      title: "Pathophysiology",
      disclosure: pathoDisclosure,
      icon: <StarIcon color="orange.500" />,
      content: (
        <>
          <Text>
            Dysfunction of the CFTR protein leads to the abnormal production of
            thick and sticky mucus. This thick mucus impairs the normal
            functioning of cilia (which is clearance) and reduces the
            effectiveness of the immune system. Thus, the accumulated mucus
            obstructs airflow (atelectasis), leading to chronic lung infections
            (pneumonia), inflammation, progressive structural changes in the
            lung tissue (fibrosis), and air trapping as a result of exhaling
            difficulties (hyperinflation).
          </Text>
        </>
      ),
    },
    {
      title: "Clinical Manifestations",
      disclosure: clinicalDisclosure,
      icon: <WarningTwoIcon color="red.500" />,
      content: (
        <>
          <Text>
            Cystic fibrosis (CF) manifests in various organs, but as respiratory
            therapists our focus is on lung symptoms. These include
            salty-tasting skin, excessive sweating, recurrent lung/sinus
            infections, wheezing, shortness of breath at rest, coughing up blood
            or thick mucus, and digital clubbing. To initiate further investigation,
            prioritize patient history, considering clinical signs in one organ
            system, the presence of a confirmed sibling with CF, or a positive
            newborn screening result for CF.
          </Text>
        </>
      ),
    },
    {
      title: "Diagnosis",
      disclosure: diagnosisDisclosure,
      icon: <Search2Icon color="purple.500" />,
      content: (
        <>
          <Heading size="sm" mb={1}>
            1- Sweat test:
          </Heading>
          <Text mb={2}>
            A sweat test is the standard CF test for confirming the diagnosis.
            It involves analyzing the salt levels in a person’s sweat. Doctors
            carry out the test twice. If both results show high concentration of
            salt 60 mmol/L or greater, the CF is confirmed.
          </Text>
          <Heading size="sm" mb={1}>
            2- CXR:
          </Heading>
          <Text>
            From the pathophysiology of the disease, we must expect to see in
            the chest x-ray areas of high density because of mucus, air
            bronchograms, areas of atelectasis, hyperinflation, and a flattened
            diaphragm.
          </Text>
        </>
      ),
    },
    {
      title: "Treatment Plans",
      disclosure: treatmentDisclosure,
      icon: <CalendarIcon color="green.500" />,
      content: (
        <>
          <Text mb={2}>
            There is no direct treatment for cystic fibrosis patients, only we
            can manage their CF-related symptoms by different treatment plans,
            which usually include the following: multiple medications, airway
            clearance techniques, and as a last resort, lung transplantation.
          </Text>
          <Heading size="sm" mb={1}>
            1- Bronchodilators, mucolytics and airway clearance:
          </Heading>
          <Text mb={2}>
            Aerosolized bronchodilator given followed by mucolytics to dilute
            secretions before moving and coughing them out using various airway
            clearance techniques (vest, acapella, …).
          </Text>
          <Heading size="sm" mb={1}>
            2- Antibiotics & essential oils:
          </Heading>
          <Text mb={2}>
            Recurrent and chronic respiratory infections are usually treated
            with antibiotics. But intensive use of these antimicrobial drugs to
            fight lung infections inevitably leads to the onset of antibiotic
            resistant bacterial strains. For this reason, researchers developed
            new antibacterial agents such as essential oils from different
            origin (lavender, peppermint and Alluaudia procera) and found them
            active against the antibiotic resistance and played an effective
            role in improving patient’s survival.
          </Text>
          <Heading size="sm" mb={1}>
            3- Lung transplantation:
          </Heading>
          <Text>
            Researchers reported that when medical management alone cannot
            maintain lung health, a lung transplant is essential as a last
            resort to prolong and improve the quality of the patient's life.
            During the procedure, diseased lungs are replaced with healthy lungs
            gifted from a deceased donor. After the procedure, the recipient’s
            gets free from the respiratory symptoms, because the lungs that
            transplanted do not have cystic fibrosis since they have the DNA of
            the person who donated them, but cystic fibrosis still occurs in
            other organs in the body, for example, in the pancreas, and it needs
            to be managed.
          </Text>
        </>
      ),
    },
  ];
  return (
    <Box mt={5}>
      <Flex
        align="center"
        justify="space-between"
        onClick={mainDisclosure.onToggle}
        cursor="pointer"
        bg="primary.100"
        p={4}
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: "primary.200",
        }}
      >
        <Heading size="lg" color="primary.500">
          🔍 The Mystery Of Cystic Fibrosis
        </Heading>
        <Icon
          as={mainDisclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="white"
          boxSize={8}
        />
      </Flex>
      <Collapse in={mainDisclosure.isOpen} animateOpacity>
        {sections.map((section, index) => (
          <Box key={index} mt={4}>
            <Flex
              align="center"
              justify="space-between"
              onClick={section.disclosure.onToggle}
              cursor="pointer"
              bg="primary.200"
              p={3}
              borderRadius="md"
              boxShadow="md"
              _hover={{
                bg: "primary.400",
              }}
            >
              <Flex align="center">
                {React.cloneElement(section.icon, { boxSize: 6, mr: 2 })}
                <Heading size="md" color="primary.800">
                  {section.title}
                </Heading>
              </Flex>
              <Icon
                as={section.disclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
                color="white"
                boxSize={6}
              />
            </Flex>
            <Collapse in={section.disclosure.isOpen} animateOpacity>
              <Box margin="1rem">{section.content}</Box>
            </Collapse>
          </Box>
        ))}
      </Collapse>
    </Box>
  );
}

export default InterestingFacts;
