export function Footer() {
  return (
    <footer className="w-full p-4 bg-gray-100 border-t border-gray-200 text-center text-gray-600 text-sm mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p>Boogle — Free Books. Free Knowledge.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
