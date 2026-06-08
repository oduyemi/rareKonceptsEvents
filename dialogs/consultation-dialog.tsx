"use client";
import {
  Box,
  Button,
  Dialog,
  Field,
  Flex,
  Grid,
  GridItem,
  Input,
  Portal,
  NativeSelect,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { ArrowRight, Sparkles } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Engagement",
  "Bridal Shower",
  "Baby Shower",
  "Conference",
  "Luxury Dinner",
  "Social Gathering",
  "Other",
];

const budgetRanges = [
  "₦500k - ₦1M",
  "₦1M - ₦3M",
  "₦3M - ₦5M",
  "₦5M - ₦10M",
  "₦10M+",
];

export const ConsultationDialog = () => {
  return (
    <Dialog.Root size="xl" placement="center">
      <Dialog.Trigger asChild>
        <Button
          h="64px"
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
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop
          bg="rgba(0,0,0,0.72)"
          backdropFilter="blur(8px)"
        />

        <Dialog.Positioner p={4}>
          <Dialog.Content
            maxW="920px"
            borderRadius="36px"
            overflow="hidden"
            bg="white"
            boxShadow="0 30px 120px rgba(0,0,0,0.18)"
          >
            {/* HEADER */}
            <Box
              position="relative"
              overflow="hidden"
              bg="#0B071A"
              px={{
                base: 7,
                md: 10,
              }}
              py={{
                base: 8,
                md: 10,
              }}
            >
              <Box
                position="absolute"
                top="-80px"
                right="-80px"
                w="240px"
                h="240px"
                borderRadius="full"
                bg="#22007C"
                opacity={0.35}
                filter="blur(90px)"
              />

              <Box
                position="absolute"
                bottom="-100px"
                left="-60px"
                w="220px"
                h="220px"
                borderRadius="full"
                bg="#AF3800"
                opacity={0.24}
                filter="blur(90px)"
              />

              <VStack
                align="start"
                position="relative"
                zIndex={2}
                gap={4}
              >
                <Flex
                  align="center"
                  gap={2}
                  px={4}
                  py={2}
                  borderRadius="full"
                  bg="rgba(255,255,255,0.08)"
                  border="1px solid rgba(255,255,255,0.08)"
                >
                  <Sparkles
                    size={14}
                    color="#F6C453"
                  />

                  <Text
                    color="white"
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.12em"
                  >
                    LUXURY CONSULTATION
                  </Text>
                </Flex>

                <Dialog.Title
                  color="white"
                  fontSize={{
                    base: "2rem",
                    md: "3.2rem",
                  }}
                  lineHeight="0.95"
                  letterSpacing="-0.06em"
                  fontWeight="900"
                >
                  Let’s Plan Something
                  <Text
                    as="span"
                    display="block"
                    color="#F6C453"
                  >
                    Extraordinary
                  </Text>
                </Dialog.Title>

                <Dialog.Description
                  color="rgba(255,255,255,0.72)"
                  maxW="620px"
                  lineHeight="2"
                >
                  Tell us about your event vision and
                  our luxury experience team will
                  curate a personalized consultation
                  for your celebration.
                </Dialog.Description>
              </VStack>
            </Box>

            {/* FORM */}
            <Box
              px={{
                base: 6,
                md: 10,
              }}
              py={{
                base: 7,
                md: 10,
              }}
            >
              <Stack gap={7}>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "1fr 1fr",
                  }}
                  gap={6}
                >
                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Full Name
                      </Field.Label>

                      <Input
                        h="60px"
                        borderRadius="18px"
                        placeholder="Your full name"
                        border="1px solid rgba(15,23,42,0.08)"
                        _focusVisible={{
                          borderColor: "#22007C",
                          boxShadow:
                            "0 0 0 3px rgba(34,0,124,0.08)",
                        }}
                      />
                    </Field.Root>
                  </GridItem>

                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Email Address
                      </Field.Label>

                      <Input
                        type="email"
                        h="60px"
                        borderRadius="18px"
                        placeholder="you@example.com"
                        border="1px solid rgba(15,23,42,0.08)"
                        _focusVisible={{
                          borderColor: "#22007C",
                          boxShadow:
                            "0 0 0 3px rgba(34,0,124,0.08)",
                        }}
                      />
                    </Field.Root>
                  </GridItem>

                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Phone Number
                      </Field.Label>

                      <Input
                        h="60px"
                        borderRadius="18px"
                        placeholder="+234..."
                        border="1px solid rgba(15,23,42,0.08)"
                        _focusVisible={{
                          borderColor: "#22007C",
                          boxShadow:
                            "0 0 0 3px rgba(34,0,124,0.08)",
                        }}
                      />
                    </Field.Root>
                  </GridItem>

                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Event Type
                      </Field.Label>

                      <NativeSelect.Root>
                        <NativeSelect.Field
                          h="60px"
                          borderRadius="18px"
                          border="1px solid rgba(15,23,42,0.08)"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select event type
                          </option>

                          {eventTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                            >
                              {type}
                            </option>
                          ))}
                        </NativeSelect.Field>

                        <NativeSelect.Indicator />
                      </NativeSelect.Root>
                    </Field.Root>
                  </GridItem>

                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Event Date
                      </Field.Label>

                      <Input
                        type="date"
                        h="60px"
                        borderRadius="18px"
                        border="1px solid rgba(15,23,42,0.08)"
                        _focusVisible={{
                          borderColor: "#22007C",
                          boxShadow:
                            "0 0 0 3px rgba(34,0,124,0.08)",
                        }}
                      />
                    </Field.Root>
                  </GridItem>

                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Event Location
                      </Field.Label>

                      <Input
                        h="60px"
                        borderRadius="18px"
                        placeholder="City / Venue"
                        border="1px solid rgba(15,23,42,0.08)"
                        _focusVisible={{
                          borderColor: "#22007C",
                          boxShadow:
                            "0 0 0 3px rgba(34,0,124,0.08)",
                        }}
                      />
                    </Field.Root>
                  </GridItem>

                  <GridItem>
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Estimated Guest Count
                      </Field.Label>

                      <Input
                        h="60px"
                        borderRadius="18px"
                        placeholder="250 Guests"
                        border="1px solid rgba(15,23,42,0.08)"
                        _focusVisible={{
                          borderColor: "#22007C",
                          boxShadow:
                            "0 0 0 3px rgba(34,0,124,0.08)",
                        }}
                      />
                    </Field.Root>
                  </GridItem>

                  <GridItem>
           
                    <Field.Root>
                      <Field.Label
                        color="#111827"
                        fontWeight="700"
                      >
                        Budget Range
                      </Field.Label>

                      <NativeSelect.Root>
                        <NativeSelect.Field
                          h="60px"
                          borderRadius="18px"
                          border="1px solid rgba(15,23,42,0.08)"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select budget range
                          </option>

                          {budgetRanges.map((budget) => (
                            <option
                              key={budget}
                              value={budget}
                            >
                              {budget}
                            </option>
                          ))}
                        </NativeSelect.Field>

                        <NativeSelect.Indicator />
                      </NativeSelect.Root>
                    </Field.Root>
                  </GridItem>
                </Grid>

                <Field.Root>
                  <Field.Label
                    color="#111827"
                    fontWeight="700"
                  >
                    Message
                  </Field.Label>

                  <Textarea
                    minH="180px"
                    borderRadius="24px"
                    placeholder="Tell us about your vision, preferred style, expectations, and special requests..."
                    border="1px solid rgba(15,23,42,0.08)"
                    resize="vertical"
                    _focusVisible={{
                      borderColor: "#22007C",
                      boxShadow:
                        "0 0 0 3px rgba(34,0,124,0.08)",
                    }}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label
                    color="#111827"
                    fontWeight="700"
                  >
                    How did you hear about us?
                    <Text
                      as="span"
                      color="gray.500"
                      fontWeight="400"
                      ml={1}
                    >
                      (Optional)
                    </Text>
                  </Field.Label>

                  <Input
                    h="60px"
                    borderRadius="18px"
                    placeholder="Instagram, referral, Google, etc."
                    border="1px solid rgba(15,23,42,0.08)"
                    _focusVisible={{
                      borderColor: "#22007C",
                      boxShadow:
                        "0 0 0 3px rgba(34,0,124,0.08)",
                    }}
                  />
                </Field.Root>

                <Flex
                  justify="space-between"
                  align={{
                    base: "stretch",
                    md: "center",
                  }}
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                  gap={4}
                  pt={2}
                >
                  <Text
                    color="gray.500"
                    fontSize="sm"
                    lineHeight="1.8"
                    maxW="480px"
                  >
                    By submitting this form, our team
                    will contact you to schedule your
                    personalized consultation.
                  </Text>

                  <Dialog.ActionTrigger asChild>
                    <Button
                      h="62px"
                      px={10}
                      borderRadius="full"
                      bg="#22007C"
                      color="white"
                      fontWeight="700"
                      minW={{
                        base: "100%",
                        md: "230px",
                      }}
                      _hover={{
                        bg: "#160052",
                        transform:
                          "translateY(-2px)",
                      }}
                    >
                      <Flex
                        align="center"
                        gap={2}
                      >
                        <Text>
                          Submit Inquiry
                        </Text>

                        <ArrowRight size={18} />
                      </Flex>
                    </Button>
                  </Dialog.ActionTrigger>
                </Flex>
              </Stack>
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};