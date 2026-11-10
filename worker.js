// Fix 1: a tiny serverless function (Cloudflare Worker). The key lives here, as a secret.
export default {
  async fetch(request, env) {
    const { prompt } = await request.json();
    const res = await fetch("https://api.example-ai.com/v1/chat", {
      method: "POST",
      headers: { "Authorization": "Bearer " + env.API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    return new Response(res.body, {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://my-site.com" },
    });
  },
};

// In the page, call the worker instead. No key in the browser:
// fetch("https://my-worker.example.workers.dev", { method: "POST", body: JSON.stringify({ prompt: "Say hello" }) })
