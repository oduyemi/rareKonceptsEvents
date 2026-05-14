"use client";
import Image from "next/image";

import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  infoLeft: string[];
  infoRight: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Abiola Awoyemi-Sonubi",
    role: "Lead Planner / Principal Consultant",
    image: "/images/team/abiola.png",
    infoLeft: [
      "Planning",
      "Logistics",
      "Vendor Mgmt",
      "Execution",
      "Client Strategy",
      "Coordination",
    ],
    infoRight: [
      "Luxury Events",
      "Weddings",
      "Corporate",
      "Timelines",
      "Guest Flow",
      "Excellence",
    ],
  },

  {
    name: "Sheilla Adeniji",
    role: "Head Decorator",
    image: "/images/team-sheilla.jpg",
    infoLeft: [
      "Spatial Styling",
      "Floral Design",
      "Color Curation",
      "Venue Decor",
      "Luxury Ambience",
      "Installations",
    ],
    infoRight: [
      "Elegant Themes",
      "Backdrop Design",
      "Aesthetics",
      "Tablescapes",
      "Atmosphere",
      "Creative Styling",
    ],
  },

  {
    name: "Omotayo J. Fagbohunmi",
    role: "Lead Event Designer",
    image: "/images/team-omotayo.jpg",
    infoLeft: [
      "Mood Boards",
      "Concept Design",
      "Themes",
      "Storytelling",
      "Layouts",
      "Event Flow",
    ],
    infoRight: [
      "Creative Direction",
      "Luxury Styling",
      "Design Strategy",
      "Immersive Spaces",
      "Experiences",
      "Innovation",
    ],
  },

  {
    name: "Temitope R Oyedeji",
    role: "Event Planning Assistant",
    image: "/images/team-temitope.jpg",
    infoLeft: [
      "Documentation",
      "Vendor Follow-up",
      "Coordination",
      "Communication",
      "Scheduling",
      "Operations",
    ],
    infoRight: [
      "Guest Support",
      "Planning Ops",
      "Timelines",
      "Detail-Oriented",
      "Execution",
      "Event Prep",
    ],
  },

  {
    name: "Adetutu Odunukan",
    role: "Event Planning Assistant",
    image: "/images/team-adetutu.jpg",
    infoLeft: [
      "Setup Mgmt",
      "Backstage Ops",
      "Logistics",
      "Execution",
      "Coordination",
      "Event Support",
    ],
    infoRight: [
      "Venue Setup",
      "Efficiency",
      "Professionalism",
      "Precision",
      "Event Day",
      "Seamless Flow",
    ],
  },
];

