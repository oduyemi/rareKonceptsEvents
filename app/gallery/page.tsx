"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  CloseButton,
  Container,
  Dialog,
  Flex,
  Grid,
  Heading,
  IconButton,
  Portal,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { GalleryCard } from "@/components/gallery/Card";
import { galleryImages } from "@/components/gallery/index";
import { GalleryHero } from "@/components/gallery/Hero";


export default function MainGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "All",
    ...Array.from(
      new Set(
        galleryImages.map(
          (img) => img.category
        )
      )
    ),
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (img) =>
        img.category === selectedCategory
    );
  }, [selectedCategory]);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () =>
    setIsOpen(false);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === filteredImages.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0
        ? filteredImages.length - 1
        : prev - 1
    );
  };

  return (
    <>
      <GalleryHero />
      <Box
        bg="white"
        position="relative"
        overflow="hidden"
        py={{
          base: 24,
          md: 32,
        }}
      >
        {/* AMBIENT LIGHT */}
        <Box
          position="absolute"
          top="-180px"
          left="-120px"
          w="420px"
          h="420px"
          borderRadius="full"
          bg="#22007C"
          opacity={0.04}
          filter="blur(120px)"
        />

        <Box
          position="absolute"
          bottom="-200px"
          right="-120px"
          w="420px"
          h="420px"
          borderRadius="full"
          bg="#AF3800"
          opacity={0.05}
          filter="blur(130px)"
        />

        <Container
          maxW="1500px"
          px={{
            base: 6,
            md: 8,
            xl: 10,
          }}
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
              bg="rgba(34,0,124,0.05)"
              color="#22007C"
              px={5}
              py={2}
              borderRadius="full"
              fontSize="0.72rem"
              letterSpacing="0.16em"
              fontWeight="700"
              border="1px solid rgba(34,0,124,0.08)"
              backdropFilter="blur(10px)"
            >
              CURATED LUXURY EXPERIENCES
            </Badge>

            <Heading
              mt={7}
              color="#111827"
              fontWeight="800"
              lineHeight="0.92"
              letterSpacing="-0.08em"
              fontSize={{
                base: "3.3rem",
                md: "6.5rem",
              }}
              maxW="1000px"
            >
              Our Signature
              <Text
                as="span"
                display="block"
                color="#22007C"
              >
                Gallery
              </Text>
            </Heading>

            <Text
              mt={7}
              color="gray.600"
              lineHeight="2"
              maxW="760px"
              fontSize={{
                base: "md",
                md: "lg",
              }}
            >
              Explore beautifully curated
              celebrations, elevated guest
              experiences, luxury styling, and
              sophisticated event productions.
            </Text>
          </Flex>

          {/* FILTERS */}
          <Flex
            justify="center"
            flexWrap="wrap"
            gap={4}
            mb={{
              base: 12,
              md: 16,
            }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                h="52px"
                px={6}
                borderRadius="full"
                bg={
                  selectedCategory === category
                    ? "#22007C"
                    : "rgba(34,0,124,0.04)"
                }
                color={
                  selectedCategory === category
                    ? "white"
                    : "#22007C"
                }
                border={
                  selectedCategory === category
                    ? "none"
                    : "1px solid rgba(34,0,124,0.08)"
                }
                fontWeight="600"
                backdropFilter="blur(10px)"
                _hover={{
                  bg:
                    selectedCategory === category
                      ? "#160052"
                      : "rgba(34,0,124,0.08)",
                }}
              >
                {category}
              </Button>
            ))}
          </Flex>

          {/* MASONRY GRID */}
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {filteredImages.map(
              (image, index) => (
                <GalleryCard
                  key={index}
                  image={image}
                  index={index}
                  onClick={() =>
                    openGallery(index)
                  }
                />
              )
            )}
          </Grid>

          {/* CTA */}
          <Box
            mt={{
              base: 20,
              md: 28,
            }}
            borderRadius="36px"
            overflow="hidden"
            position="relative"
            bg="#22007C"
          >
            <Box
              position="absolute"
              top="-80px"
              right="-80px"
              w="260px"
              h="260px"
              borderRadius="full"
              bg="#AF3800"
              opacity={0.18}
              filter="blur(90px)"
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
              gap={10}
              px={{
                base: 7,
                md: 12,
              }}
              py={{
                base: 12,
                md: 14,
              }}
              position="relative"
              zIndex={2}
            >
              <VStack
                align="start"
                gap={5}
                maxW="700px"
              >
                <Flex
                  w="70px"
                  h="70px"
                  borderRadius="24px"
                  bg="rgba(255,255,255,0.10)"
                  align="center"
                  justify="center"
                  backdropFilter="blur(16px)"
                >
                  <Sparkles
                    size={30}
                    color="#F6C453"
                  />
                </Flex>

                <Heading
                  color="white"
                  lineHeight="0.95"
                  letterSpacing="-0.06em"
                  fontWeight="800"
                  fontSize={{
                    base: "2.5rem",
                    md: "4rem",
                  }}
                >
                  Elegant Moments.
                  <Text
                    as="span"
                    display="block"
                    color="#F6C453"
                  >
                    Timeless Experiences.
                  </Text>
                </Heading>

                <Text
                  color="rgba(255,255,255,0.72)"
                  lineHeight="2"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                >
                  Every event is thoughtfully
                  designed to create immersive,
                  unforgettable guest experiences.
                </Text>
              </VStack>

              <Button
                h="64px"
                px={8}
                borderRadius="full"
                bg="white"
                color="#22007C"
                fontWeight="700"
                fontSize="md"
                _hover={{
                  transform:
                    "translateY(-3px)",
                }}
              >
                Book Consultation
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>

      {/* LIGHTBOX */}
      <Dialog.Root
        open={isOpen}
        onOpenChange={(e) => {
          if (!e.open) closeGallery();
        }}
        size="cover"
      >
        <Portal>
          <Dialog.Backdrop
            bg="rgba(0,0,0,0.94)"
            backdropFilter="blur(14px)"
          />

          <Dialog.Positioner>
            <Dialog.Content
              bg="transparent"
              border="none"
              boxShadow="none"
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
                  bg="rgba(255,255,255,0.10)"
                  backdropFilter="blur(16px)"
                  borderRadius="full"
                  size="lg"
                  onClick={closeGallery}
                />

                {/* PREV */}
                <IconButton
                  aria-label="Previous image"
                  onClick={prevImage}
                  position="absolute"
                  left={{
                    base: 3,
                    md: 6,
                  }}
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={20}
                  borderRadius="full"
                  bg="rgba(255,255,255,0.10)"
                  color="white"
                  w="60px"
                  h="60px"
                  _hover={{
                    bg: "rgba(255,255,255,0.16)",
                  }}
                >
                  <ChevronLeft size={26} />
                </IconButton>

                {/* NEXT */}
                <IconButton
                  aria-label="Next image"
                  onClick={nextImage}
                  position="absolute"
                  right={{
                    base: 3,
                    md: 6,
                  }}
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={20}
                  borderRadius="full"
                  bg="rgba(255,255,255,0.10)"
                  color="white"
                  w="60px"
                  h="60px"
                  _hover={{
                    bg: "rgba(255,255,255,0.16)",
                  }}
                >
                  <ChevronRight size={26} />
                </IconButton>

                {/* IMAGE */}
                <Flex
                  h="100%"
                  align="center"
                  justify="center"
                  px={{
                    base: 4,
                    md: 20,
                  }}
                  py={{
                    base: 20,
                    md: 14,
                  }}
                >
                  <Box
                    position="relative"
                    w="100%"
                    maxW="1500px"
                    h={{
                      base: "72vh",
                      md: "88vh",
                    }}
                    borderRadius={{
                      base: "24px",
                      md: "36px",
                    }}
                    overflow="hidden"
                  >
                    <Image
                      src={
                        filteredImages[
                          activeIndex
                        ]?.src
                      }
                      alt={
                        filteredImages[
                          activeIndex
                        ]?.title
                      }
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Flex>

                {/* INFO */}
                <Flex
                  position="absolute"
                  bottom={{
                    base: 5,
                    md: 8,
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
                  borderRadius="30px"
                  bg="rgba(255,255,255,0.08)"
                  backdropFilter="blur(24px)"
                  border="1px solid rgba(255,255,255,0.12)"
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
                        filteredImages[
                          activeIndex
                        ]?.category
                      }
                    </Badge>

                    <Heading
                      color="white"
                      lineHeight="1"
                      letterSpacing="-0.05em"
                      fontSize={{
                        base: "1.8rem",
                        md: "3rem",
                      }}
                    >
                      {
                        filteredImages[
                          activeIndex
                        ]?.title
                      }
                    </Heading>
                  </Stack>

                  <Text
                    color="rgba(255,255,255,0.72)"
                    fontSize="sm"
                  >
                    {activeIndex + 1} /{" "}
                    {filteredImages.length}
                  </Text>
                </Flex>
              </Box>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}

