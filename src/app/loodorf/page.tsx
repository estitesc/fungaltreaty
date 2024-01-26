import Link from "next/link";
import Figmint from "../c/figmint";

export default function Remembrant() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/">
          <Figmint>dance they dunce</Figmint>
        </Link>
      </div>
      <div className="font-mono z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4">
        there is no savage device worth witnessing
        <br />
        in the demon halls of perfect
        <br />
        human intellect. <br />
        <br />
        what there is, sprig cherubim, <br />
        untold repermeant flotsam, a universe of oxidized
        <br />
        outdated computer chips dusted apart motherboards.
        <br />
        what there is, perfect dandelion,
        <br />
        tunnels of moles U can never eye-spy, wrinkles <br />
        belying windstorms in the mud rub where the water <br />
        basin used to be. <br />
        what there is, electric dustmite, <br />
        echelons of forgotten champions in the forever-sealed <br />
        victory halls of intered kingdoms, lips that penetrate <br />
        the mists in metroplitan alleys, questing <br />
        for an encounter. <br />
      </div>
      <div className="font-mono z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4">
        <audio controls>
          {/* <source src="horse.ogg" type="audio/ogg" /> */}
          <source src="dance_dunce.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </main>
  );
}
