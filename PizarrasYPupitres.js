import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();
let pizarrasYPupitres = null;
export function cargarPizarrasYPupitres(scene) {
    loader.load(
        "PizarrasYPupitres.glb",
        function (gltf) {
            pizarrasYPupitres = gltf.scene;
            scene.add(pizarrasYPupitres);
            pizarrasYPupitres.traverse((obj) => {
                if (obj.isMesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            });
            console.log("Pizarras y pupitres cargados correctamente");
        },
        undefined,
        function (error) {
            console.error(
                "Error al cargar PizarrasYPupitres.glb:",
                error
            );
        }
    );
}