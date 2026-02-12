Generate a content calendar view from all content plans in the vault.

## Steps

1. **Read all content plan files** in `/marketing/content/` (exclude templates starting with `_`).

2. **Generate a timeline view** organized by status:
   - **Published** — Content that has been completed and published
   - **In Progress** — Content currently being created
   - **Planned** — Content approved but not yet started
   - **Draft** — Content ideas in early stages

3. **For each content piece, show:**
   - Title with wiki-link
   - Content type (blog, case-study, whitepaper, webinar, social)
   - Target persona
   - Publish date (planned or actual)
   - Status

4. **Flag gaps:**
   - Weeks in the next 30 days with no planned content
   - Personas with no content targeting them (cross-reference `/icp/personas/`)
   - Content types with no recent entries

5. **Cross-reference with campaigns.** Search `/marketing/campaigns/` for campaigns that reference content pieces. Show content-campaign alignment:
   - Content pieces linked to active campaigns
   - Active campaigns with no supporting content

6. **Content summary:**
   - Total content pieces by type
   - Total content pieces by status
   - Content production rate (pieces per month, if data available)
   - Persona coverage map

7. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`

8. **Populate `## Connections`** with links to every content plan referenced, plus `[[deliverables]]` and `[[marketing]]`.

9. **Update hubs.** If the report was saved (not displayed inline only):
   - Add a wiki-link to `/hubs/deliverables.md` under `## Reports & Assessments` with the report title and today's date.
   - Add a wiki-link to `/hubs/marketing.md` under `## Recent Reports` (create the section if it doesn't exist).
