import { Layout } from "StyledComponents";
import tw, { styled } from "twin.macro";

const Card = styled.div`
  width: 205px;
  height: 285px;
  &:hover {
    transform: translateY(1rem);
  }
  ${tw`
  flex 
  flex-col 
  rounded-tl-lg 
  rounded-tr-lg 
  mx-2
  mb-6
  relative 
  transition
  shadow
  cursor-pointer
  `}
`;

const Image = styled.img`
  height: 205px;
  width: 205px;
  ${tw`rounded-lg bg-gray-100`}
`;

const Info = styled.div`
  ${tw`px-4 py-2`}
`;

const Id = styled.p`
  ${tw`text-gray-600 text-xs`}
`;

const Name = styled.h4`
  ${tw`text-gray-800 text-2xl capitalize`}
`;

const Type = tw.p`
  text-xs
  capitalize
  z-20
`;

const CardSkeleton = styled.div`
  width: 205px;
  height: 285px;
  ${tw`flex flex-col mb-6 mx-2 animate-pulse shadow`}
`;

const ImageSkeleton = styled.div`
  height: 205px;
  min-width: 205px;
  ${tw`bg-gray-300 rounded-md`}
`;

const IdSkeleton = tw.div`
  w-6
  h-4
  bg-gray-300
  rounded-md
  mb-1
`;

const NameSkeleton = tw.div`
  w-40
  h-4
  bg-gray-300
  rounded-md
  mb-2
`;

const TypeSkeleton = tw.div`
  w-20 
  h-4
  bg-gray-300
  rounded-md
  mr-2
`;

const Skeleton = () => (
  <CardSkeleton>
    <ImageSkeleton />
    <Info>
      <IdSkeleton />
      <NameSkeleton />
      <Layout.Row>
        <TypeSkeleton />
        <TypeSkeleton />
      </Layout.Row>
    </Info>
  </CardSkeleton>
);

export { Card, Image, Info, Id, Name, Type, Skeleton };
