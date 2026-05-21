"use client";
import{ useState } from "react";
import Image from "next/image";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  caption: string;
  accent: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Abiola Awoyemi-Sonubi",
    role: "Lead Planner / Principal Consultant",
    image: "/images/team/abiola.jpeg",
    accent: "#22007C",
    caption:
      "Abiola is the lead visionary behind Rarekoncepts Events & Décor — overseeing planning, logistics, vendor management, and end-to-end event execution. With a proven track record in delivering well-coordinated and memorable celebrations, she provides strategic guidance, ensures seamless flow on event day, and maintains direct communication with clients to bring their dreams to life with excellence.",
  },

  {
    name: "Sheilla Adeniji",
    role: "Head Decorator",
    image: "/images/team/sheila.jpeg",
    accent: "#AF3800",
    caption:
      "Sheilla leads the décor execution team, specializing in aesthetic detailing, spatial styling, and ambience creation. She brings concepts to life through creative interpretation, color coordination, floral designs, and décor installation, ensuring every event space embodies class, warmth, and personality.",
  },

  {
    name: "Omotayo John Fagbohunmi",
    role: "Lead Event Designer",
    image: "/images/team/john.jpeg",
    accent: "#22007C",
    caption:
      "Omotayo is responsible for concept development, creative direction, and thematic styling. From mood boards, layouts, and event flow design, she ensures each celebration has its own unique story. Her design expertise ensures that the décor and experience align perfectly with clients’ personalities and event goals.",
  },

  {
    name: "Temitope R Oyedeji",
    role: "Event Planning Assistant",
    image: "/images/team/temitope.jpeg",
    accent: "#AF3800",
    caption:
      "Temitope supports planning operations, documentation, vendor follow-ups, and guest coordination. Her attention to detail and prompt communication keep processes smooth throughout pre-event preparations and on-site activities.",
  },

  {
    name: "Adetutu Odunukan",
    role: "Event Planning Assistant",
    image: "/images/team/adetutu.jpeg",
    accent: "#22007C",
    caption:
      "Adetutu provides operational support for logistics, timeline execution, setup coordination, and backstage management. She plays a vital role in ensuring tasks are executed efficiently and all elements come together seamlessly on the event day.",
  },
];

