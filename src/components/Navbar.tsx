import { BookOpen, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary-DEFAULT" />
            <span className="text-xl font-semibold text-primary-dark">Hyouka</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Books</a>
            <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Categories</a>
            <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button className="bg-primary-DEFAULT hover:bg-primary-dark text-white">
              <User className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};