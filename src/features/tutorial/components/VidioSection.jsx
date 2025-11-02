/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../../components/3DCard"; 
import { Poppins } from "../../../components/ui/Text";

export default function VidioSection({ tutorials }) {
  return (
    <section className="pb-5 px-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {tutorials.length > 0 ? (
          tutorials.map((tutorial) => (
            <CardContainer key={tutorial.id}>
              <CardBody className="bg-gray-50 relative group/card w-full h-auto rounded-xl p-5 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600"
                >
                  {tutorial.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2"
                >
                  {tutorial.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={tutorial.thumbnail}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={tutorial.title}
                    loading="lazy"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-5">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    to={`/tutorial/${tutorial.id}`} 
                    className="px-4 py-2 rounded-xl text-xs font-normal bg-black text-white"
                  >
                    Lihat Tutorial →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        ) : (
          <Poppins className="text-center col-span-full text-gray-600">
            Tutorial tidak ditemukan.
          </Poppins>
        )}
      </div>
    </section>
  );
}