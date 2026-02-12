You are setting up a new GTM knowledge base vault in Obsidian. Walk the user through an interactive setup wizard.

## Step 1 — Welcome

Explain what this will create:
- A fully structured Obsidian vault for GTM/RevOps knowledge management
- Pre-configured folder structure, templates, hub notes, and slash commands
- A CLAUDE.md that makes every Claude Code session contextual to their business
- Optional GitHub sync for backup and team collaboration

## Step 2 — Discovery

Ask the user for:
1. **Company name** — The business this vault is for
2. **Business type** — e.g., "B2B SaaS", "Professional Services", "E-commerce"
3. **Primary contact** — Name and title of the main stakeholder
4. **Vault location** — Where to create the vault (default: `~/vaults/{company-slug}`)

Wait for answers before proceeding.

## Step 3 — Create Folder Structure

Create all directories at the vault location:

```
{vault_path}/
├── hubs/
├── company/
├── company/competitors/
├── icp/
├── icp/personas/
├── icp/segments/
├── sales/
├── sales/calls/
├── sales/deals/
├── sales/sequences/
├── automations/
├── deliverables/
├── deliverables/proposals/
├── meetings/
├── _drafts/
├── _review/
├── bases/
├── archive/
└── .claude/
    ├── commands/
    ├── skills/obsidian-vault-patterns/
    ├── skills/gtm-document-standards/
    └── agents/
```

## Step 4 — Generate CLAUDE.md

Read the template at `templates/vault-claude-md.md` from this quickstart project (the directory where this setup.md lives, go up two levels from `.claude/commands/`).

Replace these placeholders with the user's answers:
- `{{company_name}}` → company name
- `{{business_type}}` → business type
- `{{primary_contact}}` → primary contact name and title
- `{{created_date}}` → today's date (YYYY-MM-DD)

Write the result to `{vault_path}/CLAUDE.md`.

## Step 5 — Install Commands, Skills, and Agents

Copy all files from this quickstart project into the new vault:

**Commands** — Copy every `.md` file from this project's `.claude/commands/` into `{vault_path}/.claude/commands/` EXCEPT `setup.md` itself. The commands to copy are:
- log-call.md
- new-draft.md
- submit-for-review.md
- publish.md
- weekly-recap.md
- analyze-objections.md
- vault-health.md
- prep-call.md
- onboard.md
- pipeline-report.md
- draft-sequence.md
- draft-content.md
- win-loss.md

**Skills** — Copy both skill directories:
- `.claude/skills/obsidian-vault-patterns/SKILL.md` → `{vault_path}/.claude/skills/obsidian-vault-patterns/SKILL.md`
- `.claude/skills/gtm-document-standards/SKILL.md` → `{vault_path}/.claude/skills/gtm-document-standards/SKILL.md`

**Agents** — Copy:
- `.claude/agents/call-processor.md` → `{vault_path}/.claude/agents/call-processor.md`

## Step 6 — Create Hub Notes and HOME.md

Read each hub template from `templates/hub-templates/` in this quickstart project. Replace `{{company_name}}` and `{{date}}` with actual values. Write to the vault:

- `templates/hub-templates/business-context-hub.md` → `{vault_path}/hubs/business-context.md`
- `templates/hub-templates/icp-and-personas-hub.md` → `{vault_path}/hubs/icp-and-personas.md`
- `templates/hub-templates/sales-pipeline-hub.md` → `{vault_path}/hubs/sales-pipeline.md`
- `templates/hub-templates/automations-hub.md` → `{vault_path}/hubs/automations.md`
- `templates/hub-templates/deliverables-hub.md` → `{vault_path}/hubs/deliverables.md`
- `templates/review-queue-hub.md` → `{vault_path}/hubs/review-queue.md`

Read `templates/home-page.md`, replace `{{company_name}}`, `{{primary_contact}}`, `{{created_date}}`, and write to `{vault_path}/HOME.md`.

## Step 7 — Create Document Templates and Company Starters

**Templates** — Copy with `_` prefix to their target folders:
- `templates/call-note.md` → `{vault_path}/sales/calls/_call-template.md`
- `templates/deal-tracker.md` → `{vault_path}/sales/deals/_deal-template.md`
- `templates/meeting-note.md` → `{vault_path}/meetings/_meeting-template.md`
- `templates/sequence-playbook.md` → `{vault_path}/sales/sequences/_sequence-template.md`
- `templates/competitor-battle-card.md` → `{vault_path}/company/competitors/_battle-card-template.md`

