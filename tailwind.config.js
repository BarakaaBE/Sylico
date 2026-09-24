// Rebuild du CSS après modification des classes : npx tailwindcss@3 -i styles.src.css -o styles.css --minify
module.exports = {
  content: ['./*.html', './blog/*.html'],
  theme: { extend: {
    colors: { 'night':'#0D0D0D','petrol':'#1A1A1A','gold':'#E8621A','stone':'#2E2E2E','offwhite':'#F5F4F1' },
    fontFamily: { 'display':['"Cormorant Garamond"','serif'], 'body':['Poppins','sans-serif'] },
  } },
}
