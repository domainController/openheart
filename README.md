# 🧠 OpenHeart – Dev Environment for Proposal

OpenHeart is the development environment of **Proposal**,

## 🧩 Microservices (Conceptual + Functional)

| Service Name | Role                                   | Alias                |
| ------------ | -------------------------------------- | -------------------- |
| `portrait`   | Profile management                     | (User Profile)       |
| `suitor`     | Partner preferences                    | (User Preferences)   |
| `studio`     | Photo sessions & uploads               | (Photoshoot Service) |
| `trust`      | Secure storage of verified information | (Vault)              |
| `draft`      | Incoming new users / sandbox entries   | (INDs)               |

## 📁 Folder Structure

```bash
/
├── services/
│   ├── portrait/
│   ├── suitor/
│   ├── studio/
│   ├── trust/
│   └── draft/
├── styles/
│   └── tailwind.css
└── README.md
-----------------------------------------------------------------------------------------------

DRAFT :

-----------------------------------------------------------------------------------------------

## 📁 Project Structure

openheart/
├── app/                    # Next.js app
│   ├── components/        # React components
│   ├── pages/             # Frontend routes
│   └── styles/            # Tailwind CSS isolated here
│
├── services/              # Microservices structure (see below)
├── public/                # Static assets
├── .env.local             # Supabase + Algolia credentials (ignored)
└── README.md              # This file

## 🧩 Microservices Structure
These services reflect conceptual and functional domains within Proposal.

| Service Name | Conceptual Meaning | Role |
|--------------|--------------------|------|
| **portrait** | Public profile view | Handles user-facing profile data (bio, photos, preferences) |
| **suitor** | Relationship intentions | Commitment expectations, romantic status, visibility filters |
| **studio** | Verification & media space | Photoshoots, in-person checks, visual identity checks |
| **draft** | Use case onboarding | Profile simulations and enrichment based on user types (Mike Peaches etc.) |
| **trust** | Proof vault | Stores and manages verified documents (income, ID, family status) |
| **ledger** | Economic transactions | Access key purchases, income payouts, internal credits |
| **insight** | Analytics core | Behavior tracking, search patterns, transparency metrics |
| **guardian** | Legal & compliance | Manages terms of use, subscription legalities, proof-based bans |
| **haven** | Safety & moderation | Human support, concierge moderators, red flag review |

Each folder in `services/` may grow into its own deployable microservice.

## ⚙️ Tech Stack
- **Next.js 15**
- **Supabase** for real-time Postgres
- **Algolia** for ultra-fast search with autocomplete
- **Tailwind CSS** with ShadCN UI components

## 🎯 Development Branching
- **main** → stable production-ready exports
- **dev** → all active development
- **feature/** → (optional) specific experimental work

## 🌐 Environments
- **OpenHeart** → Development (this repo)
- **Arranged** → Testing/Staging
- **Proposal** → Production

## 🧠 Philosophy
Proposal’s architecture isn’t just technical—it’s narrative. Each service name reflects a role in the overall matchmaking journey. This encourages intuitive development, modularity, and better team onboarding.

## ✅ To Do
- [x] Initial Supabase + Algolia integration
- [x] Microservice naming structure
- [ ] Split Tailwind styles into isolated files (WIP)
- [ ] Full CRUD pipeline for portrait/suitor/trust
- [ ] Create API tokens per service
- [ ] Add `docs/` folder for MOA references

## 👤 Maintainer
Patrice – `@domainController`

---
Let your dev speak like your brand: intentional, elegant, and full of trust.

# 🧩 layout-v1-profile

## 🎯 Purpose of this Branch

This branch introduces the **first structured and visually realistic version of the user profile layout** for Proposal.
It marks a turning point: we move from isolated experiments (like drag-and-drop) to a **coherent, modular, MVP-aligned UI**.

---

## ✅ What Was Built

### Layout & Architecture
- 🧱 Three main blocks: `LeftColumn (Scenario)`, `RightColumn (Track)`, `SidebarRight (Identity)`
- 🎛️ A horizontal `Navbar` with non-hyperlink popovers (Clothing, Books, Travel, etc.)
- 🎨 Clean and sober design: no top labels, fields use internal placeholders
- ⚖️ Symmetry and spacing between columns refined
- ✅ Sections wrapped via `SectionWrapper` for consistent spacing and background

### Components & Fields
- 🧩 `BaseSelect.tsx` → generic dropdown component used across all sections
- 📝 Displayed fields: `CommitmentExpectations`, `PreferredCountriesOfResidence`, `CoupleRelationshipValues`, etc.
- 🖼️ Both `ScenarioSection` and `TrackSection` now include clean, functional select inputs

---

## 🧭 What Comes Next

1. Fill fields with test JSON values
2. Connect to Supabase for simulated user record saving
3. Inject real use cases (e.g., Mike Peaches, Khalil Ben Dekiche)
4. Prepare Algolia autocomplete for all critical fields
5. Finalize the Navbar with popover content (book lists, clothing brands, etc.)

---

## 🧠 Why This Branch

Previous branch `no-drag-mvp` is now outdated:
- Drag & drop was paused
- Columns are now fixed, intentional, and meaningful
- We're building toward a **realistic, testable MVP layout**

> `layout-v1-profile` = the **first true vision** of Proposal’s user profile UI

This is the **base for testing, connecting, refining**, and simulating real users.

---

## 💡 Reminder for the Future

> “If I come back to this in 3 weeks, I need to understand exactly where I left off, why this branch was created, and where I was heading.”

This file exists for that reason.

Keep documenting, keep branching with intention, and Proposal will keep growing beautifully. 🚀
```
# 🛡️ Project Protection Plan - Proposal

## 1. 📜 License: Business Source License (BUSL 1.1)

> Use limitation: You may use the code freely **for non-commercial or evaluation purposes**. Commercial use, copying, redistribution, or hosting as a service requires permission or a license agreement.

**BUSL Summary:**
- ✅ Free use for development & evaluation
- ❌ No production / commercial use without license
- 🔓 Optional open-source release date (e.g. after 4 years)

```text
This code is licensed under the Business Source License 1.1.
Use is permitted for non-commercial purposes. Commercial use
requires a license. See LICENSE file for full terms.
```

## 2. 📄 README Purpose of This Branch

This branch represents a major step: **first structured profile layout** with:
- Modular `Navbar` using popovers (Books, Clothes, etc.)
- Clean left/right column layout
- Section by section organization for user data

We moved from early component experiments to a **visually clear and scalable foundation**.

## 3. 🤝 Founding Developer Pledge

If you collaborate on this code during the open phase, you agree to:
- Not commercialize or clone the idea without written permission.
- Accept that the project may become private at any time.
- Be considered for future co-founder or dev roles based on contribution.

✅ Optional: contributors can sign a `PLEDGE.md` with date + GitHub username.

## 4. 🚧 Startup Mode Checklist

- [x] MVP development in progress
- [x] UI/UX first structure with Tailwind + React + ShadCN
- [x] Use case-driven design (romantic status, ambition, verified data)
- [ ] Connect Supabase for data
- [ ] Autocomplete with Algolia
- [ ] Deploy on Clever Cloud
- [ ] Invite 1–2 trusted devs for review (post-README)

---

🧠 **Remember**: This project is still under active development and NOT yet open for reuse or commercial exploitation. Contributions are welcome, but under the terms of the license.

For more, contact: `noyau.imperatif@gmail.com`

— Proposal Team

