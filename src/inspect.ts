import { sociologyRAG } from "./sociologyRAG";
console.log(Object.keys(sociologyRAG["Paper 1"]));
for (const key of Object.keys(sociologyRAG["Paper 1"])) {
  console.log(key, Object.keys(sociologyRAG["Paper 1"][key]));
}
