Generate a pipeline summary report from all deal files in the vault.

## Steps

1. **Read all deal files** in `/sales/deals/` (exclude templates starting with `_`).

2. **Group deals by stage.** Organize into:
   - Prospecting
   - Discovery
   - Demo / Evaluation
   - Proposal / Negotiation
   - Closed Won
   - Closed Lost

3. **For each stage, report:**
   - Count of deals
   - Total deal value (sum of `deal-value:` from frontmatter)
   - List of deal names with wiki-links

4. **Flag stale deals.** A deal is stale if:
   - Its `last-modified:` date is older than 14 days AND
   - No call notes in `/sales/calls/` reference it in the last 14 days
   - List stale deals with days since last activity

5. **Flag deals missing key info:**
   - No stakeholders listed in `## Key Stakeholders`
   - No timeline or target close date in `## Timeline`
   - No related calls linked in `## Related Calls`
   - Empty `deal-value:` in frontmatter

6. **Pipeline summary stats:**
   - Total pipeline value (active deals only)
   - Number of active vs. closed deals
   - Average deal value
   - Deals added this month vs. last month (if data available)

7. **Link each deal to its most recent call note** in the report.

8. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`
