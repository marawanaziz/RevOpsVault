Publish a document from `/_review/` to its canonical location in the vault.

## Steps

1. **Identify the review item.** If no specific file is mentioned:
   - List all files in `/_review/` with their frontmatter summaries (title, target-location, review-submitted date).
   - Ask which one to publish.

2. **Read the target-location** from the document's frontmatter.

3. **Archive existing file (if applicable).** If a file already exists at the target location:
   - Move it to `/archive/` with a date suffix (e.g., `ideal-customer-profile-2025-02-10.md`).
   - Update its frontmatter to `status: archived`.

4. **Move the review file** to the target location.

5. **Update frontmatter:**
   - Change `status:` to `published`
   - Add `published-date: YYYY-MM-DD` with today's date
   - Remove `target-location:` and `replaces:` fields (no longer needed)

6. **Fix wiki-links.** Scan the vault for any `[[_review/filename]]` references and update them to point to the new canonical location.

7. **Suggest backlinks.** Search the vault for documents that should reference this newly published file (by topic, mentions, or related content). List suggestions for the user to approve — do not add backlinks without confirmation.

8. **Update hub notes:**
   - Add or update the link in the appropriate hub in `/hubs/`.
   - In `/hubs/review-queue.md`: remove from `## Awaiting Review`, add to `## Recently Published` with today's date.

9. **Confirm.** Display: final location, archived file (if any), hub updates made, and suggested backlinks.
