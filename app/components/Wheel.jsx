import dynamic from 'next/dynamic';

const Wheel = dynamic(
  () => import('react-custom-roulette').then((module) => module.Wheel),
  { ssr: false }
);

export default Wheel;