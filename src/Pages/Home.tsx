import { StatsWithLines, StatsWithRightIcon } from "@components/Stats";

import { Blog } from "@components/Blog";
import { Footer } from "@components/Footer";
import Hero from "@components/Hero";
import { Tabs } from "@components/TabsWithIcon";
import { Team } from "@components/Team";
import { TwoByTwoGrid } from "@components/TwoByTwoGrid";

export default () => {
    return (
        <>
            <Hero />
            <StatsWithRightIcon />
            <StatsWithLines />
            <Blog />
            <Tabs />
            <TwoByTwoGrid />
            <Team />
            <Footer />
        </>
    );
};

