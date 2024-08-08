const { fifaData } = require('./fifa.js');

const finaller = (maclar) => {
  const finalMaclari = maclar.filter((mac) => mac.Stage === 'Final');

  let toplamGol = 0;
  finalMaclari.forEach(
    (mac) => (toplamGol += mac['Home Team Goals'] + mac['Away Team Goals'])
  );

  return `2014 yılına kadar finallerde ${toplamGol} gol atılmıştır.`;
};
