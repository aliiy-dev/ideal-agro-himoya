// Translation dictionaries — 4 languages.
// uz = Uzbek (Latin), kr = Uzbek (Cyrillic), ru = Russian, en = English.

export type Language = 'uz' | 'kr' | 'ru' | 'en';

export const LANGUAGES: { code: Language; label: string; short: string; flag: string }[] = [
  { code: 'uz', label: "O'zbekcha",  short: 'UZ', flag: '🇺🇿' },
  { code: 'kr', label: 'Ўзбекча',    short: 'ЎЗ', flag: '🇺🇿' },
  { code: 'ru', label: 'Русский',    short: 'RU', flag: '🇷🇺' },
  { code: 'en', label: 'English',    short: 'EN', flag: '🇬🇧' },
];

export interface Dictionary {
  // Brand
  brandName: string;
  brandTagline: string;

  // Nav
  nav_home: string;
  nav_products: string;
  nav_about: string;
  nav_contact: string;
  nav_cart: string;
  nav_admin: string;

  // Common
  common_search: string;
  common_searchPlaceholder: string;
  common_loading: string;
  common_back: string;
  common_save: string;
  common_cancel: string;
  common_delete: string;
  common_edit: string;
  common_add: string;
  common_yes: string;
  common_no: string;
  common_close: string;
  common_callUs: string;
  common_writeUs: string;
  common_contact: string;
  common_viewAll: string;
  common_learnMore: string;
  common_required: string;
  common_optional: string;
  common_pieces: string;
  common_priceOnRequest: string;
  common_inStock: string;
  common_outOfStock: string;
  common_shareOnTelegram: string;

  // Hero
  hero_eyebrow: string;
  hero_titleLead: string;
  hero_titleAccent: string;
  hero_description: string;
  hero_cta_browse: string;
  hero_cta_call: string;
  hero_badge_quality: string;
  hero_badge_qualityNote: string;
  hero_badge_delivery: string;
  hero_badge_deliveryNote: string;
  hero_categoryPillsTitle: string;
  hero_categoryPillsAll: string;
  hero_visual_yearsValue: string;
  hero_visual_yearsLabel: string;

  // Value props
  value_eyebrow: string;
  value_title: string;
  value_subtitle: string;
  value_quality_title: string;
  value_quality_text: string;
  value_advice_title: string;
  value_advice_text: string;
  value_logistics_title: string;
  value_logistics_text: string;
  value_pricing_title: string;
  value_pricing_text: string;

  // Categories
  categories_eyebrow: string;
  categories_title: string;
  categories_subtitle: string;
  categories_all: string;
  categories_viewAll: string;
  categories_count: (n: number) => string;
  cat_akaritsidlar: string;
  cat_akaritsidlar_desc: string;
  cat_insektitsidlar: string;
  cat_insektitsidlar_desc: string;
  cat_fungitsidlar: string;
  cat_fungitsidlar_desc: string;
  cat_herbitsidlar: string;
  cat_herbitsidlar_desc: string;
  cat_ogitlar: string;
  cat_ogitlar_desc: string;
  cat_biostimulyatorlar: string;
  cat_biostimulyatorlar_desc: string;
  cat_defoliantlar: string;
  cat_defoliantlar_desc: string;

  // Featured
  featured_eyebrow: string;
  featured_title: string;
  featured_subtitle: string;
  featured_cta: string;
  featured_trustBadge: string;
  featured_trust_delivery: string;
  featured_trust_advice: string;
  featured_trust_payment: string;

  // Stats
  stats_farmers: string;
  stats_products: string;
  stats_regions: string;
  stats_experience: string;
  stats_founded: string;
  stats_eyebrow: string;
  stats_title: string;
  stats_farmersNote: string;
  stats_productsNote: string;
  stats_experienceNote: string;

  // About teaser
  about_eyebrow: string;
  about_title: string;
  about_lead: string;
  about_bullet_1: string;
  about_bullet_2: string;
  about_bullet_3: string;
  about_bullet_4: string;
  aboutTeaser_deliveryNote: string;

  // CTA strip
  cta_title: string;
  cta_subtitle: string;
  cta_button: string;

  // Process
  process_eyebrow: string;
  process_title: string;
  process_subtitle: string;
  process_step_1_title: string;
  process_step_1_text: string;
  process_step_2_title: string;
  process_step_2_text: string;
  process_step_3_title: string;
  process_step_3_text: string;
  process_step_4_title: string;
  process_step_4_text: string;

  // Testimonials
  testi_eyebrow: string;
  testi_title: string;
  testi_subtitle: string;

  // Products page
  products_pageTitle: string;
  products_pageSubtitle: string;
  products_filter_category: string;
  products_filter_sort: string;
  products_sort_default: string;
  products_sort_priceAsc: string;
  products_sort_priceDesc: string;
  products_sort_nameAsc: string;
  products_sort_newest: string;
  products_resultsLabel: (n: number) => string;
  products_empty_title: string;
  products_empty_text: string;
  products_clearFilters: string;
  products_addToCart: string;
  products_inCart: string;
  products_viewDetails: string;
  products_quickAdd: string;

  // Product detail
  pd_back: string;
  pd_specs: string;
  pd_activeIngredient: string;
  pd_dosage: string;
  pd_packaging: string;
  pd_usage: string;
  pd_safety: string;
  pd_safetyNote: string;
  pd_related: string;
  pd_quantity: string;
  pd_addToCart: string;
  pd_inCart: string;
  pd_buyNow: string;
  pd_contactToOrder: string;
  pd_share: string;

  // Cart
  cart_title: string;
  cart_empty_title: string;
  cart_empty_text: string;
  cart_continueShopping: string;
  cart_summary: string;
  cart_summary_items: string;
  cart_summary_quantity: string;
  cart_summary_total: string;
  cart_checkout: string;
  cart_clear: string;
  cart_remove: string;

  // Checkout
  checkout_title: string;
  checkout_subtitle: string;
  checkout_section_contact: string;
  checkout_section_delivery: string;
  checkout_section_payment: string;
  checkout_field_name: string;
  checkout_field_phone: string;
  checkout_field_email: string;
  checkout_field_region: string;
  checkout_field_address: string;
  checkout_field_note: string;
  checkout_payment_cash: string;
  checkout_payment_cash_desc: string;
  checkout_payment_card: string;
  checkout_payment_card_desc: string;
  checkout_payment_invoice: string;
  checkout_payment_invoice_desc: string;
  checkout_submit: string;
  checkout_terms: string;
  checkout_orderTotal: string;
  checkout_success_title: string;
  checkout_success_text: string;
  checkout_success_orderId: string;

  // About page
  aboutPage_eyebrow: string;
  aboutPage_title: string;
  aboutPage_lead: string;
  aboutPage_mission_title: string;
  aboutPage_mission_text: string;
  aboutPage_history_title: string;
  aboutPage_history_text: string;
  aboutPage_values_title: string;
  aboutPage_value_quality_title: string;
  aboutPage_value_quality_text: string;
  aboutPage_value_service_title: string;
  aboutPage_value_service_text: string;
  aboutPage_value_reach_title: string;
  aboutPage_value_reach_text: string;
  aboutPage_value_assortment_title: string;
  aboutPage_value_assortment_text: string;

  // Contact page
  contactPage_eyebrow: string;
  contactPage_title: string;
  contactPage_lead: string;
  contactPage_form_title: string;
  contactPage_form_name: string;
  contactPage_form_phone: string;
  contactPage_form_message: string;
  contactPage_form_messagePlaceholder: string;
  contactPage_form_submit: string;
  contactPage_form_success_title: string;
  contactPage_form_success_text: string;
  contactPage_info_phone: string;
  contactPage_info_email: string;
  contactPage_info_address: string;
  contactPage_info_addressValue: string;
  contactPage_hours_title: string;
  contactPage_hours_weekdays: string;
  contactPage_hours_saturday: string;
  contactPage_hours_sunday: string;
  contactPage_map_placeholder: string;

  // Footer
  footer_about: string;
  footer_quickLinks: string;
  footer_categoriesTitle: string;
  footer_contact: string;
  footer_follow: string;
  footer_rights: string;
  footer_madeIn: string;

  // Auth & Admin
  admin_login_title: string;
  admin_login_subtitle: string;
  admin_login_username: string;
  admin_login_password: string;
  admin_login_submit: string;
  admin_login_error: string;
  admin_logout: string;
  admin_nav_dashboard: string;
  admin_nav_products: string;
  admin_nav_orders: string;
  admin_nav_settings: string;
  admin_dash_title: string;
  admin_dash_revenue: string;
  admin_dash_orders: string;
  admin_dash_products: string;
  admin_dash_customers: string;
  admin_dash_recentOrders: string;
  admin_dash_lowStock: string;
  admin_products_title: string;
  admin_products_new: string;
  admin_products_search: string;
  admin_products_col_image: string;
  admin_products_col_name: string;
  admin_products_col_category: string;
  admin_products_col_price: string;
  admin_products_col_stock: string;
  admin_products_col_actions: string;
  admin_products_form_new: string;
  admin_products_form_edit: string;
  admin_products_form_name: string;
  admin_products_form_category: string;
  admin_products_form_price: string;
  admin_products_form_stock: string;
  admin_products_form_image: string;
  admin_products_form_description: string;
  admin_products_form_activeIngredient: string;
  admin_products_form_dosage: string;
  admin_products_form_packaging: string;
  admin_products_deleteConfirm: string;
  admin_orders_title: string;
  admin_orders_col_id: string;
  admin_orders_col_customer: string;
  admin_orders_col_phone: string;
  admin_orders_col_total: string;
  admin_orders_col_status: string;
  admin_orders_col_date: string;
  admin_orders_status_new: string;
  admin_orders_status_processing: string;
  admin_orders_status_completed: string;
  admin_orders_status_cancelled: string;
  admin_orders_empty: string;
  admin_settings_title: string;
  admin_settings_changePassword: string;
  admin_settings_currentPassword: string;
  admin_settings_newPassword: string;
  admin_settings_confirmPassword: string;
  admin_settings_save: string;
  admin_settings_passwordChanged: string;
  admin_settings_passwordMismatch: string;

