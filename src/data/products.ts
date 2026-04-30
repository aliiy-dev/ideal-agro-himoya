import { Language } from '@/i18n/dictionaries';

export type CategorySlug =
  | 'insektitsidlar'
  | 'fungitsidlar'
  | 'herbitsidlar'
  | 'ogitlar'
  | 'biostimulyatorlar'
  | 'defoliantlar';

export interface Product {
  id: string;
  name: string;                       // Brand name (kept identical across languages)
  categorySlug: CategorySlug;
  image: string;
  price: number;                      // UZS, 0 means "price on request"
  stock: number;                      // available units
  featured?: boolean;
  createdAt: number;                  // for "newest" sort
  description: Record<Language, string>;
  activeIngredient?: string;
  dosage?: Record<Language, string>;
  packaging?: string;
  usage?: Record<Language, string>;
}

export interface CategoryDef {
  slug: CategorySlug;
  emoji: string;
}

export const categoryDefs: CategoryDef[] = [
  { slug: 'insektitsidlar',     emoji: '🦟' },
  { slug: 'fungitsidlar',       emoji: '🍄' },
  { slug: 'herbitsidlar',       emoji: '🌿' },
  { slug: 'ogitlar',            emoji: '🌱' },
  { slug: 'biostimulyatorlar',  emoji: '💧' },
  { slug: 'defoliantlar',       emoji: '🍂' },
];

// Helper: build a product entry with sensible defaults.
function p(input: {
  id: string;
  name: string;
  categorySlug: CategorySlug;
  image: string;
  price: number;
  stock: number;
  featured?: boolean;
  createdAt?: number;
  ai?: string;       // active ingredient
  pkg?: string;      // packaging
  desc: { uz: string; kr: string; ru: string; en: string };
  dos?: { uz: string; kr: string; ru: string; en: string };
  usg?: { uz: string; kr: string; ru: string; en: string };
}): Product {
  return {
    id: input.id,
    name: input.name,
    categorySlug: input.categorySlug,
    image: input.image,
    price: input.price,
    stock: input.stock,
    featured: input.featured,
    createdAt: input.createdAt ?? Date.now(),
    activeIngredient: input.ai,
    packaging: input.pkg,
    description: input.desc,
    dosage: input.dos,
    usage: input.usg,
  };
}

const baseTime = new Date('2025-01-01').getTime();
const t = (offsetDays: number) => baseTime + offsetDays * 86_400_000;

