Create a new draft document in the vault's staging area.

## Steps

1. **Ask what they're drafting.** Get:
   - What is this document about?
   - What type is it? (ICP update, deliverable, proposal, automation spec, persona, sequence, etc.)
   - Who is the author?
   - Where should it go when finalized? (target location in the vault)
   - Is this a revision of an existing canonical document?

2. **If this is a revision:**
   - Read the existing document at the specified canonical location.
   - Copy it to `/_drafts/` with `-revised` appended to the filename.
   - Update frontmatter to `status: draft` and add `replaces: true` and `target-location:` pointing to the original.
   - Do NOT modify the original canonical document.

3. **If this is a new document:**
   - Create a new file in `/_drafts/` with a descriptive slug filename.
   - Use the appropriate template if one exists for this document type.
   - Set frontmatter: `status: draft`, `created: today`, `author:`, `target-location:`, `tags:`.

4. **Prompt for related content.** Ask: "What existing vault notes relate to this? I can search for you if you describe the topic." Search the vault and add wiki-links in the `related:` frontmatter and `## Connections` section.

5. **Confirm creation.** Display the file path, target location, and linked documents.
