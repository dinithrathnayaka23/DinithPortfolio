"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((material) => material.dispose());
      } else {
        child.material.dispose();
      }
    }
  });
}

export default function ProfileSceneCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 5.6);

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xffffff, 1.15);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xf8fbff, 2.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const blueLight = new THREE.PointLight(0x3273ff, 8, 8);
    blueLight.position.set(-3, -2, 3);
    scene.add(blueLight);

    const warmLight = new THREE.PointLight(0xf8c24e, 3.4, 8);
    warmLight.position.set(3, 1.2, 2.5);
    scene.add(warmLight);

    const backCard = new THREE.Mesh(
      new THREE.BoxGeometry(3.25, 3.25, 0.08),
      new THREE.MeshStandardMaterial({
        color: 0x07142e,
        roughness: 0.42,
        metalness: 0.36,
        emissive: 0x102a68,
        emissiveIntensity: 0.42,
      })
    );
    backCard.position.z = -0.06;
    root.add(backCard);

    const portrait = new THREE.Mesh(
      new THREE.PlaneGeometry(3.08, 3.08, 64, 64),
      new THREE.MeshBasicMaterial({
        transparent: true,
        alphaTest: 0.04,
        color: 0xffffff,
      })
    );
    portrait.position.set(0, -0.02, 0.08);
    root.add(portrait);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/myportfoliopic-removebg-preview.png", (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
      portrait.material.map = texture;
      portrait.material.needsUpdate = true;
    });

    const blueRing = new THREE.Mesh(
      new THREE.RingGeometry(1.86, 1.92, 192),
      new THREE.MeshBasicMaterial({
        color: 0x32a7ff,
        transparent: true,
        opacity: 0.46,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      })
    );
    blueRing.position.z = 0.02;
    root.add(blueRing);

    const goldRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.93, 0.012, 14, 180),
      new THREE.MeshBasicMaterial({
        color: 0xf8c24e,
        transparent: true,
        opacity: 0.58,
        blending: THREE.AdditiveBlending,
      })
    );
    goldRing.rotation.set(Math.PI / 2.3, 0, Math.PI / 5);
    root.add(goldRing);

    const violetRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.01, 14, 180),
      new THREE.MeshBasicMaterial({
        color: 0xbfa5ff,
        transparent: true,
        opacity: 0.48,
        blending: THREE.AdditiveBlending,
      })
    );
    violetRing.rotation.set(Math.PI / 2.15, Math.PI / 8, -Math.PI / 4);
    root.add(violetRing);

    const dotGroup = new THREE.Group();
    Array.from({ length: 28 }).forEach((_, index) => {
      const angle = (index / 28) * Math.PI * 2;
      const radius = 2.05 + (index % 3) * 0.16;
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.028 + (index % 4) * 0.006, 12, 12),
        new THREE.MeshBasicMaterial({
          color: index % 3 === 0 ? 0xf8c24e : index % 3 === 1 ? 0x32a7ff : 0xbfa5ff,
          transparent: true,
          opacity: 0.86,
        })
      );
      dot.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (index % 5) * 0.06 - 0.12
      );
      dotGroup.add(dot);
    });
    scene.add(dotGroup);

    const sparkleGroup = new THREE.Group();
    Array.from({ length: 64 }).forEach((_, index) => {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.01 + Math.random() * 0.018, 8, 8),
        new THREE.MeshBasicMaterial({
          color: index % 4 === 0 ? 0xf8c24e : 0x32a7ff,
          transparent: true,
          opacity: 0.42 + Math.random() * 0.4,
          blending: THREE.AdditiveBlending,
        })
      );
      dot.position.set(
        (Math.random() - 0.5) * 4.2,
        (Math.random() - 0.5) * 4.2,
        (Math.random() - 0.5) * 1.6
      );
      sparkleGroup.add(dot);
    });
    scene.add(sparkleGroup);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    canvas.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = width < 360 ? 6.1 : 5.55;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const time = clock.getElapsedTime();

      root.rotation.y = pointer.x * 0.24 + Math.sin(time * 0.45) * 0.08;
      root.rotation.x = -pointer.y * 0.14 + Math.cos(time * 0.38) * 0.04;
      root.position.y = Math.sin(time * 0.9) * 0.08;
      portrait.position.z = 0.08 + Math.sin(time * 1.4) * 0.025;
      dotGroup.rotation.z = time * 0.14;
      dotGroup.rotation.y = Math.sin(time * 0.35) * 0.18;
      sparkleGroup.rotation.z = -time * 0.045;
      goldRing.rotation.z = Math.PI / 5 + time * 0.12;
      violetRing.rotation.z = -Math.PI / 4 - time * 0.1;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      disposeObject(scene);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="relative z-0 h-full w-full"
      aria-label="Animated 3D profile portrait"
    />
  );
}
