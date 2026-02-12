Log a new marketing lead and create a structured note in the vault.

## Steps

1. **Gather lead details.** Ask me for:
   - Lead name (person's name)
   - Company name
   - Source (inbound, outbound, event, referral, organic)
   - Channel (e.g., website form, LinkedIn, conference, partner referral)
   - Initial context — how they came in, what they're interested in

2. **Create the lead note** in `/marketing/leads/` with filename `YYYY-MM-DD-company-name.md` using today's date (e.g., `2025-02-10-acme-corp.md`).

3. **Auto-link to related vault content.** Search the vault and add wiki-links for:
   - **Campaign**: If the lead came from a campaign, search `/marketing/campaigns/` for a matching campaign. Link in `## Connections`.
   - **Persona match**: Search `/icp/personas/` for a persona matching the lead's title/role. Link in `## Connections` and note the match in `## Qualification Notes`.
   - **ICP match**: Read the ICP document in `/icp/` and assess fit against ICP criteria. Note the assessment in `## Qualification Notes`.

4. **Update the marketing hub.** Add a link to this lead under `## Recent Leads` in `/hubs/marketing.md`.

5. **Report summary.** Display:
   - Lead created (file path)
   - Persona match (which persona, or "no match found")
   - ICP fit assessment (strong fit, partial fit, poor fit, or insufficient data)
   - Recommended next steps (e.g., "route to SDR for MQL validation" or "needs more data for qualification")
