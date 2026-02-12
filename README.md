# Obsidian GTM Vault Quickstart

Turn Obsidian into a structured GTM/RevOps knowledge base that makes every Claude Code interaction contextual to your business.

## What Is This

A Claude Code configuration package that scaffolds complete Obsidian vaults pre-configured for B2B go-to-market knowledge management. Instead of giving Claude generic prompts, you build a persistent vault of business context — ICP definitions, sales call notes, deal tracking, personas, automations, and deliverables — that Claude reads automatically.

## Who Is This For

- **B2B revenue teams** who want structured knowledge management
- **GTM consultants** managing multiple client engagements
- **RevOps operators** who need a system of record for sales intelligence
- **Anyone using Claude Code** who wants contextual AI interactions grounded in real business data

## Quick Start

1. Install [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) and [Obsidian](https://obsidian.md)
2. Clone or download this repository
3. Open a terminal in the project directory
4. Run `claude` to start Claude Code
5. Type `/setup` and follow the interactive wizard

The wizard will ask about your business, create the vault folder structure, install all commands and templates, and optionally set up GitHub sync.

## What Gets Created

```
your-vault/
├── CLAUDE.md              # AI context for your business
├── HOME.md                # Entry point with navigation
├── /hubs/                 # Dashboard notes linking everything
├── /company/              # Business context, team, tech stack
├── /icp/                  # Customer profiles and personas
├── /sales/                # Calls, deals, sequences
├── /automations/          # Workflow specs
├── /deliverables/         # Reports, proposals
├── /meetings/             # Internal sync notes
├── /bases/                # Obsidian Base database views
├── /_drafts/              # Work in progress
├── /_review/              # Pending approval
├── /archive/              # Retired document versions
└── .claude/commands/      # All slash commands
```

## Available Commands

| Command | Description |
|---------|-------------|
| `/setup` | Interactive vault creation wizard |
| `/log-call` | Log a sales call with auto-linking |
| `/new-draft` | Create a new draft document |
| `/submit-for-review` | Move a draft to the review queue |
| `/publish` | Promote a reviewed item to canonical |
| `/weekly-recap` | Generate a weekly activity summary |
| `/analyze-objections` | Cross-call objection pattern analysis |
| `/vault-health` | Diagnostic health check with scoring |
| `/prep-call` | Pre-call briefing from vault context |
| `/onboard` | New team member vault walkthrough |
| `/pipeline-report` | Pipeline summary with stale deal alerts |
| `/draft-sequence` | Persona-targeted outbound sequences |
| `/draft-content` | LinkedIn/blog content from vault knowledge |
| `/win-loss` | Closed deal pattern analysis |

## Requirements

- **Claude Code CLI** — `npm install -g @anthropic-ai/claude-code`
- **Obsidian** — [obsidian.md](https://obsidian.md)
- **GitHub** (optional) — for backup and team sync
- **Obsidian Bases core plugin** — enable via Settings → Core Plugins → Bases
- **Recommended Obsidian plugins**: Obsidian Git, Claudian, Dataview, Templater

## How It Works

Every document in the vault connects to related documents through `[[wiki-links]]`, creating a navigable knowledge graph visible in Obsidian's Graph View. Commands auto-link new content to existing vault documents. Skills teach Claude the vault's structural conventions and GTM document standards. Obsidian Base views (`.base` files) provide live, filterable database views of your deals, calls, review queue, and more — like a mini-CRM inside Obsidian. The result: every AI interaction draws on your accumulated business context.

---

Built by [SixtySixTen](https://sixtysixten.com) — Strategy and systems for revenue teams.
