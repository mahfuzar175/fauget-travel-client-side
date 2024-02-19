
import { useState } from 'react';
import useUser from '../../../hooks/useUser';
import { useEffect } from 'react';
import MeetOurTourGuideCard from './MeetOurTourGuideCard';


const MeetOurTourGuide = () => {
  const [tourGuides, setTourGuides] = useState([]);
  const [users] = useUser();
  useEffect(() => {
      const tourGuideUsers = users.filter((user) => user.role === "tourGuide");
      setTourGuides(tourGuideUsers);
    }, [users]);
  
  return (
      <div className="flex justify-center items-center mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {tourGuides.map((tourGuide) => (
                    <MeetOurTourGuideCard key={tourGuide._id} tourGuide={tourGuide}>
                      
                    </MeetOurTourGuideCard>
                  ))}
      </div>
      </div>
  );
};

export default MeetOurTourGuide;