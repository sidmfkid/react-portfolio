require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const Channel = require("./models/channel");
const Post = require("./models/post");
const port = process.env.PORT || 80;
app.use(cors());
const dbUrl = "mongodb://localhost:27017/portfolio" || process.env.DB_URL;

connectDB().catch((err) => console.log(err));
const publicPath = path.join(__dirname, "..", "build");
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
const seedChannels = [
  {
    name: "Sidmfkid",
    subscribers: 40000,
    image: "link",
  },
  {
    name: "24k Nail Spa",
    subscribers: 5430000,
    image: "link",
  },
  {
    name: "You Are",
    subscribers: 3000000,
    image: "link",
  },
  {
    name: "Dev Work",
    subscribers: 740300,
    image: "link",
  },
];

const seedPosts = [
  {
    title: "How I got 3M Plays",
    datePosted: "Yesterday",
    views: "134000",
    channel: "6228fbe0cdb7a9adca4a62e3",
    images: [
      "https://cdn.shopify.com/s/files/1/0586/2667/0763/files/spotifyThumbnail1.jpg?v=1646836253",
    ],
  },
  {
    title: "Watch Me Speed Run On Git!",
    datePosted: "December 18th, 2021",
    views: "734000",
    channel: "6228fbe0cdb7a9adca4a62e6",
    images: [
      "https://cdn.shopify.com/s/files/1/0586/2667/0763/files/githubThumbnail1.jpg?v=1646836253",
    ],
  },
];

const channel = new Channel({
  _id: new mongoose.Types.ObjectId(),
  name: "Sidmfkid",
  subscribers: 40000,
  image: "link",
});

async function connectDB() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("open"));

const seedDB = async () => {
  //   await Channel.deleteMany({});
  //   await Post.deleteMany({});
  //   await Channel.insertMany(seedChannels);
  //   await Post.insertMany(seedPosts);
};

seedDB().then(() => {
  mongoose.connection.close();
});

app.use(morgan("tiny"));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const server = app.listen(port, () => {
  console.log(`app started on ${port}`);
});
