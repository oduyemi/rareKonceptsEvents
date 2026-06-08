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
      "We provide complete luxury event planning and management services designed to transform your vision into an unforgettable experience. From intimate celebrations and destination weddings to high-end corporate events, social gatherings, gala nights, and brand activations, our team handles every detail with creativity and precision. We carefully manage timelines, guest experiences, logistics, vendor coordination, production planning, and on-site execution to ensure every moment flows seamlessly. Our approach combines elegance, organization, and innovation to create experiences that feel refined, immersive, and truly memorable.",
  },
  {
    title: "Vendor Management",
    image: "/images/vendor.jpg",
    alt: "Vendor Management Services Lagos Nigeria",
    direction: "right",
    description:
      "Our vendor management service connects you with trusted and highly experienced event professionals who align perfectly with your event goals and standards. We collaborate with premium caterers, decorators, florists, photographers, entertainers, production crews, rental companies, and security teams to ensure exceptional service delivery throughout your event. Every partnership is carefully coordinated and supervised to guarantee professionalism, consistency, and quality, giving you peace of mind while ensuring every aspect of your celebration is executed flawlessly.",
  },
  {
    title: "Event Day Coordination",
    image: "/images/event.jpg",
    alt: "Event Day Coordination Lagos Nigeria",
    direction: "left",
    description:
      "On your special day, our experienced coordinators oversee every moving part to ensure your event unfolds effortlessly and beautifully. We manage schedules, supervise vendors, coordinate arrivals, handle guest experiences, monitor timelines, and solve unexpected challenges discreetly behind the scenes. Our focus is to create a smooth and stress-free atmosphere where you can fully enjoy every moment while we maintain flawless execution from setup to the final farewell.",
  },
  {
    title: "Venue Decorations",
    image: "/images/decoration.jpg",
    alt: "Venue Decoration Services Lagos Nigeria",
    direction: "right",
    description:
      "We transform ordinary venues into breathtaking environments filled with elegance, emotion, and visual impact. Our decoration services include luxury floral styling, custom stage concepts, premium table settings, ambient lighting, themed décor installations, statement backdrops, and immersive design experiences tailored to your celebration. Every detail is thoughtfully curated to create a sophisticated atmosphere that captures attention, elevates the guest experience, and leaves lasting impressions long after the event is over.",
  },
  {
    title: "Event Ushers",
    image: "/images/eventushers.jpg",
    alt: "Event Ushers Lagos Nigeria",
    direction: "left",
    description:
      "Our professional event ushers are trained to deliver exceptional hospitality with confidence, warmth, and professionalism. From guest reception and registration coordination to seating assistance, crowd direction, and VIP support, our team ensures guests feel welcomed and attended to from arrival to departure. Their polished presentation and excellent communication skills contribute to a smooth, organized, and elevated event experience.",
  },
  {
    title: "Event Staffing",
    image: "/images/security.jpg",
    alt: "Event Staffing Services Lagos Nigeria",
    direction: "right",
    description:
      "We provide dependable event staffing solutions tailored to support smooth operations and premium guest experiences. Our staffing services include event coordinators, hospitality personnel, operational assistants, logistics teams, wait staff, brand ambassadors, technical support crews, and on-site support professionals. Every staff member is carefully selected and trained to maintain professionalism, efficiency, and excellence throughout the entire event experience.",
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
            letterSpacing="0.18em"
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
            lineHeight="0.9"
            letterSpacing="-0.08em"
            fontSize={{
              base: "3rem",
              md: "6.3rem",
            }}
            maxW="1100px"
          >
            Creating Timeless
            <Text
              as="span"
              display="block"
              color="#22007C"
            >
              Luxury Event Experiences
            </Text>
          </Heading>

          <Text
            mt={7}
            color="gray.600"
            lineHeight="2.1"
            maxW="820px"
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            We specialize in delivering elevated event
            experiences through refined planning,
            luxury styling, flawless coordination, and
            exceptional attention to detail. Every
            celebration is intentionally crafted to
            reflect elegance, emotion, sophistication,
            and unforgettable moments that leave a
            lasting impression on every guest.
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
          <Stack gap={16}>
            {services.map((service) => {
              const isRight =
                service.direction === "right";

              return (
                <MotionBox
                  key={service.title}
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
                          base: "280px",
                          md: "430px",
                        }}
                        h={{
                          base: "280px",
                          md: "430px",
                        }}
                        borderRadius="full"
                      >
                        {/* OUTER RING */}
                        <MotionBox
                          position="absolute"
                          inset="18px"
                          borderRadius="full"
                          border="2px solid rgba(255,255,255,0.16)"
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
                          boxShadow="0 35px 90px rgba(0,0,0,0.22)"
                        >
                          <MotionBox
                            whileHover={{
                              scale: 1.08,
                            }}
                            transition={{
                              duration: 1.1,
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
                            bg="linear-gradient(to top, rgba(0,0,0,0.38), rgba(0,0,0,0.03))"
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
                            letterSpacing="0.2em"
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
                            base: "2.3rem",
                            md: "4.2rem",
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
                              : "rgba(255,255,255,0.78)"
                          }
                          lineHeight="2.1"
                          fontSize={{
                            base: "md",
                            md: "lg",
                          }}
                          maxW="640px"
                        >
                          {service.description}
                        </MotionText>
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