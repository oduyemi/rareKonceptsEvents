"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const stats = [
  {
    value: "150+",
    label: "Luxury Events Executed",
    description:
      "Elegant celebrations and premium corporate experiences delivered flawlessly.",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description:
      "Trusted for seamless coordination, professionalism, and elevated execution.",
  },
  {
    value: "12+",
    label: "Years of Experience",
    description:
      "Over a decade crafting refined experiences with attention to every detail.",
  },
  {
    value: "35+",
    label: "Elite Vendor Partners",
    description:
      "Strong partnerships with luxury venues and trusted event professionals.",
  },
];

export const TrustedExperience = () => {
  return (
    <Box
      position="relative"
      mt={{ base: "-50px", md: "-90px" }}
      zIndex={10}
      px={{ base: 5, md: 8 }}
      className="ps-md-5 ms-md-5"
    >
      <Container
        maxW="1320px"
        px={0}
      >
        {/* GLASS CARD */}
        <Box
          position="relative"
          overflow="hidden"
          borderRadius={{ base: "30px", md: "42px" }}
          bg="rgba(255,255,255,0.72)"
          backdropFilter="blur(24px)"
          border="1px solid rgba(255,255,255,0.6)"
          boxShadow="
            0 10px 40px rgba(15,23,42,0.06),
            0 30px 80px rgba(15,23,42,0.08)
          "
        >
          {/* BACKGROUND BLURS */}
          <Box
            position="absolute"
            top="-120px"
            left="-120px"
            w="320px"
            h="320px"
            borderRadius="full"
            bg="#22007C"
            opacity={0.08}
            filter="blur(90px)"
          />

          <Box
            position="absolute"
            bottom="-120px"
            right="-100px"
            w="280px"
            h="280px"
            borderRadius="full"
            bg="#AF3800"
            opacity={0.12}
            filter="blur(90px)"
          />

          <Grid
            templateColumns={{
              base: "1fr",
              lg: "430px 1fr",
            }}
            position="relative"
            zIndex={2}
          >
            {/* LEFT SECTION */}
            <Flex
              position="relative"
              overflow="hidden"
              px={{ base: 7, md: 10 }}
              py={{ base: 10, md: 12 }}
              align="center"
              borderRight={{
                base: "none",
                lg: "1px solid rgba(15,23,42,0.06)",
              }}
            >
              {/* INNER GLASS */}
              <Box
                position="absolute"
                inset={5}
                borderRadius="28px"
                bg="linear-gradient(
                  135deg,
                  rgba(34,0,124,0.92),
                  rgba(34,0,124,0.82)
                )"
                backdropFilter="blur(18px)"
                overflow="hidden"
              >
                {/* GOLD LIGHT */}
                <Box
                  position="absolute"
                  top="-60px"
                  right="-60px"
                  w="220px"
                  h="220px"
                  borderRadius="full"
                  bg="#C9A227"
                  opacity={0.2}
                  filter="blur(70px)"
                />
              </Box>

              <VStack
                align="start"
                spacing={6}
                position="relative"
                zIndex={2}
              >
                <Box>
                  <Text
                    color="#F6D27A"
                    fontSize="0.75rem"
                    fontWeight="700"
                    letterSpacing="0.16em"
                    textTransform="uppercase"
                    mb={3}
                  >
                    Trusted Luxury Experience
                  </Text>

                  <Heading
                    color="white"
                    fontSize={{ base: "2.2rem", md: "3.4rem" }}
                    lineHeight="0.95"
                    letterSpacing="-0.05em"
                    fontWeight="800"
                  >
                    Elegant Events.
                    <Text
                      as="span"
                      display="block"
                      color="#F6D27A"
                    >
                      Seamlessly Delivered.
                    </Text>
                  </Heading>
                </Box>

                <Text
                  color="rgba(255,255,255,0.78)"
                  lineHeight="1.9"
                  fontSize={{ base: "md", md: "lg" }}
                  maxW="360px"
                >
                  Curated luxury experiences crafted with precision,
                  creativity, and flawless event coordination.
                </Text>

                {/* TRUST TAGS */}
                <HStack
                  spacing={3}
                  flexWrap="wrap"
                >
                  {[
                    "Luxury Weddings",
                    "Corporate Events",
                    "Destination Experiences",
                  ].map((item) => (
                    <Box
                      key={item}
                      px={4}
                      py={2}
                      borderRadius="full"
                      bg="rgba(255,255,255,0.08)"
                      border="1px solid rgba(255,255,255,0.12)"
                      backdropFilter="blur(10px)"
                    >
                      <Text
                        fontSize="sm"
                        color="white"
                        fontWeight="500"
                      >
                        {item}
                      </Text>
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </Flex>

            {/* RIGHT SECTION */}
            <Box
              px={{ base: 7, md: 10 }}
              py={{ base: 10, md: 12 }}
            >
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                }}
                gap={{ base: 6, md: 7 }}
              >
                {stats.map((stat, index) => (
                  <Box
                    key={index}
                    position="relative"
                    overflow="hidden"
                    borderRadius="28px"
                    bg="rgba(255,255,255,0.55)"
                    backdropFilter="blur(16px)"
                    border="1px solid rgba(255,255,255,0.7)"
                    p={{ base: 6, md: 7 }}
                    transition="all 0.35s ease"
                    boxShadow="0 10px 30px rgba(15,23,42,0.04)"
                    _hover={{
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 20px 50px rgba(15,23,42,0.08)",
                    }}
                  >
                    {/* LIGHT GRADIENT */}
                    <Box
                      position="absolute"
                      top="-50px"
                      right="-50px"
                      w="140px"
                      h="140px"
                      borderRadius="full"
                      bg={
                        index % 2 === 0
                          ? "rgba(175,56,0,0.12)"
                          : "rgba(201,162,39,0.16)"
                      }
                      filter="blur(50px)"
                    />

                    <Stack
                      spacing={4}
                      position="relative"
                      zIndex={2}
                    >
                      <Heading
                        color="#22007C"
                        fontSize={{
                          base: "3rem",
                          md: "3.7rem",
                        }}
                        lineHeight="1"
                        letterSpacing="-0.06em"
                        fontWeight="800"
                      >
                        {stat.value}
                      </Heading>

                      <Box
                        w="52px"
                        h="4px"
                        borderRadius="full"
                        bg={
                          index % 2 === 0
                            ? "#AF3800"
                            : "#C9A227"
                        }
                      />

                      <Text
                        color="#111827"
                        fontWeight="700"
                        fontSize={{
                          base: "lg",
                          md: "xl",
                        }}
                        lineHeight="1.4"
                      >
                        {stat.label}
                      </Text>

                      <Text
                        color="gray.600"
                        lineHeight="1.9"
                      >
                        {stat.description}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}