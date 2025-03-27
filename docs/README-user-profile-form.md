# 🧩 User Profile Form Layout System

This module introduces a modular, section-based layout system for the user profile form in the **OpenHeart** project. It aims to:
- Cleanly organize user input fields into logical **sections**
- Visually separate and align input blocks with reusable components
- Lay the groundwork for **drag-and-drop** rearrangement
- Enable easier future styling and user-centric design updates

---

## ✅ Achieved in this Module

### 1. Modular Sectioning via `<SectionWrapper>`
We introduced a `SectionWrapper` component that takes a `title` prop and wraps child fields under it. Each section is rendered with a title, spacing, and optional box-style border.

**Example:**
```tsx
<SectionWrapper title="Basic Identity">
  <FormField label="Birth Year" name="birth_year" placeholder="Enter your birth year" />
  <FormField label="Height" name="height" placeholder="Enter your height (e.g. 180 cm)" />
</SectionWrapper>
```

### 2. Reusable `<FormField>` Component
Every input field is now managed via a standard `FormField` component that takes `label`, `name`, and `placeholder` as props. This reduces boilerplate and will simplify styling logic and validation handling.

---

## 🛠 Files Involved

- `/app/components/FormField.tsx`
- `/app/components/SectionWrapper.tsx`
- `/app/UserProfileForm.tsx`

---

## 🚧 Next Steps

1. **Align Fields in Columns** (consistent width and grid layout)
2. **Enable Drag-and-Drop** within/between sections
3. **Enable Save & Update** logic (via Supabase)
4. **Connect JSON Options** to fields (Algolia or fallback)

---

## 📁 Recommended Location

Place this file in:
```bash
/doc/README-user-profile-form.md
```
or inside `/components/` if scoped only to this module:
```bash
/app/components/README.md
```

