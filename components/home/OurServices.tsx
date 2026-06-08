"use client";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
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
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";


const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 1.15,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const OurServices = () => {
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
      {/* BACKGROUND GLOWS */}
      <MotionBox
        position="absolute"
        top="-180px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.04}
        filter="blur(110px)"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        bottom="-180px"
        right="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.05}
        filter="blur(120px)"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.05, 0.07, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container
        maxW="1500px"
        position="relative"
        zIndex={2}
      >
        {/* HEADER */}
        <MotionFlex
          direction="column"
          align="center"
          textAlign="center"
          mb={{
            base: 16,
            md: 24,
          }}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
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
        </MotionFlex>

        {/* SERVICES */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          <Stack gap={14}>
            {services.map((service, index) => {
              const isRight =
                service.direction === "right";

              return (
                <MotionBox
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.4,
                    },
                  }}
                  position="relative"
                  overflow="hidden"
                  borderRadius={{
                    base: "40px",
                    md: isRight
                      ? "0 320px 320px 0"
                      : "320px 0 0 320px",
                  }}
                  bg="linear-gradient(135deg, rgba(34,0,124,1) 0%, rgba(34,0,124,0.96) 38%, rgba(255,255,255,1) 100%)"
                  boxShadow="0 35px 100px rgba(34,0,124,0.12)"
                >
                  {/* INNER LIGHT */}
                  <MotionBox
                    position="absolute"
                    top="-60px"
                    right="-60px"
                    w="240px"
                    h="240px"
                    borderRadius="full"
                    bg="#AF3800"
                    opacity={0.15}
                    filter="blur(90px)"
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
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
                      <MotionBox
                        variants={imageVariants}
                        whileHover={{
                          scale: 1.04,
                          rotate: 1.2,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
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
                        <MotionBox
                          position="absolute"
                          inset="20px"
                          borderRadius="full"
                          border="3px solid rgba(255,255,255,0.18)"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <Box
                          position="absolute"
                          inset="0"
                          borderRadius="full"
                          overflow="hidden"
                          boxShadow="0 30px 80px rgba(0,0,0,0.20)"
                        >
                          <MotionBox
                            whileHover={{
                              scale: 1.08,
                            }}
                            transition={{
                              duration: 1,
                            }}
                            w="100%"
                            h="100%"
                          >
                            <Image
                              src={service.image}
                              alt={service.alt}
                              w="100%"
                              h="100%"
                              loading="lazy"
                              objectFit="cover"
                            />
                          </MotionBox>

                          <Box
                            position="absolute"
                            inset={0}
                            bg="linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.02))"
                          />
                        </Box>
                      </MotionBox>
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
                            <MotionBox
                              w="55px"
                              h="2px"
                              bg="#F6C453"
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: "55px",
                              }}
                              transition={{
                                duration: 1,
                              }}
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
                            <MotionBox
                              w="55px"
                              h="2px"
                              bg="#F6C453"
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: "55px",
                              }}
                              transition={{
                                duration: 1,
                              }}
                            />
                          )}
                        </HStack>

                        <MotionText
                          initial={{
                            opacity: 0,
                            y: 40,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.9,
                          }}
                          as={Heading}
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
                        </MotionText>

                        <MotionText
                          initial={{
                            opacity: 0,
                            y: 30,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.1,
                          }}
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
                        </MotionText>

                        <MotionBox
                          initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                          }}
                        >
                          <Link href="/services">
                            <Button
                              h="60px"
                              px={8}
                              borderRadius="full"
                              bg={
                                isRight
                                  ? "#22007C"
                                  : "white"
                              }
                              color={
                                isRight
                                  ? "white"
                                  : "#22007C"
                              }
                              fontWeight="700"
                              boxShadow={
                                isRight
                                  ? "0 20px 50px rgba(34,0,124,0.18)"
                                  : "0 20px 50px rgba(0,0,0,0.12)"
                              }
                              transition="all 0.35s ease"
                              _hover={{
                                transform:
                                  "translateY(-3px)",
                                bg: isRight
                                  ? "#160052"
                                  : "#F5F5F5",
                              }}
                            >
                              <Flex
                                align="center"
                                gap={2}
                              >
                                <Text className="pt-2">
                                  Read More
                                </Text>

                                <MotionBox
                                  animate={{
                                    x: [0, 4, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                >
                                  <ArrowRight
                                    size={18}
                                  />
                                </MotionBox>
                              </Flex>
                            </Button>
                          </Link>
                        </MotionBox>
                      </VStack>
                    </Flex>
                  </Grid>
                </MotionBox>
              );
            })}
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};