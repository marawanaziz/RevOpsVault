Generate a QBR (Quarterly Business Review) briefing document from vault context.

## Steps

1. **Get the input.** Ask for the customer or account name for the upcoming QBR.

2. **Search the vault for all related content:**
   - **Account file**: Search `/customer-success/accounts/` for the matching account.
   - **Interaction history**: Search `/customer-success/interactions/` for all interactions with this customer. Read all matches.
   - **Escalations**: Search `/customer-success/escalations/` for any escalation records.
   - **Persona matches**: Search `/icp/personas/` for personas matching key stakeholders.
   - **Deliverables/meetings**: Grep across `/deliverables/` and `/meetings/` for any mentions of the customer.

3. **Generate the briefing** with these sections:
   - **Account Background** — Summary of everything the vault knows about this customer
   - **Relationship History** — Chronological list of interactions with wiki-links
   - **Current Health** — Health score, recent signals, trend direction
   - **Product Adoption** — What features/modules they use, usage patterns if available
   - **Open Action Items** — Unchecked `- [ ]` items from previous interactions with this customer
   - **Renewal Status** — Renewal date, MRR, contract terms
   - **Expansion Opportunities** — Upsell/cross-sell signals from interactions and account notes
   - **Suggested Discussion Points** — Based on health signals, adoption gaps, and open items
   - **Questions to Ask** — Based on gaps in information or strategic discovery points

4. **Save as a disposable briefing** in `/_drafts/` with filename `YYYY-MM-DD-prep-qbr-clientname.md`. Frontmatter: `status: draft`, `tags: [prep, qbr, customer-success]`.

5. **Link to sources.** In `## Connections`, link to every vault document the briefing pulled from.
