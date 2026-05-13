"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`premium-header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="navbar navbar-expand-xl premium-navbar">
        <div className="d-flex align-items-center ps-md-4">
          <Link href="/" className="navbar-brand m-0">
            <div className="logo-container">
              <Image
                src="/images/logo/logo.png"
                alt="site logo"
                width={72}
                height={72}
                priority
                className="logo-img"
              />
            </div>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="mobile-toggle d-xl-none"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div
          className={`nav-wrapper ${mobileMenu ? "mobile-nav-open" : ""}`}
        >
          <div className="navbar-nav mx-auto">
            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>

            <Link href="/about" className="nav-item nav-link">
              About
            </Link>

            <Link href="/service" className="nav-item nav-link">
              Services
            </Link>

            <Link href="/gallery" className="nav-item nav-link">
              Gallery
            </Link>

            {/* DROPDOWN */}
            <div
              className={`premium-dropdown ${
                dropdownOpen ? "show-dropdown" : ""
              }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="nav-link dropdown-trigger d-inline-flex align-items-center gap-1 border-0 bg-transparent"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                More
                <span className="d-inline-flex align-items-center">
                  <FiChevronDown className="dropdown-icon" />
                </span>
              </button>

              <div className="dropdown-menu-custom">
                <div className="dropdown-glow"></div>

                <Link
                  href="/why-choose-us"
                  className="dropdown-item-custom"
                >
                  <span>Why Choose Us?</span>
                  <FiArrowRight size={16} />
                </Link>

                <Link
                  href="/testimonials"
                  className="dropdown-item-custom"
                >
                  <span>Testimonials</span>
                  <FiArrowRight size={16} />
                </Link>

                <Link
                  href="/social-connect"
                  className="dropdown-item-custom"
                >
                  <span>Social Connect</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="header-actions">
            <Link href="/contact" className="premium-btn">
              <span>Contact Us</span>

              <div className="btn-icon">
                <FiArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};