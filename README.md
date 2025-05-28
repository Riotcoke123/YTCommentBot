<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
   <img src="https://github.com/user-attachments/assets/b614eaf4-1498-4127-b7a7-16047e06587c"    alt="YouTube Anti-Viewbot Detector" width="550" height="250">
  <h1>YT Comment Bot</h1>

  <p><strong>YT Comment Bot</strong> is an automated YouTube commenting tool designed to automate the process of posting comments on YouTube videos. Powered by <code>puppeteer-extra</code> and the <code>stealth</code> plugin, it mimics real user interactions to log in, navigate to a video, and post randomly selected comments from a provided list.</p>

  <p>Use this bot to automate video commenting in a realistic manner, ideal for testing, educational purposes, or streamlining social media engagement. It helps simulate user activity and posts comments from a customizable pool of text.</p>

  <hr>

  <h2>Dependencies</h2>
  <ul>
    <li><strong>Node.js</strong> (v14 or later)</li>
    <li><code>puppeteer-extra</code></li>
    <li><code>puppeteer-extra-plugin-stealth</code></li>
    <li><code>fs</code> (Node.js core module)</li>
  </ul>

  <h2>Configuration</h2>
  <p>Before running the bot, ensure you update the following values in the <code>index.js</code> file:</p>
  <ul>
    <li><code>const email = 'your-email';</code> — Your YouTube account email.</li>
    <li><code>const password = 'your-password';</code> — Your YouTube account password.</li>
    <li><code>const videoUrl = 'https://youtube.com/...';</code> — The URL of the YouTube video where comments will be posted.</li>
  </ul>
  <p>Also, ensure you have a valid <code>comments.txt</code> file in the specified location, containing one comment per line. These comments will be randomly selected for posting.</p>

  <hr>

  <h2>Installation</h2>
  <p>To install and run the bot, follow these steps:</p>
  <pre><code>npm install
node index.js
</code></pre>

  <hr>

  <h2>Project Structure</h2>
  <ul>
    <li><code>index.js</code> – Main bot script responsible for automation.</li>
    <li><code>comments.txt</code> – A list of comments to be posted (one comment per line).</li>
    <li><code>package.json</code> – Project metadata and dependencies.</li>
  </ul>

  <hr>

  <h2>License</h2>
  <p>This project is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License v3.0</a>.</p>

  <hr>

  <h2>Disclaimer</h2>
  <ul>
    <li>This tool is provided strictly for educational, testing, or personal automation purposes.</li>
    <li>By using this bot, you agree to comply with <a href="https://www.youtube.com/t/terms" target="_blank">YouTube's Terms of Service</a>.</li>
    <li>The author (<code>riotcoke</code>) assumes no responsibility for misuse or any resulting violations.</li>
  </ul>

  <hr>

  <p><strong>More updates coming soon.</strong> Contributions and suggestions are welcome. Feel free to fork the project and submit pull requests to enhance functionality.</p>

</body>
</html>
