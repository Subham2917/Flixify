import React, {useState} from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";


const Popular = () => {

    const[endpoimt, setEndpoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoimt}/popular`);


    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's Popular</span>
            <SwitchTabs data ={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}
        endpoimt= {endpoimt} />
    </div>
};




export default Popular;