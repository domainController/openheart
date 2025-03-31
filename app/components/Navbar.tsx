"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Clothing", content: <p>Top brands, styles, etc.</p> },
  { label: "Books", content: <p>Livres préférés ou inspirants.</p> },
  { label: "Internet", content: <p>Usage du web, forums, réseaux...</p> },
  { label: "Travel", content: <p>Pays visités, pays rêvés...</p> },
  { label: "Sport", content: <p>Sport régulier ou occasionnel ?</p> },
  { label: "Food", content: <p>Préférences alimentaires, halal, etc.</p> },
  { label: "Smoking", content: <p>Tabac ? Accepte un fumeur ?</p> },
  { label: "Drinking", content: <p>Consommation d'alcool ?</p> },
];

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b bg-white">
      <div className="flex items-center justify-between w-full">
        {/* PROPOSAL - à gauche */}
        <div className="text-5xl font-semibold text-gray-900 tracking-tight">
          Proposal
        </div>

        {/* MENU - à droite */}
        <ul className="flex gap-6 flex-wrap items-center text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <Popover>
                <PopoverTrigger
                  className={cn("hover:underline cursor-pointer")}
                >
                  {item.label}
                </PopoverTrigger>
                <PopoverContent className="w-72 text-sm">
                  {item.content}
                </PopoverContent>
              </Popover>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
