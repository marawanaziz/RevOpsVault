Move a draft document from `/_drafts/` to `/_review/` for approval.

## Steps

1. **Identify the draft.** If no specific file is mentioned:
   - List all files in `/_drafts/` with their frontmatter summaries (title, author, target-location, created date).
   - Ask which one to submit for review.

2. **Move the file** from `/_drafts/` to `/_review/`, keeping the same filename.

3. **Update frontmatter:**
   - Change `status:` to `in-review`
   - Add `review-submitted: YYYY-MM-DD` with today's date

4. **Update the review queue hub.** Add an entry to the `## Awaiting Review` section in `/hubs/review-queue.md`:
   ```
   - [[_review/filename]] — Submitted {date}, target: {target-location}
   ```

5. **Confirm.** Display the file's new location and the updated review queue entry.
