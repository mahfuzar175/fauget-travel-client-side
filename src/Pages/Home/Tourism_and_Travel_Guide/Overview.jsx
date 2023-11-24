import ReactPlayer from 'react-player/youtube'
const Overview = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="grid lg:grid-cols-2 grid-cols-1 p-4 justify-center items-center gap-4">
            <ReactPlayer url='https://youtu.be/qbGZDEFHBmc?si=HRUUGih6BecA-HCA' />
            <ReactPlayer url='https://youtu.be/ibuUmMhD2Pg?si=HEUV1xh1ztJnJCLS' />
            <ReactPlayer url='https://youtu.be/9GvTYd5hG_g?si=svOzFb7M66xjhpJF' />
            <ReactPlayer url='https://youtu.be/0NMIZ-PTt8k?si=qIfs5tUL7Aqr0RDa' />
        </div>
        </div>
    );
};

export default Overview;