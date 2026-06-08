"use client";
import {
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import {ArrowRight} from "lucide-react";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";
import "animate.css";

const socialPlatforms = [
    {
      title: "Instagram",
      icon: FaInstagram,
      username: "@rarekonceptseventndecor",
      description:
        "Explore our luxury event highlights, elegant décor inspiration, and premium celebration moments.",
      color: "#E1306C",
      link: "https://www.instagram.com/rarekonceptseventndecor/",
    },
    {
      title: "Facebook",
      icon: FaFacebookF,
      username: "Rare Koncepts Events",
      description:
        "Stay connected with our latest events, announcements, and client experiences.",
      color: "#1877F2",
      link: "#",
    },
    {
      title: "LinkedIn",
      icon: FaLinkedinIn,
      username: "Luxe Events Global",
      description:
        "Connect professionally and discover our premium corporate event services.",
      color: "#0A66C2",
      link: "#",
    },
  ];

  


export const SocialPlatformsSection = () => {
  return (
    <Box py={{ base: 24, md: 32 }} bg="white">
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
            FOLLOW US
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
            Connect Across Every
            <Text as="span" color="#22007C">
              {" "}
              Platform
            </Text>
          </Heading>

          <Text
            color="gray.600"
            maxW="760px"
            lineHeight="2"
            fontSize="lg"
          >
            Discover luxury event inspiration, premium styling concepts, and unforgettable experiences across our social channels.
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
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;

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
                    boxShadow: "0 30px 90px rgba(34,0,124,0.10)",
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
                    <Box color={platform.color}>
                        <IconComponent size={34} />
                    </Box>
                    </Flex>

                    {/* remaining content */}
                </VStack>
                </Box>
            );
            })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

