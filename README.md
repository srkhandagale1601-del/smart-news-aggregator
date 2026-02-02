# Smart News Aggregator 📰

Smart News Aggregator is a backend-centric web application built using **Node.js** and **Express**. 
It focuses on fetching real-time news data from an external API and processing it on the server to deliver relevant results based on a user-selected published date.
The project is designed to highlight core backend concepts such as RESTful routing, API integration, server-side filtering, and dynamic rendering using EJS, while keeping the interface simple and functional

---

##  Features

- Date-based search for news articles
- Real-time data fetched from an external news API
- Server-side filtering and validation
- Dynamic content rendering using EJS templates
- Clean route structure with proper error handling

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **Axios**
- **EJS & CSS**

---

##  How It Works 

1. User selects a date from the UI
2. Browser sends a `GET` request with the date as a query parameter
3. Server fetches articles from a news API
4. Articles are filtered on the server based on the selected date
5. Filtered results are rendered dynamically using EJS

---

## Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/srkhandagale1601-del/smart-news-aggregator.git
cd YOUR_REPO_NAME
```
### 2. Install dependencies
```
npm install
```
### 3️. Set up environment variables

Create a `.env` file in the root directory:
```
API_KEY=your_news_api_key_here
```
### 4. Start the server
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
##  Future Improvements

- Add pagination and sorting support
- Allow searching by author or keyword
- Improve UI with better loading and empty states
- Cache API responses for better performance
- Add user authentication for personalized searches

