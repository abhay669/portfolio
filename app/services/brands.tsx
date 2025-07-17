import { cn } from '@/lib/utils'
import { Marquee } from '@/components/magicui/marquee';


const projects = [
  { video: "/videos/Modern.mp4" },
  { video: "/videos/BeautyCosmetics.mov" },
  { video: "/videos/JewelryDisplay.mov" },
  { video: "/videos/ConstructionBuilding.mp4" },
  { video: "/videos/Food.mp4" },
  { video: "/videos/Code.mp4" },
];

const VideoCard = ({ video }: { video: string }) => {
  return (
    <div className={cn("relative cursor-pointer overflow-hidden mx-4 w-80 h-52")}> {/* consistent size */}
      <div className='flex flex-row items-center'>
        <div className={cn("relative w-80 h-52")}> {/* consistent size */}
          <video
            src={video}
            autoPlay
            muted
            loop
            className='w-full h-full object-cover rounded-[15px]'
          />
        </div>
      </div>
    </div>
  );
};



const Brands = () => {
    return ( 
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden py-8'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {projects.map((project, index) => (
          <VideoCard key={index} video={project.video} />
        ))}
      </Marquee>
      
    </div> );
}
 
export default Brands ;