import { chromium } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

const GOOGLE_FLIGHTS_URL = "https://www.google.com/travel/flights";

chromium.use(stealth());

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class FlightPage {
  ready = false;
  url = GOOGLE_FLIGHTS_URL;

  constructor() {}

  async init() {
    this.browser = await chromium.launch({
      channel: "chrome",
      headless: false,
    });

    this.page = await this.browser.newPage();
    await this.page.goto(this.url);
    this.ready = true;
  }

  async searchFlights(origin, destination, fromDate, toDate) {
    if (!this.ready) {
      throw new Error("Page not ready");
    }

    await this.page.click('[class="e5F5td BGeFcf"]');
    await sleep(1000);
    await this.page.keyboard.type(origin);
    await this.page.keyboard.press("Enter");

    await this.page.click('[class="e5F5td vxNK6d"]');
    await this.page.keyboard.type(destination);
    await this.page.keyboard.press("Enter");

    const formattedFromDate = new Date(fromDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const formattedToDate = new Date(toDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    await this.page.click('[aria-label="Departure"]');
    await sleep(1000);
    await this.page.keyboard.type(formattedFromDate);
    await this.page.keyboard.press("Enter");

    await this.page.click(
      '[class="gb_vd gb_Fd gb_Bd gb_ze gb_te gb_pe gb_we"]'
    );

    await this.page.click('[aria-label="Return"]');
    await sleep(1000);
    await this.page.keyboard.type(formattedToDate);
    await this.page.keyboard.press("Enter");

    await this.page.click(
      '[class="gb_vd gb_Fd gb_Bd gb_ze gb_te gb_pe gb_we"]'
    );

    await this.page.click(
      '[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc nCP5yc AjY5Oe LQeN7 TUT4y zlyfOd"]'
    );

    return await this.extractFlightsFromHTML();
  }

  async extractFlightsFromHTML() {
    await this.page.click('[aria-label="Emissions, Not selected"]');
    await this.page.click('[aria-label="Less emissions only"]');
    await sleep(1000);
    await this.page.click('[aria-label="Close dialog"]');
    await sleep(1000);

    const flightsHTML = await this.page.$$('[class="pIav2d"]');

    const flights = await Promise.all(
      flightsHTML.map(async (element) => {
        const emissionReduction = await element.$(
          '[class="N6PNV ogfYpf ZyBjjc juCwOd f84tcd"]'
        );
        const emissions = await element.$(
          '[class="AdWm1c lc3qH ogfYpf  Jucbnc PtgtFe"]'
        );
        const airline = await element.$('[class="h1fkLb"]');
        const numStops = await element.$('[class="VG3hNb"]');
        const cost = await element.$('[class="BVAVmf tPgKwe"]');

        return {
          emissionReduction: await emissionReduction?.innerText(),
          emissions: await emissions?.innerText(),
          airline: await airline?.innerText(),
          numStops: await numStops?.innerText(),
          cost: await cost?.innerText(),
        };
      })
    );

    return flights;
  }
}

export const searchFlights = async (origin, destination, fromDate, toDate) => {
  const flightPageInstance = new FlightPage();
  await flightPageInstance.init();

  return flightPageInstance.searchFlights(
    origin,
    destination,
    fromDate,
    toDate
  );
};
