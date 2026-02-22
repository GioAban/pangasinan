import { Fragment } from "react";
import HomeHero from "./hero";
import Container from "./components/molecules/container";
import { getDbData } from "@/lib/data-fetcher";
import HomeHeritage from "./components/organisms/HeritageShowcase";
export default async function Home() {
  const data = await getDbData();
  return (
    <Fragment>
      <HomeHero />
      <Container>
        <HomeHeritage spots={data.spots} />
      </Container>
    </Fragment>
  );
}
