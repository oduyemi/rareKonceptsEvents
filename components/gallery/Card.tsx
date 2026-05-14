"use client";
import Image from "next/image";

import {
  Badge,
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";

import {
  ChevronRight,
} from "lucide-react";

export const GalleryCard =({
    image,
    index,
    onClick,
  }: {
    image: {
      src: string;
      title: string;
      category: string;
    };
    index: number;
    onClick: () => void;
  }) => {
    const tall = index % 5 === 0;
  
    return (
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="34px"
        h={{
          base: "340px",
          md: tall ? "620px" : "420px",
        }}
        cursor="pointer"
        role="group"
        onClick={onClick}
        isolation="isolate"
        bg="gray.100"
      >
        {/* IMAGE */}
        <Image
          src={image.src}
          alt={image.title}
          fill
          style={{
            objectFit: "cover",
            transition:
              "transform 1.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
  
        {/* OVERLAY */}
        <Box
          position="absolute"
          inset={0}
          bg="
            linear-gradient(
              to top,
              rgba(0,0,0,0.78),
              rgba(0,0,0,0.14),
              rgba(0,0,0,0.02)
            )
          "
        />
  
        {/* HOVER LIGHT */}
        <Box
          position="absolute"
          inset={0}
          bg="
            linear-gradient(
              135deg,
              rgba(34,0,124,0.16),
              rgba(175,56,0,0.10)
            )
          "
          opacity={0}
          transition="0.4s ease"
          _groupHover={{
            opacity: 1,
          }}
        />
  
        {/* TOP BUTTON */}
        <Flex
          position="absolute"
          top={5}
          right={5}
          w="54px"
          h="54px"
          borderRadius="full"
          align="center"
          justify="center"
          bg="rgba(255,255,255,0.12)"
          border="1px solid rgba(255,255,255,0.12)"
          backdropFilter="blur(18px)"
          opacity={0}
          transform="translateY(10px)"
          transition="all 0.35s ease"
          _groupHover={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
        >
          <ChevronRight
            size={20}
            color="white"
          />
        </Flex>
  
        {/* CONTENT */}
        <Flex
          position="absolute"
          inset={0}
          direction="column"
          justify="flex-end"
          p={{
            base: 5,
            md: 7,
          }}
        >
          <Stack spacing={4}>
            <Badge
              alignSelf="flex-start"
              bg="rgba(255,255,255,0.12)"
              color="white"
              border="1px solid rgba(255,255,255,0.12)"
              backdropFilter="blur(12px)"
              px={4}
              py={1.5}
              borderRadius="full"
              fontSize="0.68rem"
              letterSpacing="0.1em"
            >
              {image.category}
            </Badge>
  
            <Heading
              color="white"
              lineHeight="0.96"
              fontWeight="700"
              letterSpacing="-0.05em"
              fontSize={{
                base: "1.8rem",
                md: tall ? "3rem" : "2.2rem",
              }}
              maxW="90%"
            >
              {image.title}
            </Heading>
          </Stack>
        </Flex>
      </Box>
    );
  }