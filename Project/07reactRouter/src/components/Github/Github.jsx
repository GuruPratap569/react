import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/GuruPratap569')
        .then(response => response.json())
        .then(data => setData(data)) 
    },[])

  return (
    <div className='text-center bg-gray-600 p-4 text-white text-3xl'>Github Followers : {data.followers}
    <div className='p-2 w-72'>
        <img src={data.avatar_url} alt=""  />
    </div>
    </div>
  )
}

export default Github
