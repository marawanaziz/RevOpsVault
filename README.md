<p align="center">
  <img src="./assets/logo.svg" alt="SixtySixTen Logo" width="280"/>
</p>

<h1 align="center">RevVault</h1>

<p align="center">
  The operational GTM system of record, built on Obsidian and Claude Code.
</p>

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License"/></a>
  <img src="https://img.shields.io/badge/Claude_Code-CLI-blueviolet" alt="Claude Code"/>
  <img src="https://img.shields.io/badge/Obsidian-Vault-7C3AED" alt="Obsidian"/>
  <img src="https://img.shields.io/badge/Slash_Commands-28-green" alt="28 Slash Commands"/>
</p>

<p align="center">
  RevVault scaffolds a fully structured Obsidian vault pre-configured for B2B revenue operations. Every Claude Code conversation starts with your business context loaded automatically: ICPs, personas, deal history, call transcripts, campaign data, and more.
</p>

---

## The Problem

- GTM knowledge lives in scattered docs, Slack threads, and people's heads. There is no single source of truth.
- Every Claude conversation starts from scratch with zero business context, so you re-explain your ICP, deal stages, and processes every time.
- Sales calls get logged but never connected to deals, personas, or pipeline. Insights stay trapped in individual notes.
- RevOps teams spend more time finding information than acting on it. Context switching kills execution speed.

**RevVault turns Obsidian into a structured system of record for your entire revenue operation.** Every document links to related documents through wiki-links, creating a navigable knowledge graph. Every AI interaction draws on your accumulated business context. Every command auto-links new content to what already exists.

---

## What You Get

```
28 slash commands  |  18 database views  |  3 AI agents
26 templates       |  8 navigation hubs  |  6 worked examples
                   |  2 skill modules    |
```

### Sales Intelligence

- **Call logging** with auto-linking to deals, personas, and pipeline
- **Deal tracking** with stale alerts and missing-info flags
- **Pipeline reports**, win/loss analysis, and objection pattern detection
- **Outbound sequence generation** targeted by persona and segment
- **Pre-call briefings** assembled from accumulated vault context
- **Content drafting** (LinkedIn posts, blog outlines) grounded in real sales data

### Customer Success

- **Account health tracking** with renewal timelines and risk scoring
- **Interaction logging** for QBRs, onboarding, check-ins, and support calls
- **Escalation tracking** by severity, category, and resolution status
- **Expansion pipeline** for upsell and cross-sell opportunities
- **NPS and feedback capture** with sentiment analysis
- **Sales-to-CS handoff** with full context transfer and onboarding checklists
- **Churn analysis** to identify risk patterns across your portfolio
- **QBR preparation** pulling account history, health metrics, and open items

### Marketing Operations

- **Campaign tracking** across channels with performance metrics and attribution
- **Lead tracking** with MQL/SQL qualification scoring
- **A/B test experiment tracking** and statistical analysis
- **Event management** with ROI tracking
- **Content pipeline** and calendar management
- **Attribution analysis** connecting campaigns to pipeline revenue

### Cross-Functional

- **Full-funnel view** from lead capture to closed-won to customer expansion
- **Vault health diagnostics** with scoring and remediation suggestions
- **Weekly recaps** aggregating all activity across sales, CS, and marketing
- **Draft/review/publish workflow** for document governance and quality control
- **Onboarding command** for new team members to learn the vault
- **Lead qualification** framework with configurable scoring criteria

---

## Quick Start

