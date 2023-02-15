//Calcular signo SOLAR
module.exports.getSunSign = (day, month) => {
  if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) return "Aries";
  if ((day >= 24 && month === 9) || (day <= 23 && month === 10)) return "Libra";
  if ((day >= 21 && month === 4) || (day <= 21 && month === 5)) return "Taurus";
  if ((day >= 24 && month === 10) || (day <= 22 && month === 11)) return "Scorpio";
  if ((day >= 22 && month === 5) || (day <= 21 && month === 6)) return "Gemini";
  if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) return "Sagittarius";
  if ((day >= 21 && month === 6) || (day <= 23 && month === 7)) return "Cancer";
  if ((day >= 22 && month === 12) || (day <= 20 && month === 1)) return "Capricorn";
  if ((day >= 24 && month === 7) || (day <= 23 && month === 8)) return "Leo";
  if ((day >= 21 && month === 1) || (day <= 19 && month === 2)) return "Aquarius";
  if ((day >= 24 && month === 8) || (day <= 23 && month === 9)) return "Virgo";
  if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) return "Pisces";
}

//Calcular signo LUNAR
module.exports.getMoonSign = (day, month, year) => {
  let yearNum = 0;
  let monthNum = 0;

  if (year === 1980) yearNum = 6;
  else if (year === 1981) yearNum = 16;
  else if (year === 1982 || year === 2009) yearNum = 25;
  else if (year === 1983 || year === 2002) yearNum = 8;
  else if (year === 1984 || year === 2003) yearNum = 19;
  else if (year === 1985) yearNum = 1;
  else if (year === 1986) yearNum = 11;
  else if (year === 1987) yearNum = 21;
  else if (year === 1988 || year === 1999) yearNum = 5;
  else if (year === 1989) yearNum = 14;
  else if (year === 1990) yearNum = 24;
  else if (year === 1991 || year === 2010) yearNum = 7;
  else if (year === 1992) yearNum = 17;
  else if (year === 1993) yearNum = 27;
  else if (year === 1994) yearNum = 9;
  else if (year === 1995) yearNum = 20;
  else if (year === 1996 || year === 2004) yearNum = 3;
  else if (year === 1997) yearNum = 13;
  else if (year === 1998 || year === 2006) yearNum = 22;
  else if (year === 2000) yearNum = 17;
  else if (year === 2001) yearNum = 26;
  else if (year === 2005) yearNum = 12;
  else if (year === 2007) yearNum = 4;
  else if (year === 2008) yearNum = 15;

  if (month === 1) monthNum = 0;
  else if (month === 2 || month === 3) monthNum = 4;
  else if (month === 4) monthNum = 8;
  else if (month === 5) monthNum = 11;
  else if (month === 6) monthNum = 14;
  else if (month === 7) monthNum = 17;
  else if (month === 8) monthNum = 21;
  else if (month === 9) monthNum = 24;
  else if (month === 10) monthNum = 27;
  else if (month === 11) monthNum = 3;
  else if (month === 12) monthNum = 6;

  let sumDate = day + monthNum + yearNum;

  if (sumDate >= 29 && sumDate <= 54) sumDate = sumDate - 27;
  else if (sumDate >= 55 && sumDate <= 81) sumDate = sumDate - 55;
  else if (sumDate > 82) sumDate = sumDate - 55;

  if (sumDate === 0 || sumDate === 1 || sumDate === 27 || sumDate === 28) return "Aries";
  else if (sumDate === 2 || sumDate === 3 || sumDate === 4) return "Taurus";
  else if (sumDate === 5 || sumDate === 6) return "Gemini";
  else if (sumDate === 7 || sumDate === 8) return "Cancer";
  else if (sumDate === 9 || sumDate === 10) return "Leo";
  else if (sumDate === 11 || sumDate === 12 || sumDate === 13) return "Virgo";
  else if (sumDate === 14 || sumDate === 15) return "Libra";
  else if (sumDate === 16 || sumDate === 17) return "Scorpio";
  else if (sumDate === 18 || sumDate === 19) return "Sagittarius";
  else if (sumDate === 20 || sumDate === 21 || sumDate === 22) return "Capricorn";
  else if (sumDate === 23 || sumDate === 24) return "Aquarius";
  else if (sumDate === 25 || sumDate === 26) return "Pisces";
}

//Calcular signo ASCENDENTE

