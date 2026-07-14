"use client";

import { SiteNav } from "@/components/brand/site-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from "@/components/ui/command";
import { ArrowRight, Settings, User, Download } from "lucide-react";

function Block({ title, children, span = false }: { title: string; children: React.ReactNode; span?: boolean }) {
  return (
    <section className={span ? "col-span-full" : ""}>
      <h3 className="text-h3 mb-6">{title}</h3>
      <div className="bg-white border border-[rgba(28,28,30,0.06)] rounded-[20px] p-10 space-y-6">
        {children}
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-6 items-start">
      <div className="text-[12px] uppercase tracking-[0.08em] font-medium text-light pt-2">{label}</div>
      <div className="flex flex-wrap gap-3 items-center">{children}</div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <>
      <SiteNav />

      <section className="max-w-[1200px] mx-auto px-12 pt-20 pb-16">
        <span className="text-eyebrow">Starter Kit</span>
        <h1 className="text-h1 mt-4">Components</h1>
        <p className="mt-6 text-[17px] leading-[1.55] text-mid max-w-[620px]">
          shadcn/ui — vollständig auf Bridgemaker-Tokens gepatcht. Pill-Buttons, 12px-Inputs, Purple
          als Focus-Ring, Kasane als Hero-Background.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto px-12 pb-[120px] space-y-12">

        {/* Buttons */}
        <Block title="Button">
          <Row label="Variants">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Text link</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>
          <Row label="Sizes">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Settings"><Settings /></Button>
          </Row>
          <Row label="With icon">
            <Button>Let&rsquo;s build <ArrowRight /></Button>
            <Button variant="secondary"><Download /> Download</Button>
          </Row>
          <Row label="On dark">
            <div className="bm-on-dark bg-charcoal rounded-[16px] p-6 flex gap-3 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Row>
        </Block>

        {/* Badges */}
        <Block title="Badge">
          <Row label="Tints">
            <Badge>Default</Badge>
            <Badge tint="purple">Purple</Badge>
            <Badge tint="berry">Berry</Badge>
            <Badge tint="teal">Teal</Badge>
            <Badge tint="sage">Sage</Badge>
            <Badge tint="outline">Outline</Badge>
          </Row>
        </Block>

        {/* Cards */}
        <Block title="Card" span>
          <div className="grid md:grid-cols-3 gap-6 not-prose">
            {(["default", "stone", "mauve", "sand"] as const).map((surface) => (
              <Card key={surface} surface={surface}>
                <CardHeader>
                  <Badge tint={surface === "default" ? "purple" : "outline"}>{surface}</Badge>
                  <CardTitle className="mt-4">Venture Title</CardTitle>
                  <CardDescription>
                    Kurzbeschreibung in einem Satz — matter-of-fact, kein Jargon.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link">Mehr erfahren →</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card surface="dark" className="mt-6">
            <CardHeader>
              <CardTitle>Dark Card</CardTitle>
              <CardDescription className="text-soft">
                On-dark context — Text flips automatisch auf off-white.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="primary">Let&rsquo;s go</Button>
              <Button variant="secondary">Mehr erfahren</Button>
            </CardFooter>
          </Card>
        </Block>

        {/* Form */}
        <Block title="Input · Label · Textarea">
          <div className="grid md:grid-cols-2 gap-6 max-w-[640px]">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Dein Name" />
            </div>
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="col-span-full">
              <Label htmlFor="msg">Nachricht</Label>
              <Textarea id="msg" placeholder="Worum geht&rsquo;s?" />
            </div>
          </div>
        </Block>

        {/* Select + Dropdown + Dialog + Sheet */}
        <Block title="Select · Dropdown · Dialog · Sheet" span>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Label>Select</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Team wählen" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="build">Build</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="data">Data</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Dropdown</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary"><User /> Account</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
                  <DropdownMenuItem>name@bridgemaker.com</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div>
              <Label>Dialog</Label>
              <Dialog>
                <DialogTrigger asChild><Button variant="secondary">Open dialog</Button></DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Venture starten</DialogTitle>
                    <DialogDescription>
                      Kurzer Check — wir melden uns binnen 48 Stunden.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="d-name">Name</Label>
                      <Input id="d-name" />
                    </div>
                    <div>
                      <Label htmlFor="d-hypo">Hypothese</Label>
                      <Textarea id="d-hypo" rows={3} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="ghost">Abbrechen</Button>
                    <Button>Senden</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div>
              <Label>Sheet</Label>
              <Sheet>
                <SheetTrigger asChild><Button variant="secondary">Open sheet</Button></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      Side-panel mit Mobile-Navigation oder Einstellungen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Block>

        {/* Tabs + Accordion */}
        <Block title="Tabs · Accordion" span>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Label>Tabs</Label>
              <Tabs defaultValue="build" className="mt-2">
                <TabsList>
                  <TabsTrigger value="build">Build</TabsTrigger>
                  <TabsTrigger value="measure">Measure</TabsTrigger>
                  <TabsTrigger value="learn">Learn</TabsTrigger>
                </TabsList>
                <TabsContent value="build">
                  <p className="text-[15px] text-mid leading-relaxed">
                    Bauen. Unfertig ist akzeptiert — ungetestet nicht.
                  </p>
                </TabsContent>
                <TabsContent value="measure">
                  <p className="text-[15px] text-mid leading-relaxed">
                    Messen. Zahlen statt Vermutungen.
                  </p>
                </TabsContent>
                <TabsContent value="learn">
                  <p className="text-[15px] text-mid leading-relaxed">
                    Lernen. Und wieder bauen.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Label>Accordion</Label>
              <Accordion type="single" collapsible className="mt-2">
                <AccordionItem value="1">
                  <AccordionTrigger>Wie starten wir gemeinsam?</AccordionTrigger>
                  <AccordionContent>
                    Kickoff in 48h, Hypothese in 2 Wochen, erster Prototyp in 6 Wochen.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger>Was kostet ein Venture?</AccordionTrigger>
                  <AccordionContent>
                    Fixes Setup für Validierung. Darüber hinaus outcome-basiert — wir rechnen in
                    Ergebnissen, nicht in Stunden.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger>Wem gehört das Venture?</AccordionTrigger>
                  <AccordionContent>
                    Abhängig vom Modell — Joint Venture, Carve-Out oder Spin-Off.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Block>

        {/* Command */}
        <Block title="Command — CMD+K palette">
          <div className="max-w-[520px] rounded-[16px] border border-[rgba(28,28,30,0.06)] overflow-hidden">
            <Command>
              <CommandInput placeholder="Suchen oder Befehl eingeben…" />
              <CommandList>
                <CommandEmpty>Keine Ergebnisse.</CommandEmpty>
                <CommandGroup heading="Ventures">
                  <CommandItem>Venture starten</CommandItem>
                  <CommandItem>Portfolio ansehen</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Navigation">
                  <CommandItem>Brandbook</CommandItem>
                  <CommandItem>Components</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </Block>

      </div>
    </>
  );
}