export default function OurTeam() {
  return (
    <Box
      bg="white"
      className="ps-md-2"
      py={{
        base: 24,
        md: 32,
      }}
      position="relative"
      overflow="hidden"
    >
      {/* AMBIENT LIGHTS */}
      <Box
        position="absolute"
        top="-180px"
        left="-100px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.05}
        filter="blur(120px)"
      />

      <Box
        position="absolute"
        bottom="-180px"
        right="-100px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.05}
        filter="blur(120px)"
      />

      <Container
        maxW="1500px"
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
            md: 20,
          }}
        >
          <Badge
            px={5}
            py={2}
            borderRadius="full"
            bg="rgba(34,0,124,0.05)"
            color="#22007C"
            border="1px solid rgba(34,0,124,0.08)"
            fontSize="0.72rem"
            fontWeight="700"
            letterSpacing="0.18em"
            backdropFilter="blur(10px)"
          >
            OUR CREATIVE TEAM
          </Badge>

          <Heading
            mt={7}
            color="#111827"
            fontWeight="900"
            lineHeight="0.9"
            letterSpacing="-0.08em"
            fontSize={{
              base: "3rem",
              md: "6rem",
            }}
            maxW="1000px"
          >
            Meet The Experts Behind
            <Text
              as="span"
              display="block"
              color="#22007C"
            >
              Rarekoncepts
            </Text>
          </Heading>

          <Text
            mt={7}
            maxW="760px"
            color="gray.600"
            lineHeight="2"
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            Strategy, creativity, elegance, and
            precision execution — our team combines
            expertise and passion to craft timeless
            luxury experiences.
          </Text>
        </Flex>

        {/* GRID */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap={7}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              role="group"
            >
              {/* CARD */}
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="36px"
                h={{
                  base: "500px",
                  md: "620px",
                }}
                bg="#f8f8f8"
                boxShadow="
                  0 20px 60px rgba(15,23,42,0.06),
                  0 8px 30px rgba(15,23,42,0.04)
                "
              >
                {/* IMAGE */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: "cover",
                    transition:
                      "transform 1.2s cubic-bezier(.22,1,.36,1)",
                  }}
                />

                {/* DARK OVERLAY */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="
                    linear-gradient(
                      to top,
                      rgba(0,0,0,0.78),
                      rgba(0,0,0,0.22),
                      rgba(0,0,0,0.04)
                    )
                  "
                />

                {/* LEFT GLASS PANEL */}
                <Flex
                  direction="column"
                  justify="center"
                  position="absolute"
                  top={0}
                  left={0}
                  w="0%"
                  h="100%"
                  overflow="hidden"
                  bg="rgba(34,0,124,0.42)"
                  backdropFilter="blur(16px)"
                  borderRight="1px solid rgba(255,255,255,0.08)"
                  transition="
                    width 0.6s cubic-bezier(.22,1,.36,1)
                  "
                  _groupHover={{
                    width: "50%",
                  }}
                >
                  <Stack
                    gap={4}
                    px={6}
                    align="flex-end"
                  >
                    {member.infoLeft.map(
                      (item, i) => (
                        <Text
                          key={i}
                          color="white"
                          fontWeight="600"
                          fontSize="sm"
                          textAlign="right"
                          opacity={0}
                          transform="translateX(-15px)"
                          transition="
                            all 0.45s ease
                          "
                          _groupHover={{
                            opacity: 1,
                            transform:
                              "translateX(0px)",
                            transitionDelay: `${i * 0.07}s`,
                          }}
                        >
                          {item}
                        </Text>
                      )
                    )}
                  </Stack>
                </Flex>

                {/* RIGHT GLASS PANEL */}
                <Flex
                  direction="column"
                  justify="center"
                  position="absolute"
                  top={0}
                  right={0}
                  w="0%"
                  h="100%"
                  overflow="hidden"
                  bg="rgba(175,56,0,0.42)"
                  backdropFilter="blur(16px)"
                  borderLeft="1px solid rgba(255,255,255,0.08)"
                  transition="
                    width 0.6s cubic-bezier(.22,1,.36,1)
                  "
                  _groupHover={{
                    width: "50%",
                  }}
                >
                  <Stack
                    gap={4}
                    px={6}
                    align="flex-start"
                  >
                    {member.infoRight.map(
                      (item, i) => (
                        <Text
                          key={i}
                          color="white"
                          fontWeight="600"
                          fontSize="sm"
                          opacity={0}
                          transform="translateX(15px)"
                          transition="
                            all 0.45s ease
                          "
                          _groupHover={{
                            opacity: 1,
                            transform:
                              "translateX(0px)",
                            transitionDelay: `${i * 0.07}s`,
                          }}
                        >
                          {item}
                        </Text>
                      )
                    )}
                  </Stack>
                </Flex>

                {/* CENTER LINE */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="
                    translate(-50%, -50%)
                  "
                  w="1px"
                  h="0%"
                  bg="rgba(255,255,255,0.25)"
                  transition="0.5s ease"
                  _groupHover={{
                    h: "72%",
                  }}
                />

                {/* GOLD LIGHT */}
                <Box
                  position="absolute"
                  top="-100px"
                  right="-100px"
                  w="240px"
                  h="240px"
                  borderRadius="full"
                  bg="#D4AF37"
                  opacity={0}
                  filter="blur(80px)"
                  transition="0.6s ease"
                  _groupHover={{
                    opacity: 0.2,
                  }}
                />

                {/* BOTTOM INFO */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={7}
                  zIndex={5}
                >
                  <Box
                    bg="rgba(255,255,255,0.08)"
                    backdropFilter="blur(20px)"
                    border="1px solid rgba(255,255,255,0.10)"
                    borderRadius="28px"
                    p={5}
                    transition="0.45s ease"
                    _groupHover={{
                      bg: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <Stack gap={3}>
                      <Badge
                        alignSelf="flex-start"
                        bg="rgba(255,255,255,0.12)"
                        color="white"
                        px={4}
                        py={1.5}
                        borderRadius="full"
                        fontSize="0.65rem"
                        letterSpacing="0.14em"
                        border="1px solid rgba(255,255,255,0.10)"
                      >
                        TEAM MEMBER
                      </Badge>

                      <Heading
                        color="white"
                        fontWeight="800"
                        lineHeight="0.95"
                        letterSpacing="-0.05em"
                        fontSize={{
                          base: "1.7rem",
                          md: "2.2rem",
                        }}
                      >
                        {member.name}
                      </Heading>

                      <HStack
                        gap={3}
                        flexWrap="wrap"
                      >
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg="#D4AF37"
                        />

                        <Text
                          color="rgba(255,255,255,0.72)"
                          fontSize="sm"
                          letterSpacing="0.04em"
                          textTransform="uppercase"
                        >
                          {member.role}
                        </Text>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}