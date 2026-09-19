# zapixel-page

The landing page for **ZaPixel**, served at <https://zapixel.zaplatform.com>.

## How this works

`site/` is a plain static site — HTML, CSS and images, no build step. The Pages
workflow uploads it as it stands.

**Do not hand-edit `site/`.** It is generated from the design, which is the
source of truth:

    design-thoughts/zapixel-landing/        # the design
    design-thoughts/zapixel-landing/tools/build-site.py   # emits site/

Edit the design, re-run that script, and copy the result here.

## Things that must not be lost

| Path | Why |
|---|---|
| `site/CNAME` | Holds the custom domain. Deleting it drops `zapixel.zaplatform.com`. |
| `site/app-ads.txt` | Google ad publisher ID. Removing it breaks ad monetisation. |
| `site/privacy/index.html` | **App Store Connect and Play Console hold this URL.** The policy has always lived at `/privacy`, and that path is preserved deliberately — moving it silently breaks the store listings' privacy link. |

## History

Until now this repo held a Vite + React single-page app. It was replaced with
the static site on the redesign; the old source is still in git history.
