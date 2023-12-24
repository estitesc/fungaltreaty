import Link from "next/link";
import Figmint from "../c/figmint";

export default function Remembrant() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="purger">
          <Figmint>Longstonkle</Figmint>
        </Link>
      </div>
      <div className="font-mono z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4">
        yewlogy candy wit <br />
        rumpstein bolder romise. <br />
        grayb brigand, <br />
        olderweister, grum misler <br />
        cherwinister. olikumpfrigart <br />
        borslatch mallody perperwert <br />
        verloompskint <br />
        murchelever dim wittaker <br />
        fount em groopin <br />
        woolergin on the aismly truf <br />
        wraooplin and ferlachin <br />
        scroimiggin and boolappin... <br />
        we were n't one for the perchifflin <br />
        art oont ee? <br />
      </div>
      <div className="font-mono z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4">
        <audio controls>
          {/* <source src="horse.ogg" type="audio/ogg" /> */}
          <source src="longstonkle.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </main>
  );
}
