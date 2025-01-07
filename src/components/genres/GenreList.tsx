import useGenres from "@/Hooks/useGenres";

const GenreList = () => {
  const { data, error, loading } = useGenres();
  return (
    <ul>
      {data.map((b) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
