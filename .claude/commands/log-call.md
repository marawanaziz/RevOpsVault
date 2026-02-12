Log a new sales call and create a structured note in the vault.

## Steps

1. **Gather call details.** Ask me for:
   - Who was on the call (names and roles)
   - Call type (discovery, demo, check-in, or closing)
   - What was discussed — paste transcript, notes, or describe from memory
   - Any key decisions, objections, or next steps

2. **Delegate to the call-processor agent** if a transcript is provided. Otherwise, process manually using the template at `/sales/calls/_call-template.md`.

3. **Create the call note** in `/sales/calls/` with filename `YYYY-MM-DD-type-firstname.md` using today's date.

4. **Auto-link to related vault content.** Search the vault and add wiki-links for:
   - **Deal file**: Search `/sales/deals/` for a matching deal by company or prospect name. Link in `## Connections` and add a backlink from the deal's `## Related Calls` section.
   - **Persona**: Search `/icp/personas/` for a persona matching the prospect's role. Link in `## Connections`.
   - **Previous calls**: Search `/sales/calls/` for earlier calls with the same attendees. Link in `## Connections` as "previous call with [name]."
   - **Tech stack**: If any tools or platforms are mentioned, check `/company/tech-stack.md` for matches and note them.

5. **Update the sales pipeline hub.** Add a link to this new call note under `## Recent Calls` in `/hubs/sales-pipeline.md`.

6. **Report summary.** Display: key takeaways, action items count, and which vault documents were linked.
