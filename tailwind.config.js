/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // gray-200
        ring: 'var(--color-ring)', // deep navy
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // gray-800
        primary: {
          DEFAULT: 'var(--color-primary)', // deep navy
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // professional blue
          foreground: 'var(--color-secondary-foreground)' // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // warm orange
          foreground: 'var(--color-accent-foreground)' // gray-800
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-50
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        card: {
          DEFAULT: 'var(--color-card)', // gray-50
          foreground: 'var(--color-card-foreground)' // gray-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-800
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // yellow-500
          foreground: 'var(--color-warning-foreground)' // gray-800
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)' // white
        },
        brand: {
          wisdom: 'var(--color-brand-wisdom)', // purple-600
          trust: 'var(--color-brand-trust)', // blue-800
          conversion: 'var(--color-brand-conversion)', // green-600
          cta: 'var(--color-brand-cta)' // red-600
        }
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }]
      },
      spacing: {
        'base': 'var(--spacing-base)',
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)'
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)'
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '400ms'
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(30, 58, 95, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(30, 58, 95, 0)' }
        },
        'neural-flow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-out',
        'slide-in': 'slide-in 400ms ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'neural-flow': 'neural-flow 8s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neural-pattern': 'radial-gradient(circle at 2px 2px, rgba(30, 58, 95, 0.05) 1px, transparent 0)'
      },
      backgroundSize: {
        'neural': '32px 32px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}