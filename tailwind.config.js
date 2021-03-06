module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },

      container: {
        center: true, 
        padding: '1rem',
      },

      extend: {
        fontFamily: {
          'poppins': ['poppins', 'sans-serif'],
          'roboto': ['roboto', 'sans-serif']
        }, 

        colors: {
          'primary': '#eb3499',
          // 'primary': '#FD3D57', 
        }
      },
    },
    vairants: {
      extends: {
        display: ['group-hover'], 
        visibility: ['group-hover'],
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
}