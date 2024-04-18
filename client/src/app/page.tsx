async function getData() {
  const res = await fetch('http://localhost:8080/browse/product/01')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data soz')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main>
    <div>
      <img src={data.imageUrl}/>
    </div>
    <div>
      {data.name}
    </div>
    <div>
      {data.price}
    </div>
    <div>
      {data.productDescription}
    </div>
    <div>
      <p>.</p>
      <p>Welcome to our website, where life is a joke and death is the punchline. Picture this:
        you're strolling through the graveyard of dreams, sipping on your cup of existential dread,
        wondering if the universe is just a cosmic joke gone wrong. But hey, at least our website is
        here to add a sprinkle of gallows humor to your day.
      </p>
      <p>In the land of the living dead, where the ghosts of deadlines past haunt your every click,
        our website stands as a beacon of dark comedy. It's like a funeral for your boredom,
        complete with eulogies for productivity and obituaries for sanity. So grab your shovel and
        dig into our content graveyard. Who knows, you might just unearth a buried treasure of
        morbid jokes and sassy sarcasm.
      </p>
      <p>But wait, there's more! As you navigate through the catacombs of cyberspace, remember: life
        is short, but our website is eternal (or at least until the servers crash). So why not spend
        your fleeting moments on this mortal coil indulging in some dark humor and questionable life
        advice? After all, we're all just zombies in the game of life, stumbling through the chaos
        with a wicked grin on our decomposing faces.
      </p>
      <p>So whether you're here for a laugh, a cry, or a moment of existential dread, welcome to our
        website. Embrace the absurdity, dance with the skeletons in your closet, and remember: in
        the end, we're all just punchlines in the cosmic joke.
      </p>
      <p>And if you ever feel lost in the labyrinth of life, just remember these immortal words:
        "Till death do us party."
      </p>
    </div>
  </main>
}