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

## Account Tracker Standards

File location: `/customer-success/accounts/slug.md`

Required sections in order:
1. **Overview** — What this customer does, what they bought, why they're a fit (2-3 sentences)
2. **Key Stakeholders** — Table with Name, Role, Authority, Notes
3. **Health Signals** — Current indicators of account health (adoption, engagement, satisfaction)
4. **Renewal Timeline** — Key dates and milestones leading to renewal
5. **Related Interactions** — Wiki-links to every interaction note for this account
6. **Expansion Opportunities** — Upsell, cross-sell, or expansion signals
7. **Notes** — Running log of updates, added in reverse chronological order

Account frontmatter must include `health-score:` with one of: healthy, at-risk, red, churned. Must also include `mrr:` and `renewal-date:`.

## Interaction Note Standards

File location: `/customer-success/interactions/YYYY-MM-DD-slug.md`

Required sections in order:
1. **Context** — Why this interaction happened, current account health, relationship context (1-3 sentences)
2. **Key Takeaways** — 3-5 bullet points maximum. Each bullet is one concrete insight, not a paragraph.
3. **Customer Sentiment** — How the customer is feeling, with evidence from the interaction.
4. **Action Items** — Checkbox format (`- [ ] Task — owner, due date`). Every action item has an owner.
5. **Health Signals** — Indicators of account health observed during this interaction.
6. **Raw Transcript** — Unstructured notes or full transcript. Preserve verbatim — never summarize or edit this section.

Interaction note rules:
- One file per interaction. Never combine multiple interactions into one file.
- Takeaways are facts, not opinions. "Customer reported 40% adoption rate" not "They seem to like it."
- Always link to the matching account file, matching persona, and previous interactions with the same client.

## Onboarding Playbook Standards

File location: `/customer-success/playbooks/slug.md`

Required content:
- Target segment clearly identified
- Milestones with success criteria, owner, target day, and actions
- Adoption metrics table for tracking onboarding progress

## Campaign Tracker Standards

File location: `/marketing/campaigns/YYYY-MM-DD-slug.md`

Required sections in order:
1. **Overview** — What this campaign is about, what it's trying to achieve (2-3 sentences)
2. **Audience & Targeting** — Target persona, segment, exclusions
3. **Messaging & Creative** — Key messages, CTA, creative assets
4. **Budget & Spend** — Table with Category, Budgeted, Actual, Notes
5. **Performance Metrics** — Table with Metric, Target, Actual, Notes (impressions, clicks, leads, MQLs, SQLs, pipeline influenced)
6. **Key Learnings** — What worked, what didn't, what to adjust

Campaign frontmatter must include `channel:` with one of: email, paid, organic, social, event. Must also include `status:` and `budget:`.

## Content Plan Standards

File location: `/marketing/content/slug.md`

Required sections in order:
1. **Overview** — Topic, audience, channel, publish date, goal
2. **Outline** — Key sections and structure of the content piece
3. **Key Messages** — Core points the content must communicate
4. **Distribution Plan** — Table with Channel, Action, Date, Owner
5. **Performance Tracking** — Table with Metric, Target, Actual, Notes

Content plan frontmatter must include `content-type:` with one of: blog, case-study, whitepaper, webinar, social. Must also include `target-persona:`.

## Writing Style Rules

- **Bullet points for facts.** Narrative prose only for context that requires it.
- **Concise over comprehensive.** One clear sentence beats three vague ones.
- **Specific over generic.** "$50K budget confirmed" not "budget discussed."
- **Present tense for current state.** Past tense for events.
- **No filler phrases.** Cut "it's worth noting that" — just note it.
- **Quantify when possible.** Numbers, dates, amounts, percentages.

## Escalation Note Standards

File location: `/customer-success/escalations/YYYY-MM-DD-severity-slug.md`

Required sections in order:
1. **Issue Summary** — What happened, when it started, who reported it
2. **Impact** — Business impact on the customer
3. **Root Cause** — Identified root cause or current hypothesis
4. **Resolution Steps** — Actions taken or planned to resolve
5. **Outcome** — Final resolution and customer response

