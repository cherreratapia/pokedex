import tw, { styled } from "twin.macro";
import * as Layout from "./Layout";
import * as Pokemon from "./Pokemon";

const Container = tw(Layout.Container)`
    shadow-md
    mt-8
    p-8
    h-full
`;

const Name = tw.h2`
    text-4xl
    text-gray-800
    font-semibold
    mr-4
    capitalize
    mb-4
`;

const Id = tw.h2`
    text-4xl
    text-gray-500
    font-semibold
    mb-4
`;

const Description = tw.p`
    text-lg
    text-gray-600
    font-semibold
`;

const Image = styled(Pokemon.Image)`
  height: 250px;
  width: 250px;
  ${tw`object-cover mb-4`}
`;

const InfoItem = tw.div`
    mb-4 
    mr-2
`;

const Info = tw.div`
    flex
    flex-col
    bg-blue-100
    rounded-sm
    p-6
`;

const TitleInfo = tw.h6`
    text-xs
    text-gray-600
    mr-2
`;

const TextInfo = tw.span`
    text-base
    text-gray-700
`;

const Stats = tw.span`
    text-base
    text-gray-700
    uppercase
    mr-2
`;

export {
  Name,
  Id,
  Container,
  Image,
  Description,
  Info,
  InfoItem,
  TitleInfo,
  TextInfo,
  Stats,
};
