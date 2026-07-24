# Developer Graduation Invitation

A highly responsive, terminal-inspired graduation invitation webpage designed for software developers and tech enthusiasts. Built using Next.js 15 (App Router), Tailwind CSS v4, and optimized for seamless deployment to Vercel.

Features dynamic, personalized access URLs for individual guests with an automated fallback to strict 404 pages for unauthorized access routes.

---

## 🚀 Features

- **Personalized Access Links:** Generates customized paths for specific friends (e.g., `/alice`, `/bob`) using Next.js `generateStaticParams`.
- **Strict Route Enforcement:** Configured with `dynamicParams = false` to instantly throw a native 404 error if an unregistered endpoint is entered.
- **Secure Configuration:** Decoupled architecture supporting JSON-stringified environment variables (`GUEST_LIST_JSON`, `EVENT_CONFIG_JSON`) on production, with structured mock data fallbacks for local debugging.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Static Site Generation)
- **Styling:** Tailwind CSS (v4 Architecture)
- **Language:** TypeScript
- **Deployment & Hosting:** Vercel

---

## 📦 Project Structure

```text
├── app/
│   ├── [guest]/
│   │   └── page.tsx      # Dynamic rendering engine & registry validation
│   ├── favicon.ico       # Optimized browser tab asset
│   ├── globals.css       # Tailwind directives & CSS root variables
│   └── layout.tsx        # Base shell, font configuration & SEO OpenGraph metadata
├── data/
│   ├── eventConfig.ts    # Fallback structure for venue details
│   └── guestList.ts      # Fallback dictionary for local guest profiles
├── public/               # Optimized static media directory
└── package.json          # Dependency tree & environment scripts

```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.17.0 or higher) installed on your system.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/toankngdev/graduation-invite.git
cd graduation-invite
```

2. Install the production and development dependencies:

```bash
npm install
```

3. Fire up the local development environment:

```bash
npm run dev
```

Open [http://localhost:3000/alice](http://localhost:3000/alice) in your browser to inspect a sample personalized route.

---

## ⚙️ Configuration & Environment Variables

To manage your production guest directory securely without exposing sensitive access lists in source code control, populate these environment variables in your Vercel Project Dashboard:

### `EVENT_CONFIG_JSON`

Contains general ceremony details.

```json
{
  "graduateName": "Peter Parker",
  "major": "Software Development",
  "university": "MIT",
  "date": "Saturday, June 6, 2026",
  "time": "10:00 AM",
  "venue": "The Grand Hall & Gardens",
  "addressLine1": "20 Ingram Street",
  "addressLine2": "Forest Hills, Queens, New York City",
  "detailsUrl": "https://maps.app.goo.gl/DfJz56fhC5KuThzR6"
}
```

### `GUEST_LIST_JSON`

Maps dynamic lowercased routes to individual friend payloads.

```json
{
  "alice": {
    "name": "Alice",
    "personalNote": "Thanks for being an incredible debugging partner!"
  },
  "bob": {
    "name": "Bob",
    "personalNote": "Deployment successful. Time to celebrate!"
  }
}
```

---

## 🚢 Deployment

This system is engineered to leverage Vercel's native Next.js build pipeline for static optimization.

1. Push your latest code changes to your private GitHub repository.
2. Link the repository to your **Vercel Dashboard**.
3. Supply your `EVENT_CONFIG_JSON` and `GUEST_LIST_JSON` environment configurations.
4. Trigger the deployment sequence. Next.js will build your production pages statically, ensuring instantaneous loads worldwide.

---

## 📝 Commit Standard

This workspace enforces the **Conventional Commits 1.0.0** specification. Please categorize your atomic updates using the following scopes:

- `feat:` Injects a new application capability or technical enhancement.
- `fix:` Patches a technical flaw, regression, or browser bug.
- `style:` Typography scaling adjustments, CSS structural styling, layout spacing fixes.
- `refactor:` Code changes that neither fix a bug nor add a feature (e.g., rewriting data layers).
- `chore:` General repository maintenance, cleanup scripts, configuration tweaking.
- `docs:` Update documentations
