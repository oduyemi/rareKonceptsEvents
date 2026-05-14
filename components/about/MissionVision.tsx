"use client";

import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  Eye,
  Sparkles,
  Target,
} from "lucide-react";

export const MissionVision = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 32,
      }}
      bg="white"
      position="relative"
      overflow="hidden"
      className="ps-md-4"
    >
      {/* AMBIENT LIGHTS */}
      <Box
        position="absolute"
        top="-180px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.05}
        filter="blur(120px)"
      />

      <Box
        position="absolute"
        bottom="-220px"
        right="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.05}
        filter="blur(130px)"
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
            backdropFilter="blur(12px)"
          >
            OUR PURPOSE
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
            maxW="980px"
          >
            Driven By
            <Text
              as="span"
              display="block"
              color="#22007C"
            >
              Vision & Purpose
            </Text>
          </Heading>

          <Text
            maxW="780px"
            color="gray.600"
            lineHeight="2"
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            Every experience we create is rooted in
            intentional design, emotional connection,
            and timeless sophistication.
          </Text>
        </VStack>

        {/* CONTENT GRID */}
        <Grid
          templateColumns={{
            base: "1fr",
            xl: "1fr 1fr",
          }}
          gap={8}
        >
          {/* VISION */}
          <GridItem>
            <GlassCard
              icon={Eye}
              title="Our Vision"
              accent="#22007C"
              glow="rgba(34,0,124,0.18)"
              text="
                To become Africa’s most sought-after
                event styling and planning brand,
                known for creating timeless,
                detail-rich, and emotion-driven
                celebrations that leave lasting
                impressions across the globe.
              "
            />
          </GridItem>

          {/* MISSION */}
          <GridItem>
            <GlassCard
              icon={Target}
              title="Our Mission"
              accent="#AF3800"
              glow="rgba(175,56,0,0.18)"
              text="
                At Rarekoncepts Events n Decor, our
                mission is to craft extraordinary
                event experiences that reflect the
                distinct personality, style, and
                vision of our clients.

                We exist to transform ordinary spaces
                into captivating moments through
                thoughtful planning, aesthetic
                styling, and seamless execution.

                We deliver events that don’t just
                look good — but feel unforgettable.
              "
            />
          </GridItem>
        </Grid>

        {/* BOTTOM LUXURY STRIP */}
        <Box
          mt={{
            base: 14,
            md: 20,
          }}
          borderRadius="38px"
          overflow="hidden"
          position="relative"
          bg="#22007C"
        >
          <Box
            position="absolute"
            top="-60px"
            right="-60px"
            w="240px"
            h="240px"
            borderRadius="full"
            bg="#F6C453"
            opacity={0.16}
            filter="blur(90px)"
          />

          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            justify="space-between"
            align={{
              base: "flex-start",
              lg: "center",
            }}
            gap={10}
            px={{
              base: 7,
              md: 12,
            }}
            py={{
              base: 10,
              md: 12,
            }}
            position="relative"
            zIndex={2}
          >
            <HStack
              gap={5}
              align="flex-start"
            >
              <Flex
                w="72px"
                h="72px"
                borderRadius="24px"
                bg="rgba(255,255,255,0.12)"
                align="center"
                justify="center"
                backdropFilter="blur(16px)"
              >
                <Sparkles
                  size={30}
                  color="#F6C453"
                />
              </Flex>

              <Stack gap={3}>
                <Heading
                  color="white"
                  lineHeight="0.95"
                  letterSpacing="-0.05em"
                  fontWeight="800"
                  fontSize={{
                    base: "2rem",
                    md: "3.5rem",
                  }}
                >
                  Luxury With Meaning.
                </Heading>

                <Text
                  color="rgba(255,255,255,0.72)"
                  lineHeight="2"
                  maxW="760px"
                >
                  We combine refined aesthetics,
                  emotional storytelling, and
                  intentional execution to create
                  experiences guests never forget.
                </Text>
              </Stack>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

function GlassCard({
  icon: Icon,
  title,
  text,
  accent,
  glow,
}: {
  icon: any;
  title: string;
  text: string;
  accent: string;
  glow: string;
}) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="36px"
      bg="rgba(255,255,255,0.78)"
      backdropFilter="blur(24px)"
      border="1px solid rgba(15,23,42,0.06)"
      boxShadow="
        0 10px 40px rgba(15,23,42,0.05),
        0 30px 80px rgba(15,23,42,0.06)
      "
      minH="100%"
    >
      {/* GLOW */}
      <Box
        position="absolute"
        top="-60px"
        right="-60px"
        w="220px"
        h="220px"
        borderRadius="full"
        bg={glow}
        filter="blur(90px)"
      />

      <VStack
        align="start"
        gap={8}
        p={{
          base: 7,
          md: 10,
        }}
        position="relative"
        zIndex={2}
      >
        <Flex
          w="78px"
          h="78px"
          borderRadius="26px"
          bg={`${accent}12`}
          border={`1px solid ${accent}18`}
          align="center"
          justify="center"
          backdropFilter="blur(12px)"
        >
          {Icon && (
            <Icon
              size={34}
              color={accent}
            />
          )}
        </Flex>

        <Stack gap={5}>
          <Heading
            color="#111827"
            lineHeight="0.95"
            letterSpacing="-0.05em"
            fontWeight="800"
            fontSize={{
              base: "2.4rem",
              md: "4rem",
            }}
          >
            {title}
          </Heading>

          <Text
            color="gray.600"
            lineHeight="2.1"
            fontSize={{
              base: "md",
              md: "lg",
            }}
            whiteSpace="pre-line"
          >
            {text}
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
}