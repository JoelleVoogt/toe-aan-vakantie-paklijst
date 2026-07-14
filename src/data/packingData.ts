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
      { name: "Joggingbroek", note: "chillen in het huisje" },
      { name: "Ondergoed", note: "of niet, wat jij wilt ;)" },
      { name: "Sokken", note: "wordt altijd nat in de keuken grrr" },
      { name: "Pyjama" },
      { name: "Sloffen / slippers" },
      { name: "Sneakers" },
      { name: "Sandalen", note: "als het lekker blijft" },
      { name: "Zwemkleding", note: "voor jacuzzi!!!" },
    ],
  },
  {
    icon: "🏠",
    title: "Huisje & bed",
    items: [
      {
        name: "Bedlakens / dekbedovertrek",
      },
      { name: "Kussensloop" },
      { name: "Handdoek", note: "douche" },
      { name: "Theedoek" },
      { name: "Dekentje", note: "voor op de bank" },
      { name: "Discolamp!" },
    ],
  },
  {
    icon: "🧸",
    title: "Knuffels & comfort",
    items: [
      { name: "Knuffel(s)", note: "onmisbaar!" },
      { name: "Warme sokken", note: "voor op de bank" },
      { name: "Boek / tijdschrift" },
      { name: "Anatole" },
      { name: "On that a$$", note: "niet vergeten he Toni!!" },
    ],
  },
  {
    icon: "🎉",
    title: "Thema-outfit",
    items: [
      {
        name: '"Nowhere to wear it" thema outfit',
        note: "eindelijk kan ik dat glitter pak aan!",
      },
      { name: "Accessoires bij thema outfit" },
    ],
  },
  {
    icon: "💄",
    title: "Verzorging & beauty",
    items: [
      { name: "Zonnebrandcrème" },
      { name: "Dagcrème" },
      { name: "Shampoo & conditioner" },
      { name: "Douchegel" },
      { name: "Deodorant" },
      { name: "Tandenborstel & tandpasta" },
      { name: "Scheermesje", note: "Nee toch nie, laat die snor staan!" },
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
      { name: "Speaker", note: "voor muziek in het huisje" },
      { name: "Camera" },
      { name: "Gitaar", note: "for the jams" },
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
    items: [{ name: "Kaartspel / bordspel", note: "Ten minste 6 skull king" }],
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