export const seedProducts: Product[] = [
  // ================== Akaritsidlar ==================
  p({
    id: 'flur', name: 'FLUR', categorySlug: 'insektitsidlar',
    image: '/images/products/flur.webp',
    price: 175_000, stock: 84, featured: true, createdAt: t(40),
    ai: 'Spirodiclofen 240 g/l', pkg: '1 L',
    desc: {
      uz: "Keng spektrli akaritsid: barcha rivojlanish bosqichidagi kanalarga kuchli ta'sir qiladi.",
      kr: "Кенг спектрли акарицид: барча ривожланиш босқичидаги каналарга кучли таъсир қилади.",
      ru: 'Акарицид широкого спектра: эффективен на всех стадиях развития клещей.',
      en: 'Broad-spectrum acaricide effective at all mite life stages.',
    },
    dos: { uz: '0.4–0.6 l/ga', kr: '0.4–0.6 л/га', ru: '0.4–0.6 л/га', en: '0.4–0.6 l/ha' },
    usg: {
      uz: 'Olma, paxta, sabzavot ekinlarida vegetatsiya davrida purkash.',
      kr: 'Олма, пахта, сабзавот экинларида вегетация даврида пуркаш.',
      ru: 'Опрыскивание яблони, хлопка, овощей в период вегетации.',
      en: 'Foliar spray on apple, cotton and vegetables during vegetation.',
    },
  }),
  p({
    id: 'ezotoks', name: 'EZOTOKS', categorySlug: 'insektitsidlar',
    image: '/images/products/ezotoks.webp',
    price: 142_000, stock: 56, featured: true, createdAt: t(38),
    ai: 'Abamectin 18 g/l', pkg: '1 L',
    desc: {
      uz: "O'simlik to'qimalariga tez singadigan, kanalarga qarshi samarali preparat.",
      kr: "Ўсимлик тўқималарига тез сингадиган, каналарга қарши самарали препарат.",
      ru: 'Быстро проникающее в ткани растения средство против клещей.',
      en: 'Translaminar acaricide against spider mites and rust mites.',
    },
    dos: { uz: '0.3–0.5 l/ga', kr: '0.3–0.5 л/га', ru: '0.3–0.5 л/га', en: '0.3–0.5 l/ha' },
  }),
  p({
    id: 'ifo-sera', name: 'IFO SERA', categorySlug: 'insektitsidlar',
    image: '/images/products/ifo-sera.webp',
    price: 98_000, stock: 120, createdAt: t(35),
    ai: 'Sulfur 80% WG', pkg: '5 kg',
    desc: {
      uz: "Oltingugurt asosidagi kontakt akaritsid, mikrosfera kukun shakli.",
      kr: "Олтингугурт асосидаги контакт акарицид, микросфера кукун шакли.",
      ru: 'Контактный акарицид на основе серы, микрогранулированный порошок.',
      en: 'Contact sulfur-based acaricide, micronised wettable granules.',
    },
  }),
  p({
    id: 'promayt', name: 'PROMAYT', categorySlug: 'insektitsidlar',
    image: '/images/products/promayt.webp',
    price: 168_000, stock: 42, createdAt: t(34),
    ai: 'Propargite 570 g/l', pkg: '1 L',
    desc: {
      uz: "Professional darajadagi akaritsid, tezkor knock-down ta'siriga ega.",
      kr: "Профессионал даражадаги акарицид, тезкор knock-down таъсирига эга.",
      ru: 'Профессиональный акарицид с быстрым нокаут-эффектом.',
      en: 'Professional acaricide with fast knock-down effect.',
    },
  }),
  p({
    id: 'entosoran', name: 'ENTOSORAN', categorySlug: 'insektitsidlar',
    image: '/images/products/entosoran.webp',
    price: 156_000, stock: 38, createdAt: t(33),
    ai: 'Etoxazole 110 g/l', pkg: '1 L',
    desc: {
      uz: "Tuxum va lichinka bosqichidagi kanalarni yo'q qiluvchi akaritsid.",
      kr: "Тухум ва личинка босқичидаги каналарни йўқ қилувчи акарицид.",
      ru: 'Овицидно-ларвицидное действие против клещей.',
      en: 'Acaricide with strong ovi-larvicidal action against mites.',
    },
  }),

  // ================== Insektitsidlar ==================
  p({
    id: 'entovidor', name: 'ENTOVIDOR', categorySlug: 'insektitsidlar',
    image: '/images/products/entovidor.webp',
    price: 132_000, stock: 95, featured: true, createdAt: t(45),
    ai: 'Imidacloprid 200 g/l SL', pkg: '1 L',
    desc: {
      uz: "Sistemali insektitsid, so'ruvchi va kemiruvchi hasharotlarga qarshi.",
      kr: "Системали инсектицид, сўрувчи ва кемирувчи ҳашаротларга қарши.",
      ru: 'Системный инсектицид против сосущих и грызущих насекомых.',
      en: 'Systemic insecticide against sucking and chewing pests.',
    },
    dos: { uz: '0.2–0.3 l/ga', kr: '0.2–0.3 л/га', ru: '0.2–0.3 л/га', en: '0.2–0.3 l/ha' },
  }),
  p({
    id: 'loader', name: 'LOADER', categorySlug: 'insektitsidlar',
    image: '/images/products/loader.webp',
    price: 178_000, stock: 60, featured: true, createdAt: t(44),
    ai: 'Lambda-cyhalothrin 50 g/l', pkg: '1 L',
    desc: {
      uz: "Keng spektrli piretroid insektitsid, kontakt va oshqozon ta'siriga ega.",
      kr: "Кенг спектрли пиретроид инсектицид, контакт ва ошқозон таъсирига эга.",
      ru: 'Пиретроидный инсектицид широкого спектра контактно-кишечного действия.',
      en: 'Broad-spectrum pyrethroid with contact and stomach action.',
    },
  }),
  p({
    id: 'militar', name: 'MILITAR', categorySlug: 'insektitsidlar',
    image: '/images/products/militar.webp',
    price: 195_000, stock: 47, featured: true, createdAt: t(42),
    ai: 'Chlorantraniliprole 200 g/l', pkg: '1 L',
    desc: {
      uz: "Tunlam, lepidoptera turkumiga qarshi yangi avlod insektitsid.",
      kr: "Тунлам, лепидоптера туркумига қарши янги авлод инсектицид.",
      ru: 'Современный инсектицид против чешуекрылых вредителей.',
      en: 'Next-generation insecticide against lepidoptera pests.',
    },
  }),
  p({
    id: 'in-to', name: 'IN-TO', categorySlug: 'insektitsidlar',
    image: '/images/products/in-to.webp',
    price: 144_000, stock: 70, createdAt: t(40),
    ai: 'Acetamiprid 200 g/kg SP', pkg: '500 g',
    desc: {
      uz: "Innovatsion neonikotinoid, qattiq panjarali so'ruvchilarga qarshi.",
      kr: "Инновацион неоникотиноид, қаттиқ панжарали сўрувчиларга қарши.",
      ru: 'Инновационный неоникотиноид против сосущих вредителей.',
      en: 'Modern neonicotinoid against piercing-sucking pests.',
    },
  }),
  p({
    id: 'ekvador', name: 'EKVADOR', categorySlug: 'insektitsidlar',
    image: '/images/products/ekvador.webp',
    price: 116_000, stock: 88, createdAt: t(39),
    ai: 'Cypermethrin 250 g/l', pkg: '1 L',
    desc: {
      uz: "Tezkor knock-down samarasiga ega kontakt insektitsid.",
      kr: "Тезкор knock-down самарасига эга контакт инсектицид.",
      ru: 'Контактный инсектицид с быстрым нокдаун-эффектом.',
      en: 'Contact insecticide with rapid knock-down effect.',
    },
  }),
  p({
    id: 'demofos', name: 'DEMOFOS', categorySlug: 'insektitsidlar',
    image: '/images/products/demofos.webp',
    price: 89_000, stock: 110, createdAt: t(35),
    ai: 'Dimethoate 400 g/l', pkg: '5 L',
    desc: {
      uz: "Fosforli organik insektitsid, keng diapazonli zararkunandalarga qarshi.",
      kr: "Фосфорли органик инсектицид, кенг диапазонли зараркунандаларга қарши.",
      ru: 'Фосфорорганический инсектицид широкого спектра.',
      en: 'Organophosphate insecticide for broad pest control.',
    },
  }),
  p({
    id: 'ezofoks', name: 'EZOFOKS', categorySlug: 'insektitsidlar',
    image: '/images/products/ezofoks.webp',
    price: 126_000, stock: 64, createdAt: t(34),
    ai: 'Profenofos 500 g/l', pkg: '1 L',
    desc: {
      uz: "Kontakt-oshqozon ta'siriga ega keng spektrli insektitsid.",
      kr: "Контакт-ошқозон таъсирига эга кенг спектрли инсектицид.",
      ru: 'Инсектицид контактно-кишечного действия широкого спектра.',
      en: 'Contact-stomach insecticide with broad activity.',
    },
  }),
  p({
    id: 'protekt-pro', name: 'PROTEKT PRO', categorySlug: 'insektitsidlar',
    image: '/images/products/protekt-pro.webp',
    price: 188_000, stock: 30, createdAt: t(33),
    ai: 'Indoxacarb 150 g/l', pkg: '500 ml',
    desc: {
      uz: "Lepidoptera tunlamlariga qarshi professional himoya vositasi.",
      kr: "Лепидоптера тунламларига қарши профессионал ҳимоя воситаси.",
      ru: 'Профессиональная защита против чешуекрылых.',
      en: 'Professional protection against caterpillar pests.',
    },
  }),
  p({
    id: 'entometrin', name: 'ENTOMETRIN', categorySlug: 'insektitsidlar',
    image: '/images/products/entometrin.webp',
    price: 102_000, stock: 75, createdAt: t(31),
    ai: 'Deltamethrin 25 g/l', pkg: '1 L',
    desc: {
      uz: "Piretroid kontakt insektitsid: paxta, sabzavot va don ekinlarida.",
      kr: "Пиретроид контакт инсектицид: пахта, сабзавот ва дон экинларида.",
      ru: 'Пиретроидный контактный инсектицид для хлопка, овощей и зерновых.',
      en: 'Pyrethroid contact insecticide for cotton, vegetables and cereals.',
    },
  }),
  p({
    id: 'entomektin', name: 'ENTOMEKTIN', categorySlug: 'insektitsidlar',
    image: '/images/products/entomektin.webp',
    price: 134_000, stock: 52, createdAt: t(28),
    ai: 'Emamectin benzoate 50 g/kg', pkg: '500 g',
    desc: {
      uz: "Biologik faollikka ega zamonaviy insektitsid, qoldiq xavfsiz.",
      kr: "Биологик фаолликка эга замонавий инсектицид, қолдиқ хавфсиз.",
      ru: 'Современный инсектицид с биологической активностью и низким остаточным риском.',
      en: 'Biologically active insecticide with low residue risk.',
    },
  }),

  // ================== Fungitsidlar ==================
  p({
    id: 'ifo-tebu', name: 'IFO TEBU', categorySlug: 'fungitsidlar',
    image: '/images/products/ifo-tebu.webp',
    price: 154_000, stock: 78, featured: true, createdAt: t(43),
    ai: 'Tebuconazole 250 g/l', pkg: '1 L',
    desc: {
      uz: "Tebukonazol asosidagi sistemali fungitsid: zang, un-shudring, septoriozlarga qarshi.",
      kr: "Тебуконазол асосидаги системали фунгицид: занг, ун-шудринг, септориозларга қарши.",
      ru: 'Системный фунгицид на основе тебуконазола против ржавчины и мучнистой росы.',
      en: 'Tebuconazole-based systemic fungicide against rust and powdery mildew.',
    },
  }),
  p({
    id: 'aksess', name: 'AKSESS', categorySlug: 'fungitsidlar',
    image: '/images/products/aksess.webp',
    price: 168_000, stock: 56, createdAt: t(40),
    ai: 'Difenoconazole 250 g/l', pkg: '1 L',
    desc: {
      uz: "Sistemali triazol fungitsid: meva, sabzavot va donli ekinlar uchun.",
      kr: "Системали триазол фунгицид: мева, сабзавот ва донли экинлар учун.",
      ru: 'Системный триазольный фунгицид для плодовых, овощных и зерновых.',
      en: 'Systemic triazole fungicide for fruit, vegetables and cereals.',
    },
  }),
  p({
    id: 'mersin', name: 'MERSIN', categorySlug: 'fungitsidlar',
    image: '/images/products/mersin.webp',
    price: 92_000, stock: 130, createdAt: t(38),
    ai: 'Mancozeb 800 g/kg WG', pkg: '5 kg',
    desc: {
      uz: "Kontakt fungitsid: profilaktik himoya vositasi.",
      kr: "Контакт фунгицид: профилактик ҳимоя воситаси.",
      ru: 'Контактный фунгицид для профилактической защиты.',
      en: 'Contact fungicide for preventive protection.',
    },
  }),
  p({
    id: 'ifododin', name: 'IFODODIN', categorySlug: 'fungitsidlar',
    image: '/images/products/ifododin.webp',
    price: 138_000, stock: 44, createdAt: t(34),
    ai: 'Dodine 400 g/l', pkg: '1 L',
    desc: {
      uz: "Olma qoraqotmalari, kashtanlardagi yorug'liklarga qarshi.",
      kr: "Олма қорақотмалари, каштанлардаги ёруғликларга қарши.",
      ru: 'Эффективен против парши яблони и пятнистостей.',
      en: 'Effective against apple scab and leaf-spot diseases.',
    },
  }),
  p({
    id: 'ifo-bordo', name: 'IFO BORDO', categorySlug: 'fungitsidlar',
    image: '/images/products/ifo-bordo.webp',
    price: 64_000, stock: 200, createdAt: t(30),
    ai: 'Copper sulfate + Lime', pkg: '5 kg',
    desc: {
      uz: "Klassik bordo aralashmasi: kuz va bahor ishlovi uchun.",
      kr: "Классик бордо аралашмаси: куз ва баҳор ишлови учун.",
      ru: 'Классическая бордоская смесь для осенней и весенней обработки.',
      en: 'Classic Bordeaux mixture for autumn and spring treatment.',
    },
  }),
  p({
    id: 'krezoksin', name: 'KREZOKSIN', categorySlug: 'fungitsidlar',
    image: '/images/products/krezoksin.webp',
    price: 178_000, stock: 38, createdAt: t(28),
    ai: 'Kresoxim-methyl 500 g/kg', pkg: '500 g',
    desc: {
      uz: "Strobilurin fungitsid: un-shudring va antraknozlarga qarshi.",
      kr: "Стробилурин фунгицид: ун-шудринг ва антракнозларга қарши.",
      ru: 'Стробилуриновый фунгицид против мучнистой росы и антракноза.',
      en: 'Strobilurin fungicide against powdery mildew and anthracnose.',
    },
  }),
  p({
    id: 'fosetal', name: 'FOSETAL', categorySlug: 'fungitsidlar',
    image: '/images/products/fosetal.webp',
    price: 125_000, stock: 60, createdAt: t(25),
    ai: 'Fosetyl-Aluminium 800 g/kg WG', pkg: '5 kg',
    desc: {
      uz: "Sistemali fungitsid: peronospora va fitoftoraga qarshi.",
      kr: "Системали фунгицид: пероноспора ва фитофторага қарши.",
      ru: 'Системный фунгицид против пероноспороза и фитофтороза.',
      en: 'Systemic fungicide against downy mildew and phytophthora.',
    },
  }),
  p({
    id: 'flusil', name: 'FLUSIL', categorySlug: 'fungitsidlar',
    image: '/images/products/flusil.webp',
    price: 184_000, stock: 32, createdAt: t(22),
    ai: 'Flusilazole 250 g/l', pkg: '1 L',
    desc: {
      uz: "Triazol fungitsid: g'alla va meva ekinlarida samarali.",
      kr: "Триазол фунгицид: ғалла ва мева экинларида самарали.",
      ru: 'Триазольный фунгицид для зерновых и плодовых.',
      en: 'Triazole fungicide effective on cereals and fruits.',
    },
  }),
  p({
    id: 'rimida', name: 'RIMIDA', categorySlug: 'fungitsidlar',
    image: '/images/products/rimida.webp',
    price: 162_000, stock: 41, createdAt: t(20),
    ai: 'Azoxystrobin 250 g/l', pkg: '1 L',
    desc: {
      uz: "Universal fungitsid keng spektrli ta'sir bilan.",
      kr: "Универсал фунгицид кенг спектрли таъсир билан.",
      ru: 'Универсальный фунгицид широкого спектра действия.',
      en: 'Universal broad-spectrum fungicide.',
    },
  }),

  // ================== Herbitsidlar ==================
  p({
    id: 'kleton', name: 'KLETON', categorySlug: 'herbitsidlar',
    image: '/images/products/kleton.webp',
    price: 86_000, stock: 140, featured: true, createdAt: t(46),
    ai: 'Clethodim 240 g/l', pkg: '1 L',
    desc: {
      uz: "Bir yillik va ko'p yillik begona o'tlarga qarshi selektiv herbitsid.",
      kr: "Бир йиллик ва кўп йиллик бегона ўтларга қарши селектив гербицид.",
      ru: 'Селективный гербицид против однолетних и многолетних злаковых.',
      en: 'Selective herbicide against annual and perennial grasses.',
    },
  }),
  p({
    id: 'faster-alfa', name: 'FASTER ALFA', categorySlug: 'herbitsidlar',
    image: '/images/products/faster-alfa.webp',
    price: 74_000, stock: 165, createdAt: t(40),
    ai: 'Glyphosate IPA 360 g/l', pkg: '5 L',
    desc: {
      uz: "Tezkor sistemali herbitsid: ekishdan oldin va yo'l yoqalarida.",
      kr: "Тезкор системали гербицид: экишдан олдин ва йўл ёқаларида.",
      ru: 'Системный гербицид для предпосевной обработки и обочин.',
      en: 'Systemic glyphosate herbicide for pre-sowing and roadside use.',
    },
  }),
  p({
    id: 'yokozuna', name: 'YOKOZUNA', categorySlug: 'herbitsidlar',
    image: '/images/products/yokozuna.webp',
    price: 118_000, stock: 48, createdAt: t(36),
    ai: 'Pendimethalin 330 g/l', pkg: '5 L',
    desc: {
      uz: "Vegetatsiyadan oldin tuproq herbitsidi: paxta, sabzavotlar uchun.",
      kr: "Вегетациядан олдин тупроқ гербициди: пахта, сабзавотлар учун.",
      ru: 'Почвенный гербицид довсходовой обработки для хлопка и овощей.',
      en: 'Pre-emergent soil herbicide for cotton and vegetables.',
    },
  }),
  p({
    id: 'kornet-ekstra', name: 'KORNET EKSTRA', categorySlug: 'herbitsidlar',
    image: '/images/products/kornet-ekstra.webp',
    price: 132_000, stock: 33, createdAt: t(33),
    ai: '2,4-D + Dicamba', pkg: '5 L',
    desc: {
      uz: "Don ekinlarida ikki pallali begona o'tlarga qarshi kuchli herbitsid.",
      kr: "Дон экинларида икки палали бегона ўтларга қарши кучли гербицид.",
      ru: 'Гербицид против двудольных сорняков в зерновых.',
      en: 'Herbicide against broadleaf weeds in cereals.',
    },
  }),
  p({
    id: 'entoglifos', name: 'ENTOGLIFOS', categorySlug: 'herbitsidlar',
    image: '/images/products/entoglifos.webp',
    price: 78_000, stock: 175, createdAt: t(31),
    ai: 'Glyphosate 480 g/l', pkg: '20 L',
    desc: {
      uz: "Tezkor glifosat: katta maydonlarda iqtisodiy yechim.",
      kr: "Тезкор глифосат: катта майдонларда иқтисодий ечим.",
      ru: 'Эффективный глифосат для крупных площадей.',
      en: 'Cost-effective glyphosate for large fields.',
    },
  }),
  p({
    id: 'entopik-super', name: 'ENTOPIK SUPER', categorySlug: 'herbitsidlar',
    image: '/images/products/entopik-super.webp',
    price: 140_000, stock: 27, createdAt: t(28),
    ai: 'Quizalofop-P-ethyl 50 g/l', pkg: '1 L',
    desc: {
      uz: "Super kuchli graminitsid: ikki pallalilarni saqlab qoladi.",
      kr: "Супер кучли граминицид: икки палаллиларни сақлаб қолади.",
      ru: 'Супер-эффективный граминицид с сохранением двудольных культур.',
      en: 'High-performance graminicide that spares broadleaf crops.',
    },
  }),

  // ================== O'g'itlar ==================
  p({
    id: 'ento-bor', name: 'ENTO BOR', categorySlug: 'ogitlar',
    image: '/images/products/ento-bor.webp',
    price: 72_000, stock: 200, featured: true, createdAt: t(48),
    ai: 'Boron 11%', pkg: '1 L',
    desc: {
      uz: "Borli barg o'g'iti: gullash va meva tugishida muhim.",
      kr: "Борли барг ўғити: гуллаш ва мева тугишида муҳим.",
      ru: 'Борное листовое удобрение для цветения и завязывания плодов.',
      en: 'Boron foliar fertilizer to support flowering and fruit set.',
    },
  }),
  p({
    id: 'ento-micro', name: 'ENTO MICRO', categorySlug: 'ogitlar',
    image: '/images/products/ento-micro.webp',
    price: 82_000, stock: 160, createdAt: t(46),
    ai: 'Fe + Zn + Mn + Cu', pkg: '1 L',
    desc: {
      uz: "Mikroelementlar kompleksi: o'simlik kasalliklarining oldini oladi.",
      kr: "Микроэлементлар комплекси: ўсимлик касалликларининг олдини олади.",
      ru: 'Комплекс микроэлементов для профилактики дефицитов.',
      en: 'Micronutrient complex preventing deficiency disorders.',
    },
  }),
  p({
    id: 'ifo-seed', name: 'IFO SEED', categorySlug: 'ogitlar',
    image: '/images/products/ifo-seed.webp',
    price: 56_000, stock: 220, createdAt: t(44),
    pkg: '1 L',
    desc: {
      uz: "Urug'larni ekishdan oldin qayta ishlash uchun stimulyator.",
      kr: "Уруғларни экишдан олдин қайта ишлаш учун стимулятор.",
      ru: 'Стимулятор предпосевной обработки семян.',
      en: 'Seed-treatment stimulant for pre-sowing application.',
    },
  }),
  p({
    id: 'ifo-flower', name: 'IFO FLOWER', categorySlug: 'ogitlar',
    image: '/images/products/ifo-flower.webp',
    price: 64_000, stock: 130, createdAt: t(40),
    pkg: '1 L',
    desc: {
      uz: "Gullash davrida qo'llaniladigan maxsus o'g'it.",
      kr: "Гуллаш даврида қўлланиладиган махсус ўғит.",
      ru: 'Специальное удобрение в фазе цветения.',
      en: 'Specialty fertilizer during flowering stage.',
    },
  }),
  p({
    id: 'ifo-gumate-plus', name: 'IFO GUMATE PLUS', categorySlug: 'ogitlar',
    image: '/images/products/ifo-gumate-plus.webp',
    price: 78_000, stock: 145, createdAt: t(36),
    pkg: '5 L',
    desc: {
      uz: "Gumat asosidagi suyuq o'g'it: tuproq tarkibini yaxshilaydi.",
      kr: "Гумат асосидаги суюқ ўғит: тупроқ таркибини яхшилайди.",
      ru: 'Жидкое удобрение на основе гуматов для улучшения почвы.',
      en: 'Humate-based liquid fertilizer that improves soil.',
    },
  }),
  p({
    id: 'hosil-13-40-13-xlor', name: 'HOSIL 13-40-13+TE (Xlor)', categorySlug: 'ogitlar',
    image: '/images/products/hosil-13-40-13-xlor.webp',
    price: 165_000, stock: 70, createdAt: t(33),
    pkg: '25 kg',
    desc: {
      uz: "Yuqori fosforli NPK + mikroelementlar (xlorli kaliy bilan).",
      kr: "Юқори фосфорли NPK + микроэлементлар (хлорли калий билан).",
      ru: 'NPK с высоким содержанием фосфора + микроэлементы (с KCl).',
      en: 'Phosphorus-rich NPK with micronutrients (chloride form).',
    },
  }),
  p({
    id: 'hosil-20-20-20', name: 'HOSIL 20-20-20+TE', categorySlug: 'ogitlar',
    image: '/images/products/hosil-20-20-20.webp',
    price: 158_000, stock: 95, featured: true, createdAt: t(30),
    pkg: '25 kg',
    desc: {
      uz: "Muvozanatli NPK universal o'g'it: vegetatsiya bo'yi qo'llanadi.",
      kr: "Мувозанатли NPK универсал ўғит: вегетация бўйи қўлланади.",
      ru: 'Сбалансированный NPK для применения весь сезон.',
      en: 'Balanced NPK suitable across the entire growing season.',
    },
  }),
  p({
    id: 'hosil-17-7-24', name: 'HOSIL 17-7-24+TE', categorySlug: 'ogitlar',
    image: '/images/products/hosil-17-7-24.webp',
    price: 162_000, stock: 60, createdAt: t(28),
    pkg: '25 kg',
    desc: {
      uz: "Kaliy boy NPK: meva tugish va shakar to'plash davriga mos.",
      kr: "Калий бой NPK: мева тугиш ва шакар тўплаш даврига мос.",
      ru: 'NPK с высоким калием — для фазы налива плодов и сахаронакопления.',
      en: 'High-potassium NPK for fruit-fill and sugar accumulation.',
    },
  }),
  p({
    id: 'hosil-pro-0-40-55', name: 'HOSIL PRO 0-40-55+TE', categorySlug: 'ogitlar',
    image: '/images/products/hosil-pro-0-40-55.webp',
    price: 174_000, stock: 45, createdAt: t(25),
    pkg: '25 kg',
    desc: {
      uz: "Fosfor + kaliyga boy o'g'it: hosil to'planish davri uchun.",
      kr: "Фосфор + калийга бой ўғит: ҳосил тўпланиш даври учун.",
      ru: 'P+K — фосфор и калий для фазы созревания.',
      en: 'High P+K fertilizer for the maturity phase.',
    },
  }),
  p({
    id: 'hosil-13-40-13-xlorsiz', name: 'HOSIL 13-40-13+TE (Xlorsiz)', categorySlug: 'ogitlar',
    image: '/images/products/hosil-13-40-13-xlorsiz.webp',
    price: 174_000, stock: 50, createdAt: t(22),
    pkg: '25 kg',
    desc: {
      uz: "Xlorsiz, fosforli NPK: nozik ekinlar uchun mos.",
      kr: "Хлорсиз, фосфорли NPK: нозик экинлар учун мос.",
      ru: 'Бесхлорный фосфорсодержащий NPK для чувствительных культур.',
      en: 'Chloride-free, phosphorus-rich NPK for chloride-sensitive crops.',
    },
  }),
  p({
    id: 'hosil-18-18-18-xlorsiz', name: 'HOSIL 18-18-18+TE (Xlorsiz)', categorySlug: 'ogitlar',
    image: '/images/products/hosil-18-18-18-xlorsiz.webp',
    price: 168_000, stock: 60, createdAt: t(20),
    pkg: '25 kg',
    desc: {
      uz: "Xlorsiz, muvozanatli NPK: barcha ekin turlari uchun.",
      kr: "Хлорсиз, мувозанатли NPK: барча экин турлари учун.",
      ru: 'Бесхлорный сбалансированный NPK для любых культур.',
      en: 'Chloride-free balanced NPK for any crop.',
    },
  }),
  p({
    id: 'smartfert-n-45-0-1', name: 'SMARTFERT N 45-0-1', categorySlug: 'ogitlar',
    image: '/images/products/smartfert-n-45-0-1.webp',
    price: 96_000, stock: 100, createdAt: t(18),
    pkg: '20 L',
    desc: {
      uz: "Yuqori azotli suyuq o'g'it: tomchilatib sug'orishda samarali.",
      kr: "Юқори азотли суюқ ўғит: томчилатиб суғоришда самарали.",
      ru: 'Жидкое азотное удобрение для капельного полива.',
      en: 'High-N liquid fertilizer for drip irrigation.',
    },
  }),
  p({
    id: 'smartfert-8-21-0', name: 'SMARTFERT 8-21-0+ME', categorySlug: 'ogitlar',
    image: '/images/products/smartfert-8-21-0.webp',
    price: 105_000, stock: 90, createdAt: t(15),
    pkg: '20 L',
    desc: {
      uz: "Suyuq fosforli o'g'it: ildiz tizimi rivojlanishini qo'llab-quvvatlaydi.",
      kr: "Суюқ фосфорли ўғит: илдиз тизими ривожланишини қўллаб-қувватлайди.",
      ru: 'Жидкое фосфорное удобрение для развития корневой системы.',
      en: 'Liquid phosphorus fertilizer supporting root development.',
    },
  }),

  // ================== Biostimulyatorlar ==================
  p({
    id: 'biostim-roots', name: 'BIOSTIM ROOTS', categorySlug: 'biostimulyatorlar',
    image: '/images/products/biostim-roots.webp',
    price: 98_000, stock: 180, featured: true, createdAt: t(50),
    ai: 'Auxin + Cytokinin', pkg: '1 L',
    desc: {
      uz: "Ildizlash va o'sishni rag'batlantiruvchi biostimulator.",
      kr: "Илдизлаш ва ўсишни рағбатлантирувчи биостимулятор.",
      ru: 'Биостимулятор корнеобразования и роста.',
      en: 'Root-forming and growth biostimulant.',
    },
  }),
  p({
    id: 'biostim-flower', name: 'BIOSTIM FLOWER', categorySlug: 'biostimulyatorlar',
    image: '/images/products/biostim-flower.webp',
    price: 115_000, stock: 140, featured: true, createdAt: t(48),
    ai: 'Cytokinin + Gibberellin', pkg: '1 L',
    desc: {
      uz: "Gullashni va meva tugishni kuchaytiruvchi preparat.",
      kr: "Гуллашни ва мева тугишни кучайтирувчи препарат.",
      ru: 'Стимулятор цветения и завязи плодов.',
      en: 'Stimulant for flowering and fruit set.',
    },
  }),
  p({
    id: 'amino-forte', name: 'AMINO FORTE', categorySlug: 'biostimulyatorlar',
    image: '/images/products/amino-forte.webp',
    price: 132_000, stock: 120, createdAt: t(46),
    ai: 'Amino acids 30%', pkg: '1 L',
    desc: {
      uz: "Aminokislotalar asosidagi biostimulator: stressga chidamlilikni oshiradi.",
      kr: "Аминокислоталар асосидаги биостимулятор: стрессга чидамлиликни оширади.",
      ru: 'Аминокислотный биостимулятор: повышает устойчивость к стрессу.',
      en: 'Amino-acid biostimulant: improves stress tolerance.',
    },
  }),
  p({
    id: 'algastim', name: 'ALGASTIM', categorySlug: 'biostimulyatorlar',
    image: '/images/products/algastim.webp',
    price: 88_000, stock: 200, createdAt: t(44),
    ai: 'Seaweed extract 40%', pkg: '1 L',
    desc: {
      uz: "Suv o'tlari ekstrakti asosidagi natural biostimulator.",
      kr: "Сув ўтлари экстракти асосидаги натурал биостимулятор.",
      ru: 'Натуральный биостимулятор на основе экстракта водорослей.',
      en: 'Natural seaweed-extract based biostimulant.',
    },
  }),
  p({
    id: 'humistart', name: 'HUMISTART', categorySlug: 'biostimulyatorlar',
    image: '/images/products/humistart.webp',
    price: 74_000, stock: 250, createdAt: t(42),
    ai: 'Humic + Fulvic acid', pkg: '5 L',
    desc: {
      uz: "Gumat va fulvat kislotalar: tuproq strukturasini yaxshilaydi, hosildorlikni oshiradi.",
      kr: "Гумат ва фулват кислоталар: тупроқ структурасини яхшилайди, ҳосилдорликни оширади.",
      ru: 'Гуминовые и фульвокислоты: улучшают почвенную структуру и урожайность.',
      en: 'Humic & fulvic acids: improve soil structure and raise yields.',
    },
  }),
  // ================== Defoliantlar ==================
  p({
    id: 'genesiss', name: 'GENESISS', categorySlug: 'defoliantlar',
    image: '/images/products/genesiss.webp',
    price: 0, stock: 50, featured: true, createdAt: t(60),
    ai: 'Karfentrazon-etil 200 g/l + Diuron 30 g/l', pkg: '500 ml',
    desc: {
      uz: "Paxta barglarini ko'k holda to'kishini ta'minlovchi kuchli defoliant. Hosil kosachalarining ochilishini tezlashtiradi va bir tekislashtiradi.",
      kr: "Пахта баргларини кўк ҳолда тўкишини таъминловчи кучли дефолиант. Ҳосил косачаларининг очилишини тезлаштиради ва бир текислаштиради.",
      ru: 'Мощный дефолиант, обеспечивающий зелёное опадение листьев хлопка и ускоряющий равномерное раскрытие коробочек.',
      en: 'Powerful cotton defoliant ensuring green-leaf drop and accelerating uniform boll opening.',
    },
    dos: { uz: '500 ml/ga', kr: '500 мл/га', ru: '500 мл/га', en: '500 ml/ha' },
    usg: {
      uz: "Hosil kosachalarining 65% ochilganda, yig'im-terimdan 10–14 kun oldin purkash. Suv sarfi: 20–40 l/ga.",
      kr: "Ҳосил косачаларининг 65% очилганда, йиғим-теримдан 10–14 кун олдин пуркаш. Сув сарфи: 20–40 л/га.",
      ru: "Опрыскивание при открытии 65% коробочек, за 10–14 дней до уборки. Расход воды: 20–40 л/га.",
      en: "Spray when 65% of bolls are open, 10–14 days before harvest. Water volume: 20–40 l/ha.",
    },
  }),
  p({
    id: 'son-final', name: 'SON FINAL', categorySlug: 'defoliantlar',
    image: '/images/products/son-final.webp',
    price: 0, stock: 70, featured: true, createdAt: t(58),
    ai: 'Ethephon 480 g/l + Cyclanilide 60 g/l', pkg: '1 L',
    desc: {
      uz: "Etilengenerator va siklanilid kombinatsiyasi — kosachalar ochilishini jadallashtirib, barglarni tezda to'kishga majbur qiladi.",
      kr: "Этиленгенератор ва сикланилид комбинацияси — косачалар очилишини жадаллаштириб, баргларни тезда тўкишга мажбур қилади.",
      ru: 'Комбинация этиленгенератора и цикланилида — ускоряет раскрытие коробочек и форсирует опадение листьев.',
      en: 'Ethylene-generator and cyclanilide combination — accelerates boll opening and forces rapid leaf drop.',
    },
    dos: { uz: '2 l/ga', kr: '2 л/га', ru: '2 л/га', en: '2 l/ha' },
    usg: {
      uz: "Kosachalarning 25–30% ochilganda purkash. Yomg'ir yog'ishidan 6–8 soat oldin sepmaslik. Yig'im 7 kundan keyin.",
      kr: "Косачаларнинг 25–30% очилганда пуркаш. Ёмғир ёғишидан 6–8 соат олдин сепмаслик. Йиғим 7 кундан кейин.",
      ru: "Опрыскивание при открытии 25–30% коробочек. Не применять за 6–8 часов до дождя. Уборка через 7 дней.",
      en: "Spray when 25–30% of bolls are open. Do not apply 6–8 hours before rain. Harvest after 7 days.",
    },
  }),
  p({
    id: 'efhun', name: 'EFHUN', categorySlug: 'defoliantlar',
    image: '/images/products/efhun.webp',
    price: 0, stock: 90, createdAt: t(56),
    ai: 'Ethephon 480 g/l', pkg: '1 L',
    desc: {
      uz: "Sof etilen asosidagi defoliant — ikkinchi va kech ekilgan paxtada barglarni tezda to'kadi, yig'im-terimni osonlashtiradi.",
      kr: "Соф этилен асосидаги дефолиант — иккинчи ва кеч экилган пахтада баргларни тезда тўкади, йиғим-теримни осонлаштиради.",
      ru: 'Дефолиант на основе чистого этилена — быстро сбрасывает листья на поздних и пересевных посевах хлопчатника.',
      en: 'Pure ethephon defoliant — rapidly drops leaves on second-crop and late-planted cotton.',
    },
    dos: { uz: '3 l/ga', kr: '3 л/га', ru: '3 л/га', en: '3 l/ha' },
    usg: {
      uz: "Kosachalarning 25–30% ochilganda sepish. Issiq kunduzgi soatlarda, nam bargda va yomg'irdan oldin qo'llamaslik.",
      kr: "Косачаларнинг 25–30% очилганда сепиш. Иссиқ кундузги соатларда, нам баргда ва ёмғирдан олдин қўлламаслик.",
      ru: "Применять при раскрытии 25–30% коробочек. Не применять в жаркое время суток, на влажную листву и перед дождём.",
      en: "Apply when 25–30% of bolls are open. Avoid hot hours, wet foliage, and before expected rainfall.",
    },
  }),
  p({
    id: 'baystar', name: 'BAYSTAR', categorySlug: 'defoliantlar',
    image: '/images/products/baystar.webp',
    price: 0, stock: 55, createdAt: t(54),
    ai: 'Thidiazuron 119.75 g/l + Diuron 59.88 g/l', pkg: '1 L',
    desc: {
      uz: "Tidiazuron va diuron kombinatsiyasi — barg poyasi birikmasi ajralishiga ta'sir etib, barglarni ko'k holda to'kadi. Sovuq va issiq havoda ham samarali.",
      kr: "Тидиазурон ва диурон комбинацияси — барг пояси бирикмаси ажралишига таъсир этиб, баргларни кўк ҳолда тўкади. Совуқ ва иссиқ ҳавода ҳам самарали.",
      ru: 'Комбинация тидиазурона и диурона — воздействует на зону отделения черешка, вызывая зелёное опадение. Эффективен в любую погоду.',
      en: 'Thidiazuron + diuron combination — acts on the leaf abscission zone causing green drop. Effective in both cool and hot weather.',
    },
    dos: { uz: '600 ml/ga', kr: '600 мл/га', ru: '600 мл/га', en: '600 ml/ha' },
    usg: {
      uz: "Paxta yig'im-terimidan 10–14 kun oldin purkash. 24 soat ichida yomg'ir yog'sa qaytadan sepish tavsiya etiladi.",
      kr: "Пахта йиғим-теримидан 10–14 кун олдин пуркаш. 24 соат ичида ёмғир ёғса қайтадан сепиш тавсия этилади.",
      ru: "Опрыскивание за 10–14 дней до уборки хлопка. При дожде в течение 24 ч рекомендуется повторная обработка.",
      en: "Apply 10–14 days before cotton harvest. Reapply if rain falls within 24 hours.",
    },
  }),
  p({
    id: 'ento-defol', name: 'ENTO DEFOL', categorySlug: 'defoliantlar',
    image: '/images/products/ento-defol.webp',
    price: 0, stock: 65, createdAt: t(52),
    ai: 'Tidiazuron 36% + Diuron 18%', pkg: '1 L / 5 L',
    desc: {
      uz: "O'zbekistonda ishlab chiqarilgan: 12 soat ichida bargga singib, 2–4 kun ichida ko'rinadigan natija beradi. Yangi barg hosil bo'lishining oldini oladi.",
      kr: "Ўзбекистонда ишлаб чиқарилган: 12 соат ичида баргга сингиб, 2–4 кун ичида кўринадиган натижа беради. Янги барг ҳосил бўлишининг олдини олади.",
      ru: 'Производство Узбекистан: проникает в лист за 12 часов, видимый эффект через 2–4 дня. Предотвращает отрастание новых листьев.',
      en: "Manufactured in Uzbekistan: penetrates leaf within 12 hours, visible effect in 2–4 days. Prevents new leaf growth.",
    },
    dos: { uz: '0.1–0.2 kg/ga', kr: '0.1–0.2 кг/га', ru: '0.1–0.2 кг/га', en: '0.1–0.2 kg/ha' },
    usg: {
      uz: "Kosachalarning 40–45% ochilganda purkash. O'rta tolali paxta navlari uchun.",
      kr: "Косачаларнинг 40–45% очилганда пуркаш. Ўрта толали пахта навлари учун.",
      ru: "Применять при раскрытии 40–45% коробочек. Для средневолокнистых сортов хлопчатника.",
      en: "Spray when 40–45% of bolls are open. For medium-staple cotton varieties.",
    },
  }),
  p({
    id: 'siklodefol', name: 'SIKLODEFOL', categorySlug: 'defoliantlar',
    image: '/images/products/siklodefol.webp',
    price: 0, stock: 80, createdAt: t(50),
    ai: 'Ethephon 72%', pkg: '1 L / 5 L / 20 L',
    desc: {
      uz: "Etilen hosil qiluvchi preparat — kosachalar pishib yetilishini tezlashtiradi va bir tekis ochilishini ta'minlaydi. O'zbekiston ishlab chiqarishi.",
      kr: "Этилен ҳосил қилувчи препарат — косачалар пишиб етилишини тезлаштиради ва бир текис очилишини таъминлайди. Ўзбекистон ишлаб чиқариши.",
      ru: 'Этиленпродуцирующий препарат — ускоряет созревание коробочек и обеспечивает их равномерное раскрытие. Производство Узбекистан.',
      en: 'Ethylene-producing preparation — accelerates boll maturation and ensures uniform opening. Manufactured in Uzbekistan.',
    },
    dos: { uz: '1.5–2.0 l/ga', kr: '1.5–2.0 л/га', ru: '1.5–2.0 л/га', en: '1.5–2.0 l/ha' },
    usg: {
      uz: "Kosachalarning 40–45% ochilganda sepish. Asosan paxta uchun, boshqa ekinlar pishib yetilishini muvofiqlashtirish uchun ham ishlatiladi.",
      kr: "Косачаларнинг 40–45% очилганда сепиш. Асосан пахта учун, бошқа экинлар пишиб етилишини мувофиқлаштириш учун ҳам ишлатилади.",
      ru: "Применять при раскрытии 40–45% коробочек. В основном для хлопка, также для синхронизации созревания других культур.",
      en: "Apply when 40–45% of bolls are open. Primarily for cotton; also used to synchronise ripening of other crops.",
    },
  }),
];

// Deterministic thousands-separated price string.
// We intentionally avoid Intl.NumberFormat because Node and browsers can
// produce different separators (regular vs non-breaking space) for the
// same locale, which triggers React hydration mismatches.
const formatThousands = (n: number): string => {
  const sign = n < 0 ? '-' : '';
  const digits = Math.abs(Math.trunc(n)).toString();
  const groups: string[] = [];
  for (let i = digits.length; i > 0; i -= 3) {
    groups.unshift(digits.slice(Math.max(0, i - 3), i));
  }
  return sign + groups.join(' ');
};

export const fmtPrice = (price: number, lang: Language) => {
  if (!price || price <= 0) return null;
  const suffix = lang === 'en' ? 'UZS' : "so'm";
  return `${formatThousands(price)} ${suffix}`;
};
