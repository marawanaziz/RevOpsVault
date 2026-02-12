# RevOpsVault

## What This Is
This is a Claude Code configuration package that scaffolds Obsidian vaults
for B2B GTM/RevOps knowledge management. It is NOT a vault itself — it
generates vaults via the `/setup` command.

## Intended Workflow
Users clone this repo into their existing Obsidian vault folder, run `/setup`,
and the wizard copies all commands, skills, templates, and agents into the
parent directory (the vault). The default vault path is `../` — the parent
directory. After setup, the clone directory can be deleted.

## Entry Point
Run `/setup` to create a new vault. The wizard handles folder creation,
template installation, CLAUDE.md generation, and optional GitHub integration.

## Project Layout
- `templates/` — Markdown templates with `{{variable}}` placeholders.
  `vault-claude-md.md` is the CLAUDE.md injected into each vault.
  `hub-templates/` contains hub note starters. `bases/` contains
  Obsidian Base view files (.base). Company starters and document
  templates live at the top level.
- `.claude/commands/` — Slash commands copied into each vault during setup.
  `setup.md` is the wizard; all others are operational commands.
- `.claude/skills/` — Non-user-invocable skills that teach Claude vault
  conventions and GTM document standards.
- `.claude/agents/` — Subagents for processing tasks (e.g., call transcripts).
- `examples/` — Sample content for testing workflows end-to-end.

## Key Conventions
- Templates use `{{variable}}` for setup-time substitution.
- Every document template includes `related:` frontmatter and a
  `## Connections` section for wiki-links.
- Commands auto-link new documents to related vault content.
- The draft/review/publish workflow uses folder-based staging
  (`/_drafts/` -> `/_review/` -> canonical location).
- Hub notes are high-connectivity navigation nodes in `/hubs/`.
- `.base` files in `/bases/` are Obsidian Base view configurations (YAML).
  They query notes via frontmatter and are not subject to the draft workflow.
- HOME.md is the vault entry point.

## Rules
- Never modify files in `examples/` during setup — they are reference only.
- The `setup.md` command should never copy itself into the target vault.
- All generated vaults follow the folder structure defined in the spec.
- Preserve raw transcripts verbatim under `## Raw Transcript` headings.
