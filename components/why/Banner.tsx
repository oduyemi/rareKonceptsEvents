"use client";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import "animate.css";


const stats = [
  {
    value: "250+",
    label: "Events Managed",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "120+",
    label: "Premium Vendors",
  },
  {
    value: "8+",
    label: "Years Experience",
  },
];


export const WhyChooseHero = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="#0B071A"
      py={{
        base: 28,
        md: 36,
      }}
    >
      <Box
        position="absolute"
        top="-180px"
        left="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.45}
        filter="blur(140px)"
      />

      <Box
        position="absolute"
        bottom="-200px"
        right="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.28}
        filter="blur(140px)"
      />

      <Container
        maxW="1500px"
        position="relative"
        zIndex={2}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1.1fr 0.9fr",
          }}
          gap={{
            base: 14,
            lg: 20,
          }}
          alignItems="center"
        >
          <GridItem>
            <VStack
              align="start"
              gap={7}
              className="animate__animated animate__fadeInLeft"
            >
              <Badge
                bg="rgba(255,255,255,0.10)"
                color="white"
                px={5}
                py={2}
                borderRadius="full"
                fontSize="0.72rem"
                letterSpacing="0.16em"
                border="1px solid rgba(255,255,255,0.08)"
                backdropFilter="blur(14px)"
              >
                WHY CHOOSE US
              </Badge>

              <Heading
                color="white"
                fontWeight="900"
                lineHeight="0.92"
                letterSpacing="-0.08em"
                fontSize={{
                  base: "3.2rem",
                  md: "6.5rem",
                }}
                maxW="900px"
              >
                We Create
                <Text
                  as="span"
                  display="block"
                  color="#F6C453"
                >
                  Extraordinary Experiences
                </Text>
              </Heading>

              <Text
                color="rgba(255,255,255,0.72)"
                fontSize={{
                  base: "md",
                  md: "xl",
                }}
                lineHeight="2"
                maxW="760px"
              >
                We combine luxury styling, strategic planning, and flawless execution to deliver memorable events tailored to your vision and brand identity.
              </Text>

              <HStack
                gap={4}
                flexWrap="wrap"
              >
                <Link href="/contact">
                  <Button
                    h="62px"
                    px={8}
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
                      <Text>Book Consultation</Text>
                      <ArrowRight size={18} />
                    </Flex>
                  </Button>
                </Link>

                <Button
                  h="62px"
                  px={8}
                  borderRadius="full"
                  bg="rgba(255,255,255,0.08)"
                  color="white"
                  border="1px solid rgba(255,255,255,0.08)"
                  backdropFilter="blur(10px)"
                  _hover={{
                    bg: "rgba(255,255,255,0.12)",
                  }}
                >
                  View Portfolio
                </Button>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              position="relative"
              className="animate__animated animate__fadeInRight"
            >
              <Box
                position="absolute"
                inset="-20px"
                borderRadius="40px"
                border="1px solid rgba(255,255,255,0.08)"
              />

              <Box
                position="relative"
                overflow="hidden"
                borderRadius="40px"
                h={{
                  base: "520px",
                  md: "760px",
                }}
              >
                <Image
                  src="/images/luxury5.jpg"
                  alt="Luxury Event Experience"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />

                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.05))"
                />

                <Flex
                  position="absolute"
                  bottom={8}
                  left={8}
                  right={8}
                  justify="space-between"
                  gap={4}
                  flexWrap="wrap"
                >
                  {stats.map((stat, index) => (
                    <Box
                      key={index}
                      bg="rgba(255,255,255,0.10)"
                      border="1px solid rgba(255,255,255,0.08)"
                      backdropFilter="blur(18px)"
                      px={6}
                      py={5}
                      borderRadius="24px"
                      minW={{
                        base: "46%",
                        md: "unset",
                      }}
                    >
                      <Heading
                        color="white"
                        fontSize={{
                          base: "2rem",
                          md: "2.4rem",
                        }}
                        fontWeight="800"
                      >
                        {stat.value}
                      </Heading>

                      <Text
                        color="rgba(255,255,255,0.72)"
                        fontSize="sm"
                        mt={1}
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
