"use client";

import Link from "next/link";
import {
  Badge,
  Box,
  Button,
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
        base: 24,
        md: 32,
        xl: 36,
      }}
    >
      {/* AMBIENT LIGHTING */}
      <Box
        position="absolute"
        top="-180px"
        right="-120px"
        w="420px"
        h="420px"
        bg="#22007C"
        opacity={0.05}
        filter="blur(130px)"
        borderRadius="full"
      />

      <Box
        position="absolute"
        bottom="-180px"
        left="-140px"
        w="420px"
        h="420px"
        bg="#AF3800"
        opacity={0.05}
        filter="blur(140px)"
        borderRadius="full"
      />

      <Container
        maxW="1450px"
        px={{
          base: 6,
          md: 8,
          xl: 10,
        }}
        position="relative"
        zIndex={2}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            xl: "0.95fr 1.05fr",
          }}
          gap={{
            base: 16,
            lg: 20,
            xl: 24,
          }}
          alignItems="center"
        >
          {/* =========================================================
              IMAGE SIDE
          ========================================================= */}
          <GridItem>
            <Box
              position="relative"
              className="animate__animated animate__fadeInLeft"
            >
              {/* MAIN IMAGE */}
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="40px"
                bg="white"
                boxShadow="
                  0 20px 70px rgba(15,23,42,0.08),
                  0 40px 120px rgba(34,0,124,0.08)
                "
                isolation="isolate"
              >
                <Image
                  src="/images/submit.jpg"
                  alt="Rarekoncepts Events"
                  w="100%"
                  h={{
                    base: "520px",
                    md: "720px",
                  }}
                  objectFit="cover"
                  transition="transform 1.2s ease"
                  _hover={{
                    transform: "scale(1.04)",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="
                    linear-gradient(
                      to top,
                      rgba(0,0,0,0.58),
                      rgba(0,0,0,0.08),
                      rgba(0,0,0,0.02)
                    )
                  "
                />

                {/* GOLD LIGHT */}
                <Box
                  position="absolute"
                  bottom="-120px"
                  left="-80px"
                  w="260px"
                  h="260px"
                  borderRadius="full"
                  bg="#D4AF37"
                  opacity={0.16}
                  filter="blur(90px)"
                />
              </Box>

              {/* EXPERIENCE GLASS CARD */}
              <Box
                position="absolute"
                bottom={{
                  base: "20px",
                  md: "32px",
                }}
                left={{
                  base: "20px",
                  md: "-36px",
                }}
                bg="rgba(255,255,255,0.72)"
                backdropFilter="blur(24px)"
                border="1px solid rgba(255,255,255,0.45)"
                borderRadius="30px"
                px={6}
                py={5}
                boxShadow="
                  0 20px 60px rgba(15,23,42,0.12)
                "
                className="animate__animated animate__fadeInUp"
              >
                <HStack gap={4}>
                  <Flex
                    w="68px"
                    h="68px"
                    borderRadius="22px"
                    bg="
                      linear-gradient(
                        135deg,
                        #22007C,
                        #AF3800
                      )
                    "
                    align="center"
                    justify="center"
                    color="white"
                    boxShadow="
                      0 12px 35px rgba(34,0,124,0.28)
                    "
                  >
                    <Sparkles size={26} />
                  </Flex>

                  <Box>
                    <Heading
                      fontSize={{
                        base: "2xl",
                        md: "3xl",
                      }}
                      lineHeight="1"
                      fontWeight="800"
                      color="#22007C"
                      letterSpacing="-0.04em"
                      mb={2}
                    >
                      10+
                    </Heading>

                    <Text
                      color="gray.600"
                      fontWeight="500"
                      lineHeight="1.6"
                    >
                      Years Creating Elevated
                      Luxury Experiences
                    </Text>
                  </Box>
                </HStack>
              </Box>

              {/* FLOATING LABEL */}
              <Flex
                position="absolute"
                top="26px"
                right="26px"
                align="center"
                gap={3}
                px={5}
                py={3}
                borderRadius="full"
                bg="rgba(255,255,255,0.72)"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255,255,255,0.5)"
                boxShadow="
                  0 12px 40px rgba(15,23,42,0.10)
                "
                className="animate__animated animate__fadeInDown"
              >
                <Box
                  w="9px"
                  h="9px"
                  borderRadius="full"
                  bg="#D4AF37"
                />

                <Text
                  color="#22007C"
                  fontSize="sm"
                  fontWeight="700"
                  letterSpacing="0.06em"
                >
                  LUXURY EVENT STYLING
                </Text>
              </Flex>
            </Box>
          </GridItem>

          {/* =========================================================
              CONTENT SIDE
          ========================================================= */}
          <GridItem>
            <VStack
              align="start"
              gap={{
                base: 8,
                md: 10,
              }}
            >
              {/* SECTION LABEL */}
              <Stack
                gap={6}
                className="animate__animated animate__fadeInUp"
              >
                <Badge
                  bg="rgba(34,0,124,0.05)"
                  color="#22007C"
                  px={5}
                  py={2}
                  borderRadius="full"
                  fontSize="0.72rem"
                  letterSpacing="0.18em"
                  fontWeight="700"
                  border="1px solid rgba(34,0,124,0.08)"
                  backdropFilter="blur(12px)"
                >
                  ABOUT RAREKONCEPTS
                </Badge>

                <Heading
                  color="#111827"
                  fontWeight="800"
                  lineHeight={{
                    base: "1",
                    md: "0.94",
                  }}
                  letterSpacing="-0.08em"
                  fontSize={{
                    base: "3.2rem",
                    md: "5.5rem",
                    xl: "6.3rem",
                  }}
                  maxW="820px"
                >
                  Designing
                  <Text
                    as="span"
                    display="block"
                    color="#22007C"
                  >
                    Elevated
                  </Text>

                  <Text
                    as="span"
                    display="block"
                    color="#AF3800"
                  >
                    Experiences
                  </Text>
                </Heading>
              </Stack>

              {/* DESCRIPTION */}
              <Stack
                gap={6}
                maxW="760px"
                className="animate__animated animate__fadeInUp animate__delay-1s"
              >
                <Text
                  color="gray.600"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  lineHeight="2.1"
                >
                  Rarekoncepts Events & Decor is a
                  luxury event planning and styling
                  brand known for sophisticated
                  aesthetics, seamless execution,
                  and unforgettable guest experiences.
                </Text>

                <Text
                  color="gray.600"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  lineHeight="2.1"
                >
                  From elegant weddings and executive
                  corporate experiences to immersive
                  destination celebrations, every
                  detail is intentionally curated to
                  create timeless moments with
                  refinement and excellence.
                </Text>
              </Stack>

              {/* SERVICES */}
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                gap={5}
                w="full"
                className="animate__animated animate__fadeInUp animate__delay-2s"
              >
                {services.map((item, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={4}
                    p={5}
                    borderRadius="26px"
                    bg="rgba(255,255,255,0.72)"
                    backdropFilter="blur(20px)"
                    border="1px solid rgba(15,23,42,0.06)"
                    boxShadow="
                      0 10px 35px rgba(15,23,42,0.04)
                    "
                    transition="all 0.35s ease"
                    _hover={{
                      transform: "translateY(-6px)",
                      borderColor:
                        "rgba(34,0,124,0.16)",
                      boxShadow:
                        "0 24px 50px rgba(34,0,124,0.10)",
                    }}
                  >
                    <Flex
                      minW="50px"
                      h="50px"
                      borderRadius="18px"
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
                      color="#111827"
                      fontWeight="600"
                      lineHeight="1.7"
                    >
                      {item}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>

              {/* CTA */}
              <Flex
                gap={5}
                wrap="wrap"
                pt={2}
                className="animate__animated animate__fadeInUp animate__delay-2s"
              >
                <Link href="/consultation" passHref>
                  <Button
                    h="64px"
                    px={8}
                    borderRadius="full"
                    bg="#22007C"
                    color="white"
                    fontWeight="600"
                    fontSize="md"
                    boxShadow="
                      0 18px 45px rgba(34,0,124,0.20)
                    "
                    transition="all 0.35s ease"
                    _hover={{
                      bg: "#160052",
                      transform: "translateY(-3px)",
                      boxShadow:
                        "0 26px 65px rgba(34,0,124,0.26)",
                    }}
                  >
                    Plan Your Event
                    <ArrowRight size={18} />
                  </Button>
                </Link>

               <Link href="/gallery">
                  <Button
                    h="64px"
                    px={8}
                    borderRadius="full"
                    variant="ghost"
                    color="#22007C"
                    fontWeight="600"
                    border="1px solid rgba(34,0,124,0.10)"
                    bg="rgba(255,255,255,0.7)"
                    backdropFilter="blur(14px)"
                    transition="all 0.35s ease"
                    _hover={{
                      bg: "rgba(34,0,124,0.05)",
                      transform: "translateY(-3px)",
                    }}
                  >
                    Explore Gallery
                  </Button>
                </Link>
              </Flex>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};