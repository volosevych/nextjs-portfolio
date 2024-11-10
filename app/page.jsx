// components
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";

// -----------
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl mb-6">
                Web Developer
              </span>

              <h1 className="h1">Hello I'm <br/> <span className="text-accent">Ana Hoffmann</span></h1>

              <p className="max-w-[500px] my-9 text-white/80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus obcaecati consequatur, minus at illum voluptatibus 
              </p>

              <div className="flex flex-col xl:flex-row gap-8 items-center">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>

                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home