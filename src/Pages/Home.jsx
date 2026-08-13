import Banner from "../Components/Home/Banner";
import FeaturedProperties from "../Components/Home/FeaturedProperties/FeaturedProperties";
import GuestReviews from "../Components/Home/GuestReviews/GuestReviews";
import PopularDestinations from "../Components/Home/PopularDestinations/PopularDestinations";
import Footer from "../Components/Layout/Fooetr";

import Navbar from "../Components/Layout/Navbar";

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Banner />
            {/* <PopularDestinations /> */}
            <FeaturedProperties />
            <GuestReviews />
            {/* <Footer /> */}
        </>
    );
}
export default Home
