"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
      py={{ base: 20, md: 28 }}
      className="ps-md-5"
    >
      {/* Premium Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="
          radial(circle at top right, rgba(212,175,55,0.14), transparent 30%),
          radial(circle at bottom left, rgba(175,56,0,0.18), transparent 28%)
        "
      />

      {/* Luxury Grid Texture */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.04}
        backgroundImage={`
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `}
        backgroundSize="80px 80px"
      />

      <Container maxW="7xl" position="relative" zIndex={2}>
        {/* Header */}
        <VStack gap={5} textAlign="center" mb={{ base: 14, md: 20 }}>
          <HStack gap={3}>
            <Box
              h="1px"
              w="60px"
              bgGradient="linear(to-r, transparent, #D4AF37)"
            />
            <Text
              color="#D4AF37"
              textTransform="uppercase"
              letterSpacing="0.25em"
              fontWeight="700"
              fontSize="sm"
            >
              Client Experiences
            </Text>
            <Box
              h="1px"
              w="60px"
              bgGradient="linear(to-l, transparent, #D4AF37)"
            />
          </HStack>

          <Heading
            maxW="900px"
            color="white"
            lineHeight="1"
            fontWeight="900"
            fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
            letterSpacing="-0.03em"
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
            color="whiteAlpha.700"
            maxW="720px"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.9"
          >
            Every event is curated with elegance, precision, and intentional
            detail — creating unforgettable experiences for discerning clients.
          </Text>
        </VStack>

        {/* Main Slider */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop
          speed={1400}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          style={{
            paddingBottom: "70px",
          }}
        >
          {testimonies.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Flex
                justify="center"
                align="center"
                px={{ base: 1, md: 6 }}
              >
                <Box
                  position="relative"
                  maxW="1050px"
                  w="100%"
                  borderRadius="40px"
                  overflow="hidden"
                  bg="rgba(255,255,255,0.06)"
                  border="1px solid rgba(255,255,255,0.08)"
                  backdropFilter="blur(24px)"
                  boxShadow="0 40px 100px rgba(0,0,0,0.35)"
                >
                  {/* Gold Accent Border */}
                  <Box
                    position="absolute"
                    inset="0"
                    borderRadius="40px"
                    padding="1px"
                    bgGradient="linear(to-br, rgba(212,175,55,0.5), transparent, rgba(175,56,0,0.4))"
                    WebkitMask="
                      linear-gradient(#fff 0 0) content-box,
                      linear-gradient(#fff 0 0)
                    "
                    WebkitMaskComposite="xor"
                    pointerEvents="none"
                  />

                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    minH={{ lg: "560px" }}
                  >
                    {/* Left Visual */}
                    <Box
                      flex="0.95"
                      position="relative"
                      overflow="hidden"
                    >
                      {/* Overlay */}
                      <Box
                        position="absolute"
                        inset={0}
                        bgGradient="
                          linear(to-t,
                          rgba(34,0,124,0.92),
                          rgba(34,0,124,0.25),
                          transparent)
                        "
                      />

                      {/* Floating Quote */}
                      <Flex
                        position="absolute"
                        top="30px"
                        left="30px"
                        w="82px"
                        h="82px"
                        borderRadius="full"
                        align="center"
                        justify="center"
                        bg="rgba(255,255,255,0.08)"
                        border="1px solid rgba(255,255,255,0.14)"
                        backdropFilter="blur(16px)"
                      >
                        <Quote size={34} color="#D4AF37" />
                      </Flex>
                    </Box>

                    {/* Right Content */}
                    <Flex
                      flex="1.05"
                      p={{ base: 8, md: 14 }}
                      justify="center"
                    >
                      <VStack
                        align="start"
                        justify="center"
                        gap={8}
                        h="100%"
                      >
                        {/* Rating */}
                        <HStack gap={2}>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill="#D4AF37"
                              color="#D4AF37"
                            />
                          ))}
                        </HStack>

                        {/* Quote */}
                        <Text
                          color="white"
                          fontWeight="300"
                          lineHeight={{ base: "1.9", md: "2" }}
                          fontSize={{ base: "lg", md: "2xl" }}
                          letterSpacing="0.01em"
                        >
                          “{testimonial.text}”
                        </Text>

                        {/* Divider */}
                        <Box
                          h="1px"
                          w="100px"
                          bgGradient="linear(to-r, #D4AF37, transparent)"
                        />

                        {/* Client */}
                        <Box>
                          <Heading
                            color="white"
                            fontSize={{ base: "xl", md: "2xl" }}
                            fontWeight="800"
                            letterSpacing="-0.02em"
                          >
                            {testimonial.name}
                          </Heading>

                          <Text
                            color="#D4AF37"
                            mt={2}
                            fontSize="sm"
                            fontWeight="600"
                            letterSpacing="0.18em"
                            textTransform="uppercase"
                          >
                            {testimonial.role}
                          </Text>
                        </Box>
                      </VStack>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Styling */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 0px !important;
          }

          .swiper-pagination-bullet {
            width: 11px;
            height: 11px;
            background: rgba(255, 255, 255, 0.25);
            opacity: 1;
            transition: all 0.4s ease;
          }

          .swiper-pagination-bullet-active {
            width: 38px;
            border-radius: 999px;
            background: linear-gradient(90deg, #d4af37, #af3800);
          }
        `}</style>
      </Container>
    </Box>
  );
};