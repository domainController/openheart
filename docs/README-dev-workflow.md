# 🛠️ Dev Workflow – OpenHeart

This document summarizes the key terminal aliases and workflows used in the **OpenHeart** development environment.  
It is designed to ensure clarity, consistency, and traceability for all collaborators.

---

## 🔧 Terminal Aliases

### ✅ `journalcommit`
```bash
alias journalcommit='git add . && git commit -m'
```
- Adds all modified files to the Git staging area.
- Prompts you to add a **commit message** that should clearly explain:
  - What was done
  - Why it was done
  - What’s next

📌 Used for: micro-feature commits (e.g., “Dropdown Algolia working + tested”)

---

### 📓 `devlog`
```bash
function devlog() {
  timestamp=$(date "+%Y-%m-%d_%H-%M")
  mkdir -p docs/logs
  filepath="docs/logs/dev-log-${timestamp}.md"
  touch "$filepath"
  echo "# 🕓 Dev Log — $timestamp" > "$filepath"
  echo -e "\n## Context\n\n## Summary of the Action\n\n## Why it Matters\n\n## Next Steps" >> "$filepath"
  code "$filepath"
}
```
- Creates a log file in `docs/logs/` with a timestamp in the filename
- Opens it in VS Code with a pre-filled template for self-reflection and future tracking

📌 Recommended **once per session** or after every big milestone

---

## 📁 Where to store this file?

✅ Recommended location:  
```
📂 docs/
   └── README-dev-workflow.md
```

Why?
- Keeps documentation centralized
- Allows easy access via GitHub repo browser
- Part of your future “developer onboarding kit”

---

## 🗓️ Last updated: 2025-03-25

