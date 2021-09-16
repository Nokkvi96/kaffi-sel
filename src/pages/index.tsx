import type { NextPage } from "next";

import { Header, Footer } from "@components";
import { Section } from "@modules/home";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Section
          heading="Kaffi Sel"
          paragraph="Ut egestas bibendum elementum. Proin tellus nibh, ultrices in scelerisque in, fermentum vitae neque. Proin sed dolor imperdiet, tempor magna sed, fringilla magna. "
          // img="/@public/plant.svg"
        />
        <Section
          heading="Við erum að tala um kaffi!"
          paragraph="Quisque pellentesque arcu dictum enim porta aliquam. Vestibulum tincidunt urna semper nisi fringilla, vitae mollis felis pharetra."
          bgColor="background"
          textColor="black"
          direction="row-reverse"
          // img="/@public/plant.svg"
        />
        <Section
          heading="Við erum að tala um meððí!"
          paragraph="Pellentesque auctor sem a tellus consectetur consectetur. Donec eu pharetra eros. Suspendisse efficitur, dolor ac iaculis fringilla, arcu purus suscipit ante, nec hendrerit sem felis sit amet nibh. Pellentesque quis risus porttitor, aliquam purus nec, fringilla purus."
          bgColor="primary"

          // img="/@public/plant.svg"
        />
        <Footer />
      </main>
    </>
  );
};

export default Home;
