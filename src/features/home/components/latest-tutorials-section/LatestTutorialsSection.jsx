import React from 'react';
import { useTutorial } from '../../../tutorial/hooks/useTutorial';
import { Poppins } from '../../../../components/ui/Text';
import { Button } from '../../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from "../../../../components/3DCard";
import { ArrowRight } from "lucide-react"

const LatestTutorialsSection = () => {
  const { tutorials } = useTutorial();

  const latestTutorials = tutorials.slice(0, 3);

  if (latestTutorials.length === 0) {
    return null; 
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul + Deskripsi */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tutorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800">Terbaru</span>
          </h2>
          <Poppins className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Tingkatkan skill Anda dengan panduan dan tutorial terbaru dari tim Litbang HIMTI.
          </Poppins>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestTutorials.map((tutorial) => (
            <CardContainer key={tutorial.id}>
              <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                
                <CardItem
                  translateZ="50"
                  className="text-lg font-bold text-neutral-600"
                >
                  {tutorial.title}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 line-clamp-3"
                >
                  {tutorial.description}
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-3">
                  <img
                    src={tutorial.thumbnail}
                    height="1000"
                    width="1000"
                    className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={tutorial.title}
                    loading="lazy"
                  />
                </CardItem>
                
                <div className="flex justify-end items-center mt-3">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    to={`/tutorial/${tutorial.id}`} 
                    className="px-3 py-2 rounded-lg text-xs font-medium bg-black text-white"
                  >
                    Lihat Tutorial →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Link to="/tutorial">
            <Button variant="secondary" rounded="full" size="lg">
              <div className="flex items-center gap-2 px-4">
                <span>Lihat Semua Tutorial</span>
                <ArrowRight size={18} />
             </div>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestTutorialsSection;
