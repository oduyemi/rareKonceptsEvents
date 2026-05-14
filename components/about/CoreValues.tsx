"use client";

import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  BadgeCheck,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Creativity",
    description:
      "We think beyond the ordinary to bring bold and personalized ideas to life.",
    icon: Sparkles,
  },
  {
    title: "Excellence",
    description:
      "We deliver flawless, premium results down to the tiniest detail.",
    icon: Star,
  },
  {
    title: "Integrity",
    description:
      "We keep our word, work transparently, and respect your trust.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centricity",
    description:
      "Every event is crafted around your personality and purpose.",
    icon: Users,
  },
  {
    title: "Professionalism",
    description:
      "We work with class, clarity, and grace — always.",
    icon: BadgeCheck,
  },
  {
    title: "Innovation",
    description:
      "We embrace new trends, techniques, and technologies.",
    icon: Lightbulb,
  },
  {
    title: "Passion",
    description:
      "We love what we do, and it reflects in every moment we create.",
    icon: Heart,
  },
];

export const CoreValues = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 32,
      }}
      bg="#fafafa"
      position="relative"
      overflow="hidden"
      className="ps-md-4"
    >
      {/* LIGHTS */}
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
        {/* HEADER */}
        <VStack
          textAlign="center"
          gap={6}
          mb={{
            base: 16,
            md: 20,
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
          >
            OUR CORE VALUES
          </Badge>

          <Heading
            color="#111827"
            fontWeight="800"
            lineHeight="0.92"
            letterSpacing="-0.08em"
            fontSize={{
              base: "3.2rem",
              md: "6rem",
            }}
            maxW="1000px"
          >
            The Principles Behind
            <Text
              as="span"
              display="block"
              color="#22007C"
            >
              Every Experience
            </Text>
          </Heading>

          <Text
            maxW="760px"
            color="gray.600"
            lineHeight="2"
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            These values shape how we design,
            collaborate, create, and deliver
            unforgettable moments.
          </Text>
        </VStack>

        {/* VALUES GRID */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <Box
                key={index}
                position="relative"
                overflow="hidden"
                borderRadius="32px"
                bg="rgba(255,255,255,0.75)"
                backdropFilter="blur(24px)"
                border="1px solid rgba(15,23,42,0.06)"
                p={{
                  base: 7,
                  md: 8,
                }}
                transition="0.45s ease"
                boxShadow="
                  0 10px 30px rgba(15,23,42,0.04),
                  0 25px 70px rgba(15,23,42,0.05)
                "
                _hover={{
                  transform: "translateY(-8px)",
                  borderColor:
                    "rgba(34,0,124,0.14)",
                  boxShadow:
                    "0 25px 70px rgba(34,0,124,0.10)",
                }}
              >
                <Box
                  position="absolute"
                  top="-40px"
                  right="-40px"
                  w="140px"
                  h="140px"
                  borderRadius="full"
                  bg="rgba(34,0,124,0.06)"
                  filter="blur(70px)"
                />

                <Stack
                  gap={7}
                  position="relative"
                  zIndex={2}
                >
                  <Flex
                    w="74px"
                    h="74px"
                    borderRadius="24px"
                    bg="rgba(34,0,124,0.06)"
                    border="1px solid rgba(34,0,124,0.08)"
                    align="center"
                    justify="center"
                    backdropFilter="blur(14px)"
                  >
                    <IconComponent
                      size={30}
                      color="#AF3800"
                    />
                  </Flex>

                  <Stack gap={4}>
                    <Heading
                      color="#111827"
                      lineHeight="1"
                      letterSpacing="-0.04em"
                      fontWeight="800"
                      fontSize={{
                        base: "1.7rem",
                        md: "2rem",
                      }}
                    >
                      {value.title}
                    </Heading>

                    <Text
                      color="gray.600"
                      lineHeight="2"
                    >
                      {value.description}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};