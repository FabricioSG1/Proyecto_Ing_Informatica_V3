import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();
export function cargarMonitores(scene) {
    loader.load(
        "Monitores.glb",
        function (gltf) {
            const monitores = gltf.scene;
            scene.add(monitores);
            monitores.traverse((obj) => {
                if (obj.isMesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            });
            console.log("Monitores cargados correctamente");
        },
        undefined,
        function (error) {
            console.error(
                "Error al cargar Monitores.glb:",
                error
            );
        }
    );
}