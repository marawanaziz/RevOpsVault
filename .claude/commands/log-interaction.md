Log a new customer interaction and create a structured note in the vault.

## Steps

1. **Gather interaction details.** Ask me for:
   - Who was on the interaction (names and roles)
   - Interaction type (onboarding, qbr, check-in, escalation, or renewal)
   - What was discussed — paste transcript, notes, or describe from memory
   - Customer sentiment (how were they feeling?)
   - Any action items or next steps

2. **Delegate to the interaction-processor agent** if a transcript is provided. Otherwise, process manually using the template at `/customer-success/interactions/_interaction-template.md`.

3. **Create the interaction note** in `/customer-success/interactions/` with filename `YYYY-MM-DD-type-clientname.md` using today's date.

4. **Auto-link to related vault content.** Search the vault and add wiki-links for:
   - **Account file**: Search `/customer-success/accounts/` for a matching account by company or client name. Link in `## Connections` and add a backlink from the account's `## Related Interactions` section.
   - **Persona**: Search `/icp/personas/` for a persona matching the contact's role. Link in `## Connections`.
   - **Previous interactions**: Search `/customer-success/interactions/` for earlier interactions with the same client. Link in `## Connections` as "previous interaction with [client]."
   - **Tech stack**: If any tools or platforms are mentioned, check `/company/tech-stack.md` for matches and note them.

5. **Update the customer success hub.** Add a link to this new interaction note under `## Recent Interactions` in `/hubs/customer-success.md`.

6. **Report summary.** Display: key takeaways, customer sentiment, action items count, and which vault documents were linked.
