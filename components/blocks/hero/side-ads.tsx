"use client";

export default function SideAds() {
  return (
    <>
      {/* Left Side Ad - 300x250 */}
      <div className="hidden xl:block fixed left-2 top-32 z-20">
        <div
          style={{
            width: '300px',
            height: '250px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            pointerEvents: 'auto'
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <script type="text/javascript">
                atOptions = {
                  'key' : '484b266368589cbc7157b77a607ca7c6',
                  'format' : 'iframe',
                  'height' : 250,
                  'width' : 300,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="//www.highperformanceformat.com/484b266368589cbc7157b77a607ca7c6/invoke.js"></script>
            `
          }}
        />
      </div>

      {/* Right Side Ad - 160x300 */}
      <div className="hidden xl:block fixed right-2 top-32 z-20">
        <div
          style={{
            width: '160px',
            height: '300px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            pointerEvents: 'auto'
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <script type="text/javascript">
                atOptions = {
                  'key' : '1aaf0def470f2e4ae8af46e39e61c7c8',
                  'format' : 'iframe',
                  'height' : 300,
                  'width' : 160,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="//www.highperformanceformat.com/1aaf0def470f2e4ae8af46e39e61c7c8/invoke.js"></script>
            `
          }}
        />
      </div>
    </>
  );
}
