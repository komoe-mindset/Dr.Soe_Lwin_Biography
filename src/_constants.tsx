
import { NavLink, Center, Discourse } from './_types';

export const LMS_URL = "https://wgml-1.mindset-it.online/";
export const PAMPHLET_URL = "https://drive.google.com/file/d/1_hjJMC2NSzEro_ornkJcnlti3Vo805Ge/view?usp=sharing";

// Previous embedded HTML content removed to favor direct PDF access
export const PAMPHLET_HTML_CONTENT = ``;

const YANGON_2025_DISCOURSES: Discourse[] = [
  {
    date: "2025-01-18/19",
    title: { en: "The 6 Elements (Dhatu) Series", mm: "ဓာတ် ၆ ပါးသိမ်းဆည်းပုံ (အပိုင်း ၁-၂)" },
    summary: { 
      en: "Shifting from personal to universal views by analyzing physical elements.", 
      mm: "မိမိတို့၏ တစ်ကိုယ်ရေအမြင်မှသည် တစ်လောကလုံးဆိုင်ရာအမြင်သို့ ပြောင်းလဲနိုင်ရန် ဓာတ်ကြီးများအား ခွဲခြမ်းစိတ်ဖြာခြင်း။" 
    },
    keyTerms: [
      { term: "Satti (သတ္တိ)", meaning: { en: "Energy/Reality", mm: "စွမ်းအင်သတ္တိ / တကယ်ရှိသောသဘော" }, explanation: { en: "The underlying nature (e.g., the spiciness of a chili).", mm: "ပရမတ်တရား၏ နောက်ကွယ်က အလုပ်လုပ်သော သဘော။" } },
      { term: "Byatti (ဗျတ္တိ)", meaning: { en: "Form/Concept", mm: "ပုံသဏ္ဌာန် / အသွင်အပြင်" }, explanation: { en: "The surface appearance (e.g., the red color of a chili).", mm: "မျက်စိဖြင့် မြင်ရသော ပုံသဏ္ဌာန်၊ အခိုင်အမာဟု ထင်ရသော အသွင်။" } }
    ],
    roadmap: [
      { en: "Focus on Satti: Notice heat or hardness, not the label.", mm: "သတ္တိကို ရှာဖွေပါ - ပုံသဏ္ဌာန်ကို မကြည့်ဘဲ တကယ်ဖြစ်ပေါ်နေသော သဘောကို သိအောင်လုပ်ပါ။" },
      { en: "Analyze Kicca: See actions as natural processes, not 'I'.", mm: "အလုပ်ကိစ္စကို ခွဲခြားပါ - 'ငါလုပ်သည်' ဟု မယူဘဲ ဓာတ်တို့၏ ကိစ္စအဖြစ် ဆင်ခြင်ပါ။" }
    ]
  },
  {
    date: "2025-02-15/16",
    title: { en: "The Nakulapitu & Akkosa Suttas", mm: "နကုလပိတုသုတ် နှင့် အက္ကောသသုတ်" },
    summary: { 
      en: "Philosophy of 'Physical pain, but no mental pain'.", 
      mm: "ကိုယ်သာနာ၍ စိတ်မနာစေရန် ဟူသော ဗုဒ္ဓ၏ လက်တွေ့ကျသည့် ဘဝနေနည်း။" 
    },
    roadmap: [
      { en: "View as a Stranger: Observe your pain as if it belongs to someone else.", mm: "သူစိမ်းလိုကြည့်ပါ - မိမိ၏ နာကျင်မှုကို ပြင်ပမှ သူစိမ်းတစ်ယောက်၏ ဖြစ်စဉ်ကဲ့သို့ ရှုမြင်ပါ။" },
      { en: "Refusal to Accept: Do not own the insults or anger sent by others.", mm: "လက်မခံဘဲ နေပါ - တစ်စုံတစ်ဦး၏ ဆဲရေးမှုကို မိမိက ဒေါသဖြင့် လက်မခံပါက ထိုအရာသည် ပြောသူထံသို့သာ ပြန်သွားပါမည်။" }
    ]
  },
  {
    date: "2025-03 to 2025-07",
    title: { en: "Triple Vision: World, Dhamma, & Life", mm: "လောကအမြင်၊ ဓမ္မအမြင်၊ ဘဝအမြင်များ" },
    summary: { 
      en: "A comprehensive system to solve life's problems through right perspective.", 
      mm: "လောကအမြင်မှသည် ရုပ်နာမ်ဓမ္မတို့၏ သဘောတရားကို သိမြင်သော ဓမ္မအမြင်သို့ ပြောင်းလဲခြင်း။" 
    },
    roadmap: [
      { en: "Think in Systems: Use the forward/backward mind states model.", mm: "စနစ်တစ်ခုဖြင့် စဉ်းစားပါ - အကြောင်းနှင့်အကျိုး၊ ရှေ့စိတ်နှင့်နောက်စိတ်ဟူသော စနစ်အတွင်းမှ စဉ်းစားပါ။" },
      { en: "Cultivate Equanimity: Accept that the world is a balance of light and dark.", mm: "ဥပေက္ခာစိတ် မွေးမြူပါ - အကောင်းနှင့်အဆိုး၊ အလင်းနှင့်အမှောင် မျှတစွာရှိသည်ကို လက်ခံပါ။" }
    ]
  },
  {
    date: "2025-08 to 2025-10",
    title: { en: "Dipani Series: Right View & Mindfulness", mm: "သမ္မာဒိဋ္ကိုဒီပနီ နှင့် အာနာပါနဒီပနီ" },
    summary: { 
      en: "Deep dive into Ledi Sayadaw's instructions on breath and reality.", 
      mm: "ပစ္စုပ္ပန်တည့်တည့်၌ အကြောင်းအကျိုးကို မှန်ကန်စွာသိမြင်ခြင်း (သမ္မာဒိဋ္ဌိ) ၏ အရေးကြီးပုံ။" 
    },
    roadmap: [
      { en: "Focus on Volition (Cetana): Notice the mental nudge before any movement.", mm: "စေတနာကို သတိထားပါ - လှုပ်ရှားမှုတိုင်းတွင် နောက်ကွယ်မှ စေ့ဆော်နေသော စေတနာကို သိမြင်ပါ။" },
      { en: "Beyond Form: See expansion and contraction, not just 'nose' or 'belly'.", mm: "ပုံသဏ္ဌာန်ကို ကျော်လွန်ပါ - နှာခေါင်း သို့မဟုတ် ဗိုက်ဟူသော ပုံသဏ္ဌာန်ထက် တိုးခြင်း၊ တွန်းခြင်းကို ရှုပါ။" }
    ]
  },
  {
    date: "2025-11 to 2025-12",
    title: { en: "Levels of Knowing: Sanna, Vinnana, Panna", mm: "သညာသိ၊ ဝိညာဏ်သိ၊ ပညာသိ" },
    summary: { 
      en: "Understanding the difference between memory, awareness, and wisdom.", 
      mm: "အမှတ်သညာဖြင့်သိခြင်း၊ အာရုံကိုသိရုံသိခြင်း နှင့် အရှိကိုအရှိအတိုင်း သိမြင်ခြင်း။" 
    },
    roadmap: [
      { en: "Mind Monitoring: Watch how the mind handles and controls power.", mm: "မိမိစိတ်ကို စောင့်ကြည့်ပါ - မိမိစိတ်၏ ကိုင်တွယ်ပုံနှင့် ထိန်းချုပ်ပုံကို သတိဖြင့် အမြဲစောင့်ကြည့်ပါ။" },
      { en: "Transformation: Check if the knowledge actually changes your behavior.", mm: "ပြောင်းလဲမှုကို ဆန်းစစ်ပါ - တရားအသိကြောင့် မိမိ၏ စရိုက်နှင့် ဘဝနေထိုင်မှု အမှန်တကယ် ပြောင်းလဲရန် လိုအပ်သည်။" }
    ]
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: { en: 'Biography', mm: 'ကိုယ်ရေးရာဇဝင်' }, href: '#about' },
  { label: { en: 'Framework', mm: 'တရားဒေသနာအနှစ်ချုပ်' }, href: '#framework' },
  { label: { en: 'Academy', mm: 'အွန်လိုင်းသင်တန်း' }, href: LMS_URL },
  { label: { en: 'Practices', mm: 'လက်တွေ့ကျင့်စဉ်များ' }, href: '#practices' },
  { label: { en: 'Centers', mm: 'ဓမ္မလမ်းဌာနများ' }, href: '#centers' },
  { label: { en: 'Contact', mm: 'ဆက်သွယ်ရန်' }, href: '#contact' },
];