export default function OurTeam() {
  return (
    <Box
      bg="#fafafa"
      position="relative"
      overflow="hidden"
      py={{
        base: 24,
        md: 32,
      }}
    >
      {/* PREMIUM AMBIENT BLOBS */}
      <Box
        position="absolute"
        top="-220px"
        left="-120px"
        w="520px"
        h="520px"
        bg="#22007C"
        opacity={0.06}
        borderRadius="full"
        filter="blur(160px)"
      />

      <Box
        position="absolute"
        bottom="-240px"
        right="-120px"
        w="520px"
        h="520px"
        bg="#AF3800"
        opacity={0.06}
        borderRadius="full"
        filter="blur(160px)"
      />

      <Container
        maxW="1550px"
        position="relative"
        zIndex={2}
      >
        {/* HEADER */}
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          mb={{
            base: 16,
            md: 24,
          }}
        >
          <Badge
            px={6}
            py={2.5}
            borderRadius="full"
            bg="rgba(34,0,124,0.06)"
            color="#22007C"
            border="1px solid rgba(34,0,124,0.08)"
            fontWeight="700"
            letterSpacing="0.18em"
            fontSize="0.72rem"
            backdropFilter="blur(10px)"
          >
            OUR TEAM PROFILE
          </Badge>

          <Heading
            mt={8}
            fontWeight="900"
            lineHeight="0.88"
            letterSpacing="-0.08em"
            color="#111827"
            maxW="1100px"
            fontSize={{
              base: "3.2rem",
              md: "6.5rem",
            }}
          >
            The Minds Behind
            <Text
              as="span"
              display="block"
              color="#22007C"
            >
              Rarekoncepts
            </Text>
          </Heading>

          <Text
            mt={8}
            maxW="820px"
            color="gray.600"
            lineHeight="2"
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            Collectively, our team brings strategy,
            creativity, and precision execution —
            ensuring every client feels seen, valued,
            and beautifully celebrated.
          </Text>
        </Flex>

        {/* GRID */}
        <Grid
  templateColumns={{
    base: "1fr",
    md: "repeat(2,1fr)",
    xl: "repeat(3,1fr)",
  }}
  gap={10}
>
  {teamMembers.map((member, index) => {
    const [hovered, setHovered] =
      useState(false);

    return (
      <Box
        key={index}
        position="relative"
        onMouseEnter={() =>
          setHovered(true)
        }
        onMouseLeave={() =>
          setHovered(false)
        }
        transition="
          transform .8s cubic-bezier(.22,1,.36,1)
        "
        transform={
          hovered
            ? "translateY(-10px)"
            : "translateY(0px)"
        }
      >
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="40px"
          h={{
            base: "620px",
            md: "760px",
          }}
          bg="#f4f4f4"
          boxShadow={
            hovered
              ? "0 40px 100px rgba(15,23,42,0.12)"
              : "0 20px 60px rgba(15,23,42,0.06)"
          }
          transition="
            all .8s cubic-bezier(.22,1,.36,1)
          "
        >
          {/* IMAGE */}
          <Box
            position="absolute"
            inset={0}
            transition="
              transform 1.6s cubic-bezier(.22,1,.36,1),
              filter 1.2s ease
            "
            transform={
              hovered
                ? "scale(1.06)"
                : "scale(1)"
            }
            filter={
              hovered
                ? "grayscale(0%) brightness(0.72)"
                : "grayscale(18%) brightness(0.88)"
            }
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>

          {/* SOFT CINEMATIC OVERLAY */}
          <Box
            position="absolute"
            inset={0}
            bg={
              hovered
                ? `
                linear-gradient(
                  to top,
                  rgba(0,0,0,0.82),
                  rgba(0,0,0,0.35),
                  rgba(0,0,0,0.08)
                )
              `
                : `
                linear-gradient(
                  to top,
                  rgba(0,0,0,0.52),
                  rgba(0,0,0,0.16),
                  rgba(0,0,0,0.02)
                )
              `
            }
            transition=".8s ease"
          />

          {/* GOLD AMBIENT */}
          <Box
            position="absolute"
            top="-120px"
            right="-120px"
            w="260px"
            h="260px"
            borderRadius="full"
            bg="#D4AF37"
            opacity={hovered ? 0.14 : 0}
            filter="blur(100px)"
            transition=".9s ease"
          />

          {/* DEFAULT CONTENT */}
          <Flex
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={8}
            zIndex={3}
            opacity={hovered ? 0 : 1}
            transform={
              hovered
                ? "translateY(30px)"
                : "translateY(0px)"
            }
            transition="
              all .55s cubic-bezier(.22,1,.36,1)
            "
          >
            <Box>
              <Text
                color="#D4AF37"
                fontSize="0.72rem"
                letterSpacing="0.18em"
                textTransform="uppercase"
                mb={4}
              >
                Rarekoncepts Team
              </Text>

              <Heading
                color="white"
                fontWeight="900"
                lineHeight="0.92"
                letterSpacing="-0.06em"
                fontSize={{
                  base: "2rem",
                  md: "2.6rem",
                }}
                maxW="420px"
              >
                {member.name}
              </Heading>

              <Text
                mt={4}
                color="rgba(255,255,255,0.70)"
                textTransform="uppercase"
                letterSpacing="0.14em"
                fontSize="0.72rem"
              >
                {member.role}
              </Text>
            </Box>
          </Flex>

          {/* STORY REVEAL */}
          <Flex
            position="absolute"
            inset={0}
            align="center"
            justify="center"
            zIndex={4}
            p={8}
            opacity={hovered ? 1 : 0}
            transform={
              hovered
                ? "translateY(0px)"
                : "translateY(40px)"
            }
            transition="
              all .8s cubic-bezier(.22,1,.36,1)
            "
          >
            <Box
              bg="rgba(255,255,255,0.08)"
              backdropFilter="blur(28px)"
              border="
                1px solid rgba(255,255,255,0.10)
              "
              borderRadius="36px"
              p={{
                base: 7,
                md: 9,
              }}
              maxW="92%"
            >
              <Stack gap={6}>
                <Box>
                  <Text
                    color="#D4AF37"
                    fontSize="0.72rem"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    mb={3}
                  >
                    Team Profile
                  </Text>

                  <Heading
                    color="white"
                    fontWeight="800"
                    lineHeight="1"
                    letterSpacing="-0.05em"
                    fontSize={{
                      base: "1.7rem",
                      md: "2.2rem",
                    }}
                  >
                    {member.name}
                  </Heading>

                  <Text
                    mt={3}
                    color="
                      rgba(255,255,255,0.65)
                    "
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                    fontSize="0.7rem"
                  >
                    {member.role}
                  </Text>
                </Box>

                <Box
                  w="70px"
                  h="1px"
                  bg="
                    rgba(255,255,255,0.18)
                  "
                />

                <Text
                  color="
                    rgba(255,255,255,0.88)
                  "
                  lineHeight="2"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  {member.caption}
                </Text>
              </Stack>
            </Box>
          </Flex>

          {/* SUBTLE BORDER */}
          <Box
            position="absolute"
            inset="1px"
            borderRadius="39px"
            border="
              1px solid rgba(255,255,255,0.08)
            "
            pointerEvents="none"
          />
        </Box>
      </Box>
    );
  })}
</Grid>

        {/* BOTTOM SUMMARY SECTION */}
        <Flex
          mt={{
            base: 20,
            md: 28,
          }}
          justify="center"
        >
          <Box
            maxW="1100px"
            textAlign="center"
            borderRadius="40px"
            bg="white"
            border="1px solid rgba(15,23,42,0.06)"
            p={{
              base: 8,
              md: 12,
            }}
            boxShadow="
              0 20px 60px rgba(15,23,42,0.05)
            "
          >
            <Badge
              bg="rgba(212,175,55,0.12)"
              color="#8B6B00"
              px={5}
              py={2}
              borderRadius="full"
              letterSpacing="0.16em"
              fontSize="0.68rem"
              mb={6}
            >
              IN SUMMARY
            </Badge>

            <Heading
              color="#111827"
              fontWeight="900"
              lineHeight="1"
              letterSpacing="-0.06em"
              fontSize={{
                base: "2.3rem",
                md: "4rem",
              }}
            >
              Strategy. Creativity.
              <Text
                as="span"
                color="#22007C"
              >
                {" "}
                Precision.
              </Text>
            </Heading>

            <Text
              mt={6}
              color="gray.600"
              lineHeight="2"
              maxW="760px"
              mx="auto"
              fontSize={{
                base: "md",
                md: "lg",
              }}
            >
              Every Rarekoncepts experience is
              carefully curated through collaboration,
              innovation, elegant styling, and flawless
              execution — creating timeless celebrations
              that leave lasting impressions.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}