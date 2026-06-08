interface SearchBarProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

function SearchBar({
  searchTerm,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={(e) =>
          onSearch(e.target.value)
        }
        className="
          w-full px-4 py-3 rounded-xl border border-gray-300 bg-whitetext-gray-800
          shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-gray-400
        "
      />
    </div>
  );
}

export default SearchBar;