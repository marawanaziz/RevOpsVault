Generate a Sales-to-CS handoff document by pulling all sales context for a closed deal.

## Steps

1. **Get the deal.** Ask me for:
   - Deal name or client name

2. **Search the vault for all sales context:**
   - **Deal file**: Search `/sales/deals/` for the matching deal by name or client
   - **Call notes**: Search `/sales/calls/` for all call notes mentioning this client
   - **Personas**: Search `/icp/personas/` for personas that match the deal's stakeholders
   - **Proposals**: Search `/deliverables/proposals/` for proposals related to this deal

3. **Create the account file** if one doesn't already exist in `/customer-success/accounts/`. Use the account template at `/customer-success/accounts/_account-template.md`. Pre-fill:
   - Client name, stakeholders (carried from the deal file)
   - MRR/ARR (derived from deal value)
   - Renewal date (derived from close date + contract term)
   - Health score: healthy (new customer starting fresh)

4. **Generate the handoff document** using the handoff template. Pull from the deal file:
   - Deal summary (what was sold, value, close date)
   - Key stakeholders (carried from deal file)
   - Customer context (from call notes — why they bought, what success means to them)
   - Technical requirements (from discovery and demo call notes)
   - Known risks (from objections and concerns raised in calls)
   - Open action items (aggregate unchecked items from all call notes for this deal)

5. **Save the handoff document** in `/_drafts/` as `YYYY-MM-DD-handoff-clientname.md`.

6. **Create links:**
   - Deal file → Account file (add wiki-link)
   - Account file → Handoff doc (add wiki-link)
   - Handoff doc → Deal file + Account file + Call notes (wiki-links in Connections)

7. **Report summary.** Display:
   - What was created (handoff doc path, account file if new)
   - Context pulled: number of call notes reviewed, stakeholders carried over
   - Open items carried over (count and list)
   - Recommended next steps for the CSM
