Generate an expansion pipeline summary from all opportunity files in the vault.

## Steps

1. **Read all expansion files** in `/customer-success/expansion/` (exclude templates starting with `_`).

2. **Group opportunities by stage.** Organize into:
   - Identified
   - Qualifying
   - Proposal
   - Negotiation
   - Closed Won
   - Closed Lost

3. **For each stage, report:**
   - Count of opportunities
   - Total value (sum of `value:` from frontmatter)
   - List of opportunity names with wiki-links

4. **Flag stale opportunities.** An opportunity is stale if:
   - Its `last-modified:` date is older than 14 days AND
   - No interaction notes in `/customer-success/interactions/` reference it in the last 14 days
   - List stale opportunities with days since last activity

5. **Cross-reference with account health.** For each expansion opportunity:
   - Read the matching account file from `/customer-success/accounts/`
   - Report the account health score alongside the opportunity
   - Flag any expansion opportunities on at-risk or red accounts

6. **Expansion summary stats:**
   - Total expansion pipeline value (active opportunities only)
   - Number of active vs. closed opportunities
   - Average opportunity value
   - Breakdown by opportunity type (upsell, cross-sell, add-on, upgrade)

7. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`
