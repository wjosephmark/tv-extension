TV-Extension
A Chrome extension to execute buy and sell orders in InteractiveBrokers directly from TradingView charts.

Features
Seamless integration with TradingView.
Execute buy and sell orders with a simple interface.
Powered by the InteractiveBrokers API.
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/wjosephmark/tv-extension.git
cd tv-extension
Install dependencies:

bash
Copy
Edit
npm install
Build the extension:

bash
Copy
Edit
npm run build
Load the extension in Chrome:

Navigate to chrome://extensions/ in Chrome.
Enable Developer mode (toggle in the top right).
Click Load unpacked and select the build folder.
Usage
Open TradingView in Chrome.
Use the extension popup to log in to InteractiveBrokers.
Use the Buy and Sell buttons directly on TradingView charts to execute trades.
Configuration
Update config.json with your InteractiveBrokers API credentials:

json
Copy
Edit
{
  "apiKey": "your-api-key",
  "apiSecret": "your-api-secret"
}
Ensure the InteractiveBrokers API is enabled on your account.