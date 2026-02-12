Generate a marketing campaign performance report from all campaign files in the vault.

## Steps

1. **Read all campaign files** in `/marketing/campaigns/` (exclude templates starting with `_`).

2. **Group campaigns by channel and status.** Organize into:
   - Email — active, completed, paused, planning
   - Paid — active, completed, paused, planning
   - Organic — active, completed, paused, planning
   - Social — active, completed, paused, planning
   - Event — active, completed, paused, planning

3. **For each campaign, report:**
   - Campaign name with wiki-link
   - Channel and status
   - Budget vs. actual spend
   - Performance metrics: leads, MQLs, SQLs, pipeline influenced (from `## Performance Metrics`)

4. **Flag campaigns with no performance data.** Identify campaigns where the `## Performance Metrics` table has no actual values filled in.

5. **Cross-reference with deal files.** Search `/sales/deals/` for mentions of campaign names or marketing attribution. Report pipeline influenced by campaign where connections exist.

6. **Channel summary:**
   - Total spend by channel
   - Total leads/MQLs/SQLs by channel
   - Cost per lead and cost per MQL by channel (where data available)
   - Best and worst performing campaign per channel

7. **Overall marketing summary:**
   - Total marketing spend
   - Total MQLs and SQLs generated
   - Pipeline influenced by marketing
   - Active vs. completed campaigns count

8. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`

9. **Populate `## Connections`** with links to every campaign file analyzed, plus `[[deliverables]]` and `[[marketing]]`.

10. **Update hubs.** If the report was saved (not displayed inline only):
   - Add a wiki-link to `/hubs/deliverables.md` under `## Reports & Assessments` with the report title and today's date.
   - Add a wiki-link to `/hubs/marketing.md` under `## Recent Reports` (create the section if it doesn't exist).
