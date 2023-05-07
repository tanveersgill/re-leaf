import { useNavigate } from "react-router-dom";
import { useTripBuilder } from "../context/TripBuilderContext";
import useProfile from "../hooks/network/useProfile";

export default function Summary() {
  const { trip, setTrip } = useTripBuilder();
  const { addTrip } = useProfile();
  const navigate = useNavigate();

  const costDifference =
    (trip?.flights?.[trip?.flights?.length - 1]?.cost
      ?.split("$")?.[1]
      ?.replace(",", "") || 0) -
    (trip?.flights?.[0]?.cost?.split("$")?.[1].replace(",", "") || 0);

  const emissionsReductionPercentage =
    (trip?.flights?.[0]?.emissionReduction?.split("%")?.[0] || 0) / 100;

  const emissions = trip?.flights?.[0]?.emissions.split(" ")[0];

  const emissionsSaved = emissionsReductionPercentage * emissions * -1;

  const handleConfirm = () => {
    (async () => {
      try {
        navigate("/");
        setTrip({});
        await addTrip({
          start_date: trip?.startDate,
          end_date: trip?.endDate,
          flight: trip?.flights?.[0],
          accommodation: trip?.accommodations[0],
          attractions: trip?.activities,
          origin: trip?.origin,
          destination: trip?.destination,
        });
      } catch (e) {
        console.error(e);
      }
    })();
  };

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-green-900">
          Personal Travel Summary
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-green-500">
          Enjoy your trip!
        </p>
      </div>
      <div className="mt-6 border-t border-green-100">
        <dl className="divide-y divide-green-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Destination
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {trip?.destination}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Origin
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {trip?.origin}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Flight
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {trip?.flights[0]?.airline}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Accommodation
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {trip?.accommodations[0]?.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Activities
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              <ul>
                {trip?.activities?.map((act) => {
                  return <li key={act.address}>{act?.name}</li>;
                })}
              </ul>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Total Price
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {trip?.flights[0].cost}
            </dd>
          </div>
          {costDifference > 0 && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-green-900">
                Total Price Saved
              </dt>
              <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
                ${costDifference}
              </dd>
            </div>
          )}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Total Emissions
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {trip?.flights[0].emissions}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Total Emissions Saved
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {emissionsSaved}kg
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Points Earned
            </dt>
            <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
              {emissionsSaved * 10}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-green-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-green-100 rounded-md border border-green-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate">
                      Travel Itinerary.pdf
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <a
                      href="#"
                      className="font-medium text-green-900 hover:text-green-700"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate">
                      Hotel Reservation.pdf
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <a
                      href="#"
                      className="font-medium text-green-900 hover:text-green-700"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <button className="confirmButton" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
