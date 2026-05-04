/**
 * Facebook Auto See More - Translations
 * 
 * To add a new language:
 * 1. Add its ISO code (e.g., 'es') as a key. if there are more than 2 countries using the same words, they will be connected using underscores (e.g., 'br_pt'), OR, special iso cases
 * 2. Add the "See more" phrases used by Facebook in that language as an array.
 */

// missing: Esperanto, Corsican, Fula, Gaeigle, Inuktitut, Inupiatun, Malti, Zaza, Акыркылар, татарский, ܣܘܪܝܝܐ, ພາສາລາວ, 

const TRANSLATIONS = {
  en: ['See more', 'See More'],
  // Future expansion example:
  af: ['نور وګورئ'], // Afrikaans
  al: ['Shiko më shumë'], // Shqipëria
  az: ['Əlavə məlumat üçün bax'],
  ba_hr: ['Prikaži više'],
  bd: ['আরও দেখুন'], // Bengali
  be: ['Lees meer'], // Vlaams
  bg: ['Вижте повече'], // Bulgarian
  by: ['Паказаць больш'], // Беларуская
  ca: ['Afficher plus'], // Francais spoken in Canada
  cn: ['展开'], // china
  cz: ['Zobrazit víc'], // czech
  da: ['Se mere'], // danish
  de: ['Mehr anzeigen'], // german
  ee: ['Kuva rohkem'], // estonian
  et: ['ተጨማሪ ይመልከቱ'], // Amharic
  fi: ['Näytä lisää'], // Suomi
  fo: ['Vís meira'], // faroese
  fr: ['En voir plus'], // French
  fr_e: ["Gwelet muioc'h"], // breton
  es: ['Ver más', 'Ver máis'], // spanish and galician
  es_ct: ["Mostra'n més..."],
  eu: ['Gehiago ikusi'], // basque
  gb_wls: ['Gweld Mwy'], // welsh
  ge: ['მეტის ჩვენება'], // Georgian - ქართული
  br_pt: ['Ver mais'], // portuguese
  gr: ['Δείτε περισσότερα'], // Ελληνικά
  ht: ['Wè plis'], // Ayisyen Kreyòl
  hu: ['Továbbiak'], // Magyarország
  hy: ['Տեսնել ավելին'], // Armenian
  id: ['Lihat selengkapnya'], // Indonesian
  il: ['עוד'], // Hebrew
  in: ['और देखें', 'অধিক চাওক', 'વધુ જુઓ', 'ଅଧିକ ଦେଖନ୍ତୁ', 'மேலும் காண்க', 'ఇంకా చూడండి', 'ಇನ್ನಷ್ಟು ನೋಡಿ', 'കൂടുതല്‍ കാണുക'], // Hindi (Indians and other)
  iq: ['زیاتر ببینە'], // Kurdish
  ir: ['ادامه ...'], // Persian
  is: ['Sjá meira'], // Islenska
  it: ['Altro...'], // Friulian, Italiano
  jp: ['さらに表示', 'もっと見る'], // japanese
  jv: ['Deleng liyane'], // jav
  kh: ['មើលច្រើនទៀត'],
  ko: ['더 보기'], // south korean
  ku: ['Bêhtir Bibîne'], // Kurdish
  kz: ['Әрі қарай'], // Қазақ 
  lt: ['Žr. daugiau'], // lietuviu
  lv: ['Skatīt vairāk'], // Latvian
  lk: ['තවත් බලන්න'], // Sinhala
  ma: ['ⵥⵕ ⵓⴳⴳⴰⵔ'], // Tamazight
  mg: ['Mahita bebe kokoa'], // Malagasy
  mk: ['Види повеќе'], // makedonski
  mm: ['ပိုမိုကြည့်ရန်'], // Burmese
  mn: ['Цааш үзэх'], // Mongolian - Монгол хэл
  mr: ['अधिक पहा'], // Marathi
  my: ['Lihat seterusnya'],
  ng: ['Kalli wasu'], // Hausa
  nl: ['Meer weergeven'], // Frysk, Nederlands
  np: ['थप हेर्नुहोस्'], // Nepali
  no: ['Se mer', 'Sjå meir'], // Bokmål, Nynorsk
  pa: ['ਹੋਰ ਦੇਖੋ'], // Punjabi
  pl: ['Wyświetl więcej', 'Pokŏż wiyncyj'], // polski and ślōnskŏ gŏdka
  ph: ['Tan-awa ang uban pa', 'Tumingin pa'], // cebuano and filipino
  pk: ['مزید دیکھیں'], // urdu
  py: ['Ehechave'], // Guarani
  ru: ['Ещё'], // Russian 
  rw: ['Kureba ibindi'], // Kinyarwanda
  Ro: ['Vezi mai mult'], // Romana
  sa: ['Sighi a lèghere', 'عرض المزيد'], // Sardu, Arabic
  se: ['Visa mer'], // Svenska
  si: ['Prikaži več'], // Slovenia
  sk: ['Zobraziť viac'], // Slovakia
  so: ['Wax badan arag'], // Somali
  sr: ['Прикажи још'], // Serbian
  th: ['ดูเพิ่มเติม'], // Thai
  tj: ['Бештар дидан'], // Тоҷикӣ
  tr: ['Daha fazlasını gör'], // Turkce
  ua: ['Більше'], // Ukrainian
  uz: ['Yana'], // Uzbekish
  sw: ['Tazama zaidi'], // Kiswahili
  tw: ['查看更多'], // Taiwan
  vi: ['Xem thêm'], // Vietnamese
  za: ['Wys meer'], // Afrikaans
  zw: ['Ona zvimwe'], // Shona
};

/**
 * A flattened array of all supported "See more" phrases.
 * This allows the extension to work across multiple languages 
 * simultaneously without needing to detect the user's locale.
 */
const SEE_MORE_VARIANTS = new Set(Object.values(TRANSLATIONS).flat());
