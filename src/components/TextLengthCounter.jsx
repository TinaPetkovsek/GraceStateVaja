import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Slider } from "./ui/slider";

export function TextLengthCounter() {
  const [text, setText] = useState("");
  const [maxChars, setMaxChars] = useState(100);
  const [isOverLimit, setIsOverlimit] = useState(false);

  // useEffect(()=>{},)

  return (
    <div>
      <Textarea
        value={text}
        onChange={(v) => setText(v.target.value)}
      ></Textarea>
      <div></div>
      <Slider
        value={[maxChars]}
        onValueChange={(a) => setMaxChars(a[0])}
        defaultValue={[33]}
        max={100}
        step={1}
      />
      <div>{maxChars}</div>

      {text.length > maxChars ? (
        <div>Tvoje besedilo je predolgo</div>
      ) : (
        <p>b</p>
      )}

      {text.length > maxChars && <div>Tvoje besedilo je predolgo</div>}
    </div>
  );
}
