import React from 'react';
import css from './ButtonAddTransaction.module.css';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

export const ButtonAddTransaction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
      const handleCloseModal = () => {
        console.log('modal is closed');
        setIsModalOpen(false);
      };

    const handleClick = () => {
       
         setIsModalOpen(true);
      console.log('modal is open');
    };
    return (
      <div>
        <button className={css.button} onClick={handleClick}>
          <svg
            className={css.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="73"
            viewBox="0 0 74 73"
            fill="none"
          >
            <g filter="url(#filter0_d_7_35)">
              <circle cx="37" cy="31" r="22" fill="#24CCA7" />
            </g>
            <path d="M37 21V41" stroke="white" stroke-width="2" />
            <path d="M27 31L47 31" stroke="white" stroke-width="2" />
            <defs>
              <filter
                id="filter0_d_7_35"
                x="0"
                y="0"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.141176 0 0 0 0 0.8 0 0 0 0 0.654902 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_7_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_7_35"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <ModalAddTransaction isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    );
};
