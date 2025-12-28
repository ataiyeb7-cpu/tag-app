# Tag-Category-Selector
A privacy-first, offline-capable tag management web app with categories, groups, powerful filtering, undo support, and optional AI-assisted organization.

Tag Category Selector is a powerful, offline-first web app for organising large tag libraries into categories and groups.  
It is designed for workflows that require **precision, flexibility, and safety**, with full undo support and no forced cloud or AI usage.

The app runs entirely in the browser, works as a **true PWA**, and stores all data locally unless you explicitly export or enable optional AI features.

---

## ✨ Core Features

### 🗂 Category Management
- Create unlimited categories
- Rename categories at any time
- Change category colours after creation
- Pin categories to keep them at the top
- Lock categories to prevent edits
- Collapse/expand individual categories
- Collapse / expand **all** categories at once
- Collapsed state is preserved even after renaming
- Clear confirmation before deleting categories
- **Undo category deletion**

---

### 🏷 Tag Management
- Import tags from `.txt` files into any category
- Add new tags directly in the app
- Drag & drop to reorder tags
- Smart tag suggestions to avoid duplicates
- Select/deselect individual tags
- Per-category selected-tag output
- Global selected-tag output (comma-separated, copyable)
- Deselect all tags globally
- Deselect all tags within a category

---

### 🧩 Category Grouping
- Create named groups of categories
- Rename groups
- Change group colours
- Add or remove categories from groups
- Collapse/expand groups
- Select or deselect all tags within a group
- Export entire groups as `.txt` or `.json`
- Delete groups with confirmation:
  - Delete group only (keep categories)
  - Delete group **and** all contained categories (double confirmation)
- **Undo group deletion**

---

### 🧠 AI-Assisted Grouping (Optional & Privacy-First)
- Offline AI grouping demo (on-device, no network calls)
- Hybrid design:
  - Offline grouping works by default
  - Online AI requires explicit opt-in
- Online AI can be completely disabled via a privacy toggle
- AI suggestions are **non-destructive**
- All AI actions are user-approved
- Designed for future semantic grouping using embeddings

---

### 🔍 Search & Filtering
- Live text search across all tags
- Regex filtering for advanced matching
- Built-in **regex cheat sheet** inside the app
- Search and regex filters work together

---

### 🧹 Deletion & Safety
- Multi-delete mode with clear visual banner
- Explicit “Delete” and “Cancel” actions
- Marked-tag counter
- **Undo multi-delete** restores tags to original positions
- Undo stack for destructive actions

---

### 📊 Analytics & History
- Tag usage history (timestamped)
- Per-category tag counts
- Selected-tag counters per category
- Foundation for future analytics and recommendations

---

### 📂 Import / Export
- Visually distinct importers for:
  - `.txt` (plain tag lists)
  - `.json` (full app backup)
- Export:
  - Entire app as `.json`
  - Entire app as `.txt`
  - Individual categories as `.txt` or `.json`
  - Entire groups as `.txt` or `.json`
- JSON backups preserve:
  - Categories
  - Groups
  - Colors
  - Collapse state
  - Usage history
  - Settings

---

### 🌙 UI & UX
- Dark mode
- Mobile-friendly layout
- Designed for long sessions and large datasets
- Clear visual feedback for modes and states

---

### 📱 Progressive Web App (PWA)
- Installable on mobile and desktop
- Offline-first by default
- Works without internet
- Data persists across refreshes and restarts

---

## 🔐 Privacy Philosophy

- No data leaves your device by default
- Offline-only operation is fully supported
- AI features are optional and opt-in
- No automatic cloud sync
- Export and backups are always manual and user-controlled

---

## 🚧 Status

This project is actively evolving, but **core functionality is stable**.  
New features are added carefully to avoid regressions and preserve existing workflows.

---

## 🧠 Future Directions (Optional)
- Visual group editor
- AI semantic grouping with undo
- Usage analytics dashboards
- Saved workspace layouts
- Advanced export selectors

---

## 📄 License
None
