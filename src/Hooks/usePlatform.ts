// import useGenericData from "./useGenericData"
import platformsData from '../data/platforms'

/* we defined a static data for platforms, instead of calling the 
   server again and again */

// interface Platform{
//     id: number;
//     name: string;
//     slug: string;
// }
const usePlatform = () => {
  return (
    // useGenericData<Platform>('/platforms/lists/parents')
    {data: platformsData, error:false, loading:false}
  )
}

export default usePlatform