const PYIN_OO_LWIN_DISCOURSES: Discourse[] = [
  {
    date: "Book 1",
    title: { en: "Vipassana Wisdom", mm: "ဝိပဿနာပညာ" },
    summary: { 
      en: "Wisdom that enables one to endure worldly conditions (Lokadhamma) and provides guidance for a courageous life through the Eightfold Path.", 
      mm: "လောကဓံတရားများကို ကြံ့ကြံ့ခံနိုင်ရန်နှင့် မဂ္ဂင်ရှစ်ပါးလမ်းစဉ်ဖြင့် ဘဝကို ရဲရဲဝံ့ဝံ့ ရင်ဆိုင်နိုင်ရန် လမ်းညွှန်မှုပေးသော ဝိပဿနာပညာ။" 
    },
    keyTerms: [
      { term: "Atta-panna (အတ္တပညာ)", meaning: { en: "Technical Skills", mm: "လောကီအတတ်ပညာ" }, explanation: { en: "Skills needed to survive in the world.", mm: "လောက၌ အသက်မွေးဝမ်းကျောင်းပြုရန် လိုအပ်သော အတတ်ပညာ။" } },
      { term: "Thita-panna (ဌိတပညာ)", meaning: { en: "Life Wisdom", mm: "ဘဝအသိဉာဏ်" }, explanation: { en: "Wisdom needed for a peaceful life.", mm: "အေးချမ်းသာယာသော ဘဝတည်ဆောက်ရန် လိုအပ်သော အသိဉာဏ်။" } }
    ],
    roadmap: [
      { en: "Proof through Morality (Sila), Concentration (Samadhi), and Wisdom (Panna).", mm: "သီလ၊ သမာဓိ၊ ပညာတို့ဖြင့် မိမိကိုယ်ကို သက်သေပြပါ။" },
      { en: "Shift from Personal View to Natural View of mind and matter.", mm: "ပုဂ္ဂိုလ်သတ္တဝါအမြင်မှ ရုပ်နာမ်ဓမ္မ သဘာဝအမြင်သို့ ပြောင်းလဲပါ။" }
    ]
  },
  {
    date: "Book 2",
    title: { en: "Abandoning Greed", mm: "လောဘစွန့်ဖို့သာလိုရင်း" },
    summary: { 
      en: "The essential goal of Dhamma practice is the exhaustion of greed (Lobha), which is the root cause of all suffering.", 
      mm: "ဒုက္ခအားလုံး၏ အရင်းအမြစ်ဖြစ်သော လောဘကို အကြွင်းမဲ့ ပယ်သတ်ခြင်းသည် သာသနာတော်၏ အဓိက ရည်မှန်းချက် ဖြစ်သည်။" 
    },
    keyTerms: [
      { term: "Samudaya Sacca (သမုဒယသစ္စာ)", meaning: { en: "Truth of Cause", mm: "ဒုက္ခဖြစ်ကြောင်းအမှန်" }, explanation: { en: "Greed-Craving is the source of all suffering.", mm: "လောဘတဏှာသည် ဆင်ရဲဒုက္ခအားလုံး၏ အရင်းအမြစ် ဖြစ်သည်။" } }
    ],
    roadmap: [
      { en: "Use Dana to abandon the greed of possession.", mm: "ဒါနဖြင့် ပိုင်ဆိုင်လိုသော လောဘကို ပယ်ပါ။" },
      { en: "Use Sila to abandon the greed of disturbing others.", mm: "သီလဖြင့် သူတစ်ပါးကို နှောင့်ယှက်လိုသော လောဘကို ပယ်ပါ။" },
      { en: "Use Bhavana to abandon the greed of 'I' and 'Mine'.", mm: "ဘာဝနာဖြင့် 'ငါ၊ ငါ့ဥစ္စာ' ဟု စွဲလမ်းသော လောဘကို ပယ်ပါ။" }
    ]
  },
  {
    date: "Practice Guide",
    title: { en: "Kamma-Kusala & Nana-Kusala", mm: "ကမ္မကုသိုလ် နှင့် ဉာဏကုသိုလ်" },
    summary: { 
      en: "Adding wisdom on top of action: Volition (Setana) is Kamma, while Mindfulness (Sati) is Wisdom.", 
      mm: "ကမ္မပေါ်၌ ဉာဏ်ဆင့်ခြင်း - စေတနာသည် ကမ္မကုသိုလ်ဖြစ်ပြီး ထိုစေတနာကို သိမြင်သော သတိသည် ဉာဏကုသိုလ် ဖြစ်သည်။" 
    },
    roadmap: [
      { en: "Kamma-Kusala leads to good lives; Nana-Kusala leads to Nibbana.", mm: "ကမ္မကုသိုလ်သည် ဘဝကောင်းကို ပေးပြီး ဉာဏကုသိုလ်သည် နိဗ္ဗာန်သို့ ပို့ဆောင်ပေးသည်။" },
      { en: "Volition-Kamma goes in front; Mindfulness-Wisdom follows behind.", mm: "စေတနာကမ္မက ရှေ့ကသွားပြီး သတိဉာဏ်က နောက်ကလိုက်ရမည်။" }
    ]
  },
  {
    date: "Life Management",
    title: { en: "Morality, Concentration, & Wisdom", mm: "သီလ၊ သမာဓိ၊ ပညာ နှင့် ဘဝ" },
    summary: { 
      en: "A comprehensive approach to life management through the three pillars of Dhamma training.", 
      mm: "သီလ၊ သမာဓိ၊ ပညာ တည်းဟူသော တရားမဏ္ဍိုင်သုံးပါးဖြင့် ဘဝကို စနစ်တကျ စီမံခန့်ခွဲခြင်း။" 
    },
    roadmap: [
      { en: "Broaden view with Wisdom; practice with Morality; build with Concentration.", mm: "ပညာဖြင့် အမြင်ကျယ်ပါ၊ သီလဖြင့် ကျင့်သုံးပါ၊ သမာဓိဖြင့် တည်ဆောက်ပါ။" },
      { en: "Restrain from disturbing others through physical and verbal actions.", mm: "ကာယကံ၊ ဝစီကံတို့ဖြင့် သူတစ်ပါးကို မနှောင့်ယှက်မိအောင် စောင့်ထိန်းပါ။" }
    ]
  },
  {
    date: "Daily Life",
    title: { en: "Coffee Meditation", mm: "ကော်ဖီမဂ္ဂ" },
    summary: { 
      en: "Practical application of Satipatthana in daily activities like offering or drinking coffee.", 
      mm: "ကော်ဖီသောက်ခြင်း သို့မဟုတ် တိုက်ကျွေးခြင်းကဲ့သို့ နေ့စဉ်လုပ်ငန်းဆောင်တာများထဲ၌ သတိပဋ္ဌာန်တရားကို လက်တွေ့ကျင့်သုံးခြင်း။" 
    },
    roadmap: [
      { en: "The volition to offer is Kamma-Kusala; noticing it is Nana-Kusala.", mm: "တိုက်ကျွေးလိုသော စေတနာသည် ကမ္မကုသိုလ်၊ ထိုစေတနာကို သိမြင်ခြင်းသည် ဉာဏကုသိုလ် ဖြစ်သည်။" },
      { en: "Replace Greed (Lobha) with Mindfulness (Sati) in every action.", mm: "လှုပ်ရှားမှုတိုင်းတွင် လောဘအစား သတိဖြင့် အစားထိုးပါ။" }
    ]
  },
  {
    date: "Sutta Study",
    title: { en: "Sotanugata Sutta", mm: "သောတာနုဂတသုတ်" },
    summary: { 
      en: "The four immense benefits of hearing, reciting, contemplating, and penetrating the Dhamma with wisdom.", 
      mm: "တရားတော်များကို နာယူခြင်း၊ ရွတ်ဖတ်ခြင်း၊ ဆင်ခြင်ခြင်းနှင့် ဉာဏ်ဖြင့် ထိုးထွင်းသိမြင်ခြင်းတို့၏ အကျိုးကျေးဇူး ၄ မျိုး။" 
    },
    roadmap: [
      { en: "Dhamma categories appear clearly even in celestial realms if practiced well.", mm: "ကောင်းစွာကျင့်ကြံထားပါက နတ်ပြည်၌ပင် တရားဓမ္မများ ထင်ရှားစွာ ပြန်လည်ပေါ်ပေါက်လာနိုင်သည်။" },
      { en: "Quickly attain higher Dhamma (Magga-Phala) through previous impressions.", mm: "ရှေးဘဝက ပါရမီအထုံကြောင့် တရားထူးတရားမြတ်ကို လျင်မြန်စွာ ရရှိနိုင်သည်။" }
    ]
  }
];

