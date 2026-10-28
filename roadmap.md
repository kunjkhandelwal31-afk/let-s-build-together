# Rebranding + SEO Migration Roadmap

New brand: **Maa Baglamukhi Nalkheda Havan** · New domain: https://maabaglamukhinalkhedahavan.com/

## Tasks
- [x] Survey codebase for old brand/domain/pandit name/phone/Instagram/prices
- [x] Create asset pointers for 3 Pandit Ji photos
- [ ] Bulk replace: brand, domain, pandit name (राम → राहुल शर्मा), phone 7024609027, Instagram baglamukhi_sadhak123
- [ ] Homepage title/description per brief (index.html + Index.tsx Helmet)
- [ ] Remove all Havan/Anushthan prices (havans.ts dakshina, HavanCard, HavanDetailPage)
- [ ] About section slideshow ("पंडित जी के बारे में जानें") with 3 photos, swipe + dots + arrows
- [ ] Sitemap.xml / robots.txt on new domain
- [ ] Verify: zero old refs, build OK, Playwright check of slideshow/links/no prices
- [ ] Report manual steps: domain not registered (purchase needs workspace admin), GSC re-verification, old-domain 301 redirects

## Notes
- Domain maabaglamukhinalkhedahavan.com is NOT registered; user's workspace cannot purchase. Code uses new domain regardless.
- Keep blog slugs unchanged (preserve old URLs for redirect mapping).
- No displayed prices anywhere; neutral CTA "संपर्क करें" instead.
