import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Homepage() {
  const [dogs, setDogs] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds" , {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'live_cSjFM6xcW6N5CHmKymnXZmYXvVodqORddhLlFK4KrPQuKfblyKpk3p6S5Y1dMY8t',
            },
          });
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }

    setSearched(false)
    fetchDogData()
  }, [])

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      )
      const data = await res.json()
      setDogs(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchForDog()
    setSearched(true)
  }

  return (
    <>
        <section className="p-8 max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="flex items-center justify-center text-center px-5 text-3xl font-bold lg:text-5xl text-white">
            Puppy Portal
            </h1>

            <p className="my-8">
            </p>

            <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
            autoComplete="off"
            >
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a dog / breed"
                className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            </form>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
            {!searched ? (
            dogs.map((dog) => (
                <Link
                to={`/${dog.name}`}
                key={dog.id}
                className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                >
                <article>
                    <img
                    src={dog.image.url}
                    alt={dog.name}
                    loading="lazy"
                    className="rounded md:h-72 w-full object-cover"
                    />
                    <h3 className="text-white text-lg font-bold mt-4">
                    {dog.name}
                    </h3>
                </article>
                </Link>
            ))
            ) : (
            <>
                {dogs.map((dog) => (
                <Link
                    to={`/${dog.name}`}
                    key={dog.id}
                    className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                >
                    <article>
                    <img
                        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                        className="rounded md:h-72 w-full object-cover"
                    />
                    <h3 className="text-white text-lg font-bold mt-4">
                        {dog.name}
                    </h3>
                    </article>
                </Link>
                ))}
            </>
            )}
        </div>
        </section>
    </>
)}