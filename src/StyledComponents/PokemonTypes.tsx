import { ReactElement } from "react";
import tw, { styled } from "twin.macro";

interface IProps {
  children: ReactElement;
}

const BaseType = tw.div`
  w-20 h-4 rounded-sm text-center relative mr-2
`;

const BaseTypeLayer = tw(BaseType)`
  bg-transparent absolute flex justify-center items-center
`;

const FireType = tw(BaseType)`
  bg-yellow-500
  text-white
`;

const GrassType = tw(BaseType)`
  bg-green-500
  text-black
`;

const BugType = tw(BaseType)`
  bg-green-700
  text-white
`;

const PoisonType = tw(BaseType)`
  bg-purple-600
  text-white
`;

const NormalType = tw(BaseType)`
  bg-gray-700
  text-white
`;

const WaterType = tw(BaseType)`
  bg-blue-800
  text-white
`;

const ElectricType = tw(BaseType)`
  bg-yellow-400
  text-black
`;

const FairyType = tw(BaseType)`
  bg-pink-400
  text-black
`;

const FightingType = tw(BaseType)`
  bg-yellow-800
  text-white
`;

const PsychicType = tw(BaseType)`
  bg-pink-400
  text-white
`;

const RockType = styled(BaseType)`
  background-color: #ad9b2d;
  ${tw`text-white`}
`;

const SteelType = NormalType;

const IceType = tw(BaseType)`
  bg-blue-500
  text-black
`;

const GhostType = tw(BaseType)`
  bg-purple-800
  text-white
`;

const DarkType = tw(BaseType)`
  bg-gray-700
  text-white
`;

const GroundTop = tw(BaseType)`
  h-2
  bg-yellow-400
  rounded-br-none
  rounded-bl-none
  absolute
  top-0
`;

const GroundBottom = styled(BaseType)`
  background-color: #ad9b2d;
  ${tw`
    h-2
    rounded-tr-none
    rounded-tl-none
    absolute
    top-1/2
  `}
`;

const FlyingTop = tw(BaseType)`
  h-2
  bg-blue-500
  rounded-br-none
  rounded-bl-none
  absolute
  top-0
`;

const FlyingBottom = tw(BaseType)`
  h-2
  bg-gray-400
  rounded-tr-none
  rounded-tl-none
  absolute
  top-1/2
`;

const DragonTop = tw(BaseType)`
  h-2
  bg-blue-600
  rounded-br-none
  rounded-bl-none
  absolute
  top-1/2
`;

const DragonBottom = tw(BaseType)`
  h-2
  bg-red-800
  rounded-tr-none
  rounded-tl-none
  absolute
  top-1/2
`;

const FlyingType = (props: IProps) => {
  return (
    <BaseType>
      <BaseTypeLayer>
        <FlyingTop />
        <FlyingBottom />
        {props.children}
      </BaseTypeLayer>
    </BaseType>
  );
};

const GroundType = (props: IProps) => {
  return (
    <BaseType>
      <BaseTypeLayer>
        <GroundTop />
        <GroundBottom />
        {props.children}
      </BaseTypeLayer>
    </BaseType>
  );
};

const DragonType = (props: IProps) => {
  return (
    <BaseType>
      <BaseTypeLayer>
        <DragonTop />
        <DragonBottom />
        {props.children}
      </BaseTypeLayer>
    </BaseType>
  );
};

interface Types {
  [key: string]: any;
}

const types: Types = {
  fire: FireType,
  grass: GrassType,
  bug: BugType,
  poison: PoisonType,
  normal: NormalType,
  water: WaterType,
  electric: ElectricType,
  fairy: FairyType,
  fighting: FightingType,
  psychic: PsychicType,
  rock: RockType,
  steel: SteelType,
  ice: IceType,
  ghost: GhostType,
  dark: DarkType,
  flying: FlyingType,
  ground: GroundType,
  dragon: DragonType,
};
export default types;
