import { useState, useEffect } from 'react'

type resolutionType = {
    width: number,
    height: number
}

const getResolution = () => {
    const { width: width, height: height } = window.screen

    return { width, height }

} //end_getResolution

const useResponsive = () => {
    const [ currRes, setCurrRes ] = useState<resolutionType>(getResolution())

    useEffect(() => {
        const handleResize = () => setCurrRes(getResolution())

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }) // end_useEffect

    return currRes
} //end_useResponsive

export default useResponsive