// Անիմացիոն մասնիկների (particles) համար tsparticles գրադարանի իմպորտը
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticleBackground: React.FC = () => {
  // State փոփոխական, որը պահում է՝ մասնիկների շարժիչը
  const [init, setInit] = useState(false);

  // useEffect-ը կատարում է մասնիկների engine-ի նախնականացում (միայն մեկ անգամ)
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine); // Բեռնում է light-քաշով մասնիկների engine-ը
    }).then(() => {
      setInit(true); // Երբ engine-ը բեռնվում է, սահմանում ենք init-ը true
    });
  }, []);

  // Callback ֆունկցիա, որը գործարկվում է, երբ մասնիկների container-ը բեռնվում է
  const particlesLoaded = (container: Container) => {
    console.log(container); // Տպում է container-ի օբյեկտը կոնսոլում (Debugging-ի համար)
  };

  // Մասնիկների համար կոնֆիգուրացիոն օբյեկտը
  const options = {
    fullScreen: false, // Չի զբաղեցնում ամբողջ էկրանը
    fpsLimit: 200, // Ֆրեյմերի առավելագույն սահմանափակում (FPS)
    interactivity: {
      events: {
        onClick: {
          enable: true, // Երբ սեղմում ենք, մասնիկներ են ավելացվում
          mode: "push",
        },
        onHover: {
          enable: true, // Երբ մկնիկը մոտենում է մասնիկներին, դրանք հետ են մղվում
          mode: "repulse",
        },
        resize: true, // Քարտեզը հարմարվում է չափերի փոփոխություններին
      },
      modes: {
        push: {
          quantity: 4, // Մկնիկի սեղմումով ավելացվող մասնիկների քանակը
        },
        repulse: {
          distance: 100, // Մկնիկի մոտենալիս մասնիկները հետ են մղվում 100px
          duration: 0.4, // Էֆեկտի տևողությունը
        },
      },
    },
    particles: {
      height: "100px", // Մասնիկների տարածքի բարձրությունը
      color: {
        value: "#ffffff", // Մասնիկների գույնը՝ սպիտակ
      },
      links: {
        color: "#ffffff", // Մասնիկների միջև գծերի գույնը
        distance: 150, // Մասնիկների միջև առավելագույն հեռավորությունը կապ ստեղծելու համար
        enable: true, // Միացնում է մասնիկների կապերը
        opacity: 0.5, // Կապի անթափանցիկությունը
        width: 1, // Գծի հաստությունը
      },
      move: {
        direction: "none", // Չկա որոշակի ուղղություն
        enable: true, // Մասնիկների շարժման միացում
        outModes: {
          default: "bounce", // Երբ մասնիկը դուրս է գալիս սահմաններից, այն ետ է նետվում
        },
        random: false, // Չի շարժվում պատահական ուղղություններով
        speed: 6, // Մասնիկների շարժման արագությունը
        straight: false, // Չեն շարժվում ուղիղ գծով
      },
      number: {
        density: {
          enable: true, // Թույլ է տալիս մասնիկների խտության կառավարումը
          area: 800, // Տարածքի չափը, որտեղ մասնիկները տեղակայված են
        },
        value: 80, // Մասնիկների ընդհանուր քանակը
      },
      opacity: {
        value: 0.8, // Մասնիկների անթափանցիկությունը
      },
      shape: {
        type: "circle", // Մասնիկների ձևը՝ շրջան
      },
      size: {
        value: { min: 1, max: 5 }, // Մասնիկների չափերի միջակայքը (պատահական)
      },
    },
    detectRetina: true, // Կատարելագործված գրաֆիկա՝ Retina էկրանների համար
  };

  // Եթե engine-ը դեռ չի բեռնվել, ոչինչ չի վերադարձնում
  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} // Մասնիկների կարգավորումները
      />
    )
  );
};

export default ParticleBackground;
