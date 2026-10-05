import fs from "fs";

let code = fs.readFileSync("./src/components/registry-live-preview.tsx", "utf-8");

// In the switch block:
code = code.replace(
  'case "shadcn-datatable-demo":\n      return <ShadcnDataTableDemo />;',
  'case "shadcn-datatable-demo":\n      return <ShadcnDataTableBatchDemo />;'
);
code = code.replace(
  'case "aceternity-sparkles-demo":\n      return <AceternitySparklesDemo />;',
  'case "aceternity-sparkles-demo":\n      return <AceternitySparklesBatchDemo />;'
);
code = code.replace(
  'case "shadcn-charts-bar-demo":\n      return <ShadcnChartsBarDemo />;',
  'case "shadcn-charts-bar-demo":\n      return <ShadcnChartsBarBatchDemo />;'
);

// In the component implementation (the second ones after BATCH LIVE PREVIEW DEMOS):
const batchMarker = "/* BATCH LIVE PREVIEW DEMOS: OFFICIAL & TIER 1 LIBRARIES                     */";
const parts = code.split(batchMarker);
if (parts.length === 2) {
  let secondPart = parts[1];
  secondPart = secondPart.replace("function ShadcnDataTableDemo()", "function ShadcnDataTableBatchDemo()");
  secondPart = secondPart.replace("function AceternitySparklesDemo()", "function AceternitySparklesBatchDemo()");
  secondPart = secondPart.replace("function ShadcnChartsBarDemo()", "function ShadcnChartsBarBatchDemo()");
  code = parts[0] + batchMarker + secondPart;
  fs.writeFileSync("./src/components/registry-live-preview.tsx", code, "utf-8");
  console.log("Successfully fixed duplicate demo names!");
} else {
  console.error("Could not find batchMarker");
}
