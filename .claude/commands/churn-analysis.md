Analyze patterns across customer accounts to identify churn signals and retention drivers.

## Steps

1. **Read all account files** in `/customer-success/accounts/` (exclude templates starting with `_`).

2. **Categorize accounts.** Separate into:
   - Churned (health-score: churned)
   - Red (health-score: red)
   - At Risk (health-score: at-risk)
   - Healthy (health-score: healthy)

3. **For each churned and red account, gather context:**
   - Read the account file for stakeholders, MRR, renewal timeline, and notes.
   - Read all related interaction notes linked from `## Related Interactions` (follow the wiki-links).
   - Note: escalations, sentiment trends, health signal progression.

4. **Analyze churn patterns.** Across churned accounts, identify commonalities:
   - Common health signal trajectory before churn
   - Feature/adoption gaps
   - Support and escalation patterns
   - Stakeholder changes or champion loss
   - Timing patterns (contract length, time since onboarding)

5. **Analyze retention patterns.** Across healthy accounts, identify:
   - What engagement patterns correlate with health
   - Expansion signals and their correlation with retention
   - CSM interaction frequency and type
   - Feature adoption breadth

6. **Generate the insights report:**
   - **Churn Rate** — by segment, MRR tier, and account age (if enough data)
   - **Top Churn Reasons** — ranked by frequency with specific examples
   - **Retention Patterns** — what healthy accounts have in common
   - **Early Warning Signals** — indicators that predict churn before it happens
   - **Recommended Interventions** — specific actions to reduce churn risk

7. **Ask where to save.** Offer:
   - Save as a deliverable in `/deliverables/` (published)
   - Save as a draft in `/_drafts/` (for iteration)
   - Display inline only

8. **Populate `## Connections`** with links to every account file and interaction note analyzed.
