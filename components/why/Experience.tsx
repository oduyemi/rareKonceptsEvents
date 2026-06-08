"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Award,
  CheckCircle2,
} from "lucide-react";
import "animate.css";



const values = [
  "Luxury Event Planning",
  "Creative Styling Concepts",
  "Premium Vendor Network",
  "Personalized Client Experience",
  "Professional Event Coordination",
  "Flawless Event Execution",
];


export const WhyChooseExperience = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 32,
      }}
      className="ps-md-2"
      bg="#F8F8FC"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1500px">
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "0.95fr 1.05fr",
          }}
          gap={{
            base: 16,
            lg: 20,
          }}
          alignItems="center"
        >
          <GridItem>
            <Box position="relative">
              <Grid
                templateColumns="repeat(2,1fr)"
                gap={5}
              >
                <Box
                  overflow="hidden"
                  borderRadius="32px"
                  h={{
                    base: "260px",
                    md: "360px",
                  }}
                >
                  <Image
                    src="/images/weddingparty2.jpg"
                    alt="Wedding Experience"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>

                <Box
                  overflow="hidden"
                  borderRadius="32px"
                  h={{
                    base: "320px",
                    md: "460px",
                  }}
                  mt={{
                    base: 0,
                    md: 16,
                  }}
                >
                  <Image
                    src="/images/luxury6.jpg"
                    alt="Luxury Styling"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
              </Grid>

              <Box
                position="absolute"
                bottom="-20px"
                left={{
                  base: "20px",
                  md: "60px",
                }}
                bg="white"
                borderRadius="28px"
                px={7}
                py={6}
                boxShadow="0 25px 80px rgba(15,23,42,0.10)"
              >
                <HStack gap={4} align="start">
                  <Flex
                    w="62px"
                    h="62px"
                    borderRadius="22px"
                    bg="rgba(34,0,124,0.06)"
                    align="center"
                    justify="center"
                  >
                    <Award color="#22007C" size={28} />
                  </Flex>

                  <Box>
                    <Heading
                      fontSize="2rem"
                      color="#111827"
                    >
                      Premium Quality
                    </Heading>

                    <Text color="gray.600" mt={1}>
                      Tailored luxury experiences.
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </GridItem>

          <GridItem>
            <VStack align="start" gap={7}>
              <Badge
                bg="rgba(34,0,124,0.05)"
                color="#22007C"
                px={5}
                py={2}
                borderRadius="full"
                fontSize="0.72rem"
                letterSpacing="0.16em"
              >
                PREMIUM EVENT EXPERIENCE
              </Badge>

              <Heading
                color="#111827"
                fontWeight="900"
                lineHeight="0.94"
                letterSpacing="-0.07em"
                fontSize={{
                  base: "2.8rem",
                  md: "5rem",
                }}
              >
                Crafted For Elegant
                <Text as="span" color="#22007C">
                  {" "}
                  Celebrations
                </Text>
              </Heading>

              <Text
                color="gray.600"
                lineHeight="2"
                fontSize="lg"
              >
                Every event we manage is thoughtfully designed to create memorable experiences filled with beauty, emotion, and sophistication.
              </Text>

              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                gap={5}
                w="100%"
              >
                {values.map((item, index) => (
                  <HStack
                    key={index}
                    align="start"
                    gap={4}
                    bg="white"
                    borderRadius="24px"
                    px={5}
                    py={5}
                    border="1px solid rgba(34,0,124,0.06)"
                  >
                    <CheckCircle2
                      color="#22007C"
                      size={22}
                    />

                    <Text
                      color="#111827"
                      fontWeight="600"
                      lineHeight="1.8"
                    >
                      {item}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

