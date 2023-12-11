import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkoutBySlug, getWorkouts } from "../storage/Workout";

export const useWorkoutsBySlug = (slug: string) =>{
    const [workout, setWorkout] = useState<Workout>();
    useEffect(() =>{
        async function getData(){
            // console.log("getting data");
            const _workout = await getWorkoutBySlug(slug);
            setWorkout(_workout);
        }
        
        
            getData();
    
    }, [])
    return workout;
}