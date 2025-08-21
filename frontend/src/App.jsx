import { motion } from "framer-motion";
import { Wrench, ShoppingCart, Search, Package, Truck, ShieldCheck, Menu, Hammer, Drill, Ruler, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast, Toaster } from "sonner";
import { useState } from "react";


// --- Mock Data ---
const CATEGORIES = [
  { key: "power", name: "Power Tools", icon: Drill },
  { key: "hand", name: "Hand Tools", icon: Hammer },
  { key: "measure", name: "Measuring", icon: Ruler },
  { key: "fasteners", name: "Fasteners", icon: Package },
];

const PRODUCTS = [
  {
    id: "p1",
    name: "Cordless Drill 18V Pro",
    price: 7499,
    rating: 4.6,
    category: "power",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1585130401284-1b85b9745c4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "Heavy-Duty Claw Hammer",
    price: 1299,
    rating: 4.8,
    category: "hand",
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1604668915840-580c30026e3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Laser Distance Meter 50m",
    price: 5599,
    rating: 4.5,
    category: "measure",
    badge: "New",
    image: "https://images.unsplash.com/photo-1569429595755-9955c3eb8fba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Assorted Screws Kit (500pcs)",
    price: 1799,
    rating: 4.3,
    category: "fasteners",
    badge: "Value",
    image: "https://images.unsplash.com/photo-1517976487492-576ea68b41f2?q=80&w=1200&auto=format&fit=crop",
  },
];

// --- Utility ---
const formatKES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

export default function App() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = PRODUCTS.filter((p) =>
    (cat === "all" || p.category === cat) &&
    (q.trim() === "" || p.name.toLowerCase().includes(q.toLowerCase()))
  );

  const addToCart = (p) => {
    // Placeholder for real cart context
    toast.success(`${p.name} added to cart!`);

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="container mx-auto px-4 pt-10 pb-8 md:pt-16 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4">Trusted Hardware • Fast Delivery</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Build it right.
                <span className="text-blue-600"> Build it once.</span>
              </h1>
              <p className="mt-4 text-slate-600 text-lg max-w-2xl">
                Premium tools, parts, and fasteners for pros and weekend warriors.
                Same‑day dispatch in Nairobi, next‑day nationwide.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2 bg-white rounded-2xl border p-2 w-full sm:w-96 shadow-sm">
                  <Search className="h-5 w-5 text-slate-500" />
                  <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search drills, hammers, screws…" className="border-0 shadow-none focus-visible:ring-0" />
                </div>
                <Button size="lg" className="rounded-2xl" onClick={() => window.alert("Search coming soon")}>Search</Button>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Same‑day delivery*</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 1‑year warranty</span>
                <span className="flex items-center gap-2"><Wrench className="h-4 w-4" /> Expert support</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1581098365948-6a5a9121cfec?q=80&w=1600&auto=format&fit=crop" alt="Hardware tools" className="h-full w-full object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Over 2,000 items</p>
                  <p className="text-xs text-slate-500">In stock and ready</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shop by category</h2>
          <Button variant="ghost" className="group">View all <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition" /></Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {CATEGORIES.map(({ key, name, icon: Icon }) => (
            <Card key={key} className={`rounded-2xl hover:shadow-md transition ${cat === key ? "ring-2 ring-blue-600" : ""}`}>
              <button onClick={() => setCat(key)} className="w-full text-left">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-slate-500">Top picks</p>
                  </div>
                </CardContent>
              </button>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-2" />

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured products</h2>
          <Tabs defaultValue="all" value={cat} onValueChange={setCat}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              {CATEGORIES.map((c) => (
                <TabsTrigger key={c.key} value={c.key}>{c.name}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {filtered.map((p) => (
            <Card key={p.id} className="group rounded-2xl overflow-hidden hover:shadow-lg transition">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base font-semibold leading-tight">{p.name}</CardTitle>
                  {p.badge && <Badge className="shrink-0">{p.badge}</Badge>}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-slate-600">{p.rating.toFixed(1)}</span>
                </div>
                <p className="mt-3 text-lg font-bold">{formatKES(p.price)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={() => addToCart(p)}>
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          <ValueCard icon={Truck} title="Fast Delivery" desc="Same‑day in Nairobi, next‑day nationwide." />
          <ValueCard icon={ShieldCheck} title="Quality Guaranteed" desc="All tools covered by 1‑year warranty." />
          <ValueCard icon={Wrench} title="Pro Support" desc="Talk to a specialist for the right tool." />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-blue-50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-slate-600 mt-1">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight text-xl">
          <Wrench className="h-5 w-5 text-blue-600" />
          <span>BuildRight Hardware</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-blue-600 transition" href="#">Home</a>
          <a className="hover:text-blue-600 transition" href="#">Products</a>
          <a className="hover:text-blue-600 transition" href="#">Deals</a>
          <a className="hover:text-blue-600 transition" href="#">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="rounded-xl">Sign in</Button>
          <Button className="rounded-xl"><ShoppingCart className="h-4 w-4 mr-2" />Cart</Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden"><Menu className="h-6 w-6" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2"><Wrench className="h-4 w-4 text-blue-600" /> BuildRight</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-2">
              <a className="block py-2" href="#">Home</a>
              <a className="block py-2" href="#">Products</a>
              <a className="block py-2" href="#">Deals</a>
              <a className="block py-2" href="#">Contact</a>
            </div>
            <Separator className="my-4" />
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl w-full">Sign in</Button>
              <Button className="rounded-xl w-full"><ShoppingCart className="h-4 w-4 mr-2" />Cart</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight text-lg">
            <Wrench className="h-5 w-5 text-blue-600" /> BuildRight Hardware
          </div>
          <p className="mt-3 text-slate-600">Your one‑stop shop for quality tools and materials. Nairobi HQ.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Shop</p>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#">Power Tools</a></li>
            <li><a href="#">Hand Tools</a></li>
            <li><a href="#">Fasteners</a></li>
            <li><a href="#">Measuring</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Support</p>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Delivery</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <ul className="space-y-2 text-slate-600">
            <li>+254 700 000 000</li>
            <li>support@buildright.co.ke</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-xs text-center text-slate-500">© {new Date().getFullYear()} BuildRight Hardware. All rights reserved.</div>
    </footer>
  );
}

