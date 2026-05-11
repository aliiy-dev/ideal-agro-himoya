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
  image: string;                      // primary image (used in cards)
  images?: string[];                  // optional gallery (detail page)
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
  imgs?: string[];   // additional gallery images
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
    images: input.imgs,
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
  // ================== Biostimulyatorlar ==================
  p({
    id: 'fulvic-plus', name: 'FULVIC PLUS', categorySlug: 'biostimulyatorlar',
    image: '/images/products/fulvic-plus-front.jpg',
    imgs: ['/images/products/fulvic-plus-front.jpg', '/images/products/fulvic-plus-back.jpg', '/images/products/fulvic-plus.jpg'],
    price: 0, stock: 100, featured: true, createdAt: t(60),
    ai: 'Fulvik kislota 40–50% | Humik kislota 50–60% | K₂O 12% | TE 3%',
    pkg: '1 kg / 25 kg',
    desc: {
      uz: "Kimyoviy tarkibi: Fulvik kislota 40–50%, Humik kislota 50–60%, Kali (K₂O) 12%, TE (N,P,S,Ca,Mg,Zn,B,Se,Mo,Fe) 3%. Xususiyatlari: 100% Suvda eriydi, 100% Organik + tabiy, 100% Hamma ekinlar uchun muvofiq.",
      kr: "Кимёвий таркиби: Фулвик кислота 40–50%, Ҳумик кислота 50–60%, Кали (К₂О) 12%, ТЕ (N,P,S,Ca,Mg,Zn,B,Se,Mo,Fe) 3%. Хусусиятлари: 100% Сувда эрийди, 100% Органик + табий, 100% Ҳамма экинлар учун мувофиқ.",
      ru: "Химический состав: Фульвокислота 40–50%, Гуминовая кислота 50–60%, Калий (К₂О) 12%, ТЕ (N,P,S,Ca,Mg,Zn,B,Se,Mo,Fe) 3%. Характеристики: 100% водорастворимый, 100% органический + натуральный, 100% подходит для всех культур.",
      en: "Chemical composition: Fulvic acid 40–50%, Humic acid 50–60%, Potassium (K₂O) 12%, TE (N,P,S,Ca,Mg,Zn,B,Se,Mo,Fe) 3%. Properties: 100% water soluble, 100% organic + natural, 100% suitable for all crops.",
    },
    dos: {
      uz: "Bug'doy, arpa: 1–1.5 kg/ga | G'o'za: 1–1.5 kg/ga | Sabzavotlar: 0.5–1 kg/ga | Pomidor, bodring: 1 kg/ga | Piyoz, chesnok: 2 kg/ga | Bog'/sitrus: 1.5–2.5 kg/ga",
      kr: "Буғдой, арпа: 1–1.5 кг/га | Ғўза: 1–1.5 кг/га | Сабзавотлар: 0.5–1 кг/га | Помидор, бодринг: 1 кг/га | Пиёз, чеснок: 2 кг/га | Боғ/ситрус: 1.5–2.5 кг/га",
      ru: "Пшеница, ячмень: 1–1.5 кг/га | Хлопок: 1–1.5 кг/га | Овощи: 0.5–1 кг/га | Помидор, огурец: 1 кг/га | Лук, чеснок: 2 кг/га | Сад/цитрусы: 1.5–2.5 кг/га",
      en: "Wheat, barley: 1–1.5 kg/ha | Cotton: 1–1.5 kg/ha | Vegetables: 0.5–1 kg/ha | Tomato, cucumber: 1 kg/ha | Onion, garlic: 2 kg/ha | Orchard/citrus: 1.5–2.5 kg/ha",
    },
    usg: {
      uz: "Afzalliklari: O'simliklarni stressdan saqlaydi. Sovuq, issiq va qurg'oqchilikda chidamliligni oshiradi. O'simlikni raqbatlantiradi va ishtahasini ochadi. Tuproq unumdorligini oshiradi, changlanishni yaxshilaydi. Xosilni yiriklashtrishda samarali vosita. Bog'lanish: @IdealAgro | +998 95 937 12 12",
      kr: "Афзалликлари: Ўсимликларни стрессдан сақлайди. Совуқ, иссиқ ва қурғоқчиликда чидамлиликни оширади. Ўсимликни рақбатлантиради ва иштаҳасини очади. Тупроқ унумдорлигини оширади. Боғланиш: @IdealAgro | +998 95 937 12 12",
      ru: "Преимущества: Защищает растения от стресса. Повышает устойчивость к холоду, жаре и засухе. Стимулирует растение и повышает его активность. Улучшает плодородие почвы и опыление. Контакт: @IdealAgro | +998 95 937 12 12",
      en: "Benefits: Protects plants from stress. Increases resistance to cold, heat and drought. Stimulates plant growth and appetite. Improves soil fertility and pollination. Effectively increases yield size. Contact: @IdealAgro | +998 95 937 12 12",
    },
  }),
  p({
    id: 'amino-max-80', name: 'AMINO MAX 80%', categorySlug: 'biostimulyatorlar',
    image: '/images/products/amino-max-80.jpg',
    price: 0, stock: 100, featured: true, createdAt: t(58),
    ai: 'Aminokislotalar 80%',
    pkg: '20 kg',
    desc: {
      uz: "80% sof aminokislotalar – yuqori biologik faollik. Qurg'oqchilik, sovuq va kimyoviy stressga qarshi himoya. Hosildorlikni 30% gacha oshirish imkoniyati. Tez singuvchanlik, tabiiy formulalar, barcha ekinlar uchun mos (g'alla, sabzavot, meva, uzum).",
      kr: "80% соф аминокислоталар – юқори биологик фаоллик. Қурғоқчилик, совуқ ва кимёвий стрессга қарши ҳимоя. Ҳосилдорликни 30% гача ошириш имконияти. Тез сингувчанлик, табиий формулалар.",
      ru: "80% чистых аминокислот – высокая биологическая активность. Защита от засухи, холода и химического стресса. Повышение урожайности до 30%. Быстрое усвоение, натуральные формулы, подходит для всех культур (зерно, овощи, фрукты, виноград).",
      en: "80% pure amino acids – high biological activity. Protection against drought, cold and chemical stress. Increases yield by up to 30%. Fast absorption, natural formulas, suitable for all crops (grain, vegetables, fruit, grapes).",
    },
    usg: {
      uz: "Ekinlar 'xafa' bo'lib qolsa, 1 hafta ichida aminokislotali preparat bilan davolab, farqni his eting! Dehqonlar hosili uchun aql-idrok va kuch. Bog'lanish: @IdealAgro | +998 95 937 12 12",
      kr: "Экинлар 'хафа' бўлиб қолса, 1 ҳафта ичида аминокислотали препарат билан даволаб, фарқни ҳис этинг! Боғланиш: @IdealAgro | +998 95 937 12 12",
      ru: "Если растения «заболели», вылечите их за 1 неделю аминокислотным препаратом и почувствуйте разницу! Контакт: @IdealAgro | +998 95 937 12 12",
      en: "If your crops are 'unhappy', treat them with amino acid preparation within 1 week and feel the difference! Contact: @IdealAgro | +998 95 937 12 12",
    },
  }),
  p({
    id: 'khumic-100', name: 'KHUMIC-100', categorySlug: 'ogitlar',
    image: '/images/products/khumic-100.jpg',
    price: 0, stock: 100, featured: true, createdAt: t(56),
    ai: 'Organik modda 70% min | Humik moddalar 80% | K₂O 10%',
    pkg: '25 kg',
    desc: {
      uz: "70% Minimal Organik Modda – tuproqning tuzilishini yaxshilaydi. 80% Humik Moddalar – mineral moddalarni o'zlashtirishni 2 baravar oshiradi. 10% Kaliy (K₂O) – o'simliklarning immunitetini mustahkamlaydi. Barcha ekinlar uchun: g'alla, sabzavot, meva, paxta, hatto urug'likka ham mos.",
      kr: "70% Минимал Органик Модда – тупроқнинг тузилишини яхшилайди. 80% Ҳумик Моддалар – минерал моддаларни ўзлашtirishни 2 баробар оширади. 10% Калий (К₂О) – ўсимликларнинг иммунитетини мустаҳкамлайди.",
      ru: "70% минимальное органическое вещество – улучшает структуру почвы. 80% гуминовые вещества – удваивает усвоение минералов. 10% калий (К₂О) – укрепляет иммунитет растений. Подходит для всех культур: зерно, овощи, фрукты, хлопок.",
      en: "70% min organic matter – improves soil structure. 80% humic substances – doubles mineral uptake. 10% potassium (K₂O) – strengthens plant immunity. Suitable for all crops: grain, vegetables, fruit, cotton.",
    },
    usg: {
      uz: "Asosiy afzalliklar: Tuproqni tiklash – pH ni normallashtiradi, namlikni saqlaydi. O'g'it samaradorligini oshirish – N, P, K ni yaxshi o'zlashtirish. Qurg'oqchilik va kasalliklarga chidamlilik. Hosildorlikni 40% gacha oshirish (ilmiy dalillar bilan tasdiqlangan). Bog'lanish: @IdealAgro | +998 95 937 12 12",
      kr: "Асосий афзалликлар: Тупроқни тиклаш – рН ни нормалlashtiradi, намликни сақлайди. Ўғит самарадорлигини ошириш. Қурғоқчилик ва касалликларга чидамлилик. Ҳосилдорликни 40% гача ошириш. Боғланиш: @IdealAgro | +998 95 937 12 12",
      ru: "Основные преимущества: Восстановление почвы – нормализует pH, сохраняет влагу. Повышение эффективности удобрений – лучшее усвоение N, P, K. Устойчивость к засухе и болезням. Повышение урожайности до 40% (подтверждено научно). Контакт: @IdealAgro | +998 95 937 12 12",
      en: "Key benefits: Soil restoration – normalises pH, retains moisture. Improves fertiliser efficiency – better N, P, K uptake. Drought and disease resistance. Increases yield by up to 40% (scientifically proven). Contact: @IdealAgro | +998 95 937 12 12",
    },
  }),
  p({
    id: 'ideal-pzn', name: 'IDEAL-PZN +AMINO ACID 20%', categorySlug: 'ogitlar',
    image: '/images/products/ideal-pzn-full.jpg',
    imgs: ['/images/products/ideal-pzn-full.jpg', '/images/products/ideal-pzn-field.jpg'],
    price: 0, stock: 100, featured: true, createdAt: t(54),
    ai: 'Fosfor (P) 30% | Rux (Zn) 7% | Aminokislotalar 20% | Azot (N) 3% | pH 4–6',
    pkg: '20 L',
    desc: {
      uz: "Tarkibi: Fosfor (P) 30% – ildizlarni kuchaytiradi, gullashni rag'batlantiradi. Rux (Zn) 7% – yangi hujayralarni o'stirish, kasalliklarga qarshilik. Aminokislotalar 20% – o'simlik stressini kamaytiradi, o'sishni tezlashtiradi. Azot (N) 3% – dastlabki o'sish uchun. pH 4–6 – tuproqda tez so'rilishi uchun optimal. Ishlab chiqaruvchi: Ideal Agro Himoya MCHJ.",
      kr: "Таркиби: Фосфор (P) 30% – илдизларни кучайтиради, гуллашни рағбатлантиради. Рух (Zn) 7% – янги ҳужайраларни ўстириш. Аминокислоталар 20% – ўсимлик стрессини камайтиради. Азот (N) 3%. pH 4–6 – тупроқда тез сўрилиши учун оптимал. Ишлаб чиқарувчи: Ideal Agro Himoya MCHJ.",
      ru: "Состав: Фосфор (P) 30% – укрепляет корни, стимулирует цветение. Цинк (Zn) 7% – рост новых клеток, устойчивость к болезням. Аминокислоты 20% – снижает стресс, ускоряет рост. Азот (N) 3%. pH 4–6 – оптимально для быстрого усвоения. Производитель: Ideal Agro Himoya MCHJ.",
      en: "Composition: Phosphorus (P) 30% – strengthens roots, stimulates flowering. Zinc (Zn) 7% – cell growth and disease resistance. Amino acids 20% – reduces plant stress, accelerates growth. Nitrogen (N) 3%. pH 4–6 – optimal for fast soil absorption. Manufacturer: Ideal Agro Himoya MCHJ.",
    },
    usg: {
      uz: "Afzalliklari: Gullashni 2 barobar oshiradi – ko'proq meva va gul! Ildizlarni 'portlatadi' – o'simliklar quvvatli va barqaror. Qurg'oqchilik va kasalliklarga chidamlilik. O'simliklarni unib chiqishi va ildiz xosil bo'lishini nazorat qiladi. Hosildorlikni yuqori bo'lishini ta'minlaydi. O'simliklarni stress holatidan olib chiqadi. Bog'lanish: @IdealAgro | +998 95 937 12 12",
      kr: "Афзалликлари: Гуллашни 2 баробар оширади. Илдизларни 'портлатади'. Қурғоқчилик ва касалликларга чидамлилик. Ўсимликларни стресс ҳолатидан олиб чиқади. Боғланиш: @IdealAgro | +998 95 937 12 12",
      ru: "Преимущества: Увеличивает цветение в 2 раза. Взрывной рост корней. Устойчивость к засухе и болезням. Выводит растения из стресса. Повышает урожайность. Контакт: @IdealAgro | +998 95 937 12 12",
      en: "Benefits: Doubles flowering – more fruit and flowers! Explosive root growth – strong and stable plants. Drought and disease resistance. Removes plants from stress. Increases yield. Contact: @IdealAgro | +998 95 937 12 12",
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
