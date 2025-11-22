import PublicLayout from "../../components/layout/PublicLayout";
import Hero from "./Hero";
import Services from "./Services";
import Departments from "./Departments";
import CTASection from "./CTASection";
import Contact from "./Contact";
import { useState } from "react";

interface HomePageProps {
  onLogin?: () => void;
  onRegister?: () => void;
}

export default function Home({ onLogin, onRegister }: HomePageProps) {
  const [activeDepartment, setActiveDepartment] = useState("pediatria");

  return (
    <PublicLayout onLogin={onLogin} onRegister={onRegister}>
      <Hero />
      <Services />
      <Departments
        activeDepartment={activeDepartment}
        setActiveDepartment={setActiveDepartment}
      />
      <CTASection onLogin={onLogin} onRegister={onRegister} />
      <Contact />
    </PublicLayout>
  );
}
