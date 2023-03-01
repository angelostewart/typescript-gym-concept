import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedbull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          {/* Actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
                
            </AnchorLink>
          </div>

        </div>
        {/* Image */}
        <div>
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>

    {/* Sponsors */}
    {isAboveMediumScreens && (
        <div>
            <div>
                <img src={SponsorRedbull} alt=""redbull-sponsor />
                <img src={SponsorForbes} alt=""forbes-sponsor />
                <img src={SponsorFortune} alt=""fortune-sponsor />
            </div>
        </div>

    )}

    </section>
  );
};

export default Home;
