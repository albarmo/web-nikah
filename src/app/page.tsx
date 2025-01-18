import ExpInteractiveHero from "./shared/ui/contents/experimantal/interactive.hero";
interface I_PageProps {
  searchParams: { to: string }
}
export default function Home(props: I_PageProps) {
  const guestName = props?.searchParams?.to ?? 'Tamu'

  return (
    <div className="w-screen max-w-sm h-screen overflow-y-hidden flex justify-center items-center">
      <ExpInteractiveHero guestName={guestName} />
    </div>
  )
}
