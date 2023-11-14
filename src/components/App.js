// create your App component here
import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'



function App() {


    const [dog, setDog] = useState('')
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(r => r.json())
          .then(data => setDog(data))
       }, [])

    return (
        <img src = {dog} alt = "A random dog"/>

    )
}

export default App;