1. Install [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) and [Obsidian](https://obsidian.md)
2. Create or open your Obsidian vault folder:
   ```bash
   mkdir ~/my-vault && cd ~/my-vault
   ```
3. Clone RevVault into it:
   ```bash
   git clone https://github.com/marawanaziz/revvault.git
   ```
4. Enter the clone directory:
   ```bash
   cd revvault
   ```
5. Start Claude Code:
   ```bash
   claude
   ```
6. Run the setup wizard:
   ```
   /setup
   ```
7. After setup completes, delete the clone directory:
   ```bash
   cd .. && rm -rf revvault/
   ```

**What the wizard does:** It asks about your business, creates the full vault folder structure, installs all 28 commands along with skills, agents, and templates, generates a CLAUDE.md tailored to your company, builds navigation hubs, deploys 18 Obsidian Base database views, and optionally configures GitHub sync for backup and team collaboration.

---

## What Gets Created

```
your-vault/
├── CLAUDE.md                          # AI context, auto-loaded every session
├── HOME.md                            # Entry point with navigation to all hubs
│
├── hubs/                              # Dashboard notes linking everything
│   ├── business-context.md
│   ├── icp-and-personas.md
│   ├── sales-pipeline.md
│   ├── customer-success.md
│   ├── marketing.md
│   ├── automations.md
│   ├── deliverables.md
│   └── review-queue.md
│
├── company/                           # Business context and competitive intel
│   ├── overview.md
│   ├── team.md
│   ├── tech-stack.md
│   ├── pain-points.md
│   ├── metrics.md
│   └── competitors/
│
├── icp/                               # Customer profiles and segmentation
│   ├── personas/
│   └── segments/
│
├── sales/                             # Pipeline, calls, deals, sequences
│   ├── calls/
│   ├── deals/
│   └── sequences/
│
├── customer-success/                  # Post-sale operations
│   ├── accounts/
│   ├── interactions/
│   ├── playbooks/
│   ├── escalations/
│   ├── expansion/
│   └── feedback/
│
├── marketing/                         # Campaigns, content, leads, experiments
│   ├── campaigns/
│   ├── content/
│   ├── leads/
│   ├── experiments/
│   └── events/
│
├── automations/                       # Workflow specs
├── deliverables/                      # Reports, proposals
│   └── proposals/
├── meetings/                          # Internal sync notes
│
├── bases/                             # 18 Obsidian Base database views
│   ├── pipeline-tracker.base
│   ├── call-log.base
│   ├── account-health.base
│   ├── interaction-log.base
│   ├── renewal-tracker.base
│   ├── campaign-tracker.base
│   ├── content-calendar.base
│   ├── escalation-log.base
│   ├── expansion-pipeline.base
│   ├── feedback-tracker.base
│   ├── lead-tracker.base
│   ├── experiment-tracker.base
│   ├── event-tracker.base
│   ├── funnel-tracker.base
│   ├── review-dashboard.base
│   ├── persona-matrix.base
│   ├── deliverables-tracker.base
│   └── meeting-log.base
│
├── _drafts/                           # Work in progress
├── _review/                           # Pending approval
├── archive/                           # Retired document versions
│
└── .claude/
    ├── commands/                      # 28 slash commands
    ├── skills/
    │   ├── obsidian-vault-patterns/   # Structural conventions
    │   └── gtm-document-standards/    # Document quality standards
    └── agents/
        ├── call-processor.md          # Transcript processing
        ├── interaction-processor.md   # CS interaction processing
        └── campaign-processor.md      # Campaign data processing
```

---

## All 28 Commands

### Sales (7)

| Command | What It Does |
|---------|-------------|
| `/log-call` | Log a sales call with auto-linking to deals, personas, and pipeline |
| `/prep-call` | Generate a pre-call briefing from accumulated vault context |
| `/pipeline-report` | Pipeline summary with stale deal alerts and missing-info flags |
| `/analyze-objections` | Cross-call objection pattern analysis with frequency and responses |
| `/draft-sequence` | Generate persona-targeted outbound email sequences |
| `/draft-content` | Draft LinkedIn posts or blog outlines from vault knowledge |
| `/win-loss` | Closed deal pattern analysis across wins and losses |

### Customer Success (8)

| Command | What It Does |
|---------|-------------|
| `/log-interaction` | Log a CS interaction (QBR, onboarding, check-in, support) |
| `/portfolio-report` | Account portfolio health summary with risk indicators |
| `/prep-qbr` | Prepare QBR materials from account history and health metrics |
| `/churn-analysis` | Identify churn risk patterns across the customer portfolio |
| `/log-escalation` | Log a customer escalation with severity, category, and owner |
| `/expansion-report` | Upsell and cross-sell pipeline with expansion opportunity scoring |
| `/handoff-to-cs` | Sales-to-CS handoff with full context transfer and checklist |
| `/feedback-analysis` | Analyze customer feedback for sentiment trends and themes |

### Marketing (6)

| Command | What It Does |
|---------|-------------|
| `/log-campaign` | Log a marketing campaign with channel, targeting, and budget |
| `/campaign-report` | Campaign performance report with ROI and conversion metrics |
| `/content-calendar` | Content pipeline and publishing calendar overview |
| `/attribution-analysis` | Connect campaigns to pipeline revenue with attribution modeling |
| `/log-lead` | Log a new lead with source, qualification criteria, and scoring |
| `/analyze-tests` | A/B test analysis with statistical significance and recommendations |

### Cross-Functional (7)

| Command | What It Does |
|---------|-------------|
| `/new-draft` | Create a new draft document in the staging workflow |
| `/submit-for-review` | Move a draft to the review queue for approval |
| `/publish` | Promote a reviewed document to its canonical location |
| `/weekly-recap` | Generate a weekly activity summary across all departments |
| `/vault-health` | Diagnostic health check with scoring and remediation suggestions |
| `/onboard` | Guided walkthrough for new team members learning the vault |
| `/qualify-lead` | Score a lead against your ICP using configurable qualification criteria |

> Plus `/setup`, the interactive wizard that creates everything above.

---

## How It Works

**CLAUDE.md as business context:** Every Claude Code session automatically reads `CLAUDE.md` from your vault root. This file contains your company profile, ICP definitions, deal stages, naming conventions, and folder structure. Claude starts every conversation already knowing your business.

**Wiki-links as knowledge graph:** Every document contains `[[wiki-links]]` to related documents. A call note links to its deal, the deal links to the persona, and the persona links to the ICP segment. Obsidian's Graph View renders these connections visually.

**Commands as structured workflows:** Slash commands do more than create files. They read existing vault content, auto-link new documents to related notes, enforce naming conventions, and maintain frontmatter consistency. The output is always a well-connected node in your knowledge graph.

**Base views as live databases:** The 18 `.base` files in `/bases/` are Obsidian Base configurations that query your vault via frontmatter properties. They render as filterable, sortable database views, like a CRM built from your markdown files.

**Skills as structural memory:** Two skill modules teach Claude the vault's conventions (folder structure, naming patterns, frontmatter schemas) and GTM document standards (quality criteria, required sections, linking rules). Commands reference these skills to maintain consistency.

**Agents as processors:** Three subagents handle structured data processing: transcripts become linked call notes, CS interactions become account-connected records, and campaign data becomes attributed pipeline entries.

---

## Requirements

- **Claude Code CLI:** `npm install -g @anthropic-ai/claude-code`
- **Obsidian:** [obsidian.md](https://obsidian.md)
- **Obsidian Bases core plugin:** Enable via Settings > Core Plugins > Bases
- **GitHub (optional):** For backup and team sync
- **Recommended plugins:** [Obsidian Git](https://github.com/denolehov/obsidian-git), [Claudian](https://github.com/YishenTu/Claudian), [Dataview](https://github.com/blacksmithgu/obsidian-dataview), [Templater](https://github.com/SilentVoid13/Templater)

---

## Need Help Implementing This?

RevVault is free and open source. You can clone it, run `/setup`, and start building your GTM knowledge base today.

If you want help tailoring it to your team's workflow, building custom commands for your sales process, or operationalizing your entire GTM knowledge base with structured onboarding and rollout, we can help.

[**Schedule a consultation**](https://sixtysixten.com/schedule-consultation/)

---

## License

MIT. See [LICENSE](./LICENSE) for details.

---

<p align="center">
  Built by <a href="https://sixtysixten.com">SixtySixTen</a>. Strategy and systems for revenue teams.
</p>
