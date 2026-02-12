Analyze patterns across closed deals to identify what drives wins and losses.

## Steps

1. **Read all deal files** in `/sales/deals/` (exclude templates starting with `_`).

2. **Filter to closed deals.** Select files where frontmatter `stage:` is `closed-won` or `closed-lost`.

3. **For each closed deal, gather context:**
   - Read the deal file for stakeholders, timeline, value, and notes.
   - Read all related call notes linked from `## Related Calls` (follow the wiki-links).
   - Note: objections raised, how they were handled, competitor mentions, deal duration.

4. **Analyze win patterns.** Across closed-won deals, identify commonalities:
   - Persona types involved (which buyer roles were champions?)
   - Average deal size and timeline
   - Objections that were successfully overcome
   - Common buying signals
   - What messaging or approach worked

5. **Analyze loss patterns.** Across closed-lost deals, identify commonalities:
   - Common objections that weren't overcome
   - Competitor mentions (who did they lose to?)
   - Where deals stalled (which stage?)
   - Missing information or stakeholder access
   - Timing or budget patterns

6. **Generate the insights report:**
   - **Win Rate** — by persona type, deal size, and segment (if enough data)
   - **Top Reasons for Winning** — ranked by frequency with specific examples
   - **Top Reasons for Losing** — ranked by frequency with specific examples
   - **Competitor Impact** — which competitors appeared in wins vs. losses
   - **Recommended Adjustments** — to sales process, messaging, or targeting based on the patterns

7. **Ask where to save.** Offer:
   - Save as a deliverable in `/deliverables/` (published)
   - Save as a draft in `/_drafts/` (for iteration)
   - Display inline only

8. **Populate `## Connections`** with links to every deal file and call note analyzed, plus `[[deliverables]]` and `[[sales-pipeline]]`.

9. **Update hubs.** If the report was saved (not displayed inline only):
   - Add a wiki-link to `/hubs/deliverables.md` under `## Analysis & Insights` with the report title and today's date.
   - Add a wiki-link to `/hubs/sales-pipeline.md` under `## Recent Reports` (create the section if it doesn't exist).
