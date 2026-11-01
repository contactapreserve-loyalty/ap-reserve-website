# AP RESERVE — Website

A complete, responsive static website for **AP RESERVE Loyalty (Customer)** and **AP RESERVE Business**. Made with plain HTML, CSS, and a little JavaScript; **no build tools, database, payment plan, or other dependencies** are needed.

## Website pages

| File | Purpose |
|---|---|
| `index.html` | Home / product overview, sections for both apps |
| `legal.html` | A combined legal page with a Privacy / Terms tab switch |
| `privacy.html` | Dedicated complete Privacy Policy URL for App Store Connect |
| `terms.html` | Dedicated complete Terms of Service URL |
| `support.html` | Support center, questions, email support links, account deletion steps |

All links are relative, so the site works both at `username.github.io` and at `username.github.io/repository-name`.

### BEFORE MAKING THE WEBSITE PUBLIC — IMPORTANT

The two legal Markdown documents were embedded **without rewriting their substantive legal terms**. The originals are included in this folder. They currently contain prepublication draft language that needs review:

1. **Legal operator and public contact address:** the policy explicitly states the operator name and public postal address must be completed and verified. Supply these where legally required before publishing.
2. **SDKs, analytics, data recipients, international processing:** verify the actual configuration and amend the policy as applicable.
3. **Account and notification workflows:** confirm they exactly match current production versions of *both* apps (especially customer anonymous login, notification toggles, and account deletion paths).
4. **Legal review:** the supplied policies aren't automatically legally sufficient for every jurisdiction. Have them reviewed if needed.

The website uses the **official AP Reserve logo** supplied by the owner. The whitespace in the original artwork was trimmed for a crisp, correctly sized header, while the shape of the mark is unchanged. The header, footer, and app icon assets use the same logo.

The homepage and customer section use **independently styled CSS phone mockups**. Actual app screens from the supplied images are fitted inside the phone frames. No original promotional rectangle is embedded on the homepage.

### Contact address

The support email used is **contactapreserve@gmail.com**, from the uploaded policies. The website does not pretend to have a backend form: the help links open the visitor's email app with a relevant subject line. This works on GitHub Pages.

## Publish for FREE using GitHub Pages

1. Log in to [github.com](https://github.com) and select **New repository**.
2. Name it e.g. `ap-reserve-website`. Set it to **Public** (GitHub Free requires a public repository for Pages).
3. Upload all the files **inside this folder** into the repository's root: `index.html`, `legal.html`, `privacy.html`, `terms.html`, `support.html`, `assets/`, `.nojekyll`, and so on. **Do not upload only the ZIP**, because Pages needs the actual site files. If using GitHub's web uploader, drag the unzipped files and folder contents into Add file → Upload files.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment → Source**, select **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. After publishing finishes, your site should be reachable at:
   `https://YOUR-GITHUB-USERNAME.github.io/ap-reserve-website/`

If you instead create a repository named exactly `YOUR-GITHUB-USERNAME.github.io`, your site will be available at `https://YOUR-GITHUB-USERNAME.github.io/`.

### App Store Connect URLs

After publishing, copy the actual website address and add:

- **Privacy Policy URL:** `https://YOUR-GITHUB-USERNAME.github.io/ap-reserve-website/privacy.html`
- **Terms of Service URL:** `https://YOUR-GITHUB-USERNAME.github.io/ap-reserve-website/terms.html`
- **Support URL:** `https://YOUR-GITHUB-USERNAME.github.io/ap-reserve-website/support.html`
- **Marketing URL:** `https://YOUR-GITHUB-USERNAME.github.io/ap-reserve-website/`

Do this for both your customer and business app listings as applicable. Don't paste those example URLs until you've replaced the placeholder username/repository and verified the pages online.

## Edit the appearance

- Colors: `assets/styles.css`, starting at `:root` (`--gold`, `--bg`, etc.)
- Support email: find and replace `contactapreserve@gmail.com` in your `.html` files
- Front-page text and phone frames: `index.html` and `assets/styles.css`; app-screen images: `assets/loyalty-app-display.png` and `assets/business-app-display.png`
- Policies: edit the Markdown source files first; also update the corresponding HTML in `legal.html`, `privacy.html`, and `terms.html` (all are self-contained and static)
- Browser/social icon files: `assets/favicon.png`, `assets/social-preview.png`, `assets/apple-touch-icon.png`

The site does not collect names, form submissions, or web analytics; it simply displays information and provides mailto links. GitHub Pages itself may log visitor IP addresses per GitHub's policies.

### Local preview

Open `index.html` in any modern web browser; page navigation, styling, and the legal tabs work without a server.

---

*Prepared October 31, 2026. Based on documents effective October 29, 2026.*
