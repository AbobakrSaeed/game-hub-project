import useGenres from "@/Hooks/useGenres";

const GenreList = () => {
  const { genres, error, loading } = useGenres();
  return (
    <ul>
      {genres.map((b) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
