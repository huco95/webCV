const { ThemeBuilder, Theme } = require('tailwindcss-theming');
const defaultTheme = require("tailwindcss/defaultTheme");

const lightTheme = new Theme()
    .name('light')
    .default()
    .colors({
          "background": "#ffffff",
          ...defaultTheme.colors.gray,
          "250": "hsl(210, 40%, 93.5%)",
          "550": "hsl(218, 20%, 63%)",
          "650": "hsl(216, 15%, 48%)",
          "750": "hsl(214, 17%, 32%)",
          "link": "#fbf3f3",
          "letters": "#ffffff",
    });

const darkTheme = new Theme()
    .name('dark')
    .colors({
        "background": "#1f1f1f",
        ...defaultTheme.colors.gray,
        "200": "#4a5568",
        "250": "hsl(210, 40%, 93.5%)",
        "550": "hsl(218, 20%, 63%)",
        "650": "hsl(216, 15%, 48%)",
        "750": "hsl(214, 17%, 58%)",
        "link": "#fbf3f3",
        "letters": "#ffffff",
    });

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(lightTheme)
  .dark(darkTheme);