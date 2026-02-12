Log a customer escalation and create a structured note in the vault.

## Steps

1. **Gather escalation details.** Ask me for:
   - Client name
   - Severity (low, medium, high, critical)
   - Category (technical, billing, contract, service, executive)
   - What happened — describe the issue
   - Impact on the customer
   - Current status and any actions taken so far

2. **Create the escalation note** in `/customer-success/escalations/` with filename `YYYY-MM-DD-severity-clientname.md` using today's date (e.g., `2025-02-10-high-nextera-health.md`).

3. **Auto-link to related vault content.** Search the vault and add wiki-links for:
   - **Account file**: Search `/customer-success/accounts/` for a matching account by client name. Link in `## Connections` and add a note to the account's `## Health Signals` section (escalation = negative health signal).
   - **Recent interactions**: Search `/customer-success/interactions/` for recent interactions with this client. Link in `## Connections`.
   - **Persona**: Search `/icp/personas/` for a persona matching the reporter's role. Link in `## Connections`.

4. **Update the customer success hub.** Add a link to this escalation under `## Active Escalations` in `/hubs/customer-success.md`.

5. **Report summary.** Display: issue summary, severity, which vault documents were linked, and recommended next steps based on severity:
   - Critical: Immediate executive notification recommended
   - High: Same-day response required
   - Medium: Response within 24 hours
   - Low: Response within 48 hours
