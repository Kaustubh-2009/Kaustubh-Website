# Personal Portfolio

A responsive personal portfolio site — plain HTML/CSS/JS, no build step, no dependencies to install.

## 1. Personalize it

Open `script.js` and edit the `CONFIG` object at the top. That one object controls your name,
roles, about text, skills, projects, education, and contact links — the rest of the file just
renders it, so you don't need to touch the HTML.

Optional: replace `resume.pdf` with your own resume file if you add the Resume link.

## 2. Preview it locally

Just open `index.html` in a browser — no server needed.

## 3. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Turn on GitHub Pages (free hosting, viewable from any device)

1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. After a minute, your site is live at:
   `https://<your-username>.github.io/<repo-name>/`

That URL works on phones, tablets, and laptops — nothing to install on the viewing end.

## Updating later

Edit `CONFIG` in `script.js`, commit, and push. GitHub Pages redeploys automatically
within a minute or two.
