"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface PackageCardProps {
  pkg: {
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    includes: string[];
    bestFor: string;
    accent: string;
    featured?: boolean;
  };
}

export default function PackageCard({
  pkg,
}: PackageCardProps) {
  return (
    <Box
      bg="white"
      borderRadius="28px"
      border="1px solid"
      borderColor={
        pkg.featured
          ? "rgba(175,56,0,0.14)"
          : "rgba(15,23,42,0.06)"
      }
      boxShadow="0 10px 40px rgba(15,23,42,0.04)"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow:
          "0 20px 50px rgba(15,23,42,0.08)",
      }}
    >
      <Box
        h="4px"
        bg={pkg.accent}
      />

      <Stack
        spacing={7}
        p={{ base: 6, md: 7 }}
      >
        {/* TOP */}
        <Flex
          justify="space-between"
          align="center"
        >
          <Flex
            w="60px"
            h="60px"
            borderRadius="18px"
            bg={`${pkg.accent}12`}
            align="center"
            justify="center"
          >
            <Icon
              as={pkg.icon}
              color={pkg.accent}
              boxSize={6}
            />
          </Flex>

          {pkg.featured && (
            <Badge
              bg="rgba(175,56,0,0.08)"
              color="#AF3800"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="0.65rem"
              fontWeight="700"
            >
              POPULAR
            </Badge>
          )}
        </Flex>

        {/* CONTENT */}
        <Box>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="1.2"
            letterSpacing="-0.03em"
            color="#111827"
            mb={3}
          >
            {pkg.title}
          </Heading>

          <Text
            color={pkg.accent}
            fontWeight="600"
            mb={4}
          >
            {pkg.subtitle}
          </Text>

          <Text
            color="gray.600"
            lineHeight="1.9"
          >
            {pkg.description}
          </Text>
        </Box>

        {/* SERVICES */}
        <Stack spacing={4}>
          {pkg.includes.map((item, i) => (
            <HStack
              key={i}
              align="flex-start"
              spacing={3}
            >
              <Icon
                as={CheckCircle2}
                color={pkg.accent}
                boxSize={4.5}
                mt="3px"
                flexShrink={0}
              />

              <Text
                color="gray.700"
                fontSize="sm"
                lineHeight="1.8"
              >
                {item}
              </Text>
            </HStack>
          ))}
        </Stack>

        {/* BEST FOR */}
        <Box
          pt={2}
          borderTop="1px solid rgba(15,23,42,0.06)"
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.08em"
            color="#22007C"
            textTransform="uppercase"
            mb={2}
          >
            Best For
          </Text>

          <Text
            color="gray.600"
            lineHeight="1.8"
          >
            {pkg.bestFor}
          </Text>
        </Box>

        {/* CTA */}
        <Button
          h="54px"
          bg={pkg.featured ? "#AF3800" : "#22007C"}
          color="white"
          borderRadius="full"
          fontWeight="600"
          rightIcon={<ArrowRight size={17} />}
          _hover={{
            bg: pkg.featured
              ? "#922d00"
              : "#160052",
          }}
        >
          Book Consultation
        </Button>
      </Stack>
    </Box>
  );
}