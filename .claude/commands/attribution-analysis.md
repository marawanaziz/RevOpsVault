Analyze marketing attribution by tracing pipeline back to marketing touchpoints.

## Steps

1. **Read all campaign files** in `/marketing/campaigns/` (exclude templates starting with `_`).

2. **Read all content files** in `/marketing/content/` (exclude templates starting with `_`).

3. **Read all deal files** in `/sales/deals/` (exclude templates starting with `_`).

4. **Trace pipeline to marketing touchpoints.** For each deal, search for:
   - Campaign references in the deal file, related calls, and notes
   - Content piece references (mentions of blog posts, whitepapers, webinars)
   - Lead source attributions in frontmatter or notes
   - Cross-reference campaign `## Performance Metrics` for pipeline influenced data

5. **Analyze channel performance:**
   - Which channels drive the most MQLs
   - Which channels drive the most SQLs
   - Which campaigns influenced closed-won deals
   - CAC by channel (spend / customers acquired, where data available)
   - Content engagement patterns (which content types drive pipeline)

6. **Generate the attribution report:**
   - **Attribution Summary** — Overview of how marketing contributes to pipeline
   - **Channel Performance Ranking** — Channels ranked by pipeline influenced, efficiency, and volume
   - **Campaign Impact** — Top campaigns by pipeline influenced with wiki-links
   - **Content Performance** — Top content pieces by engagement and pipeline contribution
   - **Recommended Budget Allocation** — Based on channel performance data, suggest where to invest more or less

7. **Ask where to save.** Offer:
   - Save as a deliverable in `/deliverables/` (published)
   - Save as a draft in `/_drafts/` (for iteration)
   - Display inline only

8. **Populate `## Connections`** with links to every campaign, content piece, and deal file analyzed, plus `[[deliverables]]` and `[[marketing]]`.

9. **Update hubs.** If the report was saved (not displayed inline only):
   - Add a wiki-link to `/hubs/deliverables.md` under `## Analysis & Insights` with the report title and today's date.
   - Add a wiki-link to `/hubs/marketing.md` under `## Recent Reports` (create the section if it doesn't exist).
