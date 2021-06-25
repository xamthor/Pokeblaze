module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './**/*.cshtml',
      './**/*.razor'
    ],
    options: {
      safelist: ['bg-normal','bg-fire','bg-water','bg-grass','bg-electric','bg-ice','bg-fighting','bg-poison',
        'bg-ground','bg-flying','bg-psychic','bg-bug','bg-rock','bg-ghost','bg-dark','bg-dragon','bg-steel','bg-fairy']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'normal' : '#A8A878',
        'fire' : '#f08030',
        'water' : '#6890F0',
        'grass' : '#78c850',
        'electric' : '#F8CF30',
        'ice' : '#99D8D8',
        'fighting' : '#C03128',
        'poison' : '#9F40A0',
        'ground' : '#E0BF68',
        'flying' : '#A890F0',
        'psychic' : '#E15F83',
        'bug' : '#A8B720',
        'rock' : '#B8A039',
        'ghost' : '#705898',
        'dark' : '#705848',
        'dragon' : '#7138F8',
        'steel' : '#B8B8D0',
        'fairy' : '#F0B6BC',
      },
      gridTemplateColumns: {
        'search': '1fr 150px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
