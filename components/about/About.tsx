"use client";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import "animate.css";


const services = [
  "Luxury Event Planning",
  "Wedding Styling & Decor",
  "Corporate Activations",
  "Birthday Celebrations",
  "Premium Event Hostesses",
  "Creative Theme Concepts",
];


export const About = () => {
  return (
    <Box
      bg="white"
      position="relative"
      overflow="hidden"
      py={{
        base: 20,
        md: 28,
        lg: 32,
      }}
    >
      <Box
        position="absolute"
        top="-120px"
        right="-100px"
        w="320px"
        h="320px"
        bg="#22007C"
        opacity={0.05}
        filter="blur(120px)"
        borderRadius="full"
      />

      <Box
        position="absolute"
        bottom="-140px"
        left="-120px"
        w="300px"
        h="300px"
        bg="#AF3800"
        opacity={0.05}
        filter="blur(120px)"
        borderRadius="full"
      />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 1.1fr",
          }}
          gap={{
            base: 14,
            lg: 20,
          }}
          alignItems="center"
        >
          <GridItem>
            <Box
              position="relative"
              className="animate__animated animate__fadeInLeft"
            >
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="32px"
                bg="white"
                boxShadow="0 25px 80px rgba(34, 0, 124, 0.12)"
              >
                <Image
                  src="/images/submit.jpg"
                  alt="Rarekoncepts Events"
                  w="100%"
                  h={{
                    base: "500px",
                    md: "650px",
                  }}
                  objectFit="cover"
                  transition="0.5s ease"
                  _hover={{
                    transform: "scale(1.03)",
                  }}
                />

                {/* DARK OVERLAY */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05))"
                />
              </Box>

              {/* EXPERIENCE CARD */}
              <Box
                position="absolute"
                bottom={{
                  base: "20px",
                  md: "30px",
                }}
                left={{
                  base: "20px",
                  md: "-30px",
                }}
                bg="rgba(255,255,255,0.92)"
                backdropFilter="blur(14px)"
                border="1px solid rgba(255,255,255,0.6)"
                borderRadius="28px"
                px={6}
                py={5}
                boxShadow="0 20px 60px rgba(0,0,0,0.15)"
                className="animate__animated animate__fadeInUp"
              >
                <HStack>
                  <Flex
                    w="62px"
                    h="62px"
                    borderRadius="full"
                    bg="linear-gradient(135deg, #22007C, #AF3800)"
                    align="center"
                    justify="center"
                    color="white"
                  >
                    <Sparkles size={24} />
                  </Flex>

                  <Box>
                    <Heading
                      fontSize="2xl"
                      fontWeight="800"
                      color="#22007C"
                      mb={1}
                    >
                      10+
                    </Heading>

                    <Text
                      fontSize="sm"
                      color="gray.600"
                      fontWeight="500"
                    >
                      Years of Premium Experience
                    </Text>
                  </Box>
                </HStack>
              </Box>

              {/* FLOATING BADGE */}
              <Box
                position="absolute"
                top="24px"
                right="24px"
                px={5}
                py={3}
                borderRadius="full"
                bg="rgba(255,255,255,0.9)"
                backdropFilter="blur(12px)"
                boxShadow="0 10px 35px rgba(0,0,0,0.08)"
                border="1px solid rgba(255,255,255,0.7)"
                className="animate__animated animate__fadeInDown"
              >
                <HStack>
                  <Box
                    w="8px"
                    h="8px"
                    bg="#D4AF37"
                    borderRadius="full"
                  />

                  <Text
                    fontSize="sm"
                    fontWeight="700"
                    color="#22007C"
                    letterSpacing="0.03em"
                  >
                    Luxury Event Styling
                  </Text>
                </HStack>
              </Box>
            </Box>
          </GridItem>

          {/* =========================================
              CONTENT SIDE
          ========================================= */}
          <GridItem>
            <VStack
              align="start"
            >
              {/* SMALL TITLE */}
              <Box
                className="animate__animated animate__fadeInUp"
              >
                <HStack mb={4}>
                  <Box
                    w="60px"
                    h="2px"
                    bg="#AF3800"
                  />

                  <Text
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                    fontWeight="700"
                    color="#AF3800"
                    fontSize="sm"
                  >
                    About Rarekoncepts
                  </Text>
                </HStack>

                <Heading
                  color="#22007C"
                  fontWeight="800"
                  lineHeight="1.08"
                  letterSpacing="-0.03em"
                  fontSize={{
                    base: "3xl",
                    md: "5xl",
                    xl: "6xl",
                  }}
                  maxW="780px"
                >
                  Designing Luxury Events &
                  Timeless Experiences
                </Heading>
              </Box>

              {/* TEXT */}
              <Stack
                className="animate__animated animate__fadeInUp animate__delay-1s"
              >
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  lineHeight="2"
                >
                  Rarekoncepts Events & Decor is a
                  premium event planning and styling
                  company driven by creativity,
                  elegance, and excellence. We create
                  unforgettable weddings, luxury social
                  celebrations, corporate experiences,
                  and bespoke events tailored to every
                  client’s vision.
                </Text>

                <Text
                  color="gray.600"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  lineHeight="2"
                >
                  From sophisticated event styling to
                  seamless coordination and immersive
                  guest experiences, we transform
                  ordinary moments into timeless
                  memories with refined aesthetics and
                  attention to detail.
                </Text>
              </Stack>

              {/* SERVICES */}
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                w="full"
                className="animate__animated animate__fadeInUp animate__delay-2s"
              >
                {services.map((item, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={4}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.100"
                    borderRadius="24px"
                    p={5}
                    boxShadow="0 10px 35px rgba(0,0,0,0.04)"
                    transition="0.35s ease"
                    _hover={{
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 18px 45px rgba(34,0,124,0.08)",
                      borderColor: "#22007C20",
                    }}
                  >
                    <Flex
                      minW="46px"
                      h="46px"
                      borderRadius="full"
                      bg="rgba(34,0,124,0.08)"
                      align="center"
                      justify="center"
                    >
                      <Icon
                        as={CheckCircle2}
                        color="#AF3800"
                        boxSize={5}
                      />
                    </Flex>

                    <Text
                      color="#22007C"
                      fontWeight="600"
                      fontSize="sm"
                    >
                      {item}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>

              {/* BUTTONS */}
              <Flex
                gap={4}
                wrap="wrap"
                w="full"
                className="animate__animated animate__fadeInUp animate__delay-2s"
              >
                <Link
                  href="/consultation"
                  className="btn btn-primary"
                >
                  Plan Your Event
                </Link>

                <Link
                  href="/gallery"
                  className="btn btn-primary-outline"
                >
                  Explore Gallery
                </Link>
              </Flex>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};