import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialBooks = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    status: "reading",
    cover:
      "https://substackcdn.com/image/fetch/$s_!pr17!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe78bf586-4ce5-471a-af75-bdeb6f7757f2_1200x1850.jpeg",
  },
  {
    id: 2,
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    status: "unread",
    cover:
      "https://m.media-amazon.com/images/I/81SSPfJQocL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    status: "read",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgaxZSxkt1NY2Vr5NwbEHqcodku1Jn_9AQmIkoxoVqrLF6UdoA3XlQp4j&s=10",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "read",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  {
    id: 5,
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    status: "unread",
    cover:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398530003/the-perks-of-being-a-wallflower-ya-edition-9781398530003_hr.jpg",
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    status: "unread",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpr8URRswHgP-YvNu6s32L2nBtwXKdSwKmNq054HbsRVLvcl-ESPh6aFu&s=10",
  },
  {
    id: 7,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    status: "reading",
    cover:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625587534/the-picture-of-dorian-gray-9781625587534_lg.jpg",
  },
  {
    id: 8,
    title: "The Secret History",
    author: "Donna Tartt",
    status: "unread",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-nwAJogtKIS-TKx3vJIAaExbp84nf1rYwRKy9ArwgIFkcT_JqQ9uwDs&s=10",
  },
  {
    id: 9,
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    status: "read",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Gx_o3yuccLwl186GIwY3ymj5hfFZyEV-NR0QfNXYyG7swLzHELILDdT&s=10",
  },
  {
    id: 10,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    status: "unread",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKu8QYU7Y6-Adr7-v-9hnj77GAGgXWwgMNLEs8vRVPaQ&s=10",
  },
  {
    id: 11,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    status: "unread",
    cover:
      "https://static.yakaboo.ua/media/catalog/product/8/1/817vqet828l.jpg",
  },
  {
    id: 12,
    title: "The Book Thief",
    author: "Markus Zusak",
    status: "reading",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKoPhas9qi227K9H0IBKVGMGTyqf58P0_MNHJdY107Wkn8cFhfCAs1E8&s=10",
  },
  {
    id: 13,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    status: "read",
    cover:
      "https://m.media-amazon.com/images/I/81mCE+uclxL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 14,
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    status: "unread",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPT5t2RoRCXck8PMy392N2EAspvg2dAqVl4LEbmxRTZg&s",
  },
  {
    id: 15,
    title: "Coraline",
    author: "Neil Gaiman",
    status: "read",
    cover:
      "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/c/o/content_21_1.jpg",
  },
  {
    id: 16,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    status: "unread",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1637R8cQJYLtGUrtFeQttjjJn4a4h_ZhbcdQG453sEndV-jJl2bsUTk&s=10",
  },
  {
    id: 17,
    title: "Normal People",
    author: "Sally Rooney",
    status: "reading",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg",
  },
  {
    id: 18,
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "unread",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1483412266i/865.jpg",
  },
  {
    id: 19,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    status: "read",
    cover:
      "https://m.media-amazon.com/images/I/81msb6gUBTL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 20,
    title: "Verity",
    author: "Colleen Hoover",
    status: "unread",
    cover:
      "https://static.yakaboo.ua/media/catalog/product/7/1/71jte84advl.jpg",
  },
];

export const useBookStore = create(
  persist(
    (set) => ({
      books: initialBooks,
      search: "",
      filter: "all",
      readingLogs: [],

      addBook: (title, author) =>
        set((state) => ({
          books: [
            ...state.books,
            {
              id: Date.now(),
              title,
              author,
              status: "unread",
            },
          ],
        })),

      removeBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
          readingLogs: state.readingLogs.filter((log) => log.bookId !== id),
        })),

      setSearch: (search) => set({ search }),

      setFilter: (filter) => set({ filter }),

      changeStatus: (id, status) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === id ? { ...book, status } : book,
          ),
        })),

      addReadingLog: ({ date, bookId, pages }) =>
        set((state) => ({
          readingLogs: [
            ...state.readingLogs,
            {
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
              date,
              bookId: Number(bookId),
              pages: Number(pages),
            },
          ],
        })),

      removeReadingLog: (id) =>
        set((state) => ({
          readingLogs: state.readingLogs.filter((log) => log.id !== id),
        })),
    }),
    {
      name: "book-library-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        books: state.books,
        readingLogs: state.readingLogs,
      }),
    },
  ),
);
