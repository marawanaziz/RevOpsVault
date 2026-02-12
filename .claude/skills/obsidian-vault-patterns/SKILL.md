---
user-invocable: false
---

# Obsidian Vault Structural Patterns

This skill defines how documents are structured, linked, named, and organized within a GTM Obsidian vault. Follow these conventions whenever creating, editing, or moving files.

## Wiki-Link Conventions

- Use `[[filename]]` for standard links to other vault files.
- Use `[[filename|Display Text]]` when the display text should differ from the filename.
- Links are case-insensitive in Obsidian but always use lowercase filenames.
- Never use full paths in wiki-links — Obsidian resolves by filename across the vault.

## Frontmatter Rules

Every document MUST include these YAML frontmatter fields:

```yaml
---
status: draft | in-review | published | archived
created: YYYY-MM-DD
tags: [lowercase-tag, hyphenated-tag]
related:
  - "[[linked-document]]"
---
```

Additional fields by document type:
- **Dated documents**: `date: YYYY-MM-DD`, `last-modified: YYYY-MM-DD`
- **Authored documents**: `author: name`
- **Drafts**: `target-location: /path/to/destination.md`, optionally `replaces: true`
- **Deals**: `stage:`, `deal-value:`, `contact:`
- **Calls**: `attendees:`, `type:`

## Relational Linking Rules

- **Every new document must have at least 2 outbound wiki-links** in the `## Connections` section and `related:` frontmatter.
- When creating a document, **search the vault for related content** and populate links:
  - Same person/company mentioned elsewhere
  - Same topic or theme
  - Chronological predecessors (previous call with same prospect)
  - Hub notes that should reference this document
- When a document is referenced by another, **consider adding a backlink** from the target document's `## Connections` section.
- Hub notes are the high-connectivity nodes — individual documents connect laterally to peers.

## Connections Section

Every document template ends with:

```markdown
## Connections
<!-- Wiki-links to related vault documents with relationship context -->
- [[document-name]] — description of the relationship
- [[another-doc]] — why this is connected
```

## Hub Note Pattern

Hub notes in `/hubs/` follow this structure:
1. **Narrative summary** — 1-2 sentences describing what this hub covers
2. **Grouped wiki-links** — links organized by subtopic with section headers
3. **Recent Changes** — section at the bottom tracking notable updates

Hub notes are navigation dashboards. They do not contain analysis or original content.

## HOME.md Pattern

HOME.md is the vault entry point:
- Company name and key context at the top
- Quick Navigation section with links to every hub
- Recent Activity section tracking latest changes across the vault

## Draft/Review/Publish Staging Workflow

Documents move through folders — not just frontmatter changes:

| Stage | Folder | Status Frontmatter |
|-------|--------|--------------------|
| Work in progress | `/_drafts/` | `status: draft` |
| Pending approval | `/_review/` | `status: in-review` |
| Canonical / live | Core folders | `status: published` |
| Retired | `/archive/` | `status: archived` |

- Drafts include `target-location:` declaring their destination.
- Publishing archives the existing file (if any) with a date suffix before replacing.
- All transitions are handled by slash commands (`/new-draft`, `/submit-for-review`, `/publish`).

## Naming Conventions

- **Dated documents**: `YYYY-MM-DD-descriptive-slug.md` (calls, meetings, recaps)
- **Templates**: `_template-name.md` (underscore prefix, placed in target folders)
- **Persistent documents**: `descriptive-slug.md` (overview, team, tech-stack)
- **All filenames**: lowercase, hyphen-separated, no spaces

## Archival Rules

- **Never delete files.** Move retired documents to `/archive/` with a date suffix.
- Example: `ideal-customer-profile.md` becomes `archive/ideal-customer-profile-2025-02-10.md`
- Archived files get `status: archived` in frontmatter.

## Tag Conventions

- All tags are lowercase and hyphenated: `sales-call`, `icp-update`, `competitive-intel`
- Standard tags by type: `[call, sales]`, `[deal, sales]`, `[meeting]`, `[icp]`, `[competitor]`, `[sequence, outreach]`, `[hub]`, `[company]`, `[deliverable]`
- Never create tags with spaces or uppercase letters.

## Obsidian Bases Conventions

Obsidian Bases is a core plugin that renders `.base` files as interactive database views (tables with filters, sorting, grouping, and formulas). Key rules:

- **`.base` files are view configurations, not content documents.** They contain YAML that queries existing markdown notes via frontmatter properties.
- **Do NOT apply the draft/review/publish workflow to `.base` files.** They live permanently in `/bases/` and are never drafted, reviewed, or archived.
- **Do NOT modify `.base` files unless explicitly asked.** They are pre-configured during setup and rarely need changes.
- **Frontmatter compliance is critical for Bases.** Since Bases query notes by frontmatter properties (`stage`, `date`, `status`, etc.), missing or malformed frontmatter will cause notes to be invisible in Base views. Always ensure notes have complete, correctly-typed frontmatter.
- **Link to Base views from hub notes** using `[[bases/filename]]` (without the `.base` extension). This gives users quick access to live data views alongside the narrative hub content.
- **Bases complement hub notes** — hubs are for narrative navigation and manually curated links; Bases are for dynamic, auto-updating data browsing. Both serve different purposes.

## Folder Structure Reference

```
/hubs/              — Navigation dashboards
/company/           — Business context (overview, team, tech-stack, pain-points, metrics)
/company/competitors/ — Competitor battle cards
/icp/               — ICP definitions
/icp/personas/      — Buyer persona documents
/icp/segments/      — Market segment documents
/sales/calls/       — Individual call notes
/sales/deals/       — Deal tracking files
/sales/sequences/   — Outbound email sequences
/automations/       — Workflow specs
/deliverables/      — Reports, assessments
/deliverables/proposals/ — Client proposals
/meetings/          — Internal sync notes, weekly recaps
/bases/             — Obsidian Base database views (.base files)
/_drafts/           — Work in progress
/_review/           — Pending approval
/archive/           — Retired document versions
```
