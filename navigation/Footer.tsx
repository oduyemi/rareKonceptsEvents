"use client";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Separator,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
    ArrowRight,
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  
  import {
    FaInstagram,
    FaFacebookF,
  } from "react-icons/fa";

const footerLinks = {
  company: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  services: [
    {
      label: "Luxury Weddings",
      href: "/services",
    },
    {
      label: "Corporate Events",
      href: "/services",
    },
    {
      label: "Destination Events",
      href: "/services",
    },
    {
      label: "Event Styling",
      href: "/services",
    },
  ],
};

export const Footer = () => {
  return (
    <Box
      bg="#0B031E"
      color="white"
      position="relative"
      overflow="hidden"
      className="ps-5"
      pt={{
        base: 20,
        md: 24,
      }}
      pb={8}
    >
      {/* BACKGROUND GLOW */}
      <Box
        position="absolute"
        top="-120px"
        right="-120px"
        w="320px"
        h="320px"
        borderRadius="full"
        bg="#22007C"
        opacity={0.3}
        filter="blur(140px)"
      />

      <Box
        position="absolute"
        bottom="-120px"
        left="-120px"
        w="320px"
        h="320px"
        borderRadius="full"
        bg="#AF3800"
        opacity={0.2}
        filter="blur(140px)"
      />

      <Container
        maxW="7xl"
        position="relative"
        zIndex={2}
      >
        {/* TOP CTA */}
        <Box
          mb={{
            base: 16,
            md: 20,
          }}
          p={{
            base: 7,
            md: 10,
          }}
          borderRadius="36px"
          bg="linear-gradient(135deg, rgba(34,0,124,0.95), rgba(175,56,0,0.95))"
          boxShadow="0 25px 80px rgba(0,0,0,0.25)"
          overflow="hidden"
          position="relative"
        >
          <Box
            position="absolute"
            top="-60px"
            right="-40px"
            w="220px"
            h="220px"
            borderRadius="full"
            bg="rgba(255,255,255,0.08)"
            filter="blur(20px)"
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
            gap={8}
            position="relative"
            zIndex={2}
          >
            <VStack
              align="start"
              gap={4}
              maxW="700px"
            >
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.18em"
                color="rgba(255,255,255,0.75)"
                textTransform="uppercase"
              >
                Let’s Create Something Elegant
              </Text>

              <Heading
                lineHeight="0.95"
                letterSpacing="-0.05em"
                fontWeight="800"
                fontSize={{
                  base: "2.5rem",
                  md: "4rem",
                }}
              >
                Luxury Experiences
                <Text
                  as="span"
                  display="block"
                  color="#F6C453"
                >
                  Designed Beautifully
                </Text>
              </Heading>

              <Text
                color="rgba(255,255,255,0.75)"
                lineHeight="2"
                maxW="600px"
              >
                We create unforgettable weddings,
                corporate experiences, destination
                celebrations, and premium event
                styling tailored to your vision.
              </Text>
            </VStack>

            <Link href="/consultation">
              <Button
                h="64px"
                px={8}
                borderRadius="full"
                bg="white"
                color="#22007C"
                fontWeight="700"
                fontSize="md"
                transition="0.35s ease"
                _hover={{
                  transform:
                    "translateY(-3px)",
                }}
              >
                Book Consultation
              </Button>
            </Link>
          </Flex>
        </Box>

        {/* MAIN FOOTER */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "1.3fr 0.8fr 0.8fr 1fr",
          }}
          gap={{
            base: 12,
            lg: 16,
          }}
        >
          {/* BRAND */}
          <Stack gap={6}>
            <Box>
              <Heading
                fontSize={{
                  base: "2rem",
                  md: "2.4rem",
                }}
                letterSpacing="-0.05em"
                fontWeight="800"
              >
                Rarekoncepts
              </Heading>

              <Text
                color="#F6C453"
                fontWeight="600"
                letterSpacing="0.08em"
                mt={1}
              >
                EVENTS & DÉCOR
              </Text>
            </Box>

            <Text
              color="rgba(255,255,255,0.68)"
              lineHeight="2"
              maxW="420px"
            >
              Premium event planning and luxury
              styling company creating timeless,
              elegant, and unforgettable
              experiences across weddings,
              corporate events, and destination
              celebrations.
            </Text>

            <HStack gap={4}>
              <Link 
                href="https://www.instagram.com/rarekonceptseventndecor/"
                target="_blank"
              >
                <SocialIcon icon={FaInstagram} />
              </Link>
              <Link 
                href=""
                target="_blank"
              >
                <SocialIcon icon={FaFacebookF} />
              </Link>
              <Link 
                href="mailto:rarekonceptsevents@gmail.com"
              >
              <SocialIcon icon={Mail} />
              </Link>
            </HStack>
          </Stack>

          {/* COMPANY */}
          <Stack gap={5}>
            <Heading
              fontSize="lg"
              fontWeight="700"
            >
              Company
            </Heading>

            <Stack gap={4}>
              {footerLinks.company.map(
                (link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                )
              )}
            </Stack>
          </Stack>

          {/* SERVICES */}
          <Stack gap={5}>
            <Heading
              fontSize="lg"
              fontWeight="700"
            >
              Services
            </Heading>

            <Stack gap={4}>
              {footerLinks.services.map(
                (link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                )
              )}
            </Stack>
          </Stack>

          {/* CONTACT */}
          <Stack gap={6}>
            <Heading
              fontSize="lg"
              fontWeight="700"
            >
              Contact
            </Heading>

            <Stack gap={5}>
              <HStack
                align="flex-start"
                gap={4}
              >
                <Flex
                  minW="46px"
                  h="46px"
                  borderRadius="full"
                  bg="rgba(255,255,255,0.06)"
                  align="center"
                  justify="center"
                >
                  <Icon
                    as={MapPin}
                    boxSize={5}
                    color="#F6C453"
                  />
                </Flex>

                <Text
                  color="rgba(255,255,255,0.72)"
                  lineHeight="1.8"
                >
                  Lagos, Nigeria
                </Text>
              </HStack>

              <HStack
                align="flex-start"
                gap={4}
              >
                <Flex
                  minW="46px"
                  h="46px"
                  borderRadius="full"
                  bg="rgba(255,255,255,0.06)"
                  align="center"
                  justify="center"
                >
                  <Icon
                    as={Phone}
                    boxSize={5}
                    color="#F6C453"
                  />
                </Flex>

                <Text
                  color="rgba(255,255,255,0.72)"
                >
                  +234 000 000 0000
                </Text>
              </HStack>

              <HStack
                align="flex-start"
                gap={4}
              >
                <Flex
                  minW="46px"
                  h="46px"
                  borderRadius="full"
                  bg="rgba(255,255,255,0.06)"
                  align="center"
                  justify="center"
                >
                  <Icon
                    as={Mail}
                    boxSize={5}
                    color="#F6C453"
                  />
                </Flex>

                <Text
                  color="rgba(255,255,255,0.72)"
                >
                  hello@rarekoncepts.com
                </Text>
              </HStack>
            </Stack>

            {/* NEWSLETTER */}
            <Box
              mt={2}
              p={5}
              borderRadius="28px"
              bg="rgba(255,255,255,0.04)"
              border="1px solid rgba(255,255,255,0.06)"
            >
              <Text
                mb={4}
                fontWeight="600"
              >
                Subscribe to updates
              </Text>

              <Flex gap={3}>
                <Input
                  placeholder="Email address"
                  h="52px"
                  bg="rgba(255,255,255,0.06)"
                  border="1px solid rgba(255,255,255,0.08)"
                  color="white"
                  _placeholder={{
                    color:
                      "rgba(255,255,255,0.45)",
                  }}
                  _focus={{
                    borderColor: "#F6C453",
                    boxShadow: "none",
                  }}
                />

                <Button
                  h="52px"
                  minW="52px"
                  borderRadius="full"
                  bg="#F6C453"
                  color="#22007C"
                  _hover={{
                    bg: "#E4B23E",
                  }}
                >
                  <ArrowRight size={18} />
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Grid>

        <Separator
          my={{
            base: 10,
            md: 12,
          }}
          borderColor="rgba(255,255,255,0.08)"
        />

        {/* BOTTOM */}
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text
            color="rgba(255,255,255,0.5)"
            fontSize="sm"
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            © {new Date().getFullYear()} Rarekoncepts
            Events & Décor. All rights reserved.
          </Text>

          <HStack
            gap={6}
            fontSize="sm"
            color="rgba(255,255,255,0.5)"
          >
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

/* SOCIAL ICON */

function SocialIcon({
  icon,
}: {
  icon: any;
}) {
  return (
    <Flex
      w="52px"
      h="52px"
      borderRadius="full"
      bg="rgba(255,255,255,0.06)"
      border="1px solid rgba(255,255,255,0.08)"
      align="center"
      justify="center"
      cursor="pointer"
      transition="0.35s ease"
      _hover={{
        bg: "#F6C453",
        color: "#22007C",
        transform: "translateY(-4px)",
      }}
    >
      <Icon as={icon} boxSize={5} />
    </Flex>
  );
}

/* FOOTER LINK */

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href}>
      <Text
        color="rgba(255,255,255,0.68)"
        transition="0.3s ease"
        _hover={{
          color: "#F6C453",
          transform: "translateX(4px)",
        }}
      >
        {label}
      </Text>
    </Link>
  );
}