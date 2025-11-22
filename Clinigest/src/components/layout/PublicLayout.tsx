import Header from "./Header";
import Footer from "./Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
  onLogin?: () => void;
  onRegister?: () => void;
}

export default function PublicLayout({
  children,
  onLogin,
  onRegister,
}: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLogin={onLogin} onRegister={onRegister} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
