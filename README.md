# AmazonScraperProject

Amazon Scraper

## Description

This is a simple web scraping application that fetches product details from Amazon based on a user-provided keyword.

## Setup and Running Instructions

### Prerequisites
- Node.js installed on your machine

### Installation

# Clone the repository:

```bash

git clone https://github.com/your-username/amazon-scraper.git
Navigate to the project directory:

cd amazon-scraper

# Install dependencies:
  
npm install

# Running the Application

  Start the server:    
  node server.js

  The server will be running on http://localhost:3000.

# Access the web application:
  
  Open your web browser and go to http://localhost:3000.
  Enter a keyword in the input field.
  Click the "Scrape" button to fetch and display Amazon search results.
# Handling Errors
  
  If there's an issue with web scraping, the server will respond with a 500 Internal Server Error.
  Check the server console for detailed error messages.
  
  Errors during AJAX requests are logged to the browser console.
  If the server is not reachable or returns an error, it will be logged in the console.

# Considerations

  Ensure a stable internet connection for fetching Amazon search results.
  Make sure the server is serving static files correctly for proper frontend functionality.

  In case of issues, consult the error messages in the server console and browser console for debugging.
