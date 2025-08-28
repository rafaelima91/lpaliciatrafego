/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais
        primary: {
          DEFAULT: '#FFB906',
          50: '#FFF9E6',
          100: '#FFF1B3',
          200: '#FFE880',
          300: '#FFDF4D',
          400: '#FFD61A',
          500: '#FFB906',
          600: '#E6A605',
          700: '#CC9405',
          800: '#B38204',
          900: '#996F03',
          950: '#665002'
        },
        secondary: {
          DEFAULT: '#000000',
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#000000'
        },
        // Cores utilitárias
        light: {
          DEFAULT: '#FFFFFF',
          soft: '#FEFEFE',
          cream: '#FFFCF0'
        },
        dark: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          medium: '#2A2A2A'
        },
        // Cores de acento
        accent: {
          gold: '#D4AF37',
          bronze: '#CD7F32',
          amber: '#FFBF00'
        }
      },
      fontFamily: {
  sans: ['Outfit', 'system-ui', 'sans-serif'],
  display: ['Outfit', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // 48px
        'title': ['2.25rem', { lineHeight: '1.15', fontWeight: '700' }], // 36px
        'subtitle': ['1.5rem', { lineHeight: '1.2', fontWeight: '500' }], // 24px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }], // 14px
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      backgroundImage: {
        // Gradientes principais
        'gradient-primary': 'linear-gradient(135deg, #FFB906 0%, #E6A605 100%)',
        'gradient-primary-dark': 'linear-gradient(135deg, #E6A605 0%, #CC9405 100%)',
        'gradient-primary-light': 'linear-gradient(135deg, #FFF1B3 0%, #FFB906 100%)',
        
        // Gradientes secundários
        'gradient-secondary': 'linear-gradient(135deg, #000000 0%, #2A2A2A 100%)',
        'gradient-secondary-soft': 'linear-gradient(135deg, #1A1A1A 0%, #434343 100%)',
        
        // Gradientes combinados
        'gradient-hero': 'linear-gradient(135deg, #FFB906 0%, #000000 100%)',
        'gradient-hero-reverse': 'linear-gradient(135deg, #000000 0%, #FFB906 100%)',
        'gradient-golden-black': 'linear-gradient(45deg, #FFB906 0%, #D4AF37 50%, #000000 100%)',
        
        // Gradientes radiais
        'gradient-radial-primary': 'radial-gradient(circle, #FFB906 0%, #E6A605 100%)',
        'gradient-radial-hero': 'radial-gradient(ellipse at center, #FFB906 0%, #000000 70%)',
        
        // Gradientes angulares
        'gradient-conic': 'conic-gradient(from 0deg, #FFB906, #000000, #FFB906)',
        
        // Gradientes de overlay
        'overlay-dark': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
        'overlay-primary': 'linear-gradient(rgba(255,185,6,0.9), rgba(255,185,6,0.7))',
        'hero-yellow': 'linear-gradient(135deg, #FFB906 0%, #996F03 100%)', // primary-500 para primary-900
      },
      boxShadow: {
        // Shadows primários
        'primary': '0 4px 14px 0 rgba(255, 185, 6, 0.39)',
        'primary-lg': '0 10px 25px -3px rgba(255, 185, 6, 0.4), 0 4px 6px -2px rgba(255, 185, 6, 0.05)',
        'primary-xl': '0 20px 50px -12px rgba(255, 185, 6, 0.5)',
        
        // Shadows secundários
        'secondary': '0 4px 14px 0 rgba(0, 0, 0, 0.39)',
        'secondary-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'secondary-xl': '0 20px 50px -12px rgba(0, 0, 0, 0.5)',
        
        // Shadows especiais
        'golden': '0 8px 32px rgba(212, 175, 55, 0.4)',
        'glow': '0 0 20px rgba(255, 185, 6, 0.6)',
        'glow-lg': '0 0 40px rgba(255, 185, 6, 0.4)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 185, 6, 0.2)',
        
        // Shadows elevados
        'float': '0 12px 24px -6px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'float-primary': '0 12px 24px -6px rgba(255, 185, 6, 0.25), 0 0 0 1px rgba(255, 185, 6, 0.1)'
      },
      animation: {
        // Animações básicas
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        
        // Animações de escala
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'scale-bounce': 'scaleBounce 0.6s ease-out',
        
        // Animações de glow/brilho
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        
        // Animações de hover/interação
        'hover-lift': 'hoverLift 0.3s ease-out forwards',
        'button-press': 'buttonPress 0.1s ease-out',
        
        // Animações de loading
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        
        // Animações especiais
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out'
      },
      keyframes: {
        // Keyframes de fade
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        
        // Keyframes de escala
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        },
        scaleBounce: {
          '0%': { transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' }
        },
        
        // Keyframes de glow/brilho
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 185, 6, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 185, 6, 0.8), 0 0 30px rgba(255, 185, 6, 0.4)' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 185, 6, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 185, 6, 0.8), 0 0 30px rgba(255, 185, 6, 0.4)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        
        // Keyframes de interação
        hoverLift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-2px) scale(1.02)' }
        },
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' }
        },
        
        // Keyframes especiais
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      // Configurações de transição
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [
    // Plugin personalizado para utilitários extras
    function({ addUtilities }) {
      addUtilities({
        '.text-gradient-primary': {
          'background': 'linear-gradient(135deg, #FFB906 0%, #E6A605 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-hero': {
          'background': 'linear-gradient(135deg, #FFB906 0%, #000000 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.75)',
          'border': '1px solid rgba(209, 213, 219, 0.3)',
        },
        '.glass-dark': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(0, 0, 0, 0.75)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        }
      })
    }
  ]
}
