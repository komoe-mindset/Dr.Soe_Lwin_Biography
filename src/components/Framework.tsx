
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  Eye, 
  Waves, 
  Ghost, 
  Clock, 
  UserCircle, 
  Anchor,
  X,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface FrameworkProps {
  lang: Language;
}

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: { en: string; mm: string };
  desc: { en: string; mm: string };
  fullText: { en: string; mm: string };
}

const Framework: React.FC<FrameworkProps> = ({ lang }) => {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const pillars: Pillar[] = [
    {
      id: '01',
      icon: <Zap size={28} />,
      title: { en: 'Merit & Demerit', mm: 'ကုသိုလ် နှင့် အကုသိုလ်' },
      desc: { 
        en: 'Merit is not just a deed; it is the act of abandoning Greed, Anger, and Delusion at their roots.', 
        mm: 'ကုသိုလ်ဟူသည် လောဘ၊ ဒေါသ၊ မောဟတို့ကို စွန့်ခြင်းဖြစ်သည်။ အကုသိုလ်ကို ပယ်သတ်ခြင်းသည်ပင် ကုသိုလ်၏ ကိစ္စဖြစ်သည်။' 
      },
      fullText: {
        en: `
          ### 1. Merit and Demerit
          Demerits that cause bad results are "Greed (Lobha), Anger (Dosa), and Delusion (Moha)." Merit is the act of abandoning them: "Abandoning greed is merit, abandoning anger is merit, and abandoning delusion is merit."
          
          The primary function of merit is to eradicate demerit. According to the Patthana teachings, the root causes (Hetu) of good results are A-lobha, A-dosa, and A-moha, while the root causes of bad results are Lobha, Dosa, and Moha.
          
          #### Levels of Merit
          Merit includes Dana (Generosity), Sila (Morality), Samadhi (Concentration), Vipassana (Insight), and Magga (Path Wisdom). Arhats, who have completely eradicated all defilements, no longer have the task of "doing merit to eradicate demerit."
          
          #### "Just Abandon Greed"
          All beings desire to be free from suffering. The root of all suffering is "Greed-Craving" (Tanha). To abandon this, we practice the five types of merit. Just as taking medicine cures a disease, doing merit eradicates demerits. If one can completely abandon greed through Path Wisdom (Magga-Nana), one reaches Nibbana, the cessation of all suffering.
          
          #### "Connect with Nibbana"
          When we give (Dana), we should see it as abandoning greed. Most people say they give "to get merit," but that itself can become a form of greed for future prosperity. The correct way is to give with the intention of Nibbana—abandoning the greed for ownership and "self."
        `,
        mm: `
          ၁။ ''ကုသိုလ်နှင့်အကုသိုလ်''
          မကောင်းကျိုးကိုပေးတတ်သော အကုသိုလ်တရားတို့သည် ''လောဘ၊ ဒေါသ၊ မောဟ''တို့ ဖြစ်သည်။ ကုသိုလ်တရားဟူသည် 'လောဘစွန့်ခြင်းသည် ကုသိုလ်ဖြစ်၏၊ ဒေါသစွန့်ခြင်းသည် ကုသိုလ် ဖြစ်၏၊ မောဟစွန့်ခြင်း သည် ကုသိုလ်'ဖြစ်၏။ ကုသိုလ်သည် အကုသိုလ်ကို ပယ်သတ်ခြင်း ကိစ္စရှိ၏။ ထို့ကြောင့် ပဋ္ဌာန်းဒေသနာတွင် ကောင်းကျိုး ပေးခြင်း၏ အကြောင်းရင်း-ဟေတု (root cause) သည် အလောဘ၊ အဒေါသ၊ အမောဟဖြစ်၍ မကောင်းကျိုးပေးခြင်း၏ အကြောင်းရင်းသည် 'လောဘ၊ ဒေါသ၊ မောဟ'တို့ဖြစ်သည်ဟု ဆိုပါသည်။

          #### ကုသိုလ်အဆင့် အမျိုးမျိုး
          'ဒါနကုသိုလ်၊ သီလကုသိုလ်၊ သမာဓိကုသိုလ်၊ ဝိပဿနာ ကုသိုလ်၊ မဂ်ကုသိုလ်' တို့ဖြစ်၏။ ကုသိုလ်အလုပ်သည် 'အကုသိုလ်ကို ပယ်သတ်ခြင်းကိစ္စ' ရှိသော ကြောင့်လည်း ကုသိုလ်ဟု အမည် ရနေခြင်း ဖြစ်ပါသည်။ အကုသိုလ် ကုန်ပြီးသော ရဟန္တာ တို့တွင် အကုသိုလ်ပယ်သတ်ခြင်းဆိုသော ကုသိုလ်ကိစ္စသည် မရှိတော့ချေ။

          #### ''လောဘစွန့်ဖို့သာလိုရင်း''
          သတ္တဝါမှန်သမျှသည် ဆင်းရဲကို အလိုမရှိပါ။ 'ဆင်းရဲမရှိခြင်း၊ ဆင်းရဲချုပ်ငြိမ်းခြင်း'ကိုသာ အလိုရှိ ပါသည်။ ထို့ကြောင့် သတ္တဝါတိုင်းသည် ဆင်းရဲငြိမ်းရာ နိဗ္ဗာန်ကို အလိုရှိကြပါသည်။ ဆင်းရဲဖြစ် ကြောင်း လောဘ-အကုသိုလ်ကို စွန့်ရန်အတွက် ကုသိုလ် (၅)မျိုးရှိ၏။ 'ဒါနကုသိုလ်၊ သီလကုသိုလ်၊ သမာဓိကုသိုလ်၊ ဝိပဿနာကုသိုလ်၊ မဂ်ကုသိုလ်' တို့ဖြစ်၏။ ''ဆေးသောက်လျှင် ရောဂါပျောက်သလို ကုသိုလ်လုပ်လျှင်လည်း အကုသိုလ်ကို ပယ်ခြင်းဖြစ်သည်။'' ထို့ကြောင့် 'မဂ်ဉာဏ်ကုသိုလ်ဖြင့် လောဘ အကုသိုလ်'ကို အပြီးပယ်နိုင်လျှင် 'ဆင်းရဲငြိမ်းရာ နိဗ္ဗာန်'ရောက်ပါသည်။

          #### ''နိဗ္ဗာန်နှင့်ချိတ်ထားပါ''
          အမှန်က လှူဒါန်းမှု 'ဒါနကုသိုလ်သည် လောဘစွန့်ခြင်း'ဖြစ်သည်။ လောဘစွန့်လို့ လောဘငြိမ်းရာ နိဗ္ဗာန်ကို ရည်မှန်းပြီး လှူရန်ဖြစ်ပါသည်။ သို့သော် 'ဘာကြောင့်လှူလဲ'ဟု မေးကြည့်လျှင် ကုသိုလ်ရချင် လို့ဟု အများအားဖြင့် ပြောတတ်ပါသည်။ အမှန်မှာ ပေးကမ်းခြင်း၊ ကူညီခြင်း၊ စွန့်ကြဲခြင်း၊ အလှူဒါန ပြုခြင်းတို့သည် 'လောဘ စွန့်ခြင်း' ဖြစ်သည်။ ထိုသို့အမှန်ကို မသိသော 'မောဟ'ကြောင့် 'မိမိဘဝ ကောင်းစားရေး'အတွက် ကုသိုလ်လိုချင်သော 'လောဘ' ဖြစ်သွားသည်ကို မသိနိုင်ခြင်းဖြစ်သည်။ 

          #### ''နိဗ္ဗာန်ရည်မှန်း ပေးကမ်းလှူဒါန်း''
          လှူသည်ကို လောဘစွန့်လိုက်တာပါလားဟု သိမြင်နိုင်လျှင် လောဘစွန့်လို့ လောဘငြိမ်းရာ နိဗ္ဗာန်ကို စိတ်က ရည်မှန်းနိုင်ပါသည်။ စေတနာကို အများအားဖြင့် ကောင်းသည့်အနေဖြင့် သိကြပါ သည်။ 'စေတနာ'က တိုက်တွန်း သောကြောင့်သာ အလှူဒါနဆိုသော 'လောဘစွန့်ခြင်း'ကို ပြုခြင်း ဖြစ်သည်။ သို့သော် ထိုသို့ အမှန်ကို မသိသောကြောင့် လှူသည့်စေတနာကိုလည်း 'ငါ့စေတနာ'လို့ လောဘဖြင့်သိမ်းပိုက်တတ်ပါသည်။
        `
      }
    },
    {
      id: '02',
      icon: <Target size={28} />,
      title: { en: 'Action vs. Wisdom', mm: 'ကံကုသိုလ် နှင့် ဉာဏ်ကုသိုလ်' },
      desc: { 
        en: 'While good actions (Kamma) bring comfort, only Wisdom (Ñāṇa) breaks the cycle of suffering.', 
        mm: 'ကံသည် အကျိုးပေးရုံသာရှိသော်လည်း ဉာဏ်သည်သာ ဆင်းရဲခပ်သိမ်း ချုပ်ငြိမ်းရာ နိဗ္ဗာန်သို့ ပို့ဆောင်နိုင်သည်။' 
      },
      fullText: {
        en: `
          ### 2. Kamma Merit vs. Nana Merit
          Worldly merit is often bound by Kamma (Action/Intention). While Kamma brings better life circumstances (Kam-Chanthar), it does not free one from the cycle of suffering.
          
          Nana Merit (Wisdom Merit) is the understanding of reality. When you perform an act of merit but realize that "there is no 'I' who is doing it," you transition from Kamma merit to Nana merit.
          
          Wisdom understands that:
          1. The results of actions are natural laws.
          2. The actor is just a combination of mind and matter.
          3. Eradicating the root (greed/delusion) is the true path.
          
          Nana merit is what leads to Nibbana, while Kamma merit leads to better rebirths but still within the cycle of suffering.
        `,
        mm: `
          ၂။ ''ကံကုသိုလ်နှင့်ဉာဏ်ကုသိုလ်''
          လောကမှာသိတဲ့ ချမ်းသာက ကံချမ်းသာပါ။ သုခဝေဒနာကိုပဲ ငါချမ်းသာတယ်လို့ ''မောဟနဲ့ လောဘ'' ဖြစ်နေ တာပါ။ သဘာဝမှာ လေပြေလေညှင်းလည်းလာသလို မုန်တိုင်းလည်းတိုက် ပါတယ်။ နှစ်ခုစလုံးကို လက်ခံရပါတယ်။

          လောကမှာ အာရုံကောင်းနဲ့တွေ့သလို အာရုံဆိုးနဲ့လည်းတွေ့မှာပါ။ နှစ်ခုစလုံးကို မျှမျှတတ လက်ခံနိုင်ဖို့ လိုပါ တယ်။ အာရုံကောင်းနဲ့တွေ့ရင် သုခဝေဒနာနဲ့ လောဘဖြစ်ပြီး အာရုံဆိုးနဲ့ကြုံရင် ဒုက္ခဝေဒနာနဲ့ ဒေါသ ဖြစ်တတ် ပါတယ်။ သဘာဝတရားဖြစ်တဲ့ ဝေဒနာကို အမှန်မသိတဲ့ ''မောဟကြောင့် လောဘ၊ ဒေါသ''တွေ ဖြစ်နေတာပါ။ 

          ဝေဒနာရဲ့အကြောင်းအကျိုးကို အမှန်မြင်တာနဲ့ အမောဟ-ဉာဏ်ကုသိုလ်ဖြစ်ပြီး လောဘ၊ ဒေါသတွေ ငြိမ်းပါ တယ်။ လောကချမ်းသာဖြစ်တဲ့ ဝေဒနာချမ်းသာကတော့ ''ကံချမ်းသာ''ပါ၊ အာရုံကောင်းနဲ့တွေ့တုန်းပဲ ချမ်းသာတာပါ။ ဝေဒနာရဲ့သဘာဝကို သတိနဲ့ အမှန်မြင်ရင် ''အမြင်မှန်တဲ့ ဉာဏ်ကုသိုလ်က ''ဉာဏ်ချမ်းသာ ဖြစ်တဲ့နိဗ္ဗာန်''ပို့ပါတယ်။
        `
      }
    },
    {
      id: '03',
      icon: <ShieldCheck size={28} />,
      title: { en: 'The Triple Practice', mm: 'သီလ၊ သမာဓိ၊ ပညာ' },
      desc: { 
        en: 'Conduct to protect others, Focus to calm the mind, and Wisdom to see the world behind labels.', 
        mm: 'သီလဖြင့် ကျင့်သုံး၊ သမာဓိဖြင့် တည်ဆောက်ပြီး ပညာဖြင့် လောကအမှန်တရားကို ထိုးထွင်းသိမြင်ခြင်း။' 
      },
      fullText: {
        en: `
          ### 3. Sila, Samadhi, Panna
          The essence of the Buddha's teachings is the practice of Morality, Concentration, and Wisdom. 
          
          #### Sila (Morality)
          Sila means not disturbing others through physical or verbal actions. Beyond the five precepts, it includes mindful behavior like not speaking loudly, not littering, and following social order.
          
          #### Samadhi (Concentration)
          Samadhi is the ability of the mind to focus deeply on a single object. It calms the waves of defilements (greed, anger, delusion) and makes the mind clear, like sediment settling in water.
          
          #### Panna (Wisdom)
          Wisdom is the power to see the reality of mind and matter behind the labels of the world. It eradicates the roots of suffering. Wisdom is difficult to see; it arises when delusion (Moha) is removed by mindfulness (Sati).
          
          #### 3-in-1 Practice
          When you pay respects to the Buddha:
          - Sila is present (verbal/physical calm).
          - Samadhi is present (focus on the Buddha's qualities).
          - Panna is present (understanding that it is not "I" but "volition/cetana" that acts).
        `,
        mm: `
          ၃။ ''သီလ၊ သမာဓိ၊ ပညာနဲ့ ပြည့်စုံတဲ့ဘဝ''
          မြတ်စွာဘုရား ဟောကြားတဲ့တရားတွေရဲ့ အနှစ်ချုပ်က သီလ၊ သမာဓိ၊ ပညာနဲ့ ဘဝမှာ ကျင့်သုံး နေထိုင်ဖို့ပါ။ 
          
          #### ''သီလ''
          သီလဆိုတာ သူတပါးကို ကာယကံ၊ ဝစီကံတွေနဲ့ အနှောက်အယှက်မဖြစ်အောင် စောင့်ထိန်းတာ ပါ။ ငါးပါးသီလအပြင် ဖုံးကျယ်ကျယ်မပြောဖို့၊ လော်စပီကာ အကျယ်ကြီးမဖွင့်ဖို့၊ အမှိုက်ကိုတွေ့ရာ မပစ်ဖို့ စတာတွေကလည်း သီလတွေပါပဲ။

          #### ''သမာဓိ''
          သမာဓိဆိုတာ စိတ်က အာရုံတစ်ခုပေါ်မှာ စူးစူးစိုက်စိုက် ကပ်ပြီး တည်နိုင်တဲ့ ''သတ္တိ''ပါ။ စိတ်ကို မပျံ့လွင့်အောင် သမာဓိက စောင့်ရှောက်နိုင်သလို စူးစိုက်တဲ့အာရုံကိုလည်း ထင်ရှားပေါ်လွင် စေပါတယ်။

          #### ''ပညာ''
          ပညာဆိုတာ လောကနောက်ကွယ်က သဘာဝရုပ်နာမ်တွေကို အမှန်အတိုင်းသိမြင်ပြီး ဆင်းရဲ ခြင်းရဲ့အကြောင်း ရင်းဖြစ်တဲ့ ''လောဘ၊ ဒေါသ၊ မောဟ''ကို ပယ်ရှားနိုင်တဲ့''သတ္တိ''ပါ။ 

          #### ''သီလ၊ သမာဓိ၊ ပညာနဲ့ပြည့်စုံတဲ့ဉာဏ်'' (3 in 1)
          မြတ်စွာဘုရားကိုမြင်ရင် လက်အုပ်ချီလိုက်တာနဲ့ သီလ ဖြစ်ပါတယ်။ ဘုရားရှင်ကို အာရုံစူးစိုက်ပြီး စိတ်က မပျံ့လွင်ရင် သမာဓိ ရှိပါတယ်။ မြတ်စွာဘုရားကို ဦးချတာက စေတနာပါ။ ''ငါ'' မဟုတ်ပါ။ စေတနာကို အမှန်သိရင် ပညာဖြစ်ပါတယ်။ ဘုရားရှင်ကို ပူဇော်ခိုက်မှာ သီလ၊ သမာဓိ၊ ပညာနဲ့ ပြည့်စုံသွားပါတယ်။
        `
      }
    },
    {
      id: '04',
      icon: <Eye size={28} />,
      title: { en: 'Dhamma vs. Loka', mm: 'ရှေ့စိတ်-ဓမ္မ၊ နောက်စိတ်-လောက' },
      desc: { 
        en: 'The Front Mind sees color (Dhamma); the Back Mind labels it as milk or person (Loka).', 
        mm: 'ဖြူတာမြင်တာသည် ရှေ့စိတ် (ဓမ္မ)၊ နွားနို့ဟုသိတာသည် နောက်စိတ် (လောက) ဖြစ်သည်။ နောက်ကွယ်က အရှိတရားကို မြင်အောင်ကြည့်ပါ။' 
      },
      fullText: {
        en: `
          ### 4. Front Mind (Dhamma) vs. Back Mind (Loka)
          To understand the connection between concepts (Loka/Pannat) and ultimate reality (Dhamma/Paramat), one must observe the process of "Front Mind" and "Back Mind."
          
          #### The Milk Example
          When the eye looks at milk, we think we see "milk." In reality, the eye only sees the "white color." Knowing it as "milk" is the interpretation of the Back Mind (Mano) using labels. 
          
          #### The Painting Example
          On a canvas, there are only colors and shapes. But the mind labels them as a man, a woman, a house, or a car. The reality is just the color. 
          
          #### Process of Perception:
          1. Eye sees color (Front) -> Mind knows "Milk" (Back).
          2. Ear hears sound (Front) -> Mind knows "Dog" (Back).
          3. Nose smells scent (Front) -> Mind knows "Jasmine" (Back).
          
          In the Front Mind, there are no defilements. Lobha, Dosa, and Moha arise only in the Back Mind. If we can stay mindful of the "Front Mind" sensation, the "Back Mind" labels and defilements naturally fade away.
        `,
        mm: `
          ၄။ ''ရှေ့စိတ်-ဓမ္မ၊ နောက်စိတ်-လောက''   
          'လောက'ဖြစ်သော'ပညတ်'နှင့် 'ဓမ္မ'ဖြစ်သော'ပရမတ်'တို့၏ ဆက်စပ်ပုံကို သိမြင်ရန် စိတ်ဖြစ်စဉ် (ရှေ့စိတ်နှင့် နောက်စိတ်)တို့ကို သိသင့်ပေသည်။ 

          #### ''ဖြူတာမြင်တာ-ရှေ့စိတ်၊ နွားနို့လို့သိတာ-နောက်စိတ်''
          မျက်စိက နွားနို့ကိုကြည့်လျှင် နွားနို့ကိုမြင်တယ်ဟု ထင်ကြပါသည်။ အမှန်မှာ မျက်စိက နွားနို့ကိုမမြင်ပါ။ အဖြူရောင် အဆင်းကိုသာ မြင်ပါသည်။ နွားနို့ဟုသိခြင်းသည် တွေးစိတ်-မနောဖြင့် လောကသတ်မှတ်သော အမည်(ပညတ်)ကို သိခြင်းဖြစ်သည်။

          #### ''ပန်းချီကားဥပမာ''
          ပန်းချီကားပေါ်တွင် ဆေးအရောင်တို့ဖြင့် ပုံဆွဲပါက ယောကျာ်း၊ မိန်းမ စသည်မြင်ရသော်လည်း တကယ့်အရှိတရားမှာ ဆေးအရောင်နှင့် ပုံသဏ္ဌာန်တို့သာ ဖြစ်ပါသည်။

          #### ''အနှစ်ချုပ်''
          'မျက်စိ၊ နား၊ နှာ၊ လျှာ၊ ကိုယ်'တို့တွင် ကိလေသာမဖြစ်ပါ။ နောက်စိတ်မနောမှာ 'လောဘ၊ ဒေါသ၊ မောဟ' ကိလေသာတို့ ဖြစ်ကြပါသည်။ ထို့ကြောင့် 'မြင်တာ၊ ကြားတာ၊ နံတာ၊ စားတာ၊ ထိတာ၊ သိတာ'တို့ကို အမှန်အတိုင်း 'သတိ'ပြုနိုင်လျှင် မောဟကို ပယ်နိုင်ပါသည်။
        `
      }
    },
    {
      id: '05',
      icon: <Waves size={28} />,
      title: { en: 'True Sensation', mm: 'ဆင်းရဲချမ်းသာ - ဝေဒနာ' },
      desc: { 
        en: 'Wealth and poverty are just names for sensations (Vedanā). Happiness is the temporary reduction of pain.', 
        mm: 'ဆင်းရဲချမ်းသာဆိုသည်မှာ ပုဂ္ဂိုလ်မဟုတ်၊ ပိုက်ဆံမဟုတ်ဘဲ ဒုက္ခဝေဒနာ ခေတ္တလျော့ပါးသွားသော ခံစားမှုမျှသာဖြစ်သည်။' 
      },
      fullText: {
        en: `
          ### 5. Sensation (Vedana)
          Worldly terms like "rich" or "poor" are just labels for patterns of sensation. A rich person is one with many pleasant sensations (Sukha Vedana); a poor person is one with many unpleasant sensations (Dukkha Vedana).
          
          #### Hut and Mansion
          People say living in a hut is suffering and a mansion is happiness. The hut doesn't cause suffering; the exposure to rain and heat causes unpleasant sensations. The mansion doesn't cause happiness; the comfort causes pleasant sensations. One can feel "Sukha" even in a bamboo hut by the sea.
          
          #### Vedana and Anatta (Non-Self)
          When we say "my pain" or "I am happy," we are clinging to Vedana with greed. Sensation arises due to contact (Phassa). It is not "ours"; it is a natural process that arises when conditions are right and vanishes when they aren't.
          
          #### The Nature of the Body
          If we leave the body alone, it only produces Dukkha (hunger, thirst, aches). We must constantly "repair" it by feeding, bathing, and moving to produce Sukha. Thus, happiness is just the temporary relief of constant suffering.
        `,
        mm: `
          ၅။ ''ဆင်းရဲချမ်းသာ-ဝေဒနာ''  

          #### ''ပညတ်-ပရမတ်နှင့် ဝေဒနာ''
          လောကမှာ ချမ်းသာတဲ့သူကို သူဋ္ဌေး၊ ပိုက်ဆံမရှိတဲ့သူကို ဆင်းရဲသားလို့ ခေါ်ကြပါတယ်။ သုခဝေဒနာ အဖြစ်များတဲ့ရုပ်နာမ်ကို သူဋ္ဌေး၊ ဒုက္ခဝေဒနာအဖြစ်များတဲ့ရုပ်နာမ်ကို ဆင်းရဲသားလို့ အမည် ပေးခြင်းပါ။

          #### ''တဲနှင့်တိုက်''
          တဲနှင့်နေရင် ဆင်းရဲတယ်၊ တိုက်နှင့်နေရင် ချမ်းသာတယ်လို့ လောကသတ်မှတ်တဲ့အတိုင်း ပြောကြပါတယ်။ တဲကြောင့်ဆင်းရဲတာမဟုတ်၊ တဲနဲ့နေရင် မိုးမလုံ နေမလုံလို့ ဒုက္ခဝေဒနာပေါ်တာ ကြောင့် ဆင်းရဲတာပါ။ ပင်လယ်ကမ်းခြေမှာ ဝါးတဲနဲ့နေရပေမဲ့ သုခဝေဒနာ ပေါ်လို့ ကြိုက်ကြတာပါ။

          #### ''ဝေဒနာနဲ့ အနတ္တ'' 
          အာရုံက ကျေးဇူးပြုမှ ခံစားမှု-ဝေဒနာ ဖြစ်တာပါ။ အာရုံက 'အကြောင်း'၊ ဝေဒနာက 'အကျိုး'ပါ။ သူ့သဘောသူဆောင်ပြီး 'အကြောင်း-အကျိုး'နဲ့ ဖြစ်ပေါ်ချုပ် ပျောက် နေ တဲ့ 'ပိုင်လို့မရ အနတ္တ' တရားမျှပါပဲ။ 

          #### ''ခန္ဓာ၏ဆင်းရဲကသဘာဝ၊ ပြုပြင်ပေးမှသုခ''
          ခန္ဓာကိုမပြုပြင်ဘဲ ပကတိအတိုင်းထားလျှင် ဒုက္ခဆင်းရဲသာဖြစ်ပေါ်သည်။ ပြုပြင်ပေးမှ သုခချမ်းသာဖြစ်၏။ သုခရရန် အိပ်ရာထချိန်မှစပြီး ရေချိုးပေးရ၊ အစာကျွေးပေးရ၊ အိမ်သာတက်ပေးရသည်။ မပြုပြင်လျှင် ဒုက္ခပေးသော ကြောင့် အမြဲပြုပြင် နေရခြင်းဖြစ်သည်။ 
        `
      }
    },
    {
      id: '06',
      icon: <Ghost size={28} />,
      title: { en: 'Perception Mirage', mm: 'မှတ်သားမှုသဘော - သညာ' },
      desc: { 
        en: 'Memory is like a mirage or a scarecrow; it tricks us into identifying illusions as reality.', 
        mm: 'သညာသည် တံလျှပ် သို့မဟုတ် စာခြောက်ရုပ်နှင့် တူ၏။ အမှတ်မှားမှုဖြင့် အရှိတရားကို ဖုံးကွယ်ထားတတ်သော သဘောရှိသည်။' 
      },
      fullText: {
        en: `
          ### 6. Perception (Sanna)
          Sanna is the nature of the mind that marks and remembers objects. It is the architect of our "world" of labels and concepts. 
          
          #### The Thermos Example
          If someone asks where the thermos is, we point to the object on the table. But the eye only sees "color." "Thermos" is just a mark made by Sanna in the mind. 
          
          #### The Scarecrow Example
          Birds are afraid of a scarecrow because they mark it as a "human." This is a mistake of perception (Sanna). Similarly, humans mistake money for "happiness" and chase it like a mirage until they die of exhaustion.
          
          #### Mirage of Self
          Just as a mirage looks like water from afar, we mark mind-and-matter as "me," "mine," "permanent," or "happy." Sanna tricks us into believing in a solid "self" where there are only fleeting elements.
          
          #### Sanna and Nana (Wisdom)
          Wisdom (Nana) is the one that shows the truth that Sanna hides. While Sanna marks everything as "mine" and "permanent," Wisdom realizes "impermanence" and "non-self."
        `,
        mm: `
          ၆။ '''မှတ်သားမှုသဘော-သညာ''
          သညာဟူသည် ''အာရုံကိုမှတ်သားတတ်သောသဘော''ဖြစ်သည်။ သညာသည် အာရုံကိုသိရာ၌ အမှတ်ပြု၍ သိပြီးလျှင် ထိုအာရုံကို နောက်တစ်ခါတွေ့ပါက တစ်ဖန်ပြန်လည် အမှတ်ရသိခြင်း ဖြစ်သည်။

          #### ''ဓာတ်ဗူးနှင့်သညာ''
          စားပွဲပေါ်တွင် ရေနွေးဓာတ်ဗူးရှိပါသည်။ ဓာတ်ဗူး ဘယ်မှာလဲဟု မေးလျှင် ဓာတ်ဗူးကိုသာ လက်ညှိုးထိုးပြကြပါသည်။ အမှန်မှာ ဓာတ်ဗူး ဟူသည် ''မနောကသညာ''ဖြင့် မှတ်ထားသော အမည်ပညတ်သာဖြစ်သည်။ မြင်လျှင် အဆင်းရုပ် သာဖြစ်သည်။ 

          #### ''စာခြောက်ရုပ်နှင့်သညာ''
          စာကလေးများ၊ ငှက်များက စာခြောက်ရုပ်ကို ကြောက်ကြသည်မှာ လူနှင့်တူသောကြောင့်ဟု ထင်တတ်ပါသည်။ အမှန်မှာ လူနှင့် စာခြောက်ရုပ်သည် လုံးဝမတူပါ။ ငှက်တို့တွင် ဖြစ်ပေါ်လာသော''သညာက စာခြောက်ရုပ်ကို လူဟု အမှတ်မှား'' သောကြောင့် ဖြစ်ပါသည်။ 

          #### ''တံလျှပ်ပမာ သညာက္ခန္ဓာ''
          ''တံလျှပ်ကို ရေထင်ခြင်း''သည် သညာဖြင့် အမှတ်မှားခြင်းပင်ဖြစ်သည်။ တံလျှပ်ကို ရေထင်ပြီး ရွှေသမင်အလိုက်မှားခြင်းကြောင့် နောက်ဆုံးမှာ အမောဆို့ပြီးသေပွဲဝင်ရခြင်းဖြစ်သည်။ ထို့အတူ ပိုက်ဆံရှိရင် ချမ်းသာတယ်ဟု အမှတ်မှားသညာဖြင့် အလိုမပြည့်ပဲ သေပွဲဝင်ကြရပါသည်။ 
        `
      }
    },
    {
      id: '07',
      icon: <Clock size={28} />,
      title: { en: 'Power of the Present', mm: 'ပစ္စုပ္ပန် နှင့် ဉာဏ်' },
      desc: { 
        en: 'In the "Now," memory cannot trick you. Awareness in the present moment reveals the ultimate truth.', 
        mm: 'ပစ္စုပ္ပန်တည့်တည့်ကို သတိပြုနိုင်လျှင် ဉာဏ်ဖြစ်၏။ ပစ္စုပ္ပန်တွင် နေသူအတွက် ဘာမှမခက်ခဲပါ။' 
      },
      fullText: {
        en: `
          ### 7. Present and Wisdom
          To know life as it really is, one must observe the "Present Moment" (Now) with mindfulness (Sati).
          
          #### The Meaning of "Now"
          In common language, it refers to time. But in reality, "Now" is the moment sound hits the ear and the mind knows it. You cannot hear a sound before it happens, nor can you hear it after it is gone. Reality is only in the contact.
          
          #### The Supercomputer Analogy
          Thoughts are just the output of the mind's supercomputer. To master the mind, you must observe the process in the present. If you are in the "Now," the "Back Mind" cannot manipulate you with memory or craving.
          
          #### Impermanence of Form (Rupa)
          You cannot control the body to not age, not get sick, or not die. These are natural processes. The body is always "walking to the graveyard" even when you are sitting or sleeping. Mindfulness reveals this constant flow and change.
          
          #### Finding Solutions
          Problems arise in thoughts (Sanna). Sati (Mindfulness) wins over thoughts because Sati sees the present, where thoughts cannot deceive. Master the mind in the "Now," and nothing is hard.
        `,
        mm: `
          ၇။ ''ပစ္စုပ္ပန်နှင့်ဉာဏ်''
          ဘဝဆိုတဲ့ ရုပ်နာမ်ကို အမှန်သိရန် ပစ္စုပ္ပန်တည့်တည့်ကို သတိဖြင့်ရှုမှတ်အပ်၏။ ပစ္စုပ္ပန်ကို အမှန်သတိပြုနိုင်လျှင် ဉာဏ်ဖြစ်၏။ 

          #### ''ဘဝပြဿနာ အဖြေရှာ'' 
          ဘဝဟူသည် ''ရုပ်နာမ်'' ဖြစ်၍ ပြဿနာသည် ''ကိလေသာ''ဖြစ်၏။ ပြဿနာအားလုံးတို့သည် အတွေးမှာ ဖြစ်ကြပါသည်။ အတွေးတို့သည် သညာကြောင့်ဖြစ်သည်။ အတွေးသညာကို နိုင်သည်မှာ သတိသာ ဖြစ်သည်။ သတိသည် ပစ္စုပ္ပန်ကို အမှန်မြင်သောကြောင့် သညာမစွာနိုင်ချေ။

          #### ''လက်ခုပ်တီးသံ ပစ္စုပ္ပန်''
          လက်ခုတ်တီးလို့ ထွက်တဲ့အသံက စောလည်းထွက်လို့မရသလို နောက်ကျလည်းထွက်လို့မရပါ။ ဒါကြောင့် ထွက်တဲ့အသံက ပစ္စုပ္ပန်ပါ။ အရှိတရား(reality)က ကြားခိုက် ရုပ်နာမ်ပါ။ 

          #### ''ပစ္စုပ္ပန်နှင့်ရုပ်''
          ရုပ်ကို မအိုအောင် မနာအောင် မသေအောင် မိမိအလိုအတိုင်း ထိန်းချုပ်လို့ မရပါ။ ''အို၊ နာ၊ သေ''ဟူသည် သူ့သဘောသူဆောင်ပြီး ဖြစ်ပေါ်နေသော သဘာဝတရားတွေသာ ဖြစ်ပါတယ်။ ရုပ်တွေက မွေးရာကနေ သေရာ သင်းချိုင်းကို အမြဲသွားနေတာပါ။ 

          #### ''အနှစ်ချုပ်''
          ''သေမှာမကြောက်နှင့်၊ သတိမရှိမှာသာကြောက်''။ ''ပစ္စုပ္ပန်မှာ သတိရှိဖို့သာ လိုရင််းဖြစ်သည်။''
        `
      }
    },
    {
      id: '08',
      icon: <UserCircle size={28} />,
      title: { en: 'Mind-Matter & Roots', mm: 'ရုပ်နာမ် နှင့် ကိလေသာ' },
      desc: { 
        en: 'Defilements commit the crime; Mind-and-Matter pay the price. Abandon Kilesa to free the being.', 
        mm: 'အပြစ်လုပ်တာသည် ကိလေသာ၊ ဒုက္ခခံရတာသည် ရုပ်နှင့်နာမ်။ ကိလေသာကို ပယ်ရန်သာ လိုရင်းဖြစ်သည်။' 
      },
      fullText: {
        en: `
          ### 8. Mind-Matter and Defilements (Kilesa)
          What are we? We are just a combination of Mind-and-Matter (Rupa-Nama) and Defilements (Kilesa).
          
          #### Crime and Punishment
          - Defilements (Kilesa) commit the crime.
          - Mind-and-Matter (Rupa-Nama) go to prison (suffer).
          
          Examples:
          - Kilesa wants to fight -> Rupa-Nama gets killed.
          - Kilesa wants to overeat -> Rupa-Nama gets sick.
          - Kilesa wants to be beautiful -> Rupa-Nama suffers aging.
          
          #### Eradicating Kilesa
          The work of Dhamma is to eradicate defilements. Kilesa is simply "not knowing reality." The moment you know "it is just mind and matter," Kilesa vanishes.
          
          - See color -> Mind knows (This is Rupa-Nama).
          - Hear sound -> Mind knows (This is Rupa-Nama).
          
          When you observe the arising and passing of Rupa-Nama in every sense door, you are eradicating the roots of suffering.
        `,
        mm: `
          ၈။ “ရုပ်နာမ်နှင့်ကိလေသာ''                                                                                                         

          #### ''သေရမှာက-ကိလေသာ၊ သေကြတာက-ရုပ်နဲ့နာမ်''
          - အပြစ်လုပ်တာ-ကိလေသာ၊ ထောင်ကျတာက-ရုပ်နဲ့နာမ်
          - အကုသိုလ်လုပ်တာ-ကိလေသာ၊ အပ္ပါယ်ကျတာက-ရုပ်နဲ့နာမ်
          - စစ်တိုက်ချင်တာ-ကိလေသာ၊ သတ်ကြတာက-ရုပ်နဲ့နာမ်
          - လှချင်တာ-ကိလေသာ၊ အိုနေတာက-ရုပ်နဲ့နာမ် 

          #### ''ကိလေသာနှင့်ငါ''
          စိတ်ကို ညစ်ညူးစေတတ်သောသဘောသည် ကိလေသာဖြစ်၏။ လောဘဖြစ်တာ-ရှေ့စိတ်၊ ငါလောဘဖြစ်တယ်လို့ယူလိုက်တာက-နောက်စိတ်။ လောဘဖြစ်-ဖြစ်မှန်း နောက်စိတ်က သတိပြုမိလျှင် (လောဘက ငါမဟုတ်၊ ဖြစ်တာနာမ်နဲ့ရုပ်)။

          #### ''ကိလေသာငြိမ်းခြင်းသည် နိဗ္ဗာန်''
          မြင်၊ ကြား၊ နံ၊ စား၊ ထိ၊ တွေးတို့တွင် ရုပ်နာမ်ဟု သတိပြုလိုက်သည်နှင့် ကိလေသာငြိမ်း၏။ ကိလေသာတဒင်္ဂငြိမ်းလျှင် တဒင်္ဂနိဗ္ဗာန်ရ၍ အပြီးငြိမ်းလျှင် အပြီးနိဗ္ဗာန်ရ၏။
        `
      }
    },
    {
      id: '09',
      icon: <Anchor size={28} />,
      title: { en: 'The Guard & The Clinging', mm: 'သတိ နှင့် ဥပါဒါန်' },
      desc: { 
        en: 'Mindfulness (Sati) is the medicine; Clinging (Upādāna) is the disease. One replaces the other.', 
        mm: 'ဥပါဒါန်က ရောဂါ၊ သတိက ဆေးဖြစ်သည်။ သတိရှိလိုက်သည်နှင့် ဥပါဒါန်ချုပ်သွားပြီး ကုသိုလ်ဖြစ်ပေါ်လာသည်။' 
      },
      fullText: {
        en: `
          ### 9. Mindfulness (Sati) vs. Clinging (Upadana)
          Vipassana is the practice of establishing mindfulness (Satipatthana).
          
          #### Medicine and Disease
          Clinging (Upadana) is the disease; Mindfulness (Sati) is the medicine. We don't "force" clinging to go away; we replace it with Sati. Sati guards the mind from demerits.
          
          #### Sati vs Sanna
          Don't confuse marking (Sanna) with being mindful (Sati). 
          - Crossing the road: Looking left and right is a form of Sati. But if you don't realize it is Sati, "I" am crossing. 
          - Awareness: Sati is the "guard" that protects you from accidents and from mental poisons.
          
          #### The Simultaneous Rule
          Two states of mind cannot exist at the same time. If Sati is present, Upadana cannot be. If Upadana is present, Sati is not. When you watch TV and realize you are clinging to the story, the clinging stops immediately because Sati has arrived.
          
          #### Conclusion
          Don't be afraid of Upadana (Clinging); be afraid of not having Sati (Mindfulness). As long as you are not an Arhat, clinging will arise. Just make sure Sati follows it immediately. This is the battle of merit and demerit.
        `,
        mm: `
          ၉။ သတိနှင့်ဥပါဒါန် 
          ဝိပဿနာဆိုတာ သတိပဋ္ဌာန်တရား အားထုတ်ခြင်းဖြစ်သည်။ စွဲလမ်းမှုကို ဥပါဒါန်ဟုခေါ်၏၊ သတိဖြင့် စွဲလမ်းမှု ဥပါဒါန်ကို ပယ်ရပါသည်။ ဥပါဒါန်ကရောဂါ၊ သတိက ဆေးဖြစ်၏။ 

          #### ''သတိနှင့်ဥပါဒါန် ပြိုင်မဖြစ်ဘူး''
          စိတ်က တစ်ချိန်တွင် နှစ်စိတ် ပြိုင်မဖြစ်သောကြောင့် သတိရှိရင်လည်း ဥပါဒါန်မရှိပါဘူး။ ဥပါဒါန်ရှိရင်လည်း သတိမရှိပါဘူး။ ရှေ့စိတ်မှာဖြစ်နေတဲ့ ဥပါဒါန်ကို နောက်စိတ်က သတိပြုမိတာနဲ့ အဲဒီဥပါဒါန် မရှိတော့ပါဘူး။ 

          #### ''ရှေ့စိတ်ဖြစ်ပျက်၊ နောက်စိတ်မဂ်''
          ဥပါဒါန်က ရှေ့စိတ်မှာ ဖြစ်တယ်။ သတိက နောက်စိတ်မှာဖြစ်တယ်။ TV ကြည့်လို့ အဲဒီအာရုံုကို ဥပါဒါန်ကပ်သွားရင် နှစ်သက်တာတွေ၊ ဒေါသ ဖြစ်တာတွေ အကုန်ဖြစ်တော့တာဘဲ။ အဲဒီလိုဖြစ်တာတွေဟာ ဥပါဒါန်ကပ်လို့ပါလားလို့ သတိပြုမိရင် အဲဒီ ဥပါဒါန်ချုပ်သွားပါတယ်။ 

          #### ''ဥပါဒါန်ဖြစ်မှာမကြောက်နဲ့ သတိမရှိမှာသာကြောက်''
          ဥပါဒါန်က မဂ်ဉာဏ်နဲ့မပယ်ရသေးတဲ့အတွက် အကြောင်းတိုက်ဆိုင်ရင် ဖြစ်မှာဘဲ။ နောက်စိတ်က သတိမလိုက်နိုင်မှာသာ ကြောက်ပါ။ ဥပါဒါန်ကပ်ရင် ကပ်မှန်း နောက်စိတ်က သတိနဲ့အောက်မေ့နိုင်ရင် ဝိပဿနာကုသိုလ်ရပါပြီ။ 

          #### ''ဆေးသောက်ရင်ရောဂါပျောက်တယ်၊ ကုသိုလ်လုပ်ရင်အကုသိုလ်ပယ်တယ်'' 
          အကုသိုလ်ဟာ ကျောက်ခဲနဲ့တူတယ်။ ဘယ်လောက်သေးသေး ရေမှာနစ်မယ်။ ဒါပေမဲ့ ကုသိုလ်ဆိုတဲ့ လှေနဲ့ခံလိုက်ရင် အဲဒီကျောက်ခဲ ရေမှာ မနစ်တော့ဘူး။ ကုသိုလ်နဲ့ အကုသိုလ်ကို ပယ်လိုက်တာပါဘဲ။
        `
      }
    }
  ];

  return (
    <section id="framework" className="py-32 px-6 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#amber-600_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-amber-500"></div>
              <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs block">The Essential Architecture</span>
            </div>
            <h2 className="text-5xl md:text-7xl heading-font text-white leading-tight">
              {lang === 'en' ? 'Core Teaching Framework' : 'အဓိက တရားဒေသနာ အနှစ်ချုပ်'}
            </h2>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-slate-400 text-lg font-light italic border-l-2 border-amber-600/40 pl-8 leading-relaxed">
              {lang === 'en' 
                ? 'Nine pillars of understanding to guide the seeker from worldly entanglement to inner silence.' 
                : 'လောကီအရှုပ်အထွေးများမှ အတွင်းစိတ်၏ ငြိမ်သက်ခြင်းဆီသို့ လမ်းညွှန်ပေးသော မဏ္ဍိုင်ကြီး ကိုးရပ်။'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedPillar(p)}
              aria-label={`${lang === 'en' ? 'Learn more about' : 'အသေးစိတ်လေ့လာရန်'} ${p.title[lang]}`}
              className="group relative bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full text-left"
            >
              {/* Pillar Number */}
              <span aria-hidden="true" className="absolute top-8 right-10 text-white/5 font-black text-4xl group-hover:text-amber-500/10 transition-colors pointer-events-none">
                {p.id}
              </span>

              <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                {p.icon}
              </div>

              <h3 className={`font-bold text-white mb-4 group-hover:text-amber-500 transition-colors ${lang === 'en' ? 'text-xl md:text-2xl leading-snug' : 'text-lg md:text-xl'}`}>
                {p.title[lang]}
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-300 transition-colors mb-8 flex-grow">
                {p.desc[lang]}
              </p>

              <div className="mt-auto flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                 <span>{lang === 'en' ? 'Learn More' : 'အသေးစိတ်ဖတ်ရန်'}</span>
                 <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>

              <div className="absolute bottom-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 right-0 w-full h-px bg-amber-500/50"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-amber-500/50"></div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 p-8 bg-amber-500/5 border border-amber-500/20 rounded-3xl text-center">
          <p className="text-amber-200/60 text-sm font-medium italic">
            {lang === 'en' 
              ? "“Master the mind, and you master the world. Nothing is hard in the 'Now'.”" 
              : "“မိမိစိတ်ကို အုပ်စိုးနိုင်လျှင် လောကကို အုပ်စိုးနိုင်မည်။ ပစ္စုပ္ပန်တည့်တည့်တွင် မည်သည့်အရာမှ မခက်ခဲပါ။”"}
          </p>
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedPillar && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedPillar(null)}
          ></div>
          
          <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <header className="p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                   {selectedPillar.icon}
                 </div>
                 <div>
                    <h3 id="modal-title" className="text-2xl font-bold heading-font text-slate-900">{selectedPillar.title[lang]}</h3>
                    <p className="text-amber-600 text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'Detailed Lecture' : 'တရားဒေသနာ အကျယ်'}</p>
                 </div>
              </div>
              <button 
                onClick={() => setSelectedPillar(null)}
                aria-label="Close modal"
                className="p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-900 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </header>

            {/* Modal Content */}
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-1 bg-slate-50">
               <div className="max-w-none prose prose-amber prose-slate text-slate-800">
                  <div className="space-y-6">
                    {selectedPillar.fullText[lang].split('\n').map((line, idx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return null;
                      
                      // Render as Header if starts with #### or ###
                      if (trimmed.startsWith('####')) {
                        return <h4 key={idx} className="text-amber-700 font-bold text-lg mt-8 mb-4 border-l-4 border-amber-500 pl-4 uppercase tracking-wide">{trimmed.replace('####', '').trim()}</h4>;
                      }
                      if (trimmed.startsWith('###')) {
                        return <h3 key={idx} className="text-slate-900 font-bold text-2xl mt-10 mb-6">{trimmed.replace('###', '').trim()}</h3>;
                      }
                      
                      // Render as List if starts with - or numbers
                      if (trimmed.startsWith('-')) {
                        return (
                          <div key={idx} className="flex gap-3 mb-3 ml-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                            <p className="text-slate-700 leading-relaxed italic">{trimmed.substring(1).trim()}</p>
                          </div>
                        );
                      }

                      // Render normal paragraph
                      return <p key={idx} className="text-slate-700 leading-[1.8] text-lg mb-4 font-light">{trimmed}</p>;
                    })}
                  </div>
               </div>
            </div>

            {/* Modal Footer */}
            <footer className="p-6 bg-white border-t border-slate-100 flex justify-between items-center">
              <button 
                onClick={() => setSelectedPillar(null)}
                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-all flex items-center gap-2"
              >
                {lang === 'en' ? 'Done Reading' : 'ဖတ်ပြီးပါပြီ'}
              </button>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <BookOpen size={14} />
                <span>Dhammalann Archive</span>
              </div>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

export default Framework;
