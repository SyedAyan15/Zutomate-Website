# Skill: Tool Stack & Logo Reference

## Tools Used in Flow Charts
These tools appear as embedded base64 logos inside SVG nodes.

### GTM / Outbound Tools
| Tool | File | Usage |
|------|------|-------|
| Clay | `clay.jpg` | Orchestration, enrichment, ABM |
| Smartlead (old) | `smartlead.png` | Email sending |
| Smartlead (new purple) | `smartlead_new.webp` | CRM Pipeline - Inbound replies |
| HeyReach | `heyreach.png` | LinkedIn replies |
| Gmail | `gmail.webp` | Email infrastructure |
| Outlook | `outlook.jpg` | Email infrastructure |

### CRM Tools
| Tool | File | Usage |
|------|------|-------|
| HubSpot | `hubspot.webp` | CRM sync, pipeline |
| Close | `close.jpg` | CRM option |
| Attio | `attio.jpg` | CRM option |
| Monday | `monday.png` | Project/CRM |
| Slack | `slack.png` | Notifications, alerts |

### AI / RAG Tools
| Tool | File | Usage |
|------|------|-------|
| Claude | `claude.webp` | LLM generation |
| ChatGPT | `chatgpt.webp` | LLM generation |
| Gemini | `gemini.png` | LLM generation |
| Pinecone | `pinecone.png` | Vector search |
| Supabase | `supabase.jpg` | Database |
| MongoDB | `mongodb.png` | Database |
| PDF | `pdf.png` | Document source |
| Word | `word.webp` | Document source |

## Logo Storage
All logos are stored as base64 in `/tmp/all_logos.json` (Python sessions).

### Loading logos in Python:
```python
import json
with open('/tmp/all_logos.json') as f:
    logos = json.load(f)
# Access: logos['hubspot.webp'], logos['slack.png'], etc.
```

### Embedding in SVG:
```python
key = src.split('/')[-1]  # e.g. 'hubspot.webp'
if key in logos:
    out += f'<image href="{logos[key]}" x="{ix}" y="{iy}" width="20" height="20" preserveAspectRatio="xMidYMid meet"/>'
```

### White background behind logos:
```python
out += f'<rect x="{ix-2}" y="{iy-2}" width="24" height="24" rx="4" fill="white"/>'
out += f'<image href="{logos[key]}" x="{ix}" y="{iy}" width="20" height="20" .../>'
```

## Partner Logos (in logo strip)
Styled as text/SVG recreations, NOT images:
- shopwave (Nunito 800)
- GOSO (Black Han Sans 900)
- TRU CLEAN (Bebas Neue)
- VJR / Victoria James Recruitment (Playfair Display)
- The Agency (Oswald 600)
- navitas (Cormorant Garamond italic)
- Adams Limitless (Nunito 300 italic)
- BizBee (Nunito 800/300)
- Bell Recruitment (Libre Baskerville)
- INSIGHT Cyber Solutions (Josefin Sans + Pacifico)

All logos: white monochrome, `border-radius: 100px`, `border: 1px solid rgba(255,255,255,0.10)`, `background: rgba(255,255,255,0.04)`
