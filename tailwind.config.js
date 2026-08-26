// Fedora Workstation palette.
// Accents come from the Fedora brand (Fedora Blue #3C6EB4, Dark Blue #294172,
// Light Blue #51A2DA); neutrals and status colours come from GNOME Adwaita,
// which is the shell Fedora Workstation ships.
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'fd-grey': '#1B1B1B',
      'fd-light-grey': "#9A9996",
      'fd-cool-grey': "#303030",
      'fd-blue': "#3C6EB4",
      'fd-lite-blue': "#51A2DA",
      'fd-med-blue': "#294172",
      'fd-drk-navy': "#141B2E",
      'fd-window-title': "#242424",
      'fd-editor-dark': "#16202E",
      'fd-editor-light': "#294172",
      'fd-editor-darker': "#0E1622",
    }),
    textColor: theme => ({
      ...theme('colors'),
      'fdt-grey': '#F6F5F4',
      'fdt-light-grey': "#9A9996",
      'fdt-cool-grey': "#303030",
      'fdt-blue': "#62A0EA",
      'fdt-green': "#33D17A",
      'fdt-gold': "#F8E45C",
      'fdt-cyan': "#79DBFC",
      'fdt-navy': "#294172",
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'fdb-blue': '#3C6EB4'
    }),
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
