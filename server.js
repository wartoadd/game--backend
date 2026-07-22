import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Game backend running");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);

  import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

})
