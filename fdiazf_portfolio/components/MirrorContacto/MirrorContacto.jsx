import React from 'react';
import styles from './MirrorContacto.module.scss';


const MirrorContacto = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blackBorder}>
        <div className={styles.background}>
          <div className={styles.ferSvg}>
            <svg width="311" height="472" viewBox="0 0 311 472" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.2091 466.929C37.2154 466.929 36.2548 466.482 35.6254 465.704C34.9961 464.926 34.7476 463.899 34.9629 462.922L55.1354 368.651C55.3176 367.79 55.8475 367.028 56.5928 366.548C57.1228 366.2 57.7522 366.034 58.365 366.034C58.6134 366.034 58.8618 366.067 59.1102 366.117L85.4106 372.212C87.1662 372.626 88.2758 374.348 87.9115 376.104L69.8093 464.28C69.4946 465.82 68.1365 466.929 66.5631 466.929H38.2091Z" fill="black" />
              <path d="M58.3809 369.346L84.6812 375.441L66.579 463.617H38.2084L58.3809 369.346ZM58.3809 362.722C57.1387 362.722 55.8966 363.069 54.8201 363.749C53.3129 364.709 52.2695 366.216 51.8886 367.955L31.7162 462.226C31.3021 464.18 31.7824 466.217 33.0411 467.774C34.2998 469.331 36.1879 470.225 38.1919 470.225H66.579C69.7258 470.225 72.442 468.006 73.0713 464.925L91.1735 376.75C91.9022 373.222 89.6829 369.777 86.1718 368.966L59.8715 362.871C59.3746 362.771 58.8777 362.722 58.3809 362.722Z" fill="black" />
              <path d="M244.57 466.929C242.997 466.929 241.639 465.82 241.324 464.28L223.222 376.104C222.857 374.348 223.967 372.609 225.723 372.212L252.023 366.117C252.271 366.051 252.52 366.034 252.768 366.034C253.398 366.034 254.01 366.216 254.54 366.548C255.286 367.028 255.816 367.773 255.998 368.651L276.17 462.922C276.386 463.899 276.137 464.926 275.508 465.704C274.878 466.482 273.934 466.929 272.941 466.929H244.57Z" fill="black" />
              <path d="M252.768 369.346L272.941 463.617H244.554L226.451 375.441L252.768 369.346ZM252.768 362.722C252.271 362.722 251.775 362.771 251.278 362.887L224.977 368.982C221.483 369.794 219.264 373.255 219.976 376.766L238.078 464.942C238.707 468.022 241.423 470.242 244.57 470.242H272.957C274.961 470.242 276.849 469.331 278.108 467.791C279.367 466.234 279.847 464.197 279.433 462.242L259.261 367.972C258.896 366.233 257.836 364.726 256.329 363.765C255.253 363.069 254.01 362.722 252.768 362.722Z" fill="black" />
              <path d="M82.3956 468.62C80.7891 468.62 79.4145 467.477 79.1329 465.887C74.5121 440.233 80.5738 405.221 86.8508 379.219L50.4973 370.805C49.5202 370.573 48.6921 369.911 48.2449 369C47.8143 368.089 47.8143 367.029 48.2615 366.118L76.5327 308.466C75.8537 308.632 75.274 308.681 74.7937 308.681C74.2471 308.681 73.7006 308.615 73.2037 308.466C65.7178 306.379 61.6435 291.474 59.6561 280.692C55.88 286.19 51.6401 290.745 47.9965 290.745C46.6715 290.745 45.4294 290.231 44.4853 289.287C42.7463 287.548 38.1587 282.977 32.362 236.405C25.406 233.441 3.31238 221.632 3.31238 191.423C3.31238 185.693 5.61449 181.436 9.8709 179.117C4.53796 157.603 19.2284 111.528 26.8966 89.8486C26.731 89.7161 26.5653 89.5671 26.3997 89.4346C21.663 85.3769 6.62476 71.6636 12.0736 65.2873C12.7692 64.4757 14.0611 63.4986 16.3135 63.4986C18.0525 63.4986 20.0731 64.0948 22.1599 65.0057C20.6196 59.6065 21.1827 56.0457 23.8161 54.4226C24.5779 53.9423 25.4888 53.6939 26.4328 53.6939C32.1301 53.6939 39.5168 63.3661 43.3095 68.9474C49.9011 60.8321 62.0741 46.3735 75.3071 33.1737C95.4795 13.084 110.452 3.3125 121.051 3.3125C123.635 3.3125 125.987 3.89217 128.04 5.0515C132.678 7.66829 131.353 15.7174 128.587 23.5677C144.437 20.3879 188.491 12.2394 223.636 12.2394C255.832 12.2394 273.404 19.1623 275.872 32.8259C276.071 33.9355 276.038 35.6248 274.762 37.397C272.195 40.9578 264.892 43.3593 258.565 44.8333C270.854 52.0211 291.026 65.4694 291.126 76.3175C291.175 81.0708 284.799 86.1884 278.986 89.8652C289.155 97.5168 310.039 120.803 296.657 177.544C303.713 178.968 307.654 183.871 307.654 191.423C307.654 221.731 285.428 233.523 278.555 236.438C272.609 283.375 268.32 287.664 266.68 289.304C265.736 290.248 264.494 290.761 263.169 290.761C259.526 290.761 255.286 286.19 251.51 280.708C249.522 291.49 245.448 306.396 237.962 308.483C237.448 308.615 236.918 308.698 236.372 308.698C235.875 308.698 235.312 308.648 234.633 308.483L262.921 366.135C263.368 367.046 263.368 368.106 262.937 369.017C262.507 369.927 261.679 370.59 260.685 370.822L224.315 379.235C230.592 405.221 236.653 440.249 232.033 465.904C231.751 467.477 230.377 468.637 228.77 468.637H82.3956V468.62Z" fill="black" />
              <path d="M121.051 6.62477C123.022 6.62477 124.811 7.03882 126.401 7.93317C130.839 10.434 123.27 28.0559 123.27 28.0559C123.27 28.0559 180.045 15.5682 223.636 15.5682C249.158 15.5682 270.158 19.8578 272.609 33.422C273.752 39.7321 248.909 43.2598 248.909 43.2598C248.909 43.2598 287.697 63.5813 287.813 76.3505C287.863 81.4185 272.609 89.7657 272.609 89.7657C272.609 89.7657 310.934 107.222 292.732 179.647C292.666 179.945 292.451 180.194 292.202 180.426C298.214 180.475 304.342 182.678 304.342 191.423C304.342 225.077 275.557 234.037 275.557 234.037L275.773 231.917C272.725 256.826 268.618 282.663 264.328 286.952C263.997 287.283 263.6 287.449 263.153 287.449C258.664 287.449 249.572 271.301 249.572 271.301C249.572 271.301 245.779 302.852 237.051 305.286C236.836 305.352 236.587 305.386 236.339 305.386C233.391 305.386 228.886 301.195 225.59 297.635L259.906 367.576L220.274 376.751C226.253 400.749 233.556 438.527 228.737 465.291H82.3956C77.5761 438.51 84.8965 400.733 90.8588 376.751L51.2261 367.576L85.5424 297.635C82.2466 301.179 77.7252 305.386 74.7937 305.386C74.5453 305.386 74.3134 305.352 74.0815 305.286C65.3534 302.852 61.5607 271.301 61.5607 271.301C61.5607 271.301 52.4682 287.449 47.9799 287.449C47.5493 287.449 47.1518 287.3 46.804 286.952C42.3323 282.48 38.3243 258.118 35.3929 234.037C35.3597 234.037 6.60821 225.06 6.60821 191.423C6.60821 185.063 9.85435 182.165 13.9286 181.039C6.11135 161.363 23.8657 108.017 30.7886 88.772C30.0433 88.1757 29.2981 87.563 28.5528 86.917C18.7812 78.5698 12.5208 69.8417 14.5745 67.4402C14.9389 67.0262 15.5185 66.8274 16.2969 66.8274C18.864 66.8274 23.4848 68.997 28.7681 72.6406C24.9257 64.84 23.4683 58.5299 25.5385 57.2546C25.7869 57.1056 26.085 57.0227 26.4163 57.0227C29.6459 57.0227 36.5191 64.1278 42.647 74.0484C42.7629 74.2472 42.8788 74.4293 42.9948 74.6281C53.8263 61.0473 98.5766 6.62477 121.051 6.62477ZM120.985 0C116.662 0 103.744 0.182182 72.9884 30.8383C61.3454 42.4482 50.5139 55.0353 43.5413 63.4819C38.7218 56.9896 32.362 50.398 26.4494 50.398C24.8926 50.398 23.3855 50.812 22.0936 51.6236C19.2118 53.3957 17.8703 56.2775 18.0359 60.3351C17.4397 60.2523 16.8766 60.2026 16.3301 60.2026C13.5973 60.2026 11.1959 61.246 9.5728 63.1507C2.9149 70.9348 14.5745 83.4556 23.0376 90.9085C14.1439 116.248 2.33523 155.815 6.1776 177.577C2.18618 180.641 0 185.444 0 191.423C0 221.731 20.3381 234.534 29.3146 238.707C35.1444 284.65 39.848 289.337 42.1336 291.639C43.7069 293.212 45.7772 294.074 47.9965 294.074C49.5202 294.074 52.7332 294.074 57.9668 288.277C58.0165 288.509 58.0827 288.741 58.1324 288.989C61.4282 302.255 65.5521 309.228 71.4316 311.381L45.2969 364.661C44.4025 366.482 44.386 368.602 45.2638 370.424C46.125 372.246 47.7812 373.571 49.7521 374.035L82.8759 381.703C76.8142 407.639 71.3654 441.326 75.8868 466.483C76.4499 469.647 79.1992 471.932 82.4122 471.932H228.77C231.983 471.932 234.716 469.63 235.295 466.483C239.817 441.342 234.368 407.639 228.306 381.703L261.43 374.035C263.401 373.571 265.057 372.246 265.918 370.424C266.78 368.602 266.78 366.482 265.885 364.661L239.751 311.381C245.613 309.228 249.737 302.239 253.05 288.989C253.116 288.757 253.166 288.525 253.215 288.277C258.449 294.074 261.662 294.074 263.186 294.074C265.388 294.074 267.475 293.212 269.049 291.639C271.384 289.304 275.673 285.031 281.619 238.807C293.593 233.391 311 218.618 311 191.423C311 183.556 307.174 177.826 300.599 175.275C311.662 124.794 295.631 100.465 284.484 90.1797C291.159 85.3271 294.504 80.6897 294.471 76.3008C294.405 68.5002 287.3 60.0039 272.113 49.5699C270.291 48.3112 268.469 47.1187 266.713 45.9925C271.351 44.3694 275.425 42.1998 277.495 39.3512C279.035 37.2312 279.632 34.7138 279.185 32.2626C276.303 16.5619 258.151 8.94345 223.636 8.94345C191.191 8.94345 152.254 15.6013 133.29 19.2615C134.516 14.6076 136.189 5.86293 129.663 2.16961C127.113 0.728725 124.215 0 121.051 0C121.035 0 121.001 0 120.985 0Z" fill="black" />
              <path d="M228.753 465.308C233.573 438.527 226.252 400.749 220.29 376.768L259.923 367.592L223.221 292.782H87.9435L51.2422 367.592L90.875 376.768C84.8961 400.766 77.5923 438.544 82.4118 465.308H228.753Z" fill="#575756" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M97.2841 353.73C97.2841 353.73 94.2864 362.972 90.8581 376.752" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M213.864 353.73C213.864 353.73 216.862 362.972 220.29 376.752" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M58.3807 369.346L38.2083 463.616H66.5954L84.681 375.441L58.3807 369.346Z" fill="#F0D5D1" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M252.768 369.346L272.94 463.616H244.57L226.468 375.441L252.768 369.346Z" fill="#F0D5D1" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M272.626 89.7643C272.626 89.7643 287.879 81.4171 287.83 76.3491C287.714 63.5799 248.926 43.2584 248.926 43.2584C248.926 43.2584 273.769 39.7307 272.626 33.4206C265.985 -3.34689 123.287 28.0545 123.287 28.0545C123.287 28.0545 130.839 10.4492 126.401 7.93179C106.675 -3.21439 54.7703 59.87 43.0113 74.6101C42.8954 74.4114 42.7794 74.2292 42.6635 74.0305C35.9062 63.0996 28.2381 55.5805 25.555 57.2367C23.4848 58.5119 24.9588 64.822 28.7846 72.6227C21.8783 67.8694 16.1147 65.6336 14.5745 67.4223C12.5208 69.8237 18.7646 78.5519 28.5527 86.8991C29.298 87.545 30.0433 88.1578 30.7886 88.754C23.5345 108.943 4.32263 166.711 15.2701 183.704C17.2078 186.718 30.2752 182.312 30.2752 182.312C30.2752 182.312 37.5127 277.626 46.8205 286.934C50.6298 290.743 61.5772 271.283 61.5772 271.283C61.5772 271.283 65.3699 302.834 74.0981 305.268C78.9176 306.61 89.7491 292.747 89.7491 292.747C89.7491 292.747 112.157 336.09 128.206 336.719C134.301 336.951 144.304 325.822 144.304 325.822C144.304 325.822 150.2 341.837 155.583 341.837C160.965 341.837 166.861 325.822 166.861 325.822C166.861 325.822 176.865 336.951 182.96 336.719C198.992 336.09 221.416 292.747 221.416 292.747C221.416 292.747 232.231 306.61 237.067 305.268C245.796 302.834 249.588 271.283 249.588 271.283C249.588 271.283 260.536 290.727 264.345 286.934C272.99 278.289 280.89 182.312 280.89 182.312C280.89 182.312 292.02 182.577 292.749 179.629C310.95 107.221 272.626 89.7643 272.626 89.7643Z" fill="#5B453B" />
              <path d="M272.626 89.7643C272.626 89.7643 287.879 81.4171 287.83 76.3491C287.714 63.5799 248.926 43.2584 248.926 43.2584C248.926 43.2584 273.769 39.7307 272.626 33.4206C265.985 -3.34689 123.287 28.0545 123.287 28.0545C123.287 28.0545 130.839 10.4492 126.401 7.93179C106.675 -3.21439 54.7703 59.87 43.0113 74.6101C42.8954 74.4114 42.7794 74.2292 42.6635 74.0305C35.9062 63.0996 28.2381 55.5805 25.555 57.2367C23.4848 58.5119 24.9588 64.822 28.7846 72.6227C21.8783 67.8694 16.1147 65.6336 14.5745 67.4223C12.5208 69.8237 18.7646 78.5519 28.5527 86.8991C29.298 87.545 30.0433 88.1578 30.7886 88.754C23.5345 108.943 4.32263 166.711 15.2701 183.704C17.2078 186.718 30.2752 182.312 30.2752 182.312C30.2752 182.312 37.5127 277.626 46.8205 286.934C50.6298 290.743 61.5772 271.283 61.5772 271.283C61.5772 271.283 65.3699 302.834 74.0981 305.268C78.9176 306.61 89.7491 292.747 89.7491 292.747C89.7491 292.747 112.157 336.09 128.206 336.719C134.301 336.951 144.304 325.822 144.304 325.822C144.304 325.822 150.2 341.837 155.583 341.837C160.965 341.837 166.861 325.822 166.861 325.822C166.861 325.822 176.865 336.951 182.96 336.719C198.992 336.09 221.416 292.747 221.416 292.747C221.416 292.747 232.231 306.61 237.067 305.268C245.796 302.834 249.588 271.283 249.588 271.283C249.588 271.283 260.536 290.727 264.345 286.934C272.99 278.289 280.89 182.312 280.89 182.312C280.89 182.312 292.02 182.577 292.749 179.629C310.95 107.221 272.626 89.7643 272.626 89.7643Z" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M304.342 191.422C304.342 225.076 275.557 234.036 275.557 234.036L280.691 182.313C280.691 182.313 304.342 174.214 304.342 191.422Z" fill="#F0D5D1" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.62469 191.422C6.62469 225.076 35.4093 234.036 35.4093 234.036L30.2751 182.313C30.2751 182.313 6.62469 174.214 6.62469 191.422Z" fill="#F0D5D1" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.2751 182.312L29.5464 170.321" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M280.36 185.658L281.602 171.928" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M283.524 237.994C282.679 237.994 282 237.315 282 236.47V225.473C282 224.628 282.679 223.949 283.524 223.949C284.368 223.949 285.048 224.628 285.048 225.473V236.47C285.031 237.315 284.352 237.994 283.524 237.994Z" fill="#9D9D9C" />
              <path d="M191.29 253.297C191.29 256.693 189.137 265.487 189.137 265.487C189.137 265.487 191.29 274.298 191.29 277.693C191.29 281.088 189.137 289.899 189.137 289.899C189.137 289.899 191.29 298.694 191.29 302.089V302.271C191.29 305.666 189.137 314.461 189.137 314.461C189.137 314.461 191.29 323.272 191.29 326.667C191.29 328.373 190.743 331.42 190.213 334.037V334.053C187.713 335.66 185.278 336.654 182.959 336.737C176.865 336.985 166.861 325.855 166.861 325.855C166.861 325.855 160.965 341.871 155.582 341.871C150.2 341.871 144.304 325.855 144.304 325.855C144.304 325.855 134.3 336.985 128.206 336.737C125.887 336.654 123.452 335.66 120.951 334.053V334.037C120.421 331.42 119.875 328.373 119.875 326.667C119.875 323.272 122.045 314.461 122.045 314.461C122.045 314.461 119.875 305.666 119.875 302.271V302.089C119.875 298.694 122.045 289.899 122.045 289.899C122.045 289.899 119.875 281.088 119.875 277.693C119.875 274.298 122.045 265.487 122.045 265.487C122.045 265.487 119.875 256.693 119.875 253.297C119.875 249.902 122.045 241.091 122.045 241.091C122.045 241.091 119.875 232.297 119.875 228.902C119.875 228.388 119.925 227.759 120.007 227.047C130.574 222.923 140.71 219.097 149.04 217.64C150.63 222.608 152.966 225.755 155.582 225.755C158.199 225.755 160.534 222.625 162.108 217.673C170.455 219.18 180.607 223.089 191.174 227.295C191.257 227.908 191.29 228.455 191.29 228.902C191.29 232.297 189.137 241.091 189.137 241.091C189.137 241.091 191.29 249.902 191.29 253.297Z" fill="#9D9D9C" />
              <path d="M89.7491 292.764C89.7491 292.764 112.157 336.106 128.206 336.736C134.301 336.967 144.304 325.838 144.304 325.838C144.304 325.838 150.2 341.853 155.583 341.853C160.965 341.853 166.862 325.838 166.862 325.838C166.862 325.838 176.865 336.967 182.96 336.736C198.992 336.106 221.417 292.764 221.417 292.764" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M155.583 217.01C131.253 216.96 82.3456 250.001 60.7489 238.822C49.023 232.76 48.344 200.696 48.344 187.496C48.344 158.844 65.4525 119.924 65.4525 119.924C65.4525 119.924 95.7277 134.664 106.079 132.328C114.128 130.523 130.458 110.086 130.458 110.086C130.458 110.086 147.5 125.803 154.821 126.764C168.815 128.602 208.051 107.949 208.051 107.949C208.051 107.949 222.542 128.171 230.111 128.9C234.268 129.298 244.189 119.924 244.189 119.924C244.189 119.924 261.297 158.844 261.297 187.496C261.297 200.696 260.635 232.76 248.892 238.822C227.594 249.802 179.531 217.059 155.583 217.01Z" fill="#F0D5D1" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M126.451 211.544C133.695 211.544 139.568 205.671 139.568 198.427C139.568 191.182 133.695 185.31 126.451 185.31C119.206 185.31 113.334 191.182 113.334 198.427C113.334 205.671 119.206 211.544 126.451 211.544Z" fill="white" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M126.45 201.672C128.243 201.672 129.697 200.219 129.697 198.426C129.697 196.633 128.243 195.18 126.45 195.18C124.658 195.18 123.204 196.633 123.204 198.426C123.204 200.219 124.658 201.672 126.45 201.672Z" fill="black" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M184.699 211.544C191.943 211.544 197.816 205.671 197.816 198.427C197.816 191.182 191.943 185.31 184.699 185.31C177.454 185.31 171.582 191.182 171.582 198.427C171.582 205.671 177.454 211.544 184.699 211.544Z" fill="white" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M184.699 201.672C186.492 201.672 187.945 200.219 187.945 198.426C187.945 196.633 186.492 195.18 184.699 195.18C182.906 195.18 181.453 196.633 181.453 198.426C181.453 200.219 182.906 201.672 184.699 201.672Z" fill="black" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M204.407 173.337C205.221 173.337 205.881 172.677 205.881 171.863C205.881 171.049 205.221 170.389 204.407 170.389C203.593 170.389 202.933 171.049 202.933 171.863C202.933 172.677 203.593 173.337 204.407 173.337Z" fill="black" />
              <path d="M164.178 202.585C164.178 215.371 160.336 225.739 155.583 225.739C150.829 225.739 146.987 215.371 146.987 202.585" fill="#F0D5D1" />
              <path d="M164.178 202.585C164.178 215.371 160.336 225.739 155.583 225.739C150.829 225.739 146.987 215.371 146.987 202.585" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M165.006 235.874C165.006 244.403 160.783 251.31 155.583 251.31C150.382 251.31 146.159 244.403 146.159 235.874" stroke="black" stroke-width="3.31239" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MirrorContacto;
