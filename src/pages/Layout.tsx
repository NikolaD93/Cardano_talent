import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { ScrollToHashElement } from "@/components/shared/ScrollToHashElement";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
