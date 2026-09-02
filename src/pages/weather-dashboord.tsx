import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useGeolocation } from "@/hooks/use-geolocation"

import WeatherSkeleton from "@/components/loading-skeleton"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { MapPin } from "lucide-react"

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

  if (locationError){
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates){
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location to get weather data.</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
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