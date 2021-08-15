import React from "react"
import data from './data'

export default function Videos() {
  return (
    <>
    {
      data.map(v =>
        {
          return (
          <div key={v.title}>
            <h2>{v.title}</h2>
            <iframe width="560" height="315" src={v.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
        )
      }
    )
    }
    </>
  )
}
