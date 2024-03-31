// script.js (Frontend JavaScript)
// Add your JavaScript code here

function shortenURL() {
    var longUrl = document.getElementById('url').value.trim();
    
    // Make a request to your backend API to shorten the URL
    fetch('http://localhost:3000/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ longUrl: longUrl })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.shortUrl) {
            document.getElementById('shortenedUrl').innerText = 'Shortened URL: ' + data.shortUrl;
        } else {
            document.getElementById('shortenedUrl').innerText = 'Error: Unable to shorten URL.';
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('shortenedUrl').innerText = 'Error: Unable to shorten URL.';
    });
}
