import Trip from './Trip'

export default function ProfileView(props) {
  return (
    <div className='flex justify-center'>
        <div className="w-[100%] max-w-[900px]">
        <div className="px-4 sm:px-0 flex justify-start items-center gap-4">
            <img
            src="https://www.randomlists.com/img/animals/cheetah.webp"
            className="rounded-full max-w-x"
            ></img>
            <div>
            <h3 className="text-base font-semibold leading-7 text-green-600">
                {props.name}
            </h3>
            <p className="mt-1 max-w-5xl text-sm leading-6 text-gray-500">
                {props.email}
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
                Margot Foster
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Total Carbon Saved
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                10,000 kg
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Total Points
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                $120,000
                </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                Total Money Saved
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                $1,000
                </dd>
            </div>
            <Trip/>
            <div class="bg-white py-24 sm:py-10 text-left">
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl p-10">
                Trip 1: San Francisco
                </dd>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">$1000</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        Cost
                    </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">1000 kg</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        Carbon Saved
                    </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">1000</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        Points Earned
                    </dd>
                    </div>
                </dl>
                </div>
            </div>
            </dl>
        </div>
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