export const CENTERS: Center[] = [
  {
    id: 'pyin-oo-lwin',
    title: { en: 'Pyin Oo Lwin (Pyin Sar)', mm: 'ပြင်ဦးလွင် (ပြင်စာ)' },
    discourses: PYIN_OO_LWIN_DISCOURSES,
    description: { 
      en: 'Visuddhimag Dhammalann offers monthly residential meditation courses and Training of Trainers (TOT) programs in a serene highland setting.', 
      mm: 'ဝိသုဒ္ဓိမဂ် ဓမ္မလမ်းတွင် လစဉ် တရားစခန်းများနှင့် นည်းပြသင်တန်းများကို အေးချမ်းသာယာသော တောင်ပေါ်ဒေသ၌ ပုံမှန်ပို့ချပေးလျက်ရှိသည်။' 
    },
    icon: 'Lotus',
    phone: '09 794 104 929',
    detailLink: "https://drive.google.com/drive/folders/1wyMuQ_6XB2S7ayhCvCXwQNSEGtGJh_SZ?usp=sharing"
  },
  {
    id: 'mandalay',
    title: { en: 'Mandalay', mm: 'မန္တလေး' },
    description: { 
      en: 'Located at TaKaung Monastery, this urban sanctuary conducts regular intensive training sessions and weekend retreats.', 
      mm: 'တကောင်းကျောင်းတိုက်တွင် ၃ ရက်မှ ၅ ရက်အထိ တရားသင်တန်းများနှင့် ပိတ်ရက်တရားစခန်းများကို စနစ်တကျ ကျင်းပပေးသည်။' 
    },
    icon: 'Temple',
    phone: '09 431 206 46'
  },
  {
    id: 'yangon',
    title: { en: 'Yangon', mm: 'ရန်ကုန်' },
    description: { 
      en: 'Located in Mahabodhi Bodhgaya Monastery compound, North Dagon. Hosting monthly intensive training for urban practitioners.', 
      mm: 'ရန်ကုန်မြို့၊ မြောက်ဒဂုံမြို့နယ်၊ မဟာဗောဓိ ဗုဒ္ဓဂယာ စာသင်တိုက်ဝင်းအတွင်းရှိ ဓမ္မာရုံ၌ လစဉ်တရားသင်တန်းများကို မြို့ပြယောဂီများအတွက် စီစဉ်ကျင်းပပေးသည်။' 
    },
    icon: 'City',
    phone: '09 757 670 683',
    discourses: YANGON_2025_DISCOURSES,
    detailLink: "https://docs.google.com/document/d/1RdY9EGVnVfjw-Ef-qup4-7kEwk_BUR_8FsI6ywu6_Sg/edit?usp=sharing"
  },
  {
    id: 'bago',
    title: { en: 'Bago', mm: 'ပဲခူး' },
    description: { 
      en: 'A growing community of practitioners in the historic Bago region, offering regular Dhamma discussions.', 
      mm: 'ပဲခူးဒေသရှိ ယောဂီများအတွက် ပုံမှန်တရားဓမ္မဆွေးနွေးပွဲများနှင့် သင်တန်းများကို စီစဉ်ဆောင်ရွက်ပေးလျက်ရှိသည်။' 
    },
    icon: 'Temple',
    phone: '09 976 713 652'
  },
  {
    id: 'taunggyi',
    title: { en: 'Taunggyi', mm: 'တောင်ကြီး' },
    description: { 
      en: 'Our highland sanctuary in Shan State, fostering mindfulness in the cool mountain air.', 
      mm: 'ရှမ်းပြည်နယ်၊ တောင်ကြီးမြို့ရှိ အေးချမ်းသော တောင်ပေါ်ဒေသ၌ ဝိပဿနာတရားများကို ပွားများအားထုတ်နိုင်ရန် စီစဉ်ပေးသည်။' 
    },
    icon: 'City',
    phone: '09 560 0639'
  },
  {
    id: 'monywa',
    title: { en: 'Monywa', mm: 'မုံရွာ' },
    description: { 
      en: 'Providing structure and support for meditation students in the Chindwin area.', 
      mm: 'ချင်းတွင်းဒေသရှိ ယောဂီများ တရားဓမ္မ လေ့လာအားထုတ်နိုင်ရန် စနစ်တကျ လမ်းညွှန်ပြသပေးလျက်ရှိသည်။' 
    },
    icon: 'Temple',
    phone: '09 515 0533'
  },
  {
    id: 'naypyidaw',
    title: { en: 'Naypyidaw', mm: 'နေပြည်တော်' },
    description: { 
      en: 'Dhamma programs tailored for busy practitioners in the capital city.', 
      mm: 'နေပြည်တော်ရှိ မြို့ပြယောဂီများအတွက် အချိန်နှင့်ကိုက်ညီသော တရားသင်တန်းများကို စီစဉ်ကျင်းပပေးသည်။' 
    },
    icon: 'City',
    phone: '09 510 4181'
  },
  {
    id: 'singapore',
    title: { en: 'Singapore', mm: 'စင်ကာပူ' },
    description: { 
      en: 'Our international hub providing support and guidance to the overseas Burmese community and international students.', 
      mm: 'ပြည်ပရောက် မြန်မာယောဂီများနှင့် နိုင်ငံတကာ ကျောင်းသားများအတွက် တရားဓမ္မ လမ်းညွှန်မှုများ ပေးလျက်ရှိသည်။' 
    },
    icon: 'City',
    phone: '+65 938 407 18'
  }
];
