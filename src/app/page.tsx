import Button from "@/components/Button/Button";
import { TButton } from "@/types/const";
import CreateAccount from "@/components/Heading/CreateAccount";
import Input from "@/components/Input/Input";
import bgImage from "../../public/img/Log in.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-16 mt-12 relative">
        <div className="text-Text text-2xl font-bold my-8">TweetX</div>
        <Button text="Login" type={TButton.Normal} />

        <div className="mt-16 mb-8">
          <CreateAccount />
        </div>
        <div className="flex flex-col space-y-8 w-96">
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />
          <div className="flex justify-end">
            <Button text="Sign up" type={TButton.Classic} />
          </div>
        </div>
      </div>
      <Image
        className="absolute hidden xl:block right-0 -bottom-0"
        width={800}
        src={bgImage}
        alt="bgimage"
      />
    </main>
  );
}
