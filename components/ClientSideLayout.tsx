"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { Header } from "@/navigation/Header";
import { Footer } from "@/navigation/Footer";
import { WhatsAppChatButton } from "@/components/LiveChat";

export const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    setMounted(true);

    if (isAdminRoute) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [isAdminRoute, router]);

  if (!mounted) return null;

  return (
    <>
      {!isAdminRoute && (
        <>
          <Header />
        </>
      )}

      <Box flex="1" m={0} p={0}>
        {children}
      </Box>

      {!isAdminRoute && (
        <>
          <WhatsAppChatButton />
          <Box className="mt-5">
            <Footer />
          </Box>
        </>
      )}
    </>
  );
};