  // Toast
  toast_addedToCart: string;
  toast_removedFromCart: string;
  toast_orderPlaced: string;
  toast_messageSent: string;
}

const dict_uz: Dictionary = {
  brandName: 'Ideal Agro Himoya',
  brandTagline: 'Sifat foydadan ustun',

  nav_home: 'Bosh sahifa',
  nav_products: 'Mahsulotlar',
  nav_about: 'Biz haqimizda',
  nav_contact: 'Aloqa',
  nav_cart: 'Savat',
  nav_admin: 'Boshqaruv',

  common_search: 'Qidirish',
  common_searchPlaceholder: "Mahsulot, kategoriya yoki tarkib bo'yicha qidiring…",
  common_loading: 'Yuklanmoqda…',
  common_back: 'Orqaga',
  common_save: 'Saqlash',
  common_cancel: 'Bekor qilish',
  common_delete: "O'chirish",
  common_edit: 'Tahrirlash',
  common_add: "Qo'shish",
  common_yes: 'Ha',
  common_no: "Yo'q",
  common_close: 'Yopish',
  common_callUs: 'Qo\'ng\'iroq qiling',
  common_writeUs: 'Yozing',
  common_contact: "Bog'lanish",
  common_viewAll: "Hammasini ko'rish",
  common_learnMore: 'Batafsil',
  common_required: 'Majburiy',
  common_optional: 'Ixtiyoriy',
  common_pieces: 'dona',
  common_priceOnRequest: 'Narx kelishiladi',
  common_inStock: 'Sotuvda bor',
  common_outOfStock: 'Tugagan',
  common_shareOnTelegram: 'Telegramda ulashish',

  hero_eyebrow: 'Sifat foydadan ustun',
  hero_titleLead: "O'simliklaringizni",
  hero_titleAccent: 'ishonch bilan himoya qiling',
  hero_description:
    "Akaritsidlar, insektitsidlar, fungitsidlar, herbitsidlar va o'g'itlar — fermerlar uchun sertifikatlangan agro-himoya tizimi.",
  hero_cta_browse: 'Katalogni ochish',
  hero_cta_call: "Qo'ng'iroq qilish",
  hero_badge_quality: '100%',
  hero_badge_qualityNote: 'Sertifikatlangan sifat',
  hero_badge_delivery: 'Tez yetkazish',
  hero_badge_deliveryNote: "Butun O'zbekiston bo'ylab",
  hero_categoryPillsTitle: 'Mahsulot kategoriyalari',
  hero_categoryPillsAll: 'Barchasi',
  hero_visual_yearsValue: '6+ yil',
  hero_visual_yearsLabel: 'Tajriba',

  value_eyebrow: 'Nega Ideal Agro Himoya',
  value_title: 'Hosildor mavsum uchun ishonchli yondoshuv',
  value_subtitle:
    "Biz fermerlarga shunchaki preparat sotmaymiz — biz tajriba, mas'uliyat va natijalar bilan ishlaymiz.",
  value_quality_title: 'Laboratoriya nazorati',
  value_quality_text:
    "Har bir partiya kelishilgan sifat standartlari bo'yicha laboratoriya tahlilidan o'tadi.",
  value_advice_title: 'Agronom maslahati',
  value_advice_text:
    "Buyurtma berishdan oldin va keyin agronomlarimiz dala holatiga qarab sxema beradi.",
  value_logistics_title: 'Tez yetkazib berish',
  value_logistics_text:
    "Toshkentdan Qoraqalpog'istongacha — 24-72 soat ichida buyurtmangizni qabul qilasiz.",
  value_pricing_title: "Qulay to'lov usuli",
  value_pricing_text:
    "Naqd pul, bank o'tkazmasi yoki muddatli to'lov — siz uchun qulay usulda.",

  categories_eyebrow: 'Kategoriyalar',
  categories_title: 'Har bir muammoga aniq yechim',
  categories_subtitle:
    "Ekinlaringiz uchun zarur preparatni kategoriya bo'yicha tezda toping.",
  categories_all: 'Barcha mahsulotlar',
  categories_viewAll: "Barcha mahsulotlarni ko'rish",
  categories_count: (n) => `${n} ta mahsulot`,
  cat_akaritsidlar: 'Akaritsidlar',
  cat_akaritsidlar_desc: 'Kanalarga qarshi maxsus preparatlar',
  cat_insektitsidlar: 'Insektitsidlar',
  cat_insektitsidlar_desc: "Hasharotlardan kompleks himoya",
  cat_fungitsidlar: 'Fungitsidlar',
  cat_fungitsidlar_desc: "Zamburug'li kasalliklarga qarshi",
  cat_herbitsidlar: 'Gerbitsidlar',
  cat_herbitsidlar_desc: "Begona o'tlarga qarshi yechimlar",
  cat_ogitlar: "Kompleks o'g'itlar",
  cat_ogitlar_desc: "NPK va mikroelementlar",
  cat_biostimulyatorlar: 'Stimulyatorlar',
  cat_biostimulyatorlar_desc: "O'simlikni rivojlantiruvchi preparatlar",
  cat_defoliantlar: 'Defolant',
  cat_defoliantlar_desc: "G'o'za bargini to'kishga yordam beradi",

  featured_eyebrow: 'Top tanlov',
  featured_title: 'Fermerlar tez-tez sotib oladigan mahsulotlar',
  featured_subtitle:
    'Ushbu preparatlar so\'nggi mavsumda eng ko\'p sotib olinadi va dalalardan ijobiy natijalarga ega.',
  featured_cta: "Barcha mahsulotlarni ko'rish",
  featured_trustBadge: "Sertifikatlangan mahsulotlar",
  featured_trust_delivery: "Tez yetkazib berish",
  featured_trust_advice: "Agronom maslahati bepul",
  featured_trust_payment: "Qulay to'lov shartlari",

  stats_farmers: 'Fermer mijozlar',
  stats_products: 'Mahsulot',
  stats_regions: 'Viloyat',
  stats_experience: 'Yillik tajriba',
  stats_founded: 'Tashkil topgan yil',
  stats_eyebrow: 'Raqamlarda',
  stats_title: "Natijalar o'z so'zini aytadi",
  stats_farmersNote: "O'zbekiston bo'ylab",
  stats_productsNote: "Khumic brendidan",
  stats_experienceNote: "Yillik tajriba",

  about_eyebrow: 'Biz haqimizda',
  about_title: 'Sifat — biz uchun mas\'uliyat',
  about_lead:
    "Ideal Agro Himoya O'zbekistonda agronomiya va kimyo sohasida birgalikda ishlaydigan jamoa tomonidan asoslangan kompaniya. Maqsadimiz — fermer xo'jaligini xavfsiz, samarali va tushunarli qilish.",
  about_bullet_1: "Sertifikatlangan, sinovdan o'tgan preparatlar",
  about_bullet_2: 'Doimiy agronom maslahati',
  about_bullet_3: "Butun O'zbekiston bo'ylab tez yetkazib berish",
  about_bullet_4: "Qulay narx va shaffof shartlar",
  aboutTeaser_deliveryNote: "O'zbekiston bo'ylab yetkazib beramiz",

  cta_title: "Ekinlaringizni bugun himoyalang",
  cta_subtitle: "Mutaxassislarimiz qo'ng'iroqdan keyin sizga eng mos sxemani tavsiya qiladi.",
  cta_button: "Bog'lanish",

  process_eyebrow: 'Qanday ishlaymiz',
  process_title: '4 qadamda — buyurtmadan natijaga qadar',
  process_subtitle: 'Hammasi oddiy: tanlang, tasdiqlang, yetkazib bering, ishlating.',
  process_step_1_title: 'Tanlovga konsultatsiya',
  process_step_1_text: "Agronom siz bilan ekin va muammoni aniqlaydi.",
  process_step_2_title: "Buyurtma rasmiylashtirish",
  process_step_2_text: 'Saytda yoki telefon orqali — sizga qulay tarzda.',
  process_step_3_title: 'Tez yetkazish',
  process_step_3_text: "Hudud va miqdorga qarab 1-3 kun ichida.",
  process_step_4_title: 'Dalada qo\'llab-quvvatlash',
  process_step_4_text: "Qo'llashda savol tug'ilsa — biz onlayn yordam beramiz.",

  testi_eyebrow: 'Mijozlarimiz',
  testi_title: 'Fermerlar Ideal Agro Himoya haqida',
  testi_subtitle: "Bizga ishongan xo'jaliklarning haqiqiy fikrlari.",

  products_pageTitle: 'Mahsulotlar katalogi',
  products_pageSubtitle: "O'simliklarni himoya qilish vositalari va o'g'itlarning to'liq ro'yxati.",
  products_filter_category: 'Kategoriyalar',
  products_filter_sort: 'Saralash',
  products_sort_default: 'Tavsiya etilgan',
  products_sort_priceAsc: 'Arzondan qimmatga',
  products_sort_priceDesc: 'Qimmatdan arzonga',
  products_sort_nameAsc: 'Nomi (A→Z)',
  products_sort_newest: 'Yangi qo\'shilganlari',
  products_resultsLabel: (n) => `${n} ta mahsulot topildi`,
  products_empty_title: 'Mahsulot topilmadi',
  products_empty_text: "Filtrlarni o'zgartiring yoki boshqa so'z bilan qidiring.",
  products_clearFilters: 'Filtrlarni tozalash',
  products_addToCart: "Savatga qo'shish",
  products_inCart: 'Savatda',
  products_viewDetails: 'Batafsil',
  products_quickAdd: "Tez qo'shish",

  pd_back: 'Katalogga qaytish',
  pd_specs: 'Texnik tavsifi',
  pd_activeIngredient: 'Faol modda',
  pd_dosage: "Sarflash me'yori",
  pd_packaging: "O'rami",
  pd_usage: "Qo'llash",
  pd_safety: 'Xavfsizlik',
  pd_safetyNote:
    "Preparatdan foydalanishda himoya kiyimi va respirator taqing, qadoqdagi yo'riqnomaga rioya qiling.",
  pd_related: "O'xshash mahsulotlar",
  pd_quantity: 'Miqdor',
  pd_addToCart: "Savatga qo'shish",
  pd_inCart: 'Savatda',
  pd_buyNow: 'Hozir buyurtma berish',
  pd_contactToOrder: "Buyurtma berish uchun bog'laning",
  pd_share: 'Ulashish',

  cart_title: 'Savatcha',
  cart_empty_title: "Savatingiz bo'sh",
  cart_empty_text: "Mahsulotlarni ko'rib chiqing va savatga qo'shing.",
  cart_continueShopping: 'Xaridni davom ettirish',
  cart_summary: 'Buyurtma xulosasi',
  cart_summary_items: 'Mahsulotlar soni',
  cart_summary_quantity: 'Umumiy miqdor',
  cart_summary_total: 'Jami',
  cart_checkout: 'Buyurtma berish',
  cart_clear: 'Savatni tozalash',
  cart_remove: "O'chirish",

  checkout_title: "Buyurtmani rasmiylashtirish",
  checkout_subtitle: "Buyurtma ma'lumotlarini to'ldiring.",
  checkout_section_contact: 'Aloqa ma\'lumotlari',
  checkout_section_delivery: 'Yetkazib berish',
  checkout_section_payment: "To'lov usuli",
  checkout_field_name: 'Ism va familiya',
  checkout_field_phone: 'Telefon raqami',
  checkout_field_email: 'Email (ixtiyoriy)',
  checkout_field_region: 'Viloyat / shahar',
  checkout_field_address: 'To\'liq manzil',
  checkout_field_note: "Izoh (ixtiyoriy)",
  checkout_payment_cash: 'Naqd to\'lov',
  checkout_payment_cash_desc: "Yetkazib berishda kuryerga.",
  checkout_payment_card: 'Karta orqali',
  checkout_payment_card_desc: "Click / Payme orqali onlayn to'lov.",
  checkout_payment_invoice: 'Hisob-faktura',
  checkout_payment_invoice_desc: "Yuridik shaxslar uchun pul ko'chirish.",
  checkout_submit: "Buyurtmani tasdiqlash",
  checkout_terms: 'Buyurtma yuborilganda biz siz bilan tasdiq uchun bog\'lanamiz.',
  checkout_orderTotal: "Buyurtma summasi",
  checkout_success_title: 'Buyurtmangiz qabul qilindi!',
  checkout_success_text: "Operatorimiz tez orada siz bilan bog'lanadi.",
  checkout_success_orderId: 'Buyurtma raqami',

  aboutPage_eyebrow: 'Biz haqimizda',
  aboutPage_title: 'Yerga, hosilga va fermerga e\'tibor',
  aboutPage_lead:
    "Ideal Agro Himoya — O'zbekiston fermerlarini sifatli o'simlik himoyasi va o'g'itlar bilan ta'minlovchi zamonaviy kompaniya. Biz har bir mahsulotning samaradorligini dalalarda sinaymiz va xizmatimizni doimiy yaxshilab boramiz.",
  aboutPage_mission_title: 'Bizning maqsadimiz',
  aboutPage_mission_text:
    "Mamlakat bo'ylab fermerlarning hosildorligini oshirish — sifatli preparat, agronom maslahati va qulay narxlar orqali.",
  aboutPage_history_title: 'Tariximiz',
  aboutPage_history_text:
    "Kompaniyamiz 2021-yil 6-iyulda tajribali agronomlar va kimyogarlar tomonidan tashkil etilgan. Andijon shahrida joylashgan bo'lib, butun O'zbekiston bo'ylab faoliyat olib boradi.",
  aboutPage_values_title: 'Bizning qadriyatlarimiz',
  aboutPage_value_quality_title: 'Sifat',
  aboutPage_value_quality_text:
    "Sertifikatlangan preparatlar va laboratoriya nazorati.",
  aboutPage_value_service_title: "Xizmat",
  aboutPage_value_service_text:
    "Buyurtmadan keyin ham siz bilan birgamiz — agronom yordami doim hamroh.",
  aboutPage_value_reach_title: 'Keng tarmoq',
  aboutPage_value_reach_text:
    "Toshkentdan Qoraqalpog'istongacha — butun O'zbekiston bo'ylab yetkazib beramiz.",
  aboutPage_value_assortment_title: 'Keng assortiment',
  aboutPage_value_assortment_text:
    "5 ta kategoriyada 50 dan ortiq preparat va o'g'it.",

  contactPage_eyebrow: 'Aloqa',
  contactPage_title: "Biz bilan bog'laning",
  contactPage_lead:
    "Savollar, hamkorlik takliflari yoki agronom maslahati uchun bizga yozing — operatorimiz tez orada javob beradi.",
  contactPage_form_title: 'Xabar qoldiring',
  contactPage_form_name: 'Ismingiz',
  contactPage_form_phone: 'Telefon raqamingiz',
  contactPage_form_message: 'Xabar matni',
  contactPage_form_messagePlaceholder: 'Qanday yordam kerak?',
  contactPage_form_submit: 'Xabar yuborish',
  contactPage_form_success_title: 'Xabaringiz yuborildi!',
  contactPage_form_success_text: "Tez orada siz bilan bog'lanamiz.",
  contactPage_info_phone: 'Telefon',
  contactPage_info_email: 'Email',
  contactPage_info_address: 'Manzil',
  contactPage_info_addressValue: "Andijon shahri, O'zbekiston",
  contactPage_hours_title: 'Ish vaqti',
  contactPage_hours_weekdays: 'Dushanba — Juma: 09:00 — 18:00',
  contactPage_hours_saturday: 'Shanba: 09:00 — 15:00',
  contactPage_hours_sunday: "Yakshanba: dam olish kuni",
  contactPage_map_placeholder: "Xarita tez orada qo'shiladi",

  footer_about: "O'simliklarni himoya qilish va o'g'itlar — sifat foydadan ustun.",
  footer_quickLinks: 'Tezkor havolalar',
  footer_categoriesTitle: 'Kategoriyalar',
  footer_contact: 'Aloqa',
  footer_follow: 'Bizni kuzating',
  footer_rights: 'Barcha huquqlar himoyalangan.',
  footer_madeIn: "O'zbekistonda yaratildi",

  admin_login_title: "Boshqaruv paneli",
  admin_login_subtitle: "Saytni boshqarish uchun tizimga kiring.",
  admin_login_username: 'Foydalanuvchi nomi',
  admin_login_password: 'Parol',
  admin_login_submit: 'Kirish',
  admin_login_error: 'Foydalanuvchi nomi yoki parol noto\'g\'ri.',
  admin_logout: 'Chiqish',
  admin_nav_dashboard: 'Boshqaruv paneli',
  admin_nav_products: 'Mahsulotlar',
  admin_nav_orders: 'Buyurtmalar',
  admin_nav_settings: 'Sozlamalar',
  admin_dash_title: 'Umumiy holat',
  admin_dash_revenue: "Daromad",
  admin_dash_orders: 'Buyurtmalar',
  admin_dash_products: 'Mahsulotlar',
  admin_dash_customers: 'Mijozlar',
  admin_dash_recentOrders: "So'nggi buyurtmalar",
  admin_dash_lowStock: 'Kam qolgan mahsulotlar',
  admin_products_title: "Mahsulotlar ro'yxati",
  admin_products_new: "Yangi mahsulot qo'shish",
  admin_products_search: 'Mahsulot qidirish…',
  admin_products_col_image: 'Rasm',
  admin_products_col_name: 'Nomi',
  admin_products_col_category: 'Kategoriya',
  admin_products_col_price: 'Narx',
  admin_products_col_stock: 'Zaxira',
  admin_products_col_actions: 'Amallar',
  admin_products_form_new: "Yangi mahsulot qo'shish",
  admin_products_form_edit: 'Mahsulotni tahrirlash',
  admin_products_form_name: 'Nomi',
  admin_products_form_category: 'Kategoriya',
  admin_products_form_price: 'Narx (so\'m)',
  admin_products_form_stock: 'Zaxira (dona)',
  admin_products_form_image: 'Rasm URL',
  admin_products_form_description: 'Tavsif',
  admin_products_form_activeIngredient: 'Faol modda',
  admin_products_form_dosage: "Sarflash me'yori",
  admin_products_form_packaging: "O'rami",
  admin_products_deleteConfirm: "Ushbu mahsulotni o'chirishga ishonchingiz komilmi?",
  admin_orders_title: 'Buyurtmalar',
  admin_orders_col_id: 'Raqam',
  admin_orders_col_customer: 'Mijoz',
  admin_orders_col_phone: 'Telefon',
  admin_orders_col_total: 'Summasi',
  admin_orders_col_status: 'Holati',
  admin_orders_col_date: 'Sana',
  admin_orders_status_new: 'Yangi',
  admin_orders_status_processing: "Jarayonda",
  admin_orders_status_completed: 'Yakunlangan',
  admin_orders_status_cancelled: 'Bekor qilingan',
  admin_orders_empty: "Hali buyurtmalar yo'q.",
  admin_settings_title: 'Sozlamalar',
  admin_settings_changePassword: "Parolni o'zgartirish",
  admin_settings_currentPassword: 'Joriy parol',
  admin_settings_newPassword: 'Yangi parol',
  admin_settings_confirmPassword: 'Yangi parolni tasdiqlang',
  admin_settings_save: 'Saqlash',
  admin_settings_passwordChanged: "Parol muvaffaqiyatli o'zgartirildi.",
  admin_settings_passwordMismatch: 'Yangi parollar mos kelmadi.',

  toast_addedToCart: "Savatga qo'shildi",
  toast_removedFromCart: "Savatdan o'chirildi",
  toast_orderPlaced: 'Buyurtma yuborildi',
  toast_messageSent: 'Xabar yuborildi',
};