module.exports.getAscendantSign = (sunSign, hour) => {
  if (sunSign === "Aries" && hour >= 6 && sunSign === "Aries" && hour < 8) return "Aries";
  if (sunSign === "Aries" && hour >= 8 && sunSign === "Aries" && hour < 10) return "Taurus";
  if (sunSign === "Aries" && hour >= 10 && sunSign === "Aries" && hour < 12) return "Gemini";
  if (sunSign === "Aries" && hour >= 12 && sunSign === "Aries" && hour < 14) return "Cancer";
  if (sunSign === "Aries" && hour >= 14 && sunSign === "Aries" && hour < 16) return "Leo";
  if (sunSign === "Aries" && hour >= 16 && sunSign === "Aries" && hour < 18) return "Virgo";
  if (sunSign === "Aries" && hour >= 18 && sunSign === "Aries" && hour < 20) return "Libra";
  if (sunSign === "Aries" && hour >= 20 && sunSign === "Aries" && hour < 22) return "Scorpio";
  if (sunSign === "Aries" && hour >= 22 && sunSign === "Aries" && hour < 24) return "Sagittarius";
  if (sunSign === "Aries" && hour >= 0 && sunSign === "Aries" && hour < 2) return "Capricorn";
  if (sunSign === "Aries" && hour >= 2 && sunSign === "Aries" && hour < 4) return "Aquarius";
  if (sunSign === "Aries" && hour >= 4 && sunSign === "Aries" && hour < 6) return "Pisces";

  if (sunSign === "Taurus" && hour >= 6 && sunSign === "Taurus" && hour < 8) return "Taurus";
  if (sunSign === "Taurus" && hour >= 8 && sunSign === "Taurus" && hour < 10) return "Gemini";
  if (sunSign === "Taurus" && hour >= 10 && sunSign === "Taurus" && hour < 12) return "Cancer";
  if (sunSign === "Taurus" && hour >= 12 && sunSign === "Taurus" && hour < 14) return "Leo";
  if (sunSign === "Taurus" && hour >= 14 && sunSign === "Taurus" && hour < 16) return "Virgo";
  if (sunSign === "Taurus" && hour >= 16 && sunSign === "Taurus" && hour < 18) return "Libra";
  if (sunSign === "Taurus" && hour >= 18 && sunSign === "Taurus" && hour < 20) return "Scorpio";
  if (sunSign === "Taurus" && hour >= 20 && sunSign === "Taurus" && hour < 22) return "Sagittarius";
  if (sunSign === "Taurus" && hour >= 22 && sunSign === "Taurus" && hour < 24) return "Capricorn";
  if (sunSign === "Taurus" && hour >= 0 && sunSign === "Taurus" && hour < 2) return "Aquarius";
  if (sunSign === "Taurus" && hour >= 2 && sunSign === "Taurus" && hour < 4) return "Pisces";
  if (sunSign === "Taurus" && hour >= 4 && sunSign === "Taurus" && hour < 6) return "Aries";

  if (sunSign === "Gemini" && hour >= 6 && sunSign === "Gemini" && hour < 8) return "Gemini";
  if (sunSign === "Gemini" && hour >= 8 && sunSign === "Gemini" && hour < 10) return "Cancer";
  if (sunSign === "Gemini" && hour >= 10 && sunSign === "Gemini" && hour < 12) return "Leo";
  if (sunSign === "Gemini" && hour >= 12 && sunSign === "Gemini" && hour < 14) return "Virgo";
  if (sunSign === "Gemini" && hour >= 14 && sunSign === "Gemini" && hour < 16) return "Libra";
  if (sunSign === "Gemini" && hour >= 16 && sunSign === "Gemini" && hour < 18) return "Scorpio";
  if (sunSign === "Gemini" && hour >= 18 && sunSign === "Gemini" && hour < 20) return "Sagittarius";
  if (sunSign === "Gemini" && hour >= 20 && sunSign === "Gemini" && hour < 22) return "Capricorn";
  if (sunSign === "Gemini" && hour >= 22 && sunSign === "Gemini" && hour < 24) return "Aquarius";
  if (sunSign === "Gemini" && hour >= 0 && sunSign === "Gemini" && hour < 2) return "Pisces";
  if (sunSign === "Gemini" && hour >= 2 && sunSign === "Gemini" && hour < 4) return "Aries";
  if (sunSign === "Gemini" && hour >= 4 && sunSign === "Gemini" && hour < 6) return "Taurus";

  if (sunSign === "Cancer" && hour >= 6 && sunSign === "Cancer" && hour < 8) return "Cancer";
  if (sunSign === "Cancer" && hour >= 8 && sunSign === "Cancer" && hour < 10) return "Leo";
  if (sunSign === "Cancer" && hour >= 10 && sunSign === "Cancer" && hour < 12) return "Virgo";
  if (sunSign === "Cancer" && hour >= 12 && sunSign === "Cancer" && hour < 14) return "Libra";
  if (sunSign === "Cancer" && hour >= 14 && sunSign === "Cancer" && hour < 16) return "Scorpio";
  if (sunSign === "Cancer" && hour >= 16 && sunSign === "Cancer" && hour < 18) return "Sagittarius";
  if (sunSign === "Cancer" && hour >= 18 && sunSign === "Cancer" && hour < 20) return "Capricorn";
  if (sunSign === "Cancer" && hour >= 20 && sunSign === "Cancer" && hour < 22) return "Aquarius";
  if (sunSign === "Cancer" && hour >= 22 && sunSign === "Cancer" && hour < 24) return "Pisces";
  if (sunSign === "Cancer" && hour >= 0 && sunSign === "Cancer" && hour < 2) return "Aries";
  if (sunSign === "Cancer" && hour >= 2 && sunSign === "Cancer" && hour < 4) return "Taurus";
  if (sunSign === "Cancer" && hour >= 4 && sunSign === "Cancer" && hour < 6) return "Gemini";

  if (sunSign === "Leo" && hour >= 6 && sunSign === "Leo" && hour < 8) return "Leo";
  if (sunSign === "Leo" && hour >= 8 && sunSign === "Leo" && hour < 10) return "Virgo";
  if (sunSign === "Leo" && hour >= 10 && sunSign === "Leo" && hour < 12) return "Libra";
  if (sunSign === "Leo" && hour >= 12 && sunSign === "Leo" && hour < 14) return "Scorpio";
  if (sunSign === "Leo" && hour >= 14 && sunSign === "Leo" && hour < 16) return "Sagittarius";
  if (sunSign === "Leo" && hour >= 16 && sunSign === "Leo" && hour < 18) return "Capricorn";
  if (sunSign === "Leo" && hour >= 18 && sunSign === "Leo" && hour < 20) return "Aquarius";
  if (sunSign === "Leo" && hour >= 20 && sunSign === "Leo" && hour < 22) return "Pisces";
  if (sunSign === "Leo" && hour >= 22 && sunSign === "Leo" && hour < 24) return "Aries";
  if (sunSign === "Leo" && hour >= 0 && sunSign === "Leo" && hour < 2) return "Taurus";
  if (sunSign === "Leo" && hour >= 2 && sunSign === "Leo" && hour < 4) return "Gemini";
  if (sunSign === "Leo" && hour >= 4 && sunSign === "Leo" && hour < 6) return "Cancer";

  if (sunSign === "Virgo" && hour >= 6 && sunSign === "Virgo" && hour < 8) return "Virgo";
  if (sunSign === "Virgo" && hour >= 8 && sunSign === "Virgo" && hour < 10) return "Libra";
  if (sunSign === "Virgo" && hour >= 10 && sunSign === "Virgo" && hour < 12) return "Scorpio";
  if (sunSign === "Virgo" && hour >= 12 && sunSign === "Virgo" && hour < 14) return "Sagittarius";
  if (sunSign === "Virgo" && hour >= 14 && sunSign === "Virgo" && hour < 16) return "Capricorn";
  if (sunSign === "Virgo" && hour >= 16 && sunSign === "Virgo" && hour < 18) return "Aquarius";
  if (sunSign === "Virgo" && hour >= 18 && sunSign === "Virgo" && hour < 20) return "Pisces";
  if (sunSign === "Virgo" && hour >= 20 && sunSign === "Virgo" && hour < 22) return "Aries";
  if (sunSign === "Virgo" && hour >= 22 && sunSign === "Virgo" && hour < 24) return "Taurus";
  if (sunSign === "Virgo" && hour >= 0 && sunSign === "Virgo" && hour < 2) return "Gemini";
  if (sunSign === "Virgo" && hour >= 2 && sunSign === "Virgo" && hour < 4) return "Cancer";
  if (sunSign === "Virgo" && hour >= 4 && sunSign === "Virgo" && hour < 6) return "Leo";

  if (sunSign === "Libra" && hour >= 6 && sunSign === "Libra" && hour < 8) return "Libra";
  if (sunSign === "Libra" && hour >= 8 && sunSign === "Libra" && hour < 10) return "Scorpio";
  if (sunSign === "Libra" && hour >= 10 && sunSign === "Libra" && hour < 12) return "Sagittarius";
  if (sunSign === "Libra" && hour >= 12 && sunSign === "Libra" && hour < 14) return "Capricorn";
  if (sunSign === "Libra" && hour >= 14 && sunSign === "Libra" && hour < 16) return "Aquarius";
  if (sunSign === "Libra" && hour >= 16 && sunSign === "Libra" && hour < 18) return "Pisces";
  if (sunSign === "Libra" && hour >= 18 && sunSign === "Libra" && hour < 20) return "Aries";
  if (sunSign === "Libra" && hour >= 20 && sunSign === "Libra" && hour < 22) return "Taurus";
  if (sunSign === "Libra" && hour >= 22 && sunSign === "Libra" && hour < 24) return "Gemini";
  if (sunSign === "Libra" && hour >= 0 && sunSign === "Libra" && hour < 2) return "Cancer";
  if (sunSign === "Libra" && hour >= 2 && sunSign === "Libra" && hour < 4) return "Leo";
  if (sunSign === "Libra" && hour >= 4 && sunSign === "Libra" && hour < 6) return "Virgo";

  if (sunSign === "Scorpio" && hour >= 6 && sunSign === "Scorpio" && hour < 8) return "Scorpio";
  if (sunSign === "Scorpio" && hour >= 8 && sunSign === "Scorpio" && hour < 10) return "Sagittarius";
  if (sunSign === "Scorpio" && hour >= 10 && sunSign === "Scorpio" && hour < 12) return "Capricorn";
  if (sunSign === "Scorpio" && hour >= 12 && sunSign === "Scorpio" && hour < 14) return "Aquarius";
  if (sunSign === "Scorpio" && hour >= 14 && sunSign === "Scorpio" && hour < 16) return "Pisces";
  if (sunSign === "Scorpio" && hour >= 16 && sunSign === "Scorpio" && hour < 18) return "Aries";
  if (sunSign === "Scorpio" && hour >= 18 && sunSign === "Scorpio" && hour < 20) return "Taurus";
  if (sunSign === "Scorpio" && hour >= 20 && sunSign === "Scorpio" && hour < 22) return "Gemini";
  if (sunSign === "Scorpio" && hour >= 22 && sunSign === "Scorpio" && hour < 24) return "Cancer";
  if (sunSign === "Scorpio" && hour >= 0 && sunSign === "Scorpio" && hour < 2) return "Leo";
  if (sunSign === "Scorpio" && hour >= 2 && sunSign === "Scorpio" && hour < 4) return "Virgo";
  if (sunSign === "Scorpio" && hour >= 4 && sunSign === "Scorpio" && hour < 6) return "Libra";

  if (sunSign === "Sagittarius" && hour >= 6 && sunSign === "Sagittarius" && hour < 8) return "Sagittarius";
  if (sunSign === "Sagittarius" && hour >= 8 && sunSign === "Sagittarius" && hour < 10) return "Capricorn";
  if (sunSign === "Sagittarius" && hour >= 10 && sunSign === "Sagittarius" && hour < 12) return "Aquarius";
  if (sunSign === "Sagittarius" && hour >= 12 && sunSign === "Sagittarius" && hour < 14) return "Pisces";
  if (sunSign === "Sagittarius" && hour >= 14 && sunSign === "Sagittarius" && hour < 16) return "Aries";
  if (sunSign === "Sagittarius" && hour >= 16 && sunSign === "Sagittarius" && hour < 18) return "Taurus";
  if (sunSign === "Sagittarius" && hour >= 18 && sunSign === "Sagittarius" && hour < 20) return "Gemini";
  if (sunSign === "Sagittarius" && hour >= 20 && sunSign === "Sagittarius" && hour < 22) return "Cancer";
  if (sunSign === "Sagittarius" && hour >= 22 && sunSign === "Sagittarius" && hour < 24) return "Leo";
  if (sunSign === "Sagittarius" && hour >= 0 && sunSign === "Sagittarius" && hour < 2) return "Virgo";
  if (sunSign === "Sagittarius" && hour >= 2 && sunSign === "Sagittarius" && hour < 4) return "Libra";
  if (sunSign === "Sagittarius" && hour >= 4 && sunSign === "Sagittarius" && hour < 6) return "Scorpio";

  if (sunSign === "Capricorn" && hour >= 6 && sunSign === "Capricorn" && hour < 8) return "Capricorn";
  if (sunSign === "Capricorn" && hour >= 8 && sunSign === "Capricorn" && hour < 10) return "Aquarius";
  if (sunSign === "Capricorn" && hour >= 10 && sunSign === "Capricorn" && hour < 12) return "Pisces";
  if (sunSign === "Capricorn" && hour >= 12 && sunSign === "Capricorn" && hour < 14) return "Aries";
  if (sunSign === "Capricorn" && hour >= 14 && sunSign === "Capricorn" && hour < 16) return "Taurus";
  if (sunSign === "Capricorn" && hour >= 16 && sunSign === "Capricorn" && hour < 18) return "Gemini";
  if (sunSign === "Capricorn" && hour >= 18 && sunSign === "Capricorn" && hour < 20) return "Cancer";
  if (sunSign === "Capricorn" && hour >= 20 && sunSign === "Capricorn" && hour < 22) return "Leo";
  if (sunSign === "Capricorn" && hour >= 22 && sunSign === "Capricorn" && hour < 24) return "Virgo";
  if (sunSign === "Capricorn" && hour >= 0 && sunSign === "Capricorn" && hour < 2) return "Libra";
  if (sunSign === "Capricorn" && hour >= 2 && sunSign === "Capricorn" && hour < 4) return "Scorpio";
  if (sunSign === "Capricorn" && hour >= 4 && sunSign === "Capricorn" && hour < 6) return "Sagittarius";

  if (sunSign === "Aquarius" && hour >= 6 && sunSign === "Aquarius" && hour < 8) return "Aquarius";
  if (sunSign === "Aquarius" && hour >= 8 && sunSign === "Aquarius" && hour < 10) return "Pisces";
  if (sunSign === "Aquarius" && hour >= 10 && sunSign === "Aquarius" && hour < 12) return "Aries";
  if (sunSign === "Aquarius" && hour >= 12 && sunSign === "Aquarius" && hour < 14) return "Taurus";
  if (sunSign === "Aquarius" && hour >= 14 && sunSign === "Aquarius" && hour < 16) return "Gemini";
  if (sunSign === "Aquarius" && hour >= 16 && sunSign === "Aquarius" && hour < 18) return "Cancer";
  if (sunSign === "Aquarius" && hour >= 18 && sunSign === "Aquarius" && hour < 20) return "Leo";
  if (sunSign === "Aquarius" && hour >= 20 && sunSign === "Aquarius" && hour < 22) return "Virgo";
  if (sunSign === "Aquarius" && hour >= 22 && sunSign === "Aquarius" && hour < 24) return "Libra";
  if (sunSign === "Aquarius" && hour >= 0 && sunSign === "Aquarius" && hour < 2) return "Scorpio";
  if (sunSign === "Aquarius" && hour >= 2 && sunSign === "Aquarius" && hour < 4) return "Sagittarius";
  if (sunSign === "Aquarius" && hour >= 4 && sunSign === "Aquarius" && hour < 6) return "Capricorn";

  if (sunSign === "Pisces" && hour >= 6 && sunSign === "Pisces" && hour < 8) return "Pisces";
  if (sunSign === "Pisces" && hour >= 8 && sunSign === "Pisces" && hour < 10) return "Aries";
  if (sunSign === "Pisces" && hour >= 10 && sunSign === "Pisces" && hour < 12) return "Taurus";
  if (sunSign === "Pisces" && hour >= 12 && sunSign === "Pisces" && hour < 14) return "Gemini";
  if (sunSign === "Pisces" && hour >= 14 && sunSign === "Pisces" && hour < 16) return "Cancer";
  if (sunSign === "Pisces" && hour >= 16 && sunSign === "Pisces" && hour < 18) return "Leo";
  if (sunSign === "Pisces" && hour >= 18 && sunSign === "Pisces" && hour < 20) return "Virgo";
  if (sunSign === "Pisces" && hour >= 20 && sunSign === "Pisces" && hour < 22) return "Libra";
  if (sunSign === "Pisces" && hour >= 22 && sunSign === "Pisces" && hour < 24) return "Scorpio";
  if (sunSign === "Pisces" && hour >= 0 && sunSign === "Pisces" && hour < 2) return "Sagittarius";
  if (sunSign === "Pisces" && hour >= 2 && sunSign === "Pisces" && hour < 4) return "Capricorn";
  if (sunSign === "Pisces" && hour >= 4 && sunSign === "Pisces" && hour < 6) return "Aquarius";
}

