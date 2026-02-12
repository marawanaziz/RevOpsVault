Generate an experiment analysis summary from all A/B test files in the vault.

## Steps

1. **Read all experiment files** in `/marketing/experiments/` (exclude templates starting with `_`).

2. **Summary by status:**
   - Count of tests by status (planning, running, completed, inconclusive)
   - List each test with wiki-link, channel, and status

3. **Win rate analysis:**
   - Overall win rate (tests with a clear winner vs. total completed tests)
   - Win rate broken down by channel
   - Average lift for winning variants

4. **Pattern analysis:**
   - What types of changes drive the biggest lifts (messaging, creative, targeting, timing)
   - Which channels have the highest experiment success rate
   - Common characteristics of winning variants

5. **Cross-reference with campaigns:**
   - For each completed test, search `/marketing/campaigns/` for the related campaign
   - Show how test results impacted campaign performance
   - Identify campaigns that could benefit from running experiments

6. **Recommendations:**
   - Suggest high-impact tests based on patterns observed
   - Flag stale experiments (status=running with no update in 14+ days)
   - Identify channels or campaigns with no experiments (testing gaps)

7. **Ask where to save.** Offer:
   - Display inline only (default)
   - Save as a deliverable in `/deliverables/`
   - Save as a draft in `/_drafts/`
