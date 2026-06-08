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
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import "animate.css";

const contactCards = [
    {
      title: "Email Address",
      value: "rarekonceptsevents@gmail.com",
      description:
        "Reach out for luxury event planning, premium décor consultations, and custom experiences.",
      icon: <Mail size={36} />,
      color: "#22007C",
    },
    {
      title: "Phone Number",
      value: "+234 803 345 4969",
      description:
        "Speak directly with our event specialists for bookings, inquiries, and consultations.",
      icon: <Phone size={36} />,
      color: "#AF3800",
    },
    {
      title: "Office Location",
      value: "Lagos, Nigeria",
      description:
        "Serving luxury weddings, corporate experiences, and destination events across Nigeria.",
      icon: <MapPin size={36} />,
      color: "#0F766E",
    },
    {
      title: "Social Connect",
      value: "@rarekonceptseventndecor",
      description:
        "Follow our latest event transformations, premium styling, and celebration highlights.",
      icon: <FaInstagram size={36} />,
      color: "#E1306C",
    },
];


export const ContactInfo = () => {
  return (
    <Box py={{ base: 24, md: 32 }} className="ps-md-2" bg="white">
      <Container maxW="1500px">
        <VStack
          textAlign="center"
          gap={5}
          mb={{ base: 14, md: 20 }}
        >
          <Badge
            bg="rgba(34,0,124,0.05)"
            color="#22007C"
            px={5}
            py={2}
            borderRadius="full"
            fontSize="0.72rem"
            letterSpacing="0.16em"
          >
            GET IN TOUCH
          </Badge>

          <Heading
            fontSize={{
              base: "2.8rem",
              md: "5rem",
            }}
            lineHeight="0.94"
            letterSpacing="-0.07em"
            color="#111827"
            fontWeight="900"
            maxW="920px"
          >
            We’re Ready To
            <Text as="span" color="#22007C">
              {" "}
              Bring Your Vision Alive
            </Text>
          </Heading>

          <Text
            color="gray.600"
            maxW="760px"
            lineHeight="2"
            fontSize="lg"
          >
            Contact our luxury events team for weddings, premium celebrations, corporate experiences, décor styling, and unforgettable destination moments.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            xl: 4,
          }}
          gap={8}
        >
          {contactCards.map((item, index) => {
            return (
              <Box
                key={index}
                position="relative"
                overflow="hidden"
                borderRadius="34px"
                p={{
                  base: 8,
                  md: 10,
                }}
                bg="white"
                border="1px solid rgba(34,0,124,0.06)"
                boxShadow="0 25px 70px rgba(15,23,42,0.06)"
                transition="all 0.4s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow:
                    "0 30px 90px rgba(34,0,124,0.10)",
                }}
              >
                <VStack align="start" gap={6}>
                    <Flex
                        w="82px"
                        h="82px"
                        borderRadius="28px"
                        bg="rgba(34,0,124,0.05)"
                        align="center"
                        justify="center"
                        >
                        <Box color={item.color}>
                            {item.icon}
                        </Box>
                    </Flex>

                  <Box>
                    <Heading
                      fontSize="1.9rem"
                      color="#111827"
                      lineHeight="1"
                      letterSpacing="-0.05em"
                    >
                      {item.title}
                    </Heading>

                    <Text
                      color="#22007C"
                      mt={3}
                      fontWeight="700"
                    >
                      {item.value}
                    </Text>
                  </Box>

                  <Text
                    color="gray.600"
                    lineHeight="2"
                  >
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};


