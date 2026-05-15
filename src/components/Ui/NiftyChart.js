import React, { useEffect, useRef, memo } from 'react';
import './NiftyChart.css';

// We track the script loading globally outside the component
// This guarantees it NEVER loads twice and stops the "Script error."
let tvScriptLoadingPromise;

const NiftyChart = () => {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;
        
        // Append to the <head> of the document, safely away from React's rendering
        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    // Cleanup function when you navigate away from the page
    return () => {
      onLoadScriptRef.current = null;
    };
  }, []);

  function createWidget() {
    if (document.getElementById('tradingview_sensex') && 'TradingView' in window) {
      new window.TradingView.widget({
        autosize: true, // Auto-size is safe now because the parent div has a strict height
        symbol: "BSE:SENSEX",
        interval: "D",
        timezone: "Asia/Kolkata",
        theme: "light",
        style: "3", // Candlesticks
        locale: "in",
        enable_publishing: false,
        backgroundColor: "#ffffff",
        gridColor: "rgba(20, 196, 181, 0.1)",
        hide_top_toolbar: false,
        hide_legend: true, // Keep the legend hidden to reduce clutter
        save_image: false,
        container_id: "tradingview_sensex"
      });
    }
  }

  return (
    <div className="chart-widget-block">
      <h3 className="chart-title">Market Analysis: BSE SENSEX</h3>
      
      {/* THE FIX: We force the height strictly here in the HTML. 
          The chart cannot squish if the box is locked at 450px. */}
      <div id='tradingview_sensex' style={{ height: '450px', width: '100%' }} />
      
    </div>
  );
};

export default memo(NiftyChart);