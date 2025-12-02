import { useState } from "react";

const Main = () => {
  const [memeInfo, setMemeInfo] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(e) {
     const {value} = e.currentTarget
        /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
        setMemeInfo((prevMeme) => ({
            ...prevMeme, 
            topText: value
        }))
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText"  onChange={handleChange} />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
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
