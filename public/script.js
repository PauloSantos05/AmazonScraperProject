// Wait for the document to be ready
$(document).ready(function() {
  // Handle click event for the "Scrape" button
  $('#scrapeButton').click(function() {
    // Extract keyword from the input field
    const keyword = $('#keyword').val();

    // Make an AJAX request to the backend API for scraping
    $.ajax({
      url: `/api/scrape?keyword=${encodeURIComponent(keyword)}`,
      method: 'GET',
      success: function(data) {
        // Handle the successful response and display results
        displayResults(data);
      },
      error: function(error) {
        // Log any errors to the console
        console.error(error);
      }
    });
  });

  // Function to display results on the webpage
  function displayResults(results) {
    // Select the results container
    const resultsContainer = $('#results');
    // Clear existing content
    resultsContainer.empty();

    // Iterate through the results and append them to the container
    results.forEach(product => {
      const productElement = $('<div class="product">');
      productElement.append(`<img src="${product.image}" alt="${product.title}">`);
      productElement.append(`<h3>${product.title}</h3>`);
      productElement.append(`<p>Rating: ${product.rating}</p>`);
      productElement.append(`<p>Reviews: ${product.reviews}</p>`);
      resultsContainer.append(productElement);
    });
  }
});
