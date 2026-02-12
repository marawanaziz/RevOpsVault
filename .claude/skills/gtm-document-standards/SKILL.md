---
user-invocable: false
---

# GTM Document Content Standards

This skill defines content standards for each document type in the GTM vault. Follow these conventions when creating, editing, or summarizing documents.

## Call Note Standards

File location: `/sales/calls/YYYY-MM-DD-slug.md`

Required sections in order:
1. **Context** — Why this call happened, deal stage, relationship context (1-3 sentences)
2. **Key Takeaways** — 3-5 bullet points maximum. Each bullet is one concrete insight, not a paragraph.
3. **Objections Raised** — Direct quotes or paraphrases of pushback, concerns, hesitations. Include who raised it.
4. **Action Items** — Checkbox format (`- [ ] Task — owner, due date`). Every action item has an owner.
5. **Deal Stage Signals** — Buying signals, timeline indicators, budget mentions, next step commitments.
6. **Raw Transcript** — Unstructured notes or full transcript. Preserve verbatim — never summarize or edit this section.

Call note rules:
- One file per call. Never combine multiple calls into one file.
- Takeaways are facts, not opinions. "CEO mentioned $50K budget" not "They seem interested."
- If no objections were raised, write "None raised" — don't omit the section.
- Link to the matching deal file, matching persona, and previous calls with the same prospect.

## Deal Tracker Standards

File location: `/sales/deals/slug.md`

Required sections:
1. **Overview** — What's being sold, what problem it solves (2-3 sentences)
2. **Key Stakeholders** — Table with Name, Role, Decision Authority, Notes
3. **Timeline** — Target close date, key milestones, next steps
4. **Related Calls** — Wiki-links to every call note for this deal
5. **Proposal History** — Wiki-links to proposals in `/deliverables/proposals/`
6. **Notes** — Running log of updates, added in reverse chronological order

Deal frontmatter must include `stage:` with one of: prospecting, discovery, demo, proposal, negotiation, closed-won, closed-lost.

## ICP Document Standards

File location: `/icp/ideal-customer-profile.md`

Required sections:
1. **Ideal Customer Characteristics** — Company size, industry, stage, revenue, tech signals
2. **Primary Pain Points** — What problems make them a fit (bulleted)
3. **Goals & Desired Outcomes** — What they want to achieve
4. **Decision Process** — How they buy, typical timeline, stakeholders involved
5. **Disqualifiers** — Explicit criteria that make a company NOT a fit

Keep ICP documents factual and specific. Include concrete examples where possible.

## Persona Standards

File location: `/icp/personas/role-slug.md`

Required sections:
1. **Role Description** — Title, typical responsibilities, where they sit in the org
2. **Pain Points** — What keeps them up at night (bulleted, specific)
3. **Goals** — What success looks like for this person
4. **Common Objections** — What they push back on and how to handle it
5. **Decision Authority** — Their role in purchasing decisions
6. **Messaging Angles** — What resonates with this persona, language to use

## Meeting Note Standards

File location: `/meetings/YYYY-MM-DD-slug.md`

Required sections:
1. **Agenda** — What was planned for discussion
2. **Key Decisions** — What was decided (bulleted, specific)
3. **Action Items** — Checkbox format with owners and due dates
4. **Notes** — Additional context, discussion points, things to follow up on

Meeting notes are internal documents. Write in shorthand where it improves readability.

## Deliverable Standards

File location: `/deliverables/slug.md` or `/deliverables/proposals/slug.md`

Required sections:
1. **Executive Summary** — 3-5 sentences covering the purpose and key findings
2. **Methodology** — How the analysis was conducted, what data was used
3. **Findings** — The core content, organized by theme or priority
4. **Recommendations** — Specific, actionable next steps with owners where applicable

Deliverables are client-facing or leadership-facing. Write clearly with supporting data.

## Automation Spec Standards

File location: `/automations/slug.md`

Required sections:
1. **Trigger** — What initiates this workflow
2. **Steps** — Numbered sequence of actions
3. **Tools Involved** — Which platforms/tools are used
4. **Expected Outcome** — What happens when the workflow completes successfully
5. **Edge Cases** — Known failure modes, error handling, fallback behavior

## Sequence Playbook Standards

File location: `/sales/sequences/slug.md`

Required content:
- Target persona clearly identified (linked to persona doc)
- Each step includes: Day number, Channel, Subject/Approach, Message Body, Goal
- Performance notes section for tracking what works

## Writing Style Rules

- **Bullet points for facts.** Narrative prose only for context that requires it.
- **Concise over comprehensive.** One clear sentence beats three vague ones.
- **Specific over generic.** "$50K budget confirmed" not "budget discussed."
- **Present tense for current state.** Past tense for events.
- **No filler phrases.** Cut "it's worth noting that" — just note it.
- **Quantify when possible.** Numbers, dates, amounts, percentages.
