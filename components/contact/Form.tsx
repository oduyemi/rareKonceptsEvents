"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Clock3, SendHorizonal } from "lucide-react";
import "animate.css";


export const ContactForm = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 32,
      }}
      bg="#F8F8FC"
      position="relative"
      overflow="hidden"
      className="ps-md-5"
    >
      <Box
        position="absolute"
        top="-160px"
        right="-120px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.04}
        filter="blur(120px)"
      />

      <Container maxW="1400px" position="relative" zIndex={2}>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "0.85fr 1.15fr",
          }}
          gap={{
            base: 12,
            lg: 20,
          }}
          alignItems="start"
        >
          <GridItem>
            <VStack align="start" gap={7}>
              <Badge
                bg="rgba(34,0,124,0.05)"
                color="#22007C"
                px={5}
                py={2}
                borderRadius="full"
                fontSize="0.72rem"
                letterSpacing="0.16em"
              >
                SEND A MESSAGE
              </Badge>

              <Heading
                color="#111827"
                fontWeight="900"
                lineHeight="0.94"
                letterSpacing="-0.07em"
                fontSize={{
                  base: "2.8rem",
                  md: "5rem",
                }}
                maxW="700px"
              >
                Let’s Discuss Your
                <Text as="span" color="#22007C">
                  {" "}
                  Dream Event
                </Text>
              </Heading>

              <Text
                color="gray.600"
                lineHeight="2"
                fontSize="lg"
                maxW="620px"
              >
                Share your vision, preferred date, guest experience goals, and styling ideas. Our team will craft a premium experience tailored to your celebration.
              </Text>

              <Stack gap={5} w="full">
                <Flex
                  align="center"
                  gap={4}
                  p={5}
                  borderRadius="24px"
                  bg="white"
                  boxShadow="0 20px 60px rgba(15,23,42,0.05)"
                >
                  <Flex
                    w="58px"
                    h="58px"
                    borderRadius="18px"
                    bg="rgba(34,0,124,0.06)"
                    align="center"
                    justify="center"
                  >
                    <Clock3
                      size={24}
                      color="#22007C"
                    />
                  </Flex>

                  <Box>
                    <Text
                      fontWeight="700"
                      color="#111827"
                    >
                      Response Time
                    </Text>

                    <Text color="gray.600">
                      We typically respond within 24 hours.
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              bg="white"
              borderRadius="40px"
              p={{
                base: 8,
                md: 12,
              }}
              boxShadow="0 30px 90px rgba(15,23,42,0.08)"
            >
              <VStack gap={6} align="stretch">
                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                  }}
                  gap={5}
                >
                  <Box>
                    <Text
                      mb={3}
                      fontWeight="700"
                      color="#111827"
                    >
                      Full Name
                    </Text>

                    <Input
                      h="64px"
                      borderRadius="18px"
                      border="1px solid rgba(34,0,124,0.08)"
                      placeholder="Your full name"
                      _focusVisible={{
                        borderColor: "#22007C",
                        boxShadow:
                          "0 0 0 1px #22007C",
                      }}
                    />
                  </Box>

                  <Box>
                    <Text
                      mb={3}
                      fontWeight="700"
                      color="#111827"
                    >
                      Email Address
                    </Text>

                    <Input
                      h="64px"
                      borderRadius="18px"
                      border="1px solid rgba(34,0,124,0.08)"
                      placeholder="Your email address"
                      _focusVisible={{
                        borderColor: "#22007C",
                        boxShadow:
                          "0 0 0 1px #22007C",
                      }}
                    />
                  </Box>
                </SimpleGrid>

                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                  }}
                  gap={5}
                >
                  <Box>
                    <Text
                      mb={3}
                      fontWeight="700"
                      color="#111827"
                    >
                      Phone Number
                    </Text>

                    <Input
                      h="64px"
                      borderRadius="18px"
                      border="1px solid rgba(34,0,124,0.08)"
                      placeholder="Your phone number"
                      _focusVisible={{
                        borderColor: "#22007C",
                        boxShadow:
                          "0 0 0 1px #22007C",
                      }}
                    />
                  </Box>

                  <Box>
                    <Text
                      mb={3}
                      fontWeight="700"
                      color="#111827"
                    >
                      Event Type
                    </Text>

                    <Input
                      h="64px"
                      borderRadius="18px"
                      border="1px solid rgba(34,0,124,0.08)"
                      placeholder="Wedding, Corporate, Birthday..."
                      _focusVisible={{
                        borderColor: "#22007C",
                        boxShadow:
                          "0 0 0 1px #22007C",
                      }}
                    />
                  </Box>
                </SimpleGrid>

                <Box>
                  <Text
                    mb={3}
                    fontWeight="700"
                    color="#111827"
                  >
                    Event Details
                  </Text>

                  <Textarea
                    minH="220px"
                    borderRadius="24px"
                    border="1px solid rgba(34,0,124,0.08)"
                    placeholder="Tell us about your event vision, preferred date, venue ideas, guest count, styling inspiration, and expectations..."
                    resize="none"
                    _focusVisible={{
                      borderColor: "#22007C",
                      boxShadow:
                        "0 0 0 1px #22007C",
                    }}
                  />
                </Box>

                <Button
                  h="68px"
                  borderRadius="full"
                  bg="#22007C"
                  color="white"
                  fontWeight="700"
                  fontSize="md"
                  transition="all 0.35s ease"
                  _hover={{
                    bg: "#160052",
                    transform: "translateY(-3px)",
                  }}
                >
                  <Flex align="center" gap={3}>
                    <Text>Send Inquiry</Text>
                    <SendHorizonal size={18} />
                  </Flex>
                </Button>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
