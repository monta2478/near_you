import "./App.css";
import Header from "./components/header/header";
import { Button } from "./components/ui/button";
import { 
  Car, 
  Bike, 
  BatteryCharging, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ArrowRight,
  PhoneCall
} from "lucide-react";

const services = [
  {
    icon: Bike,
    title: "Bike Repair",
    desc: "Fast roadside assistance for punctures, chain, spark plug & mechanical issues.",
  },
  {
    icon: Car,
    title: "Car Repair",
    desc: "On-spot diagnostics, engine trouble, radiator overheating, and mechanical help.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Jump-Start",
    desc: "Quick emergency battery jump-starts or replacement support anywhere.",
  },
  {
    icon: Truck,
    title: "Towing Support",
    desc: "Reliable flatbed or wheel-lift tow trucks to bring your vehicle to the nearest garage.",
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verified & Certified Mechanics Across the City
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
              Vehicle breakdown? Help is <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">NearYou</span>.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Find and connect with trusted nearby mechanics in real-time. Share your location, describe the problem, and get back on the road safely.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 font-semibold gap-2 shadow-lg shadow-blue-500/20">
                <MapPin className="w-5 h-5" />
                Find Nearby Mechanics
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold gap-2 border-slate-300">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                Emergency Request
              </Button>
            </div>

            {/* Quick stats or highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-200">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 font-bold text-2xl text-slate-800">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>&lt; 15 mins</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Average Response Time</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 font-bold text-2xl text-slate-800">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>100% Verified</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Background Checked Mechanics</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 font-bold text-2xl text-slate-800">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>GPS Matching</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Direct Location Based Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Roadside Assistance Services</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">Immediate on-demand roadside support whenever you need it</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 bg-white group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mt-4">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{srv.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t py-8 px-6 bg-slate-50 text-center text-sm text-slate-500">
        <p>© 2026 NearYou - A Web-Based Roadside Support Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
