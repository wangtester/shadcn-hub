import * as React from "react";
import { MAGICUI_PART as part1 } from "./part1";
import { MAGICUI_PART as part2 } from "./part2";
import { MAGICUI_PART as part3 } from "./part3";
import { MAGICUI_PART as part4 } from "./part4";
import { MAGICUI_PART as part5 } from "./part5";
import { MAGICUI_PART as part6 } from "./part6";
import { MAGICUI_PART as part7 } from "./part7";

/**
 * Magic UI 组件的原地实机预览表：registry 里的 componentKey -> 预览组件。
 * 每个 key 都有各自独立的实现，避免同一页面上 70+ 张卡片长得一样。
 */
export const MAGICUI_PREVIEWS: Record<string, React.ComponentType> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7,
};
