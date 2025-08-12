import Image from 'next/image';
import testing from "@/assets/image/testing.jpg";
import { Card } from "@/components/ui/card";
const CardsProjects = () => {
  return (
    <Card className="relative w-md h-[30rem] rounded-lg shadow-2xl overflow-hidden">
      <Image
        src={testing}
        alt="Biological Age"
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 p-4 sm:p-6 rounded-lg">
        <div className="flex flex-col justify-between h-full">
          <div className="text-2xl font-bold text-white">
            Lorem, ipsum dolor.
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold text-white">
              Lorem, ipsum dolor.
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              atque!
            </p>
            <div className="flex items-center justify-between">
              <div className="">View On Github</div>
              <div className="">Live Preview</div>
            </div>
          </div>
          {/* icon or CTA  */}
        </div>
      </div>
    </Card>
  );
}

export default CardsProjects