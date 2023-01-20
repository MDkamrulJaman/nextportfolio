import styles from "../styles/Home.module.css";
import Title from "../components/Title";

import ContactSection from "../components/ContactSection";
import HeroImage from "../components/HeroImage";
import MeSection from "../components/MeSection";
import ExperienceSection from "../components/ExprienceSection";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <HeroImage />

      <MeSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
