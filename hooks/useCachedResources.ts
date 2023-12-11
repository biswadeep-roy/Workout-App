import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getData, storeData, containsKey } from "../storage";
import data from "../data.json";
import { clearWorkouts, getWorkouts, initWorkouts } from "../storage/Workout";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // await clearWorkouts();
        await initWorkouts();

        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  return isLoadingComplete;
}
