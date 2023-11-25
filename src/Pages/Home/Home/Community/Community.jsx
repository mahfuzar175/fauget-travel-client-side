const Community = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-1/2">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Directore</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Manager</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Manager</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Manager</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Manager</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Manager</p>
			</div>
		</div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Our Community!</h1>
            <p className="py-6">
            Explore the diverse expertise of our dedicated team, each member passionate about delivering enriching travel experiences. From seasoned guides to expert planners, our team is committed to turning your journey into unforgettable memories
            </p>
            <div className="md:flex-none flex md:justify-start justify-center md:items-start items-center">
            <button className="btn btn-primary ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
