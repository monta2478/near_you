import { Button } from "../ui/button";
import { Wrench, PhoneCall } from "lucide-react";

export default function Navigation() {
  return (
    <div className="px-8 h-16 border-b">
      <div className="flex flex-row justify-between items-center h-full max-w-7xl mx-auto">
        <div className="flex flex-row gap-x-10 items-center">
          <a className="flex items-center gap-2 font-bold text-2xl text-primary" href="/">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NearYou
            </span>
          </a>
          <div className="hidden md:flex flex-row gap-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-blue-600 text-foreground/80"
              href="/find-mechanic"
            >
              Find Mechanics
            </a>
            <a
              className="transition-colors hover:text-blue-600 text-foreground/80"
              href="/services"
            >
              Services
            </a>
            <a
              className="transition-colors hover:text-blue-600 text-foreground/80"
              href="/emergency"
            >
              Emergency Request
            </a>
            <a
              className="transition-colors hover:text-blue-600 text-foreground/80"
              href="/how-it-works"
            >
              How It Works
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-x-3 items-center">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Emergency 24/7</span>
          </Button>
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Join as Mechanic
          </Button>
        </div>
      </div>
    </div>
  );
}
