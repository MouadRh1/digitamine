export default function SelectionNoteSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Texte gauche */}
          <div className="lg:col-span-4">
            <p className="text-[14px] md:text-[15px] font-medium text-[#0a0a0a]">
              Une sélection, pas un catalogue.
            </p>
          </div>

          {/* Texte droite */}
          <div className="lg:col-span-8">
            <p className="text-[13px] md:text-[14px] leading-relaxed text-[#0a0a0a]/70">
              Nous ajoutons progressivement les projets pour lesquels nous pouvons expliquer le contexte et
              notre intervention avec justesse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}