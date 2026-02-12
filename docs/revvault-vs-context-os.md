# RevVault vs. Context OS Quickstart — Side-by-Side

> Reference comparison between RevVault and [Context OS](https://github.com/jacob-dietle/context-os-quickstart) by jacob-dietle. Last updated: 2025-02-11.

## Philosophy

| | **RevVault** | **Context OS** (jacob-dietle) |
|---|---|---|
| **Core idea** | Obsidian vault as a GTM/RevOps CRM-like workspace | "Context Operating System" — a persistent AI knowledge graph |
| **Mental model** | Operational system (log calls, track deals, publish deliverables) | Knowledge accumulation system (ingest content -> atomic concepts -> compound intelligence) |
| **Primary verb** | *Do things* — log, draft, review, publish, analyze | *Accumulate knowledge* — ingest, link, validate, health-check |
| **Target user** | B2B revenue teams actively running GTM | Anyone using AI tools who wants persistent, compounding context |

## Scope & Output

| | **RevVault** | **Context OS** |
|---|---|---|
| **Commands** | 14 (13 copied to vault + setup) | 3 (quickstart, ingest, graph-health) |
| **Skills** | 2 (vault patterns, GTM doc standards) | 2 (context-os-basics, context-gap-analysis) |
| **Agents** | 1 (call-processor) | 1 (ingestion-agent) |
| **Templates** | 24 (6 hubs, 5 doc templates, 5 company starters, 6 base views, HOME.md, CLAUDE.md) | 5 (CLAUDE.md starter, taxonomy.yaml, ontology.yaml, node template, sample transcript) |
| **Generated files** | ~40 files across 18+ directories | ~5-10 files across ~5 directories |
| **Obsidian-specific** | Yes — Bases views, plugin guidance, `.obsidian` awareness | No — editor-agnostic, designed for Cursor |

## Architecture

| | **RevVault** | **Context OS** |
|---|---|---|
| **Structure** | Flat functional folders (`/sales/`, `/icp/`, `/company/`, `/deliverables/`) | Two-layer: atomic knowledge graph (Layer 1) + operational docs (Layer 2) |
| **Content model** | Document-type templates (call notes, deal trackers, personas, battle cards) | Generic "knowledge nodes" with YAML frontmatter (domain, node_type, status, tags) |
| **Lifecycle** | Draft -> In-Review -> Published -> Archived (folder-based staging) | Emergent -> Validated -> Canonical (status-based lifecycle on nodes) |
| **Quality control** | `/vault-health` (15 checks, score out of 10) | `/graph-health` (4 dimensions: inventory, tag health, link health, lifecycle health) |
| **Linking** | Wiki-links with `## Connections` sections + `related:` frontmatter | Wiki-links with ontology-defined relationship types (enables, supports, implements) |
| **Governance** | Skills enforce conventions implicitly | Explicit constitutional docs: `taxonomy.yaml` (blessed tags) + `ontology.yaml` (relationship rules) |

## What RevVault Has That Context OS Doesn't

- **11 more operational commands** — call logging, deal tracking, pipeline reports, objection analysis, win/loss analysis, weekly recaps, content drafting, sequence generation, prep-call briefings, draft/review/publish workflow, onboarding
- **Obsidian Bases integration** — 6 pre-built `.base` database views (pipeline tracker, call log, review dashboard, persona matrix, deliverables tracker, meeting log)
- **Folder-based staging workflow** — `/_drafts/` -> `/_review/` -> canonical location -> `/archive/`
- **Pre-populated company starters** — 5 editable files (overview, team, tech-stack, pain-points, metrics) that give users something to fill in immediately
- **Hub-based navigation** — 6 curated dashboard notes + HOME.md
- **GitHub integration** — automated repo creation, Obsidian Git plugin config
- **Plugin guidance** — Obsidian-specific recommendations (Bases, Git, Claudian, Dataview, Templater)
- **Call processing sub-agent** — delegates transcript extraction to a Sonnet agent with restricted tools
- **Cross-cutting analytical commands** — `/analyze-objections`, `/win-loss`, `/pipeline-report` scan the entire vault

## What Context OS Has That RevVault Doesn't

- **Constitutional governance docs** — `taxonomy.yaml` (blessed tags with sprawl thresholds) and `ontology.yaml` (relationship type definitions with rules). RevVault's conventions live only in skills
- **Tag sprawl monitoring** — quantitative metric (single-use tags / total tags) with specific thresholds (<20% healthy, 20-40% warning, >40% unhealthy)
- **Context Gap Analysis skill** — systematic anti-hallucination methodology: "check if it's already done before building." Solution Hierarchy forces search before creation. Claims ~40% of tasks are "already done"
- **Evidence attribution system** — three-tier format: `[VERIFIED: source:line]`, `[INFERRED: logic]`, `[UNVERIFIABLE]`
- **Domain-adaptive setup** — quickstart adapts to GTM, Product, or Research use cases with different directory structures
- **Knowledge node lifecycle aging** — graph-health flags emergent nodes >30 days as needing validation, >60 days as critical
- **Self-customizing skills** — context-gap-analysis offers to learn the user's specific folder structure on first use
- **Built-in consulting funnel** — CTAs to taste.systems woven into commands at natural complexity triggers

## Business Model Comparison

| | **RevVault** | **Context OS** |
|---|---|---|
| **Positioning** | Complete, batteries-included GTM vault | Quickstart foundation with consulting upsell |
| **Monetization** | None visible (built by SixtySixTen as a tool/showcase) | Free quickstart -> consulting CTAs for advanced patterns (multi-agent, Chief of Staff, enterprise taxonomy) |
| **Self-contained?** | Yes — everything you need is in the generated vault | Partially — advanced patterns require consulting |

## Bottom Line

**RevVault is 5x larger in scope and deeply operational.** It's a ready-to-use GTM workspace with specific commands for every sales activity. Context OS is a smaller, more conceptual foundation focused on *how knowledge should be structured* rather than *what you do with it day-to-day*.

### Ideas Worth Adopting from Context OS

1. **Taxonomy/ontology governance files** — formalize tag conventions as queryable YAML instead of just skill text
2. **Context gap analysis** — "search before you create" as a systematic check
3. **Evidence attribution** — explicit sourcing tiers on claims
4. **Tag sprawl monitoring** — quantitative health metric in `/vault-health`
5. **Domain-adaptive setup** — support Product and Research use cases, not just GTM
