# Rebranding + SEO Migration Roadmap

New brand: **Maa Baglamukhi Nalkheda Havan** · New domain: https://maabaglamukhinalkhedahavan.com/

## Done
- [x] Survey codebase for old brand/domain/pandit name/phone/Instagram/prices
- [x] Asset pointers created for 3 Pandit Ji photos (pandit-havan-aarti / pandit-sankalp / pandit-dhyan)
- [x] Bulk replaced brand, domain, pandit name, phone, Instagram across src + index.html + sitemap + robots
- [x] Homepage title "Maa Baglamukhi Nalkheda Havan | Pandit Rahul Sharma" + Hindi meta description (index.html + Index.tsx)
- [x] All prices removed (havans.ts, HavanCard, HavanDetailPage) — neutral "संपर्क करें विवरण हेतु" CTA
- [x] About slideshow with 3 photos: arrows, dots, swipe, auto-advance, responsive, Hindi alt text
- [x] Sitemap.xml / robots.txt on new domain; JSON-LD (WebSite/Organization/founder/contact) updated
- [x] Verified: zero old refs, build OK, Playwright checks (slideshow works, links correct, no ₹ anywhere)

## Open (needs user/admin action — blockers outside the code)
- [ ] Domain maabaglamukhinalkhedahavan.com is NOT registered and this workspace account cannot buy domains → a workspace admin must buy it (Project Settings → Domains → Buy new domain), or the user connects a domain they already own; then set it as primary so the old domain 301-redirects.
- [ ] After the new domain is live: re-publish, verify in Google Search Console, submit the new sitemap, and run Google's Change of Address from the old property.
