import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Living(props) {
  const { nodes, materials } = useGLTF('./public/models/isometric_living_room.glb')
  return (
    <group {...props} dispose={null} scale={[.4, .4, .4]}>
      <group position={[0.651, 0.471, -1.002]} rotation={[0, -Math.PI / 2, 0]} scale={[0.5, 1, 1]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Material} position={[-0.375, 0.674, 0.447]} rotation={[0, 0, -1.278]} scale={[0.377, 0.196, 0.35]} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Material} position={[-0.375, 0.674, -0.355]} rotation={[0, 0, -1.278]} scale={[0.377, 0.196, 0.35]} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Material.002']} position={[-0.024, 0.096, -0.006]} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.009']} position={[0.127, 0.486, 0.675]} rotation={[-0.769, -0.343, -0.845]} scale={[0.233, 0.114, 0.17]} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.009']} position={[0.156, 0.482, -0.696]} rotation={[-2.086, -0.416, -2.315]} scale={[0.238, 0.105, 0.184]} />
      </group>
      <group position={[-0.869, 0.471, 0.325]} rotation={[0, -0.003, 0]} scale={[0.5, 1, 1]}>
        <mesh geometry={nodes.Object_22.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Material} position={[-0.375, 0.674, 0.447]} rotation={[0, 0, -1.278]} scale={[0.377, 0.196, 0.35]} />
        <mesh geometry={nodes.Object_26.geometry} material={materials['Material.002']} position={[-0.024, 0.096, 0.366]} />
        <mesh geometry={nodes.Object_28.geometry} material={materials['Material.027']} position={[0.127, 0.486, 0.675]} rotation={[-0.769, -0.343, -0.845]} scale={[0.233, 0.114, 0.17]} />
      </group>
      <group position={[0.656, 2.196, -1.467]} rotation={[-Math.PI, -0.001, -Math.PI]}>
        <mesh geometry={nodes.Object_30.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_31.geometry} material={materials['Material.026']} />
      </group>
      <group position={[0.231, 1.685, 0.023]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_33.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_34.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-1.169, 2.122, 0.44]}>
        <mesh geometry={nodes.Object_42.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.material_0} position={[-0.012, 0.65, -0.184]} rotation={[Math.PI / 2, 0, -0.684]} scale={1.226} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.material_0} position={[-0.012, 0.65, -0.118]} rotation={[Math.PI / 2, 0, 0.691]} scale={1.226} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.material_0} position={[-0.012, 0.65, -0.033]} rotation={[Math.PI / 2, 0, -0.684]} scale={1.226} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.material_0} position={[-0.012, 0.65, 0.033]} rotation={[Math.PI / 2, 0, 0.691]} scale={1.226} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.material_0} position={[-0.012, 0.65, 0.118]} rotation={[Math.PI / 2, 0, -0.684]} scale={1.226} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.material_0} position={[-0.012, 0.65, 0.184]} rotation={[Math.PI / 2, 0, 0.691]} scale={1.226} />
      </group>
      <group position={[-1.169, 2.122, -0.564]}>
        <mesh geometry={nodes.Object_56.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.material_0} position={[-0.012, 0.65, -0.184]} rotation={[Math.PI / 2, 0, -0.684]} scale={1.226} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.material_0} position={[-0.012, 0.65, -0.118]} rotation={[Math.PI / 2, 0, 0.691]} scale={1.226} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.material_0} position={[-0.012, 0.65, -0.033]} rotation={[Math.PI / 2, 0, -0.684]} scale={1.226} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.material_0} position={[-0.012, 0.65, 0.033]} rotation={[Math.PI / 2, 0, 0.691]} scale={1.226} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.material_0} position={[-0.012, 0.65, 0.118]} rotation={[Math.PI / 2, 0, -0.684]} scale={1.226} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.material_0} position={[-0.012, 0.65, 0.184]} rotation={[Math.PI / 2, 0, 0.691]} scale={1.226} />
      </group>
      <group position={[-0.981, 2.679, -1.501]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_70.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_72.geometry} material={materials['Material.030']} position={[0, 0.319, 0.402]} rotation={[-Math.PI / 2, 0, 0]} scale={0.129} />
      </group>
      <group position={[-1.293, 2.408, 1.15]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_74.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_75.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_77.geometry} material={materials['Material.005']} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Object_79.geometry} material={materials['Material.005']} rotation={[0, -Math.PI / 6, Math.PI / 2]} />
        <mesh geometry={nodes.Object_81.geometry} material={materials['Material.005']} rotation={[0, -Math.PI / 3, Math.PI / 2]} />
        <mesh geometry={nodes.Object_83.geometry} material={materials['Material.005']} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Object_85.geometry} material={materials['Material.005']} rotation={[Math.PI, -Math.PI / 3, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_87.geometry} material={materials['Material.005']} rotation={[Math.PI, -Math.PI / 6, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_89.geometry} material={materials['Material.005']} rotation={[-Math.PI, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_91.geometry} material={materials['Material.005']} rotation={[-Math.PI, Math.PI / 6, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_93.geometry} material={materials['Material.005']} rotation={[-Math.PI, Math.PI / 3, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_95.geometry} material={materials['Material.005']} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
        <mesh geometry={nodes.Object_97.geometry} material={materials['Material.005']} rotation={[0, Math.PI / 3, Math.PI / 2]} />
        <mesh geometry={nodes.Object_99.geometry} material={materials['Material.005']} rotation={[0, Math.PI / 6, Math.PI / 2]} />
        <mesh geometry={nodes.Object_101.geometry} material={materials['Material.016']} position={[0, 0.021, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.009, 0.009, 0.055]} />
      </group>
      <group position={[0.724, 0.649, 0.52]} scale={[0.662, 0.346, 0.346]}>
        <mesh geometry={nodes.Object_103.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Object_105.geometry} material={materials['Material.002']} position={[0.803, 0.153, 0.092]} rotation={[-Math.PI, 0, 0]} scale={[-0.065, 4.085, 0.115]} />
      </group>
      <group position={[0.456, 0.729, 0.491]}>
        <mesh geometry={nodes.Object_107.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Object_108.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Object_110.geometry} material={materials['Material.015']} />
      </group>
      <group position={[0.681, 0.749, 0.527]} rotation={[-0.075, 1.363, 0.017]} scale={0.36}>
        <mesh geometry={nodes.Object_116.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Object_118.geometry} material={materials['Material.023']} position={[0.129, 0.033, -0.028]} rotation={[1.055, -1.131, 0.02]} scale={0.004} />
        <mesh geometry={nodes.Object_120.geometry} material={materials['Material.022']} position={[0.125, 0.037, -0.037]} rotation={[1.088, -1.012, 2.396]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_122.geometry} material={materials['Material.021']} position={[0.126, 0.02, -0.05]} rotation={[0.361, -1.21, 0.108]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_124.geometry} material={materials['Material.023']} position={[0.123, 0.022, -0.058]} rotation={[0.409, -1.14, 2.699]} scale={0.006} />
        <mesh geometry={nodes.Object_126.geometry} material={materials['Material.022']} position={[0.12, 0.037, -0.051]} rotation={[0.977, -0.968, -1.657]} scale={[0.004, 0.016, 0.004]} />
        <mesh geometry={nodes.Object_128.geometry} material={materials['Material.021']} position={[0.124, 0.03, -0.049]} rotation={[0.789, -1.102, 2.713]} scale={[0.006, 0.014, 0.006]} />
        <mesh geometry={nodes.Object_130.geometry} material={materials['Material.023']} position={[0.124, 0.042, -0.027]} rotation={[1.287, -0.877, -2.296]} scale={0.006} />
        <mesh geometry={nodes.Object_132.geometry} material={materials['Material.022']} position={[0.082, 0.055, -0.035]} rotation={[1.606, 0.091, 1.395]} scale={[0.004, 0.014, 0.004]} />
        <mesh geometry={nodes.Object_134.geometry} material={materials['Material.021']} position={[0.085, 0.055, -0.004]} rotation={[1.587, 0.191, 2.454]} scale={[0.005, 0.01, 0.005]} />
        <mesh geometry={nodes.Object_136.geometry} material={materials['Material.023']} position={[0.069, 0.049, -0.007]} rotation={[1.649, 0.497, 1.611]} scale={0.003} />
        <mesh geometry={nodes.Object_138.geometry} material={materials['Material.022']} position={[0.047, 0.055, -0.077]} rotation={[1.654, 0.048, 1.158]} scale={[0.002, 0.006, 0.002]} />
        <mesh geometry={nodes.Object_140.geometry} material={materials['Material.021']} position={[0.051, 0.055, -0.068]} rotation={[1.722, 0.118, 2.304]} scale={[0.006, 0.012, 0.006]} />
        <mesh geometry={nodes.Object_142.geometry} material={materials['Material.023']} position={[0.029, 0.033, -0.043]} rotation={[2.417, 0.473, -0.606]} scale={0.006} />
        <mesh geometry={nodes.Object_144.geometry} material={materials['Material.022']} position={[0.045, 0.046, -0.047]} rotation={[2.03, 0.41, 2.832]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_146.geometry} material={materials['Material.021']} position={[0.047, 0.051, -0.054]} rotation={[1.914, 0.301, 1.526]} scale={[0.005, 0.01, 0.005]} />
        <mesh geometry={nodes.Object_148.geometry} material={materials['Material.023']} position={[0.04, 0.042, -0.044]} rotation={[2.158, 0.486, -0.359]} scale={0.004} />
        <mesh geometry={nodes.Object_150.geometry} material={materials['Material.022']} position={[0.03, 0.027, -0.13]} rotation={[0.264, -0.198, 1.469]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_152.geometry} material={materials['Material.021']} position={[0.04, 0.054, -0.103]} rotation={[1.269, -0.1, 2.863]} scale={[0.005, 0.012, 0.005]} />
        <mesh geometry={nodes.Object_154.geometry} material={materials['Material.023']} position={[0.017, 0.056, -0.093]} rotation={[1.569, 0, 2.506]} scale={0.003} />
        <mesh geometry={nodes.Object_156.geometry} material={materials['Material.022']} position={[0.011, 0.052, -0.113]} rotation={[1.126, -0.037, 2.606]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_158.geometry} material={materials['Material.021']} position={[0.039, 0.055, -0.075]} rotation={[1.745, 0.081, -1.56]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_160.geometry} material={materials['Material.023']} position={[0.039, 0.056, -0.087]} rotation={[1.569, 0, 2.084]} scale={0.003} />
        <mesh geometry={nodes.Object_162.geometry} material={materials['Material.022']} position={[0.022, 0.046, -0.061]} rotation={[2.155, 0.17, 2.955]} scale={[0.003, 0.011, 0.003]} />
        <mesh geometry={nodes.Object_164.geometry} material={materials['Material.021']} position={[-0.052, 0.008, -0.126]} rotation={[0.053, 0.378, -3.015]} scale={[0.006, 0.012, 0.006]} />
        <mesh geometry={nodes.Object_166.geometry} material={materials['Material.023']} position={[-0.019, 0.056, -0.092]} rotation={[1.568, 0.001, 2.402]} scale={0.005} />
        <mesh geometry={nodes.Object_168.geometry} material={materials['Material.022']} position={[-0.026, 0.055, -0.085]} rotation={[1.664, -0.028, -0.179]} scale={[0.003, 0.011, 0.003]} />
        <mesh geometry={nodes.Object_170.geometry} material={materials['Material.021']} position={[0, 0.049, -0.12]} rotation={[0.923, 0.002, 2.039]} scale={[0.003, 0.007, 0.003]} />
        <mesh geometry={nodes.Object_172.geometry} material={materials['Material.023']} position={[-0.037, 0.054, -0.072]} rotation={[1.791, -0.11, -3.097]} scale={0.004} />
        <mesh geometry={nodes.Object_174.geometry} material={materials['Material.022']} position={[-0.023, 0.038, -0.05]} rotation={[2.354, -0.31, 2.354]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_176.geometry} material={materials['Material.021']} position={[0, 0.044, -0.06]} rotation={[2.276, -0.002, -0.744]} scale={[0.003, 0.006, 0.003]} />
        <mesh geometry={nodes.Object_178.geometry} material={materials['Material.023']} position={[-0.081, 0.054, -0.071]} rotation={[1.383, 0.185, -1.792]} scale={0.004} />
        <mesh geometry={nodes.Object_180.geometry} material={materials['Material.022']} position={[-0.082, 0.055, -0.063]} rotation={[1.468, 0.115, -0.023]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_182.geometry} material={materials['Material.021']} position={[-0.055, 0.054, -0.095]} rotation={[1.29, 0.158, 1.793]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_184.geometry} material={materials['Material.023']} position={[-0.039, 0.042, -0.044]} rotation={[2.189, -0.45, 0.384]} scale={0.003} />
        <mesh geometry={nodes.Object_186.geometry} material={materials['Material.022']} position={[-0.034, 0.046, -0.055]} rotation={[2.105, -0.304, 0.32]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_188.geometry} material={materials['Material.021']} position={[-0.05, 0.051, -0.051]} rotation={[1.919, -0.299, 1.328]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_190.geometry} material={materials['Material.023']} position={[-0.048, 0.042, -0.035]} rotation={[2.103, -0.544, 2.098]} scale={0.004} />
        <mesh geometry={nodes.Object_192.geometry} material={materials['Material.022']} position={[-0.028, 0.02, -0.034]} rotation={[2.701, -0.615, -1.537]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_194.geometry} material={materials['Material.021']} position={[-0.121, 0.049, -0.009]} rotation={[1.521, 0.642, -1]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_196.geometry} material={materials['Material.023']} position={[-0.108, 0.054, -0.002]} rotation={[1.572, 0.264, -1.34]} scale={0.006} />
        <mesh geometry={nodes.Object_198.geometry} material={materials['Material.022']} position={[-0.089, 0.055, -0.005]} rotation={[1.575, -0.097, 2.327]} scale={[0.002, 0.008, 0.002]} />
        <mesh geometry={nodes.Object_200.geometry} material={materials['Material.021']} position={[-0.083, 0.055, -0.014]} rotation={[1.602, -0.191, -2.759]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_202.geometry} material={materials['Material.023']} position={[-0.067, 0.049, -0.02]} rotation={[1.702, -0.488, -0.659]} scale={0.003} />
        <mesh geometry={nodes.Object_204.geometry} material={materials['Material.022']} position={[-0.047, 0.029, -0.015]} rotation={[1.956, -0.967, -1.519]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_206.geometry} material={materials['Material.021']} position={[-0.094, 0.056, 0.025]} rotation={[1.585, 0.05, -3.073]} scale={[0.007, 0.014, 0.007]} />
        <mesh geometry={nodes.Object_208.geometry} material={materials['Material.023']} position={[-0.118, 0.05, 0.011]} rotation={[1.649, 0.573, -1.527]} scale={0.004} />
        <mesh geometry={nodes.Object_210.geometry} material={materials['Material.022']} position={[-0.112, 0.052, 0.02]} rotation={[1.665, 0.436, -2.114]} scale={[0.002, 0.01, 0.002]} />
        <mesh geometry={nodes.Object_212.geometry} material={materials['Material.021']} position={[-0.12, 0.049, 0.017]} rotation={[1.697, 0.634, 2.762]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_214.geometry} material={materials['Material.023']} position={[-0.115, 0.05, 0.025]} rotation={[1.723, 0.56, -3.002]} scale={0.006} />
        <mesh geometry={nodes.Object_216.geometry} material={materials['Material.022']} position={[-0.109, 0.052, 0.033]} rotation={[1.717, 0.422, -2.263]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_218.geometry} material={materials['Material.021']} position={[-0.101, 0.054, 0.042]} rotation={[1.699, 0.294, 2.99]} scale={[0.007, 0.014, 0.007]} />
        <mesh geometry={nodes.Object_220.geometry} material={materials['Material.023']} position={[-0.107, 0.054, 0.01]} rotation={[1.603, 0.262, -2.373]} scale={0.003} />
        <mesh geometry={nodes.Object_222.geometry} material={materials['Material.022']} position={[-0.065, 0.046, 0.004]} rotation={[1.515, -0.602, 2.152]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_224.geometry} material={materials['Material.021']} position={[-0.118, 0.007, 0.068]} rotation={[3.121, 1.074, 1.728]} scale={[0.007, 0.015, 0.007]} />
        <mesh geometry={nodes.Object_226.geometry} material={materials['Material.023']} position={[-0.112, 0.01, 0.077]} rotation={[3.035, 0.968, -2.864]} scale={0.003} />
        <mesh geometry={nodes.Object_228.geometry} material={materials['Material.022']} position={[-0.071, 0.045, 0.1]} rotation={[2.244, 0.42, 2.864]} scale={[0.002, 0.008, 0.002]} />
        <mesh geometry={nodes.Object_230.geometry} material={materials['Material.021']} position={[-0.117, 0.019, 0.068]} rotation={[2.822, 1.026, 2.146]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_232.geometry} material={materials['Material.023']} position={[-0.069, 0.054, 0.081]} rotation={[1.775, 0.172, 2.579]} scale={0.006} />
        <mesh geometry={nodes.Object_234.geometry} material={materials['Material.022']} position={[-0.032, 0.038, 0.045]} rotation={[0.844, -0.444, -0.489]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_236.geometry} material={materials['Material.021']} position={[-0.066, 0.03, 0.115]} rotation={[2.755, 0.493, 0.593]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_238.geometry} material={materials['Material.023']} position={[-0.033, 0.054, 0.102]} rotation={[1.821, 0.088, 1.162]} scale={0.005} />
        <mesh geometry={nodes.Object_240.geometry} material={materials['Material.022']} position={[0.045, 0.036, 0.123]} rotation={[2.633, -0.283, -1.707]} scale={[0.003, 0.014, 0.003]} />
        <mesh geometry={nodes.Object_242.geometry} material={materials['Material.021']} position={[0.062, 0.03, 0.12]} rotation={[2.78, -0.462, -3.067]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_244.geometry} material={materials['Material.023']} position={[0.042, 0.054, 0.071]} rotation={[1.363, 0.129, 3.011]} scale={0.004} />
        <mesh geometry={nodes.Object_246.geometry} material={materials['Material.022']} position={[0.027, 0.046, 0.06]} rotation={[1.009, 0.228, 2.954]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_248.geometry} material={materials['Material.021']} position={[0.028, 0.051, 0.066]} rotation={[1.15, 0.163, 1.88]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_250.geometry} material={materials['Material.023']} position={[0.1, 0.033, 0.087]} rotation={[2.607, -0.759, -0.316]} scale={0.004} />
        <mesh geometry={nodes.Object_252.geometry} material={materials['Material.022']} position={[0.087, 0.016, 0.104]} rotation={[3.089, -0.73, 1.31]} scale={[0.003, 0.01, 0.003]} />
        <mesh geometry={nodes.Object_254.geometry} material={materials['Material.021']} position={[0.107, 0.01, 0.084]} rotation={[-3.007, -0.848, -1.335]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_256.geometry} material={materials['Material.023']} position={[0.078, 0.032, 0.107]} rotation={[2.674, -0.61, -0.213]} scale={0.004} />
        <mesh geometry={nodes.Object_258.geometry} material={materials['Material.022']} position={[0.066, 0.055, 0.078]} rotation={[1.686, -0.102, -2.711]} scale={[0.003, 0.011, 0.003]} />
        <mesh geometry={nodes.Object_260.geometry} material={materials['Material.021']} position={[0.059, 0.055, 0.059]} rotation={[1.432, 0.137, 1.809]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_262.geometry} material={materials['Material.023']} position={[0.048, 0.054, 0.066]} rotation={[1.376, 0.151, -0.75]} scale={0.004} />
        <mesh geometry={nodes.Object_264.geometry} material={materials['Material.022']} position={[0.133, 0.026, 0.024]} rotation={[2.26, -1.254, 0.321]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_266.geometry} material={materials['Material.021']} position={[0.098, 0.056, 0.005]} rotation={[1.572, -0.052, 1.282]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_268.geometry} material={materials['Material.023']} position={[0.059, 0.042, 0.009]} rotation={[1.413, 0.727, 2.627]} scale={0.004} />
        <mesh geometry={nodes.Object_270.geometry} material={materials['Material.022']} position={[0.063, 0.046, 0.016]} rotation={[1.4, 0.584, -2.702]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_272.geometry} material={materials['Material.021']} position={[0.053, 0.035, 0.002]} rotation={[1.533, 0.903, -1.897]} scale={[0.007, 0.014, 0.007]} />
        <mesh geometry={nodes.Object_274.geometry} material={materials['Material.023']} position={[0.05, 0.033, 0.011]} rotation={[1.256, 0.905, 0.13]} scale={0.003} />
        <mesh geometry={nodes.Object_276.geometry} material={materials['Material.022']} position={[0.086, 0.004, 0.102]} rotation={[-2.229, -0.592, 2.449]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_278.geometry} material={materials['Material.021']} position={[0.106, 0.005, 0.084]} rotation={[-2.547, -0.695, 1.464]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_280.geometry} material={materials['Material.023']} position={[0.04, 0.023, 0.023]} rotation={[0.747, 0.885, -0.442]} scale={0.004} />
        <mesh geometry={nodes.Object_282.geometry} material={materials['Material.022']} position={[0.048, 0.038, 0.029]} rotation={[1.036, 0.662, -2.42]} scale={[0.002, 0.01, 0.002]} />
        <mesh geometry={nodes.Object_284.geometry} material={materials['Material.021']} position={[0.071, 0.055, 0.045]} rotation={[1.46, 0.157, 2.643]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_286.geometry} material={materials['Material.023']} position={[0.121, 0.032, 0.056]} rotation={[2.376, -1.012, 1.219]} scale={0.003} />
        <mesh geometry={nodes.Object_288.geometry} material={materials['Material.022']} position={[0.124, 0.015, 0.059]} rotation={[2.996, -1.121, -2.539]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_290.geometry} material={materials['Material.021']} position={[0.109, 0.04, 0.069]} rotation={[2.275, -0.75, -0.978]} scale={[0.006, 0.014, 0.006]} />
        <mesh geometry={nodes.Object_292.geometry} material={materials['Material.023']} position={[0.049, 0.011, 0.02]} rotation={[-1.9, -0.703, 2.336]} scale={0.004} />
        <mesh geometry={nodes.Object_294.geometry} material={materials['Material.022']} position={[0.014, 0.046, 0.064]} rotation={[0.979, 0.131, -1.462]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_296.geometry} material={materials['Material.021']} position={[0.021, 0.054, 0.109]} rotation={[1.878, -0.068, -0.343]} scale={[0.005, 0.01, 0.005]} />
        <mesh geometry={nodes.Object_298.geometry} material={materials['Material.023']} position={[0.001, 0.054, 0.082]} rotation={[1.328, -0.004, 1.388]} scale={0.003} />
        <mesh geometry={nodes.Object_300.geometry} material={materials['Material.022']} position={[0.009, 0.036, 0.131]} rotation={[2.653, -0.055, -2.078]} scale={[0.003, 0.014, 0.003]} />
        <mesh geometry={nodes.Object_302.geometry} material={materials['Material.021']} position={[-0.003, 0.007, 0.137]} rotation={[-3.039, 0.1, -1.961]} scale={[0.006, 0.014, 0.006]} />
        <mesh geometry={nodes.Object_304.geometry} material={materials['Material.023']} position={[0.002, 0.021, 0.136]} rotation={[2.978, 0.009, 1.711]} scale={0.003} />
        <mesh geometry={nodes.Object_306.geometry} material={materials['Material.022']} position={[-0.046, 0.029, -0.018]} rotation={[2.011, -0.947, 0.525]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_308.geometry} material={materials['Material.021']} position={[-0.103, 0.054, -0.043]} rotation={[1.472, 0.299, 1.751]} scale={[0.005, 0.01, 0.005]} />
        <mesh geometry={nodes.Object_310.geometry} material={materials['Material.023']} position={[0.04, 0.033, -0.033]} rotation={[2.303, 0.658, -2.87]} scale={0.005} />
        <mesh geometry={nodes.Object_312.geometry} material={materials['Material.022']} position={[0.096, 0.052, -0.064]} rotation={[1.316, -0.364, -2.794]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_314.geometry} material={materials['Material.021']} position={[0.064, 0.055, -0.056]} rotation={[1.703, 0.142, -2.094]} scale={[0.006, 0.013, 0.006]} />
        <mesh geometry={nodes.Object_316.geometry} material={materials['Material.023']} position={[0.097, 0.032, -0.091]} rotation={[0.518, -0.731, -2.423]} scale={0.006} />
        <mesh geometry={nodes.Object_318.geometry} material={materials['Material.019']} />
      </group>
      <group position={[-0.747, 1.096, -0.77]}>
        <mesh geometry={nodes.Object_320.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_322.geometry} material={materials['Material.006']} position={[0.123, -0.063, 0.112]} rotation={[0, -0.73, 0]} scale={0.026} />
        <mesh geometry={nodes.Object_324.geometry} material={materials['Material.006']} position={[0.111, -0.062, -0.126]} rotation={[0, 0.841, 0]} scale={0.026} />
        <mesh geometry={nodes.Object_326.geometry} material={materials['Material.006']} position={[-0.124, -0.062, -0.115]} rotation={[-Math.PI, 0.73, -Math.PI]} scale={0.026} />
        <mesh geometry={nodes.Object_328.geometry} material={materials['Material.006']} position={[-0.107, -0.062, 0.123]} rotation={[-Math.PI, -0.841, -Math.PI]} scale={0.026} />
        <mesh geometry={nodes.Object_330.geometry} material={materials['Material.006']} position={[0, -0.062, 0]} scale={0.807} />
        <mesh geometry={nodes.Object_332.geometry} material={materials['Material.007']} position={[0, -0.422, 0]} scale={[0.905, 0.381, 0.905]} />
        <mesh geometry={nodes.Object_334.geometry} material={materials['Material.006']} position={[0, -0.361, 0]} scale={0.877} />
      </group>
      <group position={[-0.747, 1.188, -0.77]} rotation={[-Math.PI, 0, 0]} scale={[-0.1, 0.1, 0.1]}>
        <mesh geometry={nodes.Object_336.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_337.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_339.geometry} material={materials['Material.017']} position={[0.004, -0.805, 0.001]} rotation={[0, 0.91, 0]} scale={[0.158, 0.461, 0.318]} />
      </group>
      <group position={[0.711, 0.769, 0.485]} rotation={[-0.308, 0.787, -0.472]} scale={0.36}>
        <mesh geometry={nodes.Object_355.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Object_357.geometry} material={materials['Material.023']} position={[0.053, 0.013, -0.01]} rotation={[-1.352, -0.8, -0.169]} scale={0.006} />
        <mesh geometry={nodes.Object_359.geometry} material={materials['Material.022']} position={[-0.079, 0.04, 0.034]} rotation={[-1.664, 0.213, -2.57]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_361.geometry} material={materials['Material.021']} position={[0.084, 0.055, -0.029]} rotation={[1.604, 0.103, -3.042]} scale={[0.006, 0.013, 0.006]} />
        <mesh geometry={nodes.Object_363.geometry} material={materials['Material.023']} position={[0.058, 0.041, -0.004]} rotation={[1.678, 0.755, 3.016]} scale={0.007} />
        <mesh geometry={nodes.Object_365.geometry} material={materials['Material.022']} position={[0.067, 0.007, -0.12]} rotation={[-0.073, -0.434, 0.12]} scale={[0.002, 0.008, 0.002]} />
        <mesh geometry={nodes.Object_367.geometry} material={materials['Material.021']} position={[0.058, 0.055, -0.085]} rotation={[1.452, -0.081, -2.474]} scale={[0.006, 0.013, 0.006]} />
        <mesh geometry={nodes.Object_369.geometry} material={materials['Material.023']} position={[0.056, 0.054, -0.058]} rotation={[1.767, 0.189, 2.672]} scale={0.003} />
        <mesh geometry={nodes.Object_371.geometry} material={materials['Material.022']} position={[0.034, 0.051, -0.063]} rotation={[1.99, 0.194, 2.737]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_373.geometry} material={materials['Material.021']} position={[0.032, 0.046, -0.057]} rotation={[2.126, 0.27, 3.119]} scale={[0.004, 0.01, 0.004]} />
        <mesh geometry={nodes.Object_375.geometry} material={materials['Material.023']} position={[0.035, 0.032, -0.037]} rotation={[2.367, 0.61, -1.024]} scale={0.006} />
        <mesh geometry={nodes.Object_377.geometry} material={materials['Material.022']} position={[0.036, 0.021, -0.13]} rotation={[0.15, -0.245, -3.059]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_379.geometry} material={materials['Material.021']} position={[0.039, 0.037, -0.124]} rotation={[0.517, -0.236, 0.636]} scale={[0.005, 0.01, 0.005]} />
        <mesh geometry={nodes.Object_381.geometry} material={materials['Material.023']} position={[0.029, 0.033, -0.128]} rotation={[0.418, -0.183, 1.727]} scale={0.004} />
        <mesh geometry={nodes.Object_383.geometry} material={materials['Material.022']} position={[0.002, 0.041, -0.127]} rotation={[0.606, -0.009, 0.459]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_385.geometry} material={materials['Material.021']} position={[0.034, 0.052, -0.108]} rotation={[1.153, -0.111, -2.738]} scale={[0.004, 0.01, 0.004]} />
        <mesh geometry={nodes.Object_387.geometry} material={materials['Material.023']} position={[0.008, 0.054, -0.079]} rotation={[1.84, 0.023, -1.181]} scale={0.003} />
        <mesh geometry={nodes.Object_389.geometry} material={materials['Material.022']} position={[0.042, 0.054, -0.102]} rotation={[1.28, -0.1, -1.237]} scale={[0.004, 0.014, 0.004]} />
        <mesh geometry={nodes.Object_391.geometry} material={materials['Material.021']} position={[0.003, 0.046, -0.064]} rotation={[2.187, 0.027, 0.996]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_393.geometry} material={materials['Material.023']} position={[-0.038, 0.033, -0.125]} rotation={[0.427, 0.272, -2.16]} scale={0.003} />
        <mesh geometry={nodes.Object_395.geometry} material={materials['Material.022']} position={[-0.058, 0.049, -0.105]} rotation={[0.999, 0.291, 2.246]} scale={[0.002, 0.008, 0.002]} />
        <mesh geometry={nodes.Object_397.geometry} material={materials['Material.021']} position={[-0.006, 0.052, -0.075]} rotation={[1.932, -0.028, 0.775]} scale={[0.006, 0.014, 0.006]} />
        <mesh geometry={nodes.Object_399.geometry} material={materials['Material.023']} position={[-0.008, 0.032, -0.049]} rotation={[2.527, -0.137, -2.256]} scale={0.005} />
        <mesh geometry={nodes.Object_401.geometry} material={materials['Material.022']} position={[-0.008, 0.051, -0.07]} rotation={[2.032, -0.052, -0.5]} scale={[0.003, 0.011, 0.003]} />
        <mesh geometry={nodes.Object_403.geometry} material={materials['Material.021']} position={[-0.089, 0.027, -0.1]} rotation={[0.343, 0.675, -0.528]} scale={[0.003, 0.006, 0.003]} />
        <mesh geometry={nodes.Object_405.geometry} material={materials['Material.023']} position={[-0.067, 0.043, -0.106]} rotation={[0.771, 0.416, 2.615]} scale={0.005} />
        <mesh geometry={nodes.Object_407.geometry} material={materials['Material.022']} position={[-0.036, 0.043, -0.048]} rotation={[2.183, -0.392, -2.147]} scale={[0.003, 0.01, 0.003]} />
        <mesh geometry={nodes.Object_409.geometry} material={materials['Material.021']} position={[-0.119, 0.046, -0.035]} rotation={[1.348, 0.731, 2.828]} scale={[0.005, 0.01, 0.005]} />
        <mesh geometry={nodes.Object_411.geometry} material={materials['Material.023']} position={[-0.113, 0.05, -0.036]} rotation={[1.421, 0.523, 1.309]} scale={0.005} />
        <mesh geometry={nodes.Object_413.geometry} material={materials['Material.022']} position={[-0.12, 0.049, -0.011]} rotation={[1.515, 0.628, 2.678]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_415.geometry} material={materials['Material.021']} position={[-0.076, 0.052, -0.001]} rotation={[1.57, -0.36, 1.489]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_417.geometry} material={materials['Material.023']} position={[-0.125, 0.033, 0.039]} rotation={[2.185, 1.061, -2.122]} scale={0.003} />
        <mesh geometry={nodes.Object_419.geometry} material={materials['Material.022']} position={[-0.116, 0.031, 0.064]} rotation={[2.502, 0.961, -2.868]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_421.geometry} material={materials['Material.021']} position={[-0.099, 0.055, 0.022]} rotation={[1.605, 0.141, -0.888]} scale={[0.003, 0.006, 0.003]} />
        <mesh geometry={nodes.Object_423.geometry} material={materials['Material.023']} position={[-0.101, 0.054, 0.031]} rotation={[1.646, 0.228, 1.208]} scale={0.005} />
        <mesh geometry={nodes.Object_425.geometry} material={materials['Material.022']} position={[-0.093, 0.056, 0.024]} rotation={[1.582, 0.041, 1.491]} scale={[0.004, 0.014, 0.004]} />
        <mesh geometry={nodes.Object_427.geometry} material={materials['Material.021']} position={[-0.111, 0.052, 0.024]} rotation={[1.679, 0.419, 0.874]} scale={[0.006, 0.013, 0.006]} />
        <mesh geometry={nodes.Object_429.geometry} material={materials['Material.023']} position={[-0.096, 0.054, 0.044]} rotation={[1.673, 0.218, 2.689]} scale={0.003} />
        <mesh geometry={nodes.Object_431.geometry} material={materials['Material.022']} position={[-0.056, 0.043, 0.022]} rotation={[1.256, -0.651, -0.506]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_433.geometry} material={materials['Material.021']} position={[-0.047, 0.028, 0.01]} rotation={[1.202, -0.981, -1.627]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_435.geometry} material={materials['Material.023']} position={[-0.067, 0.049, 0.012]} rotation={[1.455, -0.515, 1.001]} scale={0.003} />
        <mesh geometry={nodes.Object_437.geometry} material={materials['Material.022']} position={[-0.084, 0.019, 0.106]} rotation={[2.923, 0.664, 3.01]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_439.geometry} material={materials['Material.021']} position={[-0.087, 0.026, 0.101]} rotation={[2.785, 0.678, 0.816]} scale={[0.007, 0.015, 0.007]} />
        <mesh geometry={nodes.Object_441.geometry} material={materials['Material.023']} position={[-0.079, 0.011, 0.111]} rotation={[3.048, 0.621, -0.194]} scale={0.006} />
        <mesh geometry={nodes.Object_443.geometry} material={materials['Material.022']} position={[-0.065, 0.041, 0.109]} rotation={[2.462, 0.437, -0.851]} scale={[0.002, 0.009, 0.002]} />
        <mesh geometry={nodes.Object_445.geometry} material={materials['Material.021']} position={[-0.066, 0.055, 0.077]} rotation={[1.682, 0.095, -0.182]} scale={[0.005, 0.012, 0.005]} />
        <mesh geometry={nodes.Object_447.geometry} material={materials['Material.023']} position={[-0.061, 0.054, 0.086]} rotation={[1.768, 0.139, -1.701]} scale={0.004} />
        <mesh geometry={nodes.Object_449.geometry} material={materials['Material.022']} position={[-0.043, 0.055, 0.071]} rotation={[1.396, -0.104, 2.544]} scale={[0.002, 0.008, 0.002]} />
        <mesh geometry={nodes.Object_451.geometry} material={materials['Material.021']} position={[-0.056, 0.052, 0.05]} rotation={[1.323, -0.266, 0.962]} scale={[0.004, 0.01, 0.004]} />
        <mesh geometry={nodes.Object_453.geometry} material={materials['Material.023']} position={[-0.079, 0.056, 0.049]} rotation={[1.56, -0.017, 0.745]} scale={0.003} />
        <mesh geometry={nodes.Object_455.geometry} material={materials['Material.022']} position={[-0.037, 0.031, 0.127]} rotation={[2.783, 0.287, -2.898]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_457.geometry} material={materials['Material.021']} position={[-0.025, 0.037, 0.127]} rotation={[2.63, 0.205, 2.829]} scale={[0.005, 0.012, 0.005]} />
        <mesh geometry={nodes.Object_459.geometry} material={materials['Material.023']} position={[-0.03, 0.033, 0.128]} rotation={[2.72, 0.244, -2.192]} scale={0.006} />
        <mesh geometry={nodes.Object_461.geometry} material={materials['Material.022']} position={[-0.007, 0.031, 0.134]} rotation={[2.806, 0.091, -1.581]} scale={[0.002, 0.008, 0.002]} />
        <mesh geometry={nodes.Object_463.geometry} material={materials['Material.021']} position={[-0.038, 0.046, 0.117]} rotation={[2.302, 0.233, -0.925]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_465.geometry} material={materials['Material.023']} position={[-0.041, 0.05, 0.11]} rotation={[2.088, 0.193, 2.488]} scale={0.003} />
        <mesh geometry={nodes.Object_467.geometry} material={materials['Material.022']} position={[-0.005, 0.055, 0.084]} rotation={[1.37, -0.02, -2.452]} scale={[0.003, 0.01, 0.003]} />
        <mesh geometry={nodes.Object_469.geometry} material={materials['Material.021']} position={[-0.038, 0.055, 0.08]} rotation={[1.474, -0.047, 2.449]} scale={[0.007, 0.014, 0.007]} />
        <mesh geometry={nodes.Object_471.geometry} material={materials['Material.023']} position={[-0.05, 0.054, 0.093]} rotation={[1.784, 0.113, 1.119]} scale={0.006} />
        <mesh geometry={nodes.Object_473.geometry} material={materials['Material.022']} position={[-0.004, 0.051, 0.071]} rotation={[1.113, -0.045, -0.67]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_475.geometry} material={materials['Material.021']} position={[0.04, 0.015, 0.13]} rotation={[3.066, -0.281, -0.142]} scale={[0.005, 0.012, 0.005]} />
        <mesh geometry={nodes.Object_477.geometry} material={materials['Material.023']} position={[0.061, 0.043, 0.112]} rotation={[2.378, -0.395, -1.008]} scale={0.004} />
        <mesh geometry={nodes.Object_479.geometry} material={materials['Material.022']} position={[0.064, 0.049, 0.103]} rotation={[2.112, -0.337, -2.868]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_481.geometry} material={materials['Material.021']} position={[0.045, 0.055, 0.077]} rotation={[1.481, 0.056, 1.333]} scale={[0.007, 0.015, 0.007]} />
        <mesh geometry={nodes.Object_483.geometry} material={materials['Material.023']} position={[0.033, 0.054, 0.074]} rotation={[1.325, 0.106, -1.527]} scale={0.007} />
        <mesh geometry={nodes.Object_485.geometry} material={materials['Material.022']} position={[0.093, 0.031, 0.095]} rotation={[2.687, -0.723, -2.548]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_487.geometry} material={materials['Material.021']} position={[0.079, 0.027, 0.109]} rotation={[2.826, -0.64, -0.709]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_489.geometry} material={materials['Material.023']} position={[0.059, 0.054, 0.055]} rotation={[1.381, 0.195, -0.607]} scale={0.003} />
        <mesh geometry={nodes.Object_491.geometry} material={materials['Material.022']} position={[0.06, 0.056, 0.077]} rotation={[1.602, -0.027, -1.942]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_493.geometry} material={materials['Material.021']} position={[0.135, 0.015, 0.022]} rotation={[2.773, -1.37, -1.21]} scale={[0.006, 0.012, 0.006]} />
        <mesh geometry={nodes.Object_495.geometry} material={materials['Material.023']} position={[0.132, 0.022, 0.033]} rotation={[2.511, -1.262, -0.484]} scale={0.005} />
        <mesh geometry={nodes.Object_497.geometry} material={materials['Material.022']} position={[0.133, 0.02, 0.028]} rotation={[2.621, -1.306, -1.646]} scale={[0.003, 0.014, 0.003]} />
        <mesh geometry={nodes.Object_499.geometry} material={materials['Material.021']} position={[0.102, 0.055, 0.016]} rotation={[1.596, -0.141, -0.365]} scale={[0.007, 0.014, 0.007]} />
        <mesh geometry={nodes.Object_501.geometry} material={materials['Material.023']} position={[0.093, 0.056, 0.016]} rotation={[1.567, 0.021, -1.822]} scale={0.007} />
        <mesh geometry={nodes.Object_503.geometry} material={materials['Material.022']} position={[0.072, 0.051, 0.004]} rotation={[1.549, 0.458, 2.644]} scale={[0.003, 0.01, 0.003]} />
        <mesh geometry={nodes.Object_505.geometry} material={materials['Material.021']} position={[0.102, 0.009, 0.089]} rotation={[-2.838, -0.79, 0.322]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_507.geometry} material={materials['Material.023']} position={[-0.125, 0.005, -0.059]} rotation={[-0.17, 1.151, 1.369]} scale={0.004} />
        <mesh geometry={nodes.Object_509.geometry} material={materials['Material.022']} position={[-0.106, 0.007, 0.085]} rotation={[3.076, 0.886, 2.192]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_511.geometry} material={materials['Material.021']} position={[0.131, -0.008, 0.032]} rotation={[-2.404, -1.233, -3.03]} scale={[0.007, 0.014, 0.007]} />
        <mesh geometry={nodes.Object_513.geometry} material={materials['Material.023']} position={[0.042, 0.013, 0.003]} rotation={[0.439, 1.504, 2.248]} scale={0.003} />
        <mesh geometry={nodes.Object_515.geometry} material={materials['Material.022']} position={[0.114, 0.049, 0.04]} rotation={[1.788, -0.592, -1.005]} scale={[0.004, 0.014, 0.004]} />
        <mesh geometry={nodes.Object_517.geometry} material={materials['Material.021']} position={[0.125, 0.015, 0.056]} rotation={[2.965, -1.156, 0.696]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_519.geometry} material={materials['Material.023']} position={[0.129, 0.022, 0.041]} rotation={[2.57, -1.233, -0.145]} scale={0.003} />
        <mesh geometry={nodes.Object_521.geometry} material={materials['Material.022']} position={[0.129, 0.031, 0.036]} rotation={[2.226, -1.15, -0.632]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_523.geometry} material={materials['Material.021']} position={[0.019, 0.052, 0.113]} rotation={[1.992, -0.078, 2.713]} scale={[0.004, 0.008, 0.004]} />
        <mesh geometry={nodes.Object_525.geometry} material={materials['Material.023']} position={[-0.002, 0.043, 0.127]} rotation={[2.449, 0.042, -1.057]} scale={0.003} />
        <mesh geometry={nodes.Object_527.geometry} material={materials['Material.022']} position={[-0.136, 0.007, -0.012]} rotation={[-0.37, 1.487, 0.444]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_529.geometry} material={materials['Material.021']} position={[-0.13, 0.001, -0.04]} rotation={[-0.384, 1.298, -2.476]} scale={[0.006, 0.012, 0.006]} />
        <mesh geometry={nodes.Object_531.geometry} material={materials['Material.023']} position={[-0.059, 0.049, -0.037]} rotation={[1.897, -0.415, -2.437]} scale={0.004} />
        <mesh geometry={nodes.Object_533.geometry} material={materials['Material.022']} position={[-0.102, 0.054, -0.043]} rotation={[1.472, 0.287, 2.496]} scale={[0.003, 0.012, 0.003]} />
        <mesh geometry={nodes.Object_535.geometry} material={materials['Material.021']} position={[-0.082, 0.055, -0.036]} rotation={[1.608, -0.1, 1.6]} scale={[0.004, 0.009, 0.004]} />
        <mesh geometry={nodes.Object_537.geometry} material={materials['Material.023']} position={[-0.091, 0.054, -0.058]} rotation={[1.429, 0.19, 0.592]} scale={0.007} />
        <mesh geometry={nodes.Object_539.geometry} material={materials['Material.022']} position={[-0.129, 0.009, -0.045]} rotation={[-0.052, 1.304, 0.286]} scale={[0.003, 0.013, 0.003]} />
        <mesh geometry={nodes.Object_541.geometry} material={materials['Material.021']} position={[-0.108, 0.046, -0.064]} rotation={[1.086, 0.606, 1.219]} scale={[0.004, 0.01, 0.004]} />
        <mesh geometry={nodes.Object_543.geometry} material={materials['Material.023']} position={[-0.113, 0.033, -0.071]} rotation={[0.626, 0.842, 1.032]} scale={0.004} />
        <mesh geometry={nodes.Object_545.geometry} material={materials['Material.022']} position={[0.09, -0.002, -0.103]} rotation={[-0.186, -0.748, 0.016]} scale={[0.004, 0.015, 0.004]} />
        <mesh geometry={nodes.Object_547.geometry} material={materials['Material.021']} position={[0.047, 0.046, -0.045]} rotation={[2.028, 0.428, -1.252]} scale={[0.005, 0.011, 0.005]} />
        <mesh geometry={nodes.Object_549.geometry} material={materials['Material.023']} position={[0.084, 0.054, -0.066]} rotation={[1.419, -0.182, -3.08]} scale={0.007} />
        <mesh geometry={nodes.Object_551.geometry} material={materials['Material.022']} position={[0.092, 0.049, -0.079]} rotation={[1.118, -0.449, -0.715]} scale={[0.002, 0.007, 0.002]} />
        <mesh geometry={nodes.Object_553.geometry} material={materials['Material.021']} position={[0.074, 0.055, -0.07]} rotation={[1.472, -0.101, -3.043]} scale={[0.006, 0.013, 0.006]} />
        <mesh geometry={nodes.Object_555.geometry} material={materials['Material.023']} position={[0.119, 0.022, -0.066]} rotation={[0.394, -1.064, -2.429]} scale={0.006} />
        <mesh geometry={nodes.Object_557.geometry} material={materials['Material.019']} />
      </group>
      <group position={[-0.269, 1.55, -1.466]} rotation={[-Math.PI, -0.001, -Math.PI]}>
        <mesh geometry={nodes.Object_559.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.Object_560.geometry} material={materials['Material.032']} />
      </group>
      <group position={[-0.59, 1.09, -0.726]} scale={0.04}>
        <mesh geometry={nodes.Object_562.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.Object_563.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_565.geometry} material={materials['Material.034']} position={[0.798, 1.834, 0.045]} rotation={[0, -1.253, 0]} scale={[0.092, 0.21, 0.092]} />
        <mesh geometry={nodes.Object_567.geometry} material={materials.material_0} position={[0.561, 1.82, -0.569]} rotation={[0, -0.4, 0]} scale={[0.092, 0.491, 0.092]} />
        <mesh geometry={nodes.Object_569.geometry} material={materials.material_0} position={[-0.057, 1.824, -0.793]} rotation={[0, 0.454, 0]} scale={[0.092, 0.422, 0.092]} />
        <mesh geometry={nodes.Object_571.geometry} material={materials.material_0} position={[-0.633, 1.83, -0.475]} rotation={[0, 1.307, 0]} scale={[0.092, 0.288, 0.092]} />
        <mesh geometry={nodes.Object_573.geometry} material={materials.material_0} position={[-0.772, 1.824, 0.168]} rotation={[-Math.PI, 0.981, -Math.PI]} scale={[0.092, 0.412, 0.092]} />
        <mesh geometry={nodes.Object_575.geometry} material={materials.material_0} position={[-0.378, 1.826, 0.695]} rotation={[-Math.PI, 0.128, -Math.PI]} scale={[0.092, 0.373, 0.092]} />
        <mesh geometry={nodes.Object_577.geometry} material={materials.material_0} position={[0.278, 1.824, 0.745]} rotation={[-Math.PI, -0.726, -Math.PI]} scale={[0.092, 0.413, 0.092]} />
        <mesh geometry={nodes.Object_579.geometry} material={materials.material_0} position={[-0.442, 1.783, -0.154]} rotation={[-Math.PI, 1.555, -Math.PI]} scale={[0.122, 0.381, 0.122]} />
        <mesh geometry={nodes.Object_581.geometry} material={materials.material_0} position={[-0.036, 1.611, 0.105]} rotation={[-2.958, -0.462, 3.054]} scale={[0.128, 0.796, 0.128]} />
        <mesh geometry={nodes.Object_583.geometry} material={materials.material_0} position={[0.209, 1.751, -0.465]} rotation={[0, -0.137, 0]} scale={[0.122, 0.577, 0.122]} />
        <mesh geometry={nodes.Object_585.geometry} material={materials.material_0} position={[0.33, 1.843, 0.004]} rotation={[0, -0.299, 0]} scale={[0.092, 0.351, 0.092]} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[0.231, 1.685, 0.023]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.028']} position={[0.231, 1.685, 0.023]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.029']} position={[0.724, 0.343, 0.52]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_36.geometry} material={materials['Material.002']} position={[-1.293, 2.745, 0.747]} rotation={[-Math.PI, 0, 0]} scale={[-0.017, 0.017, 0.017]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials['Material.002']} position={[-1.293, 2.745, -0.849]} rotation={[-Math.PI, 0, 0]} scale={[-0.017, 0.017, 0.017]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_112.geometry} material={materials['Material.015']} position={[0.456, 0.73, 0.491]} />
      <mesh geometry={nodes.Object_114.geometry} material={materials['Material.015']} position={[0.708, 0.73, 0.491]} rotation={[0, 1.425, 0]} scale={1.383} />
      <mesh geometry={nodes.Object_341.geometry} material={materials['Material.013']} position={[0.44, 0.804, 0.486]} rotation={[2.96, 0.316, 0.407]} scale={[-0.008, 0.008, 0.008]} />
      <mesh geometry={nodes.Object_343.geometry} material={materials['Material.013']} position={[0.456, 0.805, 0.471]} rotation={[-2.95, -0.259, -0.197]} scale={[-0.008, 0.008, 0.008]} />
      <mesh geometry={nodes.Object_345.geometry} material={materials['Material.013']} position={[0.487, 0.788, 0.491]} rotation={[1.667, 0.432, 2.094]} scale={[-0.008, 0.008, 0.008]} />
      <mesh geometry={nodes.Object_347.geometry} material={materials['Material.013']} position={[0.446, 0.796, 0.505]} rotation={[-2.719, -1.146, -0.166]} scale={[-0.008, 0.008, 0.008]} />
      <mesh geometry={nodes.Object_349.geometry} material={materials['Material.013']} position={[0.456, 0.8, 0.476]} rotation={[2.847, 1.135, 0.255]} scale={[-0.008, 0.008, 0.008]} />
      <mesh geometry={nodes.Object_351.geometry} material={materials['Material.005']} position={[-1.265, 2.408, 1.149]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-0.004, 0.004, 0.004]} />
      <mesh geometry={nodes.Object_353.geometry} material={materials['Material.014']} position={[0.724, 0.504, 0.52]} scale={[0.662, 0.346, 0.346]} />
    </group>
  )
}

useGLTF.preload('./public/models/isometric_living_room.glb')
