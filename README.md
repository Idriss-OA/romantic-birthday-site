# Romantic Birthday Website

This is a personalized birthday website built to be opened from a QR code.

## Files
- `index.html` — main landing page
- `styles.css` — styling and responsive layout
- `script.js` — animations, interactions, and counter logic

## Add your photos
You can use either local images or direct image URLs.

Local images:
- Copy your photos to `assets/photos/` and rename them as:
  - `photo1.jpg`
  - `photo2.jpg`
  - `photo3.jpg`
  - `photo4.jpg`

Remote URLs:
- Open `script.js` and replace the values in the `photoUrls` array with your direct photo links.

If you want to use the exact photos you mentioned, place them in `assets/photos` or use their URL links in `script.js`.

## Add music
Add a romantic music file at:
- `assets/music/romantic.mp3`

The play button will control the music.

## How to use
1. Open `index.html` in a browser.
2. Scan the QR code pointing to this page.
3. Enjoy the animated birthday celebration.

## Host locally
If you want to run the page from your computer, use one of these options:

### Option 1: Node.js
1. Install Node.js if needed.
2. Open a terminal in `c:\Users\Lenovo\Desktop\naifar_ines`.
3. Run `node server.js`.
4. Open `http://localhost:8080` in a browser.

### Option 2: Python
1. Open a terminal in `c:\Users\Lenovo\Desktop\naifar_ines`.
2. Run either:
   - `python -m http.server 8080` or
   - `py -m http.server 8080`
3. Open `http://localhost:8080`.

> To share the page via QR code, the link must be accessible from the recipient's device. For local network sharing, use `http://<your-computer-ip>:8080` and make sure your phone is on the same Wi-Fi network.

## Deploy online
To make it available anywhere, deploy the static site to a hosting service:
- GitHub Pages: push the folder to a GitHub repo and enable Pages for the repository root.
- Netlify / Vercel / Cloudflare Pages: drag-and-drop the folder or connect your GitHub repo.

## Notes
- The page is designed to be mobile-friendly and elegant.
- You can replace the visible name in `script.js` in the `revealName()` function.
- The love counter start date is set in `script.js` at `relationshipStart`.
- Place your photos in `assets/photos/` and your music file in `assets/music/romantic.mp3`.
