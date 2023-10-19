
import { useState, useEffect } from 'react'

export function UseEffect() {

  const [resourceType, setResourceType] = useState("posts")

  //useEffect é executado sempre que o state resourceType sofre alguma alteração, nesse caso
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => console.log(json))
  },[resourceType])

  const changeResourceType = (resourceType: string) => {
    setResourceType(resourceType)
  }
 

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{display: "flex", alignItems: "center"}} >
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  )
}