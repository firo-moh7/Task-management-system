interface SearchBarProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

function SearchBar({
  searchTerm,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="search-container">
  <input
    type="text"
    placeholder="🔍 Search tasks..."
    value={searchTerm}
    onChange={(e) =>
      onSearch(e.target.value)
    }
  />
</div>
  );
}

export default SearchBar;