Walk a new team member through the vault structure and available tools.

This command outputs everything inline — it does NOT create any files.

## Steps

1. **Welcome.** Briefly explain that this is a GTM knowledge base managed through Obsidian + Claude Code.

2. **Read and summarize key vault files:**

   - **CLAUDE.md** — Explain how the vault is configured for AI-assisted workflows. Summarize the key rules.
   - **HOME.md** — Show the entry point and how to navigate to any section.
   - **/company/overview.md** — Summarize who the company is, what they do, and the engagement context.
   - **/icp/** — Summarize who they sell to (list available ICP and persona files).
   - **/sales/deals/** — Count active deals, list them with their stages.
   - **/sales/calls/** — Count total call notes, list the 5 most recent.
   - **/hubs/review-queue.md** — Show what's currently awaiting review.

3. **Explain the folder structure:**
   - `/hubs/` — Dashboard navigation
   - `/company/` — Business context
   - `/icp/` — Customer profiles and personas
   - `/sales/` — Calls, deals, sequences
   - `/automations/` — Workflow specs
   - `/deliverables/` — Reports and proposals
   - `/meetings/` — Sync notes and recaps
   - `/bases/` — Database views for deals, calls, review queue
   - `/_drafts/` and `/_review/` — Staging workflow
   - `/archive/` — Retired documents

4. **Explain available slash commands with examples:**
   - `/log-call` — "After a sales call, run this to create a structured note"
   - `/new-draft` — "Start any new document here"
   - `/submit-for-review` — "Move a draft to the review queue for approval"
   - `/publish` — "Promote an approved document to its final location"
   - `/weekly-recap` — "Generate a summary of the past week's activity"
   - `/analyze-objections` — "See objection patterns across all calls"
   - `/vault-health` — "Check the vault for structural issues"
   - `/prep-call` — "Get a briefing before a prospect call"
   - `/pipeline-report` — "See pipeline status and stale deals"
   - `/draft-sequence` — "Create an outbound email sequence"
   - `/draft-content` — "Generate content from vault knowledge"
   - `/win-loss` — "Analyze closed deal patterns"

5. **Suggest first actions:**
   - Browse HOME.md in Obsidian to see the navigation
   - Open a `.base` file (e.g., `bases/pipeline-tracker`) to see the live pipeline view
   - Read the company overview to understand the business context
   - Try `/vault-health` to see the current state
   - Try `/log-call` after the next sales call
