import React, { useState, useEffect } from "react"
import data from './data'

export default function Videos() {
  const [size, setSize] = useState({ w: "560", h: "315"})

  useEffect(() => {
    if(typeof window !== undefined) {
      if(window.innerWidth < 768) {
        const width = 280;
        const height = width * .75
        setSize({w: `${width}`, h: `${height}`})
      } else {
        setSize({ w: "560", h: "315"})
      }
    }
  },[])

  return (
    <>
    {
      data.map(v =>
        {
          return (
          <div key={v.title}>
            <h2>{v.title}</h2>
            <iframe
              width={size.w}
              height={size.h}
              src={v.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{ margin: "auto"}}
              />
          </div>
        )
      }
    )
    }
    </>
  )
}
