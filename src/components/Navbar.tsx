import { BookOpen, Search, Heart, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "./AuthDialog";
import { Link, useNavigate } from "react-router-dom";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useState, useEffect } from "react";
import { books } from "@/data/books";
import { useToast } from "@/components/ui/use-toast";

const VALID_CREDENTIALS = {
  email: "rizky",
  password: "binus123"
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Load login state from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('userEmail');
    if (savedUser) {
      setIsLoggedIn(true);
      setUserEmail(savedUser);
    }
  }, []);

  const categories = Array.from(new Set(books.map(book => book.category)));
  
  const filteredBooks = selectedCategory 
    ? books.filter(book => book.category === selectedCategory)
    : books;

  const handleBookClick = (bookId: number) => {
    setOpen(false);
    navigate(`/book/${bookId}`);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBorrow = (bookId: number) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to borrow books",
        variant: "destructive"
      });
      return;
    }
    
    const book = books.find(b => b.id === bookId);
    if (book) {
      // Save borrowed book to user's data
      const userBorrowedBooks = JSON.parse(localStorage.getItem(`${userEmail}_borrowed`) || '[]');
      if (!userBorrowedBooks.includes(bookId)) {
        userBorrowedBooks.push(bookId);
        localStorage.setItem(`${userEmail}_borrowed`, JSON.stringify(userBorrowedBooks));
      }

      toast({
        title: "Book borrowed!",
        description: `You have successfully borrowed ${book.title}`,
      });
    }
    setOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    localStorage.removeItem('userEmail');
    localStorage.removeItem(`${userEmail}_borrowed`);
    localStorage.removeItem(`${userEmail}_favorites`);
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate('/');
  };

  const handleLoginSuccess = (email: string) => {
    if (email === VALID_CREDENTIALS.email) {
      setIsLoggedIn(true);
      setUserEmail(email);
      localStorage.setItem('userEmail', email);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary-DEFAULT" />
              <span className="text-xl font-semibold text-primary-dark">Hyouka</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Home</Link>
            {isLoggedIn && (
              <>
                <Link to="/favorites" className="text-gray-600 hover:text-primary-DEFAULT transition-colors flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  Favorites
                </Link>
                <Link to="/fines" className="text-gray-600 hover:text-primary-DEFAULT transition-colors flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  Fines
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, {userEmail}</span>
                <Button 
                  variant="outline"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <AuthDialog mode="login" onLoginSuccess={(email) => {
                  setIsLoggedIn(true);
                  setUserEmail(email);
                }} />
                <AuthDialog mode="register" onLoginSuccess={(email) => {
                  setIsLoggedIn(true);
                  setUserEmail(email);
                }} />
              </>
            )}
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder={selectedCategory ? `Search in ${selectedCategory}...` : "Search books or browse by category..."} 
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {!selectedCategory ? (
            <CommandGroup heading="Categories">
              {categories.map((category) => (
                <CommandItem
                  key={category}
                  onSelect={() => handleCategoryClick(category)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {category}
                </CommandItem>
              ))}
            </CommandGroup>
          ) : (
            <>
              <CommandGroup heading={selectedCategory}>
                <CommandItem
                  onSelect={() => setSelectedCategory(null)}
                  className="text-blue-500 cursor-pointer hover:bg-gray-100"
                >
                  ← Back to all categories
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Books">
                {filteredBooks.map((book) => (
                  <CommandItem
                    key={book.id}
                    className="flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <div
                      onClick={() => handleBookClick(book.id)}
                      className="flex-1"
                    >
                      {book.title} - {book.author}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBorrow(book.id);
                      }}
                      className="ml-2"
                    >
                      Borrow
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </nav>
  );
