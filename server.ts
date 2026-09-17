import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "TIPDIL/YÖKDİL Medical English Coach" });
});

// Generate custom topic lesson using Gemini
app.post("/api/generate-lesson", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic || typeof topic !== "string" || !topic.trim()) {
      res.status(400).json({ error: "Lütfen geçerli bir konu başlığı giriniz." });
      return;
    }

    const ai = getAi();
    const systemPrompt = `Sen Türkiye'de uygulanan TIPDİL ve YÖKDİL Sağlık Bilimleri sınavları konusunda uzmanlaşmış, yüzlerce hekimi bu sınavlardan geçirmiş tecrübeli bir Tıp İngilizcesi (Medical English) eğitmenisin.

ÖĞRENCİ PROFİLİ:
- Karşındaki kişi Tıp Fakültesi 3. sınıf öğrencisidir.
- Tıbbi terminolojiye (patoloji, farmakoloji, anatomi) aşinadır ancak genel İngilizce grameri, cümle yapıları ve akademik geçişler konusunda temeli zayıftır.
- Amacı genel İngilizce öğrenmek değil; TUS'a girebilmek için TIPDİL barajı olan 50 puanı (80 soruda 40 doğruyu) tek seferde ve en pratik yoldan geçmektir.
- Vakti kısıtlıdır; gereksiz gramer jargonuyla (gerund, participle clause gibi teorik isimlerle) boğulmak istemez, matematiksel formüller ve sınav odaklı hap kurallar görmek ister.

DİL & ANLATIM TARZI:
- Samimi, motive edici, hekim dayanışması hissettiren bir eğitmen dili kullan ("Kıymetli meslektaşım", "Stetoskopu bir yana bırakalım", "Bu barajı birlikte aşacağız").
- Asla yüzeysel veya geçiştirici olma; her soru ve açıklama TIPDİL'in orijinal zorluk seviyesine tam uysun.

GÖREV:
Aşağıdaki 5 ana modülü EKSİKSİZ içeren geçerli bir JSON nesnesi üret:
1. İŞİN ÖZÜ & MATEMATİKSEL HAP FORMÜL: Hekimce 2-3 cümlelik mantık, saniyeler içinde doğru şıkkı bulduran formül, noktalama ipuçları.
2. SINAV KAZANDIRAN TIBBİ KELİMELER & EŞ ANLAMLILARI (ESP): Konuyla en sık yan yana gelen 4 kritik tıbbi fiil/kalıp, Türkçe karşılığı, sınav eş anlamlıları (Synonyms), TIPDİL'de tipik kullanım kalıbı (collocation).
3. TIBBİ VAKA & MAKALE ÖRNEK CÜMLELERİ (SENTENCE BREAKDOWN): En az 2 gerçekçi klinik tıp cümlesi, iskelet analizi (özne, ana yüklem, bağlaç/yan cümle, nesne), akıcı hekimce Türkçe klinik çevirisi.
4. ÖSYM & TIPDİL KOMİSYONUNUN ÇELDIRİCİ TUZAKLARI: En meşhur 2 tuzak, öğrenciyi kandırma taktikleri, soru kökündeki radar kelimeler.
5. SICAĞI SICAĞINA 3 TIPDİL CHECK-UP SORUSU (5 ŞIKLI A-E): Biri "Kelime/Kalıp", biri "Gramer/Bağlaç", biri "Cümle Tamamlama" formatında. Her soru için DOĞRU CEVAP, TÜRKÇE ÇEVİRİSİ, DOĞRU ŞIKKIN NEDENİ ve ÇELDIRICI ANALIZI (diğer 4 şık neden elenir).`;

    const userPrompt = `Lütfen şu konuyu 5 modüllü yapıyla eksiksiz anlat: ${topic.trim()}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            category: { type: Type.STRING },
            badge: { type: Type.STRING },
            frequencyRank: { type: Type.STRING },
            introNote: { type: Type.STRING },
            module1: {
              type: Type.OBJECT,
              properties: {
                coreLogic: { type: Type.STRING },
                primaryFormula: { type: Type.STRING },
                formulaCards: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      title: { type: Type.STRING },
                      pattern: { type: Type.STRING },
                      rules: { type: Type.ARRAY, items: { type: Type.STRING } },
                      clinicalExample: { type: Type.STRING },
                      exampleTr: { type: Type.STRING },
                    },
                    required: ["title", "pattern", "rules", "clinicalExample", "exampleTr"],
                  },
                },
                punctuationTips: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
              required: ["coreLogic", "primaryFormula", "formulaCards", "punctuationTips"],
            },
            module2: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  verb: { type: Type.STRING },
                  meaningTr: { type: Type.STRING },
                  synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
                  tipdilCollocation: { type: Type.STRING },
                  exampleSentence: { type: Type.STRING },
                  clinicalContext: { type: Type.STRING },
                },
                required: ["verb", "meaningTr", "synonyms", "tipdilCollocation", "exampleSentence", "clinicalContext"],
              },
            },
            module3: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  originalEn: { type: Type.STRING },
                  breakdown: {
                    type: Type.OBJECT,
                    properties: {
                      subject: { type: Type.STRING },
                      mainVerb: { type: Type.STRING },
                      conjunctionClause: { type: Type.STRING },
                      objectOrComplement: { type: Type.STRING },
                    },
                    required: ["subject", "mainVerb", "conjunctionClause", "objectOrComplement"],
                  },
                  translationTr: { type: Type.STRING },
                  clinicalInsight: { type: Type.STRING },
                },
                required: ["originalEn", "breakdown", "translationTr", "clinicalInsight"],
              },
            },
            module4: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  trapName: { type: Type.STRING },
                  howCommissionTricks: { type: Type.STRING },
                  deceptiveOptionExample: { type: Type.STRING },
                  radarKeywords: { type: Type.ARRAY, items: { type: Type.STRING } },
                  defenseStrategy: { type: Type.STRING },
                },
                required: ["trapName", "howCommissionTricks", "deceptiveOptionExample", "radarKeywords", "defenseStrategy"],
              },
            },
            module5: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  type: { type: Type.STRING },
                  questionText: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        key: { type: Type.STRING },
                        text: { type: Type.STRING },
                        whyEliminatedOrCorrect: { type: Type.STRING },
                      },
                      required: ["key", "text", "whyEliminatedOrCorrect"],
                    },
                  },
                  correctAnswer: { type: Type.STRING },
                  translationTr: { type: Type.STRING },
                  rationale: { type: Type.STRING },
                  distractorAnalysis: { type: Type.STRING },
                },
                required: ["id", "type", "questionText", "options", "correctAnswer", "translationTr", "rationale", "distractorAnalysis"],
              },
            },
          },
          required: ["id", "title", "category", "badge", "frequencyRank", "introNote", "module1", "module2", "module3", "module4", "module5"],
        },
      },
    });

    const parsedJson = JSON.parse(response.text || "{}");
    res.json(parsedJson);
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error?.message || "Ders içeriği üretilirken bir hata oluştu.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TIPDİL Medical English server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
