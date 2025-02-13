import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import styles from "../../style/Header.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface HeaderProps {
  title: string;
  img: string;
  ref: string;
}

const Header: React.FC<HeaderProps> = ({ title, img, ref }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: Container) => {
    console.log(container);
  };

  const options = {
    fullScreen: false,
    fpsLimit: 200,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      height: "100px",
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      className={styles.header}
      style={{
        background: `url(${img})`,
        position: "relative",
      }}
    >
      {/* Add particles only inside the header */}
      <div
        style={{ height: "150px", width: "100%", position: "relative" }}
        className={styles.particlesWrapper}
      >
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        )}
      </div>

      <h2 className="mt-20 absolute">{title}</h2>
      <div
        className={`flex-col items-center mt-25 absolute justify-center lg:flex-row ${styles.list}`}
      >
        <ul className="flex gap-10 justify-center mt-5">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to={`/${ref}`}>{title}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
