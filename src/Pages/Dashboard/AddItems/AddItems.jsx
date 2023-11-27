import Swal from "sweetalert2";

const AddItems = () => {

    const handleAddPackage  = event =>{
        event.preventDefault();
        const form = event.target;

        const tour_image = form.tour_image.value;
        const tour_type = form.tour_type.value;
        const trip_title = form.trip_title.value;
        const price = form.price.value;
        const day1_activity = form.day1_activity.value;
        const day1_description = form.day1_description.value;
        const day2_activity = form.day2_activity.value;
        const day2_description = form.day2_description.value;
        const img1 = form.img1.value;
        const img2 = form.img2.value;
        const img3 = form.img3.value;
        const img4 = form.img4.value;

        const newPackage = {tour_image, tour_type, trip_title, price, day1_activity, day1_description, day2_activity, day2_description, img1, img2, img3, img4}
        console.log(newPackage);

        // send data to the server
        fetch('http://localhost:5000/travelPackages',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newPackage)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Package Added Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
        })
    }
    
    return (
        <div>
            <div className="my-4 p-4 w-full bg-green-600 text-white border border-black rounded">
        <h2 className="text-center text-xl font-serif font-semibold">Add Packages</h2>
      </div>
      <div>
        {/* form */}
        <div className="bg-gray-200 p-8">
      <form onSubmit={handleAddPackage}>
      <div className="md:flex mb-6 gap-4">
      <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Tour Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="tour_type"
                placeholder="Tour Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Tour Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="tour_image"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form name and quantity row */}
        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Trip Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="trip_title"
                placeholder="Trip Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Day-1 Activity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="day1_activity"
                placeholder="Day-1 Activity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Day-1 Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="day1_description"
                placeholder="Day-1 Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Day-2 Activity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="day2_activity"
                placeholder="Day-2 Activity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Day-2 Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="day2_description"
                placeholder="Day-2 Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image-1</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img1"
                placeholder="Image URL-1"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image-2</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img2"
                placeholder="Image URL-2"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image-3</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img3"
                placeholder="Image URL-3"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image-4</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img4"
                placeholder="Image URL-4"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* formPhoto url row */}
        <input type="submit" value="Add Package" className="btn btn-block btn-neutral"  />
      </form>
    </div>

      </div>
        </div>
    );
};

export default AddItems;