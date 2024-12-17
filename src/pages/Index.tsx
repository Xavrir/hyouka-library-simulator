import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedBooks } from "@/components/FeaturedBooks";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedBooks />
    </div>
  );
};

export default Index;