'use client'
import React from 'react';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type OrderData = {
  label: string;
  value: number;
};

type ModalProps = {
  onClose: () => void;
  data: OrderData[];
};

export default function CustomModal({ onClose, data }: ModalProps) {
  return (
    <div className='absolute overflow-hidden inset-0 flex items-center justify-center p-6 bg-black/10'>
      <div className='bg-white p-6 md:p-10 md:pb-20 py-10 w-full md:max-w-2xl'>
        <h2 className='capitalize font-semibold'>your order details</h2>
        <hr className='my-12'/>

        <div className='grid grid-cols-2 gap-6 mb-12'>
          {data.map((payload, index) => (
            <div key={index}>
              <p className='text-gray uppercase font-semibold text-xs w-min'>{payload.label}</p>
              <p className='font-semibold'>
                {payload.value}
                {payload.label === "risk" ? "$" : ""}
              </p>
            </div>
          ))}
        </div>

        <div className='flex justify-center md:mt-32'>
          <Button onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="capitalize font-semibold text-blue border-2 border-blue p-2 mx-auto w-full rounded-sm md:w-xs cursor-pointer">
      close
    </button>
  );
};
