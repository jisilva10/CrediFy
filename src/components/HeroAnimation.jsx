import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const textList = [
    "Score Crediticio",
    "CrediPoints",
    "Libertad Financiera",
    "Decisiones Seguras",
    "Salud Financiera",
    "Ahorro de Intereses",
    "Control Absoluto",
    "Metas Cumplidas",
    "Ascenso Financiero"
];

export default function HeroAnimation() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Remove ANY existing canvas to prevent the "ghost" double animation from Hot Reloads.
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // 1. ESCENA
        const scene = new THREE.Scene();

        const aspect = width / height;
        const d = 22;
        const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 2000);
        camera.position.set(35, 35, 35);

        // Alpha MUST be true to let the Tailwind dark card background show through perfectly
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // 2. MATERIALES (Monochrome White & Dark Lines)
        const bodyMat = new THREE.MeshBasicMaterial({
            color: 0xffffff, // White
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });

        // Lineas oscuras para estilo arquitectonico
        const lineMat = new THREE.LineBasicMaterial({ color: 0x1e293b }); // Slate 800

        // Brand colors to cycle through on the text blocks
        const brandColors = ['#1E293B', '#10B981', '#2563EB']; // Deep Blue, Emerald Green, Electric Blue

        // 3. TEXTOS
        const textMaterials = textList.map((text, index) => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024; canvas.height = 1024;
            const ctx = canvas.getContext('2d');

            // Fondo de etiqueta debe coincidir con el bloque blanco
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 1024, 1024);

            // Cycle through brand colors
            ctx.fillStyle = brandColors[index % brandColors.length];
            const fontSize = 160;
            ctx.font = `900 ${fontSize}px "Outfit", "Inter", sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const words = text.split(" ");
            const lineHeight = fontSize * 0.95;
            const startY = (canvas.height / 2) - ((words.length - 1) * lineHeight / 2);
            words.forEach((word, i) => ctx.fillText(word, canvas.width / 2, startY + (i * lineHeight)));

            const tex = new THREE.CanvasTexture(canvas);
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
            return new THREE.MeshBasicMaterial({ map: tex, transparent: true });
        });

        // 4. MEDIDAS - AJUSTE DE GROSOR
        const W = 16, H = 10, Depth = 16, H_pillar = 800;
        const R = 4.2, T_coin = 1.6;

        // GROSOR DE LÍNEA MÁS FINO para más elegancia
        const t = 0.4;

        // 5. CREADOR DE BLOQUES (Líneas 3D Estilizadas Dark Mode)
        function createSleekBlock(index) {
            const group = new THREE.Group();

            // Cuerpo Oscuro
            const body = new THREE.Mesh(new THREE.BoxGeometry(W, H_pillar, Depth), bodyMat);
            body.position.set(W / 2, -H_pillar / 2, 0);
            group.add(body);

            const addLine = (ew, eh, ed, x, y, z) => {
                const l = new THREE.Mesh(new THREE.BoxGeometry(ew, eh, ed), lineMat);
                l.position.set(x, y, z);
                group.add(l);
            };

            // Marco Superior
            addLine(W + t, t, t, W / 2, 0, Depth / 2);
            addLine(W + t, t, t, W / 2, 0, -Depth / 2);
            addLine(t, t, Depth + t, 0, 0, 0);
            addLine(t, t, Depth + t, W, 0, 0);

            // Pilares Verticales (Finos)
            addLine(t, H_pillar, t, W, -H_pillar / 2, Depth / 2); // Derecha
            addLine(t, H_pillar, t, W, -H_pillar / 2, -Depth / 2);
            addLine(t, H + t, t, 0, -H / 2, Depth / 2); // Izquierda
            addLine(t, H + t, t, 0, -H / 2, -Depth / 2);

            // Texto
            const label = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.9, W * 0.9), textMaterials[0]);
            label.position.set(W / 2, -H / 1.1, Depth / 2 + t / 2 + 0.1);
            group.add(label);

            return { group, label, baseIndex: index };
        }

        const stepsGroup = new THREE.Group();
        scene.add(stepsGroup);

        const activeBlocks = [];
        for (let i = -6; i <= 12; i++) {
            const b = createSleekBlock(i);
            b.group.position.set(i * W, i * H, 0);
            stepsGroup.add(b.group);
            activeBlocks.push(b);
        }

        // 6. LA MONEDA (Con contorno fino)

        // Cargar logo específico del usuario desde Imgur
        const texLoader = new THREE.TextureLoader();
        const logoTexture = texLoader.load('https://i.imgur.com/VuuFfLy.png', (tex) => {
            tex.generateMipmaps = true;
            tex.minFilter = THREE.LinearMipmapLinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        });

        // Tamaño proporcional para que no se desborde fuera del radio R = 4.2
        const logoGeo = new THREE.PlaneGeometry(R * 1.5, R * 1.5);
        const logoPlaneMat = new THREE.MeshBasicMaterial({
            map: logoTexture,
            transparent: true,
            side: THREE.FrontSide,
            polygonOffset: true,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -1
        });

        function createSleekCoin() {
            const shape = new THREE.Shape();
            const segs = 72;
            for (let i = 0; i < segs * 2; i++) {
                const angle = (i / (segs * 2)) * Math.PI * 2;
                const currR = (i % 2 === 0) ? R : R - 0.25;
                const x = Math.cos(angle) * currR;
                const y = Math.sin(angle) * currR;
                if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
            }
            shape.closePath();

            const group = new THREE.Group();

            // Cuerpo Oscuro
            const geo = new THREE.ExtrudeGeometry(shape, { depth: T_coin, bevelEnabled: false, curveSegments: 64 });
            geo.translate(0, 0, -T_coin / 2);
            const bodyMesh = new THREE.Mesh(geo, bodyMat);
            group.add(bodyMesh);

            // Contorno (Más sutil ahora)
            const outlineGeo = geo.clone();
            const scaleFactor = 1.025; // Reducido para que la línea sea más fina
            outlineGeo.scale(scaleFactor, scaleFactor, 1.01);
            const bodyOutline = new THREE.Mesh(outlineGeo, new THREE.MeshBasicMaterial({ color: 0xe2e8f0, side: THREE.BackSide }));
            group.add(bodyOutline);

            // Líneas de los dientes
            const edgesGeo = new THREE.EdgesGeometry(geo, 15);
            const edges = new THREE.LineSegments(edgesGeo, lineMat);
            group.add(edges);

            // Anillos faciales
            const points = shape.getPoints();
            const loopGeo = new THREE.BufferGeometry().setFromPoints(points);
            const frontLoop = new THREE.LineLoop(loopGeo, lineMat);
            frontLoop.position.z = T_coin / 2 + 0.01;
            group.add(frontLoop);

            // Agregamos los Logos (Frente y Reverso) extra puros para evitar que se vea vacía e inyectar marca
            const logoFront = new THREE.Mesh(logoGeo, logoPlaneMat);
            logoFront.position.z = T_coin / 2 + 0.05;
            group.add(logoFront);

            const logoBack = new THREE.Mesh(logoGeo, logoPlaneMat);
            logoBack.position.z = -T_coin / 2 - 0.05;
            logoBack.rotation.y = Math.PI;
            logoBack.rotation.z = Math.PI;
            group.add(logoBack);

            return group;
        }

        const coin = createSleekCoin();
        coin.position.z = (Depth / 2) - T_coin;
        stepsGroup.add(coin);

        // Center LookAt explicitly relative to the blocks as asked
        camera.lookAt(W / 2, H / 2, 0);

        // 7. ANIMACIÓN
        let time = 0;
        const speed = 0.50;
        const L1 = W - (2 * R), L2 = H - R, L3 = (Math.PI * R) / 2, L4 = R;
        const totalD = L1 + L2 + L3 + L4;
        let animationFrameId;

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            time += 0.015 * speed;
            const p = time % 1;
            const cycle = Math.floor(time);

            stepsGroup.position.set(-p * W, -p * H, 0);

            activeBlocks.forEach(b => {
                const vIdx = b.baseIndex + cycle;
                const tIdx = ((vIdx % textList.length) + textList.length) % textList.length;
                b.label.material = textMaterials[tIdx];
            });

            const d = p * totalD;
            let cx, cy;
            if (d <= L1) { cx = R + d; cy = R; }
            else if (d <= L1 + L2) { cx = W - R; cy = R + (d - L1); }
            else if (d <= L1 + L2 + L3) {
                const th = (d - (L1 + L2)) / R;
                cx = W - R * Math.cos(th); cy = H + R * Math.sin(th);
            } else { cx = W + (d - (L1 + L2 + L3)); cy = H + R; }

            coin.position.x = cx;
            coin.position.y = cy;
            coin.rotation.z = - (time * totalD) / R;

            renderer.render(scene, camera);
        }

        // 8. HANDLE RESIZE
        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            const aspect = w / h;
            camera.left = -d * aspect;
            camera.right = d * aspect;
            camera.top = d;
            camera.bottom = -d;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);
        animate();

        // 9. CLEANUP MEMORY ON UNMOUNT OR REFRESH
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            mountRef.current?.removeChild(renderer.domElement);
            scene.traverse((child) => {
                if (child.isMesh || child.isLineSegments || child.isLineLoop) {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                        else child.material.dispose();
                    }
                }
            });
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w-full flex justify-center py-6">
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[400px] md:h-[480px] lg:h-[500px] rounded-3xl group">

                {/* Dot Grid expandido: sangra hacia los lados y mucho más hacia abajo, con difuminado suave radial */}
                <div className="absolute -inset-x-12 sm:-inset-x-24 -top-8 -bottom-32 z-0 opacity-100 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />

                {/* Subtle soft glows (light theme) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

                {/* Top mask only for falling blocks */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-50/90 to-transparent z-20 pointer-events-none" />

                {/* 3D Canvas Container (z-index increased to be visible over background blur) */}
                <div
                    ref={mountRef}
                    className="absolute inset-0 z-10 bg-transparent flex items-center justify-center opacity-95 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02] [&>canvas]:w-full [&>canvas]:h-full"
                />
            </div>
        </div>
    );
}
