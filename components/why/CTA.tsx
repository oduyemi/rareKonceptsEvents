"use client";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight, Gem, HeartHandshake } from "lucide-react";
import "animate.css";


export const WhyChooseCTA = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 30,
      }}
      className="ps-5 text-center"
      bg="#0B071A"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(135deg, rgba(34,0,124,0.95), rgba(11,7,26,1))"
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex={2}
      >
        <VStack
          textAlign="center"
          gap={8}
        >
          <Flex
            w="90px"
            h="90px"
            borderRadius="full"
            bg="rgba(255,255,255,0.08)"
            border="1px solid rgba(255,255,255,0.08)"
            align="center"
            justify="center"
            backdropFilter="blur(12px)"
          >
            <Gem size={38} color="#F6C453" />
          </Flex>

          <Heading
            color="white"
            fontWeight="900"
            lineHeight="0.94"
            letterSpacing="-0.08em"
            fontSize={{
              base: "2.8rem",
              md: "5.5rem",
            }}
            maxW="920px"
          >
            Let’s Create Something
            <Text as="span" color="#F6C453">
              {" "}
              Extraordinary
            </Text>
          </Heading>

          <Text
            color="rgba(255,255,255,0.72)"
            fontSize="lg"
            lineHeight="2"
            maxW="760px"
          >
            From luxury weddings to premium corporate events, we transform your vision into unforgettable experiences.
          </Text>

          <HStack gap={5} flexWrap="wrap" justify="center">
            <Link href="/contact">
              <Button
                h="64px"
                px={9}
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
                  <Text>Get Started</Text>
                  <ArrowRight size={18} />
                </Flex>
              </Button>
            </Link>

            <Button
              h="64px"
              px={9}
              borderRadius="full"
              bg="rgba(255,255,255,0.08)"
              color="white"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(12px)"
              _hover={{
                bg: "rgba(255,255,255,0.12)",
              }}
            >
              <Flex align="center" gap={2}>
                <HeartHandshake size={18} />
                <Text>Book Consultation</Text>
              </Flex>
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
