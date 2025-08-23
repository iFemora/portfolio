/**
 * Tailwind configuration for the PM portfolio.
 *
 * We enable class‑based dark mode so that the theme can be toggled via
 * JavaScript. The content paths include all HTML and MD files so
 * purge can remove unused styles. The theme extends fonts and colors
 * to match the default palette described in the specification. If
 * desired, these values can be refined further in the future.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html',
    './posts/**/*.{html,md}',
    './work/**/*.{html,md}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Using generic fallbacks because custom fonts cannot be loaded offline
        heading: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Primary brand color palette (indigo ramp)
        primary: {
          light: '#6366F1', // Indigo 500
          DEFAULT: '#4F46E5', // Indigo 600
          dark: '#4338CA', // Indigo 700
        },
        // Accent color palette (cyan ramp)
        accent: {
          light: '#0EA5E9', // Cyan 500
          DEFAULT: '#06B6D4', // Cyan 400
          dark: '#0891B2', // Cyan 700
        },
        // Neutral palette for light and dark modes
        surface: {
          light: '#FFFFFF',
          dark: '#15171A',
        },
        background: {
          light: '#F7F8FA',
          dark: '#0B0C0E',
        },
        text: {
          light: '#0B0C0E',
          dark: '#E6E8EB',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      spacing: {
        // 4/8 point scale as per spec
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0, 0, 0, 0.05)',
        lifted: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overlay: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};