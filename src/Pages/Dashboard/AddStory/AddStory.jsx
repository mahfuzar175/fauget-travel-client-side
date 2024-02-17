import Swal from "sweetalert2";

const AddStory = () => {
  const handleAddPackage = (event) => {
    event.preventDefault();
    const form = event.target;

    const spot_name = form.spot_name.value;
    const spot_image = form.spot_image.value;
    const location = form.location.value;
    const posted_date = form.posted_date.value;
    const tourist_image = form.tourist_image.value;
    const tourist_name = form.tourist_name.value;
    const journey_review = form.journey_review.value;
    const rating = form.rating.value;

    const newStory = {
      spot_name,
      spot_image,
      location,
      posted_date,
      tourist_image,
      tourist_name,
      journey_review,
      rating,
    };
    console.log(newStory);

    // send data to the server
    fetch("https://b8a12-server-side-mahfuzar175.vercel.app/stories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Story Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="mt-6">
      <div>
        {/* form */}
        <div className="bg-gray-200 p-8">
          <h2 className="flex justify-center items-center text-4xl font-extrabold mb-4 underline">
            Add A Story
          </h2>
          <form onSubmit={handleAddPackage}>
            <div className="md:flex mb-6 gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Spot Name*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="spot_name"
                    placeholder="Spot Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Spot Image*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="spot_image"
                    placeholder="Spot Image URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form name and quantity row */}
            <div className="md:flex mb-6 gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Location*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Location"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Posted Date*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="posted_date"
                    placeholder="Posted Date"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-6 gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Tourist Image*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="tourist_image"
                    required
                    placeholder="Tourist Image URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Tourist Name*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="tourist_name"
                    required
                    placeholder="Tourist Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex mb-6 gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Journey Review*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="journey_review"
                    required
                    placeholder="Journey Review"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating*</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="rating"
                    required
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* formPhoto url row */}
            <input
              type="submit"
              value="Add Story"
              className="btn btn-block btn-neutral"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStory;