**Company starters** — Copy into `/company/` as editable starter files (replace `{{company_name}}` and `{{date}}`):
- `templates/company-overview.md` → `{vault_path}/company/overview.md`
- `templates/company-team.md` → `{vault_path}/company/team.md`
- `templates/company-tech-stack.md` → `{vault_path}/company/tech-stack.md`
- `templates/company-pain-points.md` → `{vault_path}/company/pain-points.md`
- `templates/company-metrics.md` → `{vault_path}/company/metrics.md`

## Step 8 — Install Base Views

Copy all `.base` files from `templates/bases/` in this quickstart project into `{vault_path}/bases/`:

- `templates/bases/pipeline-tracker.base` → `{vault_path}/bases/pipeline-tracker.base`
- `templates/bases/call-log.base` → `{vault_path}/bases/call-log.base`
- `templates/bases/review-dashboard.base` → `{vault_path}/bases/review-dashboard.base`
- `templates/bases/persona-matrix.base` → `{vault_path}/bases/persona-matrix.base`
- `templates/bases/deliverables-tracker.base` → `{vault_path}/bases/deliverables-tracker.base`
- `templates/bases/meeting-log.base` → `{vault_path}/bases/meeting-log.base`

These are Obsidian Bases view configurations — they query existing notes via frontmatter and render live database views. Do NOT apply `{{variable}}` substitution to `.base` files.

## Step 9 — GitHub Integration (Optional)

Ask: "Would you like to set up GitHub sync for backup and team collaboration?"

**If yes:**

1. Create a `.gitignore` at the vault root with:
   ```
   .obsidian/workspace.json
   .obsidian/workspace-mobile.json
   .trash/
   .DS_Store
   ```

2. Check if the `gh` CLI is available by running `which gh`.

3. **If `gh` is available:** Ask if they want to create the repo automatically.
   - If yes: Run `git init` in the vault, then `gh repo create vault-{company-slug} --private --source=. --remote=origin`
   - Run `git add .`, `git commit -m "Initial vault setup"`, `git branch -M main`, `git push -u origin main`

4. **If `gh` is not available:** Tell them to create a private repo at https://github.com/new named `vault-{company-slug}`. Wait for them to provide the repo URL.
   - Run `git init`, `git remote add origin {repo_url}`, `git add .`, `git commit -m "Initial vault setup"`, `git branch -M main`, `git push -u origin main`

5. Display the Obsidian Git plugin configuration table:

   | Setting | Recommended Value |
   |---------|-------------------|
   | Auto commit-and-sync interval | 10 minutes |
   | Auto commit-and-sync after stopping file edits | Enabled |
   | Auto pull interval | 10 minutes |
   | Pull on startup | Enabled |
   | Push on commit-and-sync | Enabled |
   | Merge strategy | Merge |
   | Commit message template | `vault update {{date}}` |

**If no:** Skip. Note that they can set up GitHub later.

## Step 10 — Plugin Guidance

Print an installation checklist:

```
## Recommended Obsidian Plugins

Enable the core plugin:
- [ ] **Bases** — Settings → Core Plugins → Bases (enables .base database views)

Install via Settings → Community Plugins → Browse:

- [ ] **Obsidian Git** (by Vinzent03) — Auto-sync with GitHub
- [ ] **Claudian** (by YishenTu) — Claude Code embedded in Obsidian
      Note: Set CLI path in Settings → Claudian → Advanced
      (run `which claude` in terminal to find the path)
- [ ] **Dataview** — Dynamic queries across vault metadata
- [ ] **Templater** — Advanced templating for manual note creation
```

## Step 11 — Initial Content

Ask: "Do you have any existing content to add to the vault? (Company overview, ICP docs, call transcripts, etc.)"

- **If yes:** Process whatever they provide — fill in the appropriate starter files or create new notes.
- **If no:** Suggest starting with:
  1. Fill in `/company/overview.md` with basic company info
  2. Run `/log-call` after the next sales call
  3. Run `/vault-health` to see the vault's baseline state

## Step 12 — Summary

Display a completion summary:

```
## Setup Complete

**Vault:** {vault_path}
**Company:** {company_name}

### What Was Created
- {X} folders
- {Y} files (templates, hubs, commands, skills, agents, base views)
- CLAUDE.md configured for {company_name}
- HOME.md with navigation to all hubs
- 6 Obsidian Base views in /bases/
- GitHub: {configured / not configured}

### Available Commands
/log-call, /new-draft, /submit-for-review, /publish,
/weekly-recap, /analyze-objections, /vault-health,
/prep-call, /onboard, /pipeline-report, /draft-sequence,
/draft-content, /win-loss

### Suggested First Actions
1. Open the vault folder in Obsidian
2. Enable Bases core plugin: Settings → Core Plugins → Bases
3. Fill in /company/overview.md
4. Run /log-call after your next sales call
5. Run /vault-health to check baseline state
6. Run /onboard to get a guided walkthrough
```
