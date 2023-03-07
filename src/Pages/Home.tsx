import { StatsWithLines, StatsWithRightIcon } from "@components/Stats";

import { Blog } from "@components/Blog";
import { CTA } from '@/components/CTA';
import { DarkWithTestimonial } from '@/components/Features';
import { Footer } from "@components/Footer";
import { Hero } from "@/components/Hero";
import { Tabs } from "@components/TabsWithIcon";
import { Team } from "@components/Team";
import Testimonial from '@components/Testimonial';
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
            <DarkWithTestimonial />
            <CTA />
            <Testimonial />
            <Footer />
        </>
    );
};

