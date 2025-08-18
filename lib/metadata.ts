/**
 * 获取网站的基础URL，根据环境自动选择
 */
export function getBaseUrl(): string {
  // 生产环境使用实际域名，开发环境使用localhost
  if (process.env.NODE_ENV === 'production') {
    return 'https://wplacepixel.art';
  }
  
  return process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000';
}

/**
 * 创建带有metadataBase的metadata对象
 */
export function createMetadataWithBase(metadata: any) {
  return {
    metadataBase: new URL(getBaseUrl()),
    ...metadata,
  };
}