const dict_kr: Dictionary = {
  brandName: 'Ideal Agro Himoya',
  brandTagline: 'Сифат фойдадан устун',

  nav_home: 'Бош саҳифа',
  nav_products: 'Маҳсулотлар',
  nav_about: 'Биз ҳақимизда',
  nav_contact: 'Алоқа',
  nav_cart: 'Сават',
  nav_admin: 'Бошқарув',

  common_search: 'Қидириш',
  common_searchPlaceholder: "Маҳсулот, категория ёки таркиб бўйича қидиринг…",
  common_loading: 'Юкланмоқда…',
  common_back: 'Орқага',
  common_save: 'Сақлаш',
  common_cancel: 'Бекор қилиш',
  common_delete: "Ўчириш",
  common_edit: 'Таҳрирлаш',
  common_add: "Қўшиш",
  common_yes: 'Ҳа',
  common_no: "Йўқ",
  common_close: 'Ёпиш',
  common_callUs: 'Қўнғироқ қилинг',
  common_writeUs: 'Ёзинг',
  common_contact: "Боғланиш",
  common_viewAll: "Ҳаммасини кўриш",
  common_learnMore: 'Батафсил',
  common_required: 'Мажбурий',
  common_optional: 'Ихтиёрий',
  common_pieces: 'дона',
  common_priceOnRequest: 'Нарх келишилади',
  common_inStock: 'Сотувда бор',
  common_outOfStock: 'Тугаган',
  common_shareOnTelegram: 'Телеграмда улашиш',

  hero_eyebrow: 'Сифат фойдадан устун',
  hero_titleLead: "Ўсимликларингизни",
  hero_titleAccent: 'ишонч билан ҳимоя қилинг',
  hero_description:
    "Акарицидлар, инсектицидлар, фунгицидлар, гербицидлар ва ўғитлар — фермерлар учун сертификатланган агро-ҳимоя тизими.",
  hero_cta_browse: 'Каталогни очиш',
  hero_cta_call: "Қўнғироқ қилиш",
  hero_badge_quality: '100%',
  hero_badge_qualityNote: 'Сертификатланган сифат',
  hero_badge_delivery: 'Тез етказиш',
  hero_badge_deliveryNote: "Бутун Ўзбекистон бўйлаб",
  hero_categoryPillsTitle: 'Маҳсулот категориялари',
  hero_categoryPillsAll: 'Барчаси',
  hero_visual_yearsValue: '6+ йил',
  hero_visual_yearsLabel: 'Тажриба',

  value_eyebrow: 'Нега Ideal Agro Himoya',
  value_title: 'Ҳосилдор мавсум учун ишончли ёндошув',
  value_subtitle:
    "Биз фермерларга шунчаки препарат сотмаймиз — биз тажриба, масъулият ва натижалар билан ишлаймиз.",
  value_quality_title: 'Лаборатория назорати',
  value_quality_text:
    "Ҳар бир партия келишилган сифат стандартлари бўйича лаборатория таҳлилидан ўтади.",
  value_advice_title: 'Агроном маслаҳати',
  value_advice_text:
    "Буюртма беришдан олдин ва кейин агрономларимиз дала ҳолатига қараб схема беради.",
  value_logistics_title: 'Тез етказиб бериш',
  value_logistics_text:
    "Тошкентдан Қорақалпоғистонгача — 24-72 соат ичида буюртмангизни қабул қиласиз.",
  value_pricing_title: "Қулай тўлов усули",
  value_pricing_text:
    "Нақд пул, банк ўтказмаси ёки муддатли тўлов — сиз учун қулай усулда.",

  categories_eyebrow: 'Категориялар',
  categories_title: 'Ҳар бир муаммога аниқ ечим',
  categories_subtitle:
    "Экинларингиз учун зарур препаратни категория бўйича тезда топинг.",
  categories_all: 'Барча маҳсулотлар',
  categories_viewAll: "Барча маҳсулотларни кўриш",
  categories_count: (n) => `${n} та маҳсулот`,
  cat_akaritsidlar: 'Акарицидлар',
  cat_akaritsidlar_desc: 'Каналарга қарши махсус препаратлар',
  cat_insektitsidlar: 'Инсектицидлар',
  cat_insektitsidlar_desc: "Ҳашаротлардан комплекс ҳимоя",
  cat_fungitsidlar: 'Фунгицидлар',
  cat_fungitsidlar_desc: "Замбуруғли касалликларга қарши",
  cat_herbitsidlar: 'Гербицидлар',
  cat_herbitsidlar_desc: "Бегона ўтларга қарши ечимлар",
  cat_ogitlar: "Комплекс ўғитлар",
  cat_ogitlar_desc: "NPK ва микроэлементлар",
  cat_biostimulyatorlar: 'Стимуляторлар',
  cat_biostimulyatorlar_desc: "Ўсимликни ривожлантирувчи препаратлар",
  cat_defoliantlar: 'Дефолиант',
  cat_defoliantlar_desc: "Ғўза баргини тўкишга ёрдам беради",

  featured_eyebrow: 'Топ танлов',
  featured_title: 'Фермерлар тез-тез сотиб оладиган маҳсулотлар',
  featured_subtitle:
    "Ушбу препаратлар сўнгги мавсумда энг кўп сотиб олинади ва далалардан ижобий натижаларга эга.",
  featured_cta: "Барча маҳсулотларни кўриш",
  featured_trustBadge: "Сертификатланган маҳсулотлар",
  featured_trust_delivery: "Тез етказиб бериш",
  featured_trust_advice: "Агроном маслаҳати бепул",
  featured_trust_payment: "Қулай тўлов шартлари",

  stats_farmers: 'Фермер мижозлар',
  stats_products: 'Маҳсулот',
  stats_regions: 'Вилоят',
  stats_experience: 'Йиллик тажриба',
  stats_founded: 'Ташкил топган йил',
  stats_eyebrow: 'Рақамларда',
  stats_title: "Натижалар ўз сўзини айтади",
  stats_farmersNote: "Ўзбекистон бўйлаб",
  stats_productsNote: "Khumic брендидан",
  stats_experienceNote: "Йиллик тажриба",

  about_eyebrow: 'Биз ҳақимизда',
  about_title: "Сифат — биз учун масъулият",
  about_lead:
    "Ideal Agro Himoya Ўзбекистонда агрономия ва кимё соҳасида биргаликда ишлайдиган жамоа томонидан асосланган компания. Мақсадимиз — фермер хўжалигини хавфсиз, самарали ва тушунарли қилиш.",
  about_bullet_1: "Сертификатланган, синовдан ўтган препаратлар",
  about_bullet_2: 'Доимий агроном маслаҳати',
  about_bullet_3: "Бутун Ўзбекистон бўйлаб тез етказиб бериш",
  about_bullet_4: "Қулай нарх ва шаффоф шартлар",
  aboutTeaser_deliveryNote: "Ўзбекистон бўйлаб етказиб берамиз",

  cta_title: "Экинларингизни бугун ҳимояланг",
  cta_subtitle: "Мутахассисларимиз қўнғироқдан кейин сизга энг мос схемани тавсия қилади.",
  cta_button: "Боғланиш",

  process_eyebrow: 'Қандай ишлаймиз',
  process_title: '4 қадамда — буюртмадан натижага қадар',
  process_subtitle: 'Ҳаммаси оддий: танланг, тасдиқланг, етказиб беринг, ишлатинг.',
  process_step_1_title: 'Танловга консультация',
  process_step_1_text: "Агроном сиз билан экин ва муаммони аниқлайди.",
  process_step_2_title: "Буюртма расмийлаштириш",
  process_step_2_text: 'Сайтда ёки телефон орқали — сизга қулай тарзда.',
  process_step_3_title: 'Тез етказиш',
  process_step_3_text: "Ҳудуд ва миқдорга қараб 1-3 кун ичида.",
  process_step_4_title: "Далада қўллаб-қувватлаш",
  process_step_4_text: "Қўллашда савол туғилса — биз онлайн ёрдам берамиз.",

  testi_eyebrow: 'Мижозларимиз',
  testi_title: 'Фермерлар Ideal Agro Himoya ҳақида',
  testi_subtitle: "Бизга ишонган хўжаликларнинг ҳақиқий фикрлари.",

  products_pageTitle: 'Маҳсулотлар каталоги',
  products_pageSubtitle: "Ўсимликларни ҳимоя қилиш воситалари ва ўғитларнинг тўлиқ рўйхати.",
  products_filter_category: 'Категориялар',
  products_filter_sort: 'Саралаш',
  products_sort_default: 'Тавсия этилган',
  products_sort_priceAsc: 'Арзондан қимматга',
  products_sort_priceDesc: 'Қимматдан арзонга',
  products_sort_nameAsc: 'Номи (А→Я)',
  products_sort_newest: "Янги қўшилганлари",
  products_resultsLabel: (n) => `${n} та маҳсулот топилди`,
  products_empty_title: 'Маҳсулот топилмади',
  products_empty_text: "Фильтрларни ўзгартиринг ёки бошқа сўз билан қидиринг.",
  products_clearFilters: 'Фильтрларни тозалаш',
  products_addToCart: "Саватга қўшиш",
  products_inCart: 'Саватда',
  products_viewDetails: 'Батафсил',
  products_quickAdd: "Тез қўшиш",

  pd_back: 'Каталогга қайтиш',
  pd_specs: 'Техник тавсифи',
  pd_activeIngredient: 'Фаол модда',
  pd_dosage: "Сарфлаш меъёри",
  pd_packaging: "Ўрами",
  pd_usage: "Қўллаш",
  pd_safety: 'Хавфсизлик',
  pd_safetyNote:
    "Препаратдан фойдаланишда ҳимоя кийими ва респиратор тақинг, қадоқдаги йўриқномага риоя қилинг.",
  pd_related: "Ўхшаш маҳсулотлар",
  pd_quantity: 'Миқдор',
  pd_addToCart: "Саватга қўшиш",
  pd_inCart: 'Саватда',
  pd_buyNow: 'Ҳозир буюртма бериш',
  pd_contactToOrder: "Буюртма бериш учун боғланинг",
  pd_share: 'Улашиш',

  cart_title: 'Сават',
  cart_empty_title: "Саватингиз бўш",
  cart_empty_text: "Маҳсулотларни кўриб чиқинг ва саватга қўшинг.",
  cart_continueShopping: 'Харидни давом эттириш',
  cart_summary: 'Буюртма хулосаси',
  cart_summary_items: 'Маҳсулотлар сони',
  cart_summary_quantity: 'Умумий миқдор',
  cart_summary_total: 'Жами',
  cart_checkout: 'Буюртма бериш',
  cart_clear: 'Саватни тозалаш',
  cart_remove: "Ўчириш",

  checkout_title: "Буюртмани расмийлаштириш",
  checkout_subtitle: "Буюртма маълумотларини тўлдиринг.",
  checkout_section_contact: "Алоқа маълумотлари",
  checkout_section_delivery: 'Етказиб бериш',
  checkout_section_payment: "Тўлов усули",
  checkout_field_name: 'Исм ва фамилия',
  checkout_field_phone: 'Телефон рақами',
  checkout_field_email: 'Email (ихтиёрий)',
  checkout_field_region: 'Вилоят / шаҳар',
  checkout_field_address: "Тўлиқ манзил",
  checkout_field_note: "Изоҳ (ихтиёрий)",
  checkout_payment_cash: "Нақд тўлов",
  checkout_payment_cash_desc: "Етказиб беришда курьерга.",
  checkout_payment_card: 'Карта орқали',
  checkout_payment_card_desc: "Click / Payme орқали онлайн тўлов.",
  checkout_payment_invoice: 'Ҳисоб-фактура',
  checkout_payment_invoice_desc: "Юридик шахслар учун пул кўчириш.",
  checkout_submit: "Буюртмани тасдиқлаш",
  checkout_terms: "Буюртма юборилганда биз сиз билан тасдиқ учун боғланамиз.",
  checkout_orderTotal: "Буюртма суммаси",
  checkout_success_title: 'Буюртмангиз қабул қилинди!',
  checkout_success_text: "Операторимиз тез орада сиз билан боғланади.",
  checkout_success_orderId: 'Буюртма рақами',

  aboutPage_eyebrow: 'Биз ҳақимизда',
  aboutPage_title: "Ерга, ҳосилга ва фермерга эътибор",
  aboutPage_lead:
    "Ideal Agro Himoya — Ўзбекистон фермерларини сифатли ўсимлик ҳимояси ва ўғитлар билан таъминловчи замонавий компания. Биз ҳар бир маҳсулотнинг самарадорлигини далаларда синаймиз ва хизматимизни доимий яхшилаб борамиз.",
  aboutPage_mission_title: 'Бизнинг мақсадимиз',
  aboutPage_mission_text:
    "Мамлакат бўйлаб фермерларнинг ҳосилдорлигини ошириш — сифатли препарат, агроном маслаҳати ва қулай нархлар орқали.",
  aboutPage_history_title: 'Тарихимиз',
  aboutPage_history_text:
    "Компаниямиз 2021-йил 6-июлда тажрибали агрономлар ва кимёгарлар томонидан ташкил этилган. Андижон шаҳрида жойлашган бўлиб, бутун Ўзбекистон бўйлаб фаолият олиб боради.",
  aboutPage_values_title: 'Бизнинг қадриятларимиз',
  aboutPage_value_quality_title: 'Сифат',
  aboutPage_value_quality_text:
    "Сертификатланган препаратлар ва лаборатория назорати.",
  aboutPage_value_service_title: 'Хизмат',
  aboutPage_value_service_text:
    "Буюртмадан кейин ҳам сиз билан биргамиз — агроном ёрдами доим ҳамроҳ.",
  aboutPage_value_reach_title: 'Кенг тармоқ',
  aboutPage_value_reach_text:
    "Тошкентдан Қорақалпоғистонгача — бутун Ўзбекистон бўйлаб etказиб берамиз.",
  aboutPage_value_assortment_title: 'Кенг ассортимент',
  aboutPage_value_assortment_text:
    "5 та категорияда 50 дан ортиқ препарат ва ўғит.",

  contactPage_eyebrow: 'Алоқа',
  contactPage_title: "Биз билан боғланинг",
  contactPage_lead:
    "Саволлар, ҳамкорлик таклифлари ёки агроном маслаҳати учун бизга ёзинг — операторимиз тез орада жавоб беради.",
  contactPage_form_title: 'Хабар қолдиринг',
  contactPage_form_name: 'Исмингиз',
  contactPage_form_phone: 'Телефон рақамингиз',
  contactPage_form_message: 'Хабар матни',
  contactPage_form_messagePlaceholder: 'Қандай ёрдам керак?',
  contactPage_form_submit: 'Хабар юбориш',
  contactPage_form_success_title: 'Хабарингиз юборилди!',
  contactPage_form_success_text: "Тез орада сиз билан боғланамиз.",
  contactPage_info_phone: 'Телефон',
  contactPage_info_email: 'Email',
  contactPage_info_address: 'Манзил',
  contactPage_info_addressValue: "Андижон шаҳри, Ўзбекистон",
  contactPage_hours_title: 'Иш вақти',
  contactPage_hours_weekdays: 'Душанба — Жума: 09:00 — 18:00',
  contactPage_hours_saturday: 'Шанба: 09:00 — 15:00',
  contactPage_hours_sunday: "Якшанба: дам олиш куни",
  contactPage_map_placeholder: "Харита тез орада қўшилади",

  footer_about: "Ўсимликларни ҳимоя қилиш ва ўғитлар — сифат фойдадан устун.",
  footer_quickLinks: 'Тезкор ҳаволалар',
  footer_categoriesTitle: 'Категориялар',
  footer_contact: 'Алоқа',
  footer_follow: 'Бизни кузатинг',
  footer_rights: 'Барча ҳуқуқлар ҳимояланган.',
  footer_madeIn: "Ўзбекистонда яратилди",

  admin_login_title: "Бошқарув панели",
  admin_login_subtitle: "Сайтни бошқариш учун тизимга киринг.",
  admin_login_username: 'Фойдаланувчи номи',
  admin_login_password: 'Парол',
  admin_login_submit: 'Кириш',
  admin_login_error: "Фойдаланувчи номи ёки парол нотўғри.",
  admin_logout: 'Чиқиш',
  admin_nav_dashboard: 'Бошқарув панели',
  admin_nav_products: 'Маҳсулотлар',
  admin_nav_orders: 'Буюртмалар',
  admin_nav_settings: 'Созламалар',
  admin_dash_title: 'Умумий ҳолат',
  admin_dash_revenue: "Даромад",
  admin_dash_orders: 'Буюртмалар',
  admin_dash_products: 'Маҳсулотлар',
  admin_dash_customers: 'Мижозлар',
  admin_dash_recentOrders: "Сўнгги буюртмалар",
  admin_dash_lowStock: 'Кам қолган маҳсулотлар',
  admin_products_title: "Маҳсулотлар рўйхати",
  admin_products_new: "Янги маҳсулот қўшиш",
  admin_products_search: 'Маҳсулот қидириш…',
  admin_products_col_image: 'Расм',
  admin_products_col_name: 'Номи',
  admin_products_col_category: 'Категория',
  admin_products_col_price: 'Нарх',
  admin_products_col_stock: 'Захира',
  admin_products_col_actions: 'Амаллар',
  admin_products_form_new: "Янги маҳсулот қўшиш",
  admin_products_form_edit: "Маҳсулотни таҳрирлаш",
  admin_products_form_name: 'Номи',
  admin_products_form_category: 'Категория',
  admin_products_form_price: "Нарх (сўм)",
  admin_products_form_stock: 'Захира (дона)',
  admin_products_form_image: 'Расм URL',
  admin_products_form_description: 'Тавсиф',
  admin_products_form_activeIngredient: 'Фаол модда',
  admin_products_form_dosage: "Сарфлаш меъёри",
  admin_products_form_packaging: "Ўрами",
  admin_products_deleteConfirm: "Ушбу маҳсулотни ўчиришга ишончингиз комилми?",
  admin_orders_title: 'Буюртмалар',
  admin_orders_col_id: 'Рақам',
  admin_orders_col_customer: 'Мижоз',
  admin_orders_col_phone: 'Телефон',
  admin_orders_col_total: 'Суммаси',
  admin_orders_col_status: 'Ҳолати',
  admin_orders_col_date: 'Сана',
  admin_orders_status_new: 'Янги',
  admin_orders_status_processing: "Жараёнда",
  admin_orders_status_completed: 'Якунланган',
  admin_orders_status_cancelled: 'Бекор қилинган',
  admin_orders_empty: "Ҳали буюртмалар йўқ.",
  admin_settings_title: 'Созламалар',
  admin_settings_changePassword: "Паролни ўзгартириш",
  admin_settings_currentPassword: 'Жорий парол',
  admin_settings_newPassword: 'Янги парол',
  admin_settings_confirmPassword: 'Янги паролни тасдиқланг',
  admin_settings_save: 'Сақлаш',
  admin_settings_passwordChanged: "Парол муваффақиятли ўзгартирилди.",
  admin_settings_passwordMismatch: 'Янги пароллар мос келмади.',

  toast_addedToCart: "Саватга қўшилди",
  toast_removedFromCart: "Саватдан ўчирилди",
  toast_orderPlaced: 'Буюртма юборилди',
  toast_messageSent: 'Хабар юборилди',
};

