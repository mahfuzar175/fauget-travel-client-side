
const AboutUs = () => {
    return (
      <div>
        <section className="max-w-5xl mx-auto mt-24">
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                  <p className="text-center text-gray-500 font-bold">Our Vision And History</p>
                <p className="text-gray-700 mb-8">
                  <span className="text-5xl font-bold text-black">
                    Founded in 1970 <br /> by
                  </span>
                  , <span className="text-5xl font-bold text-pink-500">Chairman Jay Martin</span>
                </p>
                <p className="text-gray-500">The Juice Plus+ Company has grown from a small, direct-sales company into a highly successful, privately held health and wellness company operatinLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="list-disc pl-8 mt-2 font-semibold">
                  <li>Cras at mi luctus, tincidunt urna eu, posuere enim</li>
                  <li>Vivamus elementum lorem vitae quam tincidunt</li>
                  <li>Michael Johnson - Catering Expert</li>
                  <li>Suspendisse accumsan eros eu erat condimentum</li>
                </p>
              </div>
              <div className="md:mr-6">
                <img
                  src="https://i.ibb.co/P1PwWX5/history-3.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutUs;
  