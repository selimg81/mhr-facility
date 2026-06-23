# CLAUDE.md — MHR Facility

> Projekt-Briefing & Brand-Referenz für die Website-Entwicklung.
> Dieses Dokument enthält alle bisher getroffenen Entscheidungen. Bei der Arbeit am Projekt immer an diese Vorgaben halten.

---

## 1. Projekt

**Firma:** MHR Facility (B2B-Gebäudereinigung, Hamburg & Umland)
**Aktuelle Aufgabe:** Website (Marketing-Site, deutschsprachig, Sie-Form)
**Ziel der Website:** Stammkunden / wiederkehrende Reinigungsverträge gewinnen.

**Wortmarke:** MHR Facility — „MHR" sind die Gründer-Initialen und bilden die eigentliche Marke.
**Hauptclaim:** „Reinigung mit System."

---

## 2. Positionierung (der rote Faden für alle Inhalte)

MHR verkauft **Verlässlichkeit & Steuerung**, nicht „gründliches Putzen". Das Produkt ist die *Gewissheit*, dass es funktioniert — feste Ansprechpartner, klare Prozesse, nachweisbare Qualität. Der Kundenschmerz ist nicht „ist es sauber", sondern „muss ich mich darum kümmern".

**Markenwerte:** Verlässlichkeit · Transparenz · Effizienz · Professionalität

**Tonalität:** modern, techaffin, sachlich, klar. Kurze Sätze. Keine Übertreibungen, keine „strahlend sauber"-Floskeln. B2B auf Augenhöhe, immer **Sie**.

---

## 3. Zielgruppen (Priorität erste 12 Monate)

1. **Gastronomiebetriebe** — HACCP-konforme Reinigung ist Pflichtthema → starker Verkaufshebel. Auf der Website sichtbar adressieren.
2. **Immobilienverwaltungen** — Treppenhaus- & Unterhaltsreinigung als planbares Stammvertrags-Geschäft.
3. *Zweitmarkt:* Bürokomplexe, Bauunternehmen, Ingenieurbüros.

**Empfehlung:** Gastro und Hausverwaltung haben unterschiedliche Bedürfnisse (Hygiene/HACCP vs. planbare Treppenhausreinigung) → je einen eigenen Einstieg / eigene Sektion geben.

---

## 4. Differenzierungs-Feature (unterstützend, NICHT der USP)

Geplante Web-App pro Kunde (Mandanten-Login):
- HACCP-Konzept digital abhaken
- Beanstandungen / Rückfragen erfassen → vom Supervisor beantwortet (Zusage: Antwort binnen 24 h)

