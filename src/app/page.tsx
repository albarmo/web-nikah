import ExpInteractiveHero from "./shared/ui/contents/experimantal/interactive.hero";
interface I_PageProps {
  searchParams: Promise<{ to: string }>
}
export default async function Home(props: I_PageProps) {
  const guestName = (await props?.searchParams)?.to ?? 'Tamu'

  return (
    <div className="w-screen h-screen overflow-y-hidden flex justify-center items-center">
      <ExpInteractiveHero guestName={guestName} />
    </div>
  )
}
