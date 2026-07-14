export interface PackingItem {
  name: string;
  note?: string;
}

export interface PackingCategory {
  icon: string;
  title: string;
  items: PackingItem[];
}

export const packingData: PackingCategory[] = [
  {
    icon: "👕",
    title: "Kleding (20°C)",
    items: [
      { name: "Korte broeken", note: "2 stuks" },
      { name: "Lichte lange broek / jeans" },
      { name: "T-shirts", note: "4-5 stuks" },
      { name: "Luchtig shirt / blousje" },
      { name: "Lichte trui of vest", note: "voor 's avonds" },
      { name: "Regenjas of windjack", note: "NL weer blijft NL weer" },
      { name: "Joggingbroek", note: "chillen in het huisje" },
      { name: "Ondergoed", note: "voldoende voor het weekend" },
      { name: "Sokken", note: "meerdere paar" },
      { name: "Pyjama" },
      { name: "Badjas", note: "voor in het huisje" },
      { name: "Sloffen / slippers", note: "binnen" },
      { name: "Sneakers" },
      { name: "Sandalen", note: "als het lekker blijft" },
      { name: "Zwemkleding", note: "voor bad/sauna/zwembad" },
    ],
  },
  {
    icon: "🏠",
    title: "Huisje & bed",
    items: [
      { name: "Bedlakens / dekbedovertrek", note: "check of dit al aanwezig is" },
      { name: "Kussensloop" },
      { name: "Handdoek", note: "douche" },
      { name: "Klein handdoekje", note: "gezicht/handen" },
      { name: "Theedoek" },
      { name: "Plaid / dekentje", note: "voor op de bank" },
      { name: "Sfeerlichtjes of kaarsjes" },
    ],
  },
  {
    icon: "🧸",
    title: "Knuffels & comfort",
    items: [
      { name: "Knuffel(s)", note: "onmisbaar!" },
      { name: "Favoriete kussen" },
      { name: "Warme sokken", note: "voor op de bank" },
      { name: "Boek / tijdschrift" },
      { name: "Anatole" },
      { name: "On that ass" },
    ],
  },
  {
    icon: "🎉",
    title: "Thema-outfit",
    items: [
      { name: '"Nowhere to wear it" thema outfit', note: "hoe gekker hoe beter" },
      { name: "Accessoires bij thema outfit" },
      { name: "Extra tasje voor thema-outfit" },
      { name: "Schoenen die bij het thema passen" },
    ],
  },
  {
    icon: "💄",
    title: "Verzorging & beauty",
    items: [
      { name: "Zonnebrandcrème" },
      { name: "Moisturizer / dagcrème" },
      { name: "Shampoo & conditioner" },
      { name: "Douchegel" },
      { name: "Deodorant" },
      { name: "Tandenborstel & tandpasta" },
      { name: "Haarborstel / kam" },
      { name: "Haarelastiekjes" },
      { name: "Make-up basics" },
      { name: "Make-up remover" },
    ],
  },
  {
    icon: "🩹",
    title: "Gezondheid & EHBO",
    items: [
      { name: "Eigen medicijnen" },
      { name: "Paracetamol / ibuprofen" },
      { name: "Pleisters" },
      { name: "Vitamines" },
      { name: "Reiszakje EHBO" },
      { name: "Zonnebril" },
    ],
  },
  {
    icon: "📱",
    title: "Techniek & gadgets",
    items: [
      { name: "Telefoon + oplader" },
      { name: "Powerbank" },
      { name: "Koptelefoon / oordopjes" },
      { name: "Speaker", note: "voor muziek in het huisje" },
      { name: "Camera", note: "optioneel" },
      { name: "E-reader / boek" },
    ],
  },
  {
    icon: "💼",
    title: "Documenten & geld",
    items: [
      { name: "ID-kaart / paspoort" },
      { name: "Pinpas & creditcard" },
      { name: "Contant geld" },
      { name: "Rijbewijs", note: "als je rijdt" },
    ],
  },
  {
    icon: "🎮",
    title: "Spelletjes & gezelligheid",
    items: [{ name: "Kaartspel / bordspel" }],
  },
  {
    icon: "🚗",
    title: "Auto & onderweg",
    items: [
      { name: "Snacks voor onderweg" },
      { name: "Water / drinkfles" },
      { name: "Muziek / podcast playlist" },
      { name: "Navigatie / adres huisje" },
    ],
  },
];
