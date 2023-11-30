
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
      <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
          {tourGuides.map((tourGuide) => (
                    <MeetOurTourGuideCard key={tourGuide._id} tourGuide={tourGuide}>
                      
                    </MeetOurTourGuideCard>
                  ))}
      </div>
      </div>
  );
};

export default MeetOurTourGuide;