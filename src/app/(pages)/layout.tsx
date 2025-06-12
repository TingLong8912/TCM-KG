import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import bg from '@/assets/BG.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      width: '100%',
    }}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
