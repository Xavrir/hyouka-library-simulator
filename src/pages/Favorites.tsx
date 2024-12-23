import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Favorites = () => {
  const { toast } = useToast();
  // Mock data - in a real app, this would come from your backend
  const [favorites, setFavorites] = React.useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverUrl: "https://example.com/gatsby.jpg",
      addedDate: "2024-02-20",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      coverUrl: "https://example.com/1984.jpg",
      addedDate: "2024-02-19",
    }
  ]);

  const handleRemove = (bookId: number) => {
    setFavorites(favorites.filter(book => book.id !== bookId));
    toast({
      title: "Book removed",
      description: "The book has been removed from your favorites",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Favorite Books</h1>
          <p className="text-gray-600">Manage your collection of favorite books</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-xl">{book.title}</span>
                  <Heart className="h-5 w-5 text-red-500 fill-current" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Added: {book.addedDate}</span>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleRemove(book.id)}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;