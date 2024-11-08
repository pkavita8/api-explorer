export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  height?: string;
  width?: string;
}

const ArrowRight = ({ ...props }: SvgIconProps) => {
  return (
    <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.44664 5.29019L2.20664 1.05019C2.11368 0.956464 2.00308 0.88207 1.88122 0.831301C1.75936 0.780533 1.62865 0.754395 1.49664 0.754395C1.36463 0.754395 1.23392 0.780533 1.11207 0.831301C0.990206 0.88207 0.879605 0.956464 0.786642 1.05019C0.600391 1.23756 0.49585 1.49101 0.49585 1.75519C0.49585 2.01938 0.600391 2.27283 0.786642 2.46019L4.32664 6.00019L0.786642 9.54019C0.600391 9.72756 0.49585 9.98101 0.49585 10.2452C0.49585 10.5094 0.600391 10.7628 0.786642 10.9502C0.880082 11.0429 0.990898 11.1162 1.11274 11.166C1.23457 11.2157 1.36504 11.241 1.49664 11.2402C1.62825 11.241 1.75871 11.2157 1.88055 11.166C2.00239 11.1162 2.1132 11.0429 2.20664 10.9502L6.44664 6.71019C6.54037 6.61723 6.61476 6.50663 6.66553 6.38477C6.7163 6.26291 6.74244 6.1322 6.74244 6.00019C6.74244 5.86818 6.7163 5.73747 6.66553 5.61562C6.61476 5.49376 6.54037 5.38316 6.44664 5.29019Z"
      fill="white"
    />
  </svg>
  );
};

export default ArrowRight;