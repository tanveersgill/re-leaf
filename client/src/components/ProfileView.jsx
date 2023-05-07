export default function ProfileView({ user, trips }) {
  return (
    <div className="max-w-10xl ">
      <div className="px-4 sm:px-0 flex justify-left items-center gap-4">
        <img src={user.picture} className="rounded-full max-w-x"></img>
        <div>
          <h3 className="text-base font-semibold leading-7 text-green-600">
            {user.given_name} {user.family_name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {user.email}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Total Carbon Saved
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.points / 10} kg
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Total Points
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.points}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Total Money Saved
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              $1,634
            </dd>
          </div>
          {trips.length &&
            trips.map((trip, i) => <TripDetails trip={trip} key={i} />)}
        </dl>
      </div>
    </div>
  );
}

const TripDetails = ({ trip }) => {
  const emissionReductionPercentage =
    trip.flight.emissionReduction.split("%")?.[0] / 100;

  const emissions = trip.flight.emissions.split(" ")[0];

  const emissionsSaved = emissionReductionPercentage * emissions * -1;

  const name =
    trip.accommodation.address.split(",")[
      trip.accommodation.address.split(",").length - 1
    ];

  return (
    <div className="bg-white py-24 sm:py-10 text-left">
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl p-10">
        {name}
      </dd>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              {trip.flight.cost}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Cost
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              {emissionsSaved}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Carbon Saved
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              {emissionsSaved * 10}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Points Earned
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
