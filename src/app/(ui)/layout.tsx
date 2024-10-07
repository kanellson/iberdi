import { NavItem } from "@/_components/aside-nav/aside-nav-item";
import { Logo } from "@/_components/ui/logo";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutHome({ children }: Props) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
      <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-[1px] border-gray-600 bg-neutral-950">
        <div className="flex-1 mt-6">
          <Logo width={150} height={30} />
          <nav className="mt-11 flex flex-col gap-1">
            <NavItem href="/home" icon={faHouse} label="Página inicial" />
            <NavItem href="/profile" icon={faUser} label="Meu perfil" />
          </nav>
        </div>
        <div>duo</div>
      </section>
      <section className="flex-1 max-w-lg p-4">{children}</section>
      <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-[1px] border-gray-600">
        <div>uno</div>
        <div>duo</div>
        <div>tre</div>
      </aside>
    </main>
  );
}
