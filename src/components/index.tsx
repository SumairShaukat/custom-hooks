import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import { fetchUsers, User } from "./util";
import { useDebounce } from "./hooks";
const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadUSers = async () => {
      setLoading(false);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);
      setLoading(false);
    };
    loadUSers();
  }, [debouncedSearch]);

  return (
    <div>
      <SearchComponent onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
};

export default Demo;
