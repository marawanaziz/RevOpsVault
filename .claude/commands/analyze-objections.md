Analyze objection patterns across all sales call notes in the vault.

## Steps

1. **Read ALL call notes.** Read every file in `/sales/calls/` (excluding templates starting with `_`).

2. **Extract objections.** From each call's `## Objections Raised` section, pull every objection mentioned.

3. **Group by theme.** Categorize each objection into one of these themes (or create new ones if needed):
   - **Pricing** — budget, cost, ROI concerns
   - **Timing** — not the right time, too early, other priorities
   - **Competition** — already using a competitor, evaluating alternatives
   - **Technical** — integration concerns, complexity, implementation risk
   - **Internal Buy-In** — need approval, stakeholder alignment, organizational resistance
   - **Scope** — too much, too little, wrong focus area

4. **For each theme, report:**
   - Number of occurrences across all calls
   - Which specific calls raised it (with wiki-links)
   - How it was handled (if noted in the call)
   - Whether it was resolved or remains open

5. **Generate summary insights:**
   - Most common objection theme
   - Objections that are increasing or decreasing over time
   - Suggested responses or talk tracks based on successful handling

6. **Ask where to save.** Offer two options:
   - Save as a deliverable in `/deliverables/` (published, for sharing)
   - Save as a draft in `/_drafts/` (for internal iteration)

7. **Link to sources.** In `## Connections`, link to every call note referenced in the analysis, plus `[[deliverables]]` and `[[sales-pipeline]]`.

8. **Update hubs.** If the report was saved (not displayed inline only):
   - Add a wiki-link to `/hubs/deliverables.md` under `## Analysis & Insights` with the report title and today's date.
   - Add a wiki-link to `/hubs/sales-pipeline.md` under `## Recent Reports` (create the section if it doesn't exist).
