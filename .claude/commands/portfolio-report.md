Generate a customer portfolio summary report from all account files in the vault.

## Steps

1. **Read all account files** in `/customer-success/accounts/` (exclude templates starting with `_`).

2. **Group accounts by health score.** Organize into:
   - Healthy
   - At Risk
   - Red
   - Churned

3. **For each health group, report:**
   - Count of accounts
   - Total MRR (sum of `mrr:` from frontmatter)
   - List of account names with wiki-links

4. **Flag stale accounts.** An account is stale if:
   - Its `last-modified:` date is older than 30 days AND
   - No interaction notes in `/customer-success/interactions/` reference it in the last 30 days
   - List stale accounts with days since last activity

5. **Flag accounts missing key info:**
   - No stakeholders listed in `## Key Stakeholders`
   - No renewal date in frontmatter
   - No MRR value in frontmatter
   - No related interactions linked in `## Related Interactions`

6. **Renewal timeline:**
   - Renewals in the next 30 days
   - Renewals in the next 60 days
   - Renewals in the next 90 days
   - Each with account name, MRR, and health score

7. **Expansion signals.** Scan recent interactions for mentions of upsell, expansion, new use cases, or additional users.

8. **Portfolio summary stats:**
   - Total managed MRR (active accounts only)
   - Number of accounts by health score
   - Average MRR per account
   - Accounts added this month vs. last month (if data available)

9. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`

10. **Populate `## Connections`** with links to every account file and interaction note analyzed, plus `[[deliverables]]` and `[[customer-success]]`.

11. **Update hubs.** If the report was saved (not displayed inline only):
   - Add a wiki-link to `/hubs/deliverables.md` under `## Reports & Assessments` with the report title and today's date.
   - Add a wiki-link to `/hubs/customer-success.md` under `## Recent Reports` (create the section if it doesn't exist).
