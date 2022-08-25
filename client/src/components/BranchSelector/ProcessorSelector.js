import React, { useState,useContext } from 'react'
import style from "./BrandSelector.module.css"
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { buildPC } from '../../Actions';
import ConfirmBuild from './ConfirmBuild';
import { createCont } from "../contexto/contextProvider";
import { Link } from 'react-router-dom';
import img1 from "../../imagenes/paso1.png"
import img2 from "../../imagenes/paso2.png"
import img3 from "../../imagenes/paso3.png"
import img4 from "../../imagenes/paso4.png"
import img5 from "../../imagenes/paso5.png"
import img6 from "../../imagenes/paso6.png"
import img7 from "../../imagenes/paso7.png"



function ProcessorSelector(props) {

  const { buildPCState } = useSelector(state => state)
  const dispatch = useDispatch()
  const {stringLocalStorage} = useContext(createCont)
  

  let productos = [{
    idProduct: 100,
    productName: 'Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
    price: 36000,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17898_Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-grn.jpg',
    description: 'Modelo Ryzen 5 1600 AF, Socket AM4 Ryzen 2th Gen, Núcleos 6,Frecuencia 3200.00 mhz, Proceso De Fabricación 12 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 12, Frecuencia Turbo 3600 mhz, Familia AMD RYZEN 5',
    category: 'Processor',
    stock: 10,
    brand: 'AMD',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 101,
    productName: 'Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler',
    price: 82400,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg',
    description: 'Modelo 5800X, Socket AM4 Ryzen 4th Gen, Núcleos 8, Frecuencia 3800.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 16, Frecuencia Turbo 4700 mhz, Familia AMD RYZEN 7',
    category: 'Processor',
    stock: 6,
    brand: 'AMD',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 102,
    productName: 'Procesador AMD Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Cooler',
    price: 115250,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22431_Procesador_AMD_Ryzen_9_5900X_4.8GHz_Turbo_AM4_-_No_incluye_Cooler_1d9bab51-grn.jpg',
    description: 'Modelo 5900X, Socket AM4 Ryzen 4th Gen, Núcleos 12, Frecuencia 3700.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 24, Frecuencia Turbo 4800 mhz, Familia AMD RYZEN 9',
    category: 'Processor',
    stock: 8,
    brand: 'AMD',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 200,
    productName: 'Mother Asrock A320M-HDV R4.0 Ryzen M-ATX',
    price: 10350,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32094_Mother_Asrock_A320M-HDV_R4.0_Ryzen_M-ATX_d232d007-grn.jpg',
    description: 'Socket AM4 A-Series,AM4 APU 1th Gen,AM4 APU 2th Gen,AM4 Ryzen 1th Gen,AM4 Ryzen 2th Gen,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen, Chipsets Principal AMD A320, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 CH HD Audio (Realtek ALC887 Audio Codec) ',
    category: 'Mother',
    stock: 4,
    brand: 'Asrock',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 201,
    productName: 'Mother ASUS PRIME A520M-K AM4',
    price: 14820,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20551_Mother_ASUS_PRIME_A520M-K_AM4_f5d89e00-grn.jpg',
    description: 'Socket AM4 Ryzen 3th Gen,AM4 APU 3th Gen,AM4 Ryzen 4th Gen,AM4 APU 5000, Chipsets Principal AMD A520, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 1, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 Realtek ALC 887',
    category: 'Mother',
    stock: 5,
    brand: 'ASUS',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 202,
    productName: 'Mother ASUS TUF GAMING B550-PLUS WIFI II AM4',
    price: 40000,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31541_Mother_ASUS_TUF_GAMING_B550-PLUS_WIFI_II_AM4_d701fd66-grn.jpg',
    description: 'Socket AM4 APU 3th Gen,AM4 APU 5000,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen, Chipsets Principal AMD B550, Boton Bios Flashback Si, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 Realtek ALC 1200',
    category: 'Mother',
    stock: 3,
    brand: 'ASUS',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,

  {
    idProduct: 300,
    productName: 'Placa de Video Asrock RX 570 8GB GDDR5 Phantom Gaming Elite',
    price: 53050,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28822_Placa_de_Video_Asrock_RX_570_8GB_GDDR5_Phantom_Gaming_Elite_9ecf3ec5-grn.jpg',
    description: 'Tipo pcie, Chipset Gpu RX 570, Entrada Video No, Puente Para Sli/croosfirex Crossfire, Doble Puente No, Velocidad Memoria 7000 mhz, Tipo De Memoria GDDR5, Capacidad De Memoria 8 gb, Interface De Memoria 256 bits, Velocidad Del Core Turbo 1270 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2048',
    category: 'VGA',
    stock: 9,
    brand: 'AMD',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 301,
    productName: 'Placa de Video Asrock Radeon RX 5600 XT 6GB GDDR6 Phantom Gaming D2 OC 14 Gbps',
    price: 91400,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17383_Placa_de_Video_Asrock_Radeon_RX_5600_XT_6GB_GDDR6_Phantom_Gaming_D2_OC_14_Gbps_5fe49047-grn.jpg',
    description: 'Tipo pcie, Chipset Gpu RXT 5600, Entrada Video No, Puente Para Sli/croosfirex Crossfire, Doble Puente No, Velocidad Del Core Base 1420 mhz, Velocidad Memoria 12000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 6 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1750 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2304',
    category: 'VGA',
    stock: 7,
    brand: 'AMD',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 302,
    productName: 'Placa de Video Asrock Radeon RX 6800 XT 16GB GDDR6 TAICHI OC X',
    price: 282290,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24238_Placa_de_Video_Asrock_Radeon_RX_6800_XT_16GB_GDDR6_TAICHI_OC_X_22e343de-grn.jpg',
    description: 'Tipo pcie, Chipset Gpu RX 6800 XT, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing, Velocidad Memoria 16000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 16 gb, Interface De Memoria 256 bits, Velocidad Del Core Turbo 2360 mhz, Tipos De Procesos Stream, Cantidad De Procesos 4608',
    category: 'VGA',
    stock: 9,
    brand: 'AMD',
    disabled: false,
    compatible: 'AMD',
    Reviews: [],
  }
    ,
  {
    idProduct: 400,
    productName: 'Procesador Intel Core i3 10100F 4.3GHz Turbo 1200 Comet Lake',
    price: 15050,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23223_Procesador_Intel_Core_i3_10100F_4.3GHz_Turbo_1200_Comet_Lake_6ea64940-grn.jpg',
    description: 'Modelo 10100F, Socket 1200 Comet Lake, Núcleos 4, Frecuencia 3600.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 8, Frecuencia Turbo 4300 mhz, Familia Intel Core i3',
    category: 'Processor',
    stock: 4,
    brand: 'Intel',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 401,
    productName: 'Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake',
    price: 34400,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18901_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_198a8076-grn.jpg',
    description: 'Modelo Core i5 10400F, Socket 1200 Comet Lake, Núcleos 6, Frecuencia 2900.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 12, Frecuencia Turbo 4300 mhz, Familia Intel Core i5',
    category: 'Processor',
    stock: 9,
    brand: 'Intel',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 402,
    productName: 'Procesador Intel Core i7 10700F 4.8GHz Turbo Socket 1200 Comet Lake',
    price: 57250,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22505_Procesador_Intel_Core_i7_10700F_4.8GHz_Turbo_Socket_1200_Comet_Lake_609ce7c6-grn.jpg',
    description: 'Modelo 10700F, Socket 1200 Comet Lake, Núcleos 8, Frecuencia 2900.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 16, Frecuencia Turbo 4800 mhz, Familia Intel Core i7',
    category: 'Processor',
    stock: 10,
    brand: 'Intel',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 500,
    productName: 'Mother Gigabyte B560M DS3H V2',
    price: 15690,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33799_Mother_Gigabyte_B560M_DS3H_V2_f079c003-grn.jpg',
    description: 'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel B560, Boton Bios Flashback No, Watts Máximos Para Cpu 125, Placa De Sonido 7.1 Realtek ALC 897, Sistema De Conexión Rgb ARGB Header,RGB Header',
    category: 'Mother',
    stock: 6,
    brand: 'Gigabyte',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 501,
    productName: 'Mother ASUS PRIME B560M-A S1200 11th Gen PCIe 4.0 ',
    price: 21200,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28077_Mother_ASUS_PRIME_B560M-A_S1200_11th_Gen_PCIe_4.0_efdc4908-grn.jpg',
    description: 'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel B560, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 235, Placa De Sonido 7.1 Realtek ALC 897',
    category: 'Mother',
    stock: 7,
    brand: 'ASUS',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 502,
    productName: 'Mother Gigabyte Z590M GAMING X s12005',
    price: 30200,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27159_Mother_Gigabyte_Z590M_GAMING_X_s12005_ab1686f9-grn.jpg',
    description: 'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel Z590, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 125, Placa De Sonido 7.1 Realtek ALC 897',
    category: 'Mother',
    stock: 4,
    brand: 'Gigabyte',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 600,
    productName: 'Placa de Video ASUS GeForce GTX 1660 TI 6GB GDDR6 TUF EVO OC',
    price: 77040,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28866_Placa_de_Video_ASUS_GeForce_GTX_1660_TI_6GB_GDDR6_TUF_EVO_OC_c3ef28a0-grn.jpg',
    description: 'Tipo pcie, Chipset Gpu GTX 1660 Ti, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Velocidad Memoria 14000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 6 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1845 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 1536',
    category: 'VGA',
    stock: 9,
    brand: 'GeForce',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 601,
    productName: 'Placa de Video ASUS GeForce RTX 3060 12GB GDDR6 ROG STRIX GAMING OC V2 LHR',
    price: 115350,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27889_Placa_de_Video_ASUS_GeForce_RTX_3060_12GB_GDDR6_ROG_STRIX__GAMING_OC_V2_LHR_75854af0-grn.jpg',
    description: 'Tipo pcie, Chipset Gpu RTX 3060, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing + DLSS, Velocidad Memoria 15000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 12 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1912 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 3584',
    category: 'VGA',
    stock: 2,
    brand: 'GeForce',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 602,
    productName: 'Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X TUF GAMING OC',
    price: 299900,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27836_Placa_de_Video_ASUS_GeForce_RTX_3090_24GB_GDDR6X_TUF_GAMING_OC_c5a7da31-grn.jpg',
    description: 'Tipo pcie, Chipset Gpu RTX 3090, Entrada Video No, Puente Para Sli/croosfirex SLI, Doble Puente No, Características Especiales, Ray Tracing + DLSS, Velocidad Memoria 19500 mhz, Tipo De Memoria GDDR6X, Capacidad De Memoria 24 gb, Interface De Memoria 384 bits, Velocidad Del Core Turbo 1770 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 10496',
    category: 'VGA',
    stock: 3,
    brand: 'GeForce',
    disabled: false,
    compatible: 'Intel',
    Reviews: [],
  }
    ,
  {
    idProduct: 700,
    productName: 'Memoria OLOy DDR4 16GB 3000MHz Owl Red CL16',
    price: 13902,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22283_Memoria_OLOy_DDR4_16GB_3000MHz_Owl_Red_CL16_afce20e5-grn.jpg',
    description: 'Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v',
    category: 'Memory',
    stock: 9,
    brand: 'OLOy',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 701,
    productName: 'Memoria Patriot Viper DDR4 8GB 3200MHz Steel',
    price: 7850,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18964_Memoria_Patriot_Viper_DDR4_8GB_3200MHz_Steel_72af2fec-grn.jpg',
    description: 'Capacidad 8 gb, Velocidad 3200 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v',
    category: 'Memory',
    stock: 6,
    brand: 'Viper',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 702,
    productName: 'Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black',
    price: 15950,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg',
    description: 'Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v',
    category: 'Memory',
    stock: 7,
    brand: 'GeiL',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 800,
    productName: 'Disco Rígido WD 2TB BLACK 64MB SATA 6.0GB/s',
    price: 19999,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3183_Disco_R__gido_WD_2TB_BLACK_64MB_SATA_6.0GB_s__719de448-grn.jpg',
    description: 'Tipo De Conexión SATA, Consumo 35 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 2000 gb',
    category: 'Disk',
    stock: 10,
    brand: 'WD',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 801,
    productName: 'Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s',
    price: 8450,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9018_Disco_R__gido_WD_1TB_BLUE_64MB_SATA_6.0GB_s__ca74d162-grn.jpg',
    description: 'Tipo De Conexión SATA, Consumo 30 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 1000 gb',
    category: 'Disk',
    stock: 10,
    brand: 'WD',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 802,
    productName: 'Disco Rígido Seagate 1TB Barracuda 64MB SATA 6GB/s',
    price: 8450,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9847_Disco_R__gido_Seagate_1TB_Barracuda_64MB_SATA_6GB_s_b2f27e5a-grn.jpg',
    description: 'Tipo De Conexión SATA, Consumo 30 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 1000 gb',
    category: 'Disk',
    stock: 10,
    brand: 'WD',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 803,
    productName: 'Disco Solido SSD KingDian 120GB S280 500Mb/s',
    price: 3550,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33234_Disco_Solido_SSD_KingDian_120GB_S280_500Mb_s_c98f29db-grn.jpg',
    description: 'Tipo De Conexión SATA, Consumo 3 w, Tipo De Disco Solido, Memoria Cache 128 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 120 gb',
    category: 'Disk',
    stock: 19,
    brand: 'KingDian',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 804,
    productName: 'Disco Solido SSD Team 256GB GX2 530MB/s',
    price: 4522,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33801_Disco_Solido_SSD_Team_256GB_GX2_530MB_s_7d116a15-grn.jpg',
    description: 'Tipo De Conexión SATA, Consumo 4 w, Tipo De Disco Solido, Memoria Cache 128 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 256 gb',
    category: 'Disk',
    stock: 13,
    brand: 'Team',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 805,
    productName: 'Disco Solido SSD Patriot 512GB P210 520Mb/s 2.5 ',
    price: 8586,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30462_Disco_Solido_SSD_Patriot_512GB_P210_520Mb_s_2.5_d1f3e4f8-grn.jpg',
    description: 'Tipo De Conexión SATA, Consumo 5 w, Tipo De Disco Solido, Memoria Cache 520 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 512 gb',
    category: 'Disk',
    stock: 15,
    brand: 'Patriot',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 900,
    productName: 'Fuente ASUS TUF 550B 80 Plus Bronze 550W',
    price: 15530,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23310_Fuente_ASUS_TUF_550B_80_Plus_Bronze_550W_cfcb396e-grn.jpg',
    description: 'Watts Nominal 550 w, Watts Reales 540 w, Formato ATX, Compatible Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Bronze, Modo Híbrido No, Tipo De Cableado Cables fijos, Ampers En Linea +12V 45 a, Fuente Digital No, Color Negro',
    category: 'Fuente',
    stock: 3,
    brand: 'ASUS',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 901,
    productName: 'Fuente Gamemax 1050W 80 Plus Silver Modular GP-1050',
    price: 33400,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12323_Fuente_Gamemax_1050W_80_Plus_Silver_Modular_GP-1050_f043de89-grn.jpg',
    description: 'Watts Nominal 1050 w, Watts Reales 912 w, Formato ATX, Compatible Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Silver, Modo Híbrido No, Tipo De Cableado Semi Modular, Ampers En Linea +12V 76 a, Fuente Digital No, Color Negro, Iluminación Del Cooler Verder',
    category: 'Fuente',
    stock: 2,
    brand: 'Gamemax',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 902,
    productName: 'Fuente ASUS ROG STRIX 1000G 80 Plus Gold Full Modular 1000W',
    price: 41399,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33006_Fuente_ASUS_ROG_STRIX_1000G_80_Plus_Gold_Full_Modular_1000W_8c2a799c-grn.jpg',
    description: 'Watts Nominal 1000 w, Watts Reales 996 w, Formato ATX, Compatible Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Gold, Modo Híbrido Si, Tipo De Cableado Full Modular, Ampers En Linea +12V 83 a, Fuente Digital No, Color Negro',
    category: 'Fuente',
    stock: 3,
    brand: 'ASUS',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 1000,
    productName: 'Gabinete Aerocool Klaw Black ARGB Vidrio Templado ATX',
    price: 16900,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13520_Gabinete_Aerocool_Klaw_Black_ARGB_Vidrio_Templado_ATX_9f55b6a2-grn.jpg',
    description: 'Factor Mother ITX,ATX,M-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Negro, Ancho 228 mm, Alto 445 mm, Profundidad 461 mm, Largo Máximo Vga 370 mm, Altura Máxima Del Cooler Cpu 164.00 mm',
    category: 'Gabinete',
    stock: 7,
    brand: 'Aerocool',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 1001,
    productName: 'Gabinete ASUS TUF GT501 Vidrio Templado White 3x120mm ARGB',
    price: 39300,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24591_Gabinete_ASUS_TUF_GT501_Vidrio_Templado_White_3x120mm_ARGB_608fa40d-grn.jpg',
    description: 'Factor Mother ITX,M-ATX,ATX,E-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Blanco, Ancho 251 mm, Alto 552 mm, Profundidad 545 mm, Largo Máximo Vga 420 mm, Altura Máxima Del Cooler Cpu 180.00 mm',
    category: 'Gabinete',
    stock: 6,
    brand: 'ASUS',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }
    ,
  {
    idProduct: 1002,
    productName: 'Gabinete Cooler Master COSMOS C700M ARGB E-ATX',
    price: 126200,
    image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15982_Gabinete_Cooler_Master_COSMOS_C700M_ARGB_E-ATX_14e3e773-grn.jpg',
    description: 'Factor Mother ITX,ATX,E-ATX,M-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Negro,Gris, Ancho 306 mm, Alto 651 mm, Profundidad 650 mm, Largo Máximo Vga 490 mm, Altura Máxima Del Cooler Cpu 198.00 mm',
    category: 'Gabinete',
    stock: 3,
    brand: 'Cooler Master',
    disabled: false,
    compatible: 'All',
    Reviews: [],
  }]

  let categorias = new Set(productos?.map(e => e.category))
  const category = [...categorias]
  const [cat, setCat] = useState(0)
  let brand = props.match.params.brand
  let brandProduct = productos.filter(e => e.compatible === brand || e.compatible === "All")
  let productCategory = brandProduct.filter(e => e.category === category[cat])


  const nextCategory = async (e) => {
    dispatch(buildPC(e))
    setCat(cat + 1)

  }

  const addProductCartStorage = (o) => {

    let a = JSON.parse(localStorage.getItem(stringLocalStorage));
      
    let totalArr = a.concat(o)
    
    let ids = new Set(totalArr?.map(e => e.idProduct))
    const carroComp = [...ids]
    let carroPost = []

    for (let i = 0; i < carroComp.length; i++) {
      
      carroPost.push(productos.find( e => e.idProduct === carroComp[i] ))
      
    }
    
    localStorage.setItem(stringLocalStorage, JSON.stringify(carroPost));
    
    return;


  };

  return (
    <div className={style.containerTotal}>


      <div className={style.containerBuild}>
        <div className={style.build}>
          <div className={style.imgLabel}>
            {buildPCState?.length > 0 ? <img alt="1" className={style.buildImg} src={img1} /> : <img alt="1" className={style.buildImg} src='https://compragamer.net/img_armado/paso2.png' />}
            {buildPCState?.length > 0 ? <label className={style.labelBuild}>- {buildPCState[0].productName}</label> : <label>- Procesador</label>}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 1 ? <img alt="2" className={style.buildImg} src={img2} /> : <img alt="2" className={style.buildImg} src='https://compragamer.net/img_armado/paso1.png' />}
            {buildPCState?.length > 1 ? <label className={style.labelBuild}>{buildPCState[1].productName}</label> : <label>- Mother</label>}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 2 ? <img alt="3" className={style.buildImg} src={img3} /> : <img alt="3" className={style.buildImg} src='https://compragamer.net/img_armado/paso5.png' />}
            {buildPCState?.length > 2 ? <label className={style.labelBuild}>{buildPCState[2].productName}</label> : <label>- Placa de Video</label>}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 3 ? <img alt="4" className={style.buildImg} src={img4} /> : <img alt="4" className={style.buildImg} src='https://compragamer.net/img_armado/paso4.png' />}
            {buildPCState?.length > 3 ? <label className={style.labelBuild}>{buildPCState[3].productName}</label> : <label>- Memoria RAM</label>}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 4 ? <img alt="5" className={style.buildImg} src={img5} /> : <img alt="5" className={style.buildImg} src='https://compragamer.net/img_armado/paso6.png' />}
            {buildPCState?.length > 4 ? <label className={style.labelBuild}>{buildPCState[4].productName}</label> : <label>- Almacenamiento</label>}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 5 ? <img alt="6" className={style.buildImg} src={img6} /> : <img alt="6" className={style.buildImg} src='https://compragamer.net/img_armado/paso11.png' />}
            {buildPCState?.length > 5 ? <label className={style.labelBuild}>{buildPCState[5].productName}</label> : <label>- Fuente</label>}
          </div>
          <div className={style.imgLabel}>
            {buildPCState?.length > 6 ? <img alt="7" className={style.buildImg} src={img7} /> : <img alt="7" className={style.buildImg} src='https://compragamer.net/img_armado/paso10.png' />}
            {buildPCState?.length > 6 ? <label className={style.labelBuild}>{buildPCState[6].productName}</label> : <label>- Gabinete</label>}
          </div>
        </div>
        {buildPCState?.length > 6? 
        <div className={style.button}>
        <Link to="/cart">
        <button onClick={() => addProductCartStorage(buildPCState)} className={style.button}> Agregar al carrito</button>
        </Link>
      </div>
      :<label></label>}

      </div>


      <div className={style.containerProducts}>

        {buildPCState?.length === 7 ? <ConfirmBuild components={buildPCState} /> :

          productCategory?.map((e, index) => (


            <button key={index} className={style.buttonBuild} name={e.idProduct} onClick={() => nextCategory(e)}>
              <Card
                ob={e}
                price={e.price}
                name={e.productName}
                img={e.image}
                id={e.idProduct}
                key={index}
              />
            </button>


          ))
        }
      </div>

      {/*     <Stepper>
          <Step>
            <StepLabel>First</StepLabel>
          </Step>
      </Stepper> */}

    </div>
  )
}

export default ProcessorSelector