import Layout from "../components/Layout";
import SliderTwo from "../components/SliderTwo";
// import GiveArea from "../components/GiveArea";
import CallToAction from "../components/CallToAction";
import CallToActionThree from "../components/CallToActionThree";
import CausesArea from "../components/CausesArea";
import ClientsLogo from "../components/ClientsLogo";
import EventsHome from "../components/EventsHome";
import GalleryCarousel from "../components/GalleryCarousel";
import HelpingArea from "../components/HelpingArea";
import MakeWorldArea from "../components/MakeWorldArea";
import Map from "../components/Map";
import MixerAreaThree from "../components/MixerAreaThree";
import ServiceArea from "../components/ServiceArea";
import TeamArea from "../components/TeamArea";
import VolunteerArea from "../components/VolunteerArea";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="Home">
            <SliderTwo />
            {/* <GiveArea /> */}
            <ServiceArea />
            <MakeWorldArea />
            <ClientsLogo />
            
            <MixerAreaThree />
            <CausesArea />
            <HelpingArea />
            <TeamArea />
            <CallToAction />

            <GalleryCarousel />
            <EventsHome />
            <VolunteerArea />
            <Map />
            <CallToActionThree />
        </Layout>
    );
};

export default HomePageTwo;
