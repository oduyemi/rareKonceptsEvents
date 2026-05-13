"use client";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "animate.css";

export const Hero = () => {
  return (
    <Box className="hero-carousel">
      <Swiper
        modules={[ Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1200}
        className="hero-swiper"
      >
        {/* =========================================
            SLIDE 1
        ========================================= */}
        <SwiperSlide>
          <Box className="hero-slide">
            <img
              className="w-100 hero-image"
              src="/images/homehero1.png"
              alt="Luxury Event Planning"
            />

            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <Container maxW="7xl">
                <div className="title animate__animated animate__fadeInDown">
                  <div className="title-center">
                    <h5>
                      Premium Event Planning Company
                    </h5>

                    <h1 className="display-1 hero-heading animate__animated animate__fadeInUp">
                      Best Events Plug
                    </h1>
                  </div>
                </div>

                <Text
                  className="hero-text animate__animated animate__fadeInUp animate__delay-1s"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                >
                  Creating luxury weddings, corporate
                  events, nightlife experiences, birthday
                  celebrations, concerts, fashion shows,
                  and unforgettable entertainment
                  experiences with professional planning &
                  coordination.
                </Text>

                <Flex className="hero-buttons animate__animated animate__fadeInUp animate__delay-1s">
                  <Link
                    href="/booking"
                    className="hero-btn-primary"
                  >
                    Book An Event
                  </Link>

                  <Link
                    href="/services"
                    className="hero-btn-secondary"
                  >
                    Explore Services
                  </Link>
                </Flex>
              </Container>
            </div>
          </Box>
        </SwiperSlide>

        {/* =========================================
            SLIDE 2
        ========================================= */}
        <SwiperSlide>
          <Box className="hero-slide">
            <img
              className="w-100 hero-image"
              src="/images/homehero2.png"
              alt="Event Management Services"
            />

            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <Container maxW="7xl">
                <div className="title animate__animated animate__fadeInDown">
                  <div className="title-center">
                    <h5>
                      Trusted Event Management Brand
                    </h5>

                    <h1 className="display-1 hero-heading animate__animated animate__fadeInUp">
                      Curating Experiences
                    </h1>
                  </div>
                </div>

                <Text
                  className="hero-text animate__animated animate__fadeInUp animate__delay-1s"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                >
                  From private parties to large-scale
                  entertainment events, we deliver
                  seamless event coordination, venue
                  styling, logistics, branding, guest
                  management, and premium event
                  experiences tailored to your vision.
                </Text>

                <Flex className="hero-buttons animate__animated animate__fadeInUp animate__delay-1s">
                  <Link
                    href="/gallery"
                    className="hero-btn-primary"
                  >
                    View Gallery
                  </Link>

                  <Link
                    href="/about"
                    className="hero-btn-secondary"
                  >
                    Learn More
                  </Link>
                </Flex>
              </Container>
            </div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}