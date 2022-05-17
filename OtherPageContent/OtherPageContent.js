import BookNow from "./BookNow";
import RatingsSlider from "./RatingsSlider";
import NewHowitWorks from "./NewHowitWorks";
import PhoneMockupThree from "./PhoneMockupThree";
import PhoneMockupOne from "./PhoneMockupOne";
import PhoneMockupTwo from "./PhoneMockupTwo";
import { Fade } from "react-reveal";
import PopularLocationCategories from "./PopularLocationsCategories";


const OtherPageContent = () => {
    return (
        <div>
            <NewHowitWorks />
            <PhoneMockupTwo />
            <PhoneMockupOne />
            <PhoneMockupThree />
            <PopularLocationCategories />
            <BookNow />
            <RatingsSlider />
        </div>
    );
}

export default OtherPageContent;