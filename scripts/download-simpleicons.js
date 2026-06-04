// Node script to download SimpleIcons SVGs for the skill slugs
// Usage: from repository root run: node scripts/download-simpleicons.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const slugs = [
  'python','mysql','postgresql','machine-learning','deep-learning','neural-networks','transfer-learning',
  'supervised-learning','unsupervised-learning','generative-ai','agentic-ai','nlp','llms','prompt-engineering',
  'text-classification','ner','gpt-models','transformers','groq','gemini-ai','openai-apis','opencv','yolov8',
  'face-detection','object-detection','tensorflow','pytorch','scikitlearn','keras','pandas','numpy','langchain',
  'crewai','n8n','fastapi','streamlit','rest-apis','docker','railway','vercel','pinecone','firebase','supabase',
  'slack','clickup','react','authentication','email-verification','chat-systems','openai-agent-sdk','mcp-servers',
  'ai-workflow','ai-integration'
];

const outDir = path.join(__dirname, '..', 'images', 'logos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest, { force: true });
        return reject(new Error('Failed: ' + res.statusCode));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlinkSync(dest, { force: true });
      reject(err);
    });
  });
}

(async () => {
  console.log('Downloading SimpleIcons SVGs to', outDir);
  for (const slug of slugs) {
    const url = `https://cdn.simpleicons.org/${slug}`;
    const dest = path.join(outDir, `${slug}.svg`);
    try {
      await download(url, dest);
      console.log('Saved', slug);
    } catch (e) {
      console.warn('Skipped', slug, e.message);
    }
  }
  console.log('Done.');
})();
