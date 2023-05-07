export default function Summary() {
  return (
    <div>
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-green-900">
          Personal Travel Summary
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-green-500">
          Enjoy your trip!
        </p>
      </div>
      <div class="mt-6 border-t border-green-100">
        <dl class="divide-y divide-green-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Destination
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              San Francisco
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">Origin</dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              Toronto
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">Flight</dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              Air Canada
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Accomodation
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              Marriot Hotel
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Activity
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              San Francisco Zoo
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Total Price
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              $2000
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Total Price Saved
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              $500
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Total Emissions
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              1000 kg
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Total Emissions Saved
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              200 kg
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Points Earned
            </dt>
            <dd class="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              100
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-green-900">
              Attachments
            </dt>
            <dd class="mt-2 text-sm text-green-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                class="divide-y divide-green-100 rounded-md border border-green-200"
              >
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-2 flex-1 w-0 truncate">
                      Travel Itinerary.pdf
                    </span>
                  </div>
                  <div class="flex-shrink-0 ml-4">
                    <a
                      href="#"
                      class="font-medium text-green-900 hover:text-green-700"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-2 flex-1 w-0 truncate">
                      Hotel Reservation.pdf
                    </span>
                  </div>
                  <div class="flex-shrink-0 ml-4">
                    <a
                      href="#"
                      class="font-medium text-green-900 hover:text-green-700"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <a href="/">
                <button className="confirmButton">Confirm</button>
              </a>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
