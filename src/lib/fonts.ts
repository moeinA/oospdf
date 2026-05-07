/**
 * Font Configuration
 * Using system fonts for zero build-time dependencies and faster loading.
 * Custom fonts can be added later via next/font/local.
 */

export const fontVariables = '';

export const fontClassNames = {
  sans: '',
  mono: '',
};

export const fontCssVariables = {
  '--font-sans': 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  '--font-mono': '"Fira Code", Consolas, Monaco, monospace',
} as const;
