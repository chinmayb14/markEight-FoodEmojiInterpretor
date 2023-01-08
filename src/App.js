import React, { useState } from "react";
import "./styles.css";
var emojiDictionnary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍑": "Peach",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮 ": "Taco",
  "🌯": "Burrito"
};

var emojiList = Object.keys(emojiDictionnary);

export default function App() {
  var [Meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var meaning = emojiDictionnary[event.target.value];
    if (meaning === undefined) {
      meaning = "emoji not found in database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning1 = emojiDictionnary[emoji];

    setMeaning(meaning1);
  }

  return (
    <div className="App">
      <nav className="header">
        <h1>Food Emoji Interpretor</h1>
        <small className="heading2">know the meaning behind the emojis!</small>
      </nav>
      <input
        type="text"
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      />
      <div className="meanHeading">Emoji Meaning :</div>
      <div className="answer">{Meaning}</div>

      <h2>Emoji Library</h2>
      <ul style={{ listStyle: "none" }}>
        {emojiList.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                padding: "0.5rem,2rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
