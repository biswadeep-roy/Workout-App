import { useState, useEffect } from 'react'
import { useRef } from 'react';
export function useCountDown(
    idx: number,
    initialCount: number = -1
){
    let intervalRef= useRef<number>();
        const [countDown, setCountDown] = useState(initialCount);
        const [isRunning, setIsRunning] = useState(false);
        useEffect(() =>{
            if(idx == -1) {return;}
            // setIsRunning(true);
            if(isRunning && !intervalRef.current){
              intervalRef.current = window.setInterval(() =>{
                setCountDown((count) =>{
                  return count -1;
                })
              },1000)
            }
            
            return cleanup;
          }, [idx, isRunning])
        useEffect(() =>{
            setCountDown(initialCount);
        }, [initialCount])  

        useEffect(() =>{
            if (countDown === 0){
                cleanup();
                // console.log("cleanup")
            }
        }, [countDown])

        const cleanup = () => {
            if (intervalRef.current){
              setIsRunning(false);
                
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined
            }
        }

          return {
            countDown,
            isRunning,
            stop: cleanup,
            start: (count?: number) => {
              setCountDown(count ?? initialCount);
              setIsRunning(true);

            }
            
          };
    }
