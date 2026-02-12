Generate a customer feedback analysis from all feedback notes in the vault.

## Steps

1. **Read all feedback files** in `/customer-success/feedback/` (exclude templates starting with `_`).

2. **Aggregate scores:**
   - Average NPS score across all NPS feedback entries
   - Average CSAT score across all CSAT feedback entries
   - Score breakdown by client/segment if enough data exists
   - Trend: compare recent scores (last 30 days) vs. older scores

3. **Sentiment distribution:**
   - Count of positive, neutral, and negative feedback entries
   - Percentage breakdown
   - List notable entries for each sentiment category with wiki-links

4. **Theme analysis:**
   - Identify recurring themes across all feedback (read `## Themes` sections)
   - Rank themes by frequency
   - Note which themes correlate with positive vs. negative sentiment

5. **Feature requests:**
   - Aggregate all feature requests from `## Feature Requests` sections
   - Rank by frequency (how many customers requested the same thing)
   - Note which requests come from high-value accounts

6. **Common complaints:**
   - Identify the most frequent complaints or pain points
   - Cross-reference with escalation history in `/customer-success/escalations/`

7. **Account health correlation:**
   - For each feedback entry, check the corresponding account health in `/customer-success/accounts/`
   - Flag accounts where low feedback scores correlate with at-risk or red health status
   - Highlight accounts where positive feedback suggests expansion opportunity

8. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`
