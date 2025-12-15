import { dummyData } from "./dummy";
import { netlifyData } from "./netlify";
import { sanityData } from "./sanity";

let cms;
const cmsName = process.env.CMS_NAME;

if (cmsName === "sanity") {
  cms = sanityData;
} else if (cmsName === "netlify") {
  cms = netlifyData;
} else {
  cms = dummyData;
}

export default cms;