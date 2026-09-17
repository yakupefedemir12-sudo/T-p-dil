import { TopicLesson, Module1Formula, FormulaCard, Module2Word, Module3Sentence, Module4Trap, Module5Question } from '../types';

export function formatLessonToMarkdown(topic: TopicLesson): string {
  let md = `# [TIPDİL & YÖKDİL SAĞLIK] ${topic.title}\n`;
  md += `**Kategori:** ${topic.category} | **Sınav Önemi:** ${topic.frequencyRank} (${topic.badge})\n\n`;
  md += `> **Eğitmen Hekimden Not:** ${topic.introNote}\n\n`;
  md += `---\n\n`;

  // Module 1
  md += `## 🎯 1. İŞİN ÖZÜ & MATEMATİKSEL HAP FORMÜL\n\n`;
  md += `**İşin Özü:** ${topic.module1.coreLogic}\n\n`;
  md += `**Altın Formül:**\n\`\`\`text\n${topic.module1.primaryFormula}\n\`\`\`\n\n`;
  md += `### Sınav Kalıpları:\n`;
  topic.module1.formulaCards.forEach((c, idx) => {
    md += `#### ${idx + 1}. ${c.title}\n`;
    md += `- **Kalıp:** \`${c.pattern}\`\n`;
    c.rules.forEach(r => md += `- ${r}\n`);
    md += `- **Klinik Örnek:** *"${c.clinicalExample}"*\n`;
    md += `- **Çeviri:** ${c.exampleTr}\n\n`;
  });
  if (topic.module1.punctuationTips?.length) {
    md += `### Noktalama İpuçları:\n`;
    topic.module1.punctuationTips.forEach(tip => md += `- ${tip}\n`);
    md += `\n`;
  }
  md += `---\n\n`;

  // Module 2
  md += `## 🔑 2. SINAV KAZANDIRAN TIBBİ KELİMELER & EŞ ANLAMLILARI (ESP)\n\n`;
  topic.module2.forEach((w, idx) => {
    md += `### ${idx + 1}. ${w.verb} (${w.meaningTr})\n`;
    md += `- **Sınav Eş Anlamlıları (Synonyms):** ${w.synonyms.join(' = ')}\n`;
    md += `- **TIPDİL Kalıbı:** \`${w.tipdilCollocation}\`\n`;
    md += `- **Klinik Bağlam:** ${w.clinicalContext}\n`;
    md += `- **Cümle:** *"${w.exampleSentence}"*\n\n`;
  });
  md += `---\n\n`;

  // Module 3
  md += `## 🔬 3. TIBBİ VAKA & MAKALE CÜMLELERİ (SENTENCE BREAKDOWN)\n\n`;
  topic.module3.forEach((s, idx) => {
    md += `### Vaka/Cümle ${idx + 1}:\n`;
    md += `*"${s.originalEn}"*\n\n`;
    md += `**İskelet Analizi:**\n`;
    md += `- **Özne (Subject):** ${s.breakdown.subject}\n`;
    md += `- **Ana Yüklem (Main Verb):** ${s.breakdown.mainVerb}\n`;
    md += `- **Bağlaç / Yan Cümle (Clause):** ${s.breakdown.conjunctionClause}\n`;
    md += `- **Nesne / Tümleç (Object):** ${s.breakdown.objectOrComplement}\n\n`;
    md += `**Klinik Çevirisi:** ${s.translationTr}\n`;
    if (s.clinicalInsight) md += `**Hekim Gözü:** ${s.clinicalInsight}\n\n`;
  });
  md += `---\n\n`;

  // Module 4
  md += `## ⚠️ 4. ÖSYM & TIPDİL KOMİSYONUNUN ÇELDİRİCİ TUZAKLARI\n\n`;
  topic.module4.forEach((t, idx) => {
    md += `### Tuzak ${idx + 1}: ${t.trapName}\n`;
    md += `- **Kandırma Taktiği:** ${t.howCommissionTricks}\n`;
    if (t.deceptiveOptionExample) md += `- **Hileli Şık:** \`${t.deceptiveOptionExample}\`\n`;
    md += `- **Radar Kelimeler:** ${t.radarKeywords.join(', ')}\n`;
    md += `- **Savunma Stratejisi:** ${t.defenseStrategy}\n\n`;
  });
  md += `---\n\n`;

  // Module 5
  md += `## 📝 5. 3 TIPDİL CHECK-UP SORUSU (5 ŞIKLI)\n\n`;
  topic.module5.forEach((q, idx) => {
    md += `### Soru ${idx + 1} [${q.type}]:\n`;
    md += `${q.questionText}\n\n`;
    q.options.forEach(o => {
      md += `${o.key}) ${o.text}\n`;
    });
    md += `\n**Doğru Cevap:** ${q.correctAnswer}\n`;
    md += `**Çeviri:** ${q.translationTr}\n`;
    md += `**Doğru Şıkkın Nedeni:** ${q.rationale}\n`;
    md += `**Çeldirici Analizi:** ${q.distractorAnalysis}\n\n`;
  });

  return md;
}

export function formatFormulaCardToMarkdown(card: FormulaCard): string {
  let md = `### ${card.title}\n`;
  md += `Kalıp: ${card.pattern}\n`;
  card.rules.forEach((r: string) => md += `• ${r}\n`);
  md += `Örnek: "${card.clinicalExample}"\n`;
  md += `Çeviri: ${card.exampleTr}\n`;
  return md;
}

export function formatWordToMarkdown(w: Module2Word): string {
  let md = `**${w.verb}** (${w.meaningTr})\n`;
  md += `Eş Anlamlıları: ${w.synonyms.join(' = ')}\n`;
  md += `Kalıp: ${w.tipdilCollocation}\n`;
  md += `Klinik Bağlam: ${w.clinicalContext}\n`;
  md += `Örnek: "${w.exampleSentence}"\n`;
  return md;
}

export function formatSentenceToMarkdown(s: Module3Sentence): string {
  let md = `"${s.originalEn}"\n\n`;
  md += `[Özne]: ${s.breakdown.subject}\n`;
  md += `[Ana Yüklem]: ${s.breakdown.mainVerb}\n`;
  md += `[Bağlaç/Yan Cümle]: ${s.breakdown.conjunctionClause}\n`;
  md += `[Nesne/Tümleç]: ${s.breakdown.objectOrComplement}\n\n`;
  md += `Çeviri: ${s.translationTr}\n`;
  return md;
}

export function formatTrapToMarkdown(t: Module4Trap): string {
  let md = `⚠️ ${t.trapName}\n`;
  md += `Komisyon Taktiği: ${t.howCommissionTricks}\n`;
  if (t.deceptiveOptionExample) md += `Hileli Şık: ${t.deceptiveOptionExample}\n`;
  md += `Radar Kelimeler: ${t.radarKeywords.join(', ')}\n`;
  md += `Savunma: ${t.defenseStrategy}\n`;
  return md;
}

export function formatQuestionToMarkdown(q: Module5Question): string {
  let md = `[TIPDİL ${q.type}]\n${q.questionText}\n\n`;
  q.options.forEach(o => {
    md += `${o.key}) ${o.text}\n`;
  });
  md += `\nDoğru Cevap: ${q.correctAnswer}\n`;
  md += `Çeviri: ${q.translationTr}\n`;
  md += `Nedeni: ${q.rationale}\n`;
  md += `Çeldirici Analizi: ${q.distractorAnalysis}\n`;
  return md;
}
