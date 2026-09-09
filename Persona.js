import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";

const loader = new GLTFLoader();

let mixerPersonaje;

export function cargarPersonaje(scene){

    loader.load("Persona.glb", function(gltf){

        const personaje = gltf.scene;

        personaje.position.set(0,0.9,0);

        scene.add(personaje);

        if(gltf.animations.length > 0){

            mixerPersonaje = new THREE.AnimationMixer(personaje);

            const accion =
                mixerPersonaje.clipAction(gltf.animations[0]);
console.log(gltf.animations);
console.log(gltf.animations.length);
            accion.play();

        }

    });

}

export function actualizarPersonaje(delta){

    if(mixerPersonaje){

        mixerPersonaje.update(delta);

    }

}