const dict_ru: Dictionary = {
  brandName: 'Ideal Agro Himoya',
  brandTagline: 'Качество превыше выгоды',

  nav_home: 'Главная',
  nav_products: 'Продукция',
  nav_about: 'О компании',
  nav_contact: 'Контакты',
  nav_cart: 'Корзина',
  nav_admin: 'Управление',

  common_search: 'Поиск',
  common_searchPlaceholder: 'Поиск по названию, категории или составу…',
  common_loading: 'Загрузка…',
  common_back: 'Назад',
  common_save: 'Сохранить',
  common_cancel: 'Отмена',
  common_delete: 'Удалить',
  common_edit: 'Редактировать',
  common_add: 'Добавить',
  common_yes: 'Да',
  common_no: 'Нет',
  common_close: 'Закрыть',
  common_callUs: 'Позвонить',
  common_writeUs: 'Написать',
  common_contact: 'Связаться',
  common_viewAll: 'Смотреть все',
  common_learnMore: 'Подробнее',
  common_required: 'Обязательно',
  common_optional: 'Необязательно',
  common_pieces: 'шт.',
  common_priceOnRequest: 'Цена по запросу',
  common_inStock: 'В наличии',
  common_outOfStock: 'Нет в наличии',
  common_shareOnTelegram: 'Поделиться в Telegram',

  hero_eyebrow: 'Качество превыше выгоды',
  hero_titleLead: 'Защитите ваши растения',
  hero_titleAccent: 'с уверенностью',
  hero_description:
    'Акарициды, инсектициды, фунгициды, гербициды и удобрения — сертифицированная система агрозащиты для фермеров.',
  hero_cta_browse: 'Открыть каталог',
  hero_cta_call: 'Позвонить',
  hero_badge_quality: '100%',
  hero_badge_qualityNote: 'Сертифицированное качество',
  hero_badge_delivery: 'Быстрая доставка',
  hero_badge_deliveryNote: 'По всему Узбекистану',
  hero_categoryPillsTitle: 'Категории продуктов',
  hero_categoryPillsAll: 'Все',
  hero_visual_yearsValue: '6+ лет',
  hero_visual_yearsLabel: 'Опыт',

  value_eyebrow: 'Почему Ideal Agro Himoya',
  value_title: 'Надёжный подход к урожайному сезону',
  value_subtitle:
    'Мы не просто продаём препараты — мы работаем опытом, ответственностью и результатами.',
  value_quality_title: 'Лабораторный контроль',
  value_quality_text: 'Каждая партия проходит лабораторный анализ по согласованным стандартам.',
  value_advice_title: 'Совет агронома',
  value_advice_text:
    'До и после заказа наши агрономы дают схему обработки в зависимости от состояния поля.',
  value_logistics_title: 'Быстрая доставка',
  value_logistics_text:
    'От Ташкента до Каракалпакстана — заказ у вас в течение 24-72 часов.',
  value_pricing_title: 'Удобная оплата',
  value_pricing_text:
    'Наличные, банковский перевод или рассрочка — на удобных для вас условиях.',

  categories_eyebrow: 'Категории',
  categories_title: 'Точное решение для каждой задачи',
  categories_subtitle: 'Быстро находите нужный препарат для своих культур по категории.',
  categories_all: 'Вся продукция',
  categories_viewAll: 'Посмотреть все продукты',
  categories_count: (n) => `${n} продуктов`,
  cat_akaritsidlar: 'Акарициды',
  cat_akaritsidlar_desc: 'Специальные препараты против клещей',
  cat_insektitsidlar: 'Инсектициды',
  cat_insektitsidlar_desc: 'Комплексная защита от насекомых',
  cat_fungitsidlar: 'Фунгициды',
  cat_fungitsidlar_desc: 'Против грибковых заболеваний',
  cat_herbitsidlar: 'Гербициды',
  cat_herbitsidlar_desc: 'Решения против сорняков',
  cat_ogitlar: 'Комплексные удобрения',
  cat_ogitlar_desc: 'NPK и микроэлементы',
  cat_biostimulyatorlar: 'Стимуляторы',
  cat_biostimulyatorlar_desc: 'Препараты для развития растений',
  cat_defoliantlar: 'Дефолиант',
  cat_defoliantlar_desc: 'Способствует опаданию листьев хлопка',

  featured_eyebrow: 'Топ выбор',
  featured_title: 'Продукция, которую фермеры берут чаще всего',
  featured_subtitle:
    'Эти препараты были самыми покупаемыми в прошлом сезоне и зарекомендовали себя на полях.',
  featured_cta: 'Смотреть всю продукцию',
  featured_trustBadge: 'Сертифицированная продукция',
  featured_trust_delivery: 'Быстрая доставка',
  featured_trust_advice: 'Бесплатная консультация агронома',
  featured_trust_payment: 'Удобные условия оплаты',

  stats_farmers: 'Клиентов-фермеров',
  stats_products: 'Продуктов',
  stats_regions: 'Регионов',
  stats_experience: 'Лет опыта',
  stats_founded: 'Год основания',
  stats_eyebrow: 'В цифрах',
  stats_title: 'Результаты говорят сами за себя',
  stats_farmersNote: 'По всему Узбекистану',
  stats_productsNote: 'Бренд Khumic',
  stats_experienceNote: 'Опыт работы',

  about_eyebrow: 'О нас',
  about_title: 'Качество — наша ответственность',
  about_lead:
    'Ideal Agro Himoya — компания, основанная командой агрономов и химиков. Наша цель — сделать сельское хозяйство безопасным, эффективным и понятным.',
  about_bullet_1: 'Сертифицированные, проверенные препараты',
  about_bullet_2: 'Постоянная поддержка агронома',
  about_bullet_3: 'Быстрая доставка по всему Узбекистану',
  about_bullet_4: 'Честная цена и прозрачные условия',
  aboutTeaser_deliveryNote: 'Доставка по всему Узбекистану',

  cta_title: 'Защитите урожай уже сегодня',
  cta_subtitle: 'После звонка наши специалисты предложат вам подходящую схему обработки.',
  cta_button: 'Связаться',

  process_eyebrow: 'Как мы работаем',
  process_title: '4 шага — от заказа до результата',
  process_subtitle: 'Всё просто: выбор, подтверждение, доставка, применение.',
  process_step_1_title: 'Консультация по выбору',
  process_step_1_text: 'Агроном уточняет с вами культуру и проблему.',
  process_step_2_title: 'Оформление заказа',
  process_step_2_text: 'На сайте или по телефону — как удобно.',
  process_step_3_title: 'Быстрая доставка',
  process_step_3_text: 'В зависимости от региона — 1-3 дня.',
  process_step_4_title: 'Поддержка в поле',
  process_step_4_text: 'Возникли вопросы при применении — мы онлайн.',

  testi_eyebrow: 'Наши клиенты',
  testi_title: 'Что фермеры говорят об Ideal Agro Himoya',
  testi_subtitle: 'Реальные отзывы хозяйств, доверившихся нам.',

  products_pageTitle: 'Каталог продукции',
  products_pageSubtitle: 'Полный список средств защиты растений и удобрений.',
  products_filter_category: 'Категории',
  products_filter_sort: 'Сортировка',
  products_sort_default: 'Рекомендуемые',
  products_sort_priceAsc: 'Сначала дешёвые',
  products_sort_priceDesc: 'Сначала дорогие',
  products_sort_nameAsc: 'По названию (А→Я)',
  products_sort_newest: 'Сначала новинки',
  products_resultsLabel: (n) => `Найдено ${n} продуктов`,
  products_empty_title: 'Продукция не найдена',
  products_empty_text: 'Измените фильтры или попробуйте другой запрос.',
  products_clearFilters: 'Сбросить фильтры',
  products_addToCart: 'В корзину',
  products_inCart: 'В корзине',
  products_viewDetails: 'Подробнее',
  products_quickAdd: 'Быстрое добавление',

  pd_back: 'Вернуться в каталог',
  pd_specs: 'Технические характеристики',
  pd_activeIngredient: 'Действующее вещество',
  pd_dosage: 'Норма расхода',
  pd_packaging: 'Упаковка',
  pd_usage: 'Применение',
  pd_safety: 'Безопасность',
  pd_safetyNote:
    'При работе с препаратом используйте средства защиты и респиратор, следуйте инструкциям на упаковке.',
  pd_related: 'Похожая продукция',
  pd_quantity: 'Количество',
  pd_addToCart: 'В корзину',
  pd_inCart: 'В корзине',
  pd_buyNow: 'Заказать сейчас',
  pd_contactToOrder: 'Свяжитесь для заказа',
  pd_share: 'Поделиться',

  cart_title: 'Корзина',
  cart_empty_title: 'Корзина пуста',
  cart_empty_text: 'Просмотрите продукцию и добавьте в корзину.',
  cart_continueShopping: 'Продолжить покупки',
  cart_summary: 'Сводка заказа',
  cart_summary_items: 'Кол-во позиций',
  cart_summary_quantity: 'Общее количество',
  cart_summary_total: 'Итого',
  cart_checkout: 'Оформить заказ',
  cart_clear: 'Очистить корзину',
  cart_remove: 'Удалить',

  checkout_title: 'Оформление заказа',
  checkout_subtitle: 'Заполните данные для оформления заказа.',
  checkout_section_contact: 'Контактные данные',
  checkout_section_delivery: 'Доставка',
  checkout_section_payment: 'Способ оплаты',
  checkout_field_name: 'Имя и фамилия',
  checkout_field_phone: 'Номер телефона',
  checkout_field_email: 'Email (необязательно)',
  checkout_field_region: 'Регион / город',
  checkout_field_address: 'Полный адрес',
  checkout_field_note: 'Комментарий (необязательно)',
  checkout_payment_cash: 'Наличными',
  checkout_payment_cash_desc: 'Курьеру при доставке.',
  checkout_payment_card: 'Картой',
  checkout_payment_card_desc: 'Онлайн через Click / Payme.',
  checkout_payment_invoice: 'По счёту',
  checkout_payment_invoice_desc: 'Перевод для юридических лиц.',
  checkout_submit: 'Подтвердить заказ',
  checkout_terms: 'После отправки заказа мы свяжемся для подтверждения.',
  checkout_orderTotal: 'Сумма заказа',
  checkout_success_title: 'Ваш заказ принят!',
  checkout_success_text: 'Наш оператор скоро свяжется с вами.',
  checkout_success_orderId: 'Номер заказа',

  aboutPage_eyebrow: 'О нас',
  aboutPage_title: 'Внимание к земле, урожаю и фермеру',
  aboutPage_lead:
    'Ideal Agro Himoya — современная компания, обеспечивающая фермеров Узбекистана качественными средствами защиты растений и удобрениями. Мы тестируем эффективность каждого продукта на полях и постоянно улучшаем сервис.',
  aboutPage_mission_title: 'Наша миссия',
  aboutPage_mission_text:
    'Повышать урожайность фермеров по всей стране через качественные препараты, советы агронома и доступные цены.',
  aboutPage_history_title: 'Наша история',
  aboutPage_history_text:
    'Компания основана 6 июля 2021 года опытными агрономами и химиками. Расположена в городе Андижан и работает по всему Узбекистану.',
  aboutPage_values_title: 'Наши ценности',
  aboutPage_value_quality_title: 'Качество',
  aboutPage_value_quality_text: 'Сертифицированные препараты и лабораторный контроль.',
  aboutPage_value_service_title: 'Сервис',
  aboutPage_value_service_text:
    'Мы рядом и после заказа — поддержка агронома всегда с вами.',
  aboutPage_value_reach_title: 'Широкая сеть',
  aboutPage_value_reach_text:
    'От Ташкента до Каракалпакстана — доставка по всему Узбекистану.',
  aboutPage_value_assortment_title: 'Широкий ассортимент',
  aboutPage_value_assortment_text:
    'Более 50 препаратов и удобрений в 5 категориях.',

  contactPage_eyebrow: 'Контакты',
  contactPage_title: 'Свяжитесь с нами',
  contactPage_lead:
    'Напишите нам по любым вопросам, предложениям сотрудничества или для совета агронома — оператор ответит в ближайшее время.',
  contactPage_form_title: 'Оставьте сообщение',
  contactPage_form_name: 'Ваше имя',
  contactPage_form_phone: 'Ваш телефон',
  contactPage_form_message: 'Текст сообщения',
  contactPage_form_messagePlaceholder: 'Чем мы можем помочь?',
  contactPage_form_submit: 'Отправить сообщение',
  contactPage_form_success_title: 'Сообщение отправлено!',
  contactPage_form_success_text: 'Мы свяжемся с вами в ближайшее время.',
  contactPage_info_phone: 'Телефон',
  contactPage_info_email: 'Email',
  contactPage_info_address: 'Адрес',
  contactPage_info_addressValue: 'г. Андижан, Узбекистан',
  contactPage_hours_title: 'Время работы',
  contactPage_hours_weekdays: 'Понедельник — Пятница: 09:00 — 18:00',
  contactPage_hours_saturday: 'Суббота: 09:00 — 15:00',
  contactPage_hours_sunday: 'Воскресенье: выходной',
  contactPage_map_placeholder: 'Карта будет добавлена в ближайшее время',

  footer_about: 'Защита растений и удобрения — качество превыше выгоды.',
  footer_quickLinks: 'Быстрые ссылки',
  footer_categoriesTitle: 'Категории',
  footer_contact: 'Контакты',
  footer_follow: 'Мы в соцсетях',
  footer_rights: 'Все права защищены.',
  footer_madeIn: 'Сделано в Узбекистане',

  admin_login_title: 'Панель управления',
  admin_login_subtitle: 'Войдите, чтобы управлять сайтом.',
  admin_login_username: 'Имя пользователя',
  admin_login_password: 'Пароль',
  admin_login_submit: 'Войти',
  admin_login_error: 'Неверное имя пользователя или пароль.',
  admin_logout: 'Выйти',
  admin_nav_dashboard: 'Панель',
  admin_nav_products: 'Продукция',
  admin_nav_orders: 'Заказы',
  admin_nav_settings: 'Настройки',
  admin_dash_title: 'Общая сводка',
  admin_dash_revenue: 'Выручка',
  admin_dash_orders: 'Заказы',
  admin_dash_products: 'Продукты',
  admin_dash_customers: 'Клиенты',
  admin_dash_recentOrders: 'Последние заказы',
  admin_dash_lowStock: 'Заканчивающиеся товары',
  admin_products_title: 'Список продукции',
  admin_products_new: 'Добавить продукт',
  admin_products_search: 'Поиск продукта…',
  admin_products_col_image: 'Фото',
  admin_products_col_name: 'Название',
  admin_products_col_category: 'Категория',
  admin_products_col_price: 'Цена',
  admin_products_col_stock: 'Остаток',
  admin_products_col_actions: 'Действия',
  admin_products_form_new: 'Добавить продукт',
  admin_products_form_edit: 'Редактировать продукт',
  admin_products_form_name: 'Название',
  admin_products_form_category: 'Категория',
  admin_products_form_price: 'Цена (сум)',
  admin_products_form_stock: 'Остаток (шт.)',
  admin_products_form_image: 'URL изображения',
  admin_products_form_description: 'Описание',
  admin_products_form_activeIngredient: 'Действующее вещество',
  admin_products_form_dosage: 'Норма расхода',
  admin_products_form_packaging: 'Упаковка',
  admin_products_deleteConfirm: 'Удалить этот продукт?',
  admin_orders_title: 'Заказы',
  admin_orders_col_id: 'Номер',
  admin_orders_col_customer: 'Клиент',
  admin_orders_col_phone: 'Телефон',
  admin_orders_col_total: 'Сумма',
  admin_orders_col_status: 'Статус',
  admin_orders_col_date: 'Дата',
  admin_orders_status_new: 'Новый',
  admin_orders_status_processing: 'В работе',
  admin_orders_status_completed: 'Завершён',
  admin_orders_status_cancelled: 'Отменён',
  admin_orders_empty: 'Пока заказов нет.',
  admin_settings_title: 'Настройки',
  admin_settings_changePassword: 'Сменить пароль',
  admin_settings_currentPassword: 'Текущий пароль',
  admin_settings_newPassword: 'Новый пароль',
  admin_settings_confirmPassword: 'Подтверждение пароля',
  admin_settings_save: 'Сохранить',
  admin_settings_passwordChanged: 'Пароль успешно изменён.',
  admin_settings_passwordMismatch: 'Новые пароли не совпадают.',

  toast_addedToCart: 'Добавлено в корзину',
  toast_removedFromCart: 'Удалено из корзины',
  toast_orderPlaced: 'Заказ отправлен',
  toast_messageSent: 'Сообщение отправлено',
};

