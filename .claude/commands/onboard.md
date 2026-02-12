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
   - **/customer-success/accounts/** — Count accounts, list by health status.
   - **/customer-success/interactions/** — Count interactions, list 5 most recent.
   - **/customer-success/escalations/** — Count escalations, list open ones.
   - **/customer-success/expansion/** — Count expansion opportunities, list by stage.
   - **/marketing/campaigns/** — Count campaigns, list active ones.
   - **/marketing/leads/** — Count leads, list recent ones.
   - **/hubs/review-queue.md** — Show what's currently awaiting review.

3. **Explain the folder structure:**
   - `/hubs/` — Dashboard navigation
   - `/company/` — Business context
   - `/icp/` — Customer profiles and personas
   - `/sales/` — Calls, deals, sequences
   - `/customer-success/` — Accounts, interactions, playbooks, escalations
   - `/marketing/` — Campaigns, content plans, leads
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
   - `/log-interaction` — "After a customer call or QBR, create a structured interaction note"
   - `/portfolio-report` — "See customer portfolio health and renewal timeline"
   - `/prep-qbr` — "Get a briefing before a customer QBR"
   - `/churn-analysis` — "Analyze churn patterns and retention drivers"
   - `/log-campaign` — "Log a new marketing campaign"
   - `/campaign-report` — "See campaign performance across channels"
   - `/content-calendar` — "View content pipeline and identify gaps"
   - `/attribution-analysis` — "Trace pipeline back to marketing touchpoints"
   - `/log-escalation` — "Log a customer escalation and track resolution"
   - `/expansion-report` — "See CS expansion pipeline and stale opportunities"
   - `/handoff-to-cs` — "Generate a Sales-to-CS handoff document"
   - `/feedback-analysis` — "Analyze customer feedback, NPS, and sentiment"
   - `/log-lead` — "Log a new marketing lead"
   - `/analyze-tests` — "Analyze A/B test results and patterns"
   - `/qualify-lead` — "Score and qualify a lead against MQL/SQL criteria"

5. **Suggest first actions:**
   - Browse HOME.md in Obsidian to see the navigation
   - Open a `.base` file (e.g., `bases/pipeline-tracker`) to see the live pipeline view
   - Read the company overview to understand the business context
   - Try `/vault-health` to see the current state
   - Try `/log-call` after the next sales call
   - Try `/log-interaction` after a customer check-in or QBR
   - Try `/log-campaign` to track a marketing campaign
