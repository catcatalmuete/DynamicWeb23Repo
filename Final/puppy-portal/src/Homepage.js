import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Homepage() {
    const [dogs, setDogs] = useState([])
    const [text, setText] = useState("")
    const [searched, setSearched] = useState(false)

    useEffect(() => {
        const fetchDogData = async () => {
            const res = await fetch("https://api.thedogapi.com/v1/breeds" , {
                headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'live_cSjFM6xcW6N5CHmKymnXZmYXvVodqORddhLlFK4KrPQuKfblyKpk3p6S5Y1dMY8t',
                },
            });
            const data = await res.json()
            setDogs(data)
        }

        setSearched(false)
        fetchDogData()
    }, [])

    const searchForDog = async () => {
        const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
        )
        const data = await res.json()
        setDogs(data)
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
                <h1 className="flex items-center justify-center text-center px-5 text-8xl font-bold text-pink-400">
                Puppy Portal
                </h1>

                <p className="my-8">
                </p>

                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a breed"
                    className="py-2 px-4 rounded shadow w-full bg-white text-xl text-amber-500 placeholder-amber-500"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
                {!searched ? (dogs.map((dog) => (
                    <Link to={`/${dog.name}`} key={dog.id}
                        className="bg-amber-100 p-4 rounded hover:outline-dotted outline-8 outline-white outline-offset-4 transition-all duration-200">
                    <article>
                        <img src={dog.image.url} alt={dog.name}
                            className="rounded md:h-72 w-full object-cover"/>
                        <h2 className="text-pink-400 text-2xl font-bold mt-4">
                            {dog.name}
                        </h2>
                    </article>
                    </Link>
                ))
                ) : (
                <>
                    {dogs.map((dog) => (
                    <Link to={`/${dog.name}`} key={dog.id}
                        className="bg-amber-100 p-4 rounded hover:outline-dotted outline-8 outline-white outline-offset-4 transition-all duration-200">
                        <article>
                        <img
                            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                            alt={dog.name}
                            className="rounded md:h-72 w-full object-cover"
                        />
                        <h2 className="text-pink-400 text-2xl font-bold mt-4">
                            {dog.name}
                        </h2>
                        </article>
                    </Link>
                    ))}
                </>
                )}
            </div>
            </section>
        </>
    )
}