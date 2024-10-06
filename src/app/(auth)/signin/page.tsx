import { SigninForm } from "@/_components/auth/signin-form";
import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="max-w-lg mx-auto mt-12 py-6 px-6 rounded-md">
      <div className="flex items-center flex-col">
        <h1 className="font_Marcellus-logo flex gap-2 items-center text-[3rem] text-gray-300 ">
          <CodeXml size={50} />
          <strong className="text-cyan-600 font-semibold">iberdi</strong> seven
        </h1>
        <h2 className="mt-10 text-lg ">Entre na sua conta</h2>
      </div>
      <div className="mt-10 mb-10 flex flex-col gap-3 text-slate-400">
        <SigninForm />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:flex-row text-lg">
        <div className="">Ainda não tem uma conta?</div>
        <Link className=" hover:text-cyan-700" href="/signup">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}
