# Smart News Aggregator 📰

A backend-focused web application built with **Node.js** and **Express** that fetches news articles from an external API and allows users to search articles based on their **published date**.

This project demonstrates clean backend architecture, RESTful routing, server-side filtering, and EJS-based rendering.

---

## 🚀 Features

- Search news articles by published date
- Fetches real-time news data from an external API
- Server-side date filtering logic
- Clean and simple UI using EJS templates
- Proper error handling and validation
- Organized route structure

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **Axios**
- **EJS & CSS**

---

## 🧠 How It Works (High-Level)

1. User selects a date from the UI
2. Browser sends a `GET` request with the date as a query parameter
3. Server fetches articles from a news API
4. Articles are filtered on the server based on the selected date
5. Filtered results are rendered dynamically using EJS

---

## ▶️ Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/srkhandagale1601-del/smart-news-aggregator.git
cd YOUR_REPO_NAME
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Set up environment variables

Create a `.env` file in the root directory:
```
API_KEY=your_news_api_key_here
```
### 4️⃣ Start the server
```
npm start
```
OR(if using nodemon)
```
npm run dev
```
The server will start on:
```
https://localhost:3000
```
---

## 🔗 API Endpoints
### 🔍 Search Articles by Date
```
GET /search?date=YYYY-MM-DD
```
Example:
```
GET /search?date=2025-01-20
```
## 🔮 Future Improvements

- Add pagination and sorting support
- Allow searching by author or keyword
- Improve UI with better loading and empty states
- Cache API responses for better performance
- Add user authentication for personalized searches

