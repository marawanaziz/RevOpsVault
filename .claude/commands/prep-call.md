Generate a pre-call briefing document from vault context.

## Steps

1. **Get the input.** Ask for the prospect or company name for the upcoming call.

2. **Search the vault for all related content:**
   - **Deal files**: Search `/sales/deals/` for deals matching the prospect or company name.
   - **Previous call notes**: Search `/sales/calls/` for calls with the same person or company. Read all matches.
   - **ICP/persona matches**: Search `/icp/personas/` for personas matching the prospect's role.
   - **Company mentions**: Grep across `/deliverables/`, `/meetings/`, and `/automations/` for any mentions of the prospect or company.
   - **Competitor intel**: Search `/company/competitors/` for battle cards if a competitor has been mentioned in previous interactions.

3. **Generate the briefing** with these sections:
   - **Prospect Background** — Summary of everything the vault knows about this person/company
   - **Relationship History** — Chronological list of previous interactions with wiki-links
   - **Current Deal Status** — Stage, value, key stakeholders, timeline (if a deal file exists)
   - **Open Action Items** — Unchecked `- [ ]` items from previous calls with this prospect
   - **Potential Objections** — Based on the matching persona's common objections and any objections from previous calls
   - **Suggested Talking Points** — Based on persona pain points, deal stage, and unresolved items
   - **Questions to Ask** — Based on gaps in information or next logical discovery points

4. **Save as a disposable briefing** in `/_drafts/` with filename `YYYY-MM-DD-prep-prospectname.md`. Frontmatter: `status: draft`, `tags: [prep, call]`.

5. **Link to sources.** In `## Connections`, link to every vault document the briefing pulled from.
