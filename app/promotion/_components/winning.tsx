import Image from "next/image";
export default function BigWinning() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:my-4">
        <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:my-4 md:flex-row md:text-xl lg:text-2xl">
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          <span className="text-center md:whitespace-nowrap md:px-2">
            The Thrills of Big Winning with Panalobet Promotions
          </span>
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
        </h2>
        <div className="text-justify md:text-left">
          <p className="mb-2 md:mb-4">
            Promotions are essentially about giving our players chances to win
            large prizes. Whether you are a seasoned player or just starting on
            our platform, they are meant to provide you that extra edge. Every
            promotion is an invitation to start fresh experiences, play many
            games, and—most importantly—gain incredible prizes. Some of our most
            interesting and lucrative specials right now at Panalobet are broken
            out below.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-6">
          <div className="md:w-full md:pb-2">
            <div className="md:mx-auto md:w-[750px] md:h-[240px]">
              <Image
                src="/img/banner/promotion/VIP Bonus Aimed at P1,000,000 Reward for Loyalty 750x430.webp"
                alt="Banner 1"
                width={750}
                height={240}
              />
            </div>
            <div className="md:py-4 md:text-center">
              <h3 className="text-md uppercase md:font-[800] md:text-xl">
                1. Daily Awards: Your Daily Excite Dose
              </h3>
              <p className="md:mt-4">
                Every day at Panalobet presents a chance for big wins. We thus
                provide Daily Rewards, a great opportunity for you to win
                amazing rewards just by checking into your account. Every daily
                interaction with the site will unlock a range of benefits from
                free spins, bonus cash, to exclusive incentives. There is a
                fresh chance to win every day!
              </p>
            </div>
          </div>
          <div className="md:w-full md:pb-2">
            <div className="md:mx-auto md:w-[750px] md:h-[240px]">
              <Image
                src="/img/banner/promotion/WEEKLY CHALLENGE_PROMOTION.webp"
                alt="Banner 1"
                width={750}
                height={240}
              />
            </div>
            <div className="md:py-4 md:text-center">
              <h3 className="text-md uppercase md:font-[800] md:text-xl">
                2. Weekly Challenge: Test Your Knowledge and Get Paid Big
              </h3>
              <p className="md:mt-4">
                Our Weekly Challenge campaign is the ideal fit for everyone who
                enjoys challenges. Every week we present a fresh task that
                challenges your abilities and pays fantastic prizes for your
                successes. The Weekly Challenge keeps things interesting and
                gratifying whether your needs are for a set of particular
                chores, game playing, or point accumulation. Follow our website
                and social media pages to keep informed and seize the most
                recent challenges!
              </p>
            </div>
          </div>
          <div className="md:w-full md:pb-2">
            <div className="md:mx-auto md:w-[750px] md:h-[240px]">
              <Image
                src="/img/banner/promotion/DAILY AWARD 750X240.webp"
                alt="Banner 1"
                width={750}
                height={240}
              />
            </div>
            <div className="md:py-4 md:text-center">
              <h3 className="text-md uppercase md:font-[800] md:text-xl">
                3. VIP Bonus Aimed at P1,000,000: Reward for Loyalty
              </h3>
              <p className="md:mt-4">
                Our devoted gamers are very important at Panalobet. Our VIP
                Bonus is meant to honor users who interact with our system
                constantly. Yes, you did read correctly—as a VIP member you can
                earn up to P1,000,000 in bonus cash. Your chances to get chosen
                for this exclusive offer increase with your increasing play. We
                would like to express gratitude to those who regularly use
                Panalobet as their gambling platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
