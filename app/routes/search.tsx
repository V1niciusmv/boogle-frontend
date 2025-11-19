import type { MetaFunction } from "react-router";
import { useSearchParams } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Boogle Search" },
    { name: "description", content: "Search results for free books" },
  ];
};

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="flex flex-col min-h-screen">
      <Header query={query} />
      
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        <p className="text-gray-500 text-sm mb-4">About 0 results (0.00 seconds)</p>
        
        {/* Result Skeleton */}
        <div className="space-y-8 max-w-3xl">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-1">
                    <div className="text-sm text-gray-600">www.gutenberg.org › ebook › {1000 + i}</div>
                    <a href="#" className="text-xl text-blue-800 hover:underline visited:text-purple-900 font-medium">
                        Pride and Prejudice by Jane Austen
                    </a>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        A classic novel of manners... This is a placeholder description for the search result. 
                        It would typically contain a snippet of the text matching the search query.
                    </p>
                </div>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
