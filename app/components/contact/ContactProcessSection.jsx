"use client";

import { useState } from "react";

// ─── Étapes du processus (aside gauche) ───
const etapes = [
  { num: "01", title: "Lecture", desc: "Nous prenons connaissance de votre contexte." },
  { num: "02", title: "Cadrage", desc: "Nous identifions les besoins et les priorités." },
  { num: "03", title: "Échange", desc: "Nous organisons une discussion avec les bonnes questions." },
  { num: "04", title: "Proposition", desc: "Si nous pouvons vous aider, nous présentons une réponse claire." },
];

// ─── Options de la checkbox "De quoi avez-vous besoin ?" ───
const besoins = [
  "Stratégie digitale",
  "SMMA & contenu",
  "Site web / landing page",
  "Meta Ads",
  "Production audiovisuelle",
  "Couverture événementielle",
];

export default function ContactProcessSection() {
  const [selected, setSelected] = useState([]);

  const toggleBesoin = (besoin) => {
    setSelected((prev) =>
      prev.includes(besoin) ? prev.filter((b) => b !== besoin) : [...prev, besoin]
    );
  };

  return (
    <section className="relative bg-[#050505] border-t border-[rgba(201,162,39,0.08)] overflow-hidden">
      {/* ═══════════════════════════════════════════
          DÉCORATIONS DE FOND
          ═══════════════════════════════════════════ */}

      {/* Halo doré diffus à droite */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.06] hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Trait doré décoratif haut-gauche */}
      <div className="absolute top-12 left-6 md:top-16 md:left-10 w-16 h-[1px] bg-[#C9A227]/40 pointer-events-none" />
      <div className="absolute top-12 left-6 md:top-16 md:left-10 w-[1px] h-16 bg-[#C9A227]/40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* ════════════════════════════════════════════
              ASIDE GAUCHE — sticky pendant le scroll
              ════════════════════════════════════════════ */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-[100px]">
              {/* Label supérieur */}
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="w-10 h-[1px] bg-[#C9A227]" />
                <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]">
                  Ce qui se passe ensuite
                </span>
              </div>

              {/* Titre aside */}
              <h2
                className="font-display tracking-[-0.02em] text-white mb-8 md:mb-10"
                style={{
                  fontSize: "clamp(24px, 2.4vw, 36px)",
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                Un processus
                <br />
                <span className="text-[#C9A227]">simple et transparent.</span>
              </h2>

              {/* Liste des étapes */}
              <div className="border-t border-[rgba(201,162,39,0.15)]">
                {etapes.map((etape) => (
                  <div
                    key={etape.num}
                    className="group grid grid-cols-12 gap-4 py-5 md:py-6 border-b border-[rgba(201,162,39,0.15)] transition-colors duration-300 hover:bg-[rgba(201,162,39,0.02)]"
                  >
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-display text-[11px] md:text-[12px] tracking-widest text-[#C9A227] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.6)]">
                        {etape.num}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <h3
                        className="font-display tracking-tight text-white mb-2 transition-colors duration-300 group-hover:text-[#C9A227]"
                        style={{
                          fontSize: "clamp(15px, 1.2vw, 18px)",
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        {etape.title}
                      </h3>
                      <p className="text-[12px] md:text-[13px] leading-relaxed text-[#A0A0A0]">
                        {etape.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bloc encadré doré — style cohérent charte */}
              <div className="mt-8 md:mt-10 relative">
                {/* Coins décoratifs */}
                <span className="absolute top-0 left-0 w-4 h-[1px] bg-[#C9A227]/70" />
                <span className="absolute top-0 left-0 w-[1px] h-4 bg-[#C9A227]/70" />
                <span className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#C9A227]/70" />
                <span className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#C9A227]/70" />

                <div className="border-l-2 border-[#C9A227] bg-[rgba(201,162,39,0.04)] p-5 md:p-6">
                  <p className="font-display text-[13px] md:text-[14px] font-medium text-white mb-2">
                    Un premier échange simple et concret.
                  </p>
                  <p className="text-[12px] md:text-[13px] leading-relaxed text-[#A0A0A0]">
                    L&apos;objectif n&apos;est pas de vous vendre tous nos services, mais
                    de comprendre lesquels ont du sens pour votre entreprise.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* ════════════════════════════════════════════
              FORMULAIRE À DROITE
              ════════════════════════════════════════════ */}
          <div className="lg:col-span-8">
            <form className="space-y-16 md:space-y-20">
              {/* ─── Étape 01 : Faisons connaissance ─── */}
              <div>
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-[#C9A227]" />
                    <span className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
                      Étape 01
                    </span>
                  </div>
                  <h2
                    className="font-display tracking-[-0.02em] text-white mb-3"
                    style={{
                      fontSize: "clamp(28px, 3.5vw, 52px)",
                      lineHeight: 1.05,
                      fontWeight: 400,
                    }}
                  >
                    Faisons connaissance
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#A0A0A0]">
                    Les informations essentielles pour pouvoir vous recontacter.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                      Nom et prénom <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                      Entreprise <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nom de l'entreprise"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                      E-mail professionnel <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="vous@entreprise.com"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+212 ..."
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* ─── Étape 02 : De quoi avez-vous besoin ? ─── */}
              <div className="pt-10 md:pt-12 border-t border-[rgba(201,162,39,0.15)]">
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-[#C9A227]" />
                    <span className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
                      Étape 02
                    </span>
                  </div>
                  <h2
                    className="font-display tracking-[-0.02em] text-white mb-3"
                    style={{
                      fontSize: "clamp(28px, 3.5vw, 52px)",
                      lineHeight: 1.05,
                      fontWeight: 400,
                    }}
                  >
                    De quoi avez-vous besoin ?
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#A0A0A0]">
                    Vous pouvez sélectionner plusieurs expertises.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {besoins.map((besoin) => {
                    const isActive = selected.includes(besoin);
                    return (
                      <button
                        key={besoin}
                        type="button"
                        onClick={() => toggleBesoin(besoin)}
                        className={`group relative flex items-center gap-3 text-left px-5 py-4 border transition-all duration-300 overflow-hidden ${
                          isActive
                            ? "bg-[rgba(201,162,39,0.08)] border-[#C9A227] text-white"
                            : "bg-transparent border-[rgba(201,162,39,0.2)] text-white/90 hover:border-[rgba(201,162,39,0.5)] hover:bg-[rgba(201,162,39,0.03)]"
                        }`}
                      >
                        {/* Ligne dorée en bas au hover */}
                        <span
                          className={`absolute bottom-0 left-0 h-[1px] bg-[#C9A227] transition-all duration-500 ease-out ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />

                        <span
                          className={`text-[14px] leading-none font-light transition-transform duration-300 ${
                            isActive
                              ? "text-[#C9A227] rotate-45"
                              : "text-[#C9A227] group-hover:rotate-90"
                          }`}
                        >
                          +
                        </span>
                        <span className="text-[13px] md:text-[14px]">{besoin}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ─── Étape 03 : Parlez-nous du contexte ─── */}
              <div className="pt-10 md:pt-12 border-t border-[rgba(201,162,39,0.15)]">
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-[#C9A227]" />
                    <span className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
                      Étape 03
                    </span>
                  </div>
                  <h2
                    className="font-display tracking-[-0.02em] text-white mb-3"
                    style={{
                      fontSize: "clamp(28px, 3.5vw, 52px)",
                      lineHeight: 1.05,
                      fontWeight: 400,
                    }}
                  >
                    Parlez-nous du contexte
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#A0A0A0]">
                    Pas besoin d&apos;un brief parfait. Expliquez-nous simplement la situation.
                  </p>
                </div>

                {/* Textarea */}
                <div className="mb-8 md:mb-10">
                  <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                    Votre priorité actuelle <span className="text-[#C9A227]">*</span>
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Qu'aimeriez-vous améliorer, lancer ou résoudre ?"
                    className="form-input resize-none"
                    required
                  />
                </div>

                {/* Selects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                      Horizon du projet
                    </label>
                    <select className="form-input">
                      <option>Sélectionner</option>
                      <option>Immédiat (moins d&apos;1 mois)</option>
                      <option>Court terme (1 à 3 mois)</option>
                      <option>Moyen terme (3 à 6 mois)</option>
                      <option>Long terme (+6 mois)</option>
                    </select>
                  </div>
                  {/* <div>
                    <label className="block font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#A0A0A0] mb-3">
                      Budget envisagé
                    </label>
                    <select className="form-input">
                      <option>Sélectionner</option>
                      <option>Moins de 20 000 MAD</option>
                      <option>20 000 - 50 000 MAD</option>
                      <option>50 000 - 100 000 MAD</option>
                      <option>Plus de 100 000 MAD</option>
                    </select>
                  </div> */}
                </div>
              </div>

              {/* ─── Footer du formulaire : texte + submit ─── */}
              <div className="pt-8 md:pt-10 border-t border-[rgba(201,162,39,0.15)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-[12px] md:text-[13px] leading-relaxed text-[#A0A0A0] max-w-[420px]">
                  En envoyant cette demande, vous nous donnez le contexte nécessaire pour
                  préparer un premier échange pertinent.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-[#050505] font-medium px-7 md:px-8 py-4 bg-[#C9A227] hover:bg-[#E6C95C] transition-colors duration-300 whitespace-nowrap"
                >
                  Préparer ma demande
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300"
                  >
                    <path
                      d="M2 12L12 2M12 2H5M12 2V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          STYLES DES INPUTS — cohérents avec la charte
          ═══════════════════════════════════════════ */}
      <style jsx global>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(201, 162, 39, 0.25);
          padding: 12px 0;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.3s ease;
          outline: none;
        }

        .form-input::placeholder {
          color: rgba(160, 160, 160, 0.5);
        }

        .form-input:focus {
          border-bottom-color: #c9a227;
        }

        .form-input:hover:not(:focus) {
          border-bottom-color: rgba(201, 162, 39, 0.5);
        }

        /* Select — flèche personnalisée */
        select.form-input {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23C9A227' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 4px center;
          padding-right: 24px;
          appearance: none;
          -webkit-appearance: none;
        }

        select.form-input option {
          background: #0a0a0a;
          color: #ffffff;
          padding: 8px;
        }

        /* Textarea */
        textarea.form-input {
          font-family: inherit;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}