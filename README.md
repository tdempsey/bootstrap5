# LuckyLotto Dashboard (Bootstrap 5)

A Lotto-branded analytics dashboard built on the Bootstrap 5 Dashboard example. It ships ready-to-use HTML, CSS, and JavaScript so you can explore LuckyLotto KPIs, manage draws, and review ticket performance without additional build tooling.

## Project layout
- `dashboard/index.html` – full dashboard markup, navigation, KPI cards, draw history, alerts, and Chart.js canvas.
- `dashboard/dashboard.css` – Lotto theming for navbar/sidebar, gradients, cards, tables, and utility helpers.
- `dashboard/dashboard.js` – Chart.js configuration and sample datasets for ticket sales vs. targets.
- `assets/dist/` – compiled Bootstrap CSS/JS assets consumed by the dashboard.

## Getting started
1. **Serve the files locally** (pick one):
   - Python: `python3 -m http.server 8000`
   - Node (if you prefer): `npx http-server . -p 8000`
2. Visit `http://localhost:8000/dashboard/` in your browser.

> Tip: The dashboard uses relative paths to `assets/dist/`, so you should run the server from the repository root.

## Customizing data & UI
- **Update KPIs and lists** directly in `dashboard/index.html` to reflect real draw metrics, recent winners, or ticket actions.
- **Change chart data** inside `dashboard/dashboard.js` (`labels`, `data`, and `target` arrays) to match your reporting periods and goals.
- **Adjust branding** by editing `dashboard/dashboard.css` colors, gradients, and spacing utilities to match your lotto identity.

## Browser support
This dashboard uses Bootstrap 5.3 and Chart.js 4.x. Modern evergreen browsers (Chrome, Firefox, Safari, Edge) are supported; IE11 is not.
