"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  HStack,
} from "@chakra-ui/react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/modules";

import {
  Quote,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const testimonies = [
  {
    text: "Just wanted to extend a huge thank you for organizing such a fantastic event! Everything went smoothly and everyone had a great time.",
    name: "Susan Aigbefo",
    role: "Ouranus Technologies",
  },
  {
    text: "One of the best event management companies in Lagos! Their event ushers, staffing, and décor services transformed our corporate conference.",
    name: "Jimi Lawson",
    role: "Business Owner",
  },
  {
    text: "Outstanding party planning and event coordination in Lagos, Nigeria. Stunning venue decoration and seamless logistics from start to finish.",
    name: "Chioma Jerry",
    role: "Bride",
  },
];

export const Testimonials = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="#22007C"
      py={{ base: 20, md: 24 }}
    >
      {/* AMBIENT LIGHTS */}
      <MotionBox
        position="absolute"
        top="-180px"
        right="-120px"
        w="380px"
        h="380px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.12}
        filter="blur(120px)"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        bottom="-220px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#D4AF37"
        opacity={0.08}
        filter="blur(130px)"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GRID TEXTURE */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.035}
        backgroundImage={`
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `}
        backgroundSize="70px 70px"
      />

      <Container
        maxW="6xl"
        position="relative"
        zIndex={2}
      >
        {/* HEADER */}
        <MotionFlex
          direction="column"
          align="center"
          textAlign="center"
          mb={{ base: 12, md: 16 }}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <HStack gap={3}>
            <MotionBox
              h="1px"
              bgGradient="linear(to-r, transparent, #D4AF37)"
              initial={{ width: 0 }}
              whileInView={{ width: "55px" }}
              transition={{ duration: 1 }}
            />

            <Text
              color="#D4AF37"
              textTransform="uppercase"
              letterSpacing="0.22em"
              fontWeight="700"
              fontSize="xs"
            >
              Client Experiences
            </Text>

            <MotionBox
              h="1px"
              bgGradient="linear(to-l, transparent, #D4AF37)"
              initial={{ width: 0 }}
              whileInView={{ width: "55px" }}
              transition={{ duration: 1 }}
            />
          </HStack>

          <Heading
            mt={5}
            maxW="760px"
            color="white"
            lineHeight="0.95"
            fontWeight="900"
            fontSize={{
              base: "2.8rem",
              md: "4.8rem",
            }}
            letterSpacing="-0.05em"
          >
            Crafted Moments.
            <Text
              as="span"
              display="block"
              bgGradient="linear(to-r, #FFFFFF, #D4AF37)"
              bgClip="text"
            >
              Lasting Impressions.
            </Text>
          </Heading>

          <Text
            mt={6}
            color="whiteAlpha.700"
            maxW="650px"
            fontSize={{
              base: "md",
              md: "lg",
            }}
            lineHeight="1.9"
          >
            Every event is curated with elegance,
            precision, and intentional detail —
            creating unforgettable experiences for
            discerning clients.
          </Text>
        </MotionFlex>

        {/* SLIDER */}
        <Swiper
          modules={[
            Autoplay,
            Pagination,
            EffectFade,
          ]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          loop
          speed={1400}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          style={{
            paddingBottom: "55px",
          }}
        >
          {testimonies.map(
            (testimonial, index) => (
              <SwiperSlide key={index}>
                <Flex
                  justify="center"
                  align="center"
                  w="100%"
                >
                  <MotionBox
                    initial={{
                      opacity: 0,
                      y: 45,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.01,
                    }}
                    position="relative"
                    w="100%"
                    maxW="820px"
                    mx="auto"
                    borderRadius="32px"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.07)"
                    border="1px solid rgba(255,255,255,0.08)"
                    backdropFilter="blur(22px)"
                    boxShadow="
                      0 24px 80px rgba(0,0,0,0.24),
                      inset 0 1px 0 rgba(255,255,255,0.05)
                    "
                  >
                    {/* PREMIUM BORDER */}
                    <Box
                      position="absolute"
                      inset="0"
                      borderRadius="32px"
                      padding="1px"
                      bgGradient="
                        linear(
                          135deg,
                          rgba(212,175,55,0.6),
                          transparent,
                          rgba(175,56,0,0.45)
                        )
                      "
                      WebkitMask="
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0)
                      "
                      WebkitMaskComposite="xor"
                      pointerEvents="none"
                    />

                    {/* GLOW */}
                    <MotionBox
                      position="absolute"
                      top="-90px"
                      right="-70px"
                      w="180px"
                      h="180px"
                      borderRadius="full"
                      bg="#D4AF37"
                      opacity={0.09}
                      filter="blur(90px)"
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                      }}
                    />

                    <Flex
                      direction={{
                        base: "column",
                        md: "row",
                      }}
                      align="center"
                      justify="center"
                      minH={{
                        base: "auto",
                        md: "300px",
                      }}
                    >
                      {/* LEFT ICON SIDE */}
                      <Flex
                        flex={{
                          base: "unset",
                          md: "0 0 28%",
                        }}
                        w={{
                          base: "100%",
                          md: "28%",
                        }}
                        align="center"
                        justify="center"
                        py={{
                          base: 8,
                          md: 0,
                        }}
                        position="relative"
                      >
                        {/* LIGHT RINGS */}
                        <MotionFlex
                          position="relative"
                          align="center"
                          justify="center"
                          w={{
                            base: "120px",
                            md: "150px",
                          }}
                          h={{
                            base: "120px",
                            md: "150px",
                          }}
                          borderRadius="full"
                          animate={{
                            y: [0, -6, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {/* OUTER RING */}
                          <MotionBox
                            position="absolute"
                            inset="0"
                            borderRadius="full"
                            border="1px solid rgba(255,255,255,0.12)"
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 24,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />

                          {/* INNER RING */}
                          <MotionBox
                            position="absolute"
                            inset="12px"
                            borderRadius="full"
                            border="1px solid rgba(212,175,55,0.25)"
                            animate={{
                              rotate: [360, 0],
                            }}
                            transition={{
                              duration: 18,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />

                          {/* CENTER */}
                          <Flex
                            w="100%"
                            h="100%"
                            borderRadius="full"
                            align="center"
                            justify="center"
                            bg="
                              radial-gradient(
                                circle,
                                rgba(255,255,255,0.11),
                                rgba(255,255,255,0.03)
                              )
                            "
                            backdropFilter="blur(10px)"
                            boxShadow="
                              inset 0 0 30px rgba(255,255,255,0.04)
                            "
                          >
                            <Quote
                              size={38}
                              color="#D4AF37"
                            />
                          </Flex>
                        </MotionFlex>
                      </Flex>

                      {/* CONTENT */}
                      <Flex
                        flex={{
                          base: "unset",
                          md: "0 0 72%",
                        }}
                        w={{
                          base: "100%",
                          md: "72%",
                        }}
                        align="center"
                        justify="center"
                        p={{
                          base: 8,
                          md: 10,
                        }}
                        pl={{
                          base: 8,
                          md: 2,
                        }}
                      >
                        <VStack
                          align="start"
                          justify="center"
                          gap={5}
                          w="100%"
                          maxW="500px"
                        >
                          {/* STARS */}
                          <HStack gap={1}>
                            {[...Array(5)].map((_, i) => (
                              <MotionBox
                                key={i}
                                animate={{
                                  y: [0, -2, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.08,
                                  repeat: Infinity,
                                }}
                              >
                                <Star
                                  size={15}
                                  fill="#D4AF37"
                                  color="#D4AF37"
                                />
                              </MotionBox>
                            ))}
                          </HStack>

                          {/* TESTIMONIAL */}
                          <MotionText
                            initial={{
                              opacity: 0,
                              y: 20,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.9,
                            }}
                            color="white"
                            fontWeight="300"
                            lineHeight={{
                              base: "1.85",
                              md: "1.9",
                            }}
                            fontSize={{
                              base: "md",
                              md: "1.28rem",
                            }}
                            letterSpacing="0.01em"
                          >
                            “{testimonial.text}”
                          </MotionText>

                          {/* DIVIDER */}
                          <MotionBox
                            h="1px"
                            bgGradient="
                              linear(
                                to-r,
                                #D4AF37,
                                transparent
                              )
                            "
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: "80px",
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.15,
                            }}
                          />

                          {/* CLIENT */}
                          <MotionBox
                            initial={{
                              opacity: 0,
                              y: 18,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.15,
                            }}
                          >
                            <Heading
                              color="white"
                              fontSize={{
                                base: "lg",
                                md: "1.5rem",
                              }}
                              fontWeight="800"
                              letterSpacing="-0.03em"
                            >
                              {testimonial.name}
                            </Heading>

                            <Text
                              color="#D4AF37"
                              mt={1}
                              fontSize="11px"
                              fontWeight="700"
                              letterSpacing="0.22em"
                              textTransform="uppercase"
                            >
                              {testimonial.role}
                            </Text>
                          </MotionBox>
                        </VStack>
                      </Flex>
                    </Flex>
                  </MotionBox>
                </Flex>
              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* PAGINATION */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 0px !important;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.22);
            opacity: 1;
            transition: all 0.45s ease;
          }

          .swiper-pagination-bullet-active {
            width: 36px;
            border-radius: 999px;
            background: linear-gradient(
              90deg,
              #d4af37,
              #af3800
            );
            box-shadow: 0 0 18px rgba(212, 175, 55, 0.45);
          }
        `}</style>
      </Container>
    </Box>
  );
};