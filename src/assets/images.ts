// Clean SVG illustrations for resilient offline/fallback rendering

export const svgFallbacks = {
  landingBg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23111827"/><stop offset="50%" stop-color="%231e293b"/><stop offset="100%" stop-color="%230f172a"/></linearGradient><linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="%233b82f6" stop-opacity="0.3"/><stop offset="100%" stop-color="%231e293b" stop-opacity="0"/></linearGradient></defs><rect width="1600" height="900" fill="url(%23bg)"/><ellipse cx="800" cy="200" rx="600" ry="250" fill="url(%23glow)"/><path d="M100 650 Q800 500 1500 650 L1600 900 L0 900 Z" fill="%23090d16" opacity="0.85"/><path d="M200 680 Q800 550 1400 680 L1500 900 L100 900 Z" fill="%2305080f"/><g fill="%231e293b" opacity="0.6"><rect x="300" y="580" width="100" height="60" rx="8"/><rect x="440" y="580" width="100" height="60" rx="8"/><rect x="580" y="580" width="100" height="60" rx="8"/><rect x="720" y="580" width="100" height="60" rx="8"/><rect x="860" y="580" width="100" height="60" rx="8"/><rect x="1000" y="580" width="100" height="60" rx="8"/><rect x="1140" y="580" width="100" height="60" rx="8"/></g></svg>`,

  conferenceRoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="cr" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23f1f5f9"/><stop offset="100%" stop-color="%23cbd5e1"/></linearGradient></defs><rect width="300" height="200" fill="url(%23cr)"/><rect x="20" y="20" width="120" height="90" fill="%23e2e8f0" stroke="%2394a3b8" stroke-width="3" rx="4"/><line x1="20" y1="65" x2="140" y2="65" stroke="%2394a3b8" stroke-width="2"/><line x1="80" y1="20" x2="80" y2="110" stroke="%2394a3b8" stroke-width="2"/><ellipse cx="150" cy="140" rx="100" ry="30" fill="%23475569"/><ellipse cx="150" cy="138" rx="90" ry="24" fill="%2364748b"/><circle cx="150" cy="95" r="14" fill="%23334155"/><circle cx="90" cy="115" r="14" fill="%23334155"/><circle cx="210" cy="115" r="14" fill="%23334155"/><rect x="140" y="125" width="20" height="14" rx="2" fill="%230f172a"/><text x="150" y="185" font-family="sans-serif" font-size="11" fill="%23475569" text-anchor="middle" font-weight="bold">Conference Room</text></svg>`,

  auditoriumHall: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="ah" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%231e1b4b"/><stop offset="100%" stop-color="%2331101e"/></linearGradient></defs><rect width="300" height="200" fill="url(%23ah)"/><rect x="70" y="25" width="160" height="60" rx="4" fill="%23f8fafc" stroke="%23e2e8f0" stroke-width="2"/><polygon points="85,30 215,30 250,95 50,95" fill="%23ef4444" opacity="0.3"/><g fill="%23b91c1c"><path d="M40 110 Q150 90 260 110 L260 120 Q150 100 40 120 Z"/><path d="M30 135 Q150 115 270 135 L270 145 Q150 125 30 145 Z"/><path d="M20 160 Q150 140 280 160 L280 170 Q150 150 20 170 Z"/></g><text x="150" y="190" font-family="sans-serif" font-size="11" fill="%23fca5a5" text-anchor="middle" font-weight="bold">Auditorium Hall</text></svg>`,

  presentationRoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="pr" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23f8fafc"/><stop offset="100%" stop-color="%23e2e8f0"/></linearGradient></defs><rect width="300" height="200" fill="url(%23pr)"/><rect x="80" y="20" width="140" height="70" rx="3" fill="%23ffffff" stroke="%230284c7" stroke-width="3"/><rect x="135" y="90" width="30" height="30" fill="%2364748b" rx="2"/><rect x="50" y="130" width="200" height="15" rx="3" fill="%2394a3b8"/><rect x="30" y="160" width="240" height="15" rx="3" fill="%2364748b"/><text x="150" y="192" font-family="sans-serif" font-size="11" fill="%23334155" text-anchor="middle" font-weight="bold">Presentation Room</text></svg>`,

  largeMeetingRoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="lm" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23fef3c7"/><stop offset="100%" stop-color="%23fde68a"/></linearGradient></defs><rect width="300" height="200" fill="url(%23lm)"/><ellipse cx="150" cy="130" rx="90" ry="25" fill="%2392400e"/><ellipse cx="150" cy="128" rx="82" ry="20" fill="%23b45309"/><circle cx="90" cy="100" r="16" fill="%2378350f"/><circle cx="150" cy="90" r="16" fill="%2378350f"/><circle cx="210" cy="100" r="16" fill="%2378350f"/><text x="150" y="185" font-family="sans-serif" font-size="11" fill="%2378350f" text-anchor="middle" font-weight="bold">Large Meeting Room</text></svg>`,

  smallMeetingRoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="sm" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23ecfeff"/><stop offset="100%" stop-color="%23cffafe"/></linearGradient></defs><rect width="300" height="200" fill="url(%23sm)"/><ellipse cx="150" cy="125" rx="65" ry="22" fill="%230e7490"/><circle cx="110" cy="100" r="15" fill="%23155e75"/><circle cx="190" cy="100" r="15" fill="%23155e75"/><rect x="140" y="112" width="20" height="14" rx="2" fill="%23334155"/><text x="150" y="180" font-family="sans-serif" font-size="11" fill="%23164e63" text-anchor="middle" font-weight="bold">Small Meeting Room</text></svg>`,

  projector: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f1f5f9"/><rect x="50" y="70" width="200" height="60" rx="8" fill="%231e293b"/><circle cx="95" cy="100" r="22" fill="%2338bdf8" stroke="%230ea5e9" stroke-width="4"/><circle cx="95" cy="100" r="12" fill="%230284c7"/><rect x="150" y="80" width="30" height="6" rx="2" fill="%23475569"/><rect x="190" y="80" width="30" height="6" rx="2" fill="%23475569"/><polygon points="95,100 280,40 280,160" fill="%2338bdf8" opacity="0.15"/><text x="150" y="170" font-family="sans-serif" font-size="11" fill="%23334155" text-anchor="middle" font-weight="bold">Projectors</text></svg>`,

  speaker: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23fdf4ff"/><rect x="90" y="40" width="50" height="110" rx="12" fill="%23e11d48"/><circle cx="115" cy="70" r="16" fill="%23be123c"/><circle cx="115" cy="115" r="16" fill="%23be123c"/><rect x="160" y="40" width="50" height="110" rx="12" fill="%233b82f6"/><circle cx="185" cy="70" r="16" fill="%231d4ed8"/><circle cx="185" cy="115" r="16" fill="%231d4ed8"/><text x="150" y="180" font-family="sans-serif" font-size="11" fill="%234c1d95" text-anchor="middle" font-weight="bold">Speaker</text></svg>`,

  microphone: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0fdf4"/><line x1="80" y1="160" x2="160" y2="80" stroke="%23334155" stroke-width="8" stroke-linecap="round"/><ellipse cx="170" cy="70" rx="18" ry="24" fill="%230284c7" transform="rotate(45 170 70)"/><line x1="70" y1="170" x2="90" y2="150" stroke="%230f172a" stroke-width="12"/><text x="150" y="180" font-family="sans-serif" font-size="11" fill="%2314532d" text-anchor="middle" font-weight="bold">Microphones</text></svg>`,

  whiteboard: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f8fafc"/><rect x="60" y="30" width="180" height="110" rx="4" fill="%23ffffff" stroke="%2394a3b8" stroke-width="6"/><line x1="80" y1="60" x2="130" y2="60" stroke="%23ef4444" stroke-width="3" stroke-linecap="round"/><line x1="80" y1="80" x2="160" y2="80" stroke="%233b82f6" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="140" x2="250" y2="140" stroke="%2364748b" stroke-width="5"/><line x1="90" y1="145" x2="80" y2="185" stroke="%2364748b" stroke-width="4"/><line x1="210" y1="145" x2="220" y2="185" stroke="%2364748b" stroke-width="4"/><text x="150" y="195" font-family="sans-serif" font-size="11" fill="%23334155" text-anchor="middle" font-weight="bold">Whiteboards</text></svg>`,

  signage: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%2338bdf8"/><stop offset="100%" stop-color="%23bae6fd"/></linearGradient></defs><rect width="300" height="200" fill="url(%23sky)"/><rect x="140" y="60" width="20" height="130" fill="%2378350f" rx="3"/><path d="M70 70 L210 70 L240 88 L210 106 L70 106 Z" fill="%23b45309" stroke="%2378350f" stroke-width="2"/><text x="140" y="93" font-family="sans-serif" font-size="12" fill="%23fef3c7" text-anchor="middle" font-weight="bold">CONFERENCE ➔</text><text x="150" y="185" font-family="sans-serif" font-size="11" fill="%230f172a" text-anchor="middle" font-weight="bold">Signage</text></svg>`,
}

export const venueImages = {
  conferenceRoom: {
    url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.conferenceRoom,
  },
  auditoriumHall: {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.auditoriumHall,
  },
  presentationRoom: {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.presentationRoom,
  },
  largeMeetingRoom: {
    url: 'https://images.unsplash.com/photo-1431540015161-0bf866a2d407?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.largeMeetingRoom,
  },
  smallMeetingRoom: {
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.smallMeetingRoom,
  },
}

export const avImages = {
  projectors: {
    url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.projector,
  },
  speaker: {
    url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.speaker,
  },
  microphones: {
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.microphone,
  },
  whiteboards: {
    url: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.whiteboard,
  },
  signage: {
    url: 'https://images.unsplash.com/photo-1572945550744-57042dbbcc12?auto=format&fit=crop&w=600&q=80',
    fallback: svgFallbacks.signage,
  },
}
