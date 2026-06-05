export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rr: {
          black: '#080808',
          purple: '#6C47FF',
          lavender: '#9B7BFF',
          pink: '#FF3366',
          muted: '#A0A0A0',
          glass: 'rgba(255,255,255,0.04)',
          border: 'rgba(108,71,255,0.2)',
        },
      },
      fontFamily: {
        display: ['Syne', 'Bebas Neue', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
