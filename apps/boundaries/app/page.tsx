import { ModeToggle, Button } from '@cmdhd/ui'

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Professional Boundaries</h1>
        <ModeToggle />
      </div>
      <article className="space-y-4">
        <p>
          Welcome to the CMDHD interactive training. Use the controls below to explore boundary
          scenarios and reflect on appropriate responses.
        </p>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Scenario</h2>
          <p className="mb-4">
            A client offers you a valuable gift after a visit. How do you respond while maintaining
            professional boundaries?
          </p>
          <div className="flex gap-3">
            <Button>Politely decline</Button>
            <Button className="bg-mnky-primary-700 hover:bg-mnky-primary-800">Explain policy</Button>
            <Button>Accept as appreciation</Button>
          </div>
        </div>
      </article>
    </section>
  )
}
