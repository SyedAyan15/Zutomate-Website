'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';

const BLUE_DOT = '#8fb6ff';

const TOOLS = [
  { name: 'Clay',        icon: '/assets/tools/clay.png',       angle: 0,   rise:  0.8,  r: 3.5 },
  { name: 'Instantly',   icon: '/assets/tools/instantly.png',  angle: 13,  rise: -0.55, r: 4.15 },
  { name: 'HubSpot',     icon: '/assets/tools/hubspot.png',    angle: 27,  rise:  0.35, r: 3.5 },
  { name: 'Attio',       icon: '/assets/tools/attio.png',      angle: 40,  rise: -0.66, r: 4.15 },
  { name: 'n8n',         icon: '/assets/tools/n8n.png',        angle: 53,  rise:  0.6,  r: 3.5 },
  { name: 'Zapier',      icon: '/assets/tools/zapier.png',     angle: 67,  rise: -0.25, r: 4.15 },
  { name: 'Smartlead',   icon: '/assets/tools/smartlead.png',  angle: 80,  rise:  0.9,  r: 3.5 },
  { name: 'HeyReach',    icon: '/assets/tools/heyreach.png',   angle: 93,  rise: -0.65, r: 4.15 },
  { name: 'Apollo',      icon: '/assets/tools/apollo.png',     angle: 107, rise:  0.25, r: 3.5 },
  { name: 'Salesforge',  icon: '/assets/tools/salesforge.png', angle: 120, rise: -0.72, r: 4.15 },
  { name: 'LinkedIn',    icon: '/assets/tools/linkedin.png',   angle: 133, rise:  0.7,  r: 3.5 },
  { name: 'Lemlist',     icon: '/assets/tools/lemlist.png',    angle: 147, rise: -0.4,  r: 4.15 },
  { name: 'Make',        icon: '/assets/tools/make.png',       angle: 160, rise:  0.5,  r: 3.5 },
  { name: 'AI Ark',      icon: '/assets/tools/aiark.png',      angle: 173, rise: -0.6,  r: 4.15 },
  { name: 'Salesforce',  icon: '/assets/tools/salesforce.png', angle: 187, rise:  0.3,  r: 3.5 },
  { name: 'Prospeo',     icon: '/assets/tools/prospeo.png',    angle: 200, rise: -0.6,  r: 4.15 },
  { name: 'Trigify',     icon: '/assets/tools/trigify.png',    angle: 213, rise:  0.85, r: 3.5 },
  { name: 'RB2B',        icon: '/assets/tools/rb2b.png',       angle: 227, rise: -0.35, r: 4.15 },
  { name: 'Claude',      icon: '/assets/tools/claude.png',     angle: 240, rise:  0.45, r: 3.5 },
  { name: 'Common Room', icon: '/assets/tools/commonroom.png', angle: 253, rise: -0.68, r: 4.15 },
  { name: 'Figma',       icon: '/assets/tools/figma.png',      angle: 267, rise:  0.55, r: 3.5 },
  { name: 'Miro',        icon: '/assets/tools/miro.png',       angle: 280, rise: -0.5,  r: 4.15 },
  { name: 'Notion',      icon: '/assets/tools/notion.png',     angle: 293, rise:  0.75, r: 3.5 },
  { name: 'Nooks',       icon: '/assets/tools/nooks.png',      angle: 307, rise: -0.3,  r: 4.15 },
  { name: 'Pinecone',    icon: '/assets/tools/pinecone.png',   angle: 320, rise:  0.4,  r: 3.5 },
  { name: 'Supabase',    icon: '/assets/tools/supabase.png',   angle: 333, rise: -0.62, r: 4.15 },
  { name: 'ChatGPT',     icon: '/assets/tools/chatgpt.png',    angle: 347, rise:  0.65, r: 3.5 },
];

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function Earth({ paused }: { paused: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const [dots, setDots] = useState<{ land: Float32Array; ocean: Float32Array } | null>(null);
  useFrame((_, dt) => {
    if (!paused && ref.current) ref.current.rotation.y += dt * 0.12;
  });

  /* Sample the local land-mask (black = land) to split dots into land/ocean layers */
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/earth-land.jpg';
    img.onload = () => {
      const W = 512, H = 256;
      const cv = document.createElement('canvas');
      cv.width = W;
      cv.height = H;
      const cx = cv.getContext('2d');
      if (!cx) return;
      cx.drawImage(img, 0, 0, W, H);
      const data = cx.getImageData(0, 0, W, H).data;
      // ring sampling: fixed latitude rows, dots along each ring at the same
      // arc spacing as the row gap — every dot is equidistant from its neighbours.
      // The full sphere is dotted; land dots render bright, ocean dots faint.
      const rows = 200;
      const land: number[] = [];
      const ocean: number[] = [];
      for (let ri = 0; ri < rows; ri++) {
        const lat = -90 + (ri + 0.5) * (180 / rows);
        const ringR = Math.sin(((90 - lat) * Math.PI) / 180);
        const cols = Math.max(1, Math.round(2 * rows * ringR));
        for (let ci = 0; ci < cols; ci++) {
          const lon = -180 + (ci + 0.5) * (360 / cols);
          const mcol = Math.min(W - 1, Math.floor(((lon + 180) / 360) * W));
          const mrow = Math.min(H - 1, Math.floor(((90 - lat) / 180) * H));
          const v = latLonToVec3(lat, lon, 2);
          (data[(mrow * W + mcol) * 4] < 128 ? land : ocean).push(v.x, v.y, v.z);
        }
      }
      setDots({ land: new Float32Array(land), ocean: new Float32Array(ocean) });
    };
  }, []);

  return (
    <group ref={ref} rotation={[0, 4.0, 0]}>
      {/* dark core — occludes far-side dots, gives the sphere depth */}
      <mesh>
        <sphereGeometry args={[1.96, 48, 48]} />
        <meshBasicMaterial color="#101f36" />
      </mesh>
      {/* full dotted sphere — faint ocean grid, bright continents */}
      {dots && (
        <>
          <points key={`o${dots.ocean.length}`}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[dots.ocean, 3]} />
            </bufferGeometry>
            <pointsMaterial color={BLUE_DOT} size={0.016} sizeAttenuation transparent opacity={0.22} depthWrite={false} />
          </points>
          <points key={`l${dots.land.length}`}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[dots.land, 3]} />
            </bufferGeometry>
            <pointsMaterial color={BLUE_DOT} size={0.016} sizeAttenuation transparent opacity={0.9} depthWrite={false} />
          </points>
        </>
      )}
    </group>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.1, 64, 64]} />
      <meshStandardMaterial color="#4488ff" transparent opacity={0.06} side={THREE.BackSide} />
    </mesh>
  );
}

