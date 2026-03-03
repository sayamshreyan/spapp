const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const moodCompliments = {
  happy: "You make happiness look effortless ✨",
  sad: "Even when you're sad, you're still the most beautiful soul 💛",
  tired: "You deserve rest and a thousand gentle hugs 💤💕",
  angry: "Even your anger has elegance in it 😌"
};

const randomCompliments = [
  { text: "You're glowing like the moon tonight 🌙", image: "moon.jpg" },
  { text: "You shine brighter than the stars ✨", image: "stars.jpg" },
  { text: "You're as calm and beautiful as the ocean 🌊", image: "ocean.jpg" },
  { text: "You bloom like the prettiest flower 🌸", image: "flower.jpg" },
  { text: "You're sweeter than sunrise ☀️", image: "sunrise.jpg" }
];

app.post("/get-compliment", (req, res) => {
  const { mood } = req.body;
  res.json({ message: moodCompliments[mood] });
});

app.get("/random-compliment", (req, res) => {
  const random =
    randomCompliments[Math.floor(Math.random() * randomCompliments.length)];
  res.json(random);
});

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});