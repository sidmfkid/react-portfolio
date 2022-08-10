import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import Channel from "./models/channel";
import Post from "./models/post";
import devBundle from "./devBundle.js";
import seedData from "./../seedData";
// app.use(cors());
import mongoose from "mongoose";

import template from "./../template";
dotenv.config();
const app = express();

const { DB_URL, PORT } = process.env;
const dbUrl = DB_URL || "mongodb://localhost:27017/portfolio";
connectDB().catch((err) => console.log(err));

devBundle.compile(app);
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

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
  const newData = await Post.create(seedData);
  console.log(newData);
  //   await Channel.deleteMany({});
  //   await Post.deleteMany({});
  //   await Channel.insertMany(seedChannels);
  //   await Post.insertMany(seedPosts);
};

// seedDB();

app.use(morgan("tiny"));

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json({ posts });
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts/:id/", async (req, res) => {
  try {
    let id = req.params.id;

    const post = await Post.findById(id);
    res.json({ post });
  } catch (error) {
    console.log(error);
  }
});

app.get("/home", (req, res) => {
  res.send(template());
});

app.get("/watch", (req, res) => {
  res.send(template());
});

app.get("/watch/:id", async (req, res) => {
  res.send(template());
});

app.get("*", (req, res) => {
  res.send(template());
});

const server = app.listen(PORT, () => {
  console.log(`app started on ${PORT}`);
});
