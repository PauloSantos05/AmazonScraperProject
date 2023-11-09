//Include necessary librares
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define endpoint for scraping
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/scrape', async (req, res) => {
    try {
    
      // Extract keyword from query parameters
      const keyword = req.query.keyword;

      // Construct Amazon search URL
      const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
  
      // Fetch the Amazon search results page
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
  
      // Extract product details using Cheerio
      const products = [];
  
      $('div[data-asin]').each((index, element) => {
        // Extract product details and push to the products array
        const title = $(element).find('span.a-text-normal').text();
        const rating = $(element).find('span[data-asin="B07VGRJDFY"] > i > span').text();
        const reviews = $(element).find('span[data-asin="B07VGRJDFY"] > span:nth-child(2)').text();
        const image = $(element).find('img.s-image').attr('src');
  
        products.push({
          title,
          rating,
          reviews,
          image,
        });
      });
  
      // Send the extracted data as JSON response

      res.json(products);
    } catch (error) {
      console.error('Scraping error:', error.message);
      console.error('Stack trace:', error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
