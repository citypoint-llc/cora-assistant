# CORA SOP Assistant — v0.1 Pilot

An AI-powered chat interface that lets CORA Food Pantry staff and volunteers ask questions about Standard Operating Procedures in plain language.

Built by City Point LLC as a qualification demo.

---

## What This Does

- Accepts natural language questions about CORA's SOPs
- Returns grounded answers citing the relevant SOP section
- Declines to answer questions not covered in the SOPs
- Protected by a simple passphrase gate

---

## Tech Stack

- **Frontend:** Plain HTML/CSS/JavaScript (no framework)
- **Backend:** Vercel serverless function (`/api/chat.js`)
- **AI:** Anthropic Claude (`claude-sonnet-4-6`) via API
- **Hosting:** Vercel (Hobby tier)

---

## Project Structure

```
cora-assistant/
├── index.html        # Frontend — passphrase gate + chat UI
├── api/
│   └── chat.js       # Serverless function — Anthropic API proxy
├── vercel.json       # Vercel routing and build config
└── README.md
```

---

## Environment Variables

One environment variable is required. Set it in your Vercel project settings under **Settings → Environment Variables**:

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Your Anthropic API key from console.anthropic.com |

**Never commit your API key to the repository.**

---

## Deployment

This project deploys automatically via Vercel's GitHub integration.

1. Push this repository to GitHub (citypoint-llc/cora-assistant)
2. In Vercel, import the repository
3. Confirm `ANTHROPIC_API_KEY` is set in Environment Variables
4. Vercel builds and deploys on every push to `main`

To trigger a manual redeploy, push any change to `main` or use the Vercel dashboard.

---

## Local Development

The serverless function requires Vercel CLI to run locally.

```bash
npm install -g vercel
vercel dev
```

For this demo, deploying directly to Vercel and testing the live URL is the simpler path.

---

## Access

Passphrase is distributed to authorized users directly. Do not commit the passphrase to this repository.

---

## Known Limitations (v0.1)

- Full SOP text is injected into every request (no chunking/RAG)
- No usage logging — cannot see what questions are being asked
- No authentication — passphrase is client-side only
- English only
- Not mobile-optimized

## Planned Enhancements (v0.2, if concept validated)

- Chunked RAG pipeline for more precise answers
- Basic usage logging
- Proper server-side authentication
- Link2Feed SOP section revision and integration

---

## Cost Model

API calls are billed to the City Point LLC Anthropic account during the demo period. Auto-reload is disabled; prepaid balance functions as a hard spend cap. If CORA moves forward with a production implementation, they would obtain their own Anthropic API key.

---

*City Point LLC · citypoint.llc*
