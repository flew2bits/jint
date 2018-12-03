// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Uppercase_Letter`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000100,
    0x000102,
    0x000104,
    0x000106,
    0x000108,
    0x00010A,
    0x00010C,
    0x00010E,
    0x000110,
    0x000112,
    0x000114,
    0x000116,
    0x000118,
    0x00011A,
    0x00011C,
    0x00011E,
    0x000120,
    0x000122,
    0x000124,
    0x000126,
    0x000128,
    0x00012A,
    0x00012C,
    0x00012E,
    0x000130,
    0x000132,
    0x000134,
    0x000136,
    0x000139,
    0x00013B,
    0x00013D,
    0x00013F,
    0x000141,
    0x000143,
    0x000145,
    0x000147,
    0x00014A,
    0x00014C,
    0x00014E,
    0x000150,
    0x000152,
    0x000154,
    0x000156,
    0x000158,
    0x00015A,
    0x00015C,
    0x00015E,
    0x000160,
    0x000162,
    0x000164,
    0x000166,
    0x000168,
    0x00016A,
    0x00016C,
    0x00016E,
    0x000170,
    0x000172,
    0x000174,
    0x000176,
    0x00017B,
    0x00017D,
    0x000184,
    0x0001A2,
    0x0001A4,
    0x0001A9,
    0x0001AC,
    0x0001B5,
    0x0001BC,
    0x0001C4,
    0x0001C7,
    0x0001CA,
    0x0001CD,
    0x0001CF,
    0x0001D1,
    0x0001D3,
    0x0001D5,
    0x0001D7,
    0x0001D9,
    0x0001DB,
    0x0001DE,
    0x0001E0,
    0x0001E2,
    0x0001E4,
    0x0001E6,
    0x0001E8,
    0x0001EA,
    0x0001EC,
    0x0001EE,
    0x0001F1,
    0x0001F4,
    0x0001FA,
    0x0001FC,
    0x0001FE,
    0x000200,
    0x000202,
    0x000204,
    0x000206,
    0x000208,
    0x00020A,
    0x00020C,
    0x00020E,
    0x000210,
    0x000212,
    0x000214,
    0x000216,
    0x000218,
    0x00021A,
    0x00021C,
    0x00021E,
    0x000220,
    0x000222,
    0x000224,
    0x000226,
    0x000228,
    0x00022A,
    0x00022C,
    0x00022E,
    0x000230,
    0x000232,
    0x000241,
    0x000248,
    0x00024A,
    0x00024C,
    0x00024E,
    0x000370,
    0x000372,
    0x000376,
    0x00037F,
    0x000386,
    0x00038C,
    0x0003CF,
    0x0003D8,
    0x0003DA,
    0x0003DC,
    0x0003DE,
    0x0003E0,
    0x0003E2,
    0x0003E4,
    0x0003E6,
    0x0003E8,
    0x0003EA,
    0x0003EC,
    0x0003EE,
    0x0003F4,
    0x0003F7,
    0x000460,
    0x000462,
    0x000464,
    0x000466,
    0x000468,
    0x00046A,
    0x00046C,
    0x00046E,
    0x000470,
    0x000472,
    0x000474,
    0x000476,
    0x000478,
    0x00047A,
    0x00047C,
    0x00047E,
    0x000480,
    0x00048A,
    0x00048C,
    0x00048E,
    0x000490,
    0x000492,
    0x000494,
    0x000496,
    0x000498,
    0x00049A,
    0x00049C,
    0x00049E,
    0x0004A0,
    0x0004A2,
    0x0004A4,
    0x0004A6,
    0x0004A8,
    0x0004AA,
    0x0004AC,
    0x0004AE,
    0x0004B0,
    0x0004B2,
    0x0004B4,
    0x0004B6,
    0x0004B8,
    0x0004BA,
    0x0004BC,
    0x0004BE,
    0x0004C3,
    0x0004C5,
    0x0004C7,
    0x0004C9,
    0x0004CB,
    0x0004CD,
    0x0004D0,
    0x0004D2,
    0x0004D4,
    0x0004D6,
    0x0004D8,
    0x0004DA,
    0x0004DC,
    0x0004DE,
    0x0004E0,
    0x0004E2,
    0x0004E4,
    0x0004E6,
    0x0004E8,
    0x0004EA,
    0x0004EC,
    0x0004EE,
    0x0004F0,
    0x0004F2,
    0x0004F4,
    0x0004F6,
    0x0004F8,
    0x0004FA,
    0x0004FC,
    0x0004FE,
    0x000500,
    0x000502,
    0x000504,
    0x000506,
    0x000508,
    0x00050A,
    0x00050C,
    0x00050E,
    0x000510,
    0x000512,
    0x000514,
    0x000516,
    0x000518,
    0x00051A,
    0x00051C,
    0x00051E,
    0x000520,
    0x000522,
    0x000524,
    0x000526,
    0x000528,
    0x00052A,
    0x00052C,
    0x00052E,
    0x0010C7,
    0x0010CD,
    0x001E00,
    0x001E02,
    0x001E04,
    0x001E06,
    0x001E08,
    0x001E0A,
    0x001E0C,
    0x001E0E,
    0x001E10,
    0x001E12,
    0x001E14,
    0x001E16,
    0x001E18,
    0x001E1A,
    0x001E1C,
    0x001E1E,
    0x001E20,
    0x001E22,
    0x001E24,
    0x001E26,
    0x001E28,
    0x001E2A,
    0x001E2C,
    0x001E2E,
    0x001E30,
    0x001E32,
    0x001E34,
    0x001E36,
    0x001E38,
    0x001E3A,
    0x001E3C,
    0x001E3E,
    0x001E40,
    0x001E42,
    0x001E44,
    0x001E46,
    0x001E48,
    0x001E4A,
    0x001E4C,
    0x001E4E,
    0x001E50,
    0x001E52,
    0x001E54,
    0x001E56,
    0x001E58,
    0x001E5A,
    0x001E5C,
    0x001E5E,
    0x001E60,
    0x001E62,
    0x001E64,
    0x001E66,
    0x001E68,
    0x001E6A,
    0x001E6C,
    0x001E6E,
    0x001E70,
    0x001E72,
    0x001E74,
    0x001E76,
    0x001E78,
    0x001E7A,
    0x001E7C,
    0x001E7E,
    0x001E80,
    0x001E82,
    0x001E84,
    0x001E86,
    0x001E88,
    0x001E8A,
    0x001E8C,
    0x001E8E,
    0x001E90,
    0x001E92,
    0x001E94,
    0x001E9E,
    0x001EA0,
    0x001EA2,
    0x001EA4,
    0x001EA6,
    0x001EA8,
    0x001EAA,
    0x001EAC,
    0x001EAE,
    0x001EB0,
    0x001EB2,
    0x001EB4,
    0x001EB6,
    0x001EB8,
    0x001EBA,
    0x001EBC,
    0x001EBE,
    0x001EC0,
    0x001EC2,
    0x001EC4,
    0x001EC6,
    0x001EC8,
    0x001ECA,
    0x001ECC,
    0x001ECE,
    0x001ED0,
    0x001ED2,
    0x001ED4,
    0x001ED6,
    0x001ED8,
    0x001EDA,
    0x001EDC,
    0x001EDE,
    0x001EE0,
    0x001EE2,
    0x001EE4,
    0x001EE6,
    0x001EE8,
    0x001EEA,
    0x001EEC,
    0x001EEE,
    0x001EF0,
    0x001EF2,
    0x001EF4,
    0x001EF6,
    0x001EF8,
    0x001EFA,
    0x001EFC,
    0x001EFE,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x001F5F,
    0x002102,
    0x002107,
    0x002115,
    0x002124,
    0x002126,
    0x002128,
    0x002145,
    0x002183,
    0x002C60,
    0x002C67,
    0x002C69,
    0x002C6B,
    0x002C72,
    0x002C75,
    0x002C82,
    0x002C84,
    0x002C86,
    0x002C88,
    0x002C8A,
    0x002C8C,
    0x002C8E,
    0x002C90,
    0x002C92,
    0x002C94,
    0x002C96,
    0x002C98,
    0x002C9A,
    0x002C9C,
    0x002C9E,
    0x002CA0,
    0x002CA2,
    0x002CA4,
    0x002CA6,
    0x002CA8,
    0x002CAA,
    0x002CAC,
    0x002CAE,
    0x002CB0,
    0x002CB2,
    0x002CB4,
    0x002CB6,
    0x002CB8,
    0x002CBA,
    0x002CBC,
    0x002CBE,
    0x002CC0,
    0x002CC2,
    0x002CC4,
    0x002CC6,
    0x002CC8,
    0x002CCA,
    0x002CCC,
    0x002CCE,
    0x002CD0,
    0x002CD2,
    0x002CD4,
    0x002CD6,
    0x002CD8,
    0x002CDA,
    0x002CDC,
    0x002CDE,
    0x002CE0,
    0x002CE2,
    0x002CEB,
    0x002CED,
    0x002CF2,
    0x00A640,
    0x00A642,
    0x00A644,
    0x00A646,
    0x00A648,
    0x00A64A,
    0x00A64C,
    0x00A64E,
    0x00A650,
    0x00A652,
    0x00A654,
    0x00A656,
    0x00A658,
    0x00A65A,
    0x00A65C,
    0x00A65E,
    0x00A660,
    0x00A662,
    0x00A664,
    0x00A666,
    0x00A668,
    0x00A66A,
    0x00A66C,
    0x00A680,
    0x00A682,
    0x00A684,
    0x00A686,
    0x00A688,
    0x00A68A,
    0x00A68C,
    0x00A68E,
    0x00A690,
    0x00A692,
    0x00A694,
    0x00A696,
    0x00A698,
    0x00A69A,
    0x00A722,
    0x00A724,
    0x00A726,
    0x00A728,
    0x00A72A,
    0x00A72C,
    0x00A72E,
    0x00A732,
    0x00A734,
    0x00A736,
    0x00A738,
    0x00A73A,
    0x00A73C,
    0x00A73E,
    0x00A740,
    0x00A742,
    0x00A744,
    0x00A746,
    0x00A748,
    0x00A74A,
    0x00A74C,
    0x00A74E,
    0x00A750,
    0x00A752,
    0x00A754,
    0x00A756,
    0x00A758,
    0x00A75A,
    0x00A75C,
    0x00A75E,
    0x00A760,
    0x00A762,
    0x00A764,
    0x00A766,
    0x00A768,
    0x00A76A,
    0x00A76C,
    0x00A76E,
    0x00A779,
    0x00A77B,
    0x00A780,
    0x00A782,
    0x00A784,
    0x00A786,
    0x00A78B,
    0x00A78D,
    0x00A790,
    0x00A792,
    0x00A796,
    0x00A798,
    0x00A79A,
    0x00A79C,
    0x00A79E,
    0x00A7A0,
    0x00A7A2,
    0x00A7A4,
    0x00A7A6,
    0x00A7A8,
    0x00A7B6,
    0x00A7B8,
    0x01D49C,
    0x01D4A2,
    0x01D546,
    0x01D7CA
  ],
  ranges: [
    [0x000041, 0x00005A],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000DE],
    [0x000178, 0x000179],
    [0x000181, 0x000182],
    [0x000186, 0x000187],
    [0x000189, 0x00018B],
    [0x00018E, 0x000191],
    [0x000193, 0x000194],
    [0x000196, 0x000198],
    [0x00019C, 0x00019D],
    [0x00019F, 0x0001A0],
    [0x0001A6, 0x0001A7],
    [0x0001AE, 0x0001AF],
    [0x0001B1, 0x0001B3],
    [0x0001B7, 0x0001B8],
    [0x0001F6, 0x0001F8],
    [0x00023A, 0x00023B],
    [0x00023D, 0x00023E],
    [0x000243, 0x000246],
    [0x000388, 0x00038A],
    [0x00038E, 0x00038F],
    [0x000391, 0x0003A1],
    [0x0003A3, 0x0003AB],
    [0x0003D2, 0x0003D4],
    [0x0003F9, 0x0003FA],
    [0x0003FD, 0x00042F],
    [0x0004C0, 0x0004C1],
    [0x000531, 0x000556],
    [0x0010A0, 0x0010C5],
    [0x0013A0, 0x0013F5],
    [0x001C90, 0x001CBA],
    [0x001CBD, 0x001CBF],
    [0x001F08, 0x001F0F],
    [0x001F18, 0x001F1D],
    [0x001F28, 0x001F2F],
    [0x001F38, 0x001F3F],
    [0x001F48, 0x001F4D],
    [0x001F68, 0x001F6F],
    [0x001FB8, 0x001FBB],
    [0x001FC8, 0x001FCB],
    [0x001FD8, 0x001FDB],
    [0x001FE8, 0x001FEC],
    [0x001FF8, 0x001FFB],
    [0x00210B, 0x00210D],
    [0x002110, 0x002112],
    [0x002119, 0x00211D],
    [0x00212A, 0x00212D],
    [0x002130, 0x002133],
    [0x00213E, 0x00213F],
    [0x002C00, 0x002C2E],
    [0x002C62, 0x002C64],
    [0x002C6D, 0x002C70],
    [0x002C7E, 0x002C80],
    [0x00A77D, 0x00A77E],
    [0x00A7AA, 0x00A7AE],
    [0x00A7B0, 0x00A7B4],
    [0x00FF21, 0x00FF3A],
    [0x010400, 0x010427],
    [0x0104B0, 0x0104D3],
    [0x010C80, 0x010CB2],
    [0x0118A0, 0x0118BF],
    [0x016E40, 0x016E5F],
    [0x01D400, 0x01D419],
    [0x01D434, 0x01D44D],
    [0x01D468, 0x01D481],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B5],
    [0x01D4D0, 0x01D4E9],
    [0x01D504, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D538, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D56C, 0x01D585],
    [0x01D5A0, 0x01D5B9],
    [0x01D5D4, 0x01D5ED],
    [0x01D608, 0x01D621],
    [0x01D63C, 0x01D655],
    [0x01D670, 0x01D689],
    [0x01D6A8, 0x01D6C0],
    [0x01D6E2, 0x01D6FA],
    [0x01D71C, 0x01D734],
    [0x01D756, 0x01D76E],
    [0x01D790, 0x01D7A8],
    [0x01E900, 0x01E921]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Uppercase_Letter}+$/u,
  matchSymbols,
  "\\p{General_Category=Uppercase_Letter}"
);
testPropertyEscapes(
  /^\p{General_Category=Lu}+$/u,
  matchSymbols,
  "\\p{General_Category=Lu}"
);
testPropertyEscapes(
  /^\p{gc=Uppercase_Letter}+$/u,
  matchSymbols,
  "\\p{gc=Uppercase_Letter}"
);
testPropertyEscapes(
  /^\p{gc=Lu}+$/u,
  matchSymbols,
  "\\p{gc=Lu}"
);
testPropertyEscapes(
  /^\p{Uppercase_Letter}+$/u,
  matchSymbols,
  "\\p{Uppercase_Letter}"
);
testPropertyEscapes(
  /^\p{Lu}+$/u,
  matchSymbols,
  "\\p{Lu}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000D7,
    0x000101,
    0x000103,
    0x000105,
    0x000107,
    0x000109,
    0x00010B,
    0x00010D,
    0x00010F,
    0x000111,
    0x000113,
    0x000115,
    0x000117,
    0x000119,
    0x00011B,
    0x00011D,
    0x00011F,
    0x000121,
    0x000123,
    0x000125,
    0x000127,
    0x000129,
    0x00012B,
    0x00012D,
    0x00012F,
    0x000131,
    0x000133,
    0x000135,
    0x00013A,
    0x00013C,
    0x00013E,
    0x000140,
    0x000142,
    0x000144,
    0x000146,
    0x00014B,
    0x00014D,
    0x00014F,
    0x000151,
    0x000153,
    0x000155,
    0x000157,
    0x000159,
    0x00015B,
    0x00015D,
    0x00015F,
    0x000161,
    0x000163,
    0x000165,
    0x000167,
    0x000169,
    0x00016B,
    0x00016D,
    0x00016F,
    0x000171,
    0x000173,
    0x000175,
    0x000177,
    0x00017A,
    0x00017C,
    0x000183,
    0x000185,
    0x000188,
    0x000192,
    0x000195,
    0x00019E,
    0x0001A1,
    0x0001A3,
    0x0001A5,
    0x0001A8,
    0x0001AD,
    0x0001B0,
    0x0001B4,
    0x0001B6,
    0x0001CE,
    0x0001D0,
    0x0001D2,
    0x0001D4,
    0x0001D6,
    0x0001D8,
    0x0001DA,
    0x0001DF,
    0x0001E1,
    0x0001E3,
    0x0001E5,
    0x0001E7,
    0x0001E9,
    0x0001EB,
    0x0001ED,
    0x0001F5,
    0x0001F9,
    0x0001FB,
    0x0001FD,
    0x0001FF,
    0x000201,
    0x000203,
    0x000205,
    0x000207,
    0x000209,
    0x00020B,
    0x00020D,
    0x00020F,
    0x000211,
    0x000213,
    0x000215,
    0x000217,
    0x000219,
    0x00021B,
    0x00021D,
    0x00021F,
    0x000221,
    0x000223,
    0x000225,
    0x000227,
    0x000229,
    0x00022B,
    0x00022D,
    0x00022F,
    0x000231,
    0x00023C,
    0x000242,
    0x000247,
    0x000249,
    0x00024B,
    0x00024D,
    0x000371,
    0x000387,
    0x00038B,
    0x00038D,
    0x000390,
    0x0003A2,
    0x0003D9,
    0x0003DB,
    0x0003DD,
    0x0003DF,
    0x0003E1,
    0x0003E3,
    0x0003E5,
    0x0003E7,
    0x0003E9,
    0x0003EB,
    0x0003ED,
    0x0003F8,
    0x000461,
    0x000463,
    0x000465,
    0x000467,
    0x000469,
    0x00046B,
    0x00046D,
    0x00046F,
    0x000471,
    0x000473,
    0x000475,
    0x000477,
    0x000479,
    0x00047B,
    0x00047D,
    0x00047F,
    0x00048B,
    0x00048D,
    0x00048F,
    0x000491,
    0x000493,
    0x000495,
    0x000497,
    0x000499,
    0x00049B,
    0x00049D,
    0x00049F,
    0x0004A1,
    0x0004A3,
    0x0004A5,
    0x0004A7,
    0x0004A9,
    0x0004AB,
    0x0004AD,
    0x0004AF,
    0x0004B1,
    0x0004B3,
    0x0004B5,
    0x0004B7,
    0x0004B9,
    0x0004BB,
    0x0004BD,
    0x0004BF,
    0x0004C2,
    0x0004C4,
    0x0004C6,
    0x0004C8,
    0x0004CA,
    0x0004CC,
    0x0004D1,
    0x0004D3,
    0x0004D5,
    0x0004D7,
    0x0004D9,
    0x0004DB,
    0x0004DD,
    0x0004DF,
    0x0004E1,
    0x0004E3,
    0x0004E5,
    0x0004E7,
    0x0004E9,
    0x0004EB,
    0x0004ED,
    0x0004EF,
    0x0004F1,
    0x0004F3,
    0x0004F5,
    0x0004F7,
    0x0004F9,
    0x0004FB,
    0x0004FD,
    0x0004FF,
    0x000501,
    0x000503,
    0x000505,
    0x000507,
    0x000509,
    0x00050B,
    0x00050D,
    0x00050F,
    0x000511,
    0x000513,
    0x000515,
    0x000517,
    0x000519,
    0x00051B,
    0x00051D,
    0x00051F,
    0x000521,
    0x000523,
    0x000525,
    0x000527,
    0x000529,
    0x00052B,
    0x00052D,
    0x0010C6,
    0x001E01,
    0x001E03,
    0x001E05,
    0x001E07,
    0x001E09,
    0x001E0B,
    0x001E0D,
    0x001E0F,
    0x001E11,
    0x001E13,
    0x001E15,
    0x001E17,
    0x001E19,
    0x001E1B,
    0x001E1D,
    0x001E1F,
    0x001E21,
    0x001E23,
    0x001E25,
    0x001E27,
    0x001E29,
    0x001E2B,
    0x001E2D,
    0x001E2F,
    0x001E31,
    0x001E33,
    0x001E35,
    0x001E37,
    0x001E39,
    0x001E3B,
    0x001E3D,
    0x001E3F,
    0x001E41,
    0x001E43,
    0x001E45,
    0x001E47,
    0x001E49,
    0x001E4B,
    0x001E4D,
    0x001E4F,
    0x001E51,
    0x001E53,
    0x001E55,
    0x001E57,
    0x001E59,
    0x001E5B,
    0x001E5D,
    0x001E5F,
    0x001E61,
    0x001E63,
    0x001E65,
    0x001E67,
    0x001E69,
    0x001E6B,
    0x001E6D,
    0x001E6F,
    0x001E71,
    0x001E73,
    0x001E75,
    0x001E77,
    0x001E79,
    0x001E7B,
    0x001E7D,
    0x001E7F,
    0x001E81,
    0x001E83,
    0x001E85,
    0x001E87,
    0x001E89,
    0x001E8B,
    0x001E8D,
    0x001E8F,
    0x001E91,
    0x001E93,
    0x001E9F,
    0x001EA1,
    0x001EA3,
    0x001EA5,
    0x001EA7,
    0x001EA9,
    0x001EAB,
    0x001EAD,
    0x001EAF,
    0x001EB1,
    0x001EB3,
    0x001EB5,
    0x001EB7,
    0x001EB9,
    0x001EBB,
    0x001EBD,
    0x001EBF,
    0x001EC1,
    0x001EC3,
    0x001EC5,
    0x001EC7,
    0x001EC9,
    0x001ECB,
    0x001ECD,
    0x001ECF,
    0x001ED1,
    0x001ED3,
    0x001ED5,
    0x001ED7,
    0x001ED9,
    0x001EDB,
    0x001EDD,
    0x001EDF,
    0x001EE1,
    0x001EE3,
    0x001EE5,
    0x001EE7,
    0x001EE9,
    0x001EEB,
    0x001EED,
    0x001EEF,
    0x001EF1,
    0x001EF3,
    0x001EF5,
    0x001EF7,
    0x001EF9,
    0x001EFB,
    0x001EFD,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x002125,
    0x002127,
    0x002129,
    0x002C61,
    0x002C68,
    0x002C6A,
    0x002C6C,
    0x002C71,
    0x002C81,
    0x002C83,
    0x002C85,
    0x002C87,
    0x002C89,
    0x002C8B,
    0x002C8D,
    0x002C8F,
    0x002C91,
    0x002C93,
    0x002C95,
    0x002C97,
    0x002C99,
    0x002C9B,
    0x002C9D,
    0x002C9F,
    0x002CA1,
    0x002CA3,
    0x002CA5,
    0x002CA7,
    0x002CA9,
    0x002CAB,
    0x002CAD,
    0x002CAF,
    0x002CB1,
    0x002CB3,
    0x002CB5,
    0x002CB7,
    0x002CB9,
    0x002CBB,
    0x002CBD,
    0x002CBF,
    0x002CC1,
    0x002CC3,
    0x002CC5,
    0x002CC7,
    0x002CC9,
    0x002CCB,
    0x002CCD,
    0x002CCF,
    0x002CD1,
    0x002CD3,
    0x002CD5,
    0x002CD7,
    0x002CD9,
    0x002CDB,
    0x002CDD,
    0x002CDF,
    0x002CE1,
    0x002CEC,
    0x00A641,
    0x00A643,
    0x00A645,
    0x00A647,
    0x00A649,
    0x00A64B,
    0x00A64D,
    0x00A64F,
    0x00A651,
    0x00A653,
    0x00A655,
    0x00A657,
    0x00A659,
    0x00A65B,
    0x00A65D,
    0x00A65F,
    0x00A661,
    0x00A663,
    0x00A665,
    0x00A667,
    0x00A669,
    0x00A66B,
    0x00A681,
    0x00A683,
    0x00A685,
    0x00A687,
    0x00A689,
    0x00A68B,
    0x00A68D,
    0x00A68F,
    0x00A691,
    0x00A693,
    0x00A695,
    0x00A697,
    0x00A699,
    0x00A723,
    0x00A725,
    0x00A727,
    0x00A729,
    0x00A72B,
    0x00A72D,
    0x00A733,
    0x00A735,
    0x00A737,
    0x00A739,
    0x00A73B,
    0x00A73D,
    0x00A73F,
    0x00A741,
    0x00A743,
    0x00A745,
    0x00A747,
    0x00A749,
    0x00A74B,
    0x00A74D,
    0x00A74F,
    0x00A751,
    0x00A753,
    0x00A755,
    0x00A757,
    0x00A759,
    0x00A75B,
    0x00A75D,
    0x00A75F,
    0x00A761,
    0x00A763,
    0x00A765,
    0x00A767,
    0x00A769,
    0x00A76B,
    0x00A76D,
    0x00A77A,
    0x00A77C,
    0x00A77F,
    0x00A781,
    0x00A783,
    0x00A785,
    0x00A78C,
    0x00A791,
    0x00A797,
    0x00A799,
    0x00A79B,
    0x00A79D,
    0x00A79F,
    0x00A7A1,
    0x00A7A3,
    0x00A7A5,
    0x00A7A7,
    0x00A7A9,
    0x00A7AF,
    0x00A7B5,
    0x00A7B7,
    0x01D49D,
    0x01D4AD,
    0x01D506,
    0x01D515,
    0x01D53A,
    0x01D53F,
    0x01D545
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000040],
    [0x00005B, 0x0000BF],
    [0x0000DF, 0x0000FF],
    [0x000137, 0x000138],
    [0x000148, 0x000149],
    [0x00017E, 0x000180],
    [0x00018C, 0x00018D],
    [0x000199, 0x00019B],
    [0x0001AA, 0x0001AB],
    [0x0001B9, 0x0001BB],
    [0x0001BD, 0x0001C3],
    [0x0001C5, 0x0001C6],
    [0x0001C8, 0x0001C9],
    [0x0001CB, 0x0001CC],
    [0x0001DC, 0x0001DD],
    [0x0001EF, 0x0001F0],
    [0x0001F2, 0x0001F3],
    [0x000233, 0x000239],
    [0x00023F, 0x000240],
    [0x00024F, 0x00036F],
    [0x000373, 0x000375],
    [0x000377, 0x00037E],
    [0x000380, 0x000385],
    [0x0003AC, 0x0003CE],
    [0x0003D0, 0x0003D1],
    [0x0003D5, 0x0003D7],
    [0x0003EF, 0x0003F3],
    [0x0003F5, 0x0003F6],
    [0x0003FB, 0x0003FC],
    [0x000430, 0x00045F],
    [0x000481, 0x000489],
    [0x0004CE, 0x0004CF],
    [0x00052F, 0x000530],
    [0x000557, 0x00109F],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x00139F],
    [0x0013F6, 0x001C8F],
    [0x001CBB, 0x001CBC],
    [0x001CC0, 0x001DFF],
    [0x001E95, 0x001E9D],
    [0x001EFF, 0x001F07],
    [0x001F10, 0x001F17],
    [0x001F1E, 0x001F27],
    [0x001F30, 0x001F37],
    [0x001F40, 0x001F47],
    [0x001F4E, 0x001F58],
    [0x001F60, 0x001F67],
    [0x001F70, 0x001FB7],
    [0x001FBC, 0x001FC7],
    [0x001FCC, 0x001FD7],
    [0x001FDC, 0x001FE7],
    [0x001FED, 0x001FF7],
    [0x001FFC, 0x002101],
    [0x002103, 0x002106],
    [0x002108, 0x00210A],
    [0x00210E, 0x00210F],
    [0x002113, 0x002114],
    [0x002116, 0x002118],
    [0x00211E, 0x002123],
    [0x00212E, 0x00212F],
    [0x002134, 0x00213D],
    [0x002140, 0x002144],
    [0x002146, 0x002182],
    [0x002184, 0x002BFF],
    [0x002C2F, 0x002C5F],
    [0x002C65, 0x002C66],
    [0x002C73, 0x002C74],
    [0x002C76, 0x002C7D],
    [0x002CE3, 0x002CEA],
    [0x002CEE, 0x002CF1],
    [0x002CF3, 0x00A63F],
    [0x00A66D, 0x00A67F],
    [0x00A69B, 0x00A721],
    [0x00A72F, 0x00A731],
    [0x00A76F, 0x00A778],
    [0x00A787, 0x00A78A],
    [0x00A78E, 0x00A78F],
    [0x00A793, 0x00A795],
    [0x00A7B9, 0x00DBFF],
    [0x00E000, 0x00FF20],
    [0x00FF3B, 0x0103FF],
    [0x010428, 0x0104AF],
    [0x0104D4, 0x010C7F],
    [0x010CB3, 0x01189F],
    [0x0118C0, 0x016E3F],
    [0x016E60, 0x01D3FF],
    [0x01D41A, 0x01D433],
    [0x01D44E, 0x01D467],
    [0x01D482, 0x01D49B],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D4B6, 0x01D4CF],
    [0x01D4EA, 0x01D503],
    [0x01D50B, 0x01D50C],
    [0x01D51D, 0x01D537],
    [0x01D547, 0x01D549],
    [0x01D551, 0x01D56B],
    [0x01D586, 0x01D59F],
    [0x01D5BA, 0x01D5D3],
    [0x01D5EE, 0x01D607],
    [0x01D622, 0x01D63B],
    [0x01D656, 0x01D66F],
    [0x01D68A, 0x01D6A7],
    [0x01D6C1, 0x01D6E1],
    [0x01D6FB, 0x01D71B],
    [0x01D735, 0x01D755],
    [0x01D76F, 0x01D78F],
    [0x01D7A9, 0x01D7C9],
    [0x01D7CB, 0x01E8FF],
    [0x01E922, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Uppercase_Letter}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Uppercase_Letter}"
);
testPropertyEscapes(
  /^\P{General_Category=Lu}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Lu}"
);
testPropertyEscapes(
  /^\P{gc=Uppercase_Letter}+$/u,
  nonMatchSymbols,
  "\\P{gc=Uppercase_Letter}"
);
testPropertyEscapes(
  /^\P{gc=Lu}+$/u,
  nonMatchSymbols,
  "\\P{gc=Lu}"
);
testPropertyEscapes(
  /^\P{Uppercase_Letter}+$/u,
  nonMatchSymbols,
  "\\P{Uppercase_Letter}"
);
testPropertyEscapes(
  /^\P{Lu}+$/u,
  nonMatchSymbols,
  "\\P{Lu}"
);