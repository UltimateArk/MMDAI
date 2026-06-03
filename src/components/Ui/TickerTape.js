import React, { memo, useEffect, useMemo, useState } from 'react';

/**
 * TickerTape — MMD Analytics
 * Themed to match the site's dark gold/teal palette.
 *
 * Key changes vs. original:
 *  - colorTheme → "dark"  (was "light" — caused the white bar)
 *  - isTransparent → true  so the iframe bg is see-through
 *  - Container styled with site tokens: dark-1 bg, gold top-border,
 *    subtle grid overlay, gold left-label badge, teal bottom line
 */

const buildTickerSrc = (height) =>
  'https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#' +
  encodeURIComponent(
    JSON.stringify({
      symbols: [
        { description: 'USD/INR',   proName: 'FX_IDC:USDINR'  },
        { description: 'SENSEX',    proName: 'BSE:SENSEX'      },
        { description: 'Gold',      proName: 'TVC:GOLD'        },
        { description: 'Crude Oil', proName: 'TVC:USOIL'       },
      ],
      showSymbolLogo:  true,
      isTransparent:   true,   // transparent bg → dark container shows through
      displayMode:     'adaptive',
      colorTheme:      'dark',  // ← was "light"
      width:           '100%',
      height,
      utm_source:      'mmdanalytics',
      utm_medium:      'widget',
      utm_campaign:    'ticker-tape',
    })
  );

const getTickerHeight = () =>
  typeof window !== 'undefined' && window.innerWidth <= 768 ? 64 : 46;

/* ─── inline styles (no extra CSS file needed) ─────────────── */
const styles = {
  wrapper: {
    position:    'relative',
    width:       '100%',
    overflow:    'hidden',
    background:  '#0C1419',                               // --dark-1
    borderTop:   '1px solid rgba(201,168,76,0.35)',       // gold line
    borderBottom:'1px solid rgba(0,201,167,0.18)',         // teal line
  },

  /* subtle grid overlay — same as hero */
  grid: {
    position:        'absolute',
    inset:           0,
    backgroundImage: [
      'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
    ].join(', '),
    backgroundSize:  '48px 48px',
    pointerEvents:   'none',
  },

  /* "LIVE MARKETS" badge on the left */
  badge: {
    position:       'absolute',
    left:            0,
    top:             0,
    bottom:          0,
    zIndex:          2,
    display:         'flex',
    alignItems:      'center',
    padding:         '0 14px',
    background:      'linear-gradient(90deg, #0C1419 60%, transparent)',
    gap:             6,
  },
  badgeDot: {
    width:           7,
    height:          7,
    borderRadius:    '50%',
    background:      '#00C9A7',
    boxShadow:       '0 0 6px rgba(0,201,167,0.7)',
    animation:       'ttPulse 1.8s ease-in-out infinite',
    flexShrink:      0,
  },
  badgeText: {
    fontFamily:     "'DM Sans', system-ui, sans-serif",
    fontSize:        9,
    fontWeight:      600,
    letterSpacing:   1.6,
    textTransform:   'uppercase',
    color:           'rgba(201,168,76,0.85)',
    whiteSpace:      'nowrap',
  },
};

/* pulse keyframes injected once */
const KEYFRAMES = `
  @keyframes ttPulse {
    0%,100% { opacity: 1; transform: scale(1);    }
    50%      { opacity:.5; transform: scale(0.75); }
  }
`;

const TickerTape = () => {
  const [tickerHeight, setTickerHeight] = useState(getTickerHeight);

  useEffect(() => {
    const handleResize = () => setTickerHeight(getTickerHeight());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tickerSrc = useMemo(() => buildTickerSrc(tickerHeight), [tickerHeight]);

  const iframeStyle = {
    display:      'block',
    width:        '100%',
    height:       tickerHeight,
    border:       'none',
    overflow:     'hidden',
    paddingLeft:  96,
    boxSizing:    'border-box',
  };

  return (
    <>
      <style>{KEYFRAMES}</style>
    <div style={styles.wrapper} aria-label="Live market ticker">
      <div style={styles.grid} aria-hidden="true" />

      {/* Live badge */}
      <div style={styles.badge} aria-hidden="true">
        <span style={styles.badgeDot} />
        <span style={styles.badgeText}>Live Markets</span>
      </div>

      <iframe
        title="TradingView Ticker Tape"
        src={tickerSrc}
        style={iframeStyle}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  </>
  );
};

export default memo(TickerTape);