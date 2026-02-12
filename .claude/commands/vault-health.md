Run a read-only diagnostic health check on the vault and report a health score.

## Checks to Perform

Do NOT create or modify any files. Only read and report.

1. **Folder completeness** — Verify all expected folders exist: `/hubs/`, `/company/`, `/icp/`, `/icp/personas/`, `/icp/segments/`, `/sales/`, `/sales/calls/`, `/sales/deals/`, `/sales/sequences/`, `/customer-success/`, `/customer-success/accounts/`, `/customer-success/interactions/`, `/customer-success/playbooks/`, `/customer-success/escalations/`, `/customer-success/expansion/`, `/customer-success/feedback/`, `/marketing/`, `/marketing/campaigns/`, `/marketing/content/`, `/marketing/leads/`, `/marketing/experiments/`, `/marketing/events/`, `/automations/`, `/deliverables/`, `/deliverables/proposals/`, `/meetings/`, `/_drafts/`, `/_review/`, `/archive/`, `/company/competitors/`.

2. **Core files present** — Check for: `CLAUDE.md`, `HOME.md`, all hub notes in `/hubs/`, company files (`overview.md`, `team.md`, `tech-stack.md`, `pain-points.md`, `metrics.md`).

3. **Hub link integrity** — For each hub note, verify that the wiki-links inside it resolve to actual files.

4. **Broken wiki-links** — Scan all markdown files for `[[references]]` that don't match any filename in the vault.

5. **Orphan files** — Find files that are not linked from any hub note (excluding templates, `CLAUDE.md`, and `HOME.md`).

6. **Isolated notes** — Find documents with zero inbound or outbound wiki-links (excluding templates). These are disconnected from the knowledge graph.

7. **Weakly connected notes** — Find documents with only 1 wiki-link connection. Suggest adding more links.

8. **Frontmatter compliance** — Check all non-template markdown files for required frontmatter fields: `status`, `created`, `tags`.

9. **Stale drafts** — Find files in `/_drafts/` with `last-modified` or `created` dates older than 14 days.

10. **Review queue accuracy** — Compare files actually in `/_review/` against what's listed in `/hubs/review-queue.md`. Flag mismatches.

11. **Empty folders** — Flag directories with no files.

12. **HOME.md currency** — Check if HOME.md has any entries in `## Recent Activity`.

13. **Bases folder present** — Verify the `/bases/` directory exists.

14. **Base files present** — Verify at least `pipeline-tracker.base`, `review-dashboard.base`, `account-health.base`, `campaign-tracker.base`, `escalation-log.base`, `lead-tracker.base`, and `funnel-tracker.base` exist in `/bases/`.

15. **Frontmatter compliance for Bases** — Since Bases depend on frontmatter properties, check notes in key folders for required properties:
    - `/sales/deals/` — must have `stage`, `deal-value`, `contact`
    - `/sales/calls/` — must have `date`, `type`
    - `/customer-success/accounts/` — must have `health-score`, `mrr`, `renewal-date`
    - `/marketing/campaigns/` — must have `channel`, `status`
    - `/customer-success/escalations/` — must have `severity`, `category`, `status`
    - `/customer-success/expansion/` — must have `opportunity-type`, `value`, `stage`
    - `/marketing/leads/` — must have `source`, `qualification-status`
    - Flag any non-template files missing these properties.

## Scoring

Assign a health score out of 10 based on:
- 10 = All checks pass, strong connectivity, no stale content
- 7-9 = Minor issues (few orphans, some missing frontmatter)
- 4-6 = Moderate issues (broken links, stale drafts, missing hub entries)
- 1-3 = Significant structural problems

## Output Format

```
## Vault Health Report — YYYY-MM-DD

**Score: X/10**

### Passing Checks
- ✓ [check description]

### Issues Found
- ✗ [issue description] — [recommended action]

### Isolated Notes (0 connections)
- [list]

### Weakly Connected Notes (1 connection)
- [list]

### Recommended Actions
1. [most impactful fix first]
```

Display the report inline — do NOT save to a file unless asked.
