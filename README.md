# 🧠 OpenHeart – Dev Environment for Proposal

OpenHeart is the development environment of **Proposal**, 

## 🧩 Microservices (Conceptual + Functional)

| Service Name | Role | Alias |
|--------------|------|-------|
| `portrait`   | Profile management | (User Profile) |
| `suitor`     | Partner preferences | (User Preferences) |
| `studio`     | Photo sessions & uploads | (Photoshoot Service) |
| `trust`      | Secure storage of verified information | (Vault) |
| `draft`      | Incoming new users / sandbox entries | (INDs) |

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

```