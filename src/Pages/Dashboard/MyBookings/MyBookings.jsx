
import useBookings from "../../../hooks/useBookings";

const MyBookings = () => {
    const [booking, refetch] = useBookings();
    return (
        <div>
            <div>
      <div className="flex justify-around mb-4">
        <h2 className="text-3xl font-semibold">BOOKING ITEMS</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>PACKAGE NAME</th>
              <th>TOUR GUIDE NAME</th>
              <th>TOUR DATE</th>
              <th>TOURE PRICE</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                
                <td>
                  <h2>{item.trip_title}</h2>
                </td>
                <td>
                  <h2>{item.tourGuide}</h2>
                </td>
                <td>
                  <h2>{item.date}</h2>
                </td>
                <th>
                  <h2>${item.price}</h2>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default MyBookings;