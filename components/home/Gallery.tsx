"use client";
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Dialog,
  Portal,
  CloseButton,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

const galleryImages = [
  {
    src: "/images/wedding.jpg",
    title: "Luxury Wedding Reception",
    category: "Weddings",
    size: "large",
  },
  {
    src: "/images/gala.jpg",
    title: "Executive Corporate Gala",
    category: "Corporate",
    size: "small",
  },
  {
    src: "/images/bridal.jpg",
    title: "Elegant Bridal Styling",
    category: "Luxury Styling",
    size: "small",
  },
  {
    src: "/images/luxury.jpg",
    title: "Destination Celebration",
    category: "Destination",
    size: "large",
  },
  {
    src: "/images/vip.jpg",
    title: "VIP Guest Experience",
    category: "Premium Experience",
    size: "small",
  },
];

export const Gallery = () => {
    const {open, onOpen, onClose} = useDisclosure();
    const [activeIndex, setActiveIndex] = useState(0);

    const openImage = (index: number) => {
        setActiveIndex(index);
        onOpen();
    };

    const nextImage = () => {
        setActiveIndex((prev) =>
        prev === galleryImages.length - 1
            ? 0
            : prev + 1
        );
    };

    const prevImage = () => {
        setActiveIndex((prev) =>
        prev === 0
            ? galleryImages.length - 1
            : prev - 1
        );
    };

    return (
        <>
        <Box
            py={{ base: 24, md: 32 }}
            bg="white"
            position="relative"
            overflow="hidden"
            className="ps-md-4"
        >
            {/* AMBIENT LIGHT */}
            <Box
            position="absolute"
            top="-250px"
            left="-180px"
            w="500px"
            h="500px"
            borderRadius="full"
            bg="#22007C"
            opacity={0.04}
            filter="blur(130px)"
            />

            <Box
            position="absolute"
            bottom="-220px"
            right="-150px"
            w="450px"
            h="450px"
            borderRadius="full"
            bg="#AF3800"
            opacity={0.05}
            filter="blur(140px)"
            />

            <Container
            maxW="1450px"
            px={{ base: 6, md: 8, xl: 10 }}
            position="relative"
            zIndex={2}
            >
            {/* HEADER */}
            <Flex
                direction={{
                base: "column",
                lg: "row",
                }}
                justify="space-between"
                align={{
                base: "flex-start",
                lg: "flex-end",
                }}
                gap={{ base: 10, lg: 16 }}
                mb={{ base: 14, md: 20 }}
            >
                <VStack
                align="start"
                gap={6}
                maxW="760px"
                >
                <Badge
                    bg="rgba(34,0,124,0.05)"
                    color="#22007C"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="0.72rem"
                    letterSpacing="0.16em"
                    fontWeight="700"
                    border="1px solid rgba(34,0,124,0.08)"
                    backdropFilter="blur(10px)"
                >
                    CURATED GALLERY
                </Badge>

                <Box>
                    <Heading
                    color="#111827"
                    fontWeight="800"
                    lineHeight="0.92"
                    letterSpacing="-0.07em"
                    fontSize={{
                        base: "3rem",
                        md: "5.5rem",
                    }}
                    >
                    Crafted
                    <Text
                        as="span"
                        display="block"
                        color="#22007C"
                    >
                        Experiences
                    </Text>
                    </Heading>
                </Box>

                <Text
                    color="gray.600"
                    fontSize={{
                    base: "md",
                    md: "lg",
                    }}
                    lineHeight="2"
                    maxW="640px"
                >
                    A refined showcase of luxury celebrations,
                    immersive guest experiences, elegant styling,
                    and beautifully executed moments.
                </Text>
                </VStack>

                <Link
                as={NextLink}
                href="/gallery"
                _hover={{ textDecoration: "none" }}
                w={{
                    base: "100%",
                    lg: "auto",
                }}
                >
                    <Button
                        h="64px"
                        px={8}
                        borderRadius="full"
                        bg="#22007C"
                        color="white"
                        fontWeight="600"
                        fontSize="md"
                        w={{
                            base: "100%",
                            sm: "auto",
                        }}
                        boxShadow="0 20px 50px rgba(34,0,124,0.18)"
                        transition="all 0.35s ease"
                        _hover={{
                            bg: "#160052",
                            transform: "translateY(-3px)",
                        }}
                        >
                        <Flex align="center" gap={2}>
                            <Text>Explore Full Gallery</Text>
                            <ArrowRight size={18} />
                        </Flex>
                    </Button>
                </Link>
            </Flex>

            {/* GRID */}
            <Grid
                templateColumns={{
                base: "1fr",
                lg: "1.15fr 0.85fr 1.15fr",
                }}
                gap={6}
            >
                <Stack gap={6}>
                <GalleryCard
                    image={galleryImages[0]}
                    onClick={() => openImage(0)}
                />

                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={6}
                >
                    <GalleryCard
                    image={galleryImages[1]}
                    onClick={() => openImage(1)}
                    />

                    <GlassStatsCard />
                </Grid>
                </Stack>

                <Stack gap={6}>
                <LuxuryFeatureCard />

                <GalleryCard
                    image={galleryImages[2]}
                    onClick={() => openImage(2)}
                />

                <GlassMiniCard />
                </Stack>

                <Stack gap={6}>
                <GalleryCard
                    image={galleryImages[3]}
                    onClick={() => openImage(3)}
                />

                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={6}
                >
                    <GlassQuoteCard />

                    <GalleryCard
                    image={galleryImages[4]}
                    onClick={() => openImage(4)}
                    />
                </Grid>
                </Stack>
            </Grid>
            </Container>
        </Box>

        {/* FULLSCREEN GALLERY DIALOG */}
            <Dialog.Root
            open={open}
            onOpenChange={(e) => {
                if (!e.open) onClose();
            }}
            size="cover"
            placement="center"
            >
            <Portal>
                <Dialog.Backdrop
                bg="rgba(0,0,0,0.92)"
                backdropFilter="blur(10px)"
                />

                <Dialog.Positioner>
                <Dialog.Content
                    bg="transparent"
                    border="none"
                    boxShadow="none"
                    overflow="hidden"
                >
                    <Box
                    h="100vh"
                    position="relative"
                    >
                    {/* CLOSE */}
                    <CloseButton
                        position="absolute"
                        top={6}
                        right={6}
                        zIndex={20}
                        color="white"
                        bg="rgba(255,255,255,0.12)"
                        backdropFilter="blur(16px)"
                        border="1px solid rgba(255,255,255,0.12)"
                        borderRadius="full"
                        size="lg"
                        _hover={{
                        bg: "rgba(255,255,255,0.18)",
                        }}
                        onClick={onClose}
                    />

                    {/* PREVIOUS */}
                    <IconButton
                        aria-label="Previous image"
                        onClick={prevImage}
                        position="absolute"
                        left={{ base: 3, md: 6 }}
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={20}
                        borderRadius="full"
                        bg="rgba(255,255,255,0.12)"
                        backdropFilter="blur(16px)"
                        border="1px solid rgba(255,255,255,0.12)"
                        color="white"
                        w="60px"
                        h="60px"
                        _hover={{
                        bg: "rgba(255,255,255,0.18)",
                        }}
                    >
                        <ChevronLeft size={24} />
                    </IconButton>

                    {/* NEXT */}
                    <IconButton
                        aria-label="Next image"
                        onClick={nextImage}
                        position="absolute"
                        right={{ base: 3, md: 6 }}
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={20}
                        borderRadius="full"
                        bg="rgba(255,255,255,0.12)"
                        backdropFilter="blur(16px)"
                        border="1px solid rgba(255,255,255,0.12)"
                        color="white"
                        w="60px"
                        h="60px"
                        _hover={{
                        bg: "rgba(255,255,255,0.18)",
                        }}
                    >
                        <ChevronRight size={24} />
                    </IconButton>

                    {/* IMAGE */}
                    <Flex
                        align="center"
                        justify="center"
                        h="100%"
                        px={{ base: 4, md: 20 }}
                        py={{ base: 20, md: 14 }}
                    >
                        <Box
                        position="relative"
                        w="100%"
                        maxW="1400px"
                        h={{
                            base: "70vh",
                            md: "85vh",
                        }}
                        borderRadius={{
                            base: "24px",
                            md: "34px",
                        }}
                        overflow="hidden"
                        >
                        <Image
                            src={
                            galleryImages[activeIndex].src
                            }
                            alt={
                            galleryImages[activeIndex].title
                            }
                            fill
                            priority
                            style={{
                            objectFit: "contain",
                            }}
                        />
                        </Box>
                    </Flex>

                    {/* GLASS INFO BAR */}
                    <Flex
                        position="absolute"
                        bottom={{
                        base: 6,
                        md: 10,
                        }}
                        left={{
                        base: 4,
                        md: 10,
                        }}
                        right={{
                        base: 4,
                        md: 10,
                        }}
                        justify="space-between"
                        align={{
                        base: "flex-start",
                        md: "center",
                        }}
                        direction={{
                        base: "column",
                        md: "row",
                        }}
                        gap={5}
                        p={{
                        base: 5,
                        md: 6,
                        }}
                        borderRadius="28px"
                        bg="rgba(255,255,255,0.08)"
                        backdropFilter="blur(24px)"
                        border="1px solid rgba(255,255,255,0.12)"
                        zIndex={10}
                    >
                        <Stack gap={3}>
                        <Badge
                            alignSelf="flex-start"
                            bg="rgba(255,255,255,0.12)"
                            color="white"
                            borderRadius="full"
                            px={4}
                            py={1.5}
                            fontSize="0.68rem"
                            letterSpacing="0.1em"
                        >
                            {
                            galleryImages[activeIndex]
                                .category
                            }
                        </Badge>

                        <Heading
                            color="white"
                            fontSize={{
                            base: "1.8rem",
                            md: "3rem",
                            }}
                            lineHeight="1"
                            letterSpacing="-0.05em"
                        >
                            {
                            galleryImages[activeIndex]
                                .title
                            }
                        </Heading>
                        </Stack>

                        <Text
                        color="rgba(255,255,255,0.72)"
                        fontSize="sm"
                        >
                        {activeIndex + 1} /{" "}
                        {galleryImages.length}
                        </Text>
                    </Flex>
                    </Box>
                </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
            </Dialog.Root>
        </>
    );
    };

    /* GALLERY CARD */

    function GalleryCard({
    image,
    onClick,
    }: {
    image: any;
    onClick: () => void;
    }) {
    const height =
        image.size === "large"
        ? { base: "420px", md: "560px" }
        : { base: "260px", md: "300px" };

    return (
        <Box
        position="relative"
        overflow="hidden"
        borderRadius="34px"
        h={height}
        role="group"
        cursor="pointer"
        bg="gray.100"
        isolation="isolate"
        onClick={onClick}
        >
        <Image
            src={image.src}
            alt={image.title}
            fill
            style={{
            objectFit: "cover",
            transition: "transform 1.2s ease",
            }}
        />

        <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(
            to top,
            rgba(0,0,0,0.78),
            rgba(0,0,0,0.18),
            rgba(0,0,0,0.05)
            )"
        />

        <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(
            135deg,
            rgba(34,0,124,0.16),
            rgba(175,56,0,0.10)
            )"
            opacity={0}
            transition="0.5s ease"
            _groupHover={{
            opacity: 1,
            }}
        />

        <Flex
            position="absolute"
            top={5}
            right={5}
            w="54px"
            h="54px"
            borderRadius="full"
            align="center"
            justify="center"
            bg="rgba(255,255,255,0.12)"
            backdropFilter="blur(16px)"
            border="1px solid rgba(255,255,255,0.12)"
            opacity={0}
            transform="translateY(10px)"
            transition="all 0.4s ease"
            _groupHover={{
            opacity: 1,
            transform: "translateY(0px)",
            }}
        >
            <ArrowUpRight
            size={18}
            color="white"
            />
        </Flex>

        <Flex
            direction="column"
            justify="flex-end"
            position="absolute"
            inset={0}
            p={{ base: 5, md: 7 }}
        >
            <Stack gap={4}>
            <Badge
                alignSelf="flex-start"
                bg="rgba(255,255,255,0.12)"
                color="white"
                border="1px solid rgba(255,255,255,0.14)"
                backdropFilter="blur(12px)"
                px={4}
                py={1.5}
                borderRadius="full"
                fontSize="0.68rem"
                fontWeight="600"
                letterSpacing="0.1em"
            >
                {image.category}
            </Badge>

            <Heading
                color="white"
                fontWeight="700"
                lineHeight="0.98"
                letterSpacing="-0.05em"
                fontSize={{
                base: "1.8rem",
                md:
                    image.size === "large"
                    ? "3rem"
                    : "2rem",
                }}
                maxW="90%"
            >
                {image.title}
            </Heading>
            </Stack>
        </Flex>
        </Box>
    );
    }


    /* LUXURY FEATURE CARD */

    function LuxuryFeatureCard() {
        return (
        <Box
            position="relative"
            overflow="hidden"
            borderRadius="34px"
            minH="360px"
            bg="rgba(255,255,255,0.72)"
            backdropFilter="blur(28px)"
            border="1px solid rgba(15,23,42,0.06)"
            boxShadow="
            0 10px 30px rgba(15,23,42,0.04),
            0 25px 80px rgba(15,23,42,0.06)
            "
        >
            <Box
            position="absolute"
            top="-80px"
            right="-60px"
            w="220px"
            h="220px"
            borderRadius="full"
            bg="#22007C"
            opacity={0.08}
            filter="blur(70px)"
            />
    
            <Box
            position="absolute"
            bottom="-100px"
            left="-80px"
            w="220px"
            h="220px"
            borderRadius="full"
            bg="#AF3800"
            opacity={0.08}
            filter="blur(70px)"
            />
    
            <Flex
            direction="column"
            justify="space-between"
            h="100%"
            p={{ base: 7, md: 8 }}
            position="relative"
            zIndex={2}
            >
            <Flex
                w="70px"
                h="70px"
                borderRadius="24px"
                bg="rgba(34,0,124,0.08)"
                align="center"
                justify="center"
            >
                <Icon
                as={Sparkles}
                color="#22007C"
                boxSize={8}
                />
            </Flex>
    
            <Stack gap={5}>
                <Box>
                <Text
                    color="#AF3800"
                    fontWeight="700"
                    fontSize="0.78rem"
                    letterSpacing="0.16em"
                    textTransform="uppercase"
                    mb={3}
                >
                    Luxury Event Design
                </Text>
    
                <Heading
                    color="#111827"
                    fontWeight="800"
                    lineHeight="0.95"
                    letterSpacing="-0.06em"
                    fontSize={{
                    base: "2.3rem",
                    md: "3.3rem",
                    }}
                >
                    Every Detail
                    <Text
                    as="span"
                    display="block"
                    color="#22007C"
                    >
                    Intentionally Curated
                    </Text>
                </Heading>
                </Box>
    
                <Text
                color="gray.600"
                lineHeight="2"
                >
                Elegant aesthetics, immersive atmospheres,
                and elevated guest experiences designed
                with precision.
                </Text>
            </Stack>
            </Flex>
        </Box>
        );
    }
    
    /* STATS CARD */
    
    function GlassStatsCard() {
        return (
        <Box
            borderRadius="30px"
            bg="rgba(255,255,255,0.72)"
            backdropFilter="blur(20px)"
            border="1px solid rgba(15,23,42,0.06)"
            p={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 10px 30px rgba(15,23,42,0.04)"
        >
            <Stack gap={3}>
            <Heading
                color="#22007C"
                fontSize={{
                base: "3rem",
                md: "4rem",
                }}
                lineHeight="1"
                letterSpacing="-0.06em"
            >
                150+
            </Heading>
    
            <Text
                color="#111827"
                fontWeight="700"
                lineHeight="1.4"
            >
                Elegant Experiences Delivered
            </Text>
    
            <Text
                color="gray.600"
                fontSize="sm"
                lineHeight="1.8"
            >
                Luxury celebrations crafted with excellence.
            </Text>
            </Stack>
        </Box>
        );
    }
    
    /* QUOTE CARD */
    
    function GlassQuoteCard() {
        return (
        <Box
            borderRadius="30px"
            bg="#22007C"
            p={6}
            color="white"
            position="relative"
            overflow="hidden"
        >
            <Box
            position="absolute"
            top="-40px"
            right="-40px"
            w="140px"
            h="140px"
            borderRadius="full"
            bg="#C9A227"
            opacity={0.18}
            filter="blur(50px)"
            />
    
            <Flex
            direction="column"
            justify="space-between"
            h="100%"
            position="relative"
            zIndex={2}
            >
            <Text
                fontSize={{
                base: "1.2rem",
                md: "1.5rem",
                }}
                lineHeight="1.7"
                fontWeight="500"
            >
                “Creating unforgettable moments with
                sophistication and seamless execution.”
            </Text>
    
            <Text
                color="rgba(255,255,255,0.7)"
                fontSize="sm"
                mt={6}
            >
                Premium Event Experiences
            </Text>
            </Flex>
        </Box>
        );
    }
    
    /* MINI GLASS CARD */
    
    function GlassMiniCard() {
        return (
        <Box
            borderRadius="30px"
            bg="rgba(255,255,255,0.72)"
            backdropFilter="blur(20px)"
            border="1px solid rgba(15,23,42,0.06)"
            p={6}
            boxShadow="0 10px 30px rgba(15,23,42,0.04)"
        >
            <Stack gap={4}>
            <Text
                color="#AF3800"
                fontWeight="700"
                fontSize="0.75rem"
                letterSpacing="0.14em"
                textTransform="uppercase"
            >
                Refined Experiences
            </Text>
    
            <Heading
                color="#111827"
                fontWeight="800"
                lineHeight="1"
                letterSpacing="-0.05em"
                fontSize={{
                base: "1.7rem",
                md: "2.2rem",
                }}
            >
                Modern Luxury.
                <Text
                as="span"
                display="block"
                color="#22007C"
                >
                Elevated Atmospheres.
                </Text>
            </Heading>
    
            <Text
                color="gray.600"
                lineHeight="1.9"
            >
                Sophisticated environments thoughtfully
                designed for unforgettable celebrations.
            </Text>
            </Stack>
        </Box>
    );
}