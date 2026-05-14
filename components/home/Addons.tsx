"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckCircle2 } from "lucide-react";

const addOns = [
  "Additional coordination staff",
  "Luxury styling upgrades",
  "Bespoke branding & print solutions",
  "Destination planning support",
  "Extended planning coverage",
  "VIP guest experience management",
];

export default function OptionalAddOns() {
  return (
    <Box
      mt={{ base: 20, md: 28 }}
      bg="#22007C"
      py={{ base: 18, md: 24 }}
      className="ps-md-5"
    >
      <Container
        maxW="1300px"
        px={{ base: 6, md: 8 }}
      >
        <VStack
          spacing={5}
          textAlign="center"
          maxW="720px"
          mx="auto"
          mb={12}
        >
          <Badge
            bg="rgba(255,255,255,0.1)"
            color="white"
            px={4}
            py={1.5}
            borderRadius="full"
            fontSize="0.7rem"
            letterSpacing="0.12em"
          >
            OPTIONAL ADD-ONS
          </Badge>

          <Heading
            color="white"
            fontWeight="800"
            letterSpacing="-0.04em"
            fontSize={{ base: "2rem", md: "3.5rem" }}
            lineHeight="1"
          >
            Elevate The Experience
          </Heading>

          <Text
            color="rgba(255,255,255,0.72)"
            lineHeight="1.9"
            fontSize={{ base: "md", md: "lg" }}
          >
            Premium enhancements curated for elevated guest experiences
            and refined event execution.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={5}
        >
          {addOns.map((item, index) => (
            <Flex
              key={index}
              align="center"
              gap={4}
              bg="rgba(255,255,255,0.06)"
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius="20px"
              px={5}
              py={4}
            >
              <Icon
                as={CheckCircle2}
                color="#F6C453"
                boxSize={5}
                flexShrink={0}
              />

              <Text
                color="white"
                lineHeight="1.7"
              >
                {item}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}