function ToolNodes({ paused }: { paused: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!paused && ref.current) ref.current.rotation.y += dt * 0.22;
  });

  return (
    <group ref={ref}>
      {TOOLS.map((tool) => {
        const rad = (tool.angle * Math.PI) / 180;
        return (
          <group key={tool.name} position={[Math.cos(rad) * tool.r, tool.rise, Math.sin(rad) * tool.r]}>
            <mesh>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.8} />
            </mesh>
            <Html center>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(13,27,46,0.70)',
                border: '1px solid rgba(255,255,255,0.16)',
                backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
                boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset, 0 14px 30px -14px rgba(0,0,0,0.65)',
                userSelect: 'none', pointerEvents: 'none',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  width={19}
                  height={19}
                  style={{ borderRadius: 4, display: 'block' }}
                />
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function GlobeCanvas() {
  const [paused, setPaused] = useState(false);
  const pointerStart = useRef({ x: 0, y: 0 });
  return (
    <div
      style={{ width: '100%', height: '620px', position: 'relative', cursor: paused ? 'grab' : 'pointer' }}
      onPointerDown={e => { pointerStart.current = { x: e.clientX, y: e.clientY }; }}
      onPointerUp={e => {
        const dx = e.clientX - pointerStart.current.x;
        const dy = e.clientY - pointerStart.current.y;
        if (Math.sqrt(dx * dx + dy * dy) < 6) setPaused(p => !p);
      }}
    >
      <Canvas camera={{ position: [0, 0.5, 7], fov: 42 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#fff8f0" />
        <pointLight position={[-6, -2, -4]} intensity={0.45} color="#dbe6f5" />
        <Stars radius={130} depth={60} count={3000} factor={3} saturation={0} fade />
        <Earth paused={paused} />
        <Atmosphere />
        <ToolNodes paused={paused} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI * 0.25} maxPolarAngle={Math.PI * 0.75} rotateSpeed={0.5} />
      </Canvas>
      <div style={{
        position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        fontSize: 11, color: 'rgba(255,255,255,0.28)', fontFamily: 'DM Sans, sans-serif',
        letterSpacing: '0.5px', pointerEvents: 'none', userSelect: 'none',
      }}>
        {paused ? 'DRAG TO EXPLORE  ·  CLICK TO RESUME' : 'CLICK TO PAUSE  ·  DRAG TO ROTATE'}
      </div>
    </div>
  );
}
