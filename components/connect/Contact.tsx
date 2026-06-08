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
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    Send
  } from "lucide-react";
import "animate.css";


const contactInfo = [
    {
      title: "Email Address",
      value: "rarekonceptsevents@gmail.com",
      icon: MailIcon,
    },
    {
      title: "Phone Number",
      value: "+234 800 000 0000",
      icon: PhoneIcon,
    },
    {
      title: "Office Location",
      value: "Lagos, Nigeria",
      icon: MapPinIcon,
    },
];


export const SocialContactSection = () => {
  return (
    <Box
      py={{
        base: 24,
        md: 32,
      }}
      bg="#F8F8FC"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1500px">
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "0.9fr 1.1fr",
          }}
          gap={{
            base: 14,
            lg: 18,
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
                CONTACT US
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
                maxW="760px"
              >
                Let’s Start A
                <Text as="span" color="#22007C">
                  {" "}
                  Conversation
                </Text>
              </Heading>

              <Text
                color="gray.600"
                lineHeight="2"
                fontSize="lg"
                maxW="620px"
              >
                We would love to hear from you. Reach out for luxury event planning, collaborations, partnerships, or premium celebration experiences.
              </Text>

              <Stack
                w="100%"
                gap={5}
                pt={3}
              >
                {contactInfo.map((item, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={5}
                    bg="white"
                    borderRadius="28px"
                    px={6}
                    py={5}
                    border="1px solid rgba(34,0,124,0.06)"
                    boxShadow="0 15px 50px rgba(15,23,42,0.04)"
                  >
                    <Flex
                      w="68px"
                      h="68px"
                      borderRadius="24px"
                      bg="rgba(34,0,124,0.06)"
                      align="center"
                      justify="center"
                    >
                      <Icon
                        as={item.icon}
                        boxSize={7}
                        color="#22007C"
                      />
                    </Flex>

                    <Box>
                      <Text
                        color="gray.500"
                        fontSize="sm"
                      >
                        {item.title}
                      </Text>

                      <Heading
                        color="#111827"
                        fontSize="1.3rem"
                        mt={1}
                      >
                        {item.value}
                      </Heading>
                    </Box>
                  </Flex>
                ))}
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
              border="1px solid rgba(34,0,124,0.06)"
              boxShadow="0 25px 80px rgba(15,23,42,0.06)"
            >
              <VStack align="stretch" gap={6}>
                <Heading
                  color="#111827"
                  fontSize={{
                    base: "2rem",
                    md: "3rem",
                  }}
                  lineHeight="0.95"
                  letterSpacing="-0.05em"
                >
                  Send A Message
                </Heading>

                <Text
                  color="gray.600"
                  lineHeight="2"
                >
                  Share your ideas and let’s create unforgettable experiences together.
                </Text>

                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                  }}
                  gap={5}
                >
                  <Input
                    placeholder="Full Name"
                    h="62px"
                    borderRadius="20px"
                    border="1px solid rgba(34,0,124,0.08)"
                    _focusVisible={{
                      borderColor: "#22007C",
                      boxShadow: "0 0 0 1px #22007C",
                    }}
                  />

                  <Input
                    placeholder="Email Address"
                    h="62px"
                    borderRadius="20px"
                    border="1px solid rgba(34,0,124,0.08)"
                    _focusVisible={{
                      borderColor: "#22007C",
                      boxShadow: "0 0 0 1px #22007C",
                    }}
                  />
                </SimpleGrid>

                <Input
                  placeholder="Subject"
                  h="62px"
                  borderRadius="20px"
                  border="1px solid rgba(34,0,124,0.08)"
                  _focusVisible={{
                    borderColor: "#22007C",
                    boxShadow: "0 0 0 1px #22007C",
                  }}
                />

                <Textarea
                  placeholder="Tell us about your event or inquiry"
                  minH="180px"
                  borderRadius="24px"
                  border="1px solid rgba(34,0,124,0.08)"
                  resize="none"
                  _focusVisible={{
                    borderColor: "#22007C",
                    boxShadow: "0 0 0 1px #22007C",
                  }}
                />

                <Button
                  h="64px"
                  borderRadius="full"
                  bg="#22007C"
                  color="white"
                  fontWeight="700"
                  _hover={{
                    bg: "#160052",
                    transform: "translateY(-2px)",
                  }}
                >
                  <Flex align="center" gap={2}>
                    <Send size={18} />
                    <Text>Send Message</Text>
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
