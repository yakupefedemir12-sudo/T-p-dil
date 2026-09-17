import { TopicLesson } from '../types';

export const DEFAULT_TOPICS: TopicLesson[] = [
  {
    id: 'zitlik-baglaclari',
    title: 'Zıtlık Bağlaçları: Although vs. Despite',
    category: 'Bağlaçlar',
    badge: 'TIPDİL Garanti 4-6 Soru',
    frequencyRank: 'En Çok Çıkan (%100 Sınav Garantili)',
    introNote: 'Kıymetli meslektaşım, TIPDİL ve YÖKDİL Sağlık sınavlarında 80 sorunun en az 4 ile 6 tanesi doğrudan bu ayrımı sorgular. Patoloji ve farmakoloji vizitlerindeki yoğunluğunu biliyorum; bu yüzden teorik "adverbial clause of concession" lafını çöpe atıyoruz. Gözün sadece boşluktan sonra tam cümle (Özne + Yüklem) mi yoksa isim öbeği mi var ona bakacak!',
    module1: {
      coreLogic: 'Zıtlık bağlaçları klinik tablolarda beklentinin tersi durumları (örneğin ağır tedaviye rağmen kötüleşme ya da metastaza rağmen hayatta kalma) ifade eder. Sınavda anlamdan önce şekil gelir: Boşluğun sağına bak; fiil çekimli bir yüklem görüyorsan CÜMLE grubuna, sadece bir isim veya V-ing görüyorsan İSİM grubuna gidersin.',
      primaryFormula: '[Despite / In spite of + İsim / V-ing / The fact that] VS [Although / Even though / Though / While + Özne + Yüklem (SVO)]',
      formulaCards: [
        {
          title: 'Grup A: Arkasından TAM CÜMLE (Özne + Yüklem) Alanlar',
          pattern: 'Although / Even though / Though / While / Whereas + [ S + V + O ]',
          rules: [
            'Boşluktan hemen sonra çekimli bir fiil (is, was, has been, improves, shows vb.) mutlaka bulunmalıdır.',
            '"While" ve "Whereas" sıklıkla iki zıt hasta grubu veya iki farklı tedavi protokolü kıyaslanırken tercih edilir.',
            'Though cümle sonunda da ("..., though.") zarf gibi kullanılabilir.'
          ],
          clinicalExample: 'Although modern chemotherapy regimens have significantly advanced, five-year survival rates for pancreatic adenocarcinoma remain dishearteningly low.',
          exampleTr: 'Modern kemoterapi rejimleri belirgin biçimde ilerlemiş olmasına rağmen, pankreatik adenokarsinom için beş yıllık sağkalım oranları iç karartıcı derecede düşük kalmaktadır.'
        },
        {
          title: 'Grup B: Arkasından İSİM veya İSİM ÖBEĞİ (Noun / V-ing) Alanlar',
          pattern: 'Despite / In spite of / Notwithstanding + [ İsim / Noun Phrase / V-ing ]',
          rules: [
            '"Despite of" DİYE BİR YAPI ASLA YOKTUR! Komisyon şıklara "Despite of" koyarak hekimleri eler. Doğrusu: "Despite" (of\'suz) ya da "In spite of" (of\'lu).',
            'Arkasından ASLA doğrudan özne + çekimli yüklem gelmez (Ancak "...the fact that + SVO" gelirse cümle alabilir).',
            'V-ing geldiğinde cümlenin öznesi ile o eylemi yapan kişinin aynı olması gerekir.'
          ],
          clinicalExample: 'Despite prompt surgical intervention and broad-spectrum antimicrobial coverage, the septic patient succumbed to multi-organ failure.',
          exampleTr: 'Hızlı cerrahi müdahaleye ve geniş spektrumlu antimikrobiyal korumaya rağmen, septik hasta çoklu organ yetmezliğine yenik düştü.'
        }
      ],
      punctuationTips: [
        'Cümle başında "Although / Despite" kullanıldığında, yan cümlenin bittiği yere MUTLAKA VİRGÜL ( , ) konur: "[Although S + V], [S + V]."',
        'Cümle ortasında "However, Nevertheless, Nonetheless" kullanılacaksa öncesinde NOKTALI VİRGÜL ( ; ) veya NOKTA ( . ), sonrasında VİRGÜL ( , ) gelir: "... ; however, ..."',
        'Boşluktan hemen sonra VİRGÜL varsa şıklarda "Although" veya "Despite" arama; "However / Nevertheless" gibi geçiş zarflarına yönel!'
      ]
    },
    module2: [
      {
        verb: 'exacerbate',
        meaningTr: 'Kötüleştirmek, alevlendirmek, şiddetlendirmek',
        synonyms: ['aggravate', 'worsen', 'deteriorate', 'intensify'],
        tipdilCollocation: '...markedly exacerbate the patient\'s respiratory distress...',
        exampleSentence: 'Despite continuous bronchodilator nebulization, acute viral upper respiratory tract infections can exacerbate chronic asthma symptoms.',
        clinicalContext: 'Kronik obstrüktif akciğer hastalığı (KOAH) ve astım ataklarının tetikleyicilerinden bahseden makalelerde zıtlık bağlacıyla birlikte en sık test edilen fiildir.'
      },
      {
        verb: 'alleviate',
        meaningTr: 'Hafifletmek, dindirmek, yatıştırmak (ağrı/semptom)',
        synonyms: ['relieve', 'mitigate', 'ease', 'soothe', 'lessen'],
        tipdilCollocation: '...aimed at alleviating severe neuropathic pain...',
        exampleSentence: 'Although high-dose opioid analgesics were administered intravenously, they failed to alleviate the acute breakthrough pain in terminal cancer.',
        clinicalContext: 'Farmakoloji sorularında analjeziklerin, antiemetiklerin ve palyatif tedavilerin etkilerini tarif ederken şıklarda her 3 sınavdan birinde doğru cevap çıkar.'
      },
      {
        verb: 'manifest',
        meaningTr: 'Belirti/bulgu vermek, tezahür etmek, kendini göstermek',
        synonyms: ['present with', 'display', 'exhibit', 'reveal', 'demonstrate'],
        tipdilCollocation: '...typically manifests as recurrent spontaneous bleeding...',
        exampleSentence: 'Despite harboring the pathogenic mutation since birth, the genetic disorder may not manifest clinically until the fourth decade of life.',
        clinicalContext: 'Asemptomatik veya geç başlangıçlı otoimmün/genetik hastalık vaka sunumlarında "manifest as" veya "manifest with" şeklinde karşımıza çıkar.'
      },
      {
        verb: 'succumb to',
        meaningTr: 'Yenik düşmek, -den ölmek / boyun eğmek',
        synonyms: ['yield to', 'die from', 'surrender to', 'perish from'],
        tipdilCollocation: '...succumb to secondary bacterial superinfections...',
        exampleSentence: 'Even though intensive hemodynamic monitoring was maintained, the immunocompromised host eventually succumbed to fulminant sepsis.',
        clinicalContext: 'Mortalite ve prognostik çalışmalarda yoğun bakım hastalarının akıbetini bildirirken zıtlık kurgusuyla kurulur.'
      }
    ],
    module3: [
      {
        originalEn: 'Although targeted tyrosine kinase inhibitors have revolutionized the therapeutic landscape of chronic myeloid leukemia, secondary resistance mutations frequently emerge during long-term maintenance.',
        breakdown: {
          subject: 'targeted tyrosine kinase inhibitors (Bağlaçlı yan cümlede) / secondary resistance mutations (Ana cümlede)',
          mainVerb: 'have revolutionized (Yan cümlede) / frequently emerge (Ana cümlede)',
          conjunctionClause: 'Although targeted tyrosine kinase inhibitors have revolutionized the therapeutic landscape of chronic myeloid leukemia',
          objectOrComplement: 'the therapeutic landscape... / during long-term maintenance'
        },
        translationTr: 'Hedefe yönelik tirozin kinaz inhibitörleri kronik miyeloid löseminin terapötik tablosunda devrim yaratmış olmasına karşın, uzun süreli idame tedavisi sırasında sıklıkla ikincil direnç mutasyonları ortaya çıkmaktadır.',
        clinicalInsight: 'Hekim Gözü: Cümle başındaki "Although" + [Özne + have revolutionized...] yapısına dikkat. İki zıt yön var: Devrim niteliğinde başarı (+) ancak ikincil direnç ortaya çıkışı (-).'
      },
      {
        originalEn: 'Despite aggressive fluid resuscitation and administration of high-dose inotropic agents, the patient’s mean arterial pressure failed to reach the target physiological threshold.',
        breakdown: {
          subject: 'aggressive fluid resuscitation and administration of high-dose inotropic agents (Despite arkasındaki İSİM öbeği) / the patient’s mean arterial pressure (Ana cümle öznesi)',
          mainVerb: 'failed to reach (Ana cümle ana yüklemi)',
          conjunctionClause: 'Despite aggressive fluid resuscitation and administration of high-dose inotropic agents (Fiilsiz isim grubu)',
          objectOrComplement: 'the target physiological threshold (Ortalama arter basıncının ulaşamadığı fizyolojik hedef)'
        },
        translationTr: 'Agresif sıvı resüsitasyonuna ve yüksek doz inotropik ajanların uygulanmasına rağmen, hastanın ortalama arter basıncı hedeflenen fizyolojik eşiğe ulaşamadı.',
        clinicalInsight: 'Hekim Gözü: "Despite" sonrasında hiçbir çekimli fiil yok ("aggressive fluid resuscitation and administration..."). Komisyon buraya "Although" koymanı isteyerek tuzak kurar!'
      }
    ],
    module4: [
      {
        trapName: 'Tuzak 1: "Despite of" ve "In spite" Sahte Seçenekleri',
        howCommissionTricks: 'Soru hazırlayan komisyon, öğrencilerin ezberden "of" aradığını bildiği için seçeneklere kasten kural dışı olan "Despite of" veya of\'u eksik bırakılmış "In spite" koyar. İki doğru kalıp vardır: Ya tek başına "Despite", ya da üç parçalı "In spite of".',
        deceptiveOptionExample: 'A) Although   B) Despite of   C) In spite   D) Because   E) Despite',
        radarKeywords: ['severe complications', 'adverse effects', 'optimal glycemic control', 'intensive therapy'],
        defenseStrategy: 'Şıklarda "Despite of" gördüğün an üstünü kırmızı kalemle çiz; bu İngilizcede var olmayan bir uydurmadır. Boşluğun sağına bak: SVO varsa Although, isim varsa Despite/In spite of işaretle.'
      },
      {
        trapName: 'Tuzak 2: Cümle Gibi Görünen Upuzun İsim Öbekleri (Noun Clauses / Relatives)',
        howCommissionTricks: 'Komisyon boşluktan sonra 15 kelimelik bir tamlama yazar (Örn: "... the alarming increase in antibiotic-resistant nosocomial pathogens isolated from pediatric intensive care units..."). Öğrenci cümlede "isolated" kelimesini görünce fiil zanneder ve hemen "Although"a atlar! Oysa "isolated" burada kısaltılmış bir sıfattır (which were isolated). Ana yüklem yoktur!',
        deceptiveOptionExample: 'Soru kökü: "______ the alarming rise in multi-drug resistant strains across European hospitals, no new antibiotic class has been introduced."',
        radarKeywords: ['the increasing prevalence of...', 'the sudden onset of...', 'the widespread use of...'],
        defenseStrategy: 'Cümleyi baştan sona tara. Boşluk ile virgül arasında bağımsız bir özneye ait çekimli zaman fiili (is/was/has/have/V2) yoksa o bir İSİM ÖBEĞİDİR; cevap kesinlikle "Despite / In spite of" grubudur.'
      }
    ],
    module5: [
      {
        id: 'zitlik-q1',
        type: 'Kelime/Kalıp',
        questionText: 'Although continuous systemic corticosteroids successfully suppressed acute synovial inflammation in rheumatoid arthritis patients, prolonged administration was found to ______ the risk of secondary osteoporotic fractures.',
        options: [
          { key: 'A', text: 'alleviate', whyEliminatedOrCorrect: 'Çeldirici zıt anlam: Alleviate "hafifletmek" demektir; uzun süreli steroid kırık riskini hafifletmez, artırır.' },
          { key: 'B', text: 'exacerbate', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Exacerbate (kötüleştirmek / artırmak / alevlendirmek). Risk veya patolojiyi şiddetlendirme bağlamında tam oturur.' },
          { key: 'C', text: 'eradicate', whyEliminatedOrCorrect: 'Anlamsız: Eradicate "kökünü kazımak" demektir; kırık riskini yok etmez.' },
          { key: 'D', text: 'preclude', whyEliminatedOrCorrect: 'Çeldirici: Preclude "önlemek / engel olmak" demektir; steroid kırığı engellemez.' },
          { key: 'E', text: 'withhold', whyEliminatedOrCorrect: 'Uyumsuz: Withhold "tedaviyi esirgemek / vermemek" demektir; nesnesiyle anlamsızdır.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Sürekli sistemik kortikosteroidler romatoid artrit hastalarında akut sinoviyal inflamasyonu başarılı bir şekilde baskılamış olmasına rağmen, uzun süreli kullanımın ikincil osteoporotik kırık riskini alevlendirdiği (artırdığı) tespit edildi.',
        rationale: 'Cümle "Although" ile zıtlık kuruyor: İlk kısımda inflamasyonu baskılamak (+) var. Demek ki virgülden sonraki ana cümlede olumsuz bir sonuç (-) gelmeli. Osteoporotik kırık riskini artırmak/kötüleştirmek anlamına gelen "exacerbate" doğrudan doğru yanıttır.',
        distractorAnalysis: 'A şıkkındaki "alleviate" tıpta en çok sorulan kelimelerdendir ancak anlamca zıt düşer. C\'deki "eradicate" aşırı uçtur. D\'deki "preclude" ve E\'deki "withhold" klinik mantıkla uyuşmaz.'
      },
      {
        id: 'zitlik-q2',
        type: 'Gramer/Bağlaç',
        questionText: '______ rigorous adherence to modern insulin pump protocols, a considerable proportion of adolescent type 1 diabetic patients fail to attain target HbA1c values below 7.0%.',
        options: [
          { key: 'A', text: 'Even though', whyEliminatedOrCorrect: 'Elenir: Even though arkasından tam cümle (SVO) ister. Burada ise "rigorous adherence..." fiilsiz isim öbeğidir.' },
          { key: 'B', text: 'Despite', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Arkasından "rigorous adherence to..." isim öbeği gelmiştir ve zıtlık (sıkı uyuma rağmen hedefe ulaşamama) anlamı vardır.' },
          { key: 'C', text: 'Because', whyEliminatedOrCorrect: 'Elenir: Hem arkasından cümle ister hem de sebep-sonuç ilişkisi kurulamaz (sıkı uyum yüzünden başarısız olunmaz).' },
          { key: 'D', text: 'As a result of', whyEliminatedOrCorrect: 'Elenir: İsim alır ancak "uyumun bir sonucu olarak başarısızlık" mantık hatasıdır (zıtlık gerekir).' },
          { key: 'E', text: 'Whereas', whyEliminatedOrCorrect: 'Elenir: İki bağımsız cümleyi kıyaslar ve arkasından tam cümle ister.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Modern insülin pompa protokollerine sıkı sıkıya bağlı kalınmasına rağmen, tip 1 diyabetli adölesan hastaların önemli bir kısmı %7.0\'nin altındaki hedef HbA1c değerlerine ulaşmakta başarısız olmaktadır.',
        rationale: 'Hap Formül Kontrolü: Boşluktan virgüle kadar olan kısım: "rigorous adherence to modern insulin pump protocols" -> Çekimli fiil yok, yalın bir isim öbeği (adherence = bağlılık/uyum). Anlamda ise "protokole uyulmasına karşın hedefe ulaşamama" zıtlığı var. [Zıtlık + İsim Öbeği = Despite].',
        distractorAnalysis: 'Komisyon A şıkkına "Even though" koyarak öğrencinin anlam zıtlığını fark edip gramer yapısını atlamasını amaçlamıştır. C ve D anlamca zıtlığı karşılamaz; E ise tam cümle talep eder.'
      },
      {
        id: 'zitlik-q3',
        type: 'Cümle Tamamlama',
        questionText: 'While early laparoscopic cholecystectomy is widely considered the gold standard for uncomplicated acute cholecystitis, ______.',
        options: [
          { key: 'A', text: 'surgeons usually postpone the procedure until full clinical remission is documented', whyEliminatedOrCorrect: 'Elenir: Standart kabul edilen bir işlem nedensizce ertelenmez; zıtlık dengesi eksik kalır.' },
          { key: 'B', text: 'it significantly minimizes total hospital stay and overall healthcare expenditure', whyEliminatedOrCorrect: 'Elenir: Bu erken cerrahinin ek bir avantajıdır; "While" zıtlık bağlacıyla çelişir (paralel olumlu bilgi).' },
          { key: 'C', text: 'the optimal surgical timing in critically ill geriatric patients remains controversial', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Komplikasyonsuz vakalarda altın standart olmasına karşılık, kritik durumdaki yaşlı hastalarda en uygun cerrahi zamanlamanın tartışmalı kaldığını belirterek zıtlık dengesini kurar.' },
          { key: 'D', text: 'antibiotic therapy alone is never sufficient to prevent gallstone recurrence', whyEliminatedOrCorrect: 'Elenir: Cümlenin ana öznesi ve karşılaştırma odağından kopuk bağımsız bir iddiadır.' },
          { key: 'E', text: 'because biliary tract ultrasonography reliably confirms acute mucosal thickening', whyEliminatedOrCorrect: 'Elenir: Gramer hatası; "While" ile başlayan yan cümlenin ardından ana cümle beklenirken bir bağlaç daha (because) getirilmiştir.' }
        ],
        correctAnswer: 'C',
        translationTr: 'Erken laparoskopik kolesistektomi komplikasyonsuz akut kolesistit için yaygın olarak altın standart kabul edilirken, kritik durumdaki geriatrik hastalarda optimal cerrahi zamanlama hala tartışmalı olmaya devam etmektedir.',
        rationale: 'Cümle Tamamlama Formülü: Girişte "While" (iken / -e karşın) var. Bir grupta ("uncomplicated acute cholecystitis") kesin kabul edilmiş bir kural varken, virgülden sonra diğer grupta ("critically ill geriatric patients") belirsizlik/tartışma ("remains controversial") bildirilerek kusursuz bir klinik zıtlık sağlanmıştır.',
        distractorAnalysis: 'B seçeneği tipik bir tuzaktır; erken cerrahiyi öven olumlu bir ifadedir ancak zıtlık bağlacı olumluya karşı olumsuz/kısıtlayıcı bir bilgi ister. E seçeneği ise yan yana iki bağlaç hatası yaratır.'
      }
    ]
  },
  {
    id: 'sebep-sonuc-baglaclari',
    title: 'Sebep-Sonuç: Because vs. Due to / Owing to',
    category: 'Bağlaçlar',
    badge: 'TIPDİL Garanti 3-4 Soru',
    frequencyRank: 'En Çok Çıkan (%100 Sınav Garantili)',
    introNote: 'Değerli meslektaşım, etiyoloji ve patogenez bir hekimin günlük dilidir. TIPDİL komisyonu da "hastalığın nedeni", "ilacın yan etkisi" veya "tedavinin bırakılma gerekçesi" metinlerinde sebep bağlaçlarını sormayı çok sever. Formül yine aynı: Arkasından tam cümle mi geliyor yoksa sebep olan isim mi?',
    module1: {
      coreLogic: 'Sebep-sonuç bağlaçları patolojinin etiyolojik etkenini veya fizyopatolojik mekanizmasını sonuç cümlesine bağlar. Tıpkı zıtlık bağlaçlarında olduğu gibi, burada da soru kökündeki boşluğun sağı anahtardır: Çekimli eylem varsa Cümle Grubu (Because), sadece etken/patoloji adı varsa İsim Grubu (Due to).',
      primaryFormula: '[Because of / Due to / Owing to / On account of + İsim / V-ing] VS [Because / Since / As / Given that + Özne + Yüklem (SVO)]',
      formulaCards: [
        {
          title: 'Grup A: Arkasından CÜMLE Alan Sebep Bağlaçları',
          pattern: 'Because / Since / As / In that / Given that + [ S + V + O ]',
          rules: [
            '"Since" ve "As" sınavda "çünkü / -dığı için" anlamında "Because" ile %100 eşanlamlıdır. ("Since"i sadece "den beri" sanmak en büyük öğrenci yanılgısıdır!).',
            '"In that" genellikle cümle ortasında virgülden sonra gelir ve "...bakımından / şu açıdan dolayı" anlamı taşır.',
            'Arkasından mutlaka tam çekimli bir yüklem gelmelidir.'
          ],
          clinicalExample: 'Since aminoglycoside antibiotics possess narrow therapeutic windows, peak and trough serum concentrations must be monitored relentlessly.',
          exampleTr: 'Aminoglikozit antibiyotikler dar terapötik pencerelere sahip olduğu için, tepe ve vadi serum konsantrasyonları aralıksız takip edilmelidir.'
        },
        {
          title: 'Grup B: Arkasından İSİM Alan Sebep Edatları',
          pattern: 'Due to / Owing to / Because of / On account of / As a result of + [ İsim / Noun Phrase ]',
          rules: [
            'Boşluğun arkasından hastalık, sendrom veya etken ismi gelir (Due to hepatic insufficiency, owing to cellular hypoxia vb.).',
            '"Due to" to be fiilinden (is, was, were) sonra yüklem tamamlayıcısı olarak çok sevilir: "The arrhythmia was due to hypokalemia."',
            'Arkasından doğrudan "özne + fiil" gelemez; sadece "...the fact that" eklenirse cümle alabilir.'
          ],
          clinicalExample: 'The randomized clinical trial was terminated prematurely due to unacceptably high rates of treatment-emergent cardiotoxicity.',
          exampleTr: 'Randomize klinik çalışma, kabul edilemez derecede yüksek tedavi kaynaklı kardiyotoksisite oranları nedeniyle vaktinden önce sonlandırıldı.'
        }
      ],
      punctuationTips: [
        '"Since / As / Because" cümle başında gelirse iki cümle arasına MUTLAKA VİRGÜL konur: "[Since S + V], [S + V]."',
        '"Therefore / Consequently / Thus / Hence" (Bu yüzden / Sonuç olarak) iki cümle arasında kullanılır: Önüne NOKTALI VİRGÜL ( ; ), arkasına VİRGÜL ( , ) alır: "... ; therefore, ..."',
        'Boşluktan önce noktalı virgül ( ; ) ve boşluktan sonra virgül ( , ) varsa cevap asla "Because" olamaz; "Therefore / Consequently" olmalıdır!'
      ]
    },
    module2: [
      {
        verb: 'attribute to',
        meaningTr: '-e bağlamak, -den kaynaklandığını düşünmek',
        synonyms: ['ascribe to', 'link to', 'assign to', 'hold responsible for'],
        tipdilCollocation: '...is largely attributed to chronic endothelial dysfunction...',
        exampleSentence: 'The accelerated progression of coronary atherosclerosis in diabetic patients is primarily attributed to persistent oxidative stress.',
        clinicalContext: 'Etiyoloji ve risk faktörleri paragraflarında "X is attributed to Y" (X, Y\'ye bağlanmaktadır) şeklinde pasif çatıyla test edilir.'
      },
      {
        verb: 'trigger',
        meaningTr: 'Tetiklemek, başlatmak, yol açmak',
        synonyms: ['initiate', 'precipitate', 'provoke', 'spark', 'induce'],
        tipdilCollocation: '...trigger a life-threatening anaphylactic shock...',
        exampleSentence: 'Exposure to environmental allergens can trigger mast cell degranulation, resulting in massive histamine release.',
        clinicalContext: 'İmmünoloji, alerji ve nöroloji (epileptik nöbeti tetiklemek vb.) metinlerinde sebep-sonuç bağlaçlarının yüklemi olarak gelir.'
      },
      {
        verb: 'stem from',
        meaningTr: '-den kaynaklanmak, -den ileri gelmek',
        synonyms: ['originate from', 'arise from', 'derive from', 'emanate from'],
        tipdilCollocation: '...symptoms stemming from peripheral nerve compression...',
        exampleSentence: 'Most microvascular diabetic complications stem from non-enzymatic glycation of intracellular proteins.',
        clinicalContext: 'Patofizyolojik süreçlerin temel kökenini açıklarken sebep anlamı katan en popüler phrasal verb\'dür.'
      },
      {
        verb: 'induce',
        meaningTr: 'İndüklemek, neden olmak, uyarmak',
        synonyms: ['cause', 'bring about', 'elicit', 'generate'],
        tipdilCollocation: '...drug-induced acute interstitial nephritis...',
        exampleSentence: 'Certain non-steroidal anti-inflammatory drugs can induce severe gastroduodenal ulceration by inhibiting protective prostaglandin synthesis.',
        clinicalContext: 'İlaç yan etkileri (drug-induced hepatitis vb.) ve laboratuvar deneylerinde patoloji oluşturma anlatımlarında çıkar.'
      }
    ],
    module3: [
      {
        originalEn: 'Because atypical antipsychotic agents can induce substantial metabolic alterations including weight gain and dyslipidemia, baseline fasting glucose must be assessed prior to treatment initiation.',
        breakdown: {
          subject: 'atypical antipsychotic agents (Yan cümle) / baseline fasting glucose (Ana cümle pasif öznesi)',
          mainVerb: 'can induce (Yan cümle) / must be assessed (Ana cümle yüklemi)',
          conjunctionClause: 'Because atypical antipsychotic agents can induce substantial metabolic alterations...',
          objectOrComplement: 'substantial metabolic alterations... / prior to treatment initiation'
        },
        translationTr: 'Atipik antipsikotik ajanlar kilo alımı ve dislipidemi dahil önemli metabolik değişiklikleri indükleyebileceğinden ötürü, tedaviye başlanmadan önce başlangıç açlık glukozu mutlaka değerlendirilmelidir.',
        clinicalInsight: 'Hekim Gözü: "Because" arkasından [Özne: atypical antipsychotic agents] + [Fiil: can induce] almış. Klinik sebep metabolik yan etkiler, klinik sonuç ise açlık kan şekeri takibi zorunluluğudur.'
      },
      {
        originalEn: 'Due to the insidious progression of chronic kidney disease in early stages, the majority of afflicted individuals remain entirely asymptomatic until substantial nephron loss occurs.',
        breakdown: {
          subject: 'the insidious progression of chronic kidney disease... (Due to arkası İSİM) / the majority of afflicted individuals (Ana cümle öznesi)',
          mainVerb: 'remain (Ana cümle yüklemi)',
          conjunctionClause: 'Due to the insidious progression of chronic kidney disease in early stages (Fiilsiz edat öbeği)',
          objectOrComplement: 'entirely asymptomatic / until substantial nephron loss occurs'
        },
        translationTr: 'Kronik böbrek hastalığının erken evrelerdeki sinsi ilerlemesi nedeniyle, etkilenen bireylerin büyük çoğunluğu belirgin nefron kaybı meydana gelene kadar tamamen asemptomatik kalmaktadır.',
        clinicalInsight: 'Hekim Gözü: "Due to" arkasında çekimli fiil yok, "insidious progression" (sinsi ilerleyiş) isim öbeği var. Bu nedenle buraya "Because" değil "Due to" gelmek zorundadır.'
      }
    ],
    module4: [
      {
        trapName: 'Tuzak 1: "Since" Bağlacını Sadece Zaman Sanmak ("Den beri" Tuzağı)',
        howCommissionTricks: 'Tıp öğrencileri liseden beri "Since" yapısını sadece "1990\'dan beri" kalıbıyla hatırlar. Oysa TIPDİL Sağlık sınavında "Since" sorularının %80\'inde "Since = Because (Çünkü / -dığı için)" anlamı test edilir! Komisyon şıklara Because koymaz, yerine "Since" veya "As" koyar.',
        deceptiveOptionExample: 'A) Although   B) Since   C) Despite   D) Even if   E) In spite of',
        radarKeywords: ['risk of toxicity', 'high mortality', 'contraindicated', 'susceptible to'],
        defenseStrategy: 'Boşluktan sonra tam cümle varsa ve cümlenin devamında present perfect (have/has V3) YOKSA, "Since"i "ÇÜNKÜ" diye oku. Mantıklıysa cevabın %100 "Since"dir.'
      },
      {
        trapName: 'Tuzak 2: "Due to" ile "Because of" Arasına "Owing" Eksiltmesi Koymak',
        howCommissionTricks: 'Komisyon şıklara "Owing" (to\'su yok) veya "Because" (cümle isteyen) ile "Due to"yu yan yana koyar. İsim öbeğinin önüne to\'suz "Owing" yazılamayacağını bilmeyenler elenir.',
        deceptiveOptionExample: 'A) Owing   B) Because   C) Due to   D) In order that   E) Whereas',
        radarKeywords: ['adverse drug reactions', 'prolonged hypoxia', 'genetic predisposition'],
        defenseStrategy: 'Formülü hatırla: "Owing TO", "Due TO", "Because OF". Edat eksikse o şık doğrudan çöptür. İsim öbeği varsa tam edatlı "Due to"yu işaretle.'
      }
    ],
    module5: [
      {
        id: 'sebep-q1',
        type: 'Kelime/Kalıp',
        questionText: 'The sudden development of metabolic encephalopathy in cirrhotic patients is frequently ______ by acute gastrointestinal bleeding or spontaneous bacterial peritonitis.',
        options: [
          { key: 'A', text: 'alleviated', whyEliminatedOrCorrect: 'Elenir: Alleviate semptomu hafifletmektir; GİS kanama ensefalopatiyi dindirmez.' },
          { key: 'B', text: 'triggered', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Trigger (tetiklemek / başlatmak). Ensefalopati atağını başlatan klinik faktörler tam oturur.' },
          { key: 'C', text: 'impeded', whyEliminatedOrCorrect: 'Elenir: Impede "engellemek / mani olmak" demektir; patoloji oluşumunu durdurmaz.' },
          { key: 'D', text: 'withdrawn', whyEliminatedOrCorrect: 'Elenir: Withdraw ilacı kesmek veya geri çekilmek demektir; patoloji tetiklenmesiyle alakasızdır.' },
          { key: 'E', text: 'remedied', whyEliminatedOrCorrect: 'Elenir: Remedy "iyileştirmek, çare bulmak" demektir.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Siroz hastalarında metabolik ensefalopatinin ani gelişimi, sıklıkla akut gastrointestinal kanama veya spontan bakteriyel peritonit tarafından tetiklenmektedir.',
        rationale: 'Klinik Sebep-Sonuç Mantığı: Ensefalopati atağını ortaya çıkaran iki ölümcül komplikasyon (GİS kanama ve peritonit) verilmiş. Bir patolojiyi tetiklemek, başlatmak tıpta "trigger" veya "precipitate" fiilleriyle ifade edilir.',
        distractorAnalysis: 'A şıkkındaki alleviated ve E\'deki remedied pozitif (iyileştirici) fiiller olduğu için patolojik komplikasyonla taban tabana zıttır. C şıkkı (engellemek) ise mekanizmaya aykırıdır.'
      },
      {
        id: 'sebep-q2',
        type: 'Gramer/Bağlaç',
        questionText: '______ malignant melanoma cells possess high metastatic potential and profound intrinsic resistance to conventional chemotherapeutic agents, systemic immunotherapy has become the cornerstone of advanced disease management.',
        options: [
          { key: 'A', text: 'Despite', whyEliminatedOrCorrect: 'Elenir: Arkasından isim öbeği ister, burada ise "malignant melanoma cells possess..." tam cümlesi vardır.' },
          { key: 'B', text: 'As', whyEliminatedOrCorrect: 'DOĞRU CEVAP: "As = Because / -dığı için". Arkasından tam cümle (SVO) alarak melanomun standart kemoterapiye dirençli olmasını immünoterapi kullanımının gerekçesi yapar.' },
          { key: 'C', text: 'Because of', whyEliminatedOrCorrect: 'Elenir: Anlamca sebep bildirse de arkasından isim öbeği almak zorundadır, cümle alamaz.' },
          { key: 'D', text: 'In spite of', whyEliminatedOrCorrect: 'Elenir: Hem isim öbeği ister hem de anlam zıtlık değil sebep-sonuçtur.' },
          { key: 'E', text: 'Even though', whyEliminatedOrCorrect: 'Elenir: Cümle alır fakat zıtlık bildirir; dirençli olduğu için yeni tedaviye geçilmesi mantıksal bir sebeptir.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Malign melanom hücreleri yüksek metastatik potansiyele ve geleneksel kemoterapötik ajanlara karşı derin bir içsel dirence sahip olduğu için, sistemik immünoterapi ileri evre hastalık yönetiminin temel taşı haline gelmiştir.',
        rationale: 'Hap Formül: Boşluğun sağı: "malignant melanoma cells (Özne) + possess (Yüklem) + high metastatic potential (Nesne)". Bu bir TAM CÜMLEDİR. Cümlenin mantığı: Hücreler kemoterapiye dirençli [SEBEP] -> Bu yüzden immünoterapi temel tedavi oldu [SONUÇ]. Sebep + Tam Cümle = As / Because / Since.',
        distractorAnalysis: 'Komisyon A ve D şıklarına zıtlık isim bağlaçlarını, C şıkkına ise isim alan "Because of"u koymuştur. E seçeneğindeki "Even though" ise sebep-sonuç ilişkisini zıtlıkla bozmaya çalışır.'
      },
      {
        id: 'sebep-q3',
        type: 'Cümle Tamamlama',
        questionText: 'Prompt recognition of septic shock is crucial in emergency departments, ______.',
        options: [
          { key: 'A', text: 'although broad-spectrum antibiotics are immediately administered without culture results', whyEliminatedOrCorrect: 'Elenir: Zıtlık bağlacı anlamsal olarak sebep bağlantısını koparır.' },
          { key: 'B', text: 'because every hour of delay in antimicrobial therapy is linked to an exponential rise in patient mortality', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Erken tanı neden hayati? "Çünkü antimikrobiyal tedavideki her bir saatlik gecikme hasta mortalitesinde katlanarak artan bir artışla ilişkilidir."' },
          { key: 'C', text: 'despite the availability of non-invasive continuous arterial blood pressure monitoring devices', whyEliminatedOrCorrect: 'Elenir: İsim öbeği bağlacıdır fakat ana cümlenin erken tanı gerekliliğiyle mantıklı bir sebep/zıtlık oluşturmaz.' },
          { key: 'D', text: 'so that most intensive care units report satisfactory discharge rates', whyEliminatedOrCorrect: 'Elenir: Amaç bağlacıdır fakat erken tanı hastaneden taburcu oranı çıksın diye yapılmaz, mortaliteyi önlemek için yapılır.' },
          { key: 'E', text: 'in case mechanical ventilation had been initiated prior to hospital arrival', whyEliminatedOrCorrect: 'Elenir: Tense uyumsuzluğu (had been) ve mantıksız önlem kurgusu.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Acil servislerde septik şokun derhal tanınması hayati önem taşır; çünkü antimikrobiyal tedavideki her bir saatlik gecikme, hasta mortalitesinde katlanarak artan bir yükseliş ile ilişkilidir.',
        rationale: 'Klinik Mantık: Ana cümlede "is crucial" (kritiktir / hayatidir) ifadesi varsa, yazar mutlaka arkasından bunun NEDENİNİ ("because / since...") açıklar. Mortalite artışı gecikmenin bedelidir.',
        distractorAnalysis: 'A şıkkı gramer olarak düzgün görünse de zıtlık bağı anlamsızdır. D şıkkındaki "so that" klinik amaç odaklı değildir. Doğru sebep B şıkkındadır.'
      }
    ]
  },
  {
    id: 'ikili-baglaclar',
    title: 'İkili & Paralel Bağlaçlar: Not only... but also',
    category: 'Bağlaçlar',
    badge: 'TIPDİL Garanti 2-3 Soru',
    frequencyRank: 'Çok Yüksek Öncelik (%85+)',
    introNote: 'Kıymetli meslektaşım, ikili bağlaçlar TIPDİL\'in en kolay "bedava net" sorularıdır. Çünkü burada soru kökünün bir yarısını görünce diğeri doğrudan parlar! "Not only" gördün mü şıklarda "but also" ararsın; "Neither" gördün mü "nor" ararsın. Bu kuralları hafızana kazı, 10 saniyede neti cebe koy.',
    module1: {
      coreLogic: 'İkili bağlaçlar tıp dilinde birden fazla risk faktörünü, iki ilacın kombine etkisini veya bir hastalığın hem fiziksel hem psikolojik sonuçlarını eşdeğer gramer yapısıyla birbirine bağlar. Kural: İlk parçadan sonra hangi tür sözcük (sıfat, isim, fiil) gelmişse, ikinci parçadan sonra da aynı tür sözcük gelmelidir (Paralellik İlkesi).',
      primaryFormula: '[Not only X ... but also Y] = [Both X ... and Y] | [Either X ... or Y] | [Neither X ... nor Y]',
      formulaCards: [
        {
          title: 'Grup 1: Ekleme & Vurgu (Not only... but also / Both... and)',
          pattern: 'Not only [Sıfat/İsim/Fiil] ... but also [Sıfat/İsim/Fiil]',
          rules: [
            '"Not only" cümlenin başına gelirse devrik cümle (Inversion) yapar: "Not only does smoking cause lung cancer, but it also elevates..."',
            '"but also" bazen kısaltılabilir: "but... as well" veya sadece "but..." şeklinde görülebilir.',
            '"Both" daima "AND" ile eşleşir. "Both... as well as" yanlıştır!'
          ],
          clinicalExample: 'Chronic sleep deprivation not only impairs cognitive performance, but it also disrupts endocrine regulation of glucose metabolism.',
          exampleTr: 'Kronik uyku yoksunluğu yalnızca bilişsel performansı bozmakla kalmaz, aynı zamanda glukoz metabolizmasının endokrin düzenlenmesini de aksatır.'
        },
        {
          title: 'Grup 2: Seçenek & Olumsuzluk (Either... or / Neither... nor)',
          pattern: 'Either [A] or [B] (Ya A ya B) / Neither [A] nor [B] (Ne A ne B)',
          rules: [
            '"Neither... nor" kendi içinde olumsuzdur; yüklemi olumlu çekimlenir fakat cümlenin anlamı negatiftir.',
            'Fiil çekimi "nor" ve "or"dan sonraki ikinci özneye göre yapılır (Subject-verb agreement).',
            'Komisyon "Neither... or" veya "Either... nor" şeklinde çaprazlama yaparak tuzak kurar; eşleşmeleri asla karıştırma!'
          ],
          clinicalExample: 'In refractory cardiac arrest, neither standard epinephrine boluses nor vasopressin demonstrated superior long-term neurological recovery.',
          exampleTr: 'Dirençli kardiyak arrestte, ne standart epinefrin bolusları ne de vazopressin üstün bir uzun süreli nörolojik iyileşme gösterdi.'
        }
      ],
      punctuationTips: [
        '"Not only" cümle başına yerleştirilmişse hemen ardından yardımcı fiil (does, did, has, is) gelir, ana fiil yalın kalır.',
        '"Both X and Y" özne pozisyonundaysa yüklem DAİMA ÇOĞUL (are, were, have) olur.',
        'İkili bağlaçların arasına virgül konmaz: "neither A nor B" düz akar.'
      ]
    },
    module2: [
      {
        verb: 'impair',
        meaningTr: 'Bozmak, zedelemek, hasara uğratmak',
        synonyms: ['damage', 'compromise', 'harm', 'deteriorate', 'debilitate'],
        tipdilCollocation: '...severely impairs hepatic clearance of drugs...',
        exampleSentence: 'Excessive alcohol intake impairs not only fine motor coordination but also short-term memory consolidation.',
        clinicalContext: 'Nörolojik disfonksiyon ve organ yetmezliklerinin anlatıldığı tüm makalelerde soru kökü veya şık olarak karşımıza çıkar.'
      },
      {
        verb: 'potentiate',
        meaningTr: 'Potansiyalize etmek, etkisini katlayarak artırmak',
        synonyms: ['enhance', 'augment', 'boost', 'intensify'],
        tipdilCollocation: '...potentiate the anticoagulant effects of warfarin...',
        exampleSentence: 'Co-administration of macrolide antibiotics can potentiate the toxicity of statins by inhibiting cytochrome P450 enzymes.',
        clinicalContext: 'Farmakoloji ilaç etkileşimlerinde (sinerjistik etki) "not only... but also" ile birlikte en çok test edilen fiildir.'
      },
      {
        verb: 'predispose to',
        meaningTr: '-e zemin hazırlamak, yatkınlık oluşturmak',
        synonyms: ['make susceptible to', 'incline to', 'leave vulnerable to'],
        tipdilCollocation: '...predisposes elderly patients to recurrent aspiration pneumonia...',
        exampleSentence: 'Severe malnutrition predisposes pediatric patients to both opportunistic fungal infections and delayed wound healing.',
        clinicalContext: 'Risk faktörlerinin hastalığa yol açma mekanizmalarında "predispose to + isim" yapısıyla sürekli karşımıza çıkar.'
      },
      {
        verb: 'eradicate',
        meaningTr: 'Kökünü kazımak, tamamen yok etmek (enfeksiyon/tümör)',
        synonyms: ['eliminate', 'wipe out', 'destroy completely', 'extirpate'],
        tipdilCollocation: '...successfully eradicate Helicobacter pylori colonization...',
        exampleSentence: 'Triple therapy aims to not only eradicate the underlying bacterial infection but also prevent peptic ulcer recurrence.',
        clinicalContext: 'Enfeksiyon hastalıkları ve onkolojide mikrobun veya malign hücrelerin tamamen vücuttan temizlenmesi bağlamında kullanılır.'
      }
    ],
    module3: [
      {
        originalEn: 'Not only does chronic hyperinsulinemia promote systemic arterial stiffness, but it also accelerates the development of non-alcoholic steatohepatitis.',
        breakdown: {
          subject: 'chronic hyperinsulinemia (Özne)',
          mainVerb: 'does... promote (Devrik yüklem) / accelerates (İkinci yüklem)',
          conjunctionClause: 'Not only does... but it also accelerates...',
          objectOrComplement: 'systemic arterial stiffness / non-alcoholic steatohepatitis'
        },
        translationTr: 'Kronik hiperinsülinemi yalnızca sistemik arteryel sertliği tetiklemekle kalmaz, aynı zamanda non-alkolik steatohepatit gelişimini de hızlandırır.',
        clinicalInsight: 'Hekim Gözü: Cümle başında "Not only" kullanıldığı için "does chronic hyperinsulinemia promote" şeklinde devrik yapı (inversion) oluştuğuna dikkat et. Sınavda boşluk "but it also" kısmında sorulur.'
      },
      {
        originalEn: 'During the initial diagnostic workup, the patient exhibited neither focal neurological deficits nor significant cognitive disorientation.',
        breakdown: {
          subject: 'the patient (Özne)',
          mainVerb: 'exhibited (Yüklem)',
          conjunctionClause: 'neither focal neurological deficits nor significant cognitive disorientation (İkili nesne bağlacı)',
          objectOrComplement: 'focal neurological deficits / significant cognitive disorientation'
        },
        translationTr: 'İlk tanısal değerlendirme sırasında hasta, ne fokal nörolojik defisitler ne de belirgin bilişsel dezoryantasyon sergiledi.',
        clinicalInsight: 'Hekim Gözü: "Neither" ve "nor" ardışık iki klinik bulguyu olumsuzlaştırmıştır. Cümlenin fiili "exhibited" olumludur fakat anlam "ikisi de yoktu" şeklindedir.'
      }
    ],
    module4: [
      {
        trapName: 'Tuzak 1: Çaprazlama Eşleşme Tuzağı ("Neither... or" / "Either... and")',
        howCommissionTricks: 'Soru kökünde cümlenin ilk yarısında "neither" verir; boşluğu cümlenin ikinci yarısına açar. Şıklara kasten "or", "and", "but", "nor" koyar. Dikkatsiz öğrenci "neither" ile "or"u karıştırıp yanlış şıkkı işaretler.',
        deceptiveOptionExample: 'A) or   B) and   C) nor   D) as well   E) but',
        radarKeywords: ['Not only', 'Neither', 'Either', 'Both'],
        defenseStrategy: 'Formül tekerlemesi: "Neither NOR", "Either OR", "Both AND", "Not only BUT ALSO". Soru kökünde "Neither" gördüğün anda diğer şıklara bakmadan gözün "NOR" arasın.'
      },
      {
        trapName: 'Tuzak 2: Paralellik İlkesinin Bozulması',
        howCommissionTricks: 'Komisyon "Not only"den sonra bir fiil koyar (ör. "Not only treats..."). Ancak "but also"dan sonra bir isim veya tam cümle koyarak gramer ahengini bozar. Doğru şıkta her iki tarafta da aynı sözcük türü bulunmalıdır.',
        deceptiveOptionExample: 'A) but also reduces   B) but reduction of   C) as well as the risk   D) neither prevents   E) nor inhibits',
        radarKeywords: ['not only', 'both', 'either'],
        defenseStrategy: 'İlk bağlaçtan sonra ne var? Sıfatsa sıfat, fiilse fiil ara. İlk tarafta çekimli fiil varsa, ikinci tarafta da aynı çekimde fiil aramalısın.'
      }
    ],
    module5: [
      {
        id: 'ikili-q1',
        type: 'Kelime/Kalıp',
        questionText: 'The novel combined monoclonal antibody therapy was proven to not only ______ primary tumor growth but also prevent distant osseous metastasis.',
        options: [
          { key: 'A', text: 'hinder', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Hinder (engellemek / mani olmak / frenlemek). Tümör büyümesini engellemek klinik bağlama tam oturur.' },
          { key: 'B', text: 'induce', whyEliminatedOrCorrect: 'Elenir: Induce "neden olmak, tetiklemek" demektir; antikor tedavisi tümör büyümesini tetiklemez.' },
          { key: 'C', text: 'accelerate', whyEliminatedOrCorrect: 'Elenir: Tümör büyümesini hızlandırmak tedavi hedefi olamaz.' },
          { key: 'D', text: 'manifest', whyEliminatedOrCorrect: 'Elenir: Manifest "belirti vermek" demektir; geçişsizdir ve tümör büyümesi nesnesiyle uyumsuzdur.' },
          { key: 'E', text: 'exacerbate', whyEliminatedOrCorrect: 'Elenir: Exacerbate "kötüleştirmek / alevlendirmek" tir; antikordan olumlu etki beklenir.' }
        ],
        correctAnswer: 'A',
        translationTr: 'Yeni kombine monoklonal antikor tedavisinin, yalnızca primer tümör büyümesini engellemekle kalmayıp aynı zamanda uzak kemik metastazlarını da önlediği kanıtlandı.',
        rationale: 'Paralellik ve Anlam: "not only [fiil] but also prevent distant metastasis". İkinci kısımda "prevent" (önlemek - olumlu klinik sonuç) var. Demek ki birinci kısımda da tümör büyümesini engelleyen, baskılayan bir fiil gelmeli. "Hinder = inhibit = prevent = suppress".',
        distractorAnalysis: 'B, C ve E şıkları tümörün büyümesini artıran olumsuz etkiler bildirdiği için tedavinin amacıyla çelişir. D şıkkı ise anlamsal olarak yerleşemez.'
      },
      {
        id: 'ikili-q2',
        type: 'Gramer/Bağlaç',
        questionText: 'In patients with end-stage renal disease, severe secondary hyperparathyroidism ______ exacerbates vascular calcification, ______ leads to progressive renal osteodystrophy.',
        options: [
          { key: 'A', text: 'both / as well as', whyEliminatedOrCorrect: 'Elenir: "Both" daima "and" ile eşleşir; "as well as" ile eşleşmez.' },
          { key: 'B', text: 'neither / or', whyEliminatedOrCorrect: 'Elenir: "Neither" asla "or" almaz, "nor" alır.' },
          { key: 'C', text: 'not only / but also', whyEliminatedOrCorrect: 'DOĞRU CEVAP: "not only [exacerbates...] but also [leads to...]". İki klinik hasarı eş zamanlı ve paralel yüklemlerle bağlar.' },
          { key: 'D', text: 'either / and', whyEliminatedOrCorrect: 'Elenir: "Either" sadece "or" ile kullanılır.' },
          { key: 'E', text: 'so / that', whyEliminatedOrCorrect: 'Elenir: "So... that" arasına sıfat veya zarf ister; burada doğrudan fiil gelmiştir.' }
        ],
        correctAnswer: 'C',
        translationTr: 'Son dönem böbrek hastalığı olan hastalarda şiddetli sekonder hiperparatiroidizm yalnızca vasküler kalsifikasyonu alevlendirmekle kalmaz, aynı zamanda ilerleyici renal osteodistrofiye de yol açar.',
        rationale: 'Hap Formül: Seçeneklerdeki ikililere bak: A (both... as well as -> kural dışı), B (neither... or -> kural dışı), D (either... and -> kural dışı). Tek doğru ikili kombinasyon "not only... but also"dur.',
        distractorAnalysis: 'Komisyonun en sevdiği sahte eşleştirmeler şıklara serpiştirilmiştir. Sadece doğru çiftleri (not only / but also) bilmek bu soruyu 5 saniyede çözdürür.'
      },
      {
        id: 'ikili-q3',
        type: 'Cümle Tamamlama',
        questionText: 'When assessing acute chest pain in an elderly hypertensive patient, the emergency physician must consider ______.',
        options: [
          { key: 'A', text: 'not only acute myocardial infarction but also aortic dissection as life-threatening etiologies', whyEliminatedOrCorrect: 'DOĞRU CEVAP: "not only [akut MI] but also [aort diseksiyonu]". İki ölümcül ayırıcı tanıyı mükemmel bir paralellikle bağlar.' },
          { key: 'B', text: 'either serum cardiac troponin levels were within normal reference ranges', whyEliminatedOrCorrect: 'Elenir: "Either" koyup "or" ile devam ettirmemiştir; gramer yarıda kalmıştır.' },
          { key: 'C', text: 'neither coronary angiography should be delayed under any circumstances', whyEliminatedOrCorrect: 'Elenir: "Neither" arkasından tek bir bağımsız cümle getirilmiş ve "nor" eşi verilmemiştir.' },
          { key: 'D', text: 'both electrocardiographic ST-segment elevation or continuous rhythm telemetry', whyEliminatedOrCorrect: 'Elenir: "Both" kelimesi "or" ile eşleştirilmiştir; "and" olmalıdır.' },
          { key: 'E', text: 'as well as the patient was admitted to the intensive cardiac care unit', whyEliminatedOrCorrect: 'Elenir: "Consider" fiilinden sonra "as well as" doğrudan nesne alamaz.' }
        ],
        correctAnswer: 'A',
        translationTr: 'Yaşlı bir hipertansif hastada akut göğüs ağrısını değerlendirirken, acil hekimi yalnızca akut miyokard enfarktüsünü değil, aynı zamanda hayatı tehdit eden etiyolojiler olarak aort diseksiyonunu da göz önünde bulundurmalıdır.',
        rationale: 'Klinik Karar Formülü: "must consider [nesne 1] but also [nesne 2]". Göğüs ağrısında atlanmaması gereken iki hayati tablo paralel olarak sıralanmıştır.',
        distractorAnalysis: 'B ve C şıklarında ikili bağlaçların eşleri (or / nor) yoktur. D şıkkında "both... or" şeklinde gramer hatası yapılmıştır.'
      }
    ]
  },
  {
    id: 'zaman-tense-tuzaklari',
    title: 'Zaman & Tense Tuzakları: Since / By the time',
    category: 'Zaman & Tense',
    badge: 'TIPDİL Garanti 3-4 Soru',
    frequencyRank: 'En Çok Çıkan (%100 Sınav Garantili)',
    introNote: 'Meslektaşım, tıp fakültesinde zaman kavramı nöbetler ve vizitler arasında kaybolur; ama TIPDİL\'de iki altın zaman kuralı vardır. "Since" ve "By the time". Bu iki bağlacın tense kombinasyonları değişmez bir matematik kuralı gibidir. Soruda bu bağlaçları gördüğün an şıklardaki 12 zamanı değil, doğrudan formülün karşılığını arayacaksın.',
    module1: {
      coreLogic: 'Akademik tıp makaleleri tıp tarihindeki bir keşiften bugüne kadar gelen süreçleri anlatırken "Since + V2 -> Present Perfect", gelecekteki veya geçmişteki bir eşik noktasına kadar tamamlanan süreçleri anlatırken "By the time" kullanır. Bu bağlaçlar tense uyumu sorularının omurgasıdır.',
      primaryFormula: '[SINCE + Past Simple (V2) , Present Perfect (Have/Has V3)] & [BY THE TIME + V1/V2 , Will have V3 / Had V3]',
      formulaCards: [
        {
          title: 'Altın Formül 1: SINCE (Zaman Anlamında "-den beri")',
          pattern: 'Since + [ Past Simple (V2 / Geçmiş Yıl) ] , [ Present Perfect (Have/Has V3) ]',
          rules: [
            '"Since"in hemen bağlı olduğu yan cümle MUTLAKA Simple Past (V2 veya geçmiş tarih ör. since 1928) olmak zorundadır.',
            'Virgülden sonraki ana cümle ise DAİMA Present Perfect (have/has been, have improved vb.) veya Present Perfect Continuous olur.',
            'Tersine çevrilirse: "Ana Cümle (Have/has V3) + since + Yan Cümle (V2)".'
          ],
          clinicalExample: 'Ever since Alexander Fleming discovered penicillin in 1928, antibiotic stewardship has remained a pivotal global health challenge.',
          exampleTr: 'Alexander Fleming 1928\'de penisilini keşfettiğinden beri, antibiyotik yönetimi hayati bir küresel sağlık sorunu olmayı sürdürmüştür.'
        },
        {
          title: 'Altın Formül 2: BY THE TIME (-e kadar)',
          pattern: 'By the time + V1 (Geniş Zaman) -> Future Perfect (will have V3) | By the time + V2 (Geçmiş) -> Past Perfect (had V3)',
          rules: [
            '"By the time" arkasından V1 (Present) alırsa, ana cümle "will have V3" (yapmış olacak) olur.',
            '"By the time" arkasından V2 (Past) alırsa, ana cümle "had V3" (çoktan yapmıştı) olur.',
            '"By the time"ın kendi yan cümlesinde ASLA "will" veya "had" bulunamaz!'
          ],
          clinicalExample: 'By the time the trauma team arrived at the shock room, the patient had already lost more than two liters of blood.',
          exampleTr: 'Travma ekibi şok odasına ulaştığında (ulaşana kadar), hasta çoktan iki litreden fazla kan kaybetmişti.'
        }
      ],
      punctuationTips: [
        '"Since" cümle başındaysa yan cümleden sonra virgül gelir.',
        '"By the time" ile "Until" arasındaki fark: Until eylemin o ana kadar sürdüğünü, By the time ise eylemin o andan önce tamamlandığını vurgular.',
        'Soru kökünde "over the last two decades / in recent years" görürsen doğrudan "have/has V3" seçeneğine git!'
      ]
    },
    module2: [
      {
        verb: 'undergo',
        meaningTr: 'Geçirmek, maruz kalmak (ameliyat, tedavi, değişim)',
        synonyms: ['experience', 'go through', 'subject to', 'endure'],
        tipdilCollocation: '...undergo emergency coronary artery bypass grafting...',
        exampleSentence: 'Since the patient had undergone radical gastrectomy five years ago, monthly intramuscular vitamin B12 supplementation was instituted.',
        clinicalContext: 'Cerrahi operasyon ve tanısal tetkik geçmişini ifade ederken en sık kullanılan klinik eylemdir.'
      },
      {
        verb: 'subside',
        meaningTr: 'Yatışmak, gerilemek, azalmak (ateş, ağrı, şişlik)',
        synonyms: ['recede', 'diminish', 'abate', 'decline', 'taper off'],
        tipdilCollocation: '...until clinical symptoms gradually subsided...',
        exampleSentence: 'By the time the microbiological blood cultures turned positive, the patient’s high-grade fever had already subsided.',
        clinicalContext: 'Akut enfeksiyon ve inflamasyon bulgularının zaman içinde sönümlenmesini tarif eder.'
      },
      {
        verb: 'prevail',
        meaningTr: 'Yaygın olmak, hakim olmak, üstün gelmek',
        synonyms: ['predominate', 'persist', 'be widespread', 'reign'],
        tipdilCollocation: '...the variant that has prevailed across tropical regions...',
        exampleSentence: 'Considerable skepticism has prevailed regarding the efficacy of therapeutic hypothermia since initial multi-center trials were published.',
        clinicalContext: 'Epidemiyolojik çalışmalarda suşların veya tıbbi inanışların geçerliliğini anlatırken çıkar.'
      },
      {
        verb: 'deteriorate',
        meaningTr: 'Kötüleşmek, bozulmak, dejenere olmak',
        synonyms: ['worsen', 'decline', 'degenerate', 'fall apart'],
        tipdilCollocation: '...the patient\'s arterial blood gas parameters rapidly deteriorated...',
        exampleSentence: 'By the time the intubation equipment was prepared at the bedside, the patient’s respiratory status had deteriorated catastrophically.',
        clinicalContext: 'Acil ve yoğun bakım vaka takibinde klinik tablonun hızla bozulmasını anlatırken kullanılır.'
      }
    ],
    module3: [
      {
        originalEn: 'Since the global eradication campaign for smallpox was successfully completed in 1980, routine childhood vaccination programs have discontinued the administration of the vaccinia vaccine.',
        breakdown: {
          subject: 'the global eradication campaign for smallpox (Yan cümle) / routine childhood vaccination programs (Ana cümle)',
          mainVerb: 'was successfully completed (Simple Past V2) / have discontinued (Present Perfect have V3)',
          conjunctionClause: 'Since the global eradication campaign for smallpox was successfully completed in 1980',
          objectOrComplement: 'the administration of the vaccinia vaccine'
        },
        translationTr: 'Çiçek hastalığına yönelik küresel eradikasyon kampanyası 1980\'de başarıyla tamamlandığından beri, rutin çocukluk çağı aşı programları vaksinya aşısının uygulanmasını durdurmuştur.',
        clinicalInsight: 'Hekim Gözü: "Since + 1980 (geçmiş zaman/was completed)" -> Ana cümle: "have discontinued" (present perfect). Bu formül sınavda şaşmaz!'
      },
      {
        originalEn: 'By the time the histopathological biopsy confirmation was finalized by the pathology department, the metastatic malignant tumor had already invaded adjacent regional lymph nodes.',
        breakdown: {
          subject: 'the histopathological biopsy confirmation (Yan cümle öznesi) / the metastatic malignant tumor (Ana cümle öznesi)',
          mainVerb: 'was finalized (Simple Past V2) / had already invaded (Past Perfect had V3)',
          conjunctionClause: 'By the time the histopathological biopsy confirmation was finalized...',
          objectOrComplement: 'adjacent regional lymph nodes'
        },
        translationTr: 'Histopatolojik biyopsi onayı patoloji bölümü tarafından netleştirilene kadar, metastatik malign tümör çoktan komşu bölgesel lenf nodlarını invaze etmişti.',
        clinicalInsight: 'Hekim Gözü: "By the time + V2 (was finalized)" yan cümlesi, ana cümlede "had invaded" (past perfect) gerektirir. Biyopsi sonucu gelmeden önce lenf nodu tutulumu gerçekleşmiştir.'
      }
    ],
    module4: [
      {
        trapName: 'Tuzak 1: "Since" Yan Cümlesine "Have/Has V3" Koydurma Yanılgısı',
        howCommissionTricks: 'Öğrenci "Since gördüm hemen have/has V3 işaretleyeyim" ezberine kapılır. Komisyon boşluğu "Since"in HEMEN YANINA açar. Öğrenci oraya have/has V3 koyarsa elenir! "Since"in içi V2, dışı (ana cümle) have/has V3 olur.',
        deceptiveOptionExample: 'A) has introduced / had been   B) was introduced / have decreased   C) introduced / decreased   D) is introduced / will decrease   E) had introduced / decreases',
        radarKeywords: ['Since 2010', 'Ever since', 'Since the discovery of...', 'over the past decade'],
        defenseStrategy: 'Boşluk nerede? "Since ______" ise Simple Past (V2) ara. "Since V2 , ______" ise Present Perfect (have/has V3) ara.'
      },
      {
        trapName: 'Tuzak 2: "By the time" Cümlesinin İçine "Will" veya "Would" Koyma',
        howCommissionTricks: 'Zaman bağlaçlarının (when, before, as soon as, by the time) doğrudan bağlı olduğu yan cümleye ASLA "will / would" gelmez. Komisyon şıklara "By the time the patient will arrive" gibi cazip ama dilbilgisi dışı şıklar yerleştirir.',
        deceptiveOptionExample: 'A) will arrive / had died   B) arrives / will have received   C) arrived / has received   D) had arrived / receives   E) would arrive / will receive',
        radarKeywords: ['By the time', 'By the end of this year', 'By next month'],
        defenseStrategy: 'Zaman bağlacının peşinden gelen ilk boşlukta "will", "shall", "would" olan tüm seçenekleri anında ele.'
      }
    ],
    module5: [
      {
        id: 'tense-q1',
        type: 'Kelime/Kalıp',
        questionText: 'Although the surgical team managed to stabilize the lacerated femoral artery, the patient’s vital signs began to ______ rapidly due to severe hemorrhagic shock.',
        options: [
          { key: 'A', text: 'alleviate', whyEliminatedOrCorrect: 'Elenir: Alleviate semptomun hafiflemesidir; vital bulgular hafiflemez, kötüleşir.' },
          { key: 'B', text: 'deteriorate', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Deteriorate (kötüleşmek / bozulmak). Hemorajik şokta vital bulguların hızla bozulması klinik gerçektir.' },
          { key: 'C', text: 'remedy', whyEliminatedOrCorrect: 'Elenir: İyileştirmek anlamına gelir; bağlamla çelişir.' },
          { key: 'D', text: 'eradicate', whyEliminatedOrCorrect: 'Elenir: Kökünü kazımak anlamındadır; vital bulgularla kullanılmaz.' },
          { key: 'E', text: 'undergo', whyEliminatedOrCorrect: 'Elenir: Undergo maruz kalmaktır; geçişli bir fiildir ("deteriorate rapidly" gibi zarfla tek başına yüklem olamaz).' }
        ],
        correctAnswer: 'B',
        translationTr: 'Cerrahi ekip laserasyona uğramış femoral arteri stabilize etmeyi başarmış olmasına rağmen, hastanın vital bulguları şiddetli hemorajik şok nedeniyle hızla bozulmaya başladı.',
        rationale: 'Hekim Gözüyle Anlam Analizi: Hemorajik şok gelişen bir hastada yaşamsal bulgular (vital signs) bozulur, kötüleşir. Tıpta vital bulguların bozulması "deteriorate" fiili ile kalıplaşmıştır.',
        distractorAnalysis: 'A şıkkındaki alleviate ve C şıkkındaki remedy pozitif terimlerdir, şok tablosunda imkansızdır. D şıkkı ise anlamsızdır.'
      },
      {
        id: 'tense-q2',
        type: 'Gramer/Bağlaç',
        questionText: 'Since minimally invasive robotic-assisted laparoscopic surgery ______ in our surgical oncology department two years ago, total post-operative complication rates ______ markedly.',
        options: [
          { key: 'A', text: 'has been introduced / decreased', whyEliminatedOrCorrect: 'Elenir: "Since" yan cümlesi have/has V3 alamaz; V2 olmalıdır.' },
          { key: 'B', text: 'was introduced / have decreased', whyEliminatedOrCorrect: 'DOĞRU CEVAP: "Since + was introduced (V2) , have decreased (Present Perfect)". Altın kural tam uygulanmıştır.' },
          { key: 'C', text: 'is introduced / had decreased', whyEliminatedOrCorrect: 'Elenir: Tense uyumsuzluğu; iki yıl önce (two years ago) için present (is) kullanılamaz.' },
          { key: 'D', text: 'had introduced / are decreasing', whyEliminatedOrCorrect: 'Elenir: Robotik cerrahi nesnedir, etken "had introduced" pasif olması gerekirken etkendir.' },
          { key: 'E', text: 'was introducing / will decrease', whyEliminatedOrCorrect: 'Elenir: "Since" geçmişi şimdiki zamana bağlar, geleceğe (will) bağlamaz.' }
        ],
        correctAnswer: 'B',
        translationTr: 'İki yıl önce cerrahi onkoloji kliniğimizde minimal invaziv robotik yardımlı laparoskopik cerrahi uygulamaya konulduğundan beri, toplam postoperatif komplikasyon oranları belirgin biçimde azalmıştır.',
        rationale: 'Matematiksel Formül: [Since + V2 (two years ago)] -> [Ana Cümle: have/has V3]. Boşluk 1: "was introduced" (iki yıl önce tanıtıldı). Boşluk 2: "have decreased" (o günden beri azaldı).',
        distractorAnalysis: 'Komisyon A şıkkında have/has V3\'ü başa koyarak ezberci adayı avlamaya çalışmıştır. C, D ve E seçenekleri ise zaman çizelgesini bozar.'
      },
      {
        id: 'tense-q3',
        type: 'Cümle Tamamlama',
        questionText: 'By the time emergency interventional cardiologists were able to perform percutaneous transluminal angioplasty, ______.',
        options: [
          { key: 'A', text: 'the patient will have demonstrated complete recovery of left ventricular ejection fraction', whyEliminatedOrCorrect: 'Elenir: "were able to (V2)" geçmiş zamandır; "will have" geleceğe aittir, tense uyumsuzluğu vardır.' },
          { key: 'B', text: 'irreversible ischemic transmural myocardial necrosis had already occurred in the infarcted territory', whyEliminatedOrCorrect: 'DOĞRU CEVAP: By the time + V2 (were able to) -> Ana Cümle: had + V3 (had already occurred). Kardiyologlar anjiyoya girene kadar miyokard nekrozu çoktan gerçekleşmişti.' },
          { key: 'C', text: 'because thrombolytic infusion has been administered by paramedics in the field', whyEliminatedOrCorrect: 'Elenir: İki bağlaç (By the time + because) yan yana getirilerek ana cümle eksik bırakılmıştır.' },
          { key: 'D', text: 'in order to restore microvascular coronary perfusion within the critical golden hour', whyEliminatedOrCorrect: 'Elenir: Cümle değil amaç bildiren mastar öbeğidir; ana yüklemi yoktur.' },
          { key: 'E', text: 'as soon as systemic oxygen saturation returns to physiological limits', whyEliminatedOrCorrect: 'Elenir: Tense uyumsuzluğu ve ana cümle yokluğu.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Acil girişimsel kardiyologlar perkütan translüminal anjiyoplasti uygulayabilene kadar, enfarkt alanında geri dönüşümsüz iskemik transmural miyokard nekrozu çoktan meydana gelmişti.',
        rationale: 'Klinik Tense Formülü: [By the time + V2] yapısı, ana cümlede geçmişte o andan önce tamamlanmış bir olayı bildiren [had + V3] (Past Perfect) ister. Nekrozun çoktan oturmuş olması "had already occurred" ile kusursuz verilir.',
        distractorAnalysis: 'A şıkkı "will have" ile geçmişe gelecek karıştırır. C şıkkı ana cümlesizdir. D şıkkı yüklemsiz bir mastar grubudur.'
      }
    ]
  },
  {
    id: 'kisaltmalar-participles',
    title: 'Tıbbi Kısaltmalar & Participle: V3 vs. V-ing',
    category: 'Kısaltmalar (Participle)',
    badge: 'TIPDİL Garanti 2-3 Soru',
    frequencyRank: 'Çok Yüksek Öncelik (%85+)',
    introNote: 'Kıymetli meslektaşım, tıp makalelerinin özet (abstract) kısımları yer kazanmak için bağlaçları ve relative clause\'ları atıp kısaltma (reduction) yapar. Komisyon bunu çok iyi bildiği için her sınavda 2-3 soruyla "buraya V-ing mi gelecek yoksa V3 mü?" diye sorar. Kuralımız tek: Edilgen (yapılan/edilen) ise V3, etken (yapan/eden) ise V-ing!',
    module1: {
      coreLogic: 'Cümle başındaki veya isim arkasındaki kısaltmalarda mantık tamamen aktif/pasif refleksidir. Boşluktan sonra bir nesne (object) varsa ve eylemi yapan tarif ediliyorsa V-ing; boşluktan sonra "by / in / with" gibi bir edat varsa veya nitelediği isim o eyleme maruz kalıyorsa V3 seçilir.',
      primaryFormula: '[V-ing + Nesne] (Aktif: Yapan / Eden) VS [V3 (Past Participle) + Edat/Zarf] (Pasif: Yapılan / Maruz Kalan)',
      formulaCards: [
        {
          title: 'V-ing (Present Participle) - Aktif Kısaltma',
          pattern: '[ Fiil-ing + Nesne ] , [ Ana Cümle ] veya [ İsim + Fiil-ing + Nesne ]',
          rules: [
            '"Who / which causes" -> "causing" (neden olan)',
            '"Who / which inhibits" -> "inhibiting" (inhibe eden)',
            'Kural: Arkasından genellikle doğrudan etki ettiği nesne (ör. causing tissue necrosis) gelir.'
          ],
          clinicalExample: 'Blocking adrenergic beta-1 receptors, metoprolol effectively decreases myocardial oxygen consumption during strenuous exertion.',
          exampleTr: 'Adrenerjik beta-1 reseptörlerini bloke eden metoprolol, ağır efor sırasında miyokardiyal oksijen tüketimini etkili biçimde azaltır.'
        },
        {
          title: 'V3 (Past Participle) - Pasif Kısaltma',
          pattern: '[ V3 + by / in / at ] , [ Ana Cümle ] veya [ İsim + V3 ]',
          rules: [
            '"Which was diagnosed" -> "diagnosed" (tanı konmuş olan)',
            '"Which was characterized by" -> "characterized by" (ile karakterize)',
            'Kural: Arkasından nesne gelmez; edat (by, in, with) veya virgül gelir.'
          ],
          clinicalExample: 'Characterized by persistent hyperglycemia and progressive peripheral neuropathy, diabetes mellitus requires lifelong multifaceted intervention.',
          exampleTr: 'Kalıcı hiperglisemi ve ilerleyici periferik nöropati ile karakterize olan diabetes mellitus, yaşam boyu çok yönlü müdahale gerektirir.'
        }
      ],
      punctuationTips: [
        'Cümle başında kısaltma yapıldığında, kısaltmanın bittiği yere VİRGÜL konur ve virgülden hemen sonraki özne o kısaltmayı yapan ya da maruz kalan KİŞİ/MADDE olmalıdır (Dangling Modifier kuralı).',
        'İsim arkasındaki kısaltmalarda virgül yoksa restrictive (tanımlayıcı sıfat), virgül varsa non-restrictive (ek bilgi) işlevi görür.',
        '"Having V3" görürsen: Eylemin ana cümleden ÇOK DAHA ÖNCE tamamlandığını anlatır (Having received three doses of vaccine...).'
      ]
    },
    module2: [
      {
        verb: 'characterize by',
        meaningTr: '-ile karakterize olmak, belirgin özelliği olmak',
        synonyms: ['distinguished by', 'marked by', 'featured by', 'defined by'],
        tipdilCollocation: '...a chronic condition characterized by recurrent seizures...',
        exampleSentence: 'Characterized by microcytic hypochromic erythrocyte morphology, iron deficiency anemia remains the most prevalent nutritional disorder worldwide.',
        clinicalContext: 'Hastalık tanımlamalarında kısaltma olarak en çok test edilen fiildir (Which is characterized by -> Characterized by).'
      },
      {
        verb: 'administer',
        meaningTr: 'Uygulamak, vermek (ilaç, tedavi)',
        synonyms: ['give', 'dispense', 'apply', 'deliver'],
        tipdilCollocation: '...administered intravenously at a dose of...',
        exampleSentence: 'When administered concurrently with oral anticoagulants, high-dose aspirin substantially increases the hazard of gastrointestinal hemorrhage.',
        clinicalContext: 'İlaçların veriliş yolları ve dozaj protokollerinde "administered orally / intravenously" şeklinde kısaltılır.'
      },
      {
        verb: 'complicate',
        meaningTr: 'Komplike hale getirmek, karmaşıklaştırmak',
        synonyms: ['aggravate', 'compound', 'make complex'],
        tipdilCollocation: '...pneumonia complicated by pleural effusion...',
        exampleSentence: 'Acute pyelonephritis complicated by perinephric abscess formation warrants urgent urological decompression.',
        clinicalContext: 'Bir hastalığın üstüne ikinci bir tablonun eklenmesini niteleyen sıfat kısaltmasıdır (complicated by).'
      },
      {
        verb: 'compromise',
        meaningTr: 'Tehlikeye atmak, zayıflatmak, bozmak',
        synonyms: ['jeopardize', 'undermine', 'impair', 'weaken'],
        tipdilCollocation: '...in patients with compromised immune systems...',
        exampleSentence: 'Compromising the blood-brain barrier, severe bacterial meningitis facilitates the uncontrolled infiltration of peripheral leukocytes.',
        clinicalContext: '"Immune-compromised" (bağışıklığı baskılanmış) kalıbı ve aktif kısaltma olarak bariyerlerin bozulmasında sıkça sorulur.'
      }
    ],
    module3: [
      {
        originalEn: 'Isolated from the venom of pit vipers, specific peptide molecules have been synthesized to act as potent competitive inhibitors of angiotensin-converting enzyme.',
        breakdown: {
          subject: 'specific peptide molecules (Ana cümle öznesi; aynı zamanda kısaltmadaki eyleme maruz kalan)',
          mainVerb: 'have been synthesized (Ana yüklem)',
          conjunctionClause: 'Isolated from the venom of pit vipers (Pasif kısaltma: [Which were] isolated from...)',
          objectOrComplement: 'to act as potent competitive inhibitors of angiotensin-converting enzyme'
        },
        translationTr: 'Çıngıraklı yılan zehrinden izole edilen spesifik peptit molekülleri, anjiyotensin dönüştürücü enzimin güçlü yarışmalı inhibitörleri olarak işlev görmek üzere sentezlenmiştir.',
        clinicalInsight: 'Hekim Gözü: Cümle başındaki "Isolated from..." yapısına bak. Peptit molekülleri kendi kendini izole edemez; araştırmacılar tarafından izole edilir. Pasif olduğu için "Isolating" değil V3 olan "Isolated" kullanılmıştır.'
      },
      {
        originalEn: 'Inhibiting the reuptake of both serotonin and norepinephrine, venlafaxine provides robust dual antidepressant efficacy in treatment-resistant major depressive episodes.',
        breakdown: {
          subject: 'venlafaxine (Ana cümle öznesi; geri alımı bizzat inhibe eden ilaç)',
          mainVerb: 'provides (Ana yüklem)',
          conjunctionClause: 'Inhibiting the reuptake of both serotonin and norepinephrine (Aktif kısaltma: Because it inhibits...)',
          objectOrComplement: 'robust dual antidepressant efficacy in treatment-resistant major depressive episodes'
        },
        translationTr: 'Hem serotonin hem de norepinefrinin geri alımını inhibe eden venlafaksin, tedaviye dirençli majör depresif ataklarda güçlü bir ikili antidepresan etkinlik sağlar.',
        clinicalInsight: 'Hekim Gözü: Venlafaksin etken maddedir ve reseptörleri aktif olarak inhibe eder. Peşinden de nesne ("the reuptake of...") gelmiştir. Dolayısıyla aktif kısaltma: V-ing ("Inhibiting").'
      }
    ],
    module4: [
      {
        trapName: 'Tuzak 1: Özne Uyuşmazlığı (Dangling Modifier Tuzağı)',
        howCommissionTricks: 'Komisyon cümle başında "Having evaluated the cranial MRI scan, ______" der. Şıklara hekim yerine "the tumor was resected" koyar! Oysa MR\'ı değerlendiren tümör olamaz, cerrah/hekim olmalıdır. Öğrenci virgülden sonraki özneye dikkat etmezse yanlış şıkka düşer.',
        deceptiveOptionExample: 'A) the diagnosis was confirmed   B) the surgical team decided to operate   C) recurrence was observed   D) the medication was stopped   E) the biopsy was performed',
        radarKeywords: ['Having been diagnosed with...', 'Administered at high doses...', 'Presenting with acute fever...'],
        defenseStrategy: 'Kısaltma eylemini kim yapıyor? İlacı kim alıyor? Virgülden hemen sonra o canlı/gerçek özneyi ara.'
      },
      {
        trapName: 'Tuzak 2: Edattan Sonra Gelen Pasif Fiili Aktif Sanma',
        howCommissionTricks: 'İsimden sonra gelen boşluğun arkasında "by" veya "in" edatı varsa, komisyon oraya V-ing şıkkını yerleştirir. Aday "eylem devam ediyor" sanıp V-ing seçer. Oysa edat varsa yapı %95 pasiftir (V3).',
        deceptiveOptionExample: 'Soru: "Pathogens ______ in nosocomial bloodstream infections often exhibit multi-drug resistance." -> A) identifying   B) identified   C) identify   D) are identifying   E) to identify',
        radarKeywords: ['isolated from', 'characterized by', 'induced by', 'associated with'],
        defenseStrategy: 'Boşluktan hemen sonra "by / from / in" edatını gördün mü doğrudan V3 (Past Participle) şıkkına odaklan.'
      }
    ],
    module5: [
      {
        id: 'participle-q1',
        type: 'Kelime/Kalıp',
        questionText: 'Severe systemic lupus erythematosus flare-ups, ______ by extensive immune-complex deposition in renal glomeruli, typically require intravenous pulse cyclophosphamide.',
        options: [
          { key: 'A', text: 'alleviated', whyEliminatedOrCorrect: 'Elenir: Alleviate hafifletmektir; immün kompleks birikimi alevlenmeyi hafifletmez.' },
          { key: 'B', text: 'characterized', whyEliminatedOrCorrect: 'DOĞRU CEVAP: Characterized by (ile karakterize olan / belirgin özelliği ... olan). SLE alevlenmesinin patolojik tanımıdır.' },
          { key: 'C', text: 'impeded', whyEliminatedOrCorrect: 'Elenir: Engellenmiş anlamına gelir; patolojiyi açıklamaz.' },
          { key: 'D', text: 'eradicated', whyEliminatedOrCorrect: 'Elenir: Kökü kazınmış demektir; böbrek tutulumunda alevlenme yok edilmez.' },
          { key: 'E', text: 'withdrawn', whyEliminatedOrCorrect: 'Elenir: Geri çekilmiş / kesilmiş demektir.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Renal glomerüllerde yaygın immün kompleks birikimi ile karakterize olan şiddetli sistemik lupus eritematozus alevlenmeleri, tipik olarak intravenöz puls siklofosfamid gerektirir.',
        rationale: 'Hekim Gözüyle Kalıp Tespiti: Tıpta bir patolojinin mikroskobik veya klinik tablosunu tanımlarken "...characterized by [bulgu]" en sık kullanılan kısaltılmış nitelemedir.',
        distractorAnalysis: 'Diğer seçenekler patolojik bir tanımın yerine oturamayacak ilgisiz eylemlerdir.'
      },
      {
        id: 'participle-q2',
        type: 'Gramer/Bağlaç',
        questionText: '______ by persistent mucosal ulcerations and transmural granulomatous inflammation, Crohn\'s disease can affect any segment of the alimentary canal from mouth to anus.',
        options: [
          { key: 'A', text: 'Characterizing', whyEliminatedOrCorrect: 'Elenir: Aktif V-ing\'dir; hastalık kendi kendini karakterize etmez, hekimlerce tanımlanır ve "by" edatı pasif gerektirir.' },
          { key: 'B', text: 'Characterized', whyEliminatedOrCorrect: 'DOĞRU CEVAP: V3 (Past Participle). Crohn hastalığı bu bulgularla karakterize edilir. Arkasındaki "by" edatı pasif V3\'ü doğrular.' },
          { key: 'C', text: 'To characterize', whyEliminatedOrCorrect: 'Elenir: Amaç bildiren mastardır; cümlenin anlamına uymaz.' },
          { key: 'D', text: 'Having characterized', whyEliminatedOrCorrect: 'Elenir: Aktif perfect participle\'dır; Crohn hastalığı bir şeyleri karakterize etmemiştir.' },
          { key: 'E', text: 'Being characterized of', whyEliminatedOrCorrect: 'Elenir: "characterized of" diye bir kalıp yoktur; edatı "by"dır.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Kalıcı mukozal ülserasyonlar ve transmural granülomatöz inflamasyon ile karakterize olan Crohn hastalığı, sindirim kanalının ağızdan anüse kadar olan herhangi bir segmentini etkileyebilir.',
        rationale: 'Kısaltma Formülü: Cümle başındaki yapı virgülden sonraki "Crohn\'s disease" öznesini niteliyor. Hastalık bu patolojik bulgular tarafından nitelendirilir (pasif). Pasif Kısaltma = V3 (Characterized).',
        distractorAnalysis: 'A şıkkı (V-ing) en tehlikeli çeldiricidir; adayın aktif-pasif ayrımını bilip bilmediğini test eder. C ve D şıkları ise amaç ve zamanlama hatası içerir.'
      },
      {
        id: 'participle-q3',
        type: 'Cümle Tamamlama',
        questionText: 'Having reviewed the post-operative abdominal computed tomography scan, ______.',
        options: [
          { key: 'A', text: 'an intra-abdominal hematoma was promptly evacuated by the interventional radiologist', whyEliminatedOrCorrect: 'Elenir: Dangling modifier tuzağı: BT taramasını inceleyen hematom olamaz; hematom insan değildir!' },
          { key: 'B', text: 'the surgical team immediately scheduled the unstable patient for emergency exploratory laparotomy', whyEliminatedOrCorrect: 'DOĞRU CEVAP: BT taramasını kim inceledi? "the surgical team" (cerrahi ekip). Özne ile eylem kusursuz örtüşür.' },
          { key: 'C', text: 'the diagnostic sensitivity was considered insufficient for microvascular leakage', whyEliminatedOrCorrect: 'Elenir: Taramayı inceleyen "tanısal duyarlılık" olamaz.' },
          { key: 'D', text: 'because intravenous contrast extravasation indicated active arterial bleeding', whyEliminatedOrCorrect: 'Elenir: Ana cümle yerine "because" ile başlayan yan cümle verilmiştir.' },
          { key: 'E', text: 'antibiotic stewardship protocols had to be strictly reinforced', whyEliminatedOrCorrect: 'Elenir: Taramayı antibiyotik protokolleri inceleyemez.' }
        ],
        correctAnswer: 'B',
        translationTr: 'Ameliyat sonrası batın bilgisayarlı tomografi taramasını inceleyen cerrahi ekip, stabil olmayan hastayı derhal acil eksploratif laparotomiye aldı.',
        rationale: 'Hekim Mantığı ve Özne Uyumu: Cümle başındaki eylem: "Having reviewed the CT scan" (Tomografi taramasını inceleyen...). Tomografiyi kim inceler? Hekim veya cerrahi ekip. Virgülden sonra "the surgical team" gelmek zorundadır.',
        distractorAnalysis: 'A şıkkı tipik ÖSYM tuzağıdır: Kulağa çok tıbbi gelir ("hematom boşaltıldı") ama gramer kuralı gereği virgülden sonra eylemi yapan özne (hekim/ekip) gelmelidir.'
      }
    ]
  }
];
