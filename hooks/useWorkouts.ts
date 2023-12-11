import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkouts } from "../storage/Workout";
import { useIsFocused } from "@react-navigation/native";

export const useWorkouts = () =>{
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const isFocused = useIsFocused();

    // console.log(isFocused);


    useEffect(() =>{
        async function getData(){
            // console.log("getting data");
            const _workouts = await getWorkouts();
            setWorkouts(_workouts);
        }
        
        if (isFocused){
            getData();
        }
    }, [isFocused] )
    return workouts;
}