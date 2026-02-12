Score and qualify a lead against MQL/SQL criteria from the vault.

## Steps

1. **Get the lead.** Ask me for:
   - Lead name or company name

2. **Search the vault for lead context:**
   - **Lead file**: Search `/marketing/leads/` for the matching lead by name or company
   - **ICP document**: Read the ICP doc in `/icp/` for ideal customer criteria
   - **Qualification criteria**: Read `/marketing/leads/_qualification-criteria.md` for MQL/SQL scoring
   - **Persona match**: Search `/icp/personas/` for a persona matching the lead's role

3. **Score against MQL criteria:**
   - Apply demographic scoring (title match, company size, industry, geography, tech stack)
   - Apply behavioral scoring (engagement signals from lead file)
   - Calculate total MQL score
   - Compare against MQL threshold

4. **If MQL threshold met, assess SQL criteria:**
   - Evaluate BANT criteria (Budget, Authority, Need, Timeline)
   - Determine how many BANT criteria are met
   - Compare against SQL threshold

5. **Update the lead file:**
   - Update `qualification-status:` in frontmatter (new → mql, mql → sql, or → disqualified)
   - Add scoring details to `## Qualification Notes`
   - Update `lead-score:` with calculated score

6. **If qualified as SQL:**
   - Generate a handoff summary for the sales team
   - Suggest creating a deal file in `/sales/deals/`
   - Link to the matching persona and ICP criteria

7. **Report summary.** Display:
   - Lead: name and company
   - MQL Score: X points (threshold: 50)
   - BANT assessment: which criteria met
   - Qualification decision: MQL / SQL / Disqualified / Needs More Data
   - Recommended next steps
