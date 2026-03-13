<script setup>
import ExhibitCard from './components/exhibitCard.vue';
</script>

<template>
  <section class="underConstruction">
    <p>🚧 UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧</p>
  </section>

  <div class="pageLayout">
    <aside class="sidebar">
      <h2>Navigace:</h2>
      <nav>
        <a href="#">Domovská stránka</a>
        <a href="#mouse">Myš</a>
        <a href="#monitor">Monitor</a>
        <a href="#floppy">Disketa</a>
      </nav>

      <div class="counterBox">
        <p>Návštěvníků:</p>
        <div class="counter">001337</div>
      </div>

      <div class="badge">
        <p>🏆 Best viewed with</p>
        <strong>Netscape Navigator</strong>
      </div>
    </aside>

    <main>
      <article class="welcome">
        <p>🌐 Internet v 90. letech 🌐</p>
      </article>
      <article class="info">
        <p>Devadesátá léta byla zlomovým obdobím pro technologie. Osobní počítače se začaly objevovat v domácnostech, internet začal propojovat lidi po celém světě a mnoho zařízení, která používáme dodnes, začalo získávat svou podobu. Technologie byly sice pomalejší a méně výkonné než dnes, ale přinesly revoluční možnosti – e-mail, prohlížení webu a digitální komunikaci. <br><br> Tato expozice vás zavede do doby, kdy se internet teprve rozvíjel. Objevte zařízení a technologie, které formovaly digitální svět 90. let.</p>
      </article>
      <article class="exhibition">
        <h1>Exponáty</h1>
        <section>
          <ExhibitCard id="mouse"
            title="Počítačová myš"
            image="mouse"
            description="Počítačová myš z 90. let byla základním nástrojem pro interakci s počítačem. V té době byly myši často vybaveny kuličkou, která se otáčela při pohybu a přenášela informace o pohybu na počítač. Tyto myši měly obvykle dva nebo tři tlačítka a někdy i kolečko pro posouvání. Byly nezbytné pro navigaci v grafickém uživatelském rozhraní a umožňovaly uživatelům snadno ovládat své počítače."
          />
          <ExhibitCard id="monitor"
            title="Monitor"
            image="monitor"
            description="Počítačové monitory v 90. letech byly velké a těžké CRT obrazovky (katodové trubice). Vypadaly podobně jako staré televizory a mohly vážit i více než 15 kilogramů. Měly nižší rozlišení než dnešní obrazovky a někdy lehce blikaly. Přesto umožňovaly zobrazovat barevná grafická rozhraní, hry a první webové stránky."
          />
          <ExhibitCard id="floppy"
            title="Disketa"
            image="disketa"
            description="Disketa (nejčastěji 3,5palcová) byla v 90. letech běžným médiem pro ukládání a přenos dat. Měla kapacitu 1,44 MB, takže se na ni vešly dokumenty, menší programy nebo uložené pozice ve hrách. Používala se také pro instalaci software a přenos souborů mezi počítači. Přestože byla praktická, byla citlivá na poškození a magnetické pole."
          />
        </section>
      </article>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&display=swap');

.sidebar a:hover {
    color: rgb(255, 255, 89);
}

.welcome p {
  animation: blinkColor 1s steps(1, end) infinite;
}

@keyframes blinkColor {
  0%,
  49.999% {
    color: black;
  }
  50%,
  100% {
    color: #001dff;
    font-weight: 400; /* change to any color you want */
  }
}

.pageLayout {
  background-image: url(/web90-bg.jpg);
  background-size: 300px;
  background-repeat: repeat;
  cursor: url(/cursor90.jpg), auto;
  font-family: 'Bitcount Single', monospace;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1rem;
  padding: 1rem;
  align-items: start;
}

.sidebar {
  background: #d9d9d9;
  border: 2px solid black;
  padding: 1rem;
  min-height: 80vh;
}

.sidebar h2 {
  margin: 0 0 0.75rem 0;
  color: #111;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 2px solid #777;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.sidebar a {
  color: #001dff;
  text-decoration: underline;
}

.counterBox {
  border-bottom: 2px solid #777;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.counter {
  background: #000;
  color: #00ff66;
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
  padding: 0.4rem;
  border: 2px inset #222;
}

.badge {
  font-size: 0.95rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.underConstruction {
  background-color: hsl(50 100% 50% / var(--tw-bg-opacity, 1));
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
}

.welcome {
  background-color: white;
  padding: 0.5rem;
  min-width: 50%;
  border: 2px solid black;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
}

.info {
  background-color: white;
  padding: 0.5rem;
  border: 2px solid black;
  width: 80%;
}

.exhibition {
  background-color: white;
  border: 2px solid black;
  width: 80%;

  h1 {
    padding: 0.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 900px) {
  .pageLayout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    min-height: auto;
  }
}
</style>