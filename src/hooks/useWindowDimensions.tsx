import { useState, useEffect } from 'react'

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () =>
      window.removeEventListener('resize', updateDimensions)
  }, [])

  return dimensions
}

export default useWindowDimensions
