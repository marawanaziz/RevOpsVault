Log a new marketing campaign and create a structured note in the vault.

## Steps

1. **Gather campaign details.** Ask me for:
   - Campaign name
   - Channel (email, paid, organic, social, or event)
   - Target persona or segment
   - Budget (if known)
   - Start and end dates
   - Goals and success metrics
   - Early results (if campaign is already running)

2. **Create the campaign note** in `/marketing/campaigns/` with filename `YYYY-MM-DD-channel-campaignslug.md` using today's date. Use the template at `/marketing/campaigns/_campaign-template.md`.

3. **Auto-link to related vault content.** Search the vault and add wiki-links for:
   - **Persona**: Search `/icp/personas/` for a persona matching the target audience. Link in `## Connections`.
   - **Content pieces**: Search `/marketing/content/` for content created for or used by this campaign. Link in `## Connections`.
   - **Related campaigns**: Search `/marketing/campaigns/` for campaigns targeting the same persona or channel. Link in `## Connections`.
   - **Deal attribution**: If the campaign has influenced any deals, search `/sales/deals/` and note connections.

4. **Update the marketing hub.** Add a link to this new campaign under the appropriate channel section in `/hubs/marketing.md`.

5. **Report summary.** Display: campaign overview, channel, target persona, budget, and which vault documents were linked.
