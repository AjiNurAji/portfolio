import Image from "next/image";
import me from "./assets/me.jpg";

const Page = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container h-full w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="rounded-full w-44 h-44 overflow-hidden">
            <Image
              src={me}
              alt="Aji Nur Aji"
              className="w-full h-auto object-center"
            />
          </div>
          <p className="text-center text-transparent bg-text-gradient bg-clip-text font-medium">
            Hi, I'm Aji Nur Aji
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-bold">Web Development</h1>
        </div>
      </div>
    </section>
  );
};

export default Page;
