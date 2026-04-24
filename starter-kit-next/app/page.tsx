import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Kasane } from "@/components/kasane";

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero (Vibrant Kasane) ---------- */}
      <Kasane variant="vibrant" className="min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-bm-container flex-col justify-center px-space-12 py-space-30">
          <Image
            src="/logos/wordmark-white.svg"
            alt="Bridgemaker"
            width={160}
            height={18}
            priority
            className="mb-space-16"
          />
          <p className="mb-space-5 text-bm-eyebrow uppercase text-bm-lavender-on-dark">
            Bridgemaker · Starter Kit
          </p>
          <h1 className="text-display font-display font-semibold tracking-[-1.9px] text-off-white">
            Build the next product.
            <br />
            Brand-aligned, day one.
          </h1>
          <p className="mt-space-6 max-w-[60ch] text-[18px] text-white/75">
            Next.js · TypeScript · Tailwind · shadcn/ui — wired to the Bridgemaker
            design tokens. Replace this page with your product.
          </p>
          <div className="mt-space-10 flex flex-wrap gap-space-3">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="outline">
              View tokens
            </Button>
          </div>
        </div>
      </Kasane>

      {/* ---------- Component showcase on off-white canvas ---------- */}
      <section className="mx-auto max-w-bm-container px-space-12 py-space-30">
        <p className="mb-space-4 text-bm-eyebrow uppercase text-light">
          What ships in this starter
        </p>
        <h2 className="mb-space-6 text-bm-h1 font-display font-semibold tracking-[-1.2px]">
          Brand-aligned primitives.
        </h2>
        <span className="mb-space-12 inline-block h-[3px] w-12 rounded-sm bg-bm-purple" />

        <div className="grid gap-space-4 md:grid-cols-3">
          <Card variant="surface" surface="mauve">
            <CardHeader>
              <Badge variant="purple">01 · Button</Badge>
              <CardTitle>Pill by default</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Three sizes (36 / 44 / 52 px), three variants (primary, outline,
                ghost) — matched to the brandbook button rules.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">
                Outline
              </Button>
              <Button size="sm" variant="ghost">
                Ghost
              </Button>
            </CardFooter>
          </Card>

          <Card variant="surface" surface="sand">
            <CardHeader>
              <Badge variant="berry">02 · Card</Badge>
              <CardTitle>Surfaces included</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Default white, surface tints (stone / mauve / sand / sage), and
                dark — flipping `bm-on-dark` for nested components automatically.
              </CardDescription>
            </CardContent>
          </Card>

          <Card variant="surface" surface="sage">
            <CardHeader>
              <Badge variant="teal">03 · Kasane</Badge>
              <CardTitle>Gradient moments</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Ported to typed React. Dark / vibrant / light variants, one per
                page max. Respects `prefers-reduced-motion`.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* ---------- Dark CTA block ---------- */}
        <Card variant="dark" className="mt-space-20 flex flex-col gap-space-6 p-space-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-space-3 text-bm-eyebrow uppercase text-bm-lavender-on-dark">
              Next step
            </p>
            <h3 className="max-w-[20ch] text-bm-h2 font-display font-semibold tracking-[-0.8px]">
              Clone, rename, ship.
            </h3>
          </div>
          <Button size="lg">Open README</Button>
        </Card>
      </section>
    </>
  );
}
