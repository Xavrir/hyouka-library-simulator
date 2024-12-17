export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A story of decadence and excess.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Science Fiction",
    description: "A dystopian social science fiction novel.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    description: "A romantic novel of manners.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A story of racial injustice and loss of innocence.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    description: "A story of teenage alienation and angst.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A fantasy novel about a hobbit's journey.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Science Fiction",
    description: "A dystopian novel about a futuristic society.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 8,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
    description: "A mystery thriller novel.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    description: "A philosophical novel about following one's dreams.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "An epic high-fantasy novel.",
    coverUrl: "/placeholder.svg"
  },
  // ... Adding more books to reach 50
  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    description: "The first book in the Harry Potter series.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 12,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Science Fiction",
    description: "A dystopian novel about survival.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 13,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Mystery",
    description: "A crime thriller novel.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 14,
    title: "The Road",
    author: "Cormac McCarthy",
    category: "Post-Apocalyptic",
    description: "A post-apocalyptic tale of survival.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 15,
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    description: "A psychological thriller novel.",
    coverUrl: "/placeholder.svg"
  },
  // Continue with more books...
  {
    id: 16,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    description: "A story of friendship and redemption.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 17,
    title: "The Help",
    author: "Kathryn Stockett",
    category: "Historical Fiction",
    description: "A story about African American maids in the 1960s.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 18,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    category: "Mystery",
    description: "A psychological thriller novel.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 19,
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Young Adult",
    description: "A love story between two teenage cancer patients.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 20,
    title: "The Martian",
    author: "Andy Weir",
    category: "Science Fiction",
    description: "A story of survival on Mars.",
    coverUrl: "/placeholder.svg"
  },
  // Adding more books...
  {
    id: 21,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    description: "A psychological thriller about a woman's act of violence.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 22,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    category: "Fiction",
    description: "A coming-of-age story and murder mystery.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 23,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    category: "Historical Fiction",
    description: "A story about a Hollywood movie icon.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 24,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    category: "Romance",
    description: "A contemporary romance novel.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 25,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    description: "A story about life's infinite possibilities.",
    coverUrl: "/placeholder.svg"
  },
  // Continue adding more books...
  {
    id: 26,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    description: "A guide to building good habits.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 27,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    description: "Timeless lessons on wealth, greed, and happiness.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 28,
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Science Fiction",
    description: "A lone astronaut must save humanity.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 29,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    category: "Mystery",
    description: "Four retirees meet weekly to solve cold cases.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 30,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    category: "Science Fiction",
    description: "A story about an artificial friend.",
    coverUrl: "/placeholder.svg"
  },
  // Adding final set of books...
  {
    id: 31,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    category: "Fantasy",
    description: "A woman makes a Faustian bargain.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 32,
    title: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    category: "Horror",
    description: "A reimagining of the classic gothic suspense novel.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 33,
    title: "The Guest List",
    author: "Lucy Foley",
    category: "Mystery",
    description: "A wedding celebration turns dark.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 34,
    title: "Such a Fun Age",
    author: "Kiley Reid",
    category: "Fiction",
    description: "A story about race and privilege.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 35,
    title: "Beach Read",
    author: "Emily Henry",
    category: "Romance",
    description: "Two writers switch genres for a summer.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 36,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    category: "Historical Fiction",
    description: "Twin sisters lead very different lives.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 37,
    title: "Hamnet",
    author: "Maggie O'Farrell",
    category: "Historical Fiction",
    description: "A fictionalized account of Shakespeare's son.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 38,
    title: "The City We Became",
    author: "N.K. Jemisin",
    category: "Fantasy",
    description: "New York City comes to life.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 39,
    title: "Transcendent Kingdom",
    author: "Yaa Gyasi",
    category: "Fiction",
    description: "A novel about faith, science, and addiction.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 40,
    title: "The Glass Hotel",
    author: "Emily St. John Mandel",
    category: "Literary Fiction",
    description: "A story of money, beauty, white-collar crime, and ghosts.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 41,
    title: "Anxious People",
    author: "Fredrik Backman",
    category: "Fiction",
    description: "A comedy about a bank robbery gone wrong.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 42,
    title: "The Order",
    author: "Daniel Silva",
    category: "Thriller",
    description: "A spy thriller involving the Vatican.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 43,
    title: "One by One",
    author: "Ruth Ware",
    category: "Mystery",
    description: "A snow-bound chalet becomes a crime scene.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 44,
    title: "The Book of Two Ways",
    author: "Jodi Picoult",
    category: "Fiction",
    description: "A story about the choices that change our lives.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 45,
    title: "Troubled Blood",
    author: "Robert Galbraith",
    category: "Mystery",
    description: "A cold case investigation.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 46,
    title: "The Evening and the Morning",
    author: "Ken Follett",
    category: "Historical Fiction",
    description: "A prequel to The Pillars of the Earth.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 47,
    title: "Invisible Girl",
    author: "Lisa Jewell",
    category: "Thriller",
    description: "A psychological thriller about disappearance.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 48,
    title: "The Return",
    author: "Nicholas Sparks",
    category: "Romance",
    description: "A story of love and secrets.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 49,
    title: "Magic Lessons",
    author: "Alice Hoffman",
    category: "Fantasy",
    description: "A prequel to Practical Magic.",
    coverUrl: "/placeholder.svg"
  },
  {
    id: 50,
    title: "The Searcher",
    author: "Tana French",
    category: "Mystery",
    description: "A retired detective investigates a missing person case.",
    coverUrl: "/placeholder.svg"
  }
];