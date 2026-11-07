export interface ClickableSentence {
  id: string;
  es: string;
  am: string;
  note?: string;
}

export interface ResourceTableItem {
  id: string;
  recursoEs: string;
  recursoAm: string;
  ejemplo: string;
  ejemploAm: string;
  explicacion: string;
}

export interface TheaterElementItem {
  es: string;
  am: string;
  descripcionEs: string;
  descripcionAm: string;
}

export interface ComparisonRow {
  caracteristicaEs: string;
  caracteristicaAm: string;
  liricaEs: string;
  liricaAm: string;
  narrativaEs: string;
  narrativaAm: string;
  teatroEs: string;
  teatroAm: string;
}

export interface QuizQuestion1 {
  id: number;
  textEs: string[];
  correctGenre: 'Lírica' | 'Narrativa' | 'Teatro';
  explanationEs: string;
  explanationAm: string;
}

export interface QuizQuestion2 {
  id: number;
  statementEs: string;
  statementAm: string;
  correctAnswer: boolean;
  explanationEs: string;
  explanationAm: string;
}

export interface QuizQuestion3 {
  id: number;
  questionEs: string;
  questionAm: string;
  answerEs: string;
  answerAm: string;
  keyPoints: string[];
}

export interface Flashcard {
  id: string;
  titleEs: string;
  titleAm: string;
  frontEs: string;
  frontAm: string;
  backEs: string;
  backAm: string;
  keyFormula: string;
}

