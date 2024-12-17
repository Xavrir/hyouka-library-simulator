import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-light to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 animate-fade-up">
          Welcome to Hyouka Library
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
          Discover thousands of books in our online collection. Start your reading journey today.
        </p>
        
        <div className="max-w-xl mx-auto flex gap-2 animate-fade-up">
          <Input 
            placeholder="Search for books, authors, or genres..." 
            className="h-12"
          />
          <Button className="bg-primary-DEFAULT hover:bg-primary-dark h-12 px-6">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};