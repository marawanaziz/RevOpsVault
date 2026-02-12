Generate content (LinkedIn post, blog outline, or case study draft) grounded in vault knowledge.

## Steps

1. **Ask for content parameters:**
   - **Content type**: LinkedIn post, blog outline, or case study draft
   - **Topic**: What should the content be about?
   - **Target audience**: Who is this for? (can reference a persona)

2. **Read relevant vault context:**
   - **ICP docs** (`/icp/`) — For audience understanding and language
   - **Persona files** (`/icp/personas/`) — For pain points and messaging angles matching the target audience
   - **Call notes** (`/sales/calls/`) — For real-world examples, common questions, and objections that validate the topic
   - **Deliverables** (`/deliverables/`) — For data points, findings, or frameworks to reference
   - **Pain points** (`/company/pain-points.md`) — For messaging angles and problem framing
   - **Company overview** (`/company/overview.md`) — For positioning and value prop context

3. **Generate the content:**
   - **LinkedIn post**: 150-300 words, hook + insight + CTA format. Reference real patterns from calls or data from deliverables — no generic marketing speak.
   - **Blog outline**: Title, subtitle, 4-6 section headings with 2-3 bullet points each describing what goes in each section. Include specific examples or data points from vault content.
   - **Case study draft**: Situation, Challenge, Approach, Results format. Pull specifics from deal files and deliverables.

4. **Save to `/_drafts/`** with filename `content-type-topic-slug.md`. Frontmatter: `status: draft`, `target-location: /deliverables/`, `tags: [content, type]`, `author:`.

5. **Populate `## Connections`** — Link to every source document the content drew from. This makes it easy to trace claims back to vault evidence.

6. **Confirm.** Display the generated content and source documents used.