Escalation note rules:
- Frontmatter must include `severity:` with one of: low, medium, high, critical
- Frontmatter must include `category:` with one of: technical, billing, contract, service, executive
- Frontmatter must include `status:` with one of: open, investigating, resolved, closed
- Always link to the matching account file and recent interactions

## Expansion Tracker Standards

File location: `/customer-success/expansion/slug.md`

Required sections in order:
1. **Overview** — What this expansion opportunity is about
2. **Opportunity Details** — What, why now, estimated value
3. **Key Stakeholders** — Decision makers and influencers
4. **Timeline** — Expected timeline and key milestones

Expansion tracker rules:
- Frontmatter must include `opportunity-type:` with one of: upsell, cross-sell, add-on, upgrade
- Frontmatter must include `value:` — estimated deal value
- Frontmatter must include `stage:` with one of: identified, qualifying, proposal, negotiation, closed-won, closed-lost
- Always link to the matching account file

## Feedback Note Standards

File location: `/customer-success/feedback/YYYY-MM-DD-slug.md`

Required sections in order:
1. **Summary** — Brief summary of the feedback received
2. **Verbatim Feedback** — Exact quotes or full text from the customer
3. **Themes** — Key themes and patterns identified
4. **Action Items** — Follow-up actions based on this feedback

Feedback note rules:
- Frontmatter must include `feedback-type:` with one of: nps, csat, survey, interview, review
- Frontmatter must include `score:` — numeric score if applicable
- Frontmatter must include `sentiment:` with one of: positive, neutral, negative
- Always link to the matching account file

## Lead Tracker Standards

File location: `/marketing/leads/YYYY-MM-DD-slug.md`

Required sections in order:
1. **Overview** — Brief context on the lead
2. **Contact Info** — Table with name, company, title, email, phone
3. **Lead Source Details** — How this lead was generated
4. **Qualification Notes** — MQL/SQL scoring notes, ICP fit assessment

Lead tracker rules:
- Frontmatter must include `source:` with one of: inbound, outbound, event, referral, organic
- Frontmatter must include `qualification-status:` with one of: new, mql, sql, disqualified
- Always link to the matching campaign source and persona

## A/B Test Standards

File location: `/marketing/experiments/slug.md`

Required sections in order:
1. **Hypothesis** — What you expect to happen and why
2. **Variants** — Table with variant description and audience split
3. **Results** — Table with metrics for each variant and lift
4. **Conclusion** — What was learned, was hypothesis validated

A/B test rules:
- Frontmatter must include `status:` with one of: planning, running, completed, inconclusive
- Frontmatter must include `winner:` with one of: a, b, inconclusive
- Always link to the related campaign

## Event Tracker Standards

File location: `/marketing/events/slug.md`

Required sections in order:
1. **Overview** — What this event is, why we're participating/hosting
2. **Objectives & Goals** — What we want to achieve
3. **Agenda / Sessions** — Table with time, session, speaker, notes
4. **Lead Generation Results** — Leads captured, MQLs generated
5. **ROI Summary** — Event cost vs. pipeline generated

Event tracker rules:
- Frontmatter must include `event-type:` with one of: conference, webinar, workshop, meetup, tradeshow
- Frontmatter must include `date:` — event date
- Frontmatter must include `status:` with one of: planning, confirmed, completed, cancelled
- Always link to related campaigns and leads generated

## Cross-Domain Linking Standards

When creating documents that reference content in another domain, add a wiki-link to that domain's hub:
- A deal that references marketing campaigns → include `[[marketing]]` in Connections
- A campaign that tracks pipeline influenced → include `[[sales-pipeline]]` in Connections
- An expansion opportunity → include `[[sales-pipeline]]` in Connections (expansion is pipeline)
- An account that originated from a deal → include `[[sales-pipeline]]` in Connections
- A lead scored against ICP → include `[[icp-and-personas]]` in Connections
- Any document referencing company context docs → include `[[business-context]]` in Connections
