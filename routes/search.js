import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/search", async (req, res) => {
  const date = req.query.date;

  if (!date) {
    return res.render("index.ejs", {
      articles: null,
      error: "Please enter a date",
    });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything`,
      {
        params: {
          q: "technology",
          from:date,
          sortBy:"publishedAt",
          apiKey: process.env.NEWS_API_KEY,
        },
      }
    );

    const articles = response.data.articles.map(articles => ({
      title:articles.title,
      author:articles.author || "Unknown",
      description:articles.description || "No articles found!!!",
      url:articles.url,
    }))
    res.render("index.ejs", {
      articles: response.data.articles,
      error: null,
    });
  } catch (err) {
      res.render("index.ejs", {
      articles: null,
      error: "Failed to fetch news",
    });
  }
});


/*
router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res.status(400).json({ error: "Keyword is required" });
    }

    const response = await axios.get(API_URL + keyword);
    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Search failed" });
  }
});

*/
export default router;