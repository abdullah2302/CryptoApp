import React from 'react';

export default function About() {
    return (
        <div className="about-container">
            <h1>About Cryptocurrency Tracker</h1>
            <p>
                Welcome to the Cryptocurrency Tracker! This application provides real-time information about various cryptocurrencies, including their price, market cap, volume, and supply. Whether you're an experienced trader or just curious about the crypto market, our tracker offers a comprehensive view of the most popular digital currencies.
            </p>

            <h2>Features</h2>
            <ul>
                <li>Search for specific cryptocurrencies by name.</li>
                <li>Toggle between viewing prices in USD and PKR.</li>
                <li>View detailed information including rank, symbol, max supply, total supply, price, 24-hour volume, and market cap.</li>
                <li>Updated real-time data from the CoinPaprika API.</li>
            </ul>

            <h2>How It Works</h2>
            <p>
                The Cryptocurrency Tracker fetches data from the CoinPaprika API, ensuring that you have access to the latest information about various cryptocurrencies. You can search for specific coins using the search bar and toggle between USD and PKR to see prices in your preferred currency.
            </p>

            <h2>Technology Stack</h2>
            <ul>
                <li><strong>Frontend:</strong> React</li>
                <li><strong>API:</strong> CoinPaprika API</li>
                <li><strong>HTTP Client:</strong> Axios</li>
            </ul>

            <h2>Future Enhancements</h2>
            <ul>
                <li>Additional currency conversion options.</li>
                <li>Graphical representation of price trends.</li>
                <li>User authentication and personalized watchlists.</li>
                <li>Mobile-friendly design and improved user interface.</li>
            </ul>

            <p>
                Thank you for using our Cryptocurrency Tracker! We are continuously working to improve the application and add new features. Your feedback is valuable to us, so feel free to reach out with any suggestions or comments.
            </p>
        </div>
    );
}
