// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
//     const [data, setData] = useState({
//     followers: 0,
//     avatar_url: ""
// })
//     useEffect(() => {
//         // fetch('https://api.github.com/users/hiteshchoudhary')
//         fetch('https://api.github.com/users/Shahbaz-44')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         });
//     },[])

// 2nd way for fetch data use hook useloaderdata
  const data = useLoaderData()

  return (
    <div className="text-center p-4 m-4 text-4xl bg-gray-200">
      Github Follwers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// another way for fast load

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Shahbaz-44")
    return response.json()
}



