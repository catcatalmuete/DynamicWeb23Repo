import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Dog() {
  const [dog, setDog] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchDogData = async () => {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        const data = response.data;
        setDog(data);
        console.log(data);
    };
  
    fetchDogData();
  }, [name]);

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        {dog.map((item) => (
          <div key={item.id}
            className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
            <article>
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                className="outline-dotted outline-8 outline-white outline-offset-4"
                alt={item.name}
              />
            </article>
            <article>
              <h1 className="text-6xl font-bold text-pink-400 mb-8">
                {item.name}
              </h1>

              <ul className="text-lg text-white">
                <li>
                  <span className="font-bold text-pink-400">Bred For:</span>{" "}
                  {item.bred_for}
                </li>
                <li>
                  <span className="font-bold text-pink-400">Height:</span>{" "}
                  {item.height.metric} cm
                </li>
                <li>
                  <span className="font-bold text-pink-400">Weight:</span>{" "}
                  {item.weight.metric} kgs
                </li>
                <li>
                  <span className="font-bold text-pink-400">Breed Group:</span>{" "}
                  {item.breed_group}
                </li>
                <li>
                  <span className="font-bold text-pink-400">Lifespan:</span>{" "}
                  {item.life_span}
                </li>
                <li>
                  <span className="font-bold text-pink-400">Temperament:</span>{" "}
                  {item.temperament}
                </li>
              </ul>

              <Link to="/"
                className="inline-block bg-white py-2 px-6 rounded mt-8 text-amber-400 font-bold text-lg hover:bg-slate-200 transition-all duration-200">
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}