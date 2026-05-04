/**
 * Facebook Auto See More - Translations
 * 
 * To add a new language:
 * 1. Add its ISO code (e.g., 'es') as a key. if there are more than 2 countries using the same words, they will be connected using underscores (e.g., 'br_pt'), OR, special iso cases
 * 2. Add the "See more" phrases used by Facebook in that language as an array.
 */

// missing: Esperanto, Corsican, Fula, Gaeigle, Inuktitut, Inupiatun, 

const TRANSLATIONS = {
  en: ['See more', 'See More'],
  // Future expansion example:
  az: ['Əlavə məlumat üçün bax'],
  ba_hr: ['Prikaži više'],
  ca: ['Afficher plus'], // Francais spoken in Canada
  cz: ['Zobrazit víc'], // czech
  da: ['Se mere'], // danish
  de: ['Mehr anzeigen'], // german
  ee: ['Kuva rohkem'], // estonian
  fo: ['Vís meira'], // faroese
  fr: ['En voir plus'], // French
  fr_e: ["Gwelet muioc'h"], // breton
  es: ['Ver más', 'Ver máis'], // spanish and galician
  es_ct: ["Mostra'n més..."],
  eu: ['Gehiago ikusi'], // basque
  gb_wls: ['Gweld Mwy'], // welsh
  br_pt: ['Ver mais'], // portuguese
  id: ['Lihat selengkapnya'], // Indonesian
  is: ['Sjá meira'], // Islenska
  it: ['Altro...'], // Friulian, Italiano
  jv: ['Deleng liyane'], // jav
  ht: ['Wè plis'], // Ayisyen Kreyòl
  my: ['Lihat seterusnya'],
  ng: ['Kalli wasu'], // Hausa
  nl: ['Meer weergeven'], // Frysk
  ph: ['Tan-awa ang uban pa', 'Tumingin pa'], // cebuano and filipino
  py: ['Ehechave'], // Guarani
  rw: ['Kureba ibindi'], // Kinyarwanda
  so: ['Wax badan arag'], // Somali
  sw: ['Tazama zaidi'], // Kiswahili
  tw: ['查看更多'], // Taiwan
  vi: ['Xem thêm'], // Vietnamese
  za: ['Wys meer'], // Afrikaans
};

/**
 * A flattened array of all supported "See more" phrases.
 * This allows the extension to work across multiple languages 
 * simultaneously without needing to detect the user's locale.
 */
const SEE_MORE_VARIANTS = new Set(Object.values(TRANSLATIONS).flat());
