
interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchComponent = ({ onChange }: SearchBarProps) => {
  return (
    <input
      type='text'
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search users'
    />
  );
};

export default SearchComponent;
