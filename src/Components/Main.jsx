import { useState, useEffect } from "react";

const Main = () => {
  const [memeInfo, setMemeInfo] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setMemeInfo((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  function getRandomMeme() {
    // get a random number from 0 to array.length
    // use that random number to get a random meme
    // obj from the array.
    // Set state
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMemeUrl = allMemes[randomIndex].url;
    setMemeInfo((prevMeme) => ({
      ...prevMeme,
      imageUrl: randomMemeUrl,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={memeInfo.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={memeInfo.bottomText}
          />
        </label>
        <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeInfo.imageUrl} />
        <span className="top">{memeInfo.topText}</span>
        <span className="bottom">{memeInfo.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