const dict_en: Dictionary = {
  brandName: 'Ideal Agro Himoya',
  brandTagline: 'Quality over profit',

  nav_home: 'Home',
  nav_products: 'Products',
  nav_about: 'About',
  nav_contact: 'Contact',
  nav_cart: 'Cart',
  nav_admin: 'Admin',

  common_search: 'Search',
  common_searchPlaceholder: 'Search by name, category or active ingredient…',
  common_loading: 'Loading…',
  common_back: 'Back',
  common_save: 'Save',
  common_cancel: 'Cancel',
  common_delete: 'Delete',
  common_edit: 'Edit',
  common_add: 'Add',
  common_yes: 'Yes',
  common_no: 'No',
  common_close: 'Close',
  common_callUs: 'Call us',
  common_writeUs: 'Message us',
  common_contact: 'Contact',
  common_viewAll: 'View all',
  common_learnMore: 'Learn more',
  common_required: 'Required',
  common_optional: 'Optional',
  common_pieces: 'pcs',
  common_priceOnRequest: 'Price on request',
  common_inStock: 'In stock',
  common_outOfStock: 'Out of stock',
  common_shareOnTelegram: 'Share on Telegram',

  hero_eyebrow: 'Quality over profit',
  hero_titleLead: 'Protect your crops',
  hero_titleAccent: 'with confidence',
  hero_description:
    'Acaricides, insecticides, fungicides, herbicides and fertilizers — a certified plant-protection system built for farmers.',
  hero_cta_browse: 'Browse catalog',
  hero_cta_call: 'Call us',
  hero_badge_quality: '100%',
  hero_badge_qualityNote: 'Certified quality',
  hero_badge_delivery: 'Fast delivery',
  hero_badge_deliveryNote: 'Across Uzbekistan',
  hero_categoryPillsTitle: 'Product categories',
  hero_categoryPillsAll: 'All',
  hero_visual_yearsValue: '6+ years',
  hero_visual_yearsLabel: 'Experience',

  value_eyebrow: 'Why Ideal Agro Himoya',
  value_title: 'A reliable partner for a productive season',
  value_subtitle:
    "We don't just sell formulations — we bring expertise, accountability and field-proven results.",
  value_quality_title: 'Lab-tested quality',
  value_quality_text:
    'Every batch goes through laboratory analysis against agreed quality standards.',
  value_advice_title: 'Agronomist advice',
  value_advice_text:
    'Before and after ordering our agronomists prescribe the right schedule for your field.',
  value_logistics_title: 'Fast logistics',
  value_logistics_text:
    'From Tashkent to Karakalpakstan — orders arrive within 24 to 72 hours.',
  value_pricing_title: 'Flexible Payment',
  value_pricing_text:
    'Cash, bank transfer or installment — whichever suits you best.',

  categories_eyebrow: 'Categories',
  categories_title: 'A precise solution for every problem',
  categories_subtitle: 'Find the right product for your crops by category.',
  categories_all: 'All products',
  categories_viewAll: 'View all products',
  categories_count: (n) => `${n} products`,
  cat_akaritsidlar: 'Acaricides',
  cat_akaritsidlar_desc: 'Specialized formulations against mites',
  cat_insektitsidlar: 'Insecticides',
  cat_insektitsidlar_desc: 'Comprehensive insect protection',
  cat_fungitsidlar: 'Fungicides',
  cat_fungitsidlar_desc: 'For fungal diseases',
  cat_herbitsidlar: 'Herbicides',
  cat_herbitsidlar_desc: 'Effective weed control',
  cat_ogitlar: 'Complex Fertilizers',
  cat_ogitlar_desc: 'NPK and micronutrients',
  cat_biostimulyatorlar: 'Stimulators',
  cat_biostimulyatorlar_desc: 'Plant development preparations',
  cat_defoliantlar: 'Defoliant',
  cat_defoliantlar_desc: 'Helps cotton leaf drop',

  featured_eyebrow: 'Top picks',
  featured_title: 'Products farmers buy most often',
  featured_subtitle:
    'These formulations were the most-ordered products of last season with strong field results.',
  featured_cta: 'View full catalog',
  featured_trustBadge: 'Certified products',
  featured_trust_delivery: 'Fast delivery',
  featured_trust_advice: 'Free agronomist consultation',
  featured_trust_payment: 'Convenient payment terms',

  stats_farmers: 'Farmer customers',
  stats_products: 'Products',
  stats_regions: 'Regions',
  stats_experience: 'Years of experience',
  stats_founded: 'Year founded',
  stats_eyebrow: 'In numbers',
  stats_title: 'Results speak for themselves',
  stats_farmersNote: 'Across Uzbekistan',
  stats_productsNote: 'Khumic brand',
  stats_experienceNote: 'Years experience',

  about_eyebrow: 'About us',
  about_title: 'Quality is our responsibility',
  about_lead:
    'Ideal Agro Himoya is a company built by a team of agronomists and chemists. Our mission: make farming safe, effective and easy to understand.',
  about_bullet_1: 'Certified, field-tested products',
  about_bullet_2: 'Continuous agronomic support',
  about_bullet_3: 'Fast delivery across Uzbekistan',
  about_bullet_4: 'Fair pricing and transparent terms',
  aboutTeaser_deliveryNote: 'Delivery across Uzbekistan',

  cta_title: 'Protect your crops today',
  cta_subtitle: 'Our specialists will recommend the right schedule after a quick call.',
  cta_button: 'Get in touch',

  process_eyebrow: 'How we work',
  process_title: 'From order to harvest in four steps',
  process_subtitle: 'Pick, confirm, deliver, apply — that is it.',
  process_step_1_title: 'Consultation',
  process_step_1_text: 'An agronomist clarifies your crop and the issue.',
  process_step_2_title: 'Place your order',
  process_step_2_text: 'On the website or by phone — whichever is easier.',
  process_step_3_title: 'Fast delivery',
  process_step_3_text: 'Within 1-3 days depending on your region.',
  process_step_4_title: 'Field support',
  process_step_4_text: 'Need help while applying? We are online to assist.',

  testi_eyebrow: 'Our customers',
  testi_title: 'What farmers say about Ideal Agro Himoya',
  testi_subtitle: 'Real reviews from farms that trust us.',

  products_pageTitle: 'Product catalog',
  products_pageSubtitle: 'Full list of plant protection products and fertilizers.',
  products_filter_category: 'Categories',
  products_filter_sort: 'Sort by',
  products_sort_default: 'Recommended',
  products_sort_priceAsc: 'Price: low to high',
  products_sort_priceDesc: 'Price: high to low',
  products_sort_nameAsc: 'Name (A→Z)',
  products_sort_newest: 'Newest first',
  products_resultsLabel: (n) => `${n} products found`,
  products_empty_title: 'No products found',
  products_empty_text: 'Adjust filters or try a different search.',
  products_clearFilters: 'Clear filters',
  products_addToCart: 'Add to cart',
  products_inCart: 'In cart',
  products_viewDetails: 'View details',
  products_quickAdd: 'Quick add',

  pd_back: 'Back to catalog',
  pd_specs: 'Specifications',
  pd_activeIngredient: 'Active ingredient',
  pd_dosage: 'Dosage rate',
  pd_packaging: 'Packaging',
  pd_usage: 'Usage',
  pd_safety: 'Safety',
  pd_safetyNote:
    'Wear protective gear and a respirator when handling, and follow the on-pack instructions.',
  pd_related: 'Related products',
  pd_quantity: 'Quantity',
  pd_addToCart: 'Add to cart',
  pd_inCart: 'In cart',
  pd_buyNow: 'Order now',
  pd_contactToOrder: 'Contact to order',
  pd_share: 'Share',

  cart_title: 'Cart',
  cart_empty_title: 'Your cart is empty',
  cart_empty_text: 'Browse our products and add them to the cart.',
  cart_continueShopping: 'Continue shopping',
  cart_summary: 'Order summary',
  cart_summary_items: 'Items',
  cart_summary_quantity: 'Total quantity',
  cart_summary_total: 'Total',
  cart_checkout: 'Checkout',
  cart_clear: 'Clear cart',
  cart_remove: 'Remove',

  checkout_title: 'Checkout',
  checkout_subtitle: 'Fill in your order details.',
  checkout_section_contact: 'Contact details',
  checkout_section_delivery: 'Delivery',
  checkout_section_payment: 'Payment method',
  checkout_field_name: 'Full name',
  checkout_field_phone: 'Phone number',
  checkout_field_email: 'Email (optional)',
  checkout_field_region: 'Region / city',
  checkout_field_address: 'Full address',
  checkout_field_note: 'Note (optional)',
  checkout_payment_cash: 'Cash on delivery',
  checkout_payment_cash_desc: 'Pay the courier on delivery.',
  checkout_payment_card: 'Card',
  checkout_payment_card_desc: 'Online via Click / Payme.',
  checkout_payment_invoice: 'Invoice',
  checkout_payment_invoice_desc: 'Bank transfer for legal entities.',
  checkout_submit: 'Confirm order',
  checkout_terms: 'After submitting we will reach out to confirm your order.',
  checkout_orderTotal: 'Order total',
  checkout_success_title: 'Your order is placed!',
  checkout_success_text: 'Our operator will contact you shortly.',
  checkout_success_orderId: 'Order number',

  aboutPage_eyebrow: 'About us',
  aboutPage_title: 'Care for the soil, the harvest and the farmer',
  aboutPage_lead:
    'Ideal Agro Himoya is a modern company supplying Uzbek farmers with high-quality plant protection products and fertilizers. We test our products in the field and constantly improve our service.',
  aboutPage_mission_title: 'Our mission',
  aboutPage_mission_text:
    'Increase farmers\' yields nationwide through quality products, agronomic guidance and fair prices.',
  aboutPage_history_title: 'Our story',
  aboutPage_history_text:
    'Founded on 6 July 2021 by experienced agronomists and chemists. Based in Andijan city, serving customers across Uzbekistan.',
  aboutPage_values_title: 'Our values',
  aboutPage_value_quality_title: 'Quality',
  aboutPage_value_quality_text: 'Certified products and lab-tested quality control.',
  aboutPage_value_service_title: 'Service',
  aboutPage_value_service_text:
    'We stay with you after the order — agronomic support is always available.',
  aboutPage_value_reach_title: 'Wide network',
  aboutPage_value_reach_text:
    'From Tashkent to Karakalpakstan — nationwide delivery across Uzbekistan.',
  aboutPage_value_assortment_title: 'Wide assortment',
  aboutPage_value_assortment_text:
    'More than 50 products across 5 categories.',

  contactPage_eyebrow: 'Contact',
  contactPage_title: 'Get in touch',
  contactPage_lead:
    'Reach out for any question, partnership inquiry, or agronomic advice — our operator will reply soon.',
  contactPage_form_title: 'Leave a message',
  contactPage_form_name: 'Your name',
  contactPage_form_phone: 'Your phone',
  contactPage_form_message: 'Your message',
  contactPage_form_messagePlaceholder: 'How can we help?',
  contactPage_form_submit: 'Send message',
  contactPage_form_success_title: 'Message sent!',
  contactPage_form_success_text: 'We will get back to you shortly.',
  contactPage_info_phone: 'Phone',
  contactPage_info_email: 'Email',
  contactPage_info_address: 'Address',
  contactPage_info_addressValue: 'Andijan city, Uzbekistan',
  contactPage_hours_title: 'Working hours',
  contactPage_hours_weekdays: 'Monday — Friday: 09:00 — 18:00',
  contactPage_hours_saturday: 'Saturday: 09:00 — 15:00',
  contactPage_hours_sunday: 'Sunday: closed',
  contactPage_map_placeholder: 'Map coming soon',

  footer_about: 'Plant protection products and fertilizers — quality over profit.',
  footer_quickLinks: 'Quick links',
  footer_categoriesTitle: 'Categories',
  footer_contact: 'Contact',
  footer_follow: 'Follow us',
  footer_rights: 'All rights reserved.',
  footer_madeIn: 'Made in Uzbekistan',

  admin_login_title: 'Admin panel',
  admin_login_subtitle: 'Sign in to manage the website.',
  admin_login_username: 'Username',
  admin_login_password: 'Password',
  admin_login_submit: 'Sign in',
  admin_login_error: 'Invalid username or password.',
  admin_logout: 'Sign out',
  admin_nav_dashboard: 'Dashboard',
  admin_nav_products: 'Products',
  admin_nav_orders: 'Orders',
  admin_nav_settings: 'Settings',
  admin_dash_title: 'Overview',
  admin_dash_revenue: 'Revenue',
  admin_dash_orders: 'Orders',
  admin_dash_products: 'Products',
  admin_dash_customers: 'Customers',
  admin_dash_recentOrders: 'Recent orders',
  admin_dash_lowStock: 'Low-stock products',
  admin_products_title: 'Products',
  admin_products_new: 'New product',
  admin_products_search: 'Search products…',
  admin_products_col_image: 'Image',
  admin_products_col_name: 'Name',
  admin_products_col_category: 'Category',
  admin_products_col_price: 'Price',
  admin_products_col_stock: 'Stock',
  admin_products_col_actions: 'Actions',
  admin_products_form_new: 'New product',
  admin_products_form_edit: 'Edit product',
  admin_products_form_name: 'Name',
  admin_products_form_category: 'Category',
  admin_products_form_price: 'Price (UZS)',
  admin_products_form_stock: 'Stock (pcs)',
  admin_products_form_image: 'Image URL',
  admin_products_form_description: 'Description',
  admin_products_form_activeIngredient: 'Active ingredient',
  admin_products_form_dosage: 'Dosage rate',
  admin_products_form_packaging: 'Packaging',
  admin_products_deleteConfirm: 'Delete this product?',
  admin_orders_title: 'Orders',
  admin_orders_col_id: 'ID',
  admin_orders_col_customer: 'Customer',
  admin_orders_col_phone: 'Phone',
  admin_orders_col_total: 'Total',
  admin_orders_col_status: 'Status',
  admin_orders_col_date: 'Date',
  admin_orders_status_new: 'New',
  admin_orders_status_processing: 'Processing',
  admin_orders_status_completed: 'Completed',
  admin_orders_status_cancelled: 'Cancelled',
  admin_orders_empty: 'No orders yet.',
  admin_settings_title: 'Settings',
  admin_settings_changePassword: 'Change password',
  admin_settings_currentPassword: 'Current password',
  admin_settings_newPassword: 'New password',
  admin_settings_confirmPassword: 'Confirm password',
  admin_settings_save: 'Save',
  admin_settings_passwordChanged: 'Password updated successfully.',
  admin_settings_passwordMismatch: 'Passwords do not match.',

  toast_addedToCart: 'Added to cart',
  toast_removedFromCart: 'Removed from cart',
  toast_orderPlaced: 'Order placed',
  toast_messageSent: 'Message sent',
};

export const dictionaries: Record<Language, Dictionary> = {
  uz: dict_uz,
  kr: dict_kr,
  ru: dict_ru,
  en: dict_en,
};