**Kommunikationsregel:** Immer als Nutzen formulieren („Sie sehen jederzeit, dass alles erledigt ist"), nie als Technik-Feature. Die App ist der **Beweis** der Positionierung, nicht ihr Kern. Nicht überversprechen.

---

## 5. Design-Tokens

### Farben (Palette A)
```css
:root {
  --anthracite: #1A1F2B; /* Basis dunkel, Text, Hero, Footer */
  --graphite:   #2D3748; /* Sekundär, Karten auf Dunkel */
  --cyan:       #00C2C7; /* Akzent, Buttons, Call-to-Action */
  --cyan-light: #7FE3E6; /* Akzent auf Dunkel, Hervorhebung */
  --cyan-deep:  #0a8a8e; /* Cyan-Variante für Text auf Hell (Kontrast) */
  --grey:       #F4F5F7; /* helle Flächen, Sektionen, Karten */
  --white:      #FFFFFF; /* Grundfläche, max. Lesbarkeit */
}
```

**Farbverhältnis-Faustregel:** ca. 60 % Hell · 30 % Anthrazit · 10 % Cyan. Akzentfarbe sparsam — sie wirkt nur, wenn sie selten ist.

**Hintergrund-Strategie:** Hell als Basis (Lesbarkeit + „sauber"-Wirkung), gezielt dunkle Sektionen als Akzent (Hero, „Warum MHR", Footer) für Premium-Wirkung. **Kein reines Dark-Layout** (Lesbarkeit & B2B-Seriosität).

### Kontrast-Hinweis
Cyan `#00C2C7` auf Weiß hat für Fließtext zu wenig Kontrast → für Text auf hellem Grund `--cyan-deep` nutzen. Volles Cyan ist für Flächen/Buttons (mit dunklem Text) und für Akzente auf Anthrazit gedacht.

### Typografie
Zwei Google Fonts (kostenlos, kommerziell nutzbar):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet">
```
- **Sora** (600/700/800) → Überschriften, Akzente, Zahlen. Technisch-präzise, eigenständig.
- **Inter** (400/500/600/700) → Fließtext, Buttons, Navigation. Neutral, max. lesbar.
- Maximal diese beiden Schriften. Keine weiteren mischen.

**Typo-Skala (Web, Richtwerte):**
| Rolle | Schrift | Größe / Gewicht |
|---|---|---|
| H1 | Sora 700 | ~34–46px, letter-spacing -0.5px |
| H2 | Sora 600/700 | ~25–28px |
| H3 | Sora 600 | ~16–18px |
| Body | Inter 400 | 15px, line-height 1.6 |
| Label/Eyebrow | Inter 600 | 11px, uppercase, letter-spacing 1.5px, in --cyan-deep |

---

## 6. Visuelles Motiv — „Die Schrägen"

Wiedererkennungselement: **drei schräge Balken in aufsteigender Höhe, der dritte in Cyan.**
- Schrägwinkel immer **−18°** (`transform: skewX(-18deg)`).
- Einsatz: Sektions-Trenner (statt schlichter Linien), dezenter großflächiger Akzent in dunklen Heroes, an Foto-Kanten, in Eyebrows/Labels.
- **Sparsam:** ein Akzent pro Sektion genügt.
- Eigenständiges Grafikelement, **kein Logo-Nachbau** → bleibt gültig, auch wenn das finale Logo kommt.

Referenz-Snippet:
```html
<span style="display:inline-block;width:22px;height:3px;background:#00C2C7;transform:skewX(-18deg);"></span>
```

---

## 7. Bildsprache

**So:** saubere/leere Gastro-Flächen, Tresen, Küchen, glänzende Böden; helle gepflegte Treppenhäuser & Eingangsbereiche; Glasfronten & Architektur im Tageslicht; Hamburger Bezug. Team nur dokumentarisch (einheitliche Kleidung, im Tun). Heller, klarer Look mit viel Luft — Helligkeit = „sauber".

**Nicht:** Klischee-Stockfotos (Daumen hoch, Sprühflasche, Lächeln in Kamera), Putzmittel-Nahaufnahmen, Schaum/Eimer, dunkle/unruhige/überladene Bilder, gestellte Posen.

**Icons:** dünne, lineare Outline-Icons (Lucide oder Phosphor). Einheitlich, keine gefüllten/bunten Sets mischen.

---

## 8. Tonalität — Beispiele

| Nicht so | Sondern |
|---|---|
| „Wir machen Ihr Büro blitzeblank und strahlend sauber!" | „Wir halten Ihre Flächen zuverlässig sauber — dokumentiert und planbar." |
| „Vertrauen Sie auf unsere langjährige Leidenschaft für Sauberkeit." | „Feste Teams, klare Prozesse, ein Ansprechpartner." |
| „Bester Reinigungsservice in ganz Hamburg!!!" | „Unterhaltsreinigung für Hamburg & Umland." |
| „Kontaktieren Sie uns noch heute!" | „Angebot anfordern — Antwort binnen 24 Stunden." |

---

## 9. Logo (Status: ausstehend)

Logo wird extern erstellt, noch nicht geliefert. Auf der Website **feste Logo-Bereiche reservieren** (Header, Footer, Favicon) mit Platzhalter, sodass das finale Logo später nur eingesetzt wird — kein Umbau.

Erwartete Dateien: SVG, PNG transparent (mehrere Größen), einfarbige Version (nur Weiß / nur Anthrazit), definierter Schutzraum & Mindestgröße.

**Platzhalter-Konvention im Code:** klar als `LOGO folgt` / Markenschriftzug „MHR Facility" (Sora 700, „Facility" optional in Cyan) kennzeichnen, leicht austauschbar halten (z. B. eine zentrale Komponente/Partial).

---

## 10. SEO-Hinweis

„Facility" ist als Suchbegriff schwach. In `<title>`, Meta-Description, H1 und Texten immer mit **„Gebäudereinigung Hamburg"** kombinieren — ohne den Markennamen zu verändern. Lokale Begriffe einbauen: Hamburg & Umland, Treppenhausreinigung, Unterhaltsreinigung, HACCP / Gastronomiereinigung.

---

## 11. Empfohlene Skills & Sicherheits-Workflow

> Nur Skills aus **offiziellen / verifizierten Quellen** installieren (Anthropic, Vercel, Trail of Bits). Hintergrund: Studien fanden, dass ein nennenswerter Anteil von Community-Skills aus unbekannten Repos Sicherheitslücken oder Schadcode enthält. Keine zufälligen GitHub-Skills mit wenig Sternen installieren.

### A) Gegen den „KI-Look" — frontend-design (offiziell, Anthropic)
Wichtigste Skill für dieses Projekt. Legt vor dem Coden eine klare Design-Richtung fest, statt Standard-Layouts (Inter-Schrift, lila Verlauf, Karten-Grid) zu produzieren.

Installation (eine der beiden Varianten):
```bash
# Variante 1 — über Plugin-Marktplatz (empfohlen)
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins

# Variante 2 — über skills-CLI
npx -y skills add anthropics/skills --skill frontend-design --agent claude-code
```
Aktiviert sich automatisch bei UI-Aufgaben. Mit `/plugin` (ohne Argument) prüfen, ob als „installed" gelistet.

> **Wichtig:** Die Skill liefert Heuristiken, keinen „Geschmack". Den größten Effekt gegen generisches Aussehen liefert die konkrete Design-Vorgabe in **dieser CLAUDE.md** (Farben, Sora/Inter, Schräg-Motiv) — sie ist das „Reference Grounding", das der Skill allein fehlt.

### B) Sicherheit — eingebaut, kein Install nötig
```bash
/security-review      # nach dem Bau ausführen: Schwachstellen-Prüfung per Checkliste
```
Zusätzlich, falls verfügbar: das `security-guidance`-Plugin prüft Änderungen schon während der Arbeit.

### C) Optional — Qualitäts-/Accessibility-Check (Vercel, verifiziert)
Prüft fertigen UI-Code gegen 100+ Regeln (Accessibility, Performance, UX):
```bash
npx -y skills add vercel-labs/agent-skills --skill web-design-guidelines --agent claude-code
```

### Empfohlener Ablauf pro Seite/Komponente
1. Bauen lassen (frontend-design aktiv, CLAUDE.md als Vorgabe).
2. Im Browser ansehen, 3–5 Iterationen einplanen — die erste Version ist Fundament, nicht fertig.
3. `/security-review` für den Sicherheits-Check.
4. Optional `web-design-guidelines` für Accessibility/UX.

### CLAUDE.md-Hygiene (Praxis-Tipps)
- Diese Datei möglichst **unter ~300 Zeilen** halten — sehr lange CLAUDE.md-Dateien werden teilweise ignoriert. Bei Bedarf Details in eigene Skills auslagern.
- Vor jedem neuen Thema `/clear` ausführen, damit alte Kontexte nicht durchsickern.
- Auf einem **Branch** arbeiten, nicht direkt auf `main`; `/rewind` macht schlechte Richtungen rückgängig.
- In Schichten arbeiten (Struktur → Inhalt → Feinschliff), nicht alles in einem Prompt.

---

## 12. Status & nächste Schritte

**Abgeschlossen (Steps 1–7):** Positionierung, Name & Claim, Farbwelt, Typografie, visuelles Motiv, Bildsprache, Brand Guidelines.

**Aktuell (Step 8): Website.** Noch zu klären, bevor gebaut wird:
- Sitemap (One-Pager vs. mehrere Unterseiten?)
- Startseiten-Struktur (Hero, Leistungen, Zielgruppen-Einstiege Gastro/Hausverwaltung, Differenzierung/App-Teaser, Referenzen, Kontakt/Angebotsformular)
- Kontakt-/Angebotsformular-Umfang

**Arbeitsweise:** Schrittweise vorgehen, visuelle Optionen in HTML zeigen, bevor entschieden wird. Vergleichende Darstellung bevorzugt.
