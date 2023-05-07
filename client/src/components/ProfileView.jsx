export default function ProfileView(props) {
  return (
    <div className="max-w-10xl ">
      <div className="px-4 sm:px-0 flex justify-left items-center gap-4">
        <img
          src="https://www.randomlists.com/img/animals/cheetah.webp"
          className="rounded-full max-w-x"
        ></img>
        <div>
          <h3 className="text-base font-semibold leading-7 text-green-600">
            {props.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
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
          <div class="bg-white py-24 sm:py-32">
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl p-8">
              Trip 1
            </dd>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    Transactions every 24 hours
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    44 million
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    Assets under holding
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    $119 trillion
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    New users annually
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    46,000
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
