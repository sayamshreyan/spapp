const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
git --version
const compliments = {
  happy: "You make normal days feel magical ✨",
  sad: "Even when you're sad, you're still precious 💛",
  tired: "You deserve rest and a thousand hugs 💤💕",
  angry: "Even when you're mad, you're still adorable 😌"
};

app.post("/get-compliment", (req, res) => {
  const { mood } = req.body;
  res.json({ message: compliments[mood] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});