export const LITERARY_DATA = {
  header: {
    titleEs: "LOS GRANDES GÉNEROS LITERARIOS",
    titleAm: "Գրականության հիմնական ժանրերը",
    course: "Lengua Castellana y Literatura — 7.º curso (1.º de ESO)",
    importanceNotice: "Այս թեման շատ կարևոր է քննության համար։ Աշակերտը պետք է կարողանա ոչ միայն անգիր ասել սահմանումները, այլև կարդալ տեքստը, հասկանալ՝ որ գրական ժանրին է պատկանում, և բացատրել՝ ինչու։",
    mainGenres: [
      { id: "lirica", num: 1, es: "Lírica", am: "Քնարերգություն", icon: "Feather", desc: "Sentir y expresar emociones íntimas" },
      { id: "narrativa", num: 2, es: "Narrativa", am: "Պատմողական գրականություն", icon: "BookOpen", desc: "Contar historias con narrador y personajes" },
      { id: "teatro", num: 3, es: "Teatro", am: "Թատերգություն", icon: "Drama", desc: "Representar acciones mediante diálogos" }
    ]
  },

  lirica: {
    id: "lirica",
    titleEs: "1. LÍRICA",
    titleAm: "ՔՆԱՐԵՐԳՈՒԹՅՈՒՆ",
    definition: {
      questionEs: "¿Qué es la lírica?",
      questionAm: "Ի՞նչ է քնարերգությունը",
      es: "La lírica es un género literario en el que el autor o la autora expresa sentimientos, emociones, pensamientos y estados de ánimo de manera subjetiva.",
      am: "Քնարերգությունը գրական ժանր է, որի միջոցով հեղինակը արտահայտում է իր զգացմունքները, հույզերը, մտքերը և հոգեվիճակը՝ անձնական տեսանկյունից։",
      corePurposeEs: "El objetivo principal de la lírica es expresar sentimientos, no necesariamente relatar un acontecimiento.",
      corePurposeAm: "Քնարերգության հիմնական նպատակն է արտահայտել զգացմունքներ, ոչ թե անպայման պատմել որևէ իրադարձություն։",
      emotionsExamples: [
        { es: "amor", am: "սեր" },
        { es: "nostalgia / anhelo", am: "կարոտ" },
        { es: "alegría", am: "ուրախություն" },
        { es: "tristeza", am: "տխրություն" },
        { es: "miedo", am: "վախ" },
        { es: "esperanza", am: "հույս" }
      ]
    },
    caracteristicas: [
      {
        num: 1,
        titleEs: "Subjetividad",
        titleAm: "Սուբյեկտիվություն",
        es: "El autor expresa sentimientos y emociones personales.",
        am: "Հեղինակը արտահայտում է իր անձնական զգացմունքներն ու ապրումները։",
        ejemplo: {
          es: "Me siento solo cuando cae la noche.",
          am: "Ես ինձ միայնակ եմ զգում, երբ գիշերն իջնում է։",
          explicacion: "Այս նախադասությունն արտահայտում է միայնության զգացում (Sentimiento de soledad)։"
        }
      },
      {
        num: 2,
        titleEs: "Preferencia por el verso",
        titleAm: "Չափածո խոսքի նախընտրություն",
        es: "La lírica se escribe principalmente en verso, aunque también existe la prosa poética.",
        am: "Քնարերգությունը հիմնականում գրվում է չափածո ձևով, այսինքն՝ բանաստեղծական տողերով։ Սակայն գոյություն ունի նաև բանաստեղծական արձակ։",
        ejemplo: {
          linesEs: ["La luna brilla en el mar,", "mi corazón quiere soñar."],
          linesAm: ["Լուսինը փայլում է ծովի վրա,", "իմ սիրտը ցանկանում է երազել։"],
          explicacion: "Այս օրինակում կա բանաստեղծական տողերի հստակ չափածո կառուցվածք։"
        }
      },
      {
        num: 3,
        titleEs: "Ritmo y musicalidad",
        titleAm: "Ռիթմ և երաժշտականություն",
        es: "Los poemas pueden tener ritmo, rima y musicalidad.",
        am: "Բանաստեղծությունները կարող են ունենալ ռիթմ, հանգ և երաժշտականություն։",
        ejemplo: {
          linesEs: ["Quiero cantar,", "quiero soñar,", "quiero volar."],
          linesAm: ["Ցանկանում եմ երգել,", "ցանկանում եմ երազել,", "ցանկանում եմ թռչել։"],
          explicacion: "Այստեղ կրկնվող հնչյունները («-ar» հանգը) ստեղծում են երաժշտականություն և ներդաշնակություն։"
        }
      },
      {
        num: 4,
        titleEs: "Recursos literarios",
        titleAm: "Գեղարվեստական արտահայտչամիջոցներ",
        es: "En la lírica se utilizan recursos literarios como la metáfora, la comparación, la personificación y la aliteración.",
        am: "Քնարերգության մեջ օգտագործվում են գեղարվեստական արտահայտչամիջոցներ՝ փոխաբերություն, համեմատություն, անձնավորում և բաղաձայնույթ։",
        recursosTable: [
          {
            id: "metafora",
            recursoEs: "Metáfora",
            recursoAm: "Փոխաբերություն",
            ejemplo: "Tus ojos son estrellas.",
            ejemploAm: "Քո աչքերը աստղեր են։",
            explicacion: "Աչքերը ներկայացվում են որպես աստղեր (նմանեցում առանց «ինչպես» բառի)։"
          },
          {
            id: "comparacion",
            recursoEs: "Comparación",
            recursoAm: "Համեմատություն",
            ejemplo: "Eres fuerte como un león.",
            ejemploAm: "Դու ուժեղ ես առյուծի պես։",
            explicacion: "Մարդը համեմատվում է առյուծի հետ («como» = «ինչպես, պես»)։"
          },
          {
            id: "personificacion",
            recursoEs: "Personificación",
            recursoAm: "Անձնավորում",
            ejemplo: "El viento canta.",
            ejemploAm: "Քամին երգում է։",
            explicacion: "Քամուն տրվում է մարդկային գործողություն (երգել)։"
          },
          {
            id: "aliteracion",
            recursoEs: "Aliteración",
            recursoAm: "Հնչյունների կրկնություն (Բաղաձայնույթ)",
            ejemplo: "Susurra suavemente el sauce.",
            ejemploAm: "Մեղմորեն շշնջում է ուռենին։",
            explicacion: "Կրկնվում է «s» հնչյունը՝ ստեղծելով շշուկի ձայնային ազդեցություն։"
          }
        ]
      }
    ],
    ejemploCompleto: {
      tituloEs: "Ejemplo de lírica",
      tituloAm: "Քնարերգության օրինակ",
      versosEs: [
        "En el cielo brilla una estrella,",
        "mi corazón sueña con ella.",
        "La noche guarda mi tristeza,",
        "y el viento canta con delicadeza."
      ],
      versosAm: [
        "Երկնքում փայլում է մի աստղ,",
        "իմ սիրտը երազում է նրա մասին։",
        "Գիշերը պահում է իմ տխրությունը,",
        "իսկ քամին երգում է մեղմությամբ։"
      ],
      analisisPreguntaEs: "¿Por qué es lírica?",
      analisisPreguntaAm: "Ինչո՞ւ է սա քնարերգություն։",
      respuestaEs: "Porque expresa sentimientos personales, está escrita en verso y utiliza recursos literarios.",
      respuestaAm: "Որովհետև արտահայտում է անձնական զգացմունքներ, գրված է չափածո և օգտագործում է գեղարվեստական արտահայտչամիջոցներ։",
      notaExamenEs: "Importante para el examen: La forma poética es frecuente en la lírica, pero no todos los textos en verso son líricos.",
      notaExamenAm: "Կարևոր քննության համար. Բանաստեղծական ձևը հաճախ բնորոշ է քնարերգությանը, բայց ոչ բոլոր չափածո տեքստերն են քնարական (օրինակ՝ կարող են լինել չափածո պատմվածքներ)։"
    }
  },

  narrativa: {
    id: "narrativa",
    titleEs: "2. NARRATIVA",
    titleAm: "ՊԱՏՄՈՂԱԿԱՆ ԳՐԱԿԱՆՈՒԹՅՈՒՆ",
    definition: {
      questionEs: "¿Qué es la narrativa?",
      questionAm: "Ի՞նչ է պատմողական գրականությունը",
      es: "La narrativa es un género literario en el que un narrador cuenta una historia, real o ficticia, protagonizada por unos personajes y situada en un tiempo y un lugar.",
      am: "Պատմողական գրականությունը գրական ժանր է, որտեղ պատմողը ներկայացնում է իրական կամ հորինված պատմություն, որի մեջ կան գործող անձինք, իրադարձություններ, ժամանակ և վայր։",
      distincionEs: "Diferencia principal: En la lírica se expresan sentimientos; en la narrativa se cuentan acontecimientos.",
      distincionAm: "Գլխավոր տարբերությունը. Քնարերգության մեջ հիմնականում արտահայտվում են զգացմունքներ, իսկ պատմողական գրականության մեջ հիմնականում պատմվում են իրադարձություններ։"
    },
    caracteristicas: [
      {
        num: 1,
        titleEs: "Presencia de un narrador",
        titleAm: "Պատմողի առկայություն",
        es: "La historia es contada por un narrador, que puede participar en ella o contarla desde fuera.",
        am: "Պատմությունը ներկայացնում է պատմողը, որը կարող է լինել պատմության մասնակից կամ պատմել դրսից։",
        distincionAutorNarrador: [
          {
            terminoEs: "Autor",
            terminoAm: "Հեղինակ",
            defEs: "La persona real que ha escrito la obra.",
            defAm: "Իրական մարդը, որը գրել է ստեղծագործությունը։"
          },
          {
            terminoEs: "Narrador",
            terminoAm: "Պատմող",
            defEs: "La voz creada por el autor que presenta la historia.",
            defAm: "Այն ձայնը (հորինված կերպարը/դիտորդը), որը ներկայացնում է պատմությունը։"
          }
        ],
        tiposNarrador: [
          {
            letra: "A",
            nombreEs: "Narrador en primera persona",
            nombreAm: "Առաջին դեմքով պատմող",
            es: "Cuenta la historia utilizando «yo» o «nosotros». Puede ser protagonista o testigo.",
            am: "Պատմողը պատմությունը ներկայացնում է «ես» կամ «մենք» ձևով։ Նա կարող է լինել գլխավոր հերոս կամ իրադարձությունների ականատես։",
            ejemploEs: "Ayer fui al bosque y encontré un perro perdido.",
            ejemploAm: "Երեկ գնացի անտառ և գտա կորած շուն։",
            comoReconocer: "Ինչպե՞ս ճանաչել. Տեսնում ենք առաջին դեմքի բայեր՝ fui (գնացի), encontré (գտա)։ Պատմողը խոսում է իր մասին։"
          },
          {
            letra: "B",
            nombreEs: "Narrador en tercera persona",
            nombreAm: "Երրորդ դեմքով պատմող",
            es: "Cuenta la historia utilizando «él», «ella», «ellos» o los nombres de los personajes.",
            am: "Պատմողը խոսում է ուրիշների մասին՝ օգտագործելով «նա», «նրանք» կամ հերոսների անունները։",
            ejemploEs: "Lucía entró en el bosque y encontró un perro perdido.",
            ejemploAm: "Լուսիան մտավ անտառ և գտավ կորած շուն։",
            comoReconocer: "Ինչպե՞ս ճանաչել. Այստեղ պատմողը Լուսիան չէ։ Պատմողը կողքից պատմում է Լուսիայի մասին (entró, encontró)։"
          },
          {
            letra: "C",
            nombreEs: "Narrativa sin narrador explícito",
            nombreAm: "Առանց բացահայտ պատմողի պատմողական ստեղծագործություն",
            es: "En algunas narraciones, como ciertos relatos experimentales, la presencia del narrador puede resultar menos evidente.",
            am: "Որոշ ստեղծագործություններում պատմողի ձայնը կարող է այնքան ակնհայտ չլինել, բայց պատմողական ժանրի հիմնական հատկանիշը շարունակում է մնալ պատմության ներկայացումը։",
            ejemploEs: "El relato avanza a través de documentos, cartas o secuencias objetivas.",
            ejemploAm: "Պատմությունն առաջ է ընթանում փաստաթղթերի, նամակների կամ օբյեկտիվ տեսարանների միջոցով։",
            comoReconocer: "Առանցքայինը մնում է գործողությունների զարգացումը ժամանակի մեջ։"
          }
        ]
      },
      {
        num: 2,
        titleEs: "Personajes",
        titleAm: "Կերպարներ",
        es: "Son los seres que participan en la historia.",
        am: "Կերպարները պատմության մեջ գործող անձինք կամ այլ էակներ են։",
        roles: [
          {
            tipoEs: "Protagonista",
            tipoAm: "Գլխավոր հերոս",
            descEs: "El personaje central de la historia.",
            descAm: "Պատմության կենտրոնական կերպարը։"
          },
          {
            tipoEs: "Antagonista",
            tipoAm: "Հակառակորդ",
            descEs: "El personaje o fuerza que se opone al protagonista.",
            descAm: "Կերպարը կամ ուժը, որը խոչընդոտում է գլխավոր հերոսին։"
          },
          {
            tipoEs: "Personajes secundarios",
            tipoAm: "Երկրորդական կերպարներ",
            descEs: "Participan en la historia pero no tienen un papel principal.",
            descAm: "Մասնակցում են պատմությանը, բայց գլխավոր դեր չեն կատարում։"
          }
        ]
      },
      {
        num: 3,
        titleEs: "Espacio",
        titleAm: "Գործողության վայր",
        es: "Es el lugar donde ocurren los acontecimientos.",
        am: "Այն վայրն է, որտեղ տեղի են ունենում իրադարձությունները։",
        ejemplosEs: "en una escuela, en un bosque, en una ciudad, en una casa",
        ejemplosAm: "դպրոցում, անտառում, քաղաքում, տանը"
      },
      {
        num: 4,
        titleEs: "Tiempo",
        titleAm: "Ժամանակ",
        es: "Indica cuándo ocurren los acontecimientos y cuánto duran.",
        am: "Ցույց է տալիս, թե երբ են տեղի ունենում իրադարձությունները և որքան են տևում։",
        ejemplosEs: "ayer, hace cien años, durante el verano",
        ejemplosAm: "երեկ, հարյուր տարի առաջ, ամռան ընթացքում"
      },
      {
        num: 5,
        titleEs: "Acción o trama",
        titleAm: "Գործողություն կամ սյուժե",
        es: "Es el conjunto de acontecimientos que forman la historia.",
        am: "Իրադարձությունների ամբողջությունն է, որը կազմում է պատմությունը։",
        estructura: [
          {
            etapaEs: "1. Planteamiento",
            etapaAm: "1. Սկիզբ / Նախադրություն",
            descEs: "Se presentan los personajes, el lugar y la situación inicial.",
            descAm: "Ներկայացվում են հերոսները, վայրը և սկզբնական իրավիճակը։"
          },
          {
            etapaEs: "2. Nudo",
            etapaAm: "2. Հանգույց / Զարգացում",
            descEs: "Aparece un problema o conflicto y se desarrollan los acontecimientos.",
            descAm: "Առաջանում է խնդիր կամ հակամարտություն, և իրադարձությունները զարգանում են։"
          },
          {
            etapaEs: "3. Desenlace",
            etapaAm: "3. Հանգուցալուծում / Ավարտ",
            descEs: "Se resuelve el conflicto o se llega al final de la historia.",
            descAm: "Խնդիրը լուծվում է կամ պատմությունը հասնում է ավարտին։"
          }
        ]
      }
    ],
    ejemploCompleto: {
      tituloEs: "El secreto del bosque",
      tituloAm: "Անտառի գաղտնիքը",
      parrafosEs: [
        "Un día, Daniel decidió visitar un bosque cercano a su pueblo. Mientras caminaba, escuchó un ruido extraño detrás de un árbol.",
        "Se acercó lentamente y descubrió un pequeño zorro herido. Daniel lo llevó a un veterinario y consiguió salvarlo.",
        "Desde aquel día, Daniel visitaba el bosque para observar a los animales."
      ],
      parrafosAm: [
        "Մի օր Դանիելը որոշեց այցելել իր գյուղին մոտ գտնվող անտառը։ Երբ քայլում էր, ծառի հետևից տարօրինակ ձայն լսեց։",
        "Նա դանդաղ մոտեցավ և հայտնաբերեց վիրավոր փոքրիկ աղվես։ Դանիելը նրան տարավ անասնաբույժի մոտ և կարողացավ փրկել։",
        "Այդ օրվանից Դանիելը այցելում էր անտառ՝ կենդանիներին դիտելու համար։"
      ],
      analisisTable: [
        { elementoEs: "Género", elementoAm: "Ժանր", respuestaEs: "Narrativa", respuestaAm: "Պատմողական գրականություն" },
        { elementoEs: "Narrador", elementoAm: "Պատմող", respuestaEs: "Tercera persona", respuestaAm: "Երրորդ դեմք (él)" },
        { elementoEs: "Protagonista", elementoAm: "Գլխավոր հերոս", respuestaEs: "Daniel", respuestaAm: "Դանիել" },
        { elementoEs: "Espacio", elementoAm: "Գործողության վայր", respuestaEs: "Un bosque", respuestaAm: "Անտառ" },
        { elementoEs: "Planteamiento", elementoAm: "Սկիզբ", respuestaEs: "Daniel visita el bosque.", respuestaAm: "Դանիելը այցելում է անտառը։" },
        { elementoEs: "Nudo", elementoAm: "Հանգույց", respuestaEs: "Encuentra un zorro herido.", respuestaAm: "Գտնում է վիրավոր աղվեսին։" },
        { elementoEs: "Desenlace", elementoAm: "Հանգուցալուծում", respuestaEs: "Consigue salvar al zorro.", respuestaAm: "Կարողանում է փրկել աղվեսին։" }
      ]
    },
    prosaVerso: {
      preguntaEs: "¿Prosa o verso?",
      preguntaAm: "Արձա՞կ, թե՞ չափածո",
      es: "Actualmente la narrativa se escribe principalmente en prosa, aunque en sus orígenes también se utilizaba mucho el verso.",
      am: "Ներկայումս պատմողական ստեղծագործությունները հիմնականում գրվում են արձակ, սակայն հնում պատմողական բազմաթիվ ստեղծագործություններ գրվել են նաև չափածո (օրինակ՝ դյուցազներգությունները)։",
      prosaDefEs: "Prosa: el texto se escribe con oraciones y párrafos normales.",
      prosaDefAm: "Արձակ: տեքստը գրվում է սովորական նախադասություններով և պարբերություններով։",
      versoDefEs: "Verso: el texto está dividido en líneas poéticas.",
      versoDefAm: "Չափածո: տեքստը բաժանված է բանաստեղծական տողերի։",
      ficcionEs: "Una historia puede ser realista o fantástica.",
      ficcionAm: "Պատմությունը կարող է լինել իրականությանը մոտ կամ երևակայական։",
      ejemploRealistaEs: "Un niño va a la escuela. (Hecho realista)",
      ejemploRealistaAm: "Երեխան գնում է դպրոց։ (Իրականությանը մոտ իրադարձություն)",
      ejemploFantasticoEs: "Un dragón habla con una princesa. (Hecho fantástico)",
      ejemploFantasticoAm: "Վիշապը խոսում է արքայադստեր հետ։ (Երևակայական իրադարձություն)"
    }
  },

  teatro: {
    id: "teatro",
    titleEs: "3. TEATRO",
    titleAm: "ԹԱՏԵՐԳՈՒԹՅՈՒՆ",
    definition: {
      questionEs: "¿Qué es el teatro?",
      questionAm: "Ի՞նչ է թատերգությունը",
      es: "El teatro es un género literario formado por obras escritas para ser representadas en un escenario ante un público.",
      am: "Թատերգությունը գրական ժանր է, որի ստեղծագործությունները գրվում են բեմի վրա հանդիսատեսի առաջ ներկայացվելու համար։",
      dinamicaEs: "En este género la historia avanza a través de las conversaciones y acciones de los personajes.",
      dinamicaAm: "Այս ժանրում պատմությունն առաջ է գնում հիմնականում հերոսների խոսակցությունների և գործողությունների միջոցով։"
    },
    caracteristicas: [
      {
        num: 1,
        titleEs: "Diálogo",
        titleAm: "Երկխոսություն",
        es: "La historia se desarrolla principalmente mediante los diálogos entre los personajes.",
        am: "Պատմությունը զարգանում է հիմնականում կերպարների երկխոսությունների միջոցով։",
        ejemplo: {
          dialogo: [
            { personaje: "Marta", acotacionEs: "", acotacionAm: "", es: "¿Dónde está mi hermano?", am: "Որտե՞ղ է եղբայրս։" },
            { personaje: "Pablo", acotacionEs: "", acotacionAm: "", es: "Está en el jardín.", am: "Նա այգում է։" },
            { personaje: "Marta", acotacionEs: "", acotacionAm: "", es: "¡Tengo que hablar con él!", am: "Ես պետք է խոսեմ նրա հետ։" }
          ],
          explicacion: "Այստեղ պատմող չկա։ Մենք իրադարձությունը հասկանում ենք անմիջապես հերոսների խոսակցությունից։"
        }
      },
      {
        num: 2,
        titleEs: "Ausencia habitual de narrador",
        titleAm: "Պատմողի սովորական բացակայություն",
        es: "En el teatro normalmente no hay narrador. Los propios personajes presentan la acción con sus palabras y movimientos.",
        am: "Թատերգության մեջ սովորաբար պատմող չկա։ Հերոսներն իրենց խոսքերով և գործողություններով ցույց են տալիս իրադարձությունները։ (Սակայն որոշ թատերական ստեղծագործություններում կարող է լինել նաև պատմող)։"
      },
      {
        num: 3,
        titleEs: "Acotaciones",
        titleAm: "Բեմական նշումներ (Acotaciones)",
        es: "Son indicaciones del autor que explican cómo deben actuar los personajes, sus gestos, movimientos, el tono de voz o los elementos del escenario.",
        am: "Բեմական նշումները հեղինակի ցուցումներն են (հաճախ փակագծերում կամ շեղատառ), որոնք բացատրում են՝ ինչպես պետք է դերասանները խոսեն, շարժվեն կամ արտահայտեն զգացմունքները։",
        ejemplo: {
          dialogo: [
            { personaje: "Lucía", acotacionEs: "(Llorando)", acotacionAm: "(Լաց լինելով)", es: "No quiero irme.", am: "Ես չեմ ուզում հեռանալ։" },
            { personaje: "Carlos", acotacionEs: "(Se acerca lentamente)", acotacionAm: "(Դանդաղ մոտենում է)", es: "No tengas miedo.", am: "Մի՛ վախեցիր։" }
          ],
          glosa: [
            { es: "(Llorando)", am: "լաց լինելով — ցույց է տալիս հույզը և ձայնի երանգը" },
            { es: "(Se acerca lentamente)", am: "դանդաղ մոտենում է — ցույց է տալիս շարժումը բեմում" }
          ]
        }
      },
      {
        num: 4,
        titleEs: "Elementos del teatro",
        titleAm: "Թատրոնի տարրերը",
        es: "El teatro utiliza diferentes códigos: palabras, gestos, movimientos, música, luces y decorados.",
        am: "Թատրոնում օգտագործվում են արտահայտման տարբեր միջոցներ՝ խոսք, ժեստեր, շարժումներ, երաժշտություն, լուսավորություն և բեմական ձևավորում։",
        elementos: [
          { es: "Escenario", am: "Բեմ", descripcionEs: "Lugar físico donde actúan los personajes.", descripcionAm: "Ֆիզիկական տարածք, որտեղ խաղում են դերասանները։" },
          { es: "Público", am: "Հանդիսատես", descripcionEs: "Las personas que asisten a ver la obra.", descripcionAm: "Մարդիկ, ովքեր դիտում են ներկայացումը։" },
          { es: "Actores / Actrices", am: "Դերասաններ / դերասանուհիներ", descripcionEs: "Personas que dan vida a los personajes.", descripcionAm: "Կերպարները մարմնավորող մարդիկ։" },
          { es: "Diálogo", am: "Երկխոսություն", descripcionEs: "Conversación hablada entre personajes.", descripcionAm: "Կերպարների միջև խոսակցությունը։" },
          { es: "Acotaciones", am: "Բեմական նշումներ", descripcionEs: "Instrucciones del dramaturgo para la puesta en escena.", descripcionAm: "Հեղինակի հրահանգները բեմադրության համար։" },
          { es: "Decorado", am: "Բեմական ձևավորում", descripcionEs: "Objetos y fondos que representan el lugar.", descripcionAm: "Իրերն ու ետնապատկերը, որոնք պատկերում են վայրը։" },
          { es: "Vestuario", am: "Բեմական հագուստ", descripcionEs: "Ropa adecuada para cada personaje y época.", descripcionAm: "Յուրաքանչյուր կերպարին համապատասխան հագուստ։" },
          { es: "Iluminación", am: "Լուսավորություն", descripcionEs: "Luces que crean la atmósfera o señalan momentos.", descripcionAm: "Լույսեր, որոնք ստեղծում են մթնոլորտը։" },
          { es: "Gestos", am: "Ժեստեր", descripcionEs: "Expresiones de la cara y del cuerpo de los actores.", descripcionAm: "Դերասանների դեմքի և մարմնի արտահայտությունները։" },
          { es: "Música", am: "Երաժշտություն", descripcionEs: "Sonidos y melodías que acompañan la acción.", descripcionAm: "Հնչյուններ և մեղեդիներ, որոնք ուղեկցում են գործողությանը։" }
        ]
      },
      {
        num: 5,
        titleEs: "Estructura del teatro",
        titleAm: "Թատերգության կառուցվածքը",
        es: "Una obra teatral se divide habitualmente en unidades dramáticas específicas.",
        am: "Թատերական ստեղծագործությունը սովորաբար բաժանվում է դրամատիկական հստակ միավորների։",
        divisiones: [
          {
            terminoEs: "Acto",
            terminoAm: "Գործողություն / Ակտ",
            es: "Es una de las partes principales en las que puede dividirse una obra teatral.",
            am: "Թատերական ստեղծագործության հիմնական մեծ բաժիններից մեկն է (հաճախ առանձնացվում է վարագույրի իջեցմամբ)։"
          },
          {
            terminoEs: "Escena",
            terminoAm: "Տեսարան",
            es: "Es una parte de la obra que suele estar marcada por la entrada o salida de personajes.",
            am: "Ստեղծագործության մի հատված է, որը սովորաբար նշվում է կերպարների բեմ մտնելով կամ դուրս գալով։"
          },
          {
            terminoEs: "Cuadro",
            terminoAm: "Բեմական պատկեր",
            es: "Es una parte de la obra asociada normalmente con un mismo espacio escénico o decorado.",
            am: "Ստեղծագործության հատված է, որը սովորաբար կապված է նույն բեմական միջավայրի կամ ձևավորման հետ։"
          }
        ]
      }
    ],
    ejemploCompleto: {
      tituloEs: "El misterio de la puerta",
      tituloAm: "Դռան առեղծվածը",
      acotacionInicialEs: "(Una habitación oscura. Ana entra lentamente.)",
      acotacionInicialAm: "(Մութ սենյակ։ Անան դանդաղ ներս է մտնում։)",
      dialogos: [
        { personaje: "ANA", acotacionEs: "", acotacionAm: "", es: "¿Quién está aquí?", am: "Ո՞վ է այստեղ։" },
        { personaje: "MARCOS", acotacionEs: "(Con miedo)", acotacionAm: "(Վախեցած)", es: "He escuchado un ruido.", am: "Ես աղմուկ եմ լսել։" },
        { personaje: "ANA", acotacionEs: "(Abre la puerta)", acotacionAm: "(Բացում է դուռը)", es: "¡Mira! ¡Es un gato!", am: "Նայի՛ր։ Սա կատու է։" },
        { personaje: "MARCOS", acotacionEs: "(Riendo)", acotacionAm: "(Ծիծաղելով)", es: "¡Pensaba que era un fantasma!", am: "Կարծում էի՝ ուրվական է։" }
      ],
      analisisPreguntaEs: "¿Por qué es teatro?",
      analisisPreguntaAm: "Ինչո՞ւ է սա թատերգություն։",
      respuestaEs: "Porque los personajes hablan directamente, aparecen diálogos y acotaciones, y la acción puede representarse en un escenario.",
      respuestaAm: "Որովհետև կերպարները անմիջականորեն խոսում են, կան երկխոսություններ և բեմական նշումներ, իսկ իրադարձությունները կարելի է ներկայացնել բեմում։"
    }
  },

  comparacion: {
    titleEs: "4. COMPARACIÓN",
    titleAm: "ԵՐԵՔ ԺԱՆՐԵՐԻ ՀԱՄԵՄԱՏՈՒԹՅՈՒՆԸ",
    noticeAm: "Սա քննության ամենակարևոր հատվածներից մեկն է։ Ուշադիր սովորեք տարբերությունները։",
    matriz: [
      {
        caracteristicaEs: "Objetivo principal",
        caracteristicaAm: "Նպատակ",
        liricaEs: "Expresar sentimientos",
        liricaAm: "Արտահայտել զգացմունքներ",
        narrativaEs: "Contar una historia",
        narrativaAm: "Պատմել պատմություն",
        teatroEs: "Representar una acción",
        teatroAm: "Բեմադրել գործողություն"
      },
      {
        caracteristicaEs: "Narrador",
        caracteristicaAm: "Պատմող",
        liricaEs: "No es necesario",
        liricaAm: "Անհրաժեշտ չէ",
        narrativaEs: "Normalmente sí",
        narrativaAm: "Սովորաբար այո",
        teatroEs: "Normalmente no",
        teatroAm: "Սովորաբար ոչ"
      },
      {
        caracteristicaEs: "Forma habitual",
        caracteristicaAm: "Սովորական ձև",
        liricaEs: "Verso",
        liricaAm: "Չափածո",
        narrativaEs: "Prosa",
        narrativaAm: "Արձակ",
        teatroEs: "Diálogos",
        teatroAm: "Երկխոսություններ"
      },
      {
        caracteristicaEs: "Elemento clave",
        caracteristicaAm: "Գլխավոր հատկանիշ",
        liricaEs: "Emociones",
        liricaAm: "Զգացմունքներ / Հույզեր",
        narrativaEs: "Narración",
        narrativaAm: "Պատմում (իրադարձություններ)",
        teatroEs: "Representación",
        teatroAm: "Բեմականացում (գործողություն)"
      },
      {
        caracteristicaEs: "Ejemplo típico",
        caracteristicaAm: "Տիպիկ օրինակ",
        liricaEs: "Poema",
        liricaAm: "Բանաստեղծություն",
        narrativaEs: "Cuento, novela",
        narrativaAm: "Հեքիաթ, պատմվածք, վեպ",
        teatroEs: "Obra teatral",
        teatroAm: "Թատերական պիես"
      }
    ],
    mismoTema: {
      tituloEs: "Tres ejemplos sobre un mismo tema (la lluvia y la nostalgia)",
      tituloAm: "Երեք նմանատիպ օրինակ, բայց տարբեր ժանրերով (անձրև և կարոտ)",
      ejemplos: [
        {
          letra: "A",
          generoEs: "Lírica",
          generoAm: "Քնարերգություն",
          lineasEs: [
            "La lluvia cae sobre mi ventana,",
            "y mi corazón recuerda tu mirada."
          ],
          lineasAm: [
            "Անձրևը թափվում է պատուհանիս վրա,",
            "իսկ իմ սիրտը հիշում է քո հայացքը։"
          ],
          porQueEs: "¿Por qué? Expresa emociones personales y está escrito en verso.",
          porQueAm: "Ինչո՞ւ։ Արտահայտում է հույզեր, գրված է չափածո։"
        },
        {
          letra: "B",
          generoEs: "Narrativa",
          generoAm: "Պատմողական գրականություն",
          lineasEs: [
            "María miró por la ventana. Estaba lloviendo y recordó a su mejor amiga."
          ],
          lineasAm: [
            "Մարիան նայեց պատուհանից։ Անձրև էր գալիս, և նա հիշեց իր լավագույն ընկերուհուն։"
          ],
          porQueEs: "¿Por qué? Un narrador relata las acciones y pensamientos del personaje en prosa.",
          porQueAm: "Ինչո՞ւ։ Պատմողը ներկայացնում է Մարիայի գործողություններն ու մտքերը արձակ ձևով։"
        },
        {
          letra: "C",
          generoEs: "Teatro",
          generoAm: "Թատերգություն",
          lineasEs: [
            "MARÍA: (Mirando por la ventana) Está lloviendo.",
            "ANA: ¿Por qué estás triste?",
            "MARÍA: Echo de menos a mi amiga."
          ],
          lineasAm: [
            "ՄԱՐԻԱ: (Նայելով պատուհանից) Անձրև է գալիս։",
            "ԱՆԱ: Ինչո՞ւ ես տխուր։",
            "ՄԱՐԻԱ: Կարոտում եմ իմ ընկերուհուն։"
          ],
          porQueEs: "¿Por qué? Hay nombres de personajes, diálogo directo y una acotación teatral.",
          porQueAm: "Ինչո՞ւ։ Կան հերոսների անուններ, երկխոսություն և բեմական նշում։"
        }
      ],
      reglaOroEs: "Atención: El mismo tema (la lluvia y el anhelo) puede presentarse en los tres géneros. Para determinar el género no basta el tema; hay que analizar la forma y el objetivo de la obra.",
      reglaOroAm: "Ուշադրություն. Նույն թեման՝ անձրևն ու կարոտը, կարող է ներկայացվել բոլոր երեք ժանրերով։ Ժանրը որոշելու համար միայն թեման բավարար չէ. պետք է ուսումնասիրել ստեղծագործության ձևն ու նպատակը։"
    }
  },

  comoReconocer: {
    titleEs: "5. CÓMO RECONOCER EL GÉNERO EN UN EXAMEN",
    titleAm: "ԻՆՉՊԵՍ ՈՐՈՇԵԼ ԺԱՆՐԸ ՔՆՆՈՒԹՅԱՆ ԺԱՄԱՆԱԿ",
    preguntasDiagnosticas: [
      {
        num: 1,
        preguntaEs: "¿El texto expresa principalmente sentimientos o emociones?",
        preguntaAm: "Տեքստը հիմնականում արտահայտո՞ւմ է զգացմունքներ կամ հույզեր։",
        resultado: "Lírica",
        badge: "Քնարերգություն"
      },
      {
        num: 2,
        preguntaEs: "¿Un narrador cuenta lo que sucede a unos personajes?",
        preguntaAm: "Պատմողը ներկայացնո՞ւմ է հերոսների հետ կատարվող իրադարձությունները։",
        resultado: "Narrativa",
        badge: "Պատմողական"
      },
      {
        num: 3,
        preguntaEs: "¿Los personajes hablan directamente y hay indicaciones escénicas?",
        preguntaAm: "Հերոսները խոսո՞ւմ են անմիջականորեն, և կա՞ն բեմական նշումներ։",
        resultado: "Teatro",
        badge: "Թատերգություն"
      }
    ],
    frasesUtiles: [
      {
        genero: "Lírica",
        es: "Este texto pertenece al género lírico porque expresa sentimientos y emociones personales y está escrito en verso.",
        am: "Այս տեքստը պատկանում է քնարերգությանը, քանի որ արտահայտում է անձնական զգացմունքներ և հույզեր ու գրված է չափածո։"
      },
      {
        genero: "Narrativa",
        es: "Este texto pertenece al género narrativo porque un narrador cuenta una historia protagonizada por unos personajes en un espacio y tiempo determinados.",
        am: "Այս տեքստը պատկանում է պատմողական գրականությանը, քանի որ պատմողը ներկայացնում է հերոսների մասնակցությամբ պատմություն որոշակի վայրում և ժամանակում։"
      },
      {
        genero: "Teatro",
        es: "Este texto pertenece al género teatral porque está formado por diálogos y acotaciones y está pensado para ser representado ante un público.",
        am: "Այս տեքստը պատկանում է թատերգությանը, քանի որ բաղկացած է երկխոսություններից և բեմական նշումներից ու նախատեսված է հանդիսատեսի առաջ բեմադրության համար։"
      }
    ]
  },

  ejercicio1: [
    {
      id: 1,
      textEs: [
        "La luna ilumina mis sueños,",
        "y mi alma busca tu voz."
      ],
      correctGenre: "Lírica",
      explanationEs: "Es lírica porque expresa sentimientos personales (mis sueños, mi alma) y está escrito en verso con musicalidad.",
      explanationAm: "Քնարերգություն է, որովհետև արտահայտում է անձնական հույզեր («իմ երազները», «իմ հոգին») և գրված է չափածո տողերով։"
    },
    {
      id: 2,
      textEs: [
        "Pedro salió de casa temprano. Caminó hasta el río y encontró una caja misteriosa."
      ],
      correctGenre: "Narrativa",
      explanationEs: "Es narrativa porque hay un narrador en tercera persona que relata las acciones de un personaje (Pedro) situadas en el tiempo y el espacio.",
      explanationAm: "Պատմողական է, որովհետև 3-րդ դեմքով պատմողը ներկայացնում է Պեդրոյի գործողությունները՝ ժամանակի և վայրի մեջ։"
    },
    {
      id: 3,
      textEs: [
        "LAURA: (Gritando) ¡Cuidado!",
        "DANIEL: (Corre hacia ella) ¿Qué ha pasado?"
      ],
      correctGenre: "Teatro",
      explanationEs: "Es teatro porque los personajes dialogan directamente en mayúsculas y contiene acotaciones teatrales entre paréntesis.",
      explanationAm: "Թատերգություն է, քանի որ կան հերոսների անուններ, ուղիղ երկխոսություն և փակագծերում բեմական նշումներ (acotaciones)։"
    },
    {
      id: 4,
      textEs: [
        "En el fondo de mi pecho",
        "vive un recuerdo de amor."
      ],
      correctGenre: "Lírica",
      explanationEs: "Es lírica porque habla del amor y recuerdos íntimos («mi pecho», «recuerdo de amor») en versos rimados.",
      explanationAm: "Քնարերգություն է, քանի որ արտահայտում է ներքին սիրո զգացմունքներ («իմ կրծքում», «սիրո հիշողություն») չափածո տողերով։"
    },
    {
      id: 5,
      textEs: [
        "Hace muchos años, en un pueblo pequeño, vivía un anciano que conocía todos los secretos del bosque."
      ],
      correctGenre: "Narrativa",
      explanationEs: "Es narrativa porque presenta el planteamiento de una historia con tiempo («hace muchos años»), espacio («en un pueblo») y personaje («un anciano»).",
      explanationAm: "Պատմողական է, քանի որ ներկայացնում է պատմության սկիզբը (planteamiento)՝ նշելով ժամանակը («տարիներ առաջ»), վայրը («գյուղում») և հերոսին («ծերունի»)։"
    },
    {
      id: 6,
      textEs: [
        "MARTA: No encuentro las llaves.",
        "PABLO: (Se levanta) Vamos a buscarlas."
      ],
      correctGenre: "Teatro",
      explanationEs: "Es teatro porque no hay narrador; la acción avanza a través del diálogo y la acotación de movimiento «(Se levanta)».",
      explanationAm: "Թատերգություն է, քանի որ պատմող չկա. գործողությունն առաջ է գնում երկխոսության և շարժման բեմական նշման «(Se levanta)» միջոցով։"
    }
  ] as QuizQuestion1[],

  ejercicio2: [
    {
      id: 1,
      statementEs: "La lírica expresa principalmente sentimientos.",
      statementAm: "Քնարերգությունը հիմնականում արտահայտում է զգացմունքներ։",
      correctAnswer: true,
      explanationEs: "Verdadero. La subjetividad y la expresión de emociones son el rasgo central de la lírica.",
      explanationAm: "Ճիշտ է։ Զգացմունքների և հույզերի արտահայտումը քնարերգության գլխավոր հատկանիշն է։"
    },
    {
      id: 2,
      statementEs: "En la narrativa nunca hay narrador.",
      statementAm: "Պատմողական գրականության մեջ երբեք պատմող չկա։",
      correctAnswer: false,
      explanationEs: "Falso. En la narrativa la presencia del narrador es un elemento fundamental.",
      explanationAm: "Սխալ է։ Պատմողի առկայությունը պատմողական ժանրի հիմնարար հատկանիշն է։"
    },
    {
      id: 3,
      statementEs: "El teatro suele utilizar diálogos.",
      statementAm: "Թատերգությունը սովորաբար օգտագործում է երկխոսություններ։",
      correctAnswer: true,
      explanationEs: "Verdadero. Los diálogos entre personajes son el motor principal del texto teatral.",
      explanationAm: "Ճիշտ է։ Կերպարների երկխոսություններն են թատերական տեքստի գլխավոր շարժիչ ուժը։"
    },
    {
      id: 4,
      statementEs: "Todos los textos en verso son líricos.",
      statementAm: "Բոլոր չափածո տեքստերը քնարական են։",
      correctAnswer: false,
      explanationEs: "Falso. Existen textos narrativos o dramáticos escritos en verso (por ejemplo, poemas épicos o comedias del Siglo de Oro).",
      explanationAm: "Սխալ է։ Կան նաև չափածո գրված պատմողական կամ թատերական գործեր (օրինակ՝ դյուցազներգություններ կամ չափածո պիեսներ)։"
    },
    {
      id: 5,
      statementEs: "Las acotaciones indican gestos, movimientos o elementos escénicos.",
      statementAm: "Բեմական նշումները (acotaciones) ցույց են տալիս ժեստեր, շարժումներ կամ բեմական տարրեր։",
      correctAnswer: true,
      explanationEs: "Verdadero. Son notas del autor que guían a los actores y al director en la representación.",
      explanationAm: "Ճիշտ է։ Դրանք հեղինակի հրահանգներն են դերասանների և ռեժիսորի համար։"
    },
    {
      id: 6,
      statementEs: "La narrativa solo puede contar hechos reales.",
      statementAm: "Պատմողական գրականությունը կարող է պատմել միայն իրական դեպքեր։",
      correctAnswer: false,
      explanationEs: "Falso. La narrativa puede contar historias tanto reales como de ficción o fantásticas.",
      explanationAm: "Սխալ է։ Պատմողական գրականությունը կարող է պատմել ինչպես իրական, այնպես էլ հորինված կամ երևակայական պատմություններ։"
    },
    {
      id: 7,
      statementEs: "El teatro puede utilizar música, luces y vestuario.",
      statementAm: "Թատրոնում կարող են օգտագործվել երաժշտություն, լույսեր և հագուստ։",
      correctAnswer: true,
      explanationEs: "Verdadero. El teatro combina múltiples códigos artísticos para la puesta en escena.",
      explanationAm: "Ճիշտ է։ Թատերական արվեստն օգտագործում է բազմաթիվ կոդեր՝ բեմականացման համար։"
    },
    {
      id: 8,
      statementEs: "La narrativa se escribe actualmente sobre todo en prosa.",
      statementAm: "Պատմողական գրականությունը ներկայումս գրվում է հատկապես արձակ։",
      correctAnswer: true,
      explanationEs: "Verdadero. Aunque en la antigüedad se usó el verso, hoy en día predomina la prosa.",
      explanationAm: "Ճիշտ է։ Թեև հին ժամանակներում շատ էր չափածոն, ներկայումս գրեթե ամբողջությամբ գերիշխում է արձակը։"
    }
  ] as QuizQuestion2[],

  ejercicio3: [
    {
      id: 1,
      questionEs: "¿Cuáles son los tres grandes géneros literarios?",
      questionAm: "Որո՞նք են երեք հիմնական գրական ժանրերը։",
      answerEs: "Los tres grandes géneros literarios son la lírica, la narrativa y el teatro (o dramático).",
      answerAm: "Երեք մեծ գրական ժանրերն են՝ քնարերգությունը (lírica), պատմողական գրականությունը (narrativa) և թատերգությունը (teatro):",
      keyPoints: ["Lírica", "Narrativa", "Teatro"]
    },
    {
      id: 2,
      questionEs: "¿Qué expresa principalmente la lírica?",
      questionAm: "Ի՞նչ է հիմնականում արտահայտում քնարերգությունը։",
      answerEs: "La lírica expresa principalmente sentimientos, emociones, pensamientos y estados de ánimo del autor de manera subjetiva.",
      answerAm: "Քնարերգությունը հիմնականում արտահայտում է հեղինակի զգացմունքները, հույզերը, մտքերը և հոգեվիճակը՝ սուբյեկտիվ տեսանկյունից։",
      keyPoints: ["Sentimientos y emociones", "Subjetividad", "Estados de ánimo"]
    },
    {
      id: 3,
      questionEs: "¿En qué forma se escribe principalmente la lírica?",
      questionAm: "Ի՞նչ ձևով է հիմնականում գրվում քնարերգությունը։",
      answerEs: "La lírica se escribe principalmente en verso, aunque también existe la prosa poética.",
      answerAm: "Քնարերգությունը հիմնականում գրվում է չափածո (en verso), թեև գոյություն ունի նաև բանաստեղծական արձակ (prosa poética)։",
      keyPoints: ["En verso", "Prosa poética"]
    },
    {
      id: 4,
      questionEs: "¿Qué es un narrador?",
      questionAm: "Ի՞նչ է պատմողը (narrador)։",
      answerEs: "El narrador es la voz creada por el autor para contar la historia. No debe confundirse con el autor, que es la persona real que escribe la obra.",
      answerAm: "Պատմողը հեղինակի կողմից ստեղծված այն ձայնն է, որը ներկայացնում է պատմությունը։ Այն չպետք է շփոթել հեղինակի (իրական մարդու) հետ։",
      keyPoints: ["Voz creada por el autor", "Diferente del autor real"]
    },
    {
      id: 5,
      questionEs: "¿Qué diferencia hay entre un narrador en primera y tercera persona?",
      questionAm: "Ի՞նչ տարբերություն կա առաջին և երրորդ դեմքով պատմողի միջև։",
      answerEs: "El narrador en primera persona cuenta la historia desde dentro usando «yo» o «nosotros» (como protagonista o testigo), mientras que el narrador en tercera persona cuenta los hechos desde fuera usando «él», «ella» o «ellos».",
      answerAm: "Առաջին դեմքով պատմողը ներկայացնում է իրադարձությունները ներսից՝ «ես» կամ «մենք» ձևով (որպես գլխավոր հերոս կամ ականատես), իսկ երրորդ դեմքով պատմողը պատմում է դրսից՝ «նա», «նրանք» ձևով։",
      keyPoints: ["Primera persona: «yo», protagonista/testigo", "Tercera persona: «él/ella», desde fuera"]
    },
    {
      id: 6,
      questionEs: "¿Cuáles son las tres partes habituales de una narración?",
      questionAm: "Որո՞նք են պատմվածքի սովորական երեք մասերը։",
      answerEs: "Las tres partes habituales son el planteamiento (presentación inicial), el nudo (aparición y desarrollo del conflicto) y el desenlace (resolución final del conflicto).",
      answerAm: "Երեք մասերն են՝ planteamiento (սկիզբ / նախադրություն), nudo (հանգույց / խնդրի առաջացում) և desenlace (հանգուցալուծում / ավարտ)։",
      keyPoints: ["Planteamiento", "Nudo", "Desenlace"]
    },
    {
      id: 7,
      questionEs: "¿Qué es una acotación teatral?",
      questionAm: "Ի՞նչ է բեմական նշումը (acotación teatral)։",
      answerEs: "Una acotación es una indicación o instrucción del autor (generalmente entre paréntesis) sobre los gestos, movimientos, tono de voz de los actores o elementos escénicos.",
      answerAm: "Բեմական նշումը հեղինակի ցուցումն է (սովորաբար փակագծերում) դերասանների ժեստերի, շարժումների, ձայնի երանգի կամ բեմական ձևավորման վերաբերյալ։",
      keyPoints: ["Indicación del autor", "Entre paréntesis", "Gestos, movimientos, escenario"]
    },
    {
      id: 8,
      questionEs: "¿Qué diferencia hay entre narrativa y teatro?",
      questionAm: "Ի՞նչ տարբերություն կա պատմողական գրականության և թատերգության միջև։",
      answerEs: "En la narrativa un narrador cuenta lo sucedido en prosa o verso para ser leído, mientras que en el teatro la acción se representa en un escenario mediante diálogos directos entre los personajes y acotaciones, normalmente sin narrador.",
      answerAm: "Պատմողականում պատմողը ներկայացնում է իրադարձությունները կարդալու համար, իսկ թատերգության մեջ գործողությունը բեմականացվում է դերասանների ուղիղ երկխոսությունների և բեմական նշումների միջոցով՝ առանց պատմողի։",
      keyPoints: ["Narrativa: narrador cuenta historia", "Teatro: diálogos representados en escenario"]
    }
  ] as QuizQuestion3[],

  resumenMemorizar: {
    titleEs: "7. RESUMEN PARA MEMORIZAR",
    titleAm: "ԱՄՓՈՓՈՒՄ՝ ԱՆԳԻՐ ՍՈՎՈՐԵԼՈՒ ՀԱՄԱՐ",
    reglaFacil: [
      { generoEs: "Lírica", generoAm: "Քնարերգություն", verboEs: "Sentir", verboAm: "Զգալ", detalleEs: "Expresar sentimientos y emociones íntimas", color: "from-rose-500/10 to-pink-500/10 border-rose-200" },
      { generoEs: "Narrativa", generoAm: "Պատմողական գրականություն", verboEs: "Contar", verboAm: "Պատմել", detalleEs: "Un narrador relata una historia con personajes en tiempo y espacio", color: "from-sky-500/10 to-blue-500/10 border-sky-200" },
      { generoEs: "Teatro", generoAm: "Թատերգություն", verboEs: "Representar", verboAm: "Բեմադրել", detalleEs: "Obras para ser representadas en un escenario mediante diálogos", color: "from-amber-500/10 to-orange-500/10 border-amber-200" }
    ],
    consejoFinalEs: "Si el alumno puede explicar estas tres diferencias y dar un ejemplo de cada una, ya domina los conceptos fundamentales para el examen.",
    consejoFinalAm: "Եթե աշակերտը կարողանա բացատրել այս երեք տարբերությունները և յուրաքանչյուրի համար բերել մեկ օրինակ, արդեն կունենա թեմայի հիմնական գաղափարների լավ իմացություն։",
    flashcards: [
      {
        id: "fc-lirica",
        titleEs: "Lírica",
        titleAm: "Քնարերգություն",
        frontEs: "¿Qué es la lírica y cuál es su objetivo?",
        frontAm: "Ի՞նչ է քնարերգությունը և ո՞րն է նրա նպատակը։",
        backEs: "Expresa sentimientos y emociones de forma subjetiva. Suele estar en verso y utiliza recursos literarios.",
        backAm: "Արտահայտում է անձնական զգացմունքներ և հույզեր։ Սովորաբար գրվում է չափածո և օգտագործում է գեղարվեստական միջոցներ։",
        keyFormula: "Lírica → SENTIR (Զգալ)"
      },
      {
        id: "fc-narrativa",
        titleEs: "Narrativa",
        titleAm: "Պատմողական գրականություն",
        frontEs: "¿Qué caracteriza a la narrativa?",
        frontAm: "Ի՞նչն է բնութագրում պատմողական գրականությունը։",
        backEs: "Un narrador cuenta una historia con personajes, situada en un espacio y un tiempo. Se divide en Planteamiento, Nudo y Desenlace.",
        backAm: "Պատմողը ներկայացնում է պատմություն՝ կերպարներով, վայրով և ժամանակով։ Բաժանվում է Սկզբի, Հանգույցի և Հանգուցալուծման։",
        keyFormula: "Narrativa → CONTAR (Պատմել)"
      },
      {
        id: "fc-teatro",
        titleEs: "Teatro",
        titleAm: "Թատերգություն",
        frontEs: "¿Qué caracteriza al texto teatral?",
        frontAm: "Ի՞նչն է բնութագրում թատերական տեքստը։",
        backEs: "Escrito para ser representado en un escenario. Funciona mediante diálogos directos y acotaciones, normalmente sin narrador.",
        backAm: "Գրվում է բեմի վրա ներկայացվելու համար։ Գործում է ուղիղ երկխոսությունների և բեմական նշումների (acotaciones) միջոցով՝ առանց պատմողի։",
        keyFormula: "Teatro → REPRESENTAR (Բեմադրել)"
      },
      {
        id: "fc-acotaciones",
        titleEs: "Acotaciones",
        titleAm: "Բեմական նշումներ",
        frontEs: "¿Qué son las acotaciones teatrales?",
        frontAm: "Ի՞նչ են բեմական նշումները (acotaciones)։",
        backEs: "Indicaciones del autor entre paréntesis sobre gestos, movimientos, tono o elementos del escenario.",
        backAm: "Հեղինակի ցուցումները փակագծերում՝ ժեստերի, շարժումների, ձայնի կամ բեմական իրերի մասին։",
        keyFormula: "Acotación = Indicación escénica"
      },
      {
        id: "fc-narrador",
        titleEs: "Tipos de Narrador",
        titleAm: "Պատմողի տեսակները",
        frontEs: "¿Cómo distinguir narrador en 1.ª y 3.ª persona?",
        frontAm: "Ինչպե՞ս տարբերել 1-ին և 3-րդ դեմքով պատմողին։",
        backEs: "1.ª persona: «yo / nosotros», protagonista o testigo (fui, vi). 3.ª persona: «él / ella / ellos» desde fuera (fue, vio).",
        backAm: "1-ին դեմք՝ «ես/մենք», գլխավոր հերոս կամ ականատես (գնացի, տեսա)։ 3-րդ դեմք՝ «նա/նրանք» դրսից (գնաց, տեսավ)։",
        keyFormula: "1.ª = Yo / 3.ª = Él"
      },
      {
        id: "fc-estructura",
        titleEs: "Estructura Narrativa",
        titleAm: "Պատմության կառուցվածքը",
        frontEs: "¿Cuáles son las 3 partes de la narración?",
        frontAm: "Որո՞նք են պատմվածքի 3 հիմնական փուլերը։",
        backEs: "1. Planteamiento (situación inicial) → 2. Nudo (el conflicto) → 3. Desenlace (resolución final).",
        backAm: "1. Planteamiento (սկիզբ) → 2. Nudo (հանգույց / խնդիր) → 3. Desenlace (հանգուցալուծում)։",
        keyFormula: "Planteamiento → Nudo → Desenlace"
      }
    ] as Flashcard[]
  }
};
