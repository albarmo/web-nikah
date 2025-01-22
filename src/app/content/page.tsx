import Hero from "../shared/ui/contents/hero";
import Footer from "../shared/ui/navigation/footer";
import Container from "../shared/ui/layout/container";
import Quote from "../shared/ui/contents/quote";
import Couple from "../shared/ui/contents/couple";
import LoveStory from "../shared/ui/contents/love.storie";
import Event from "../shared/ui/contents/event";
import Galery from "../shared/ui/contents/galery";
import Gift from "../shared/ui/contents/gift";
import Outro from "../shared/ui/contents/outro";

interface I_PageProps {
  searchParams: Promise<{ to: string }>
}

export default async function Home(props: I_PageProps) {
  const guestName = (await props?.searchParams)?.to ?? 'Tamu Undangan'
  return (
    <main className="w-full overflow-hidden bg-[#EEF3F1]">
      <Hero guestName={guestName} />
      <Container>
        <Quote />
        <Couple />
        <LoveStory />
        <Event />
        <Galery />
        <Gift />
        <Outro />
      </Container>
      <Footer />
    </main>
  );
}
