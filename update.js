import credentials from "./credentials.json" with { type: "json" };
import { publicIpv4, publicIpv6 } from "public-ip";
import querystring from "node:querystring";

const { token, domains } = credentials;

if (typeof token != "string" || token.length < 1)
  throw new Error("Invalid Token");

if (
  !Array.isArray(domains) ||
  domains.length < 1 ||
  domains.some((domain) => typeof domain != "string")
)
  throw new Error("Invalid Domains List");

const ipv4 = await publicIpv4();
console.log("Public IPv4: " + ipv4);

const queryObj = {
  domains,
  token,
  ip: ipv4,
};
const url = `https://www.duckdns.org/update?${querystring.stringify(queryObj)}`;

const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Request failed with status: ${response.status}`);
} else {
  console.log("Script ran successfully, your IP should be updated.");
}
