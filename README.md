# How to hide an API key in JavaScript

You can't. Anything in front-end code (HTML, JavaScript, a bundled app) can be read by anyone with View Source or DevTools. [`bad-example.html`](bad-example.html) shows the problem.

Three fixes:

1. **Move the key to a server.** [`worker.js`](worker.js) is a small Cloudflare Worker that keeps the key as a secret (`env.API_KEY`) and forwards the request. Your page calls the worker, never the API.
2. **Lock the key to your domain**, if your provider supports it (for example Google Maps and Google Cloud: API key → Application restrictions → Websites). The key is still visible, but other sites can't use it.
3. **For AI features, use a key that is public by design.** A [OneTag AI](https://onetagai.com) key can only spend its own free monthly budget (1,000,000 tokens, no card), so it can sit in the page. See [`fix.html`](fix.html).

Video: https://www.youtube.com/@yqfeng6208
