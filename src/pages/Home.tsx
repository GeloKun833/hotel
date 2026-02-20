import Hero from "../components/Hero";
import CommunityCards from "../components/CommunityCards";
import Lifestyle from "../components/Lifestyle";
import MeetTheAgents from "../components/MeetTheAgents";
import InvestmentValue from "../components/InvestmentValue";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunityCards />
      <Lifestyle />
      <MeetTheAgents />
      <InvestmentValue />
      <CallToAction />
    </>
  );
}
