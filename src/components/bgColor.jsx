import { useAtom } from "jotai";
import { introActiveAtom } from "../store";

export function GradientBackground() {
  const [introActive] = useAtom(introActiveAtom);

  if (!introActive) {
    let rootBG = document.getElementById('root');
    rootBG.style.background = 'radial-gradient(#d0d0d0, #232323 80%)'
  }

}
