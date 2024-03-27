import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function LightSwitch() {
  // Naredi state `isDark`
  const [isDark, setIsDark] = useState(false);

  // Uporabi useEffect za dodajanje ali odstranjevanje classa `dark` na `document.documentElement` glede na vrednost `isDark`

  useEffect(() => {
    // To kodo daj v useEffect
    const root = document.documentElement; // najde <html> značko
    root.classList.remove("light", "dark"); // odstrani prejšnji class
    root.classList.add(isDark ? "dark" : "light"); // dodaj nov class glede na vrednost isDark
  }, [isDark]);

  // Prikazi Switch komponento in ji posreduj `isDark` in `setIsDark` kot props
  return (
    <Switch checked={isDark} onCheckedChange={setIsDark}>
      To je LightSwitch.jsx
    </Switch>
  );
}
