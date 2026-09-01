import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();
export function cargarPCs(scene) {
    loader.load(
        "PCs.glb",
        function (gltf) {
            const pcs = gltf.scene;
            scene.add(pcs);
            pcs.traverse((obj) => {
                if (obj.isMesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            });
            console.log("PCs cargados correctamente");
        },
        undefined,
        function (error) {
            console.error(
                "Error al cargar PCs.glb:",
                error
            );
        }
    );
}