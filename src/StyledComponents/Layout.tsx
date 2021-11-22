import { ChangeEvent, useState } from "react";
import tw, { styled } from "twin.macro";
import { GoSearch, GoCircleSlash } from "react-icons/go";

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
  flexGrow?: boolean;
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
    flexGrow = true,
  }: IFlexProps) => [
    tw`flex flex-row`,
    justifyCenter && tw`justify-center`,
    justifyEnd && tw`justify-end`,
    justifyBetween && tw`justify-between`,
    justifyAround && tw`justify-around`,
    alignCenter && tw`items-center`,
    alignEnd && tw`items-end`,
    flexWrap && tw`flex-wrap`,
    hScreen && tw`h-screen`,
    !flexGrow && tw`flex-1`,
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
    flexGrow = true,
  }: IFlexProps) => [
    tw`flex flex-col`,
    justifyCenter && tw`justify-center`,
    justifyEnd && tw`justify-end`,
    justifyBetween && tw`justify-between`,
    justifyAround && tw`justify-around`,
    alignCenter && tw`items-center`,
    alignEnd && tw`items-end`,
    flexWrap && tw`flex-wrap`,
    hScreen && tw`h-screen`,
    flexGrow && tw`flex-1`,
  ]
);

const Logo = tw.img`
  w-3/4
`;
const MiniLogo = tw.img`
  w-1/5 my-2
`;

const Shadow = tw.div`
  shadow-xl p-4
`;

const Title = tw.h1`
text-4xl
font-bold
text-gray-800
`;

const SubTitle = tw.h1`
  text-2xl
  font-semibold
  text-gray-700
  capitalize
`;

const ControlTitle = tw.h5`
  font-semibold
  text-gray-800
  text-xl
`;

interface ButtonLimitProps {
  active: boolean;
}

const ButtonLimit = styled.button(({ active }: ButtonLimitProps) => [
  tw`text-gray-700 text-base mx-2`,
  active && tw`font-bold underline`,
]);

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

const Control = tw.h4`
  text-2xl
  text-gray-800
  font-semibold
`;

const CircleColumn = tw.div`
  lg:w-44 w-0
`;

const CircleColumnContainer = tw.div`
  hidden lg:block
`;

const CircleButton = styled.button(({ disabled }) => [
  tw`p-4
  rounded-full
  lg:flex
  hidden
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

interface InputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  isError?: boolean;
  value: string;
  onClean: () => void;
}

interface SearchIconProps {
  isFocus: boolean;
}

const TextLabel = styled.label.attrs({
  for: "text-input",
})`
  ${tw`text-sm font-medium text-gray-900 block mb-2`}
`;

const ErrorLabel = tw.button`
  text-lg text-red-700 italic underline my-4 cursor-pointer
`;

const StyledTextInput = styled.input.attrs((props: InputProps) => ({
  type: "text",
  id: "text-input",
  placeholder: props.placeholder || "Search",
  onChange: props.onChange,
}))`
  ${tw`bg-gray-50 border border-r-0 border-gray-300 text-gray-900 text-sm rounded-lg rounded-br-none rounded-tr-none ring-transparent focus:border-red-400 outline-none block w-full xl:w-1/2 p-2.5 ml-2 mb-4`}
`;

const SearchIcon = styled.div(({ isFocus }: SearchIconProps) => [
  `height: 42px;width: 42px;`,
  tw`flex justify-center items-center bg-gray-50 border-gray-300 border border-l-0 rounded-lg rounded-bl-none rounded-tl-none p-2.5 cursor-pointer`,
  isFocus && tw`border-red-400 border`,
]);

const GoSearchStyled = styled(GoSearch)`
  animation: fadeLeft 0.2s ease-in forwards;
  @keyframes fadeLeft {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TextInput = (props: InputProps) => {
  const { isError, isLoading, onClean } = props;
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <Column>
      <Row justifyCenter>
        <StyledTextInput
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <SearchIcon isFocus={isFocused}>
          {isError ? (
            <GoCircleSlash size={32} className="text-red-700" />
          ) : null}
          {!isError && isLoading ? <Spinner /> : null}
          {!isError && isFocused && !isLoading ? (
            <GoSearchStyled size="32" className="text-red-400" />
          ) : null}
        </SearchIcon>
      </Row>
      <Row justifyCenter>
        {isError ? (
          <ErrorLabel onClick={onClean}>Pokemon not found</ErrorLabel>
        ) : null}
      </Row>
    </Column>
  );
};

export {
  Container,
  Shadow,
  Row,
  Column,
  PrimaryButton,
  Logo,
  MiniLogo,
  ControlTitle,
  ButtonLimit,
  Loading,
  CircleColumn,
  CircleColumnContainer,
  CircleButton,
  Title,
  SubTitle,
  Control,
  TextLabel,
  TextInput,
};
