import tw, { styled } from "twin.macro";

const Container = tw.div`
container
mx-auto
px-32
h-screen
py-8
pb-32
`;
interface IFlexProps {
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  flexWrap?: boolean;
  hScreen?: boolean;
}
const Row = styled.div(
  ({
    justifyCenter,
    justifyEnd,
    justifyBetween,
    justifyAround,
    alignCenter,
    alignEnd,
    flexWrap,
    hScreen,
  }: IFlexProps) => [
    tw`flex flex-row flex-1`,
    justifyCenter && tw`justify-center`,
    justifyEnd && tw`justify-end`,
    justifyBetween && tw`justify-between`,
    justifyAround && tw`justify-around`,
    alignCenter && tw`items-center`,
    alignEnd && tw`items-end`,
    flexWrap && tw`flex-wrap`,
    hScreen && tw`h-screen`,
  ]
);
const Column = styled.div(
  ({
    justifyCenter,
    justifyEnd,
    justifyBetween,
    justifyAround,
    alignCenter,
    alignEnd,
    flexWrap,
    hScreen,
  }: IFlexProps) => [
    tw`flex flex-col flex-1`,
    justifyCenter && tw`justify-center`,
    justifyEnd && tw`justify-end`,
    justifyBetween && tw`justify-between`,
    justifyAround && tw`justify-around`,
    alignCenter && tw`items-center`,
    alignEnd && tw`items-end`,
    flexWrap && tw`flex-wrap`,
    hScreen && tw`h-screen`,
  ]
);

const Title = tw.h1`
text-4xl
font-bold
text-gray-800
`;

const Button = tw.button`
  flex 
  justify-center
  w-3/5
  py-4
  text-center
  mb-8
`;

const Spinner = tw.div`animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700`;

const PrimaryButton = tw(Button)`
  bg-red-400
  text-white
`;

const Loading = () => {
  return (
    <div className="mb-8">
      <Spinner />
    </div>
  );
};

const CircleButton = styled.button(({ disabled }) => [
  tw`p-4
  rounded-full
  flex
  justify-center
  items-center
  mx-8
  bg-gray-400
  border-2
  border-gray-400
  text-gray-100
  transition`,
  !disabled && tw`hover:bg-gray-50 hover:text-gray-400`,
  disabled && tw`cursor-not-allowed`,
]);

export { Container, Row, Column, PrimaryButton, Loading, CircleButton, Title };
