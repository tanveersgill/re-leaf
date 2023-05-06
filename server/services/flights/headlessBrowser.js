import { chromium } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

const GOOGLE_FLIGHTS_URL = "https://www.google.com/travel/flights";

chromium.use(stealth());

let flightPageInstance = null;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class FlightPage {
  ready = false;
  url = GOOGLE_FLIGHTS_URL;

  constructor() {}

  async init() {
    this.browser = await chromium.launch({
      channel: "chrome",
      headless: false,
      args: [
        "--use-fake-ui-for-media-stream",
        "--enable-usermedia-screen-capturing",
        "--allow-http-screen-capture",
        "--auto-select-desktop-capture-source=autoPresentThisTitle",
      ],
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
    await this.page.keyboard.type(origin);
    await this.page.keyboard.press("Enter");

    await sleep(1000);

    await this.page.click('[class="e5F5td vxNK6d"]');
    await this.page.keyboard.type(destination);
    await this.page.keyboard.press("Enter");

    await sleep(1000);

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

    await this.page.click('[class="oSuIZ YICvqf kStSsc ieVaIb"]');
    this.page.keyboard.type(formattedFromDate);

    // await sleep(10

    // await this.page.click('[class="VfPpkd-vQzf8d"]')

    await this.page.click('[class="TP4Lpb eoY5cb j0Ppje"]');
    this.page.keyboard.type(formattedToDate);

    // await this.page.click(
    //   '[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc nCP5yc AjY5Oe LQeN7 TUT4y zlyfOd"]'
    // );
  }
}

export const getFlightPage = async () => {
  if (!flightPageInstance) {
    flightPageInstance = new FlightPage();
    await flightPageInstance.init();
  }

  return flightPageInstance;
};
