import { BookOpen, Search, Heart, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "./AuthDialog";

export const Navbar = () => {
  // Mock logged-in state - in a real app, this would come from your auth context/state
  const isLoggedIn = true;
  const userEmail = "test1";

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
            {isLoggedIn && (
              <>
                <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  Favorites
                </a>
                <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  Fines
                </a>
              </>
            )}
            <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Categories</a>
            <a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, {userEmail}</span>
                <Button 
                  variant="outline"
                  onClick={() => {
                    // Handle logout logic here
                    console.log("Logout clicked");
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <AuthDialog mode="login" />
                <AuthDialog mode="register" />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};