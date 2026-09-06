'use client';

import dynamic from 'next/dynamic';

const Beams = dynamic(() => import('@/components/Beams'), { ssr: false });

export default function BackgroundBeams() {
  return (
    <div 
      className="fixed inset-0 w-screen h-[100svh] min-h-screen pointer-events-none z-0 overflow-hidden"
      style={{
        height: '100svh',
        transform: 'translate3d(0, 0, 0)', 
        WebkitTransform: 'translate3d(0, 0, 0)',
      }}
    >
      <Beams
        beamWidth={3}
        beamHeight={30}
        beamNumber={20}
        lightColor="#2596be"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
        beamColor="#000000"
        backgroundColor="#080808"
      />
    </div>
  );
}