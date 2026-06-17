import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import HomeCourses from "./_components/HomeCourses";
import Footer from "./_components/Footer";
import Featured from "./_components/Featured";
import CTASection from "./_components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero/>
      <Featured/>
      <HomeCourses/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
