import { AlertTriangle } from "lucide-react";

export default function Banner() {
  return (
    <div className="px-4 py-2 bg-amber-500/10 border-b border-amber-500/20 text-amber-900 text-xs sm:text-sm font-medium">
      <div className="flex flex-row justify-center items-center gap-2 max-w-7xl mx-auto">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        <span>Stranded on the road? NearYou instantly connects you with nearby verified mechanics 24/7.</span>
      </div>
    </div>
  );
}
