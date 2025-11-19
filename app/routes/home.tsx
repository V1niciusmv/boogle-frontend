import type { Route } from "./+types/home";
import { Logo } from "../components/ui/Logo";
import { SearchBar } from "../components/features/search/SearchBar";
import { Footer } from "../components/layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boogle" },
    { name: "description", content: "Boogle - Open Source Search Engine for Free Books" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-2xl px-4 flex flex-col items-center gap-8">
        <Logo />
        <SearchBar />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
