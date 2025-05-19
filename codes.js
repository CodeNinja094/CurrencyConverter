const countryList = {
  AED: "UAE Dirham",
  AFN: "Afghan Afghani",
  XCD: "East Caribbean Dollar",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  AQD: "Antarctican Dollar", // unofficial
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  XOF: "West African CFA Franc",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  NOK: "Norwegian Krone",
  BWP: "Botswana Pula",
  BYR: "Belarusian Ruble (old)",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  XAF: "Central African CFA Franc",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CYP: "Cypriot Pound (obsolete)",
  CZK: "Czech Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  ECS: "Ecuadorian Sucre (obsolete)",
  EEK: "Estonian Kroon (obsolete)",
  EGP: "Egyptian Pound",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgyzstani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Lao Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LTL: "Lithuanian Litas (obsolete)",
  LVL: "Latvian Lats (obsolete)",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Burmese Kyat",
  MNT: "Mongolian Tögrög",
  MOP: "Macanese Pataca",
  MRO: "Mauritanian Ouguiya (old)",
  MTL: "Maltese Lira (obsolete)",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  XPF: "CFP Franc",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Złoty",
  PYG: "Paraguayan Guaraní",
  QAR: "Qatari Riyal",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SKK: "Slovak Koruna (obsolete)",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  STD: "São Tomé and Príncipe Dobra",
  SVC: "Salvadoran Colón",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistani Som",
  VEF: "Venezuelan Bolívar (old)",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMK: "Zambian Kwacha (old)",
  ZWD: "Zimbabwean Dollar (old)",
};

const dropdown1 = document.querySelector("#dropdown1");
const dropdown2 = document.querySelector("#dropdown2");

for (const [currency, CurrencyName] of Object.entries(countryList)) {

  const countryBar1 = document.createElement("div");
  countryBar1.classList.add('country-bar');

  const countryBar2 = document.createElement("div");
  countryBar2.classList.add('country-bar');

  const flag1 = document.createElement("div");
  flag1.classList.add('flag');

  const flag2 = document.createElement("div");
  flag2.classList.add('flag');

  const image1 = document.createElement("img");
  image1.src = `https://flagsapi.com/BE/flat/64.png`;
  image1.height = '40';

  const image2 = document.createElement("img");
  image2.src = `https://flagsapi.com/BE/flat/64.png`;
  image2.height = '30';

  const countrynamesymbol1 = document.createElement("div");
  countrynamesymbol1.classList.add('countrynamesymbol');
  countrynamesymbol1.textContent = `${currency} - ${CurrencyName}`;

  const countrynamesymbol2 = document.createElement("div");
  countrynamesymbol2.classList.add('countrynamesymbol');
  countrynamesymbol2.textContent = `${currency} - ${CurrencyName}`;


  dropdown1.appendChild(countryBar1);
  countryBar1.appendChild(flag1);
  flag1.appendChild(image1);
  countryBar1.appendChild(countrynamesymbol1);

  dropdown2.appendChild(countryBar2);
  countryBar2.appendChild(flag2);
  flag2.appendChild(image2);
  countryBar2.appendChild(countrynamesymbol2);
}