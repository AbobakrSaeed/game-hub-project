import useGenericData from "./useGenericData"

interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlatform = () => {
  return (
    useGenericData<Platform>('/platforms/lists/parents')
  )
}

export default usePlatform