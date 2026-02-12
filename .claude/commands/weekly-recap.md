Generate a weekly activity summary from vault content created or modified in the last 7 days.

## Steps

1. **Scan the vault for recent activity.** Read all files in these directories and check `created:` and `last-modified:` frontmatter dates for the last 7 days:
   - `/sales/calls/` — recent call notes
   - `/sales/deals/` — deal updates or new deals
   - `/customer-success/interactions/` — recent interactions
   - `/customer-success/accounts/` — account health changes
   - `/customer-success/escalations/` — new/resolved escalations
   - `/customer-success/expansion/` — expansion pipeline changes
   - `/customer-success/feedback/` — new feedback entries
   - `/marketing/campaigns/` — campaign updates
   - `/marketing/content/` — content activity
   - `/marketing/leads/` — new leads
   - `/marketing/experiments/` — experiment results
   - `/marketing/events/` — event outcomes
   - `/meetings/` — meeting notes
   - `/deliverables/` — published deliverables
   - `/_drafts/` — new or updated drafts
   - `/_review/` — items submitted for review
   - `/automations/` — workflow updates

2. **Generate the recap** with these sections:
   - **Summary** — 2-3 sentence overview of the week's activity
   - **Calls & Meetings** — List of all calls and meetings with one-line summaries
   - **Pipeline Movement** — New deals, stage changes, closed deals
   - **Customer Success Activity** — New interactions, health changes, renewals approaching, escalation status, expansion pipeline movement, feedback highlights
   - **Marketing Activity** — Campaign launches/completions, content published, new leads, experiment results, event outcomes
   - **Published Documents** — Anything promoted from review to canonical this week
   - **Review Queue** — Current items awaiting review
   - **Open Action Items** — Aggregate unchecked `- [ ]` items from this week's call notes and meeting notes
   - **Key Insights** — 2-3 observations or patterns worth noting

3. **Save the recap** as `/meetings/YYYY-MM-DD-weekly-recap.md` with today's date. Frontmatter: `status: published`, `type: weekly-sync`, `tags: [meeting, recap, weekly]`.

4. **Link from HOME.md.** Add the recap to the `## Recent Activity` section in HOME.md.

5. **Add wiki-links.** In the recap's `## Connections` section, link to every call, meeting, deal, and document referenced in the summary.
