import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div class="App">
      <div class="navbar">
        <a class="active" href="App.js">
          Home
        </a>
        <a href="about.htm">About</a>
        <a href="hardware.htm">Help</a>
        <a href="https://discord.gg/QUe8c5" class="right">
          Discord
        </a>
      </div>

      <div class="title">
        <h1>Dogerock Digital</h1>
        <h3>Cryptocurrency Mining</h3>
      </div>

      <div class="background">
        <br />
        <br />
        <img
          src="https://media.discordapp.net/attachments/750468395635441714/752983080914124860/200_1.gif"
          alt=""
        ></img>
      </div>
    </div>
  );
}
