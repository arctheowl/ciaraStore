import FAQ from "~/components/FAQ";
import "~/styles/globals.css";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center py-24">
      <div className=" w-1/2 text-center">
        <h1 className=" pb-10 text-xl font-semibold">About Us</h1>
        <p>
          It all started when I decided to make a busy board for my friend's
          little girl's first birthday. I have always enjoyed making unique and
          special gifts for friends and family, but this was on another level. I
          had no idea where to start when it came to making a busy board,
          nevertheless I carried on. Peter (my husband) said that he could do a
          better job. And as much as I hate admitting it... HE DID! It then move
          to the next level where Peter thought maybe other people might be
          interested in our boards. <br />
          <br />
          And so CraftsAndBusyGifts was born in 2020! Together with my
          creativity, designing and Peter craftsmanship we make a pretty good
          team. Now alongside our day jobs we work hard to offer a range of busy
          boards. Our two children have also embraced this crazy journey that we
          are on and occasionally help out. The support we have received so far
          has been unimaginable and we can't thank you enough for your support
          and encouragement. We love our family business 💚
        </p>
        <FAQ />
      </div>
    </div>
  );
};

export default page;
