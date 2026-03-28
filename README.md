# rmajewski.entropy.quest

Personal site scaffold for Rich Majewski, built for Zensical and GitHub Pages.

## What is included

- `zensical.toml` using Zensical's TOML config format
- content pages for Home, Projects, Writing, and About
- custom CSS and JavaScript
- a custom footer partial with GitHub, LinkedIn, Request Resume, and RSS links
- GitHub Actions workflow for Pages deployment
- `CNAME` for `rmajewski.entropy.quest`
- RSS feed at `docs/feed.xml`

## Local preview

```bash
pip install zensical==0.0.29
zensical serve
```

## GitHub Pages

The workflow uses a pinned Zensical version and the modern Pages artifact deployment flow.
