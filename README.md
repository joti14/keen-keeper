# 🌿 Keen Keeper

> Stay close to the people who matter most.

Keen Keeper is a personal relationship management app that helps you track and maintain meaningful friendships. Never let important connections fade — log interactions, monitor contact frequency, and get reminded when it's time to reach out.

---

## 🚀 Live Demo

[keen-keeper-orcin.vercel.app](https://keen-keeper-orcin.vercel.app)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** | React framework for building the UI |
| **App Router** (Next.js) | File-based page navigation and routing |
| **Tailwind CSS** | Styling and responsive design |
| **DaisyUI** | Pre-built UI component library |
| **Recharts** | Interactive pie chart for analytics |
| **React Toastify** | Toast notifications for user feedback |
| **React Icons** | Icon library used throughout the UI |

---

## ✨ Key Features

### 1. 👫 Friend Dashboard with Status Tracking
View all your friends at a glance in a responsive card grid. Each card displays the friend's photo, name, tags, days since last contact, and a color-coded status badge — **On-Track**, **Almost Due**, or **Overdue** — so you always know who needs attention.

### 2. ⚡ Quick Check-In with Live Timeline
From any friend's detail page, log a **Call**, **Text**, or **Video** interaction in one click. Each check-in is instantly added to the Timeline page with a timestamp and icon, giving you a full history of your interactions — filterable by interaction type.

### 3. 📊 Friendship Analytics
A dedicated Stats page visualises your interaction habits with a **Recharts pie chart**, breaking down your check-ins by type (Call / Text / Video) so you can see how you're staying in touch over time.

---

## 📸 Pages Overview

- **Home** — Banner, summary stats, and full friends grid
- **Friend Detail** — Profile info, contact stats, relationship goal, and quick check-in buttons
- **Timeline** — Full interaction history with filter by type
- **Stats** — Pie chart analytics of all interactions
- **404** — Custom not-found page for unknown routes

---

## 🏃 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/keen-keeper.git

# Install dependencies
cd keen-keeper
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
keen-keeper/
├── public/ 
|    ├── data.json                  # Static assets & data
├── src/
│   ├── app/
│   │   ├── friends/[id]/
│   │   │   └── page.jsx            # Friend detail page
│   │   ├── lib/providers/
│   │   │   └── index.js            # Context providers wrapper
│   │   ├── stats/
│   │   │   └── page.jsx            # Analytics page
│   │   ├── timeline/
│   │   │   └── page.jsx            # Timeline page
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js               # Root layout
│   │   ├── loading.jsx             # Loading animation
│   │   ├── not-found.jsx           # 404 page
│   │   └── page.jsx                # Home page
│   ├── assets/                     # Images and static files
│   ├── components/
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Friends/
│   │   │   ├── Friends.jsx
│   │   │   ├── FriendsCard.jsx
│   │   │   └── QuickCheckIn.jsx
│   │   ├── HomePage/
│   │   │   ├── Banner.jsx
│   │   │   └── Stats.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── NavLink.jsx
│   │   └── TimelineData/
│   │       └── TimelineData.jsx
│   └── context/
│       └── quickCheckInContext.js
├── .gitignore
├── eslint.config.mjs
└── jsconfig.json
```

---

## 👨‍💻 Author

Built with 💚 as part of a frontend development assignment.
