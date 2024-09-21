const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message;
  // Simulate chatbot logic
  const botReply = `You said: ${userMessage}`;
  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
