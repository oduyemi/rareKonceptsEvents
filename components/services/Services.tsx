"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  Sparkles,
} from "lucide-react";

import "animate.css";

const services = [
  {
    title: "Event Planning & Management",
    image: "/images/party.jpg",
    alt: "Event Planning and Management Lagos Nigeria",
    direction: "left",
    description:
      "As a leading event management company in Lagos, Nigeria, we specialize in complete event planning and management services for weddings, parties, corporate events, social gatherings, brand activations, private celebrations, and more.",
  },
  {
    title: "Vendor Management",
    image: "/images/vendor.jpg",
    alt: "Vendor Management Services Lagos Nigeria",
    direction: "right",
    description:
      "We connect you with trusted caterers, decorators, photographers, entertainers, security teams, and event suppliers to ensure your event runs smoothly and professionally.",
  },
  {
    title: "Event Day Coordination",
    image: "/images/event.jpg",
    alt: "Event Day Coordination Lagos Nigeria",
    direction: "left",
    description:
      "We provide seamless event-day coordination services, ensuring every detail of your celebration is professionally managed from setup to final execution.",
  },
  {
    title: "Venue Decorations",
    image: "/images/decoration.jpg",
    alt: "Venue Decoration Services Lagos Nigeria",
    direction: "right",
    description:
      "Transform your event space with elegant floral arrangements, premium styling, custom backdrops, lighting concepts, and luxury themed décor experiences.",
  },
  {
    title: "Event Ushers",
    image: "/images/eventushers.jpg",
    alt: "Event Ushers Lagos Nigeria",
    direction: "left",
    description:
      "Our professional event ushers provide polished guest reception, registration support, crowd direction, seating assistance, and VIP hospitality services.",
  },
  {
    title: "Event Staffing",
    image: "/images/security.jpg",
    alt: "Event Staffing Services Lagos Nigeria",
    direction: "right",
    description:
      "We offer reliable event staffing solutions including coordinators, support staff, brand ambassadors, logistics teams, wait staff, and operational personnel.",
  },
];

export const AwonServices = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 32,
      }}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* AMBIENT LIGHT */}
      <Box
        position="absolute"
        top="-180px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.04}
        filter="blur(120px)"
      />

      <Box
        position="absolute"
        bottom="-180px"
        right="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.05}
        filter="blur(130px)"
      />

      <Container
        maxW="1500px"
        position="relative"
        zIndex={2}
      >
        {/* HEADER */}
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          mb={{
            base: 16,
            md: 24,
          }}
          className="animate__animated animate__fadeInUp"
        >
          <Badge
            bg="rgba(34,0,124,0.05)"
            color="#22007C"
            px={5}
            py={2}
            borderRadius="full"
            fontSize="0.72rem"
            letterSpacing="0.16em"
            fontWeight="700"
            border="1px solid rgba(34,0,124,0.08)"
            backdropFilter="blur(10px)"
          >
            SIGNATURE SERVICES
          </Badge>

          <Heading
            mt={7}
            color="#111827"
            fontWeight="800"
            lineHeight="0.92"
            letterSpacing="-0.08em"
            fontSize={{
              base: "3rem",
              md: "6rem",
            }}
            maxW="1000px"
          >
            How We Create
            <Text
              as="span"
              display="block"
              color="#22007C"
            >
              Exceptional Experiences
            </Text>
          </Heading>

          <Text
            mt={7}
            color="gray.600"
            lineHeight="2"
            maxW="760px"
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            We combine luxury styling, strategic
            planning, and flawless coordination to
            deliver unforgettable celebrations with
            elegance and precision.
          </Text>
        </Flex>

        {/* SERVICES */}
        <Stack gap={14}>
          {services.map((service, index) => {
            const isRight =
              service.direction === "right";

            return (
              <Box
                key={index}
                position="relative"
                overflow="hidden"
                borderRadius={{
                  base: "40px",
                  md: isRight
                    ? "0 320px 320px 0"
                    : "320px 0 0 320px",
                }}
                bg="linear-gradient(135deg, rgba(34,0,124,1) 0%, rgba(34,0,124,0.96) 38%, rgba(255,255,255,1) 100%)"
                boxShadow="0 30px 90px rgba(34,0,124,0.10)"
                className={`animate__animated ${
                  isRight
                    ? "animate__fadeInLeft"
                    : "animate__fadeInRight"
                }`}
              >
                {/* INNER LIGHT */}
                <Box
                  position="absolute"
                  top="-60px"
                  right="-60px"
                  w="220px"
                  h="220px"
                  borderRadius="full"
                  bg="#AF3800"
                  opacity={0.15}
                  filter="blur(90px)"
                />

                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "0.9fr 1.1fr",
                  }}
                  alignItems="center"
                >
                  {/* IMAGE */}
                  <Flex
                    justify="center"
                    order={{
                      base: 1,
                      md: isRight ? 2 : 1,
                    }}
                    p={{
                      base: 8,
                      md: 10,
                    }}
                  >
                    <Box
                      position="relative"
                      w={{
                        base: "270px",
                        md: "420px",
                      }}
                      h={{
                        base: "270px",
                        md: "420px",
                      }}
                      borderRadius="full"
                    >
                      {/* RING */}
                      <Box
                        position="absolute"
                        inset="20px"
                        borderRadius="full"
                        border="3px solid rgba(255,255,255,0.18)"
                      />

                      <Box
                        position="absolute"
                        inset="0"
                        borderRadius="full"
                        overflow="hidden"
                        boxShadow="0 30px 80px rgba(0,0,0,0.20)"
                      >
                        <Image
                          src={service.image}
                          alt={service.alt}
                          w="100%"
                          h="100%"
                          loading="lazy"
                          objectFit="cover"
                          transition="0.7s ease"
                          _hover={{
                            transform:
                              "scale(1.08)",
                          }}
                        />

                        <Box
                          position="absolute"
                          inset={0}
                          bg="linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.02))"
                        />
                      </Box>
                    </Box>
                  </Flex>

                  {/* CONTENT */}
                  <Flex
                    align="center"
                    order={{
                      base: 2,
                      md: isRight ? 1 : 2,
                    }}
                    px={{
                      base: 8,
                      md: 12,
                    }}
                    py={{
                      base: 10,
                      md: 14,
                    }}
                  >
                    <VStack
                      align={
                        isRight
                          ? {
                              base: "start",
                              md: "end",
                            }
                          : "start"
                      }
                      textAlign={
                        isRight
                          ? {
                              base: "left",
                              md: "right",
                            }
                          : "left"
                      }
                      gap={6}
                    >
                      <HStack
                        gap={4}
                        justify={
                          isRight
                            ? {
                                base: "flex-start",
                                md: "flex-end",
                              }
                            : "flex-start"
                        }
                      >
                        {!isRight && (
                          <Box
                            w="55px"
                            h="2px"
                            bg="#F6C453"
                          />
                        )}

                        <Text
                          color="#F6C453"
                          textTransform="uppercase"
                          letterSpacing="0.18em"
                          fontWeight="700"
                          fontSize="sm"
                        >
                          Luxury Service
                        </Text>

                        {isRight && (
                          <Box
                            w="55px"
                            h="2px"
                            bg="#F6C453"
                          />
                        )}
                      </HStack>

                      <Heading
                        color={
                          isRight
                            ? "#AF3800"
                            : "white"
                        }
                        fontWeight="800"
                        lineHeight="0.95"
                        letterSpacing="-0.05em"
                        fontSize={{
                          base: "2.2rem",
                          md: "4rem",
                        }}
                        maxW="650px"
                      >
                        {service.title}
                      </Heading>

                      <Text
                        color={
                          isRight
                            ? "gray.300"
                            : "rgba(255,255,255,0.76)"
                        }
                        lineHeight="2"
                        fontSize={{
                          base: "md",
                          md: "lg",
                        }}
                        maxW="640px"
                      >
                        {service.description}
                      </Text>

                      <HStack
                        gap={3}
                        flexWrap="wrap"
                        justify={
                          isRight
                            ? {
                                base: "flex-start",
                                md: "flex-end",
                              }
                            : "flex-start"
                        }
                      >
                        {[
                          "Luxury",
                          "Premium",
                          "Elegant",
                        ].map((item, i) => (
                          <Flex
                            key={i}
                            align="center"
                            gap={2}
                            px={4}
                            py={2}
                            borderRadius="full"
                            bg={
                              isRight
                                ? "rgba(34,0,124,0.05)"
                                : "rgba(255,255,255,0.10)"
                            }
                            border={
                              isRight
                                ? "1px solid rgba(34,0,124,0.08)"
                                : "1px solid rgba(255,255,255,0.10)"
                            }
                            backdropFilter="blur(10px)"
                          >
                            <Sparkles
                              size={14}
                              color="#F6C453"
                            />

                            <Text
                              color={
                                isRight
                                  ? "gray.300"
                                  : "white"
                              }
                              fontSize="xs"
                              fontWeight="700"
                              className="pt-3"
                              letterSpacing="0.05em"
                              textTransform="uppercase"
                            >
                              {item}
                            </Text>
                          </Flex>
                        ))}
                      </HStack>
                    </VStack>
                  </Flex>
                </Grid>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};