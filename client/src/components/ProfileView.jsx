import Trip from "./Trip";

export default function ProfileView({ user, trips }) {
  return (
    <div className='flex justify-center'>
      <div className="max-w-screen-md ">
        <div className="px-4 sm:px-0 flex justify-left items-center gap-4">
          <img src={user.picture} className="rounded-full max-w-x"></img>
          <div>
            <h3 className="text-base font-semibold leading-7 text-green-600">
              {user.given_name} {user.family_name}
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-500">
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
              trips.map((trip, i) => <Trip trip={trip} key={i} />)}
          </dl>
        </div>
      </div>
      </div>
  );
}
