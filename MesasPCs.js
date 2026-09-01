import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();
export function cargarMesasPCs(scene) {
    loader.load(
        "MesasPCs.glb",
        function (gltf) {
            const mesasPCs = gltf.scene;
            scene.add(mesasPCs);
            mesasPCs.traverse((obj) => {
                if (obj.isMesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            });
            console.log("Mesas y PCs cargados correctamente");
        },
        undefined,
        function (error) {
            console.error(
                "Error al cargar MesasPCs.glb:",
                error
            );
        }
    );
}