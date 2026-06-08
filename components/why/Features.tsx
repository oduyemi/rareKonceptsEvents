"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  CalendarCheck2,
  Crown,
  ShieldCheck,
  Users,
} from "lucide-react";
import "animate.css";

const features = [
  {
    icon: Crown,
    title: "Luxury Experience",
    description:
      "We curate elegant celebrations with refined styling, premium details, and unforgettable guest experiences.",
  },
  {
    icon: CalendarCheck2,
    title: "Seamless Coordination",
    description:
      "From planning to execution, we manage every detail with precision, professionalism, and creativity.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Our experienced event professionals work closely with you to bring your vision to life effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Excellence",
    description:
      "We are trusted for delivering exceptional events with consistency, reliability, and sophistication.",
  },
];


export const WhyChooseFeatures = () => {
  return (
    <Box py={{ base: 24, md: 32 }} bg="white">
      <Container maxW="1500px">
        <VStack
          textAlign="center"
          gap={5}
          mb={{ base: 14, md: 20 }}
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
          >
            OUR ADVANTAGE
          </Badge>

          <Heading
            fontSize={{
              base: "2.8rem",
              md: "5rem",
            }}
            lineHeight="0.94"
            letterSpacing="-0.07em"
            color="#111827"
            fontWeight="900"
            maxW="920px"
          >
            Excellence In Every
            <Text as="span" color="#22007C">
              {" "}
              Detail
            </Text>
          </Heading>

          <Text
            color="gray.600"
            maxW="760px"
            lineHeight="2"
            fontSize="lg"
          >
            We design elevated experiences that blend creativity, elegance, and flawless execution.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            xl: 4,
          }}
          gap={8}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="34px"
              p={{
                base: 8,
                md: 10,
              }}
              bg="white"
              border="1px solid rgba(34,0,124,0.06)"
              boxShadow="0 25px 70px rgba(15,23,42,0.06)"
              transition="all 0.4s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 30px 90px rgba(34,0,124,0.10)",
              }}
            >
              <Box
                position="absolute"
                top="-80px"
                right="-80px"
                w="180px"
                h="180px"
                borderRadius="full"
                bg="#22007C"
                opacity={0.04}
                filter="blur(60px)"
              />

              <VStack align="start" gap={6}>
                <Flex
                  w="82px"
                  h="82px"
                  borderRadius="28px"
                  bg="rgba(34,0,124,0.06)"
                  align="center"
                  justify="center"
                >
                  <Icon
                    as={feature.icon}
                    boxSize={9}
                    color="#22007C"
                  />
                </Flex>

                <Heading
                  fontSize="2rem"
                  color="#111827"
                  lineHeight="1"
                  letterSpacing="-0.05em"
                >
                  {feature.title}
                </Heading>

                <Text
                  color="gray.600"
                  lineHeight="2"
                  fontSize="md"
                >
                  {feature.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};