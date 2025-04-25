
<h1>YT Comment Bot</h1>

<p><strong>YT Comment Bot</strong> is an automated YouTube commenting tool powered by <code>puppeteer-extra</code> and the <code>stealth</code> plugin. It simulates real user interaction to log in, navigate to a video, and post a randomly selected comment from a provided list.</p>

<hr>

<h2>License</h2>
<p>This project is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License v3.0</a>.</p>

<h2>Disclaimer</h2>
<ul>
  <li>This tool is provided strictly for educational, testing, or personal automation purposes.</li>
  <li>By using this bot, you agree to comply with <a href="https://www.youtube.com/t/terms" target="_blank">YouTube's Terms of Service</a>.</li>
  <li>The author (<code>riotcoke</code>) assumes no responsibility for misuse or any resulting violations.</li>
</ul>

<h2>Dependencies</h2>
<ul>
  <li><strong>Node.js</strong> (v14 or later)</li>
  <li><code>puppeteer-extra</code></li>
  <li><code>puppeteer-extra-plugin-stealth</code></li>
  <li><code>fs</code> (Node.js core module)</li>
</ul>

<h2>Configuration</h2>
<p>Update the following values in <code>index.js</code> before running:</p>
<ul>
  <li><code>const email = 'your-email';</code></li>
  <li><code>const password = 'your-password';</code></li>
  <li><code>const videoUrl = 'https://youtube.com/...';</code></li>
</ul>
<p>Also ensure you have a valid <code>comments.txt</code> file in the specified location, containing one comment per line.</p>

<h2>Roadmap</h2>
<ul>
  <li>Custom scheduling and randomized posting intervals</li>
  <li>Proxy rotation and multiple account handling</li>
  <li>Improved headless evasion and resilience</li>
  <li>Interactive dashboard or web interface</li>
</ul>

<hr>

<h2>Installation</h2>

<pre><code>npm install
node index.js
</code></pre>

<h2>Project Structure</h2>
<ul>
  <li><code>index.js</code> – Core bot script</li>
  <li><code>comments.txt</code> – Comment pool (one per line)</li>
  <li><code>package.json</code> – Project metadata and dependencies</li>
</ul>

<p><strong>More updates coming soon.</strong> Contributions and suggestions are welcome.</p>
