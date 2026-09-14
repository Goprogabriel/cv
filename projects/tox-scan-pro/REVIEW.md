# Publication review

Prepared 2026-09-14. Do not publish the privacy draft as an effective policy until the owner resolves its confirmation list. No deployment was performed.

## Evidence in the Tox Scan Pro repository

- `app.config.ts`: configured icon and legal URL validation. Website icon copied from `assets/d68dd3b8-0174-4284-97a8-8ccf7bc9f763.png`.
- `shared/models.ts`: personal and family profile fields.
- `src/components/analytics-controller.tsx`: unconditionally calls `configureAnalytics(true)`; older consent documentation is historical.
- `src/services/analytics-driver.native.ts` and `shared/analytics.ts`: Firebase collection, advertising consent flags, event allowlist.
- `src/services/firebase-service.ts`: secure recovery storage; deletion followed by recovery/initialization of an empty account.
- `functions/src/services/analysis.ts`: image/profile input to OpenAI, metadata stripping, `store: false`, optional product search.
- `functions/src/services/retention.ts`, `accounts.ts`, and `functions/src/index.ts`: 30-day inactivity threshold, hourly cleanup, deletion and retained ledgers.
- `functions/src/services/referrals.ts`, `referral-device.ts`, and `docs/referrals.md`: persistent referral/device antifraud records.
- `docs/architecture.md` and `docs/support/index.html`: supporting explanations and support instructions.

These are source observations, not verification of deployed services or provider settings. The owner's legal identity, applicable legal grounds/rights, child-profile handling, analytics consent, remaining-record retention, provider controls and transfers, and effective date remain unresolved.

## Links and release follow-up

- App Store ID 6809629178: the supplied URL returned HTTP 404 on 2026-09-14; download button intentionally omitted.
- Apple Standard EULA page verified. No prices hardcoded.
- After owner review and deployment, update the app's `EXPO_PUBLIC_PRIVACY_URL` (including release/EAS configuration) to `https://goprogabriel.github.io/cv/projects/tox-scan-pro/privacy/`.
- Manually change the Privacy Policy and Support URLs in App Store Connect. Support: `https://goprogabriel.github.io/cv/projects/tox-scan-pro/support/`.
- Verify the live pages before submitting. Confirm mailbox delivery and reconcile App Privacy labels with actual release behavior.
