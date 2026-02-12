# {{company_name}} — GTM Knowledge Base

## What This Is
This is a business knowledge vault for {{company_name}}, managed as a structured
collection of business documents, sales call notes, ICP definitions, and GTM
operational data stored as markdown. It is NOT a codebase.

## Client Context
- Company: {{company_name}} ({{business_type}})
- Primary contact: {{primary_contact}}
- Vault created: {{created_date}}

## Vault Structure
- /hubs/ — Dashboard notes that link to everything else. Start here.
- /company/ — Business context, team, tech stack, pain points, metrics
- /icp/ — Ideal customer profiles, personas (/icp/personas/), segments (/icp/segments/)
- /sales/calls/ — Individual call notes (one file per call)
- /sales/deals/ — Deal tracking documents
- /sales/sequences/ — Outbound email sequences
- /customer-success/accounts/ — Customer account tracking (one file per account)
- /customer-success/interactions/ — QBRs, onboarding calls, escalations, check-ins
- /customer-success/playbooks/ — Onboarding and engagement playbooks
- /customer-success/escalations/ — Customer escalation records
- /customer-success/expansion/ — Upsell and cross-sell opportunity tracking
- /customer-success/feedback/ — NPS surveys, CSAT, customer feedback
- /marketing/campaigns/ — Campaign tracking documents
- /marketing/content/ — Content plans and briefs
- /marketing/leads/ — Lead tracking and qualification
- /marketing/experiments/ — A/B tests and experiment tracking
- /marketing/events/ — Event management and outcomes
- /automations/ — Workflow specs and logic documents
- /deliverables/ — Reports, proposals (/deliverables/proposals/), assessments
- /meetings/ — Internal sync notes and weekly recaps
- /bases/ — Obsidian Base database views (pipeline, calls, review queue, personas, deliverables, meetings)
- HOME.md — Entry point with quick navigation to all hubs

## Draft Workflow
- Documents in /_drafts/ are work-in-progress. NEVER cite or reference
  draft content when answering questions about the business.
- Documents in /_review/ are pending approval. Treat as informational
  but flag that they are unconfirmed.
- Only documents in the core folders (/company, /icp, /sales,
  /customer-success, /marketing, etc.) are canonical and should be
  used for analysis and reporting.
- When promoting a draft: move the file to its canonical location,
  update all wiki-links, and update the relevant hub.

## How to Create New Notes
- Always use the template in the relevant folder (files starting with _)
- Use [[wiki-links]] to connect related notes — minimum 2 outbound links per doc
- Add YAML frontmatter with: status, created, tags, related
- File names: YYYY-MM-DD-descriptive-slug.md for dated items
- After creating/updating notes, update the relevant hub in /hubs/
- Populate the ## Connections section with contextual wiki-links

## Important Rules
- Never delete existing notes. Archive by moving to /archive/ with a date suffix
- When summarizing calls, extract: key takeaways (3-5 max), objections,
  action items (with checkboxes), and deal stage signals
- Keep summaries concise. Raw transcripts go under a ## Raw Transcript heading
- When asked to analyze patterns across calls, read ALL files in /sales/calls/
- When analyzing CS patterns, read ALL files in /customer-success/interactions/
- When analyzing customer feedback patterns, read ALL files in /customer-success/feedback/
- When analyzing campaign performance, read ALL files in /marketing/campaigns/
- When analyzing lead flow, read ALL files in /marketing/leads/
- When creating any document, search the vault for related content and add
  wiki-links in the ## Connections section and related: frontmatter
- Tags are lowercase and hyphenated (e.g., sales-call, icp-update)
- Do not modify .base files directly — they are view configurations, not content documents
