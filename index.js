const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
puppeteer.use(StealthPlugin());

(async () => {
    const email = 'BOTEMAIL';
    const password = 'BOTPASSWORD';
    const videoUrl = 'https://www.youtube.com/watch?v=XXXXXXXXXXXXX';

    // 📁 Load comments from specific file path
    const commentFilePath = 'comments.txt';
    const comments = fs.readFileSync(commentFilePath, 'utf-8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized', '--no-sandbox']
    });

    const page = await browser.newPage();

    console.log('📺 Navigating to YouTube...');
    await page.goto('https://www.youtube.com', { waitUntil: 'networkidle2' });

    console.log('🔐 Signing in...');
    await page.waitForSelector('a[href*="accounts.google.com"]', { visible: true });
    await page.click('a[href*="accounts.google.com"]');

    await page.waitForSelector('input[type="email"]', { visible: true });
    await page.type('input[type="email"]', email);
    await page.click('#identifierNext');

    await new Promise(resolve => setTimeout(resolve, 2000)); // delay for password load

    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.type('input[type="password"]', password);
    await page.click('#passwordNext');

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    console.log('🎥 Navigating to video...');
    await page.goto(videoUrl, { waitUntil: 'domcontentloaded' });

    console.log('📜 Scrolling to comments...');
    const scrollUntilFound = async (selector, maxScrolls = 20, step = 500) => {
        for (let i = 0; i < maxScrolls; i++) {
            const found = await page.$(selector);
            if (found) return true;
            await page.evaluate((s) => window.scrollBy(0, s), step);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return false;
    };

    const found = await scrollUntilFound('#simplebox-placeholder');
    if (!found) {
        console.error('❌ Could not load comment box.');
        await browser.close();
        return;
    }

    const comment = comments[Math.floor(Math.random() * comments.length)];
    console.log(`💬 Posting comment: "${comment}"`);

    await page.click('#simplebox-placeholder');
    await page.type('#simplebox-placeholder', comment);

    await page.waitForSelector('#submit-button button', { visible: true });
    await page.click('#submit-button button');

    console.log('✅ Comment submitted!');

    await new Promise(resolve => setTimeout(resolve, 5000));
    await browser.close();
})();

 
