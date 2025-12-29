import { dummyData } from "./dummy";
import * as decapData from "./decap";
import * as sanityData from "./sanity";

let cms;
const cmsName = process.env.NEXT_PUBLIC_CMS_NAME;

if (cmsName === "sanity") {
  cms = sanityData;
} else if (cmsName === "decap") {
  cms = decapData;
} else {
  cms = dummyData;
}

export default cms;