import React, { FC, SVGProps } from 'react';

interface SvgBoxProps extends SVGProps<SVGSVGElement> {
  color?: string | undefined;
}

export const Home: FC<SvgBoxProps> = ({ color = '#FF5533', ...props }) => (
  <div>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.73037 0.788355C9.00037 -0.220645 10.7804 -0.260645 12.0894 0.668355L12.2504 0.788355L18.3394 5.65935C19.0094 6.17835 19.4204 6.94936 19.4904 7.78835L19.5004 7.98935V16.0984C19.5004 18.1884 17.8494 19.8884 15.7804 19.9984H13.7904C12.8394 19.9794 12.0704 19.2394 12.0004 18.3094L11.9904 18.1684V15.3094C11.9904 14.9984 11.7594 14.7394 11.4504 14.6884L11.3604 14.6784H8.68937C8.37037 14.6884 8.11037 14.9184 8.07037 15.2184L8.06037 15.3094V18.1594C8.06037 18.2184 8.04937 18.2884 8.04037 18.3384L8.03037 18.3594L8.01937 18.4284C7.90037 19.2794 7.20037 19.9284 6.33037 19.9894L6.20037 19.9984H4.41037C2.32037 19.9984 0.610366 18.3594 0.500366 16.2984V7.98935C0.509366 7.13835 0.880366 6.34835 1.50037 5.79835L7.73037 0.788355ZM11.3804 1.87835C10.6204 1.26835 9.54037 1.23935 8.74037 1.76835L8.58937 1.87835L2.50937 6.77936C2.16037 7.03835 1.95037 7.42836 1.90037 7.83836L1.88937 7.99835V16.0984C1.88937 17.4284 2.92937 18.5184 4.25037 18.5984H6.20037C6.42037 18.5984 6.61037 18.4494 6.63937 18.2394L6.66037 18.0594L6.67037 18.0084V15.3094C6.67037 14.2394 7.49037 13.3694 8.54037 13.2884H11.3604C12.4294 13.2884 13.2994 14.1094 13.3804 15.1594V18.1684C13.3804 18.3784 13.5304 18.5594 13.7304 18.5984H15.5894C16.9294 18.5984 18.0194 17.5694 18.0994 16.2584L18.1104 16.0984V7.99835C18.0994 7.56936 17.9204 7.16835 17.6104 6.86935L17.4804 6.75835L11.3804 1.87835Z" />
    </svg>
  </div>
);
