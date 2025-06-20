import { useEffect } from 'react';
import './AdSense.css';

interface AdSenseProps {
  adSlot?: string;
  adFormat?: string;
  adStyle?: React.CSSProperties;
  className?: string;
}

const AdSense = ({ 
  adSlot = "1234567890", 
  adFormat = "auto", 
  adStyle = { display: "block" },
  className = ""
}: AdSenseProps) => {
  
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins 
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-4495740083517856"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;