import Link from "next/link";
import Figmint from "./c/figmint";

export default function Purger() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Figmint>Glittering, Gleaming Gahoosafootz</Figmint>
        <Figmint>Perry Wernkle</Figmint>
        <Figmint>Moontcake Tooseberry</Figmint>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Figmint>Chugginsbee</Figmint>
        <Link href="remembrant">
          <Figmint>Remembrant</Figmint>
        </Link>
        <Figmint>Terrible Tollerhorner</Figmint>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Figmint>Weathering the Wombleschkootznick</Figmint>
        <Figmint>Tentoocle Oodle</Figmint>
        <Link href="loodorf">
          <Figmint>Loodorf</Figmint>
        </Link>
      </div>
    </main>
  );
}
