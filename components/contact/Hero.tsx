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
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

import "animate.css";

const contactCards = [
    {
      title: "Email Address",
      value: "rarekonceptsevents@gmail.com",
      description:
        "Reach out for luxury event planning, premium décor consultations, and custom experiences.",
      icon: <Mail size={36} />,
      color: "#22007C",
    },
    {
      title: "Phone Number",
      value: "+234 803 345 4969",
      description:
        "Speak directly with our event specialists for bookings, inquiries, and consultations.",
      icon: <Phone size={36} />,
      color: "#AF3800",
    },
    {
      title: "Office Location",
      value: "Lagos, Nigeria",
      description:
        "Serving luxury weddings, corporate experiences, and destination events across Nigeria.",
      icon: <MapPin size={36} />,
      color: "#0F766E",
    },
    {
      title: "Social Connect",
      value: "rarekonceptseventndecor",
      description:
        "Follow our latest event transformations, premium styling, and celebration highlights.",
      icon: <FaInstagram size={36} />,
      color: "#E1306C",
    },
];

const quickStats = [
  "Luxury Weddings",
  "Corporate Events",
  "Premium Styling",
  "Destination Experiences",
];

export const ContactHero = () => {
  return (
    <Box
      bg="#0B071A"
      position="relative"
      overflow="hidden"
      py={{
        base: 28,
        md: 36,
      }}
    >
      <Box
        position="absolute"
        top="-160px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.42}
        filter="blur(140px)"
      />

      <Box
        position="absolute"
        bottom="-180px"
        right="-100px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.28}
        filter="blur(140px)"
      />

      <Container maxW="1500px" position="relative" zIndex={2}>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1.1fr 0.9fr",
          }}
          gap={{
            base: 16,
            lg: 20,
          }}
          alignItems="center"
        >
          <GridItem>
            <VStack
              align="start"
              gap={7}
              className="animate__animated animate__fadeInLeft"
            >
              <Badge
                bg="rgba(255,255,255,0.10)"
                color="white"
                px={5}
                py={2}
                borderRadius="full"
                fontSize="0.72rem"
                letterSpacing="0.16em"
                border="1px solid rgba(255,255,255,0.08)"
              >
                CONTACT US
              </Badge>

              <Heading
                color="white"
                fontWeight="900"
                lineHeight="0.92"
                letterSpacing="-0.08em"
                fontSize={{
                  base: "3rem",
                  md: "6.3rem",
                }}
                maxW="920px"
              >
                Let’s Create
                <Text
                  as="span"
                  display="block"
                  color="#AF3800"
                >
                  Extraordinary Experiences
                </Text>
              </Heading>

              <Text
                color="rgba(255,255,255,0.74)"
                fontSize={{
                  base: "md",
                  md: "xl",
                }}
                lineHeight="2"
                maxW="760px"
              >
                From luxury weddings and corporate experiences to premium décor styling and destination celebrations, we transform visions into unforgettable moments.
              </Text>

              <Flex
                gap={4}
                wrap="wrap"
              >
                {quickStats.map((item, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={2}
                    px={5}
                    py={3}
                    borderRadius="full"
                    bg="rgba(255,255,255,0.08)"
                    border="1px solid rgba(255,255,255,0.08)"
                    backdropFilter="blur(10px)"
                  >
                    <Sparkles
                      size={15}
                      color="#F6C453"
                    />

                    <Text
                      color="white"
                      fontSize="sm"
                      fontWeight="700"
                      letterSpacing="0.05em"
                      textTransform="uppercase"
                    >
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <HStack gap={5} flexWrap="wrap">
                <Button
                  h="64px"
                  px={8}
                  borderRadius="full"
                  bg="white"
                  color="#22007C"
                  fontWeight="700"
                  _hover={{
                    bg: "#F4F4F4",
                    transform: "translateY(-2px)",
                  }}
                >
                  <Flex align="center" gap={2}>
                    <Text>Book Consultation</Text>
                    <ArrowRight size={18} />
                  </Flex>
                </Button>

                <Link href="tel:+2348000000000">
                  <Button
                    h="64px"
                    px={8}
                    borderRadius="full"
                    bg="rgba(255,255,255,0.08)"
                    color="white"
                    border="1px solid rgba(255,255,255,0.08)"
                    backdropFilter="blur(10px)"
                    _hover={{
                      bg: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <Flex align="center" gap={2}>
                      <Phone size={18} />
                      <Text>Call Us</Text>
                    </Flex>
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              position="relative"
              className="animate__animated animate__fadeInRight"
            >
              <Box
                overflow="hidden"
                borderRadius="40px"
                h={{
                  base: "520px",
                  md: "760px",
                }}
                position="relative"
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius="40px"
                  h={{
                    base: "520px",
                    md: "760px",
                  }}
                >
                  <Image
                    src="/images/contacthero.jpg"
                    alt="Luxury Event Contact"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.08))"
                  />
                </Box>

                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.08))"
                />

                <VStack
                  position="absolute"
                  bottom={8}
                  left={8}
                  right={8}
                  align="stretch"
                  gap={4}
                >
                  {contactCards.map((item, index) => {
                    return (
                      <Flex
                        key={index}
                        align="center"
                        justify="space-between"
                        bg="rgba(255,255,255,0.10)"
                        border="1px solid rgba(255,255,255,0.08)"
                        backdropFilter="blur(16px)"
                        borderRadius="24px"
                        px={5}
                        py={4}
                      >
                        <HStack gap={4}>
                          <Flex
                            w="58px"
                            h="58px"
                            borderRadius="20px"
                            bg="rgba(255,255,255,0.10)"
                            align="center"
                            justify="center"
                          >
                            {item.icon}
                          </Flex>

                          <Box>
                            <Text
                              color="white"
                              fontWeight="700"
                            >
                              {item.title}
                            </Text>

                            <Text
                              color="rgba(255,255,255,0.72)"
                              fontSize="sm"
                            >
                              {item.value}
                            </Text>
                          </Box>
                        </HStack>

                        <Sparkles
                          size={18}
                          color="#F6C453"
                        />
                      </Flex>
                    );
                  })}
                </VStack>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};