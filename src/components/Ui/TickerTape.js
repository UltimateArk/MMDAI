import React, { memo } from 'react';

const TickerTape = () => {
  return (
    <div
      className="tradingview-widget-container"
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '2px solid var(--accent-teal)',
        margin: '40px 0 20px 0',
      }}
    >
      <iframe
        title="TradingView Ticker Tape"
        src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22USD%2FINR%22%2C%22proName%22%3A%22FX_IDC%3AUSDINR%22%7D%2C%7B%22description%22%3A%22SENSEX%22%2C%22proName%22%3A%22BSE%3ASENSEX%22%7D%2C%7B%22description%22%3A%22Gold%22%2C%22proName%22%3A%22TVC%3AGOLD%22%7D%2C%7B%22description%22%3A%22Crude%20Oil%22%2C%22proName%22%3A%22TVC%3AUSOIL%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22localhost%3A3000%2F%22%7D"
        style={{
          width: '100%',
          height: '70px',
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default memo(TickerTape);