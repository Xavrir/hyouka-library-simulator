import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const book = books.find((b) => b.id === Number(id));

  useEffect(() => {
    const savedUser = localStorage.getItem('userEmail');
    if (savedUser) {
      setIsLoggedIn(true);
      setUserEmail(savedUser);
    }
  }, []);

  const handleBorrow = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to borrow books",
        variant: "destructive"
      });
      return;
    }

    if (userEmail) {
      const userBorrowedBooks = JSON.parse(localStorage.getItem(`${userEmail}_borrowed`) || '[]');
      if (!userBorrowedBooks.includes(Number(id))) {
        userBorrowedBooks.push(Number(id));
        localStorage.setItem(`${userEmail}_borrowed`, JSON.stringify(userBorrowedBooks));
        
        toast({
          title: "Book borrowed!",
          description: `You have successfully borrowed ${book?.title}`,
        });
      } else {
        toast({
          title: "Already borrowed",
          description: "You have already borrowed this book",
          variant: "destructive"
        });
      }
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Book not found</h1>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    toast({
      title: "Login Required",
      description: "Please login to view book details",
      variant: "destructive"
    });
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
              <div className="bg-gray-100 rounded-lg px-4 py-2 mb-4 inline-block">
                <span className="text-gray-700">{book.category}</span>
              </div>
              <p className="text-gray-700 mb-6">{book.description}</p>
              <Button
                onClick={handleBorrow}
                className="w-full md:w-auto"
              >
                Borrow Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;