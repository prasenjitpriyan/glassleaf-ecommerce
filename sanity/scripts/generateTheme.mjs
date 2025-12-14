import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#f8f4ec',
  '--my-black': '#0f4c3a',
  '--my-brand': '#0f8a5f',
  '--my-red': '#db4437',
  '--my-yellow': '#c97a36',
  '--my-green': '#0f8a5f',
};

const theme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--my-brand'],

  /* Default button */
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-brand'],
});

console.log(JSON.stringify(theme, null, 2));
