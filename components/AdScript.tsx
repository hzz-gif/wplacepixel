'use client';

import { useEffect } from 'react';

export default function AdScript() {
  useEffect(() => {
    // 只在客户端执行
    if (typeof window !== 'undefined') {
      // 设置广告配置
      (window as any).atOptions = {
        'key': '484b266368589cbc7157b77a607ca7c6',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };

      // 动态加载广告脚本
      const adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = 'https://www.highperformanceformat.com/484b266368589cbc7157b77a607ca7c6/invoke.js';
      adScript.async = true;

      // 添加结构化数据
      const structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "WPlace Pixel",
        "alternateName": "WPlace Pixel Art Converter",
        "url": "https://wplacepixel.art",
        "description": "Transform images into pixel art for WPlace.live. Professional pixel art converter, tools, and guides for collaborative pixel art creation.",
        "publisher": {
          "@type": "Organization",
          "name": "WPlace Pixel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://wplacepixel.art/favicon.svg"
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://wplacepixel.art/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      });

      // 添加到 head
      document.head.appendChild(adScript);
      document.head.appendChild(structuredDataScript);

      // 清理函数
      return () => {
        if (document.head.contains(adScript)) {
          document.head.removeChild(adScript);
        }
        if (document.head.contains(structuredDataScript)) {
          document.head.removeChild(structuredDataScript);
        }
      };
    }
  }, []);

  return null; // 这个组件不渲染任何内容
}
