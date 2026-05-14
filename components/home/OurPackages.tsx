"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import PackageCard from "./PackageCard";
import OptionalAddOns from "./Addons";


export const OurPackages = () => {
  return (
    <Box>
        <Box
        bg="#FAFAFA"
        py={{ base: 20, md: 28 }}
        overflow="hidden"
        className="ps-md-5"
        >
        <Container
            maxW="1400px"
            px={{ base: 6, md: 8, xl: 10 }}
        >
            {/* HEADER */}
            <VStack
            spacing={5}
            textAlign="center"
            maxW="760px"
            mx="auto"
            mb={{ base: 14, md: 20 }}
            >
            <Badge
                bg="rgba(34,0,124,0.06)"
                color="#22007C"
                px={4}
                py={1.5}
                borderRadius="full"
                fontSize="0.7rem"
                letterSpacing="0.14em"
                fontWeight="700"
            >
                CURATED EXPERIENCES
            </Badge>

            <Heading
                color="#111827"
                fontWeight="800"
                lineHeight="1"
                letterSpacing="-0.04em"
                fontSize={{ base: "2.5rem", md: "4.5rem" }}
            >
                Signature
                <Text
                as="span"
                color="#AF3800"
                >
                {" "}
                Packages
                </Text>
            </Heading>

            <Text
                color="gray.600"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
            >
                Refined planning experiences designed for elegant events,
                seamless coordination, and unforgettable guest moments.
            </Text>
            </VStack>

            {/* PACKAGES */}
            <Grid
            templateColumns={{
                base: "1fr",
                lg: "repeat(3, minmax(0, 1fr))",
            }}
            gap={{ base: 6, xl: 7 }}
            alignItems="stretch"
            >
            {packages.map((pkg, index) => (
                <PackageCard
                key={index}
                pkg={pkg}
                />
            ))}
            </Grid>

            {/* CTA */}
            <Box
            textAlign="center"
            mt={{ base: 14, md: 20 }}
            >
            <Button
                h="58px"
                px={8}
                bg="#22007C"
                color="white"
                borderRadius="full"
                fontWeight="600"
                rightIcon={<ArrowRight size={18} />}
                _hover={{
                bg: "#160052",
                }}
            >
                Schedule a Consultation
            </Button>
            </Box>
        </Container>
        </Box>
        <OptionalAddOns />
    </Box>
  );
}