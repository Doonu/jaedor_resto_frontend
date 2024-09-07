import React, { FC, SVGProps } from 'react';

interface SvgBoxProps extends SVGProps<SVGSVGElement> {
  color?: string | undefined;
}

export const Settings: FC<SvgBoxProps> = ({ color = '#FF5533', ...props }) => (
  <div>
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.6161 2.17992e-07C11.3251 -0.000285658 12.0041 0.280614 12.4983 0.77871C12.9925 1.27681 13.2599 1.94968 13.2383 2.57766L13.2468 2.72535C13.2641 2.87079 13.3124 3.01116 13.3908 3.14054C13.5435 3.39567 13.7935 3.58081 14.0857 3.65514C14.3779 3.72947 14.6882 3.68688 14.9821 3.51839L15.146 3.4355C16.3759 2.86897 17.8511 3.31918 18.5333 4.47928L19.1465 5.52174C19.1627 5.54922 19.1769 5.57762 19.1892 5.60674L19.2461 5.71842C19.7945 6.86519 19.4043 8.22927 18.3624 8.92228L18.1051 9.08068C17.9706 9.17256 17.8585 9.29258 17.7742 9.43678C17.6218 9.69291 17.58 9.99795 17.658 10.2844C17.736 10.5708 17.9272 10.8149 18.2174 10.9793L18.3843 11.0841C18.8887 11.4297 19.253 11.9391 19.4119 12.523C19.5912 13.1817 19.495 13.8833 19.1399 14.4804L18.4803 15.557L18.3808 15.7089C17.6058 16.8008 16.1011 17.1344 14.9527 16.485L14.8166 16.4163C14.6746 16.3541 14.5214 16.3199 14.382 16.316C14.0786 16.3146 13.7872 16.432 13.5727 16.6422C13.3582 16.8524 13.2383 17.1379 13.2391 17.4698L13.231 17.6414C13.12 18.9703 11.9845 20 10.6164 20H9.38106C7.93219 20 6.75765 18.8493 6.75912 17.4753L6.75063 17.3277C6.73337 17.1822 6.68504 17.0418 6.6027 16.9057C6.45336 16.65 6.20591 16.4633 5.91538 16.3871C5.62484 16.3109 5.31529 16.3516 5.01565 16.5213L4.83762 16.6084C4.2746 16.8565 3.63953 16.9023 3.04445 16.7366C2.37306 16.5497 1.80539 16.1083 1.47412 15.5224L0.83679 14.4442L0.751966 14.2844C0.171573 13.0841 0.626514 11.6412 1.78115 10.9875L1.88645 10.9228C2.19491 10.7137 2.37987 10.3688 2.37987 10C2.37987 9.59896 2.16149 9.22838 1.77948 9.01151L1.62449 8.91408C0.510007 8.15476 0.169493 6.68049 0.859895 5.50696L1.50918 4.46166C2.23128 3.23376 3.83155 2.81017 5.06235 3.50171L5.19559 3.5713C5.33141 3.63238 5.47895 3.6648 5.62101 3.66628C6.24742 3.66634 6.75775 3.17352 6.76724 2.54181L6.77575 2.3478C6.82704 1.74716 7.09307 1.1827 7.52796 0.754574C8.01861 0.27155 8.6855 2.17992e-07 9.38106 2.17992e-07H10.6161ZM10.6164 1.44774H9.38106C9.07863 1.44774 8.78866 1.56581 8.57533 1.77582C8.38625 1.96196 8.27058 2.20741 8.25028 2.43661L8.23685 2.7415C8.13339 4.07087 6.99969 5.11416 5.61326 5.11398C5.25588 5.11034 4.90355 5.03293 4.54427 4.87026L4.3519 4.77085C3.8038 4.46315 3.1049 4.64815 2.78057 5.19925L2.13128 6.24455C1.83377 6.75044 1.98256 7.39466 2.44324 7.70925L2.70395 7.871C3.42196 8.34666 3.85754 9.14295 3.85754 10C3.85754 10.8446 3.43413 11.634 2.70219 12.1296L2.54639 12.2256C2.03354 12.5163 1.83562 13.144 2.07398 13.6383L2.13027 13.7449L2.75952 14.8084C2.90728 15.0696 3.1552 15.2624 3.44842 15.344C3.70831 15.4164 3.98569 15.3964 4.20208 15.3018L4.3108 15.2497C4.91096 14.9066 5.62614 14.8126 6.29737 14.9886C6.96861 15.1645 7.54028 15.5959 7.87937 16.1768C8.06179 16.478 8.17721 16.8132 8.2219 17.1985L8.24205 17.552C8.30426 18.1145 8.79047 18.5523 9.38106 18.5523H10.6164C11.2137 18.5523 11.7099 18.1023 11.7565 17.5511L11.7621 17.4421C11.7588 16.7585 12.0345 16.1019 12.5279 15.6185C13.0212 15.1351 13.6914 14.865 14.4053 14.8686C14.7556 14.8778 15.1004 14.9547 15.4528 15.11L15.7687 15.2682C16.2647 15.4814 16.8529 15.3258 17.1511 14.9067L17.2236 14.7957L17.868 13.7436C18.0203 13.4875 18.0621 13.1824 17.9841 12.896C17.915 12.6422 17.7566 12.4207 17.5645 12.2882L17.2922 12.1195C16.7716 11.7748 16.3932 11.2563 16.2302 10.6574C16.0509 9.99866 16.1471 9.29707 16.4946 8.71262C16.6849 8.38716 16.9464 8.10733 17.2873 7.87532L17.448 7.77613C17.9601 7.4827 18.1578 6.85504 17.9212 6.35884L17.8505 6.22529L17.8378 6.19726L17.253 5.20208C16.9764 4.73175 16.4008 4.52853 15.9125 4.6891L15.8015 4.73265L15.6983 4.78415C15.1001 5.12941 14.3863 5.22736 13.7143 5.05641C13.0423 4.88546 12.4673 4.45965 12.1181 3.87616C11.9357 3.57504 11.8203 3.23984 11.7756 2.85454L11.7624 2.60249C11.7713 2.29923 11.6546 2.00536 11.4387 1.78783C11.2229 1.57029 10.9264 1.44774 10.6164 1.44774ZM10.0032 6.73182C11.8455 6.73182 13.339 8.19503 13.339 10C13.339 11.805 11.8455 13.2682 10.0032 13.2682C8.16095 13.2682 6.66748 11.805 6.66748 10C6.66748 8.19503 8.16095 6.73182 10.0032 6.73182ZM10.0032 8.17956C8.97705 8.17956 8.14516 8.9946 8.14516 10C8.14516 11.0054 8.97705 11.8204 10.0032 11.8204C11.0294 11.8204 11.8613 11.0054 11.8613 10C11.8613 8.9946 11.0294 8.17956 10.0032 8.17956Z" />
    </svg>
  </div>
);
