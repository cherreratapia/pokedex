import tw, { styled } from "twin.macro";
import * as Layout from "./Layout";
import * as Pokemon from "./Pokemon";

const Container = tw(Layout.Container)`
    shadow-md
    mt-8
    p-8
    mx-2
    lg:mx-0
    w-4/5
    lg:w-full
    h-full
    flex-col
    lg:flex-row
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

const ImageContainer = tw.div`
    flex flex-row justify-center lg:justify-start lg:mr-8
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
    bg-blue-50
    rounded-sm
    p-6
`;

const Content = tw.div`
    flex
    flex-col
    lg:flex-row
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

const StatsColumn = tw(Layout.Column)`
    pr-8
`;

const Stats = tw.span`
    text-base
    text-gray-700
    uppercase
    mr-2
`;

const Ability = tw.div`
    p-4
    mb-4
    border
    border-gray-200
    rounded
`;

export {
  Name,
  Id,
  Container,
  Content,
  ImageContainer,
  Image,
  Description,
  Info,
  InfoItem,
  TitleInfo,
  TextInfo,
  StatsColumn,
  Stats,
  Ability,
};
