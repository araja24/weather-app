import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useGeolocation } from "@/hooks/use-geolocation"
import WeatherSkeleton from "@/components/loading-skeleton"

const WeatherDashboord = () => {

  const { coordinates, error: locationError, isLoading: isLoadingLocation, getLocation } = useGeolocation();
  console.log(coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      
    }
  };
  if (isLoadingLocation) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4">
      {/* { fav cities} */}
      <div className=" flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={"outline"} size={"icon"}
          onClick={handleRefresh}
        >
          <RefreshCw />
        </Button>

      </div>

      {/* { current weather} */}
    </div>






  )
}
export default WeatherDashboord;