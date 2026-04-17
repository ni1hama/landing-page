import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FF',
          300: '#7CC4FA',
          400: '#36A6F7',
          500: '#2A86FF', // Primary - keeping the electric blue
          600: '#0969DA',
          700: '#054DA8',
          800: '#0A3069',
          900: '#021533',
          950: '#020617', // Deeper, almost black void
        },
        accent: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(42, 134, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(42, 134, 255, 0.2)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-inset': 'inset 0 0 20px rgba(255, 255, 255, 0.02)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #2A86FF 0%, #00C6FF 100%)',
        'orb': 'radial-gradient(circle at 50% 50%, rgba(42, 134, 255, 0.12) 0%, transparent 70%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config
