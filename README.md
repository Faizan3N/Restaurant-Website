# David Chu's China Bistro

A responsive restaurant website for **David Chu's China Bistro** — a Star-K kosher Chinese restaurant in Baltimore. Guests can browse the menu, explore the dining room, read reviews, and request a table reservation.

---

## Live demo

If GitHub Pages is enabled, the site is available at:

`https://<your-username>.github.io/<repo-name>/`

Replace the placeholders with your GitHub username and repository name.

---

## Features

- **Hero landing** with restaurant branding, hours of hospitality, and clear calls to action
- **About section** covering the story, kosher certification, and service options
- **Signature dishes** highlighted with photography and pricing
- **Filterable menu** — Starters, Soups, Mains, Seafood, Desserts
- **Photo gallery** of the dining room and kitchen
- **Guest reviews** from Baltimore-area diners
- **Reservation form** with date, time, party size, and special-request notes
- **Contact & map** with address, phone, and Google Maps embed
- **Mobile navigation** with a collapsible menu and sticky header

---

## Tech stack

| Layer | Tools |
| --- | --- |
| Markup | HTML5 |
| Styling | Custom CSS3 (CSS variables, Grid, Flexbox) |
| Fonts | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) & [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) |
| Behavior | Vanilla JavaScript |
| Hosting | GitHub Pages |

No frameworks or build step required.

---

## Getting started

### Preview locally

Open `index.html` in a browser, or serve the folder with a local static server:

```bash
# Python 3
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500).

### Project structure

```
.
├── index.html                 # Main page
├── css/
│   └── styles.css             # Site styles
├── js/
│   └── script.js              # Nav, menu filter, reservation form
└── .github/workflows/
    └── static.yml             # GitHub Pages deploy
```

---

## How it works

- **Sticky header** gains a scrolled state after a short scroll.
- **Menu tabs** filter dishes by category without a page reload.
- **Reservation form** validates required fields, blocks past dates, and shows a confirmation message on submit (front-end only — no backend).
- **Mobile menu** opens and closes from the hamburger button and closes when a link is chosen.

---

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set the source to **GitHub Actions** (this repo already includes `.github/workflows/static.yml`).
4. After the workflow runs, your site will be live at the Pages URL.

---

## Customization

| What to change | Where |
| --- | --- |
| Restaurant name & copy | `index.html` |
| Colors, spacing, typography | `css/styles.css` (`:root` variables) |
| Menu items & prices | Menu section in `index.html` |
| Form behavior | `js/script.js` |
| Phone, address, hours | Contact and footer in `index.html` |

---

## License

This project is provided for personal and educational use.
