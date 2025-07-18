# 🚀 DSSA (Data Science Student Association)

A futuristic, neon-themed, responsive landing page and multi-section website for the **Data Science Student Association (DSSA)** — built using **React (Vite)**, **ShadCN/UI**, **Tailwind CSS**, and **JSON-based data loading**.

## 🧠 Project Overview

This site serves as a central hub for DSSA activities and events. It includes a gamified and visually compelling UI inspired by **Star Wars, cyberpunk tech, and neon design**, presenting:

- About the DSSA
- Weekly Departmental News
- Flagship Event: Tech Carnival
- Committee Members
- Events & Workshops Pages
- Feedback Form
- All data-driven from editable JSON files

---

## 🔧 Tech Stack

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🧩 ShadCN/UI Components
- 🧾 JSON (for all dynamic content)
- 📤 EmailJS (for feedback form integration)

---

## 📂 Project Structure

dssa-landing/
├── src/
│ ├── assets/ # Images, Logos
│ ├── components/ # Navbar, Footer, Hero, Cards, Sliders
│ ├── pages/ # Home, About, Events, Workshops, etc.
│ ├── data/ # JSON data files
│ ├── App.jsx
│ └── main.jsx
├── public/
├── package.json
└── tailwind.config.js

markdown
Copy
Edit

---

## 📄 Available Pages & Features

### 1. 🌌 **Home Page**
- Neon-animated hero section
- Star Wars-inspired design
- Navigation to all sections

### 2. 🏢 **About DSSA**
- Group photo of members
- Departmental introduction and mission
- Glowing cards and effects

### 3. 📰 **Weekly News Section**
- Carousel of 10 news items (from `news.json`)
- Click-to-expand into full article view

### 4. 🎉 **Tech Carnival Page**
- All info about flagship event
- Description, visuals, past highlights
- Neon gamified UI with transitions

### 5. 📆 **Events Page**
- Cards from `events.json`
- Each includes poster, rounds, rules, time, registration form, coordinator contacts
- Active/Inactive status
- “Coming Soon” fallback if no events

### 6. 🧪 **Workshops Page**
- Workshop cards from `workshops.json`
- Similar layout and dynamic behavior to Events

### 7. 👥 **Committee Page**
- Members loaded from `committee.json`
- Profile card includes image, name, post, social links

### 8. 🗣️ **Feedback Page**
- Form (name, email, message)
- Integrated via EmailJS or serverless function
- Sends response to DSSA email

### 9. 🔗 **Footer**
- Social links
- Contact information
- Copyright

---