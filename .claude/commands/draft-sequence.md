Generate a persona-targeted outbound email sequence grounded in vault context.

## Steps

1. **Identify the target persona.** Either:
   - Ask which persona to target, OR
   - List available personas from `/icp/personas/` and ask the user to pick one

2. **Read persona context.** From the selected persona file, extract:
   - Pain points
   - Goals
   - Common objections
   - Messaging angles
   - Decision authority

3. **Read company context.** From `/company/overview.md`, extract:
   - Value proposition
   - Products/services
   - Key differentiators

4. **Read existing sequences.** Scan `/sales/sequences/` for existing sequence files. Note their target personas and messaging approaches to avoid repeating what's already been tried.

5. **Generate the sequence** using the template from `templates/sequence-playbook.md` (or `/sales/sequences/_sequence-template.md` if it exists in the vault):
   - 3-5 email steps
   - Each step includes: Day number, Channel, Subject line, Message body, Goal
   - Messages should reference specific pain points from the persona
   - Tone should match the persona's decision authority level
   - Include a mix of value-driven and direct approaches

6. **Save to `/_drafts/`** with filename `sequence-persona-slug-vN.md` where N increments if previous versions exist. Frontmatter: `status: draft`, `target-location: /sales/sequences/`, `target-persona:`, `tags: [sequence, outreach, draft]`.

7. **Populate `## Connections`:**
   - Link to the target persona document
   - Link to the ICP definition
   - Link to `/company/overview.md`
   - Link to any existing sequences that target the same persona

8. **Confirm.** Display the sequence outline